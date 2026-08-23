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

CUSTOM_DOMAIN="tracking.ph-document.com"

wr() { npx --yes wrangler "$@"; }

echo "== 1/5: npm install =="
npm install --silent

echo ""
echo "== 2/5: Cloudflare ログイン =="
if wr whoami >/dev/null 2>&1; then
  echo "ログイン済みです。スキップします。"
else
  echo "ブラウザが開きます。Cloudflareアカウントでログインしてください。"
  wr login
fi

echo ""
echo "== 3/5: D1 / R2 の作成とスキーマ適用 =="
./provision.sh

echo ""
echo "== 4/6: 管理パスワード（ADMIN_PASSWORD）=="
if wr secret list 2>/dev/null | grep -q ADMIN_PASSWORD; then
  echo "設定済みです。変更する場合は 'npx wrangler secret put ADMIN_PASSWORD' を手動実行してください。"
else
  echo "スタッフ用 /tools/tracking-admin.html のログインパスワードを設定します。"
  echo "（このパスワードだけがお客様の書類を守ります。20文字以上のランダム文字列を推奨）"
  wr secret put ADMIN_PASSWORD
fi

echo ""
echo "== 5/6: Cloudflare Access（Googleログインのゲート）=="
echo "先にCloudflare Zero Trustダッシュボードで、ph-document.com/tools/tracking-admin.html と"
echo "ph-document.com/api/admin/* の両方を保護するAccess Applicationを作成しておいてください"
echo "（README.mdの『管理画面のアクセス保護』章を参照）。作成済みなら、その値を以下で登録します。"
if wr secret list 2>/dev/null | grep -q CF_ACCESS_TEAM_DOMAIN; then
  echo "設定済みです。変更する場合は 'npx wrangler secret put CF_ACCESS_TEAM_DOMAIN' 等を手動実行してください。"
else
  echo "Team Domain（例: your-team.cloudflareaccess.com）:"
  wr secret put CF_ACCESS_TEAM_DOMAIN
  echo "Application の Audience (AUD) タグ:"
  wr secret put CF_ACCESS_AUD
  echo "管理画面へのログインを許可するGoogleアカウントのメールアドレス:"
  wr secret put ADMIN_ALLOWED_EMAIL
fi

echo ""
echo "== 6/6: デプロイ =="
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
echo "  2. https://ph-document.com/tools/tracking-admin.html を開く（先にCloudflare AccessのGoogleログインを求められる）→ 設定したパスワードでログイン"
echo "  3. 「追跡番号を発行」→ 表示された追跡番号とPINで https://ph-document.com/ja/tracking/ を開き、"
echo "     進捗タイムラインの表示と、テスト用画像/PDFのアップロードを確認"
echo "  4. 管理画面の詳細から、アップロードしたファイルがダウンロードできることを確認"
echo ""
echo "※ お客様に送るURL: https://ph-document.com/ja/tracking/ （EN: /en/tracking/ ・KO: /ko/tracking/）"
echo "  追跡番号とPINは管理画面の「追跡番号を発行」で1件ずつ発行して伝えてください。"
