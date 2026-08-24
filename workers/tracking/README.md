# ph-document tracking worker

顧客向け進捗確認ポータルと、書類アップロード受け取りのバックエンド。

- 顧客用ページ: `/ja/tracking/`（`/en/`, `/ko/`）— IGRS Inc.が発行した専用リンクからのみ進捗確認・書類アップロード
- スタッフ用管理画面: `/tools/tracking-admin.html`。Cloudflare Access（Googleログイン）＋管理パスワードの2段階認証で保護

## 構成

- **D1**（`DB`）: 追跡レコード・ステータス履歴・アップロード台帳
- **R2**（`UPLOADS`）: アップロードされた書類ファイルの実体
- **D1**（`rate_limits` テーブル）: 原子的なレート制限
- **Secret** `ADMIN_PASSWORD`: 管理画面の認証（第2要素）
- **Secret** `CF_ACCESS_TEAM_DOMAIN` / `CF_ACCESS_AUD` / `ADMIN_ALLOWED_EMAIL`: Cloudflare Accessの検証用（第1要素）

## 管理画面のアクセス保護（Cloudflare Access + パスワード）

管理画面は2段階で保護する。**どちらか一方だけでは不十分**。

1. **Cloudflare Access**（Googleアカウントログイン）— ページの読み込み自体をゲートする
2. **`ADMIN_PASSWORD`** — Access通過後にもう一段、Worker APIへのBearer認証を求める

### なぜ2段階が必要か（2026-08-21の教訓）

過去に一度、`ADMIN_PASSWORD`だけで運用していた時期があった。この場合、
`/tools/tracking-admin.html`自体は**誰でも（クローラーでも）認証なしに読み込める**ため、
パスワード入力欄を含むHTMLがそのままクロールされ、Google Safe Browsingにフィッシングページとして
誤検知されるリスクがある。同日中に一度この構成を試みて、画面ごと一時停止する事態になった。

これを避けるため、Cloudflare AccessのApplicationは**必ず次の2つのパスの両方**を保護対象に含める:

- `ph-document.com/tools/tracking-admin.html` — **ここが重要**。これを保護し忘れると、
  未認証の訪問者にパスワード入力欄が見えてしまい、上記の問題が再発する。
- `ph-document.com/api/admin/*` — Worker APIへのリクエストに`cf-access-jwt-assertion`ヘッダーを
  自動付与させるため。

Access通過後は、ページ内でさらに`ADMIN_PASSWORD`の入力を求める。Access側の設定ミスや
アカウント乗っ取りだけでは管理APIに到達できないようにするための多層防御。

### Cloudflare Zero Trustダッシュボードでの設定手順

1. [Zero Trust ダッシュボード](https://one.dash.cloudflare.com/) → **Access → Applications → Add an application → Self-hosted**
2. Application name: 任意（例: `ph-document tracking admin`）
3. **Session Duration**: 用途に応じて（例: 24時間）
4. **Public hostname** を2つ追加（同じApplication内に複数ホスト名/パスを追加できる）:
   - `ph-document.com` / パス `/tools/tracking-admin.html`
   - `ph-document.com` / パス `/api/admin/*`
5. **Identity providers**: Google（未設定なら先にZero Trust → Settings → Authenticationで有効化）
6. **Policies**: `Allow` ルールを作成し、Include条件に `Emails` → 許可するGoogleアカウントのメールアドレスを指定
7. 保存後、Application詳細画面に表示される **Application Audience (AUD) Tag** をコピー
8. Zero Trust の **Team Domain**（`⚙️ Settings → Custom Pages` 等に表示、通常 `<チーム名>.cloudflareaccess.com`）を控える
9. 手順7・8の値と、許可したメールアドレスを、後述のGitHubシークレット（`CF_ACCESS_AUD` / `CF_ACCESS_TEAM_DOMAIN` / `TRACKING_ADMIN_EMAIL`）に登録する

設定後、ブラウザで `https://ph-document.com/tools/tracking-admin.html` を開くと、
まずCloudflareのホスト型ログイン画面（Google選択）が表示され、許可済みアカウントでのログイン後に
初めて管理画面のHTMLが読み込まれる。その後、画面内で`ADMIN_PASSWORD`を入力するとAPIが使えるようになる。

顧客ページには追跡番号やPINの手入力欄を表示せず、IGRS Inc.が個別に発行した
フラグメント付き専用リンクから開いた場合のみ検証・アップロード機能を表示する。

## 顧客リンクの期限

顧客の追跡番号とPINは発行から30日で失効する。案件が継続中なら、管理画面から30日延長できる。
既存の追跡データには、最初のデプロイ時に作成日から30日の期限が自動で設定される。

## 初回セットアップ

Cloudflare の認証情報はリポジトリに置いていないため、初回だけ**あなたの操作**が必要です。
やり方は2通りあります。**スマホしか無い場合は A、PCがあるなら B** が簡単です。

### A. スマホのブラウザだけで完結する（GitHub Actions 経由）

ターミナル不要。4ステップです。**②のCloudflare Access設定だけは先に済ませてください**
（後回しにすると、Accessが未設定のままデプロイされ、一時的に管理画面へ到達できなくなります）。

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

**② Cloudflare Zero TrustでAccess Applicationを作る**（上記「Cloudflare Zero Trustダッシュボードでの設定手順」の9ステップを実施し、Team Domain・AUD Tag・許可メールアドレスを控える）

**③ GitHub にシークレットを6つ登録**（リポジトリ → Settings → Secrets and variables → Actions → New repository secret）

| 名前 | 中身 |
|---|---|
| `CLOUDFLARE_API_TOKEN` | ①で作ったトークン |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare のアカウントID |
| `TRACKING_ADMIN_PASSWORD` | 管理画面のログインパスワード（自分で決める・20文字以上のランダム推奨） |
| `CF_ACCESS_TEAM_DOMAIN` | ②で控えたTeam Domain（例: `your-team.cloudflareaccess.com`） |
| `CF_ACCESS_AUD` | ②で控えたApplication Audience (AUD) Tag |
| `TRACKING_ADMIN_EMAIL` | ②で許可したGoogleアカウントのメールアドレス |

**④ ワークフローを実行**（リポジトリ → Actions → **Deploy tracking Worker** → Run workflow → 入力欄に `deploy` と入力 → 実行）

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

スタッフは `https://ph-document.com/tools/tracking-admin.html` から追跡番号を発行し、
発行された専用リンク（`ja/en/ko`の言語別）をお客様に送る。お客様はそのリンクを開くだけで
番号・PINの入力なしに進捗確認と書類アップロードができる。
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
