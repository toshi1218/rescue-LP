#!/bin/bash
# scripts/lint-seo.sh — SEO・エンコーディング自動チェック
# ビルド前に実行して、文字化け・BOM・URL不備を検出する
set -euo pipefail

errors=0

# Auto-detect diff mode: pre-commit (staged changes) vs build (latest commit)
if ! git diff --cached --quiet 2>/dev/null; then
  DIFF_CMD="git diff --cached"
elif git rev-parse HEAD~1 >/dev/null 2>&1; then
  DIFF_CMD="git diff HEAD~1..HEAD"
else
  DIFF_CMD=""
fi

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

# SEO-critical paths to scope diff checks (exclude docs/, README, etc.)
SEO_PATHS="scripts/ pages/ components/ lib/ public/"

# 5. hreflang 削除検知
if [ -n "$DIFF_CMD" ]; then
  hreflang_removed=$($DIFF_CMD -U0 -- $SEO_PATHS 2>/dev/null | grep -c '^-.*hreflang' || true)
  hreflang_added=$($DIFF_CMD -U0 -- $SEO_PATHS 2>/dev/null | grep -c '^+.*hreflang' || true)
  if [ "$hreflang_removed" -gt 0 ] && [ "$hreflang_added" -eq 0 ]; then
    echo "WARNING: hreflang tags are being REMOVED without replacement!"
    echo "  Removed lines: $hreflang_removed"
    echo "  This will break Google's multi-language page associations."
    echo "  Recovery takes 2-4 weeks. Are you sure?"
    errors=$((errors + 1))
  fi
fi

# 6. noindex 追加検知
if [ -n "$DIFF_CMD" ]; then
  noindex_added=$($DIFF_CMD -U0 -- $SEO_PATHS 2>/dev/null | grep -c '^+.*noindex' || true)
  if [ "$noindex_added" -gt 0 ]; then
    echo "WARNING: noindex is being ADDED to pages!"
    echo "  Added lines: $noindex_added"
    echo "  This will remove pages from Google's index. Re-indexing takes 1-2 weeks."
    $DIFF_CMD -U0 -- $SEO_PATHS 2>/dev/null | grep '^+.*noindex' | head -10
    errors=$((errors + 1))
  fi
fi

# 7. sitemap.xml URL 数減少検知
if [ -n "$DIFF_CMD" ] && $DIFF_CMD -- public/sitemap.xml 2>/dev/null | grep -q '^-.*<loc>' 2>/dev/null; then
  urls_removed=$($DIFF_CMD -U0 -- public/sitemap.xml 2>/dev/null | grep -c '^-.*<loc>' || true)
  urls_added=$($DIFF_CMD -U0 -- public/sitemap.xml 2>/dev/null | grep -c '^+.*<loc>' || true)
  if [ "$urls_removed" -gt "$urls_added" ]; then
    net_loss=$((urls_removed - urls_added))
    echo "WARNING: sitemap.xml is losing $net_loss URL(s)!"
    echo "  Removed: $urls_removed, Added: $urls_added"
    echo "  Removing URLs from sitemap reduces crawl coverage."
    errors=$((errors + 1))
  fi
fi

# 8. SEO/LLMO 破壊的変更の検知
if [ -n "$DIFF_CMD" ]; then
  seo_files_changed=$($DIFF_CMD --name-only 2>/dev/null | grep -E '(prerender\.ts|sitemap\.xml|robots\.txt|_redirects|urlMap\.ts|useMeta\.ts|seoDate\.ts|countryConfig\.ts)' || true)
  if [ -n "$seo_files_changed" ]; then
    echo ""
    echo "=== SEO/LLMO Impact Review Required ==="
    echo "The following SEO-critical files are being modified:"
    echo "$seo_files_changed" | sed 's/^/  - /'
    echo ""
    echo "Before committing, verify:"
    echo "  1. SEO: How does this affect Google crawling/indexing/ranking?"
    echo "  2. LLMO: How does this affect LLM understanding (JSON-LD, speakable, AI crawler rules)?"
    echo "  3. Is anything being REMOVED? Removals are far more dangerous than additions."
    echo ""
  fi

  # Detect JSON-LD schema removal
  jsonld_removed=$($DIFF_CMD -U0 -- $SEO_PATHS 2>/dev/null | grep -c '^-.*"@type"' || true)
  jsonld_added=$($DIFF_CMD -U0 -- $SEO_PATHS 2>/dev/null | grep -c '^+.*"@type"' || true)
  if [ "$jsonld_removed" -gt 0 ] && [ "$jsonld_added" -eq 0 ]; then
    echo "WARNING: JSON-LD structured data is being REMOVED!"
    echo "  Removed @type declarations: $jsonld_removed"
    echo "  This affects both Google rich results AND LLM understanding of the site."
    errors=$((errors + 1))
  fi

  # Detect AI crawler rule changes in robots.txt
  ai_crawler_removed=$($DIFF_CMD -U0 -- public/robots.txt 2>/dev/null | grep -c '^-.*\(GPTBot\|Claude\|Perplexity\|Cohere\|Copilot\|Amazonbot\|Google-Extended\)' || true)
  if [ "$ai_crawler_removed" -gt 0 ]; then
    echo "WARNING: AI crawler rules are being REMOVED from robots.txt!"
    echo "  This may block LLMs from accessing the site content."
    errors=$((errors + 1))
  fi
fi

if [ "$errors" -eq 0 ]; then
  echo "All checks passed."
fi

exit "$errors"
