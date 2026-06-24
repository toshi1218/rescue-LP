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

### 🟠 コミット量ルール（レベル横断・全レベルに適用）

レベル4（本文・UI変更）でも、**コミットの量と頻度自体がSEOシグナル**になりうる。Googleは「サイト全体が短期間に大幅変更された」と検知すると、安定していたページも含めて全サイト再評価モードに入る可能性がある。

**厳守ルール**:

1. **1コミットで30ファイル以上の共通コンポーネント変更を禁止**
   - `sed` 等での一括置換は便利だが、HTMLの差分は小さくてもGoogleには「サイト全体更新」シグナルになる
   - 30ファイル超になる場合は、機能単位・ページ群単位で分割コミットする
2. **共通コンポーネント（Header/Footer/Hero/共通グリッド等）の連続コミット禁止**
   - 同じ共通コンポーネントへの修正を1日に複数回コミットしない
   - 修正は1コミットにまとめてからプッシュする
3. **デプロイは1日1回まで**を目安にする（緊急バグ修正を除く）

**過去事例**:
- 2026-04-22 Footer 7連続コミット → 全サイト再評価誘発の疑い
- 2026-05-11 65ファイル一括変更（grid-cols sed置換）→ 5/15ノビリスタで圏外KW一時ランクイン・揺れ観測（因果は仮説、悪影響確率 約25%と推定）
- 2026-05-26 ノビリスタ実測で**外免切替クラスター5KWが一斉に -1〜-3 下落**（5位→8位、2位→圏外等）。5/11の65ファイル変更から **+15日**で顕在化。「シグナルは遅延して出る」ことが実証された

**重要**: 上記3件のうち5/26の外免切替下落は**実測ベースの強い証拠**。SEO構造を一切変えていなくても、コミット量だけで Google を刺激しうる、という前提で運用する。

### 🔴 「余震」概念 — シグナルは遅延して出る

5/11の大型コミット → 5/15に一時揺れ → **5/26に外免切替-3位下落**。  
**Googleの再評価サイクルは2〜4週間。コミットした日には何も起きないが、2週間後に「余震」として順位下落が来る。**

つまり「今日コミットして翌日順位が動いてないからOK」という判断は**完全に誤り**。**最低14日間は遅延影響を観察する必要がある**。

### 🚨 回復期ルール（事故・大変更からの復旧フェーズ）

**回復期の定義**:
- **大変更（後述）から最低 4週間**、かつ
- **GSCで impressions が連続2週間プラストレンド** を確認するまで
- どちらか **遅い方** を採用

**回復期の追加制限**（通常時の制限に上乗せ）:

1. **PR頻度: 週1本まで**（通常時の「1セッション1〜2PR」より厳格）
2. **コミット頻度: 1日最大1コミット**（複数の変更は前日のうちにブランチ上で1コミットに集約）
3. **共通コンポーネント変更: 完全凍結**（Header/Footer/Hero/Pricing/Services/CardGrid 等）
4. **デプロイ: 週2回まで**（緊急バグ修正を除く）
5. **新規ページ追加・本文追記・内部リンク追加は可**（ただし1日1ページ・2日空ける）

**回復期解除の判断手順**:
1. GSC で impressions が **2週間連続でプラストレンド** であることを確認
2. ノビリスタで主要クラスター（NBI / DFA / CENOMAR / 外免切替）に **新たな下落シグナル（-2以上）がない** ことを確認
3. 1〜2を満たしたら、通常運転に戻す（ただし通常運転も30ファイル超禁止等は継続）

### 「大変更」の定義（回復期トリガー）

以下のいずれかに該当したら **自動的に回復期突入**（4週間カウント開始）:

1. **1コミットで20ファイル以上の変更**（旧30ファイルから厳格化）
2. **1日に5コミット以上のプッシュ**（例: 5/1の16コミット、5/22の6コミット）
3. **共通コンポーネントへの2日連続変更**（例: 4/22 Footer 7連続）
4. **SEO関連ファイルへの変更**（hreflang/canonical/sitemap/robots/_redirects/prerender.ts/useMeta.ts/urlMap.ts）

