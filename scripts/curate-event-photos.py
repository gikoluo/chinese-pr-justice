#!/usr/bin/env python3
"""
Curate event photos: content-based deduplication + compression for web.
- Compares images by perceptual content (resized grayscale fingerprint), not by file hash.
- Clusters similar images and keeps one representative per cluster.
- Compresses and resizes selected images for website use.
"""

import os
import sys
from pathlib import Path
from typing import Dict, List, Optional

from PIL import Image

# Config
SOURCE_DIR = Path(os.path.expanduser("~/Downloads/3.13-Photo"))
OUT_DIR = Path(__file__).resolve().parent.parent / "static" / "events" / "march-13-2026"
FINGERPRINT_SIZE = 32  # resize to NxN grayscale for comparison
SIMILARITY_THRESHOLD = 18  # max average per-pixel difference (0-255) to consider "same"; lower = stricter
MAX_LONG_SIDE = 1600  # pixels for web
JPEG_QUALITY = 85
EXTENSIONS = {".jpg", ".jpeg", ".JPG", ".JPEG", ".png", ".PNG"}


def image_fingerprint(path: Path) -> Optional[List[float]]:
    """Compute a small grayscale fingerprint for content comparison."""
    try:
        with Image.open(path) as im:
            im = im.convert("L").resize((FINGERPRINT_SIZE, FINGERPRINT_SIZE), Image.Resampling.LANCZOS)
            return list(im.getdata())
    except Exception as e:
        print(f"  Skip {path.name}: {e}", file=sys.stderr)
        return None


def l1_distance(a: List[float], b: List[float]) -> float:
    n = len(a)
    if n != len(b):
        return float("inf")
    return sum(abs(x - y) for x, y in zip(a, b)) / max(n, 1)


def cluster_by_similarity(fingerprints: Dict[str, List[float]], threshold: float) -> List[List[str]]:
    """Group filenames into clusters of similar content (greedy)."""
    names = list(fingerprints.keys())
    n = len(names)
    if n == 0:
        return []
    # l1_distance returns average per-pixel difference in 0-255
    thresh = threshold
    assigned = set()

    clusters: List[List[str]] = []
    for i, name in enumerate(names):
        if name in assigned:
            continue
        fp_i = fingerprints[name]
        cluster = [name]
        assigned.add(name)
        for j in range(i + 1, n):
            other = names[j]
            if other in assigned:
                continue
            if l1_distance(fp_i, fingerprints[other]) <= thresh:
                cluster.append(other)
                assigned.add(other)
        clusters.append(cluster)
    return clusters


def pick_representative(filenames: List[str], source_dir: Path) -> str:
    """Pick one file per cluster: prefer larger file size (often better quality)."""
    def size_key(f: str) -> int:
        p = source_dir / f
        return p.stat().st_size if p.exists() else 0
    return max(filenames, key=size_key)


def compress_and_save(source_path: Path, out_path: Path, max_long: int, quality: int) -> None:
    with Image.open(source_path) as im:
        im = im.convert("RGB")
        w, h = im.size
        if max(w, h) > max_long:
            if w >= h:
                new_w, new_h = max_long, int(h * max_long / w)
            else:
                new_w, new_h = int(w * max_long / h), max_long
            im = im.resize((new_w, new_h), Image.Resampling.LANCZOS)
        im.save(out_path, "JPEG", quality=quality, optimize=True)


def main() -> None:
    if not SOURCE_DIR.is_dir():
        print(f"Source directory not found: {SOURCE_DIR}", file=sys.stderr)
        sys.exit(1)

    files = sorted(
        f.name for f in SOURCE_DIR.iterdir()
        if f.is_file() and f.suffix in EXTENSIONS
    )
    if not files:
        print("No images found.", file=sys.stderr)
        sys.exit(1)

    print(f"Loading and fingerprinting {len(files)} images...")
    fingerprints: Dict[str, List[float]] = {}
    for name in files:
        fp = image_fingerprint(SOURCE_DIR / name)
        if fp is not None:
            fingerprints[name] = fp

    print(f"Clustering by content similarity (max pixel diff={SIMILARITY_THRESHOLD})...")
    clusters = cluster_by_similarity(fingerprints, SIMILARITY_THRESHOLD)
    selected = [pick_representative(c, SOURCE_DIR) for c in clusters]
    print(f"Selected {len(selected)} images from {len(files)} (removed {len(files) - len(selected)} similar).")

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Compressing to {OUT_DIR} (max side={MAX_LONG_SIDE}px, quality={JPEG_QUALITY})...")
    for i, name in enumerate(selected, 1):
        src = SOURCE_DIR / name
        stem = Path(name).stem
        out_name = f"march13-{i:02d}-{stem}.jpg"
        out_path = OUT_DIR / out_name
        compress_and_save(src, out_path, MAX_LONG_SIDE, JPEG_QUALITY)
        print(f"  {out_name}")

    print("Done. Add these under /events/march-13-2026/ in the site.")


if __name__ == "__main__":
    main()
