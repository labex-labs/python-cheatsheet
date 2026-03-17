#!/usr/bin/env python3
"""
Download remote blog images into public/blog, rewrite markdown image links to
project-relative /blog/... paths, and remove broken image references.

Usage:
  python scripts/download-blog-images.py --dry-run
  python scripts/download-blog-images.py
"""

from __future__ import annotations

import argparse
import hashlib
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parent.parent
BLOG_DIR = PROJECT_ROOT / "docs" / "blog"
PUBLIC_BLOG_DIR = PROJECT_ROOT / "public" / "blog"

IMAGE_PATTERN = re.compile(r"(?P<indent>[ \t]*)!\[(?P<alt>[^\]]*)\]\((?P<url>https?://[^)\s]+)\)")
SAFE_CHARS_PATTERN = re.compile(r"[^a-z0-9._-]+")
TIMEOUT_SECONDS = 30


@dataclass(frozen=True)
class RemoteImage:
  url: str
  article_slug: str
  alt_text: str


def slugify(value: str) -> str:
  normalized = SAFE_CHARS_PATTERN.sub("-", value.lower()).strip("-")
  return normalized or "image"


def article_slug_from_path(file_path: Path) -> str:
  return slugify(file_path.stem)


def collect_remote_images() -> tuple[dict[Path, list[RemoteImage]], dict[str, RemoteImage]]:
  per_file: dict[Path, list[RemoteImage]] = defaultdict(list)
  unique_by_url: dict[str, RemoteImage] = {}

  for file_path in sorted(BLOG_DIR.glob("*/*.md")):
    content = file_path.read_text(encoding="utf-8")
    article_slug = article_slug_from_path(file_path)

    for match in IMAGE_PATTERN.finditer(content):
      image = RemoteImage(
        url=match.group("url"),
        article_slug=article_slug,
        alt_text=match.group("alt").strip(),
      )
      per_file[file_path].append(image)
      unique_by_url.setdefault(image.url, image)

  return per_file, unique_by_url


def file_extension_from_response(url: str, content_type: str | None) -> str:
  parsed = urllib.parse.urlparse(url)
  suffix = Path(parsed.path).suffix.lower()
  if suffix in {".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"}:
    return suffix

  if content_type:
    lowered = content_type.lower()
    if "png" in lowered:
      return ".png"
    if "jpeg" in lowered or "jpg" in lowered:
      return ".jpg"
    if "gif" in lowered:
      return ".gif"
    if "webp" in lowered:
      return ".webp"
    if "svg" in lowered:
      return ".svg"

  return ".img"


def target_filename(image: RemoteImage, content_type: str | None) -> str:
  parsed = urllib.parse.urlparse(image.url)
  base_name = Path(parsed.path).stem
  suffix = file_extension_from_response(image.url, content_type)
  safe_name = slugify(base_name)
  digest = hashlib.sha1(image.url.encode("utf-8")).hexdigest()[:8]
  return f"{image.article_slug}-{safe_name}-{digest}{suffix}"


def fetch_image(image: RemoteImage) -> tuple[bytes | None, str | None, str | None]:
  request = urllib.request.Request(
    image.url,
    headers={
      "User-Agent": "python-cheatsheet-image-migrator/1.0",
      "Accept": "image/*,*/*;q=0.8",
    },
  )

  try:
    with urllib.request.urlopen(request, timeout=TIMEOUT_SECONDS) as response:
      body = response.read()
      content_type = response.headers.get("Content-Type")
      return body, content_type, None
  except urllib.error.HTTPError as exc:
    return None, None, f"HTTP {exc.code}"
  except urllib.error.URLError as exc:
    return None, None, str(exc.reason)


def rewrite_markdown(content: str, url_to_local_path: dict[str, str], broken_urls: set[str]) -> str:
  def replace(match: re.Match[str]) -> str:
    url = match.group("url")
    if url in url_to_local_path:
      return f"{match.group('indent')}![{match.group('alt')}]({url_to_local_path[url]})"
    if url in broken_urls:
      return ""
    return match.group(0)

  updated = IMAGE_PATTERN.sub(replace, content)
  updated = re.sub(r"\n{3,}", "\n\n", updated)
  return updated


def main() -> int:
  parser = argparse.ArgumentParser(description=__doc__)
  parser.add_argument("--dry-run", action="store_true", help="scan and report without writing files")
  args = parser.parse_args()

  per_file, unique_by_url = collect_remote_images()
  if not unique_by_url:
    print("No remote blog images found.")
    return 0

  print(f"Found {len(unique_by_url)} unique remote image URLs across {len(per_file)} markdown files.")

  PUBLIC_BLOG_DIR.mkdir(parents=True, exist_ok=True)

  url_to_local_path: dict[str, str] = {}
  broken_urls: set[str] = set()

  for url, image in sorted(unique_by_url.items()):
    body, content_type, error = fetch_image(image)
    if body is None:
      broken_urls.add(url)
      print(f"[broken] {url} ({error})")
      continue

    filename = target_filename(image, content_type)
    relative_path = f"/blog/{filename}"
    url_to_local_path[url] = relative_path

    if args.dry_run:
      print(f"[download] {url} -> {relative_path}")
      continue

    output_path = PUBLIC_BLOG_DIR / filename
    output_path.write_bytes(body)
    print(f"[saved] {url} -> {output_path.relative_to(PROJECT_ROOT)}")

  rewritten_files = 0

  for file_path, images in per_file.items():
    content = file_path.read_text(encoding="utf-8")
    updated = rewrite_markdown(content, url_to_local_path, broken_urls)

    if updated == content:
      continue

    if args.dry_run:
      rewritten_files += 1
      print(f"[rewrite] {file_path.relative_to(PROJECT_ROOT)}")
      continue

    file_path.write_text(updated, encoding="utf-8")
    rewritten_files += 1
    print(f"[updated] {file_path.relative_to(PROJECT_ROOT)}")

  print()
  print(f"Downloaded: {len(url_to_local_path)}")
  print(f"Broken and removable: {len(broken_urls)}")
  print(f"Markdown files changed: {rewritten_files}")

  return 0


if __name__ == "__main__":
  sys.exit(main())