**回復期突入時にやること**:
- CLAUDE.md の「現在の回復期」セクション（後述）に日付と原因を記録
- 4週間後の日付を「回復期解除候補日」として記録
- その間、上記「回復期の追加制限」を厳守

### 現在の回復期ステータス

**回復期突入日**: 2026-05-11（65ファイル一括変更）  
**追加打撃**: 2026-05-22（6コミット連発・PR一括マージ）、2026-05-25（3コミット）  
**最後の大変更**: 2026-05-22  
**回復期解除候補日**: **2026-06-19**（5/22 + 4週間）  
**実測影響**: 2026-05-26 ノビリスタで外免切替-3位下落  
**現在の制約**: 週1PR・1日1コミット・共通コンポーネント完全凍結・週2デプロイ

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

## 価格・納期ブロック追加スケジュール（2026-05-16 開始）

**背景**: 問い合わせは多いが受注率が低い。価格・納期を主要ページ本文に明示することで、予算ミスマッチ層・冷やかし層を自然に脱落させ、本命層の受注率を上げる狙い。

**方針**:
- レベル4（本文追記）扱い・SEO安全
- 既存H2・本文は消さず、料金ブロックを「追記」する
- 共通コンポーネント `<Pricing />` は使わず、各ページに**直書き**（全ページ一括更新シグナル回避）
- 1日1ページ・2日空けて次ページ（サイト全体更新誤認回避）

**スケジュール**:

| 日付 | ページ | 主要価格 | 補足 |
|------|--------|---------|------|
| 2026-05-16（今夜） | `/ja/cenomar/` | ¥61,000（フル）/ ¥16,500（オンライン代行） | 強いページから着手 |
| 2026-05-18 | `/ja/psa-shussei-cost/` | ¥61,000 / ¥16,500 | 「cost」KWと相性最強 |
| 2026-05-20 | `/ja/nbi-clearance/` | ¥39,000〜 | アポスティーユ込み |
| 2026-05-22 | `/ja/haigusha-visa-shorui/` | ¥94,000（パック） | パック誘導 |

**価格ブロックの書き方の型**:

```
【料金・納期の目安】
・<書類名>取得＋アポスティーユ＋DHL：¥XX,XXX（税込・送料込み）
・納期：約4〜6週間
・お支払い：着手金50%・書類確認後50%

▼ もっと早く・安く済ませたい方へ
提出先がe-Certificate（電子書類）を受理する場合は
「PSAオンライン申請代行 ¥16,500（税込）」をご検討ください。
紙原本・物理アポスティーユが必要な方は上記フルサービスが確実です。
```

**禁止事項**:
- 「対象外です」「ご遠慮ください」と切る表現は使わない（¥16,500プランへ誘導する形で振り分ける）
- 1日に複数ページへ追加しない
- `<Pricing />` コンポーネント埋め込みでの一括対応は禁止

**完了後**:
- 2週間Search Console観測 → 問い合わせ質の変化を確認
- 効果あれば他ページ（`/ja/gaimen-kirikae-guide/` 等）へ展開

---

## 検討論点：EN サイトの分離（topical authority / テーマ純度）

**ステータス**: 🟡 検討中・未決定（実行判断は保留）。2026-06-23 セッションで議論。

### 分離を支持する論点（ユーザー提起）

1. **テーマ純度（topical authority）を守れる**
   - 新規ドメインが最速で上がるのは「1ドメイン＝1テーマ＝1読者」に振り切れるから。
   - 現サイトは「日本語 × 日本の士業 × フィリピン書類」に純化している。ここに英語・海外BtoB（グローバルOFW向け）を混ぜると、**両方の主題シグナルが濁る**。
   - → EN を別ドメイン/別サイトに切り出せば、JA は日本市場テーマに純化を維持でき、EN はグローバルOFWテーマで独立して権威を積める。

### 反対・要注意の論点（技術的事実として必ず併記）

このアイデアを実行検討する場合、以下を**誤解なく**踏まえること（CLAUDE.md レベル1〜2の激ヤバ／取扱注意ゾーン）:

1. **「noindex で権威を引き継ぐ」はできない**
   - noindex は「インデックスから消す」指示であり、**権威（被リンク・履歴・評価）を移転する機能はゼロ**。消したページの権威は宙に浮いて失われる。
   - 権威移転は **301リダイレクト（旧URL→新URL）でのみ**起きる。noindex とは別物。
