#!/usr/bin/env bash
# One-shot setup script for the tracking Worker.
# Run this from your own terminal (requires interactive Cloudflare login).
#   cd workers/tracking && ./deploy.sh
set -euo pipefail
cd "$(dirname "$0")"

echo "== 1/7: npm install =="
npm install

echo ""
echo "== 2/7: wrangler login =="
echo "ブラウザが開きます。Cloudflareアカウントでログインしてください。"
npx wrangler login

echo ""
echo "== 3/7: D1 データベース作成 =="
echo "既に作成済みの場合はスキップしてOKです（Ctrl+Cで中断し、手動で続きを進めてください）。"
npx wrangler d1 create ph-document-tracking || true
echo ""
echo "⚠️ 上の出力に表示された database_id を wrangler.toml の"
echo "   database_id = \"REPLACE_WITH_D1_ID_AFTER_CREATE\" に貼り付けてください。"
read -rp "貼り付けたら Enter を押して続行... " _

echo ""
echo "== 4/7: D1 スキーマ適用 =="
npx wrangler d1 execute ph-document-tracking --file=./schema.sql --remote

echo ""
echo "== 5/7: R2 バケット作成 =="
npx wrangler r2 bucket create ph-document-tracking-uploads || true

echo ""
echo "== 6/7: KV namespace 作成 =="
npx wrangler kv namespace create RATE_LIMIT || true
echo ""
echo "⚠️ 上の出力に表示された id を wrangler.toml の"
echo "   id = \"REPLACE_WITH_KV_ID_AFTER_CREATE\" に貼り付けてください。"
read -rp "貼り付けたら Enter を押して続行... " _

echo ""
echo "== 7/7: 管理パスワード設定 =="
echo "スタッフ用 /tools/tracking-admin.html のログインパスワードを設定します。"
npx wrangler secret put ADMIN_PASSWORD

echo ""
echo "== デプロイ =="
npx wrangler deploy

echo ""
echo "✅ 完了しました。残りの手動設定:"
echo "  1. Cloudflareダッシュボード → Workers & Pages → ph-document-tracking → Settings → Domains & Routes"
echo "     で tracking.ph-document.com をカスタムドメインとして追加"
echo "  2. https://tracking.ph-document.com/ にアクセスして 'ph-document tracking worker: OK' と表示されればOK"
echo "  3. https://ph-document.com/tools/tracking-admin.html を開き、設定したパスワードでログインして動作確認"
