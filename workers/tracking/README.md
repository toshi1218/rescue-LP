# ph-document tracking worker

顧客向け進捗確認ポータルと、書類アップロード受け取りのバックエンド。

- 顧客用ページ: `/ja/tracking/`（`/en/`, `/ko/`）— 追跡番号＋PINで進捗確認・書類アップロード
- スタッフ用管理画面: `/tools/tracking-admin.html`（検索非掲載・パスワード保護）

## 構成

- **D1**（`DB`）: 追跡レコード・ステータス履歴・アップロード台帳
- **R2**（`UPLOADS`）: アップロードされた書類ファイルの実体
- **KV**（`RATE_LIMIT`）: レート制限
- **Secret** `ADMIN_PASSWORD`: 管理画面の認証

## 初回セットアップ（ユーザー側の手動デプロイ）

```bash
cd workers/tracking
npm install

# 1. D1 データベース作成 → 出力された database_id を wrangler.toml に貼る
npx wrangler d1 create ph-document-tracking
npx wrangler d1 execute ph-document-tracking --file=./schema.sql --remote

# 2. R2 バケット作成
npx wrangler r2 bucket create ph-document-tracking-uploads

# 3. KV 作成 → 出力された id を wrangler.toml に貼る
npx wrangler kv namespace create RATE_LIMIT

# 4. 管理画面パスワードを設定
npx wrangler secret put ADMIN_PASSWORD

# 5. デプロイ
npx wrangler deploy
```

デプロイ後、Cloudflare ダッシュボードで `tracking.ph-document.com` をこの Worker のカスタムドメインに紐付ける。

## 運用フロー

1. スタッフが `/tools/tracking-admin.html` を開き、管理パスワードでログイン
2. 「追跡番号を発行」→ 発行された **追跡番号＋PIN** を顧客に伝える
3. 顧客は `/ja/tracking/` で番号＋PINを入力 → 進捗確認・書類アップロード
4. スタッフは管理画面でステータスを更新（申込受付 → 申請中 → … → お届け完了）、アップロードされた書類をダウンロード

## エンドポイント

| メソッド | パス | 用途 | 認証 |
|---|---|---|---|
| POST | `/api/admin/create` | 追跡番号発行 | ADMIN |
| GET | `/api/admin/list` | 一覧 | ADMIN |
| GET | `/api/admin/detail/:code` | 詳細 | ADMIN |
| POST | `/api/admin/status` | ステータス更新 | ADMIN |
| GET | `/api/admin/download/:code/:uploadId` | 書類ダウンロード | ADMIN |
| POST | `/api/verify` | 顧客の進捗確認 | code+PIN |
| POST | `/api/upload` | 顧客の書類アップロード | code+PIN |

## 制限

- アップロード: JPG / PNG / WebP / HEIC / PDF、1ファイル15MB、1依頼あたり最大10件
- レート制限: verify 10回 / upload 15回（10分・IP+code単位）
