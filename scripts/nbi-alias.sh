#!/usr/bin/env bash
# NBI Email Alias Manager
# 使い方:
#   ./scripts/nbi-alias.sh new <顧客名>       # 新しいエイリアスを生成
#   ./scripts/nbi-alias.sh list               # 使用中のエイリアス一覧
#   ./scripts/nbi-alias.sh done <エイリアス>  # 案件完了マーク
#
# モード設定（下記 MODE を変更）:
#   gmail   → igrs20200601+name.YYYYMM@gmail.com
#   domain  → nbi.name.YYYYMM@ph-document.com

set -euo pipefail

# ── 設定 ────────────────────────────────────────────────
MODE="gmail"                       # "gmail" or "domain"
GMAIL_BASE="igrs20200601"          # Gmail ベースアドレス（@gmail.com の前）
DOMAIN="ph-document.com"           # ドメインモード時のドメイン
# ────────────────────────────────────────────────────────

LOG_FILE="$(dirname "$0")/../.nbi-aliases.csv"

if [[ ! -f "$LOG_FILE" ]]; then
  echo "alias,customer,created_at,status,mode" > "$LOG_FILE"
fi

_normalize_name() {
  echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9-]//g' | sed 's/--*/-/g'
}

_make_alias() {
  local name="$1"
  local ym="$(date +%Y%m)"
  if [[ "$MODE" == "gmail" ]]; then
    echo "${GMAIL_BASE}+${name}.${ym}@gmail.com"
  else
    echo "nbi.${name}.${ym}@${DOMAIN}"
  fi
}

cmd="${1:-help}"

case "$cmd" in
  new)
    if [[ -z "${2:-}" ]]; then
      echo "使い方: $0 new <顧客名（ローマ字）>" >&2
      exit 1
    fi
    name="$(_normalize_name "$2")"
    alias_addr="$(_make_alias "$name")"
    created="$(date +%Y-%m-%d)"

    if grep -q "^${alias_addr}," "$LOG_FILE" 2>/dev/null; then
      echo "⚠️  すでに存在します: ${alias_addr}"
      exit 1
    fi

    echo "${alias_addr},${2},${created},active,${MODE}" >> "$LOG_FILE"

    echo ""
    echo "✅ 生成しました"
    echo "   NBI登録用  : ${alias_addr}"
    if [[ "$MODE" == "gmail" ]]; then
      echo "   受信先     : ${GMAIL_BASE}@gmail.com"
      echo "   注意       : NBI portal が + 記号を受け付けない場合は MODE=domain に切替"
    else
      echo "   受信先     : ${GMAIL_BASE}@gmail.com (Cloudflare → Gmail転送)"
    fi
    echo ""
    ;;

  list)
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo " NBI メールエイリアス一覧"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    awk -F',' 'NR>1 { printf " %-50s %-8s %s\n", $1, $4, $3 }' "$LOG_FILE"
    echo ""
    ;;

  done)
    if [[ -z "${2:-}" ]]; then
      echo "使い方: $0 done <エイリアスアドレス>" >&2
      exit 1
    fi
    target="$2"
    if ! grep -q "^${target}," "$LOG_FILE"; then
      echo "❌ 見つかりません: ${target}" >&2
      exit 1
    fi
    sed -i "s/^${target},\(.*\),active,/\${target},\1,done,/" "$LOG_FILE"
    # sedのエスケープ問題を回避
    python3 -c "
import re, sys
with open('$LOG_FILE', 'r') as f: content = f.read()
content = re.sub(r'^(${target},.+),active,', r'\1,done,', content, flags=re.MULTILINE)
with open('$LOG_FILE', 'w') as f: f.write(content)
"
    echo "✅ 完了マークしました: ${target}"
    ;;

  mode)
    echo "現在のモード: $MODE"
    echo ""
    echo "切り替え方法: スクリプト内 MODE= の値を変更"
    echo "  MODE=gmail   → ${GMAIL_BASE}+name.YYYYMM@gmail.com"
    echo "  MODE=domain  → nbi.name.YYYYMM@${DOMAIN}"
    ;;

  help|*)
    echo ""
    echo "NBI Email Alias Manager  (現在: MODE=${MODE})"
    echo ""
    echo "  $0 new <name>     エイリアス生成（例: $0 new tanaka）"
    echo "  $0 list           一覧表示"
    echo "  $0 done <alias>   案件完了マーク"
    echo "  $0 mode           現在のモード確認"
    echo ""
    if [[ "$MODE" == "gmail" ]]; then
      echo "生成形式: ${GMAIL_BASE}+name.YYYYMM@gmail.com"
      echo "※ NBI portal が + を弾いた場合は MODE=domain に変更してください"
    else
      echo "生成形式: nbi.name.YYYYMM@${DOMAIN}"
      echo "前提: Cloudflare Email Routing Catch-all → ${GMAIL_BASE}@gmail.com"
    fi
    echo ""
    ;;
esac
