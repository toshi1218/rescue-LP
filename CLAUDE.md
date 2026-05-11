# CLAUDE.md — Project Rules for AI Assistants

## Project Overview

ph-document.com is a multilingual (EN/JA/KO) Philippine document service site built with Vite + React, pre-rendered to static HTML via `scripts/prerender.ts`.

## SEO Safety Rules

### SEO変更の危険度レベル（触るな危険度）

| レベル | 名称 | 頻度 | 対象 |
|--------|------|------|------|
| 🚨 **レベル1** | 激ヤバゾーン | サイトリニューアル等の非常時のみ | URLパス・ドメイン変更 |
| ⚠️ **レベル2** | 取扱注意ゾーン | 言語追加・ページ統廃合時のみ | hreflang・canonical・301リダイレクト・robots.txt・noindex |
| 🟡 **レベル3** | 定期メンテゾーン | 数週間〜数ヶ月に1回 | title・H1・meta description・グローバルナビリンク |
| 🟢 **レベル4** | 毎日ウェルカムゾーン | 毎日・何度でもOK | 本文テキスト・新規ページ追加・内部リンク追加・画像とalt属性 |

**基本方針**: 構造（レベル1・2）は固め、中身（レベル3・4）を磨き続ける。

- **レベル1**: 公開済みURLを変更するとゼロからの評価になる。絶対に変更しない。
- **レベル2**: Googleがサイト構造を理解するための指示書。設定ミスで重要ページが検索結果から消滅しうる。一度正しく設定したら言語追加・ページ統廃合以外では触らない。
- **レベル3**: 変更後はGoogleの反応を見るために最低2週間〜1ヶ月は様子を見る。頻繁な変更は順位不安定化の原因になる。
- **レベル4**: Googleは最新で有益な情報を高く評価する。ここは事故ることはほぼなく、むしろプラスに働く。

---

**SEO-destructive changes** include modifications to: hreflang, canonical, noindex, robots.txt, sitemap.xml, `_redirects`, or `scripts/prerender.ts` route configs.

### Before making any SEO-destructive change:

1. **Never say "SEOへの影響はない" (no SEO impact)** — always list concrete risks and potential ranking impact
2. **Analyze the impact**: explain how the change affects Google's understanding of the site (crawling, indexing, ranking signals)
3. **Distinguish between adding and removing**: removing existing SEO settings (hreflang, canonical, indexed pages) is far more dangerous than adding new ones — Google has already built its index around the current state
4. **Warn about recovery time**: SEO changes take 2-4 weeks to reflect in Google. Removing and re-adding causes compounded delays

### hreflang rules:

- **Never delete hreflang tags** as long as corresponding pages exist in other languages
- hreflang must be present in **both** HTML `<head>` and `sitemap.xml`
- Always include `x-default` pointing to the English version
- `shouldGenerateHreflang()` in `prerender.ts` controls which pages get hreflang — do not bypass this logic

### noindex rules:

- Adding `noindex` removes pages from Google's index — always confirm with the user before adding
- Removing `noindex` requires re-indexing which takes 1-2 weeks
- Never batch-add noindex to more than 2 pages without user confirmation

### Verification rules:

When verifying any change (code review, PR review, pre-deploy check), do NOT only verify that the code works correctly. **Always also verify the impact on SEO and LLMO (LLM Optimization)**:

1. **SEO impact check**: Will this change affect how Google crawls, indexes, or ranks the site? Consider: hreflang relationships, canonical URLs, structured data (JSON-LD), meta tags, internal link structure, page load performance (Core Web Vitals)
2. **LLMO impact check**: Will this change affect how LLMs (ChatGPT, Perplexity, Claude, etc.) understand and cite the site? Consider: structured data accuracy, content clarity, speakable markup, DefinedTermSet schema, robots.txt AI crawler rules
3. **Never say "SEOへの影響はない"** — instead, list concrete risks even if you believe they are low. If the risk is genuinely low, say "低リスク: ○○の理由で影響は限定的" rather than "影響なし"
4. **For removals/deletions**: always explain what Google/LLMs have already learned from the existing state and how removing it will force re-evaluation (2-4 week recovery window)

### Change management:

- SEO-related changes must be **incremental** — test on 1-2 pages first, observe Search Console for 2 weeks, then apply to all pages
- After a major SEO fix, observe a **4-week change freeze** before making further SEO modifications
- Never make multiple SEO-destructive changes in the same day

### SEO変更の実装手順（Claude Code向け）:

SEO関連ファイル（`title`・`meta description`・hreflang・canonical・JSON-LD・sitemap・robots.txt等）を変更する実装タスクを受けた場合：

1. **スコープを確認する**: ユーザーが対象ページを明示していない場合は、実装前に「どのページに適用しますか？」と必ず確認すること
2. **デフォルトは1〜2ページ**: 明示的に「全ページ」「すべて」と指示されない限り、テスト対象の1〜2ページのみに適用すること
3. **完了後に案内する**: 実装後、「残りのページへの適用は2週間後にSearch Consoleで効果を確認してから別タスクとして依頼してください」と必ず伝えること
4. **非SEO変更は対象外**: フォーム・UI・コンテンツ文言のみの変更はこのルール対象外（制限なく全ページ適用してよい）

