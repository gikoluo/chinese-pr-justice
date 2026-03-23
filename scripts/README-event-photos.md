# Event photo batch processing

## `process-event-photo-batch.py`

Recursively scans a folder of camera JPEGs/PNGs, **deduplicates by image content** (32×32 grayscale fingerprint + L1 distance), **resizes** to max long side 1600px, **JPEG quality 85**, writes to `static/events/event-photos-20260322/` (or `EVENT_PHOTO_OUT`), then **removes the source folder** by default.

### Defaults

- **Source:** `e-petition/drive-download-20260322T231816Z-3-001` (override with `EVENT_PHOTO_SOURCE`)
- **Output:** `static/events/event-photos-20260322/`
- **Delete source after success:** yes (`EVENT_PHOTO_DELETE=0` to keep originals)

### After running

1. Regenerate the site manifest if filenames change:
   ```bash
   python3 -c "
   import json, glob
   files = sorted(glob.glob('static/events/event-photos-20260322/*.jpg'))
   names = [p.split('/')[-1] for p in files]
   import pathlib
   pathlib.Path('src/data').mkdir(exist_ok=True)
   open('src/data/eventPhotos20260322.json','w').write(json.dumps(names, indent=2))
   print(len(names))
   "
   ```
2. `EventPhotos.astro` imports `src/data/eventPhotos20260322.json` for the extended gallery.

### Tunables (in script)

- `SIMILARITY_THRESHOLD = 18` — lower = stricter dedup (fewer images kept)
- `MAX_LONG_SIDE`, `JPEG_QUALITY`

Large JPEGs: `Image.MAX_IMAGE_PIXELS = None` and `draft()` + `thumbnail()` are used to avoid loading full 100+ MP images into memory during fingerprinting.
