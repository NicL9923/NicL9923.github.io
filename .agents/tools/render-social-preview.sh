#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/../.." && pwd)"
tools="$root/.agents/tools"
out="$root/public/social-preview.jpg"
tmp="$(mktemp --suffix=.jpg)"
port=8765

cleanup() {
  if [[ -n "${server_pid:-}" ]]; then
    kill "$server_pid" >/dev/null 2>&1 || true
  fi
  playwright-cli close >/dev/null 2>&1 || true
}
trap cleanup EXIT

python3 -m http.server "$port" --directory "$tools" >/dev/null 2>&1 &
server_pid=$!
sleep 0.3

playwright-cli close >/dev/null 2>&1 || true
playwright-cli open "http://127.0.0.1:${port}/social-preview.html"
playwright-cli resize 1200 630
playwright-cli eval '() => document.fonts.ready'
# Viewport screenshot; the page is exactly 1200x630.
playwright-cli screenshot --filename "$tmp" --type jpeg

python3 - "$tmp" "$out" <<'PY'
import sys
from PIL import Image

src, dest = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGB")
if im.size != (1200, 630):
    im = im.resize((1200, 630), Image.Resampling.LANCZOS)
im.save(dest, "JPEG", quality=88, optimize=True, progressive=True)
print(f"wrote {dest} {im.size}")
PY

rm -f "$tmp"