## Future Content Tasks (凍結明け以降)

### EN ページのコンテンツ日本語バイアス修正

**背景**: ENページは元々JAページをベースに作られたため、英語圏向けではない内容が混入している。

**具体的な問題**:
- 英語ページ内に日本語テキスト（例: 「配偶者ビザ」）が混入している
- Japan向けのビザ・婚姻手続き説明が英語ページの主軸になっている
- 本来のターゲット（米国・カナダ・オーストラリア・UAE・マレーシア等の海外在住フィリピン人OFW）には無関係な情報が「雑音」になっている

**やること**:
- ENページを日本語ページの翻訳ではなく、グローバルOFW向けのコンテンツとして独立して書き直す
- 日本語テキストの混入を除去する
- 国別セクションの優先順位をUSA・Canada・Australia・UK・UAE中心に組み替える

**実装ルール**:
- これはコンテンツ文言の変更であり、SEO構造（hreflang・canonical等）には触れない
- 1ページずつ実施し、2週間Search Consoleで効果を確認してから次のページへ
- 着手順: `/en/cenomar/` → `/en/psa-birth-certificate-cost/` → 他ENページ
- **開始可能時期: 即時可能**（コンテンツ文言のみの変更のため、SEO凍結対象外）
- SEO構造（Phase B: hreflang reciprocity修正・lastmod個別化等）は 2026-04-30（凍結明け）以降

## 2026-04-26 セッションサマリー（GSC分析・凍結対応）

### 完了したこと

1. **GSC データ分析**（3ヶ月/28日/7日/24h × 全体/Japan）
   - 3/28-3/30 hreflang 全削除事故からの回復状況: 約30-50%回復（impressions ~33-58/day vs 事故前 ~120/day）
   - 直近7日が28日平均より悪化（58→33/日）の原因分析: 統計ノイズ・hreflang echo phase・JSバンドル肥大・4/22の Footer 7コミット連発による全サイト再評価が複合
   - GSC Pages タブ分析（83ページ）で問題ページ特定

2. **B+C 実装** （PR `claude/wait-for-next-5q8fO`、コミット `72443b3`）
   - **B (EN日本語バイアス除去)**: `pages/UsVisaDocsEn.tsx` の関連リンクから "Japan spouse visa" 訴求を CENOMAR サービスに差し替え
   - **C (CWV最適化)**: `components/FloatingChatWidget.tsx` の mount を `requestIdleCallback` でアイドル時に遅延（hydration 直後の余計な re-render を回避）

3. **インフラ検証**（curl で本番確認、2026-04-26）
   - 旧URL全リダイレクト正常: `/kika-shinsei-guide/`、`/nbi-clearance/`、`/company/`、`/cenomar-guide/`、`/nbi-clearance-guide/`、`/jp/` すべて 301 ✅
   - `/ja/psa-shussei-cost`（スラッシュなし）→ `/ja/psa-shussei-cost/` 301 正常 ✅
   - GSC に残るインプレッションは Google インデックスキャッシュラグで、対処不要

4. **CTR改善案ドラフト** （`docs/seo-todo-post-freeze.md` Phase F に保存、コミット `728f776`）
   - `/en/psa-birth-certificate-cost/`（578 impr / 0.2% CTR / pos 9.1）が最重要
   - 4/30 凍結明けに段階適用する title/description 案を全 5 ページ分作成済み

### やれなかった・凍結明け（2026-04-30以降）にやること

**最優先（4/30 当日に着手可能）**:

1. **`/en/psa-birth-certificate-cost/` の title/description 改善を先行適用**
   - 場所: `scripts/prerender.ts:524-525`
   - 詳細: `docs/seo-todo-post-freeze.md` Phase F 参照
   - 適用後 2 週間 Search Console で CTR 観測 → 効果確認後に次ページ展開
   - **同日に複数ページ変更しないこと**（CLAUDE.md ルール）

2. **`/ja/psa-ecertificate-nihon/` を sitemap.xml に追加**
   - 4/25 にページは追加済みだが sitemap 未反映
   - `npm run build` で自動再生成される（`prerender.ts` が sitemap を再構築）
   - 同時に `urlMap.ts` の整合性確認

**凍結明け以降の段階展開（Phase F の残り、各 2 週間観察期間）**:

3. **`/en/cenomar/` JSON-LD の Japan 参照を除去**
   - `pages/CenomarGuideEn.tsx:25` description から "Japan" を削除
   - `pages/CenomarGuideEn.tsx:32` areaServed から 'JP' を削除
   - 本文 Japan セクションは 2026-04-27 に削除済み。JSON-LD のみ残存

4. `/en/cenomar/` の title を informational から transactional 表現に変更
4. `/en/document-checklist-by-visa/` description から "Japan spouse visa" を除去（グローバル OFW 向け整理）
5. `/ja/haigusha-visa-shorui/` の title 内固定日付を `SEO_YEAR_MONTH_JA` 変数化

