# SEO サイト全死リスク総点検 + 凍結後 TODO

**作成日**: 2026-04-14
**凍結期間**: 2026-04-01 ~ 2026-04-29 (最短) ~ 2026-05-13 (最長)
**次の判断ポイント**: 2026-04-23 (hreflang 再追加から 3 週間)

---

## 背景

ph-document.com は過去に 2 度「サイト全死」を経験:
1. **リダイレクト無限ループ** → ホームページ 1 ヶ月死亡
2. **hreflang 全削除 (PR #159, 2026-03-29)** → impressions 120→4、回復に 1 ヶ月見込み

同じパターンの再発を防ぐため、全コードベースを 3 レイヤー（リダイレクト・インデクシング・ビルド/デプロイ）で監査した結果を以下にまとめる。

---

## 1. CRITICAL — サイト全死を引き起こしうるリスク

### 1-A. prerender.ts に per-page エラーハンドリングがない
- **場所**: `scripts/prerender.ts:1619-1645`
- **現状**: `for (const route of routes)` ループ内に try-catch なし。1 ページのレンダーが throw すると残り 109 ページすべてが生成されない
- **発動条件**: React コンポーネントの import エラー、依存 missing、メモリ不足
- **結果**: `dist/` に 10 ページしかない状態で Cloudflare が deploy → 100 ページが消滅
- **修正**: ループ内に try-catch を追加。失敗ページはログ + スキップし、閾値（5 ページ以上失敗）超えたら build 全体を失敗させる

### 1-B. prerender 失敗時、SPA フォールバックが "200 OK + 空ページ" を返す
- **場所**: `public/_redirects:228-230`
- **現状**: `dist/ja/cenomar/index.html` が存在しない場合、Cloudflare は `/ja/index.html`（SPA シェル）を 200 で返す
- **結果**: Google は「200 = ページ存在」と判断し、空コンテンツでインデックス → ランキング消滅。ステータスコード 200 なので異常検知不可能
- **修正**: prerender 後に `dist/` 内のファイル数を検証するスクリプトを追加。`routes.length` と実ファイル数が不一致なら build 失敗

### 1-C. sitemap が「ルート配列」から生成され、実ファイルの存在を検証しない
- **場所**: `scripts/prerender.ts:1666-1714`
- **現状**: `generateSitemap()` は `routes[]` 配列をループして XML を生成。`dist/` に実ファイルが存在するか確認しない
- **結果**: prerender が途中で死んでも sitemap には全 104 URL が記載 → Google が存在しない URL をクロール → クロールバジェット浪費 + ソフト 404 蓄積
- **修正**: sitemap 生成前に各 `route.outFile` の存在を `fs.existsSync()` で検証。存在しない URL は sitemap から除外 + 警告

### 1-D. lint-seo.sh の hreflang 削除検知が事実上機能していない
- **場所**: `scripts/lint-seo.sh:43-56`
- **現状**: `git diff --cached` でステージング済み diff を検査。しかし `npm run build` はコミット後に実行されるため、`--cached` は空 → チェック素通り
- **結果**: hreflang 削除が build 時に検知されない（3/29 の事故パターンの再発防止ゲートが機能していない）
- **修正**: `--cached` に加え `HEAD~1..HEAD` も検査するか、pre-commit hook として実行

---

## 2. HIGH — 特定ページ群が死ぬリスク

### 2-A. client-side hreflang 全削除→再追加（hydration 中の一時消失）
- **場所**: `lib/useMeta.ts:29-31`
- **現状**: React hydration 時に prerender が注入した hreflang を全削除してから client-side で再追加する
- **結果**: Googlebot が JS 実行中のタイミングで hreflang のないページを見る可能性
- **修正**: server-rendered hreflang は保持し、client-side は差分のみ更新する設計に変更

### 2-B. urlMap.ts と prerender.ts routes[] の同期が保証されない
- **場所**: `lib/urlMap.ts` (44 mapping) vs `scripts/prerender.ts` routes[]
- **現状**: 新ページを urlMap に追加しても routes[] に追加忘れ → prerender されない → SPA フォールバック (1-B) に該当
- **修正**: build 時に urlMap の全キーが routes[] に含まれるかバリデーション

### 2-C. noindex の事故的拡散を検知する仕組みがない
- **場所**: `scripts/prerender.ts:1536-1541`
- **現状**: route 定義に `noindex: true` を書くだけでインデックスから消える。lint-seo.sh は新規追加のみ検知
- **結果**: マージコンフリクト解消時に noindex フラグが意図せず残る等で、重要ページがインデックスから消失
- **修正**: build 時に noindex ページ数をカウントし、前回 build からの増減を警告

### 2-D. `/en/f-6-philippines-documents/` の hreflang reciprocity 違反
- **場所**: `scripts/prerender.ts` f-6 route 定義
- **現状**: KO ページは EN を hreflang alternate に指すが、EN ページは hreflang を出していない
- **結果**: Google が reciprocity 違反を検出し、hreflang シグナルを無視する
- **修正**: EN f-6 ページに `koCanonical` を追加し reciprocity を修復

---

## 3. MEDIUM — SEO を劣化させるリスク

### 3-A. sitemap lastmod が全ページ同一日付
- **場所**: `scripts/prerender.ts:1699` → `SEO_DATE_ISO` 一律
- **影響**: Google がどのページが本当に更新されたか判断できない → クロール効率低下
- **修正**: 各ページの実更新日を route 定義に持たせ、sitemap に反映

### 3-B. JSON-LD dateModified が build 日固定
- **場所**: prerender.ts 内の JSON-LD 生成
- **影響**: 3-A と同じ。可視 HTML の lastUpdated とも不整合の可能性
- **修正**: 3-A と合わせて個別日付化

### 3-C. 301 リダイレクトがブラウザキャッシュにロック
- **場所**: `public/_redirects` 全体（全 301）
- **影響**: URL 構造を変更した場合、ブラウザキャッシュの 301 が数ヶ月残る
- **対策**: 301 は正しいが、今後 URL 構造変更は極めて慎重に行う（実質不可逆）

### 3-D. 旧 URL のインデックス残存
- **場所**: `/psa-birth-certificate-cost/`, `/cenomar-guide/` 等
- **影響**: 旧 URL と新 URL が検索結果で競合しシグナル分散
- **対策**: Search Console URL 削除ツール + 301 の維持

---

## 4. 凍結後 TODO（優先順位付き）

### Phase A: 防御インフラ（SEO コンテンツ無変更、凍結明け直後に実施可能）

| # | タスク | リスク対応 | ファイル | 状態 |
|---|--------|-----------|---------|------|
| A1 | prerender.ts に per-page try-catch 追加 | 1-A | `scripts/prerender.ts` | ✅ 完了 (PR #200) |
| A2 | prerender 後のファイル数検証スクリプト追加 | 1-B, 1-C | `scripts/prerender.ts` | ✅ 完了 (PR #200, `validateBuild()`) |
| A3 | sitemap 生成前に実ファイル存在チェック追加 | 1-C | `scripts/prerender.ts` | ✅ 完了 (PR #200) |
| A4 | lint-seo.sh を pre-commit hook 化 + diff auto-detect | 1-D | `scripts/lint-seo.sh`, `.githooks/pre-commit` | ✅ 完了 (2026-04-23) |
| A5 | noindex ページ数カウント検証を lint-seo.sh に追加 | 2-C | `scripts/lint-seo.sh` | ✅ 完了 (2026-04-23, ベースライン 5 / 閾値 7) |
| A6 | urlMap.ts と routes[] の整合性バリデーション追加 | 2-B | `scripts/prerender.ts` | ✅ 完了 (2026-04-23, `validateUrlMap()`) |

**pre-commit hook のインストール手順（clone 後 1 回だけ）**:

```bash
git config core.hooksPath .githooks
```

これで `git commit` 時に自動で `scripts/lint-seo.sh` が実行され、hreflang 削除・noindex 追加・sitemap URL 減少などを検知してブロックする。緊急時のみ `git commit --no-verify` で bypass 可能（非推奨）。

### Phase B: SEO コンテンツ変更（Search Console 回復確認後、段階的に）

| # | タスク | リスク対応 | 備考 |
|---|--------|-----------|------|
| B1 | Search Console で hreflang 回復確認 | — | 判断ポイント: 4/23 (3 週間後) |
| B2 | 回復しない場合の追加調査 | — | canonical 競合, content quality |
| B3 | `/en/f-6/` hreflang reciprocity 修正 | 2-D | 1 ページのみ |
| B4 | lastUpdated 個別日付化 (1-2 ページテスト) | 3-A, 3-B | cenomar, psa-birth-cert から |
| B5 | 旧 URL インデックス残存対応 | 3-D | Search Console URL 削除 |
| B6 | useMeta.ts hreflang 再設計 (差分更新) | 2-A | SPA 遷移の品質向上 |
| B7 | **PSA 単品プラン（birth cert / CENOMAR / NBI 単品）を料金ページに追加** | 新規 | 受注データ40%が PSA系なのに料金表示なし。`components/Pricing.tsx:7-141` + JA/KO 版。**SEO 影響大**: 料金構造変更 → JSON-LD `Service`/`Product` schema 変更 → Google の価格認識再評価 (2-4週)。EN `/en/pricing/` で先行 → 2週間 Search Console 観測 → JA/KO 展開。出典: 受注/問い合わせ分析 (4-24-1-birth-certificate-optimized-mitten.md) |
| B8 | **クレカ決済バッジを CTA 近くに追加（Stripe 既存実装の可視性向上）** | 新規 | 現状 Stripe 表記は Pricing ページのみ (`pages/PricingEn.tsx:64`, `pages/PricingKo.tsx:175`)。Footer/Hero CTA 付近に「Pay by credit card · Visa/MC/AMEX」バッジ追加で受注ハードル低下狙い。**SEO 影響小〜中**: 商業シグナル（"credit card", "Visa" 等）が複数ページに広がるため、ページ意図 (informational vs transactional) の Google 認識が変動する可能性。EN Footer 1箇所で先行テスト → 2週間観測 → 展開。出典: 受注分析 + ユーザー判断 (4-24) |


### Phase C: CI/CD 強化（Phase A 完了後）

| # | タスク | 備考 |
|---|--------|------|
| C1 | GitHub Actions で SEO 破壊的変更を PR 上でブロック | hreflang 削除, noindex 追加, sitemap URL 減少 |
| C2 | deploy 前の prerender 完全性チェック (manifest.json) | Cloudflare Pages build command に組み込み |

---

## 5. Phase E: EN ページ コンテンツ日本語バイアス修正（凍結対象外・即時可能）

**背景**: EN ページは JA ページをベースに作られたため、英語圏OFW向けではない内容が混入している。
SEO 構造（hreflang/canonical/sitemap）には触れないコンテンツ文言の修正のため、凍結ルール対象外。

| # | ページ | 問題 | 状態 |
|---|--------|------|------|
| E1 | `/en/cenomar/` (`pages/CenomarGuideEn.tsx`) | 本文・FAQに「Japan spouse visa」が筆頭、「配偶者ビザ」日本語混入（L203） | ⬜ 未着手 |
| E2 | `/en/psa-birth-certificate-cost/` | Japan向け説明が主軸になっている可能性 | ⬜ 未着手（E1確認後） |
| E3 | その他ENページ | 同様のバイアスを順次確認・修正 | ⬜ 未着手（E2確認後） |

**修正方針**:
- 国別セクションの順序を USA・Canada・Australia・UK・UAE 中心に組み替える
- 日本語テキスト（配偶者ビザ等）を除去
- Japan セクションは残すが、優先度を下げ日本語テキストを除去
- `useMeta()` title/description・JSON-LD・hreflang は変更しない

**着手順**: E1 → E2 → E3 を連続実施してよい（コンテンツ文言のみの変更のため2週間待ち不要）

---

## 6. Phase F: GSC データに基づく CTR 改善（凍結明け 4/30 から即実施可能）

**調査日**: 2026-04-26
**データソース**: GSC Pages タブ（28日間）

### インフラ確認結果（2026-04-26 curl 検証）

| URL | HTTP ステータス | 結果 |
|-----|--------------|------|
| `/kika-shinsei-guide/` → `/ja/kika-shinsei-guide/` | 301 ✅ | 正常 |
| `/nbi-clearance/` → `/en/nbi-clearance/` | 301 ✅ | 正常 |
| `/company/` → `/en/company/` | 301 ✅ | 正常 |
| `/cenomar-guide/` → `/ja/cenomar/` | 301 ✅ | 正常 |
| `/nbi-clearance-guide/` → `/ja/nbi-clearance/` | 301 ✅ | 正常 |
| `/jp/` → `/ja/` | 301 ✅ | 正常 |
| `/ja/psa-shussei-cost`（スラッシュなし）→ `/ja/psa-shussei-cost/` | 301 ✅ | 正常 |

→ **全リダイレクト正常**。GSC に残る旧 URL のインプレッション（`/kika-shinsei-guide/` 51、`/nbi-clearance/` 24 等）はインデックスキャッシュのラグ。現時点で対処不要。

**`/ja/psa-shussei-cost`（スラッシュなし）問題**: GSC で 71 impr / pos 3.5 と正規 URL より高い位置に表示。301 は正常稼働中なので、Google が 301 を処理すれば自動解消する見込み。

---

### title / description 改善案（4/30 から適用）

**優先度: 最高** — `/en/psa-birth-certificate-cost/` (578 impr / 0.2% CTR / pos 9.1)

```
現在: PSA Birth Certificate Fee Philippines 2026 — PHP 365 + Apostille
改善: PSA Birth Certificate Cost [2026]: PHP 365 — Retrieve & Ship Worldwide
```

```
現在: PSA Birth Certificate fee: PHP 365 per copy (2026). Total with DFA Apostille + DHL international shipping from USD $349. No hidden fees.
改善: PSA Birth Certificate costs PHP 365/copy. We retrieve, apostille, and ship to your door from US$349 all-in. No return trip needed. Free quote.
```

変更理由: "fee" (情報収集意図) → "Cost" + "Retrieve & Ship Worldwide" (サービス意図)。"No return trip needed" はOFWの主要ペインポイントを直接突く。

---

**優先度: 高** — `/en/cenomar/`（高インプレッション・低 CTR）

```
現在: What Is CENOMAR? Meaning, How to Get It & Costs [2026]
改善: CENOMAR Philippines [2026] — Get It Without Going Back Home
```

```
現在: CENOMAR = Certificate of No Marriage Record, issued by PSA Philippines. Required for K-1, spouse visa & marriage abroad. We retrieve it — no trip needed.
改善: CENOMAR (Certificate of No Marriage Record) from PSA Philippines. Required for K-1 fiancé visa, CR-1, and marriage abroad. We retrieve + apostille + ship. Free consult.
```

変更理由: "What Is CENOMAR?" は informational 意図のタイトル。サービスページとして "Get It Without Going Back Home" で transactional 意図を明示。"Free consult" 追加で CTA。

---

**優先度: 中** — `/en/document-checklist-by-visa/`（低 CTR）

descriptionの "Japan spouse visa" を除去し、グローバル OFW 向けに整理：

```
現在: Which Philippine documents do you need? Complete checklist by visa type: K-1, CR-1/IR-1, Canada spousal sponsorship, Australia partner visa, UK spouse visa, Japan spouse visa. CENOMAR, PSA, NBI — all explained.
改善: Which Philippine documents do you need? Complete checklist: K-1, CR-1/IR-1, Canada spousal sponsorship, Australia partner visa, UK spouse visa, Japan. CENOMAR, PSA, NBI Clearance — all explained.
```

---

**優先度: 中** — `/ja/haigusha-visa-shorui/`（date が古い・低 CTR）

```
現在タイトル: 配偶者ビザに必要な書類チェックリスト【2026年3月版】フィリピン人配偶者の在留資格認定証明書申請
改善: 配偶者ビザに必要な書類チェックリスト【${SEO_YEAR_MONTH_JA}】フィリピン人配偶者の在留資格認定証明書申請
```

`SEO_YEAR_MONTH_JA` 変数化済みの場合は既に自動更新。`prerender.ts` の title が文字列リテラルなら変数に変える。

---

### 実装方法（4/30 に実施）

変更対象: `scripts/prerender.ts` の各 route の `title` / `description` フィールド

1. `/en/psa-birth-certificate-cost/` を先行適用（L524–525）
2. 2週間 Search Console で CTR 変化を観測
3. 回復確認後に `/en/cenomar/` を適用

**SEO リスク**: 低〜中。title/description 変更は Google のインデックス済み情報の更新を促すが、コンテンツ本体は変わらないため順位への悪影響は限定的。ただし一時的な fluctuation は想定内（1-2週）。

---

## 7. 検証方法

### Phase A の検証
1. `npm run build` を実行し、prerender が全ページ正常に完了することを確認
2. 意図的に 1 ページのコンポーネントを壊して build → per-page try-catch がエラーをログしつつ他のページは正常に完了することを確認
3. `dist/` 内のファイル数が `routes.length` と一致することを確認
4. hreflang 削除 diff を作って `git commit` → pre-commit hook がブロックすることを確認

### Phase B の検証
1. Search Console Performance レポートで impressions 推移を週次確認
2. 各変更後 2 週間は Search Console で効果観測、次の変更前にデータ確認

---

## 重要な制約

- **SEO 凍結**: 2026-04-01 ~ 2026-04-29 (最短) ~ 2026-05-13 (最長)
- **Phase A は凍結中でも実施可能**: lint-seo.sh 修正や prerender.ts のエラーハンドリング追加は SEO コンテンツを変更しないため、Google への影響ゼロ
- **Phase B は凍結明け後**: SEO コンテンツ (hreflang, noindex, dates) に触れるため、Search Console の回復確認後に段階的に実施
- **CLAUDE.md ルール**: SEO 変更は 1-2 ページずつ、2 週間の観察期間を設ける
