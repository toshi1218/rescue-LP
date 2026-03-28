#!/bin/bash
# scripts/lint-seo.sh — SEO・エンコーディング自動チェック
# ビルド前に実行して、文字化け・BOM・URL不備を検出する
set -euo pipefail

errors=0

echo "=== SEO / Encoding Lint ==="

# 1. UTF-8 BOM チェック
bom=$(grep -rl $'\xEF\xBB\xBF' pages/ components/ lib/ 2>/dev/null || true)
if [ -n "$bom" ]; then
  echo "ERROR: UTF-8 BOM found in:"
  echo "$bom"
  errors=$((errors + 1))
fi

# 2. 文字化けチェック（よくある mojibake パターンをリテラル検索）
# UTF-8を誤解釈した際に出現する半角カタカナの組み合わせを検出
mojibake=$(grep -Prn '\x{FF66}|\x{FF67}|\x{FF68}|\x{FF69}|\x{FF6A}|\x{FF6B}|\x{FF6C}|\x{FF6D}|\x{FF6E}|\x{FF6F}|\x{FF70}|\x{FF71}|\x{FF72}|\x{FF73}|\x{FF74}|\x{FF75}|\x{FF76}|\x{FF77}|\x{FF78}|\x{FF79}|\x{FF7A}|\x{FF7B}|\x{FF7C}|\x{FF7D}|\x{FF7E}|\x{FF7F}|\x{FF80}|\x{FF81}|\x{FF82}|\x{FF83}|\x{FF84}|\x{FF85}|\x{FF86}|\x{FF87}|\x{FF88}|\x{FF89}|\x{FF8A}|\x{FF8B}|\x{FF8C}|\x{FF8D}|\x{FF8E}|\x{FF8F}|\x{FF90}|\x{FF91}|\x{FF92}|\x{FF93}|\x{FF94}|\x{FF95}|\x{FF96}|\x{FF97}|\x{FF98}|\x{FF99}|\x{FF9A}|\x{FF9B}|\x{FF9C}|\x{FF9D}|\x{FF9E}|\x{FF9F}' pages/ components/ 2>/dev/null || true)
if [ -n "$mojibake" ]; then
  echo "ERROR: Mojibake (half-width katakana) found:"
  echo "$mojibake"
  errors=$((errors + 1))
fi

# 3. JSON-LD URL トレーリングスラッシュ欠け（ページURL）
no_slash=$(grep -rn "url: 'https://ph-document\.com/[^']*[^/]'" pages/ 2>/dev/null || true)
if [ -n "$no_slash" ]; then
  echo "ERROR: JSON-LD URL missing trailing slash:"
  echo "$no_slash"
  errors=$((errors + 1))
fi

# 4. JSON-LD URL ドメイン直後スラッシュ欠け（publisher/author）
no_domain_slash=$(grep -rn "url: 'https://ph-document\.com'" pages/ 2>/dev/null || true)
if [ -n "$no_domain_slash" ]; then
  echo "ERROR: JSON-LD URL missing trailing slash after domain:"
  echo "$no_domain_slash"
  errors=$((errors + 1))
fi

if [ "$errors" -eq 0 ]; then
  echo "All checks passed."
fi

exit "$errors"
