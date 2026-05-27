#!/usr/bin/env bash
# NBI Email Alias Manager
# 使い方:
#   ./scripts/nbi-alias.sh new <顧客名>       # 新しいエイリアスを生成
#   ./scripts/nbi-alias.sh list               # 使用中のエイリアス一覧
#   ./scripts/nbi-alias.sh done <エイリアス>  # 案件完了マーク

set -euo pipefail

DOMAIN="ph-document.com"
LOG_FILE="$(dirname "$0")/../.nbi-aliases.csv"
SERVICE="nbi"

# ログファイルがなければヘッダー付きで作成
if [[ ! -f "$LOG_FILE" ]]; then
  echo "alias,customer,created_at,status" > "$LOG_FILE"
fi

_normalize_name() {
  # 日本語名をローマ字風に使える文字のみ残す（英数字・ハイフン）
  echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9-]//g' | sed 's/--*/-/g'
}

cmd="${1:-help}"

case "$cmd" in
  new)
    if [[ -z "${2:-}" ]]; then
      echo "使い方: $0 new <顧客名（ローマ字）>" >&2
      exit 1
    fi
    name="$(_normalize_name "$2")"
    ym="$(date +%Y%m)"
    alias_addr="${SERVICE}.${name}.${ym}@${DOMAIN}"
    created="$(date +%Y-%m-%d)"

    # 重複チェック
    if grep -q "^${alias_addr}," "$LOG_FILE" 2>/dev/null; then
      echo "⚠️  すでに存在します: ${alias_addr}"
      exit 1
    fi

    echo "${alias_addr},${2},${created},active" >> "$LOG_FILE"
    echo ""
    echo "✅ 生成しました"
    echo "   エイリアス : ${alias_addr}"
    echo "   転送先     : info@${DOMAIN} (Cloudflare Catch-all)"
    echo "   NBI登録用  : ${alias_addr}"
    echo ""
    ;;

  list)
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo " NBI メールエイリアス一覧"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    awk -F',' 'NR>1 { printf " %-45s %-12s %s\n", $1, $4, $3 }' "$LOG_FILE"
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
    # active → done に更新
    sed -i "s/^${target},\(.*\),active$/${target},\1,done/" "$LOG_FILE"
    echo "✅ 完了マークしました: ${target}"
    ;;

  help|*)
    echo ""
    echo "NBI Email Alias Manager"
    echo "  $0 new <name>     新しいエイリアスを生成（例: $0 new tanaka）"
    echo "  $0 list           使用中エイリアス一覧を表示"
    echo "  $0 done <alias>   案件完了マーク"
    echo ""
    echo "前提: Cloudflare Email Routing で Catch-all を設定済みであること"
    echo "      設定方法: docs/email-alias-setup.md を参照"
    echo ""
    ;;
esac