**Phase B の残課題（`docs/seo-todo-post-freeze.md` Phase B 参照）**:

6. `/en/f-6-philippines-documents/` の hreflang reciprocity 修正（KO は EN を指すが EN は出していない）
7. sitemap lastmod の個別日付化（現状全ページ同一日付）
8. JSON-LD dateModified の個別化
9. `useMeta.ts` の hreflang 再設計（hydration 中の一時消失問題）
10. PSA 単品プラン追加（受注の 40% が PSA 系なのに料金表示なし）
11. クレカ決済バッジを CTA 近くに追加（Stripe 既存実装の可視性向上）

**継続観測**:

- 4/30 まで impressions が ~120/day ベースラインに戻るか週次確認
- 戻らない場合は canonical 競合・content quality を追加調査（Phase B2）

---

## 2026-05-03 セッションサマリー（GSC分析・インフラ検証・最終診断）

### 検証結果（curl で本番確認）

| 検証項目 | 結果 |
|---------|------|
| sitemap.xml | 114 URL・hreflang en/ja/ko/x-default 全出力 ✅ |
| /ja/cenomar/ hreflang | 3言語+x-default 正常 ✅ |
| canonical | self-canonical 正しく設定 ✅ |
| trailing slash | スラッシュなし→あり 301 正常 ✅ |
| robots.txt | クローラー・AIbot 全許可 ✅ |

**インフラは完全に健全。現在の構造にバグはない。**

### 最終診断

- **事故**: 3/29〜3/30 にhreflangをHTML・sitemapから全削除、4/2に復旧（3日間消えた）
- **打撃**: 前後10日間の40+コミット連発が重なり、Googleが「構造不安定サイト」と判定
- **現状**: Google インデックス ~35件（Bing 99件と大幅乖離）、impressions はピーク比 10〜25%
- **見通し**: 7月末（事故から4ヶ月）までに 70〜80% 回復が期待値

### 今やること（3つのみ）

1. **GSCで主要ページを手動「インデックス登録リクエスト」**
   - `/ja/cenomar/`（0クリック/55インプレ）
   - `/ja/gaimen-kirikae-guide/`（0クリック/47インプレ）
   - `/ja/psa-shussei-cost/`（pos 1.24 なのに 0クリック）
2. **GSCで sitemap.xml を再送信**（削除→再登録で強制再クロール）
3. **`/en/psa-birth-certificate-cost/` の title/description 改善**（Phase F、1ページのみ）

### 絶対にやってはいけないこと（回復完了まで）

- hreflang・canonical・URL構造・noindex・robots.txt に一切触らない
- 同一日に複数ページの SEO 変更をしない
- Footer など全サイト共通コンポーネントへの連続コミットを避ける
  （4/22 の Footer 7連続コミットが Google の全サイト再評価を誘発した可能性あり）

---

## Build & Deploy

```bash
npm run build    # runs lint-seo.sh → vite build → prerender.ts
```

- Pre-render generates static HTML in `dist/` with SEO metadata baked in
- Sitemap is auto-generated by `prerender.ts`
- Deployed on Cloudflare Pages

## Key Files

| File | Purpose |
|------|---------|
| `scripts/prerender.ts` | Static HTML generation, hreflang injection, sitemap generation |
| `scripts/lint-seo.sh` | Pre-build SEO validation |
| `lib/useMeta.ts` | Client-side meta tag updates |
| `lib/urlMap.ts` | EN-JA URL mapping for hreflang |
| `lib/seoDate.ts` | Centralized SEO date constants |
| `public/sitemap.xml` | Auto-generated sitemap with hreflang |
| `public/robots.txt` | Crawler directives |
| `public/_redirects` | 301 redirects and trailing slash normalization |

## UI検証ルール（Verification Rule）

ユーザーから「検証して」「確認して」「verify」などの指示があった場合、コードレビューだけでなく**必ずスクリーンショットで目視確認**を行う。

### 手順

1. **devサーバーを起動**（未起動の場合）
   ```bash
   /home/user/rescue-LP/node_modules/.bin/vite --host 0.0.0.0 --port 5173 &
   sleep 3
   ```

2. **PC・スマホ両方のスクリーンショットを撮る**
   - スマホ: `playwright screenshot --browser chromium --viewport-size "390,844" --wait-for-timeout 4000 <URL> <出力>.png`
   - PC: `playwright screenshot --browser chromium --viewport-size "1280,800" --wait-for-timeout 4000 <URL> <出力>.png`
   - または node スクリプトで複数セクションをターゲット撮影

3. **Read ツールで画像を読み込んで目視確認**し、問題があれば即修正

4. **確認項目の例**
   - レイアウト崩れ（2列が1列になっていないか等）
   - ボタンテキストの折り返し
   - 要素の重なり・隠れ
   - PC/スマホ両方で想定通りのレイアウトになっているか

### 使用ツール
- `playwright`（`/opt/node22/bin/playwright`）: CLIで手軽にスクリーンショット
- node スクリプト + `playwright` npm モジュール（`/opt/node22/lib/node_modules/playwright/index.js`）: 特定セクションのクリップ撮影に使用