2. **ドメイン移行は減衰＋再評価コストが大きい**
   - 301 を張ってもリンクエクイティは移行のたび **10〜30% 減衰**。
   - 新ドメインは **2〜4ヶ月の再評価期間**でゼロから信頼を積み直し。
3. **現サイトは hreflang 事故（2026-03-29）から回復途上**
   - 2026-06 時点でインプレッションは 3月ピーク水準（〜120/日）まで回復。日本市場は健全（GSC: 145click/月・CTR 3.76%・平均8位）。
   - この局面でのドメイン移行は「事故の傷リセット＋移行減衰」のダブルパンチになりうる。

### 分離するなら満たすべき前提条件（実行する場合の最低ライン）

- 現サイトの回復完了（GSC impressions が **2週連続プラストレンド**）を確認してから着手。
- EN を別ドメインに「移す」のではなく、当面は **現 `/en/` を維持したまま**、まず title/description・本文の磨き込みで EN の実力を可視化する（CTR・順位）。分離は「EN が独立テーマとして伸びる地力がある」と実証できてから。
- 分離実行時は noindex ではなく **301（旧 `/en/` URL → 新ドメイン対応URL）** で権威を渡す。x-default / hreflang の再設計を伴うため CLAUDE.md レベル2 として段階実施。

### 当面の代替（分離せずに主題の濁りを減らす）

- EN ページから日本向け文脈（配偶者ビザ等の日本固有情報）を除去し、グローバルOFW向けに純化（下記「EN ページのコンテンツ日本語バイアス修正」と同一方針・レベル4で即時可能）。
- これだけでも「同一ドメイン内でのテーマ濁り」はかなり軽減できる。分離コストを払う前にまずこちらを尽くす。

---

## 新ドメイン構想：機関特化・専門サイト（2026-06-25 議論）

**ステータス**: 🟡 構想中。現サイト（ph-document.com）は**一切いじらない**前提。回復途上の資産を守りつつ、別ドメインで専門特化サイトをゼロから立ち上げる方向。

### 6/25 実測データ（判断の根拠）

- **EN（地域=アメリカ合衆国）: 78キーワード中 0個ランクイン（全滅）**。しかも需要は巨大（PSA birth certificate 1,300 / NBI clearance 1,000 / CENOMAR 880 / PSA birth certificate online 590 …すべて圏外）。米国市場は宝の山だが現サイトは1件も取れていない。
- **JA は健全**: `nbi clearance 代行` #1・`cenomar 代行` #3・`dfa アポスティーユ 費用` #2・`lto 運転経歴証明書 代行` #2 など取引KWで上位。→「ENと同居してJAが濁って損している」証拠はゼロ。
- 結論: EN全滅は「同居による濁り」ではなく**ENページ自体の実力不足**。新ドメインに同品質を移植しても改善しない。**勝てるのは良質な書き下ろしコンテンツを新規に作る場合のみ**。

### サイト設計（コンテンツ戦略）

1. **機関特化**: PSA / NBI / LTO / DFA をそれぞれ深掘りした専門ページ群を作り、専門特化サイトとして主題を純化（topical authority を最速で積む）。
2. **イベント軸で高単価化**: 単なる書類取得サービスで終わらせず、**ユーザーが詰まっているライフイベント**（結婚・ビザ・帰化・免許切替等）を軸に扱う。「書類の取り方」より「[国]で[イベント]を達成するために要る書類一式」の方が高インテント・高単価。
3. **整理軸 = 国 × イベント × 書類名**: イベントごとにドメインは分けられないため、国ごとにイベントが異なる点を活かし、この3軸のマトリクスで構成する。

### ドメイン分割の方針（重要な制約）

- **JA を新ドメインで作るのは非推奨（自己競合）**: 現サイトが JA 取引KWで #1〜#3 を取っているため、同じ事業者が同じKWを2ドメインで狙うと新ドメインは確立済みの旧サイトに負け、重複とも見られうる。**勝っている戦場に弱い自軍を送る形**になる。
- **新ドメインで意味があるのは英語・グローバルOFW市場（現サイトが0/78で空白）**。まずは EN 中心で立ち上げるのが合理的。
- 新ドメインは **2〜4ヶ月のサンドボックス**＋被リンク・履歴ゼロからの積み上げ。「新ドメインは速い」は**良質コンテンツ前提**で自動ではない。

