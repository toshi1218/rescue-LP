#!/usr/bin/env python3
"""Guard high-impact trust, asset, and form regressions before building."""

from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIRS = ("pages", "components", "lib")
SOURCE_FILES = [
    path
    for dirname in SOURCE_DIRS
    for path in (ROOT / dirname).rglob("*")
    if path.suffix in {".ts", ".tsx"}
]
SOURCE_FILES += [ROOT / "index.html", ROOT / "index.tsx"]

errors: list[str] = []


def text(path: Path) -> str:
    return path.read_text(encoding="utf-8-sig")


combined = "\n".join(text(path) for path in SOURCE_FILES)

for phrase in (
    "USCIS and NVC require Philippine civil documents with DFA Apostille",
    "USCIS requires CENOMAR",
    "IRCC requires DFA Apostille",
    "Home Affairs requires DFA Apostille",
    "UKVI requires DFA Apostille",
    "DFA no longer issues a paper Apostille for PSA documents",
):
    if phrase in combined:
        errors.append(f"unsupported blanket claim remains: {phrase}")

if "noValidate" in combined:
    errors.append("a contact form still disables native required-field validation")

redirects = text(ROOT / "public/_redirects")
if re.search(r"^/\*\s+/(?:en|ja|ko)/index\.html\s+200$", redirects, re.MULTILINE):
    errors.append("wildcard 200 fallback would recreate soft-404 pages")

for stale_asset in ("/logo.png", "/apple-touch-icon.png", "/hero-photo.png"):
    if stale_asset in combined:
        errors.append(f"stale or missing asset reference: {stale_asset}")

# Localized OG cards are supplied by open PR #349/#331; do not duplicate them here.
allowed_pending = {"/og-image-ja.png", "/og-image-ko.png"}
asset_pattern = re.compile(r"[\"'](/[^\"'?]+\.(?:png|webp|jpg|jpeg|svg))[\"']", re.IGNORECASE)
for asset in sorted(set(asset_pattern.findall(combined))):
    if asset in allowed_pending:
        continue
    if not (ROOT / "public" / asset.removeprefix("/")).is_file():
        errors.append(f"referenced public asset does not exist: {asset}")

privacy = text(ROOT / "pages/PrivacyEn.tsx") + text(ROOT / "pages/PrivacyJa.tsx")
for provider in ("Web3Forms", "Anthropic"):
    if provider not in privacy:
        errors.append(f"privacy policy is missing provider disclosure: {provider}")

if "ph-document-analytics-consent" not in text(ROOT / "index.html"):
    errors.append("analytics consent must default before Google tags are configured")

if errors:
    print("Content consistency check failed:")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)

print("Content consistency check passed.")
