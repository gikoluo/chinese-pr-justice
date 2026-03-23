#!/usr/bin/env python3
"""
Batch process event photos: recursive scan, content-based deduplication, compress for web,
optionally delete source tree after success.

Usage:
  python3 scripts/process-event-photo-batch.py

Edit SOURCE_DIR / OUT_DIR / DELETE_SOURCE_AFTER below, or pass env vars:
  EVENT_PHOTO_SOURCE  EVENT_PHOTO_OUT  EVENT_PHOTO_DELETE=1
"""

import os
import shutil
import sys
from pathlib import Path
from typing import Dict, List, Optional

from PIL import Image

# Allow very large camera RAW/JPEG exports (event photos)
Image.MAX_IMAGE_PIXELS = None

# Default: Google Drive download folder in repo (override with EVENT_PHOTO_SOURCE)
_REPO = Path(__file__).resolve().parent.parent
SOURCE_DIR = Path(
    os.environ.get(
        "EVENT_PHOTO_SOURCE",
        str(_REPO / "e-petition" / "drive-download-20260322T231816Z-3-001"),
    )
)
OUT_DIR = Path(
    os.environ.get(
        "EVENT_PHOTO_OUT",
        str(_REPO / "static" / "events" / "event-photos-20260322"),
    )
)
DELETE_SOURCE_AFTER = os.environ.get("EVENT_PHOTO_DELETE", "1") == "1"

FINGERPRINT_SIZE = 32
SIMILARITY_THRESHOLD = 18  # max avg per-pixel diff 0–255 to cluster as duplicate
MAX_LONG_SIDE = 1600
JPEG_QUALITY = 85
PREFIX = "event-20260322"
EXTENSIONS = {".jpg", ".jpeg", ".JPG", ".JPEG", ".png", ".PNG"}


def collect_images(root: Path) -> List[Path]:
    out: List[Path] = []
    for p in root.rglob("*"):
        if p.is_file() and p.suffix in EXTENSIONS:
            out.append(p)
    return sorted(out, key=lambda x: str(x))


def image_fingerprint(path: Path) -> Optional[List[float]]:
    """Lightweight fingerprint: avoid full decode of huge camera JPEGs when possible."""
    try:
        with Image.open(path) as im:
            try:
                im.draft("L", (512, 512))
            except Exception:
                pass
            im = im.convert("L")
            im.thumbnail((512, 512), Image.Resampling.LANCZOS)
            im = im.resize((FINGERPRINT_SIZE, FINGERPRINT_SIZE), Image.Resampling.LANCZOS)
            return list(im.getdata())
    except Exception as e:
        print(f"  Skip {path}: {e}", file=sys.stderr)
        return None


def l1_distance(a: List[float], b: List[float]) -> float:
    n = len(a)
    if n != len(b):
        return float("inf")
    return sum(abs(x - y) for x, y in zip(a, b)) / max(n, 1)


def cluster_by_similarity(
    fingerprints: Dict[str, List[float]], paths: List[str], threshold: float
) -> List[List[str]]:
    n = len(paths)
    if n == 0:
        return []
    thresh = threshold
    assigned = set()
    clusters: List[List[str]] = []
    for i, name in enumerate(paths):
        if name in assigned:
            continue
        fp_i = fingerprints[name]
        cluster = [name]
        assigned.add(name)
        for j in range(i + 1, n):
            other = paths[j]
            if other in assigned:
                continue
            if l1_distance(fp_i, fingerprints[other]) <= thresh:
                cluster.append(other)
                assigned.add(other)
        clusters.append(cluster)
    return clusters


def pick_representative(rel_paths: List[str], source_root: Path) -> str:
    def size_key(rel: str) -> int:
        p = source_root / rel
        return p.stat().st_size if p.exists() else 0
    return max(rel_paths, key=size_key)


def compress_and_save(source_path: Path, out_path: Path, max_long: int, quality: int) -> None:
    with Image.open(source_path) as im:
        try:
            im.draft("RGB", (max_long * 2, max_long * 2))
        except Exception:
            pass
        im = im.convert("RGB")
        w, h = im.size
        if max(w, h) > max_long:
            if w >= h:
                new_w, new_h = max_long, int(h * max_long / w)
            else:
                new_w, new_h = int(w * max_long / h), max_long
            im = im.resize((new_w, new_h), Image.Resampling.LANCZOS)
        out_path.parent.mkdir(parents=True, exist_ok=True)
        im.save(out_path, "JPEG", quality=quality, optimize=True)


def safe_stem(rel: str) -> str:
    return rel.replace("/", "_").replace("\\", "_")


def main() -> None:
    if not SOURCE_DIR.is_dir():
        print(f"Source directory not found: {SOURCE_DIR}", file=sys.stderr)
        sys.exit(1)

    paths = collect_images(SOURCE_DIR)
    if not paths:
        print("No images found.", file=sys.stderr)
        sys.exit(1)

    rel_keys = [str(p.relative_to(SOURCE_DIR)) for p in paths]
    print(f"Found {len(rel_keys)} images under {SOURCE_DIR}", flush=True)

    print("Fingerprinting...", flush=True)
    fingerprints: Dict[str, List[float]] = {}
    for i, p in enumerate(paths):
        if (i + 1) % 50 == 0 or i == 0:
            print(f"  {i + 1}/{len(paths)}", flush=True)
        rel = str(p.relative_to(SOURCE_DIR))
        fp = image_fingerprint(p)
        if fp is not None:
            fingerprints[rel] = fp

    paths_sorted = sorted(fingerprints.keys())
    print(f"Clustering ({len(paths_sorted)} ok, max pixel diff={SIMILARITY_THRESHOLD})...")
    clusters = cluster_by_similarity(fingerprints, paths_sorted, SIMILARITY_THRESHOLD)
    selected = [pick_representative(c, SOURCE_DIR) for c in clusters]
    print(f"Kept {len(selected)} images (dropped {len(paths_sorted) - len(selected)} near-duplicates).")

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Writing to {OUT_DIR} (max side={MAX_LONG_SIDE}px, q={JPEG_QUALITY})...")
    written: List[str] = []
    for i, rel in enumerate(selected, 1):
        src = SOURCE_DIR / rel
        stem = safe_stem(Path(rel).stem)
        out_name = f"{PREFIX}-{i:03d}-{stem}.jpg"
        out_path = OUT_DIR / out_name
        compress_and_save(src, out_path, MAX_LONG_SIDE, JPEG_QUALITY)
        written.append(out_name)
        if i <= 5 or i == len(selected):
            print(f"  {out_name}")

    print(f"Wrote {len(written)} files.")
    print("\nFilenames for EventPhotos.astro (copy array):")
    print("const eventPhotos20260322 = [")
    for w in written:
        print(f"  '{w}',")
    print("];")

    if DELETE_SOURCE_AFTER:
        print(f"\nRemoving source tree: {SOURCE_DIR}")
        shutil.rmtree(SOURCE_DIR)
        print("Done (originals removed).")
    else:
        print("\nSource tree kept (set EVENT_PHOTO_DELETE=1 to remove).")


if __name__ == "__main__":
    main()