### ph-document.com から流用してよいもの / ダメなもの

| ページ | 流用可否 | 備考 |
|--------|---------|------|
| プライバシーポリシー | ✅ そのまま流用OK | 重複ペナルティは存在しない。`noindex` 推奨 |
| 利用規約 | ✅ そのまま流用OK | `noindex` 推奨 |
| 特定商取引法表記 | ✅ 文言流用OK | **サイト固有情報（URL・連絡先・サイト名）は正確に差し替える**＝法的義務。SEOではなく事実の正確性の問題 |
| 会社概要 | ✅ ほぼ流用OK | 新サイトURL等を更新・`noindex` 推奨 |
| PSA/NBI/LTO/DFA 専門ページ | 🔴 完全新規（1文字も流用しない） | 流用すると2ドメインが同じ商用KWで**自己競合**し両方沈む |
| 国 × イベント × 書類 マトリクス | 🔴 完全新規 | ここが勝負どころ・最も価値が高い |

**法務系ページを `noindex` にする理由**: 罰則回避ではなく、新ドメインのインデックス対象を100%「機関 × 国 × イベント × 書類」に保ち**主題を濁らせないため**（テーマ純度戦略にプラス）。定型文をnoindexにすれば重複の懸念も完全にゼロになる。

**原則**: 定型文（法務系）は流用＋noindex、実質コンテンツは全部書き下ろし。これで法的にもSEO的にも完全にクリーン。

### 着手前の推奨ステップ（任意）

- いきなり全張りせず、まず現ドメインで EN 1ページ（`/en/psa-birth-certificate-cost/` 等）の中身強化を試して反応を見る → 伸びなければ新ドメインへ、の順なら判断材料を得てから投資できる。ただし「テーマ純度で振り切る」判断を優先するなら、EN専門新ドメインのパイロット（書き下ろし5〜10本・2〜3ヶ月計測）から始める。

---

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
- レベル4変更であっても、1コミットで30ファイル以上の共通コンポーネントを一括変更しない
  （SEO構造への影響はないが、Googleが「サイト全体が更新された」と判断して全ページ再クロールを誘発する可能性がある。分割してデプロイすること）

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

## PR・コミット運用ルール

### ユーザーの認知特性への適応

ユーザーはワーキングメモリが弱い（WAIS-IV WMI: 97）。「後でやろう」は機能しない。思いついたことはその場でやりきる必要がある。この前提でPR運用を設計する。

**Claudeがやること：**
- ユーザーが「これ直したい」と言ったら即着手する
- 着手前に「同じテーマで他に気になってることはありますか？今ここで全部出してください」と聞く
- 一通り出し切ってから、まとめて1コミット・1PRにする
- セッションをまたぐ持ち越しタスクはCLAUDE.mdに書き残す（ユーザーが覚えなくていい）
- 「後で」「次のセッションで」は使わない

### PRの粒度

- **PRは「1セッションの1テーマ」を単位とする** — セッション内で出し切ってから1PR
- **小さな修正は同じセッション内の関連変更とまとめて1PR** — セッションをまたいで待つ必要はない
- **緊急バグ修正のみ即時PR可**（本番に影響するもの限定）

### PRを作るタイミング

| 状況 | 対応 |
|------|------|
| 1箇所直した・他にもある | 「他にもありますか？」と聞いてからまとめてPR |
| 1テーマ分出し切った | PR作成 ✅ |
| セッションをまたぐ持ち越し | CLAUDE.mdのFuture Tasksに書き残してコミット |

### ブランチ戦略

- ブランチ名は作業テーマを反映させる — 例: `feat/cenomar-en-content`, `fix/cta-button-mobile`, `seo/title-optimization`
- 1ブランチに複数コミットを積んでからPRを出す（コミット単位でブランチを切らない）

### 目安

- **1セッション1〜2PR以内**を上限の目安とする
- 同じテーマの変更はそのセッション内でまとめてからPRにする
