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

このリポジトリの CI/エージェント環境には Cloudflare の認証情報がないため、
D1/R2/KV の作成と `wrangler deploy` は**あなた自身のターミナルで**実行する必要があります。

**1本のスクリプトで完結**（`npm install` → ログイン → D1/R2/KV作成 → スキーマ適用 → secret設定 → デプロイまで）:

```bash
cd workers/tracking
./deploy.sh
```

操作が必要なのは次の2点だけです。

1. `wrangler login` でブラウザが開くので Cloudflare アカウントでログイン
2. 管理パスワード（`ADMIN_PASSWORD`）を入力（`/tools/tracking-admin.html` のログインに使う値）

D1・KV の ID は `wrangler.toml` へ**自動で書き戻される**ため、コピペ作業はありません。
`tracking.ph-document.com` のカスタムドメイン紐付けも `wrangler.toml` の `routes` 設定により
`wrangler deploy` が同時に行います（DNSレコードも自動作成）。

スクリプトは冪等です。途中で失敗しても、直してからもう一度 `./deploy.sh` を実行すれば、
作成済みのリソースはスキップして続きから進みます。

デプロイ後は `wrangler.toml` に実IDが入った状態になります。この差分はコミットして構いません
（D1/KV の ID は秘密情報ではありません。秘密なのは `ADMIN_PASSWORD` だけで、これは
Cloudflare の secret に保存され、リポジトリには入りません）。

### 手動で1ステップずつ行う場合

```bash
cd workers/tracking
npm install
npx wrangler login
npx wrangler d1 create ph-document-tracking          # → database_id を wrangler.toml に貼る
npx wrangler d1 execute ph-document-tracking --file=./schema.sql --remote
npx wrangler r2 bucket create ph-document-tracking-uploads
npx wrangler kv namespace create RATE_LIMIT           # → id を wrangler.toml に貼る
npx wrangler secret put ADMIN_PASSWORD
npx wrangler deploy                                   # routes 設定によりカスタムドメインも紐付く
```

## 稼働確認

```bash
curl https://tracking.ph-document.com/
# → ph-document tracking worker: OK
```

これが返れば Worker は稼働しています。返らない場合は DNS 伝播待ち（数分）か、
カスタムドメインが紐付いていない可能性があります（`npx wrangler deployments list` で確認）。

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
