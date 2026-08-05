#!/usr/bin/env bash
# workers/tracking/deploy.sh
#
# tracking Worker のセットアップ〜本番公開までを1コマンドで行う。
# Cloudflare の対話ログインが必要なため、ユーザーの端末で実行する。
#
#   cd workers/tracking && ./deploy.sh
#
# 何度実行しても安全（冪等）。作成済みリソースはスキップし、生成された ID は
# wrangler.toml に自動で書き戻すので、コピペ作業は不要。
set -euo pipefail
cd "$(dirname "$0")"

D1_NAME="ph-document-tracking"
R2_BUCKET="ph-document-tracking-uploads"
KV_BINDING="RATE_LIMIT"
CUSTOM_DOMAIN="tracking.ph-document.com"

wr() { npx --yes wrangler "$@"; }

# wrangler の JSON 出力から1件を探してフィールドを取り出す。
# 出力にログ行が混ざっても拾えるよう、最初の [ ... ] だけを切り出してパースする。
#   引数: <検索キー> <検索値> <取り出すキー(カンマ区切り)> <exact|includes>
pick_json_field() {
  node -e '
    let s = "";
    process.stdin.on("data", (d) => (s += d)).on("end", () => {
      const m = s.match(/\[[\s\S]*\]/);
      if (!m) process.exit(1);
      let rows;
      try { rows = JSON.parse(m[0]); } catch { process.exit(1); }
      const [matchKey, matchVal, outKeys, mode] = process.argv.slice(1);
      const hit = rows.find((r) => {
        const v = String(r[matchKey] ?? "");
        return mode === "includes" ? v.includes(matchVal) : v === matchVal;
      });
      if (!hit) process.exit(1);
      for (const k of outKeys.split(",")) {
        if (hit[k]) { process.stdout.write(String(hit[k])); process.exit(0); }
      }
      process.exit(1);
    });
  ' "$@"
}

toml_value() { grep -E "^$1[[:space:]]*=" wrangler.toml | head -1 | sed -E 's/.*= *"(.*)"/\1/'; }

echo "== 1/8: npm install =="
npm install --silent

echo ""
echo "== 2/8: Cloudflare ログイン =="
if wr whoami >/dev/null 2>&1; then
  echo "ログイン済みです。スキップします。"
else
  echo "ブラウザが開きます。Cloudflareアカウントでログインしてください。"
  wr login
fi

echo ""
echo "== 3/8: D1 データベース =="
if [ "$(toml_value database_id)" = "REPLACE_WITH_D1_ID_AFTER_CREATE" ]; then
  wr d1 create "$D1_NAME" >/dev/null 2>&1 || echo "（既に存在するため作成をスキップ）"
  if d1_id=$(wr d1 list --json 2>/dev/null | pick_json_field name "$D1_NAME" uuid,database_id exact); then
    sed -i.bak -E "s|^database_id *=.*|database_id = \"$d1_id\"|" wrangler.toml && rm -f wrangler.toml.bak
    echo "✅ database_id を wrangler.toml に書き込みました: $d1_id"
  else
    echo "❌ D1 の database_id を自動取得できませんでした。"
    echo "   'npx wrangler d1 list' の出力を見て、wrangler.toml の database_id を手動で設定し、再実行してください。"
    exit 1
  fi
else
  echo "設定済みです（database_id = $(toml_value database_id)）。スキップします。"
fi

echo ""
echo "== 4/8: D1 スキーマ適用 =="
wr d1 execute "$D1_NAME" --file=./schema.sql --remote
echo "✅ テーブル作成完了（CREATE TABLE IF NOT EXISTS のため再実行しても安全）"

echo ""
echo "== 5/8: R2 バケット =="
wr r2 bucket create "$R2_BUCKET" 2>/dev/null || echo "（既に存在するため作成をスキップ）"

echo ""
echo "== 6/8: KV namespace =="
if [ "$(toml_value id)" = "REPLACE_WITH_KV_ID_AFTER_CREATE" ]; then
  wr kv namespace create "$KV_BINDING" >/dev/null 2>&1 || echo "（既に存在するため作成をスキップ）"
  if kv_id=$(wr kv namespace list 2>/dev/null | pick_json_field title "$KV_BINDING" id includes); then
    sed -i.bak -E "s|^id *=.*|id = \"$kv_id\"|" wrangler.toml && rm -f wrangler.toml.bak
    echo "✅ KV namespace の id を wrangler.toml に書き込みました: $kv_id"
  else
    echo "❌ KV namespace の id を自動取得できませんでした。"
    echo "   'npx wrangler kv namespace list' の出力を見て、wrangler.toml の id を手動で設定し、再実行してください。"
    exit 1
  fi
else
  echo "設定済みです（id = $(toml_value id)）。スキップします。"
fi

echo ""
echo "== 7/8: 管理パスワード（ADMIN_PASSWORD）=="
if wr secret list 2>/dev/null | grep -q ADMIN_PASSWORD; then
  echo "設定済みです。変更する場合は 'npx wrangler secret put ADMIN_PASSWORD' を手動実行してください。"
else
  echo "スタッフ用 /tools/tracking-admin.html のログインパスワードを設定します。"
  echo "（このパスワードだけがお客様の書類を守ります。20文字以上のランダム文字列を推奨）"
  wr secret put ADMIN_PASSWORD
fi

echo ""
echo "== 8/8: デプロイ =="
echo "wrangler.toml の routes 設定により $CUSTOM_DOMAIN も同時に紐付けます。"
if ! wr deploy; then
  echo ""
  echo "❌ デプロイに失敗しました。"
  echo "   カスタムドメインの紐付けで失敗する場合（ph-document.com が別アカウントのゾーンの場合など）は、"
  echo "   wrangler.toml の routes = [...] の3行をコメントアウトして再実行し、"
  echo "   Cloudflareダッシュボード → Workers & Pages → ph-document-tracking →"
  echo "   Settings → Domains & Routes から $CUSTOM_DOMAIN を追加してください。"
  exit 1
fi

echo ""
echo "✅ デプロイ完了。この順で動作確認してください:"
echo "  1. curl https://$CUSTOM_DOMAIN/"
echo "     → 'ph-document tracking worker: OK' が返れば Worker 稼働中（DNS伝播に数分かかる場合あり）"
echo "  2. https://ph-document.com/tools/tracking-admin.html を開き、設定したパスワードでログイン"
echo "  3. 「追跡番号を発行」→ 表示された追跡番号とPINで https://ph-document.com/ja/tracking/ を開き、"
echo "     進捗タイムラインの表示と、テスト用画像/PDFのアップロードを確認"
echo "  4. 管理画面の詳細から、アップロードしたファイルがダウンロードできることを確認"
echo ""
echo "※ お客様に送るURL: https://ph-document.com/ja/tracking/ （EN: /en/tracking/ ・KO: /ko/tracking/）"
echo "  追跡番号とPINは管理画面の「追跡番号を発行」で1件ずつ発行して伝えてください。"
