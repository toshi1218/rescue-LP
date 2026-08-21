# ph-document tracking worker

顧客向け進捗確認ポータルと、書類アップロード受け取りのバックエンド。

- 顧客用ページ: `/ja/tracking/`（`/en/`, `/ko/`）— IGRS Inc.が発行した専用リンクからのみ進捗確認・書類アップロード
- スタッフ用管理画面: `/tools/tracking-admin.html` — Cloudflare Access + 管理パスワードの二重認証

## 構成

- **D1**（`DB`）: 追跡レコード・ステータス履歴・アップロード台帳
- **R2**（`UPLOADS`）: アップロードされた書類ファイルの実体
- **D1**（`rate_limits` テーブル）: 原子的なレート制限
- **Secrets**: `ADMIN_PASSWORD`（第二認証）、`CF_ACCESS_TEAM_DOMAIN` / `CF_ACCESS_AUD` / `ADMIN_ALLOWED_EMAIL`（Cloudflare Access検証）

## 管理画面の保護

Cloudflare Zero Trustで次の2パスを個別に保護する。

- `ph-document.com/tools/tracking-admin.html`: 管理画面本体
- `ph-document.com/api/admin/*`: 管理API

どちらも許可メールアドレスのみ通す。管理APIはさらにAccess JWTの署名・有効期限・Audience・
メールアドレスをWorker内で検証し、その後 `ADMIN_PASSWORD` も照合する。Accessを無効にした状態で
管理画面を本番公開しないこと。

顧客ページには追跡番号やPINの手入力欄を表示せず、IGRS Inc.が個別に発行した
フラグメント付き専用リンクから開いた場合のみ検証・アップロード機能を表示する。

## 顧客リンクの期限

顧客の追跡番号とPINは発行から30日で失効する。案件が継続中なら、管理画面から30日延長できる。
既存の追跡データには、最初のデプロイ時に作成日から30日の期限が自動で設定される。

## 初回セットアップ

Cloudflare の認証情報はリポジトリに置いていないため、初回だけ**あなたの操作**が必要です。
やり方は2通りあります。**スマホしか無い場合は A、PCがあるなら B** が簡単です。

### A. スマホのブラウザだけで完結する（GitHub Actions 経由）

ターミナル不要。3ステップです。

**① Cloudflare で API トークンを作る**（dash.cloudflare.com → 右上アイコン → Profile → API Tokens → Create Token → Create Custom Token）

必要な権限（すべて Account スコープ、ゾーンのみ Zone スコープ）:

| 種類 | 項目 | 権限 |
|---|---|---|
| Account | Workers Scripts | Edit |
| Account | Workers R2 Storage | Edit |
| Account | D1 | Edit |
| Zone | Workers Routes | Edit |
| Zone | DNS | Edit |

Zone は `ph-document.com` を指定（`tracking.ph-document.com` のDNSレコード作成に必要）。
Account ID は Cloudflare ダッシュボードの Workers & Pages 画面の右側に表示されている英数字。

**② GitHub にシークレットを6つ登録**（リポジトリ → Settings → Secrets and variables → Actions → New repository secret）

| 名前 | 中身 |
|---|---|
| `CLOUDFLARE_API_TOKEN` | ①で作ったトークン |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare のアカウントID |
| `TRACKING_ADMIN_PASSWORD` | 管理画面のログインパスワード（自分で決める・20文字以上のランダム推奨） |
| `CF_ACCESS_TEAM_DOMAIN` | Zero Trustのチームドメイン（例: `example.cloudflareaccess.com`） |
| `CF_ACCESS_AUD` | `/api/admin/*` 用AccessアプリのApplication Audience (AUD) |
| `TRACKING_ADMIN_EMAIL` | Accessで許可する管理者メールアドレス |

**③ ワークフローを実行**（リポジトリ → Actions → **Deploy tracking Worker** → Run workflow → 入力欄に `deploy` と入力 → 実行）

D1/R2 の作成、スキーマ適用、パスワード設定、デプロイ、カスタムドメイン紐付け、
稼働確認まで自動で走ります。完了後の Summary に案内URLが出ます。
2回目以降も同じ手順で再実行でき、作成済みのリソースはスキップされます。

### B. PCのターミナルで実行する

**1本のスクリプトで完結**（`npm install` → ログイン → D1/R2作成 → スキーマ適用 → secret設定 → デプロイまで）:

```bash
cd workers/tracking
./deploy.sh
```

操作が必要なのは次の2点だけです。

1. `wrangler login` でブラウザが開くので Cloudflare アカウントでログイン
2. 管理API用パスワード（`ADMIN_PASSWORD`）を入力

D1 の ID は `wrangler.toml` へ**自動で書き戻される**ため、コピペ作業はありません。
`tracking.ph-document.com` のカスタムドメイン紐付けも `wrangler.toml` の `routes` 設定により
`wrangler deploy` が同時に行います（DNSレコードも自動作成）。

スクリプトは冪等です。途中で失敗しても、直してからもう一度 `./deploy.sh` を実行すれば、
作成済みのリソースはスキップして続きから進みます。

デプロイ後は `wrangler.toml` に実IDが入った状態になります。この差分はコミットして構いません
（D1 の ID は秘密情報ではありません。秘密なのは `ADMIN_PASSWORD` だけで、これは
Cloudflare の secret に保存され、リポジトリには入りません）。

### 手動で1ステップずつ行う場合

```bash
cd workers/tracking
npm install
npx wrangler login
npx wrangler d1 create ph-document-tracking          # → database_id を wrangler.toml に貼る
npx wrangler d1 execute ph-document-tracking --file=./schema.sql --remote
npx wrangler r2 bucket create ph-document-tracking-uploads
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

管理画面はCloudflare Accessで許可されたスタッフだけが開ける。既存の顧客専用リンクは引き続き利用できる。
顧客が追跡ページを直接開いた場合、番号・PIN入力欄は表示せず、担当者から届いた
専用リンクの利用を案内する。

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
