# NBI メールエイリアス運用ガイド

## 概要

NBI Clearance申請では、ポータルにメールアドレスを登録する必要がある。
顧客ごとに異なるエイリアスを使うことで：
- 「このメールはすでに使われています」エラーを回避
- 誰の案件かメールアドレスだけで即判別
- Gmailを大量作成・管理しなくて済む

## フォーマット

```
nbi.{顧客名}.{YYYYMM}@ph-document.com
```

例：
```
nbi.tanaka.202605@ph-document.com
nbi.sato.202606@ph-document.com
nbi.yamada.202607@ph-document.com
```

→ これら全部が `toshiyuki541218@gmail.com` に届く（Cloudflare Catch-all）

---

## Cloudflare Email Routing 初期設定（1回だけ）

1. [Cloudflare Dashboard](https://dash.cloudflare.com) にログイン
2. **ph-document.com** を選択
3. 左メニュー **「Email」→「Email Routing」**
4. **「Get started」** をクリック
5. Destination email に `toshiyuki541218@gmail.com` を入力 → **「Save」**
6. Gmailに届いた確認メールの **「Verify email address」** をクリック
7. Cloudflareに戻り **「Catch-all address」** を有効化
   - Action: **Send to**
   - Destination: **toshiyuki541218@gmail.com**
8. **「Save」**

設定後は `*@ph-document.com` 宛のメールが全部Gmailに届く。
個別にエイリアスを作成する作業は一切不要。

---

## 日常の使い方

### 新規案件：エイリアス生成

```bash
./scripts/nbi-alias.sh new tanaka
```

出力例：
```
✅ 生成しました
   エイリアス : nbi.tanaka.202605@ph-document.com
   転送先     : info@ph-document.com (Cloudflare Catch-all)
   NBI登録用  : nbi.tanaka.202605@ph-document.com
```

このアドレスをそのままNBIポータルに入力する。

### 一覧確認

```bash
./scripts/nbi-alias.sh list
```

### 案件完了

```bash
./scripts/nbi-alias.sh done nbi.tanaka.202605@ph-document.com
```

ログが `active` → `done` に更新される。

---

## ログファイル

`.nbi-aliases.csv`（リポジトリルートに自動生成、`.gitignore`済み）

| カラム | 内容 |
|--------|------|
| alias | エイリアスアドレス |
| customer | 顧客名（入力値） |
| created_at | 生成日 |
| status | active / done |

---

## NBI ポータルがGmailしか通らない場合

まず `nbi.test.202605@ph-document.com` で1件試す。
もし弾かれた場合は、別途専用Gmailアカウントを検討する。

---

## Cloudflare Email Routing の仕様

- **無料プラン**で利用可能
- Catch-all設定後、エイリアスの個別登録は不要
- MXレコードはCloudflareが自動で追加する
- 送信（返信）はできない（受信専用）。返信はGmailから `info@ph-document.com` を使う
