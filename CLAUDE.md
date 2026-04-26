# CLAUDE.md — Project Rules for AI Assistants

## Project Overview

ph-document.com is a multilingual (EN/JA/KO) Philippine document service site built with Vite + React, pre-rendered to static HTML via `scripts/prerender.ts`.

## SEO Safety Rules

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

### CTR改善タスク（2026-04-30以降・優先度順）

**背景**: Search ConsoleのPSA Birth Certificate Costページで、price/cost/fee関連クエリが合計35インプレッション（7日間）・クリック0件（CTR 0%）と判明。原因調査の結果、以下3点が要因として特定された。

**原因と対策:**

#### 1. AggregateRatingスキーマの追加（優先度：高）
- **問題**: `PsaCostEn.tsx` と `CenomarGuideEn.tsx` にAggregateRatingスキーマがなく、SERPでスター評価が表示されない。HomeEn/HomeJaにはあるがサービス個別ページに欠如。
- **対策**: 両ページのjsonLdにAggregateRatingを追加してSERP上でスター（★4.8など）を表示させる
- **実装ファイル**: `pages/PsaCostEn.tsx`、`pages/CenomarGuideEn.tsx`
- **注意**: JSON-LD変更なので1〜2ページずつ実施し、2週間Search Consoleで効果確認してから次へ

#### 2. sitemapのlastmod個別化（優先度：中）
- **問題**: `public/sitemap.xml` の全URLが `<lastmod>2026-04-01</lastmod>` と同一日付。Googleがどのページが最新か判断できずクロール優先度が下がる
- **対策**: `scripts/prerender.ts` でページごとに実際の更新日を反映したlastmodを生成する
- **実装ファイル**: `scripts/prerender.ts`、`lib/seoDate.ts`
- **注意**: sitemap変更はSEO構造変更のため、Phase Bとして実施

#### 3. meta description改善（優先度：高）
- **問題**: 現在のdescriptionがサービス販売文句から始まるため、情報収集型クエリ（「cost 2026」「price 2026」）でクリックされにくい
- **対策**: 「₱365 is the official PSA government fee in 2026.」など情報提供から始まる文言に変更し、その後サービス説明へ誘導する構成にする
- **対象ページ**: `pages/PsaCostEn.tsx`（useMeta第2引数）を最初に変更し2週間観察
- **注意**: title・meta変更なのでSEO変更手順に従い1ページずつ

**補足（ゼロクリック検索について）:**
- 「psa birth certificate cost 2026」などの価格クエリはGoogleのAI OverviewやFeatured Snippetが検索結果内で直接PHP 365と回答するため、クリック不要で完結するケースがある（外部要因のため根本的な回避は困難）
- Search Consoleを「7 days」→「28 days」表示に切り替えて確認するとより正確なCTRが把握できる（7日・35インプレッションは統計的に不十分）

---

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
