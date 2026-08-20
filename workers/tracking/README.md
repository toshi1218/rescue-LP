# ph-document tracking worker

顧客向け進捗確認ポータルと、書類アップロード受け取りのバックエンド。

- 顧客用ページ: `/ja/tracking/`（`/en/`, `/ko/`）— 追跡番号＋PINで進捗確認・書類アップロード
- スタッフ用管理画面: `/tools/tracking-admin.html`（検索非掲載・パスワード保護）

## 構成

- **D1**（`DB`）: 追跡レコード・ステータス履歴・アップロード台帳
- **R2**（`UPLOADS`）: アップロードされた書類ファイルの実体
- **D1**（`rate_limits` テーブル）: 原子的なレート制限
- **Secret** `ADMIN_PASSWORD`: 管理画面の認証

## 管理画面の二段階保護

管理APIは、管理パスワードに加えてCloudflare AccessのJWTを検証する。Cloudflare Zero Trustで
ph-document.com/api/admin/* を対象にSelf-hosted applicationを作成し、
GoogleをIdentity Providerとして、許可ポリシーを管理者のメールアドレス1件に限定する。

GitHub Actionsには次の3つもRepository secretとして登録する。

| Secret | 値 |
|---|---|
| CF_ACCESS_TEAM_DOMAIN | Cloudflare Access team domain（例: your-team.cloudflareaccess.com） |
| CF_ACCESS_AUD | 作成したAccess applicationのAudience (AUD) tag |
| TRACKING_ADMIN_EMAIL | Googleログインを許可する管理者メールアドレス |

管理者は、最初に管理画面の「Cloudflare Accessでログイン」を開いてGoogleログインしてから、
管理パスワードを入力する。

顧客・管理者のブラウザ通信は `https://ph-document.com/api/*` に集約する。
`tracking.ph-document.com` はWorkerの稼働確認用として残す。

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

**② GitHub にシークレットを3つ登録**（リポジトリ → Settings → Secrets and variables → Actions → New repository secret）

| 名前 | 中身 |
|---|---|
| `CLOUDFLARE_API_TOKEN` | ①で作ったトークン |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare のアカウントID |
| `TRACKING_ADMIN_PASSWORD` | 管理画面のログインパスワード（自分で決める・20文字以上のランダム推奨） |

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
2. 管理パスワード（`ADMIN_PASSWORD`）を入力（`/tools/tracking-admin.html` のログインに使う値）

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
