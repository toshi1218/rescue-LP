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

### Redirect rules（2026-04-27 追加・最重要）:

**背景**: Redirect は「このURLの評価を別URLへ渡す」という強いシグナル。Google公式も URL変更・ドメイン変更・HTTPS移行で Redirect を推奨している一方、誤用すると評価の行き先を誤る。robots / noindex / canonical / redirect / sitemap は**同格の「触る前に検査必須」扱い**とする。

**特に危険なパターン（事故事例から）**:

1. 旧URL → 関係ないURLへ転送 → Google が「ページが消えた／内容が変わった」と判断
2. 全ページ → トップページへ転送 → 個別ページの評価が失われる（最も致命的）
3. www / non-www / http / https がぐるぐる → クロール不能・重複・canonical 混乱
4. Redirect と canonical が別方向 → Google が「どっちが本物？」となり予期しない canonical が選ばれる
5. Redirect 先が noindex / 404 / soft 404 → 評価を渡した先が index 不可

**ルール**:

> Redirect changes are high-risk SEO operations.
> Before deployment, list all affected URLs.
> After deployment, verify every redirect on production with curl.
> No redirect chain, no redirect loop, no redirect to unrelated pages, no redirect to noindex/404/soft404 pages.
> Header/Footer/Layout changes must not be mixed with redirect changes in the same deployment.

**運用手順（Redirect は「心臓手術」扱い）**:

1. **触る前に一覧化**: 影響を受ける旧URL・新URL・最終ステータス・canonical・index可否を表で書き出す
2. **1本ずつ検証**: デプロイ後、各 redirect を `curl -sI` で本番確認（chain/loop が無いか・最終ステータスが 200 か・最終 URL の canonical が一致するか・noindex でないか）
3. **混ぜない**: Redirect を触る日は、他の SEO 変更（hreflang・canonical・noindex・sitemap・Header/Footer/Layout）を**同一デプロイに混ぜない**。事故時の切り分けが不可能になる
4. **凍結対象**: Redirect 変更は SEO-destructive 変更の中でも最上位の凍結対象。観察期間は最低 2 週間

### IGRS.online 事故ケーススタディ（2026-04-27 追加・最重要参照ケース）

**背景**: ph-document.com の前身サイト igrs.online は 2026-01-31 に**完全 deindex 事故**を起こした。3ヶ月経過後も復活せず、事実上のサイト寿命終了。本ドキュメントの SEO Safety Rules / Redirect rules はすべてこの事故から逆算して書かれている。

**事故の数字（GSC CSV エクスポートで検証済み）**:

| 日付 | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| 1/24-1/30（健全期） | 平均 1.9/日 | 平均 51/日 | **5.4%** | 5.1〜8.6 |
| **1/31（事故日）** | **0** | **0** | — | — |
| 2/1〜4/23（**3ヶ月**） | **0** | **0** | — | — |

**事故パターンの特徴**:

1. **漸減ではない、スナップ消滅**: 前日まで通常 → 翌日から絶対ゼロ。Honeymoon 終了・コンテンツ品質劣化・ペナルティでは絶対起きない形
2. **CTR は健全だった**: 5.4%（ph-document の現状 1.6% より遥かに高い）。Mobile CTR 7.92%、Tablet 12.5%
3. **Position も良好**: 平均 5-8 位。検索結果には届いていた
4. **3ヶ月たっても戻らない**: ブランド検索 "igrs" が 5 impr 残っているのに index に戻らない = Google の信頼スコアが破壊されたシグナル
5. **新規サイトだったため復活が困難**: queries 6個・pages 26個で、立ち上げ初期段階。trust budget が無く再評価のチャンスを得られない

**スナップ消滅の典型原因（推定）**:

1. `robots.txt` で `Disallow: /` を全クローラーに deploy
2. 全ページに `<meta name="robots" content="noindex">` を deploy
3. canonical を全ページ存在しない URL（タイポ・別ドメイン）に向けた
4. 全ページから他ドメインへの 301 redirect（移行先設定誤り）
5. HTTPS 証明書失効・サーバ 5xx 長期化

→ いずれも**1コミット・1デプロイで起きうる**。コンテンツ品質・コミット頻度・ビジュアル変更では**絶対起きない**。

**ph-document への直接の教訓**:

1. **「コンテンツ品質で守られる」は嘘**: CTR 5.4% / Pos 5 の健全サイトが1日で消えた。SEO 構造の事故は健全度に関係なく即死
2. **deindex は事実上の寿命終了**: 3ヶ月で戻らない実例があるので、**事故予防 >>> 事故後対応**。「直せばいいや」は通用しない
3. **新規サイトほど deindex に弱い**: ph-document も 2/16 立ち上げの新規サイト。IGRS と同じ立場で、同じ事故を起こせば同じ結末になる
4. **hreflang / canonical / robots / noindex / redirect / sitemap** の6つは**同格の deindex リスク要因**として扱う

