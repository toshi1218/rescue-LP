# NBI メールエイリアス運用ガイド

## 概要

NBI Clearance申請ではポータルにメールアドレスを登録する必要がある。
顧客ごとに異なるエイリアスを使うことで：
- 「このメールはすでに使われています」エラーを回避
- 誰の案件かメールアドレスだけで即判別
- 受信は全件 `igrs20200601@gmail.com` 1箇所に集約

---

## 2つのモードと選び方

### モードA：Gmail + エイリアス（推奨スタート）

```
igrs20200601+tanaka.202605@gmail.com
igrs20200601+sato.202606@gmail.com
```

- **設定不要**。今すぐ使える。
- 全部 `igrs20200601@gmail.com` に届く。
- ⚠️ NBI portal が `+` 記号を弾く場合はモードBへ切替。

### モードB：ph-document.com ドメインエイリアス

```
nbi.tanaka.202605@ph-document.com
nbi.sato.202606@ph-document.com
```

- Cloudflare Email Routing (無料) を5分設定するだけ。
- 完全にユニーク、`+` を弾くサイトでも通る。
- 転送先を `igrs20200601@gmail.com` に設定すれば同じ受信箱に届く。

**判断フロー**:
1. まずモードAで試す
2. NBI portal が `+` を弾いたら → モードBに切替

---

## モードBの Cloudflare 設定（5分）

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → ph-document.com
2. **Email → Email Routing**
3. **Get started** をクリック
4. Destination email: `igrs20200601@gmail.com` → **Save**
5. Gmailに届いた確認メールの **Verify email address** をクリック
6. **Catch-all address** を有効化
   - Action: **Send to**
   - Destination: **igrs20200601@gmail.com**
7. **Save**

設定後は `nbi.名前.年月@ph-document.com` 宛のメールが全部Gmailに届く。

---

## スクリプトの使い方

### 初期設定（モード選択）

`scripts/nbi-alias.sh` の上部を編集：

```bash
MODE="gmail"    # Gmail + エイリアス（デフォルト）
# MODE="domain" # ph-document.com エイリアス
```

### 新規案件：エイリアス生成

```bash
./scripts/nbi-alias.sh new tanaka
```

出力例（gmailモード）：
```
✅ 生成しました
   NBI登録用  : igrs20200601+tanaka.202605@gmail.com
   受信先     : igrs20200601@gmail.com
```

このアドレスをそのままNBIポータルに入力する。

### 一覧確認

```bash
./scripts/nbi-alias.sh list
```

### 案件完了

```bash
./scripts/nbi-alias.sh done igrs20200601+tanaka.202605@gmail.com
```

---

## エイリアスのフォーマット

| モード | 形式 |
|--------|------|
| gmail | `igrs20200601+{名前}.{YYYYMM}@gmail.com` |
| domain | `nbi.{名前}.{YYYYMM}@ph-document.com` |

例：2026年5月、田中さん
- gmail: `igrs20200601+tanaka.202605@gmail.com`
- domain: `nbi.tanaka.202605@ph-document.com`

---

## ログファイル

`.nbi-aliases.csv`（リポジトリルートに自動生成、`.gitignore`済み）

顧客データのためgit管理外。このファイルはローカルのみ保存される。
