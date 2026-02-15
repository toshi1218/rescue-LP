# フィリピン書類取得代行センター (Rescue LP)

フィリピンのPSA出生証明書、結婚証明書、NBI、アポスティーユ認証の取得代行サービスのランディングページです。

## 技術スタック

- React 19
- TypeScript
- Vite
- Tailwind CSS

## 開発手順

1. 依存関係のインストール
   ```bash
   npm install
   ```

2. 開発サーバーの起動
   ```bash
   npm run dev
   ```

3. ビルド（本番用ファイル生成）
   ```bash
   npm run build
   ```

## Cloudflare Pages へのデプロイ手順

### 方法1: GitHub連携（推奨）

以下のコマンドで、このプロジェクトをGitHubリポジトリ（rescue-LP）にプッシュしてください。

```bash
# 1. 変更をステージング
git add .

# 2. 変更をコミット
git commit -m "Initial commit"

# 3. リモートリポジトリを設定（まだの場合）
git remote remove origin 2> /dev/null || true
git remote add origin https://github.com/toshi1218/rescue-LP.git

# 4. GitHubへプッシュ
git push -u origin main
```

その後、Cloudflare Dashboardから以下の設定を行います。

1. Cloudflare Dashboardにログインし、「Workers & Pages」>「Pages」を選択
2. 「Gitに接続」をクリックし、`rescue-LP` リポジトリを選択
3. ビルド設定で以下を入力（プリセットで「Vite」を選択すると自動入力されます）
   - **フレームワーク プリセット**: Vite
   - **ビルド コマンド**: `npm run build`
   - **ビルド出力ディレクトリ**: `dist`
4. 「保存してデプロイ」をクリック

### 方法2: 直接アップロード
1. ローカルで `npm run build` を実行
2. 生成された `dist` フォルダをCloudflare Pagesのアップロード画面にドラッグ＆ドロップ