**deindex 検知ルール（早期発見が唯一の救い）**:

1. **日次監視**: GSC で前日比 **impr が 50%以上落ちたら**、即座に以下を `curl` で確認
   - `curl -sI https://ph-document.com/robots.txt` → `Disallow: /` が無いか
   - `curl -s https://ph-document.com/ | grep -i "noindex"` → グローバル noindex が無いか
   - `curl -s https://ph-document.com/ | grep canonical` → canonical が正しい URL か
   - `curl -sI https://ph-document.com/` → 200 OK か（5xx・3xx ループ無いか）
   - `curl -s https://ph-document.com/sitemap.xml | head -20` → sitemap が生きているか
2. **GSC URL 検査ツール**: 任意のページが「インデックス登録不可」になっていないか確認
3. **検知から24時間以内に対応**: deindex は時間が経つほど復活が困難になる

**新規サイトリスク係数（公開後6ヶ月の凍結強化）**:

- ph-document.com は 2026-02-16 公開、現在まだ約 2.5 ヶ月
- IGRS の事故は公開直後だった（trust budget が無く復活不能）
- **公開後6ヶ月（2026-08-16 まで）は SEO 構造変更を「凍結級」の慎重さで扱う**
- この期間中、SEO 構造に触るときは必ず:
  - 単独デプロイ
  - デプロイ後 24 時間 GSC 観察
  - 異常検知ルールに沿って即座に curl 検証
  - ロールバック手順を事前にメモしておく

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

### コミット頻度ルール（2026-04-27 追加・GSC低下の根本原因対策）

**背景**: SEO構造を壊していない非SEOコミットでも、短期間に多数積み重なるとGoogleの「サイト不安定」シグナルとなり全サイト再評価を引き起こす**可能性がある**。一般的な SEO 知見としては妥当な懸念だが、当サイトのケースで「4/22 Footer 7連発」「4/24-25 HomeJa 5連発」が Japan インプレッション低下の**主因かどうかは GSC 詳細データで確認したところ証明されていない**（4/27 検証で 4/22 当日は impr スパイク、翌日反動だが平均は前後と同水準）。あくまで予防原則として以下のルールを採用する。

**ルール**:

1. **同一ファイル/同一セクションへの連続コミットは1日2回まで**。3回目以降は一旦停止し、複数の修正を1コミットにまとめる（squash 必須）
2. **全サイト共通コンポーネント**（`Footer.tsx`、`Navbar.tsx`、`Hero.tsx`、`CtaBox.tsx`、共通レイアウト）への変更は**1日1コミットまで**。連続編集は全ページ再クロール → 全サイト再評価のトリガーになる
3. **5日間で30コミット以上は赤信号**。直近のコミット数を `git log --since="5 days ago" --oneline | wc -l` で確認し、超えていたら新規コミットを止めて様子見
4. **「凍結期間」の対象拡大**: SEO-destructive変更だけでなく、**全サイト共通コンポーネントへの変更**も凍結対象に含める（凍結明け前は触らない）

### CWV（Core Web Vitals）チェックルール（2026-04-27 追加）

**背景**: CWV はランキング要因だが、これまで「SEO-destructive」リストに入っておらず、ビジュアルリデザイン等で見落とされていた。

**ルール**:

1. **ビジュアル/UI 変更後**は Lighthouse CI で LCP / CLS / INP を変更前と比較する
2. **+100行以上のコンポーネント変更**（特に画像追加・アニメーション追加・フォント追加）は CWV 影響を文章で記述する
3. **新規ライブラリ追加**は bundle size の delta を `npm run build` で確認し、+10KB 以上なら根拠を CLAUDE.md に記載
4. ビジュアルリデザインは**1コンポーネントずつ**実施し、デプロイ後に PageSpeed Insights で本番 URL を計測してから次へ

### デプロイ後検証ルール（2026-04-27 追加）

**背景**: 4/25 に `/ja/psa-ecertificate-nihon` を追加したが、`public/sitemap.xml` に未反映のままだった。コミットだけで「やった気」になるのを防ぐ。

**ルール**:

SEO関連変更（新ページ追加・title/description変更・hreflang変更等）の実装完了報告には、**必ず以下のデプロイ後検証**を含めること:

1. **本番 sitemap 確認**: `curl -s https://ph-document.com/sitemap.xml | grep <new-url>` でヒットを確認
2. **本番 HTML 確認**: `curl -s https://ph-document.com/<page>/ | grep -E '(title|hreflang|canonical)'` で metadata がデプロイされているか確認
3. **GSC URL 検査**: 新ページは Search Console で「URL検査」→「インデックス登録をリクエスト」を実施するよう案内
4. ビルドが走らない CMS/コンテンツ更新では sitemap が更新されないことに注意。`npm run build` の実行ログをユーザーに見せて初めて完了とする

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

3. `/en/cenomar/` の title を informational から transactional 表現に変更
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

## 2026-04-27 セッションサマリー（GSC CSV エクスポートによる検証・前日認識の訂正）

### 背景

4/26 の認識を、4/27 に CSV ダウンロードした GSC データ（Last 3 months / 全 Property）で詳細検証した結果、**前日の主張に複数の誤り**を発見。Opus 4.7 でデータと突き合わせた検証結果を以下に記録する。

### 訂正された事実（旧認識 → データ検証後）

| 項目 | 旧認識（4/26） | 検証後（4/27） |
|---|---|---|
| ピーク impr/日 | 約 120/日 | **494/日**（3/2-3/8 平均、ピーク日3/2 は 705） |
| 現在の下落幅 | 30-50%減 | **92%減**（37/日） |
| hreflang 事故の影響 | 主因 | **加速要因（全体の18%）。82%は事故前に発生** |
| `/en/psa-birth-certificate-cost/` impr | 578 | **1,325** |
| 4/22 Footer 7連発の悪影響 | 「主因と特定」 | **データに証拠なし（noise レベル）** |
| 4/24-25 HomeJa 5連発の悪影響 | 「主因と特定」 | **GSC データが 4/23 までで未検証** |

### 新発見（CSV データで初めて判明）

1. **Trailing slash 重複インデックス問題（致命的）**
   - 同一コンテンツが2URL で別々にインデックスされている
   - 例: `/ja/psa-shussei-cost/` 105 impr vs `/ja/psa-shussei-cost` 134 impr
   - 例: `/ja/gaimen-kirikae-guide/` 522 impr vs `/ja/gaimen-kirikae-guide` 349 impr
   - 例: `/nbi-validity/` 74 impr vs `/nbi-validity` 87 impr
   - `_redirects` でスラッシュ正規化しているはずだが、Google は両方を別ページ認識
   - canonical タグが効いていない可能性 → **凍結明け即検証**

2. **USA トラフィックの巨大死蔵**
   - USA: 2,090 impr / **0 clicks** / 0% CTR（Japan の impr を上回る）
   - 主因は EN ページの日本語バイアス（CLAUDE.md 既存記載の Phase E 課題）
   - 数値で確定した最大の機会損失

3. **Position 1 で 0 click のクエリ群**（タイトル・snippet 改善の機会）
   - `フィリピン 出生証明書` pos 1.25 / 16 impr / **0 clicks**
   - `フィリピン出生証明書` pos 1.0 / 9 impr / 0 clicks
   - `フィリピン 免許 日本 切り替え` pos 2.75 / 32 impr / 0 clicks
   - 順位は取れているが click 誘発が機能していない

4. **構造化データがほぼ機能していない**
   - Search Appearance に出ているのは Product snippets 1種のみ（50 impr）
   - 実装している FAQ / DefinedTermSet / Speakable / HowTo は SERP に出ていない

5. **真の下落要因（4/27 三次訂正・CEO 指摘で hreflang 事故の影響度を再評価）: 3つの要因の合算**

   **要因 A: Honeymoon Period 終了（中・不可避）**
   - 2/16-3/8 のピーク（494/日）は新規サイトブーストと情報ページが集めた informational query の組合せ

   **要因 B: 情報ページ→営業ページ戦略転換（中・意図的）**
   - CEO が当時「CTR が低すぎる」と判断（`cenomar meaning` 等の informational query で 0 click 多発）
   - 情報ページのコンテンツを営業ページに改修（3月中旬）→ さらに情報＋営業ページに分離（4月）
   - データ証拠: `/ja/cenomar/` 367 impr / 20 clicks / **CTR 5.45%**、`/ja/company/` 44 impr / 8 clicks / **CTR 18.18%**、4/18 は 22 impr で **CTR 13.64%** → **量を捨てて質に振る戦略は成功している**

   **要因 C: 3/28-30 hreflang 全削除事故（大・防げた致命傷）**
   - 当初「主因ではない」と評価していたが、日次データを精査すると 4/27 三次訂正で**最大の単一ダメージ**と再評価
   - **事故直前は回復軌道だった**: 3/22→3/25 で 91→154（+69%）と底打ち反発
   - 事故後の崩壊: 3/27 (118) → 3/31 (79) → 4/3 (56) → **4/8 (28)** = 事故前比 **-76%**
   - 回復軌道を 3 日で殺した完全に防げる事故。Honeymoon・戦略転換とは別軸の純粋な事故ダメージ
   - 教訓: 「ピーク比 82%は事故前に発生」という**大きな分母（494）を基準にした比率の罠**で、118→28 の局所暴落を見落とすな。**新しい安定軌道からの相対値で見る**

   **総合**: 494 → 37 の 92%減は (A)(B) で大半が説明できるが、**(C) hreflang 事故が「118 で安定するはずだった軌道」を 28 まで叩き落とした追加損失**。回復が困難な状態を作り出した致命傷は (C)。

   - **したがって impr 数の回復を KGI にすべきでない**。営業ページの clicks / CTR / コンバージョンを KGI に置く
   - だが (C) のような**回復軌道を殺す事故は絶対に避ける**。hreflang / canonical / redirect / robots / noindex / sitemap の触り方が雑だと同じことが起きる

### 「Footer 7連発が主因」記述の再訂正（4/27 二次訂正）

4/26 サマリーの「4/22 Footer 7連発」記述は、**ファイル編集回数のみを見て因果と決めつけていた**ため二重訂正する:

- 実態: 4/22 に `Footer.tsx` を触った commit は 6 回（7 ではない）
- 内容: 連絡先 CTA（LINE / WhatsApp / メール / 送信ボタン）の意図的な UI 改善
- 1 commit あたり 1〜14 行の微修正で、ロジック・構造変更なし
- 連絡先ボタンが Footer.tsx に置かれているので編集回数が嵩んだだけ
- **squash 不足**は運用上の改善余地だが、**「全サイト再評価を引き起こした」根拠はデータに無い**
- 同様に「4/24-25 HomeJa 5連発」も意図的なコンテンツ改修であり、SEO 事故扱いは過剰

**教訓**: ファイル名 × 編集回数だけで「SEO 事故」とラベルしない。コミット内容（構造変更か / 意図的改修か / squash 不足の整理問題か）を切り分けて評価する。

### 「一気に変えるか直列か」の判断基準（4/27 の議論結果）

CEO の問い「全部まとめて変える方が回復が早いのでは？」に対する答え:

**変更タイプ別に分ける**:

| 変更タイプ | 一括 OK? | 理由 |
|---|---|---|
| Trailing slash canonical / Redirect | NG（必ず単独） | 構造変更、過去事故あり、切り分け不能化 |
| hreflang 再設計 | NG（必ず単独） | 過去事故再発リスク |
| Header/Footer/Layout | NG（必ず単独） | 全ページ影響 |
| 複数ページの title/description リライト | OK 寄り | 同質変更、影響範囲が局所的 |
| 構造化データ追加 | OK 寄り | 追加系、副作用が小さい |

### 凍結明け（2026-04-30）即着手リスト（優先順位を訂正後の数値で再構成）

1. **【最優先・単独デプロイ】Trailing slash 重複の curl 検証 → canonical/redirect 修正**
   - 期待効果: impressions 統合で +20-30%
   - 確認コマンド: `curl -sI https://ph-document.com/ja/psa-shussei-cost`
   - 301 が返らない、または canonical 不一致なら大事故

2. **`/en/psa-birth-certificate-cost/` の title/description リライト（USA OFW 向け）**
   - 1,325 impr / 0.30% CTR / pos 8.97 → 数値が最大
   - `docs/seo-todo-post-freeze.md` Phase F の文案を採用、ただし旧 impr 値（578）は誤りなので補足

3. **`/en/cenomar/` リライト（同様に USA OFW 向け）**
   - 532 impr / 0.19% CTR

4. **`/ja/gaimen-kirikae-guide/` のタイトル見直し**
   - `フィリピン 免許 日本 切り替え` pos 2.75 で 0 click → タイトル改善で即効性

5. **`/ja/psa-ecertificate-nihon/` を sitemap.xml に反映**（4/26 から積み残し）

### CLAUDE.md 自体の運用ルール（4/27 追加）

1. 「主因と特定されている」「事故が原因」など**断定表現は数値で裏取り後にのみ使う**。仮説段階は「**可能性がある**」「**仮説**」と明記
2. 数値（impr, clicks, position）は**必ず CSV エクスポート由来か明記**。GSC 画面のスクショ目視は誤差あり
3. 訂正が出たら旧記述を削除せず「訂正」セクションを追加（履歴を残す）

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
