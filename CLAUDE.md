# CLAUDE.md — Project Rules for AI Assistants

## 🚫 main merge 絶対禁止ルール

**Claudeは絶対に `main` ブランチへのマージを行ってはならない。**

- **禁止期間**: 2026-07-15 まで（以降も下記条件が継続する）
- **解除条件**: ユーザーがチャットで **「main merge」と明示的に入力した場合のみ** 許可
- 「マージしていいですか？」への「はい」「OK」「どうぞ」等は解除条件に該当しない
- PRのドラフト解除・レビュー依頼も `main` マージとは別であり、マージ操作そのものは行わない

**過去事例（2026-06-27）:** PR #273 が誤って本番 `main` にマージされた。マージ操作はユーザー自身の GitHub アカウント（toshi1218）によるものだが、Claudeがマージを提案・促した可能性がある。再発防止のため上記ルールを設定。

---

## ✅ main マージ前 必須チェック（毎回・省略不可）

**ユーザーが「main merge」と入力しても、下記チェックカードを提示してからでないとマージしてはならない。** 感覚・博打での判断を禁止し、毎回同じ手順で機械的に確認する。判定が 🔴 の場合はマージせず、分割・延期・リベースを先に行う。

マージ操作（`merge_pull_request`）の直前に、必ず次のカードを出す：

```
【main マージ前チェック — PR #xxx】
1. リベース: base が origin/main 最新か（古ければ先にリベース＆再ビルド）
2. 変更ファイル: 一覧＋構造ファイル該当有無（prerender/useMeta/urlMap/sitemap/
   robots/_redirects/seoDate/hreflang/canonical/JSON-LD のいずれかに触れるか）
3. 波及ページ数【実測】: npm run build 後、dist の *.html を main と比較して
   「変わったHTMLファイル数」を数える（測定不能なら保守側に倒す）
4. レバー分類: Level4個別 / Level4大量(20+) / Level3(title等) / 共通コンポーネント / 構造
5. ローリング14日バケツ: 「完了済み」表を見て、直近14日に大きいシグナル
   （共通コンポーネント・構造・20ページ超）を既に出していないか
6. 混入チェック: 意図しないファイル（useMeta.ts 等）が紛れていないか
7. 判定: 🟢 即OK / 🟡 単独デプロイ＋14日観察付きでOK / 🔴 分割 or 延期
```

- 判定基準の詳細（レバー×波及数→頻度テーブル、ローリング2週間バケツ）は `docs/merge-schedule.md`「デプロイ頻度の判断基準」を正典とする。
- 🟡 でマージする場合は、同じ窓（14日）で他の共通コンポーネント・構造変更を出さないことを宣言してから実行する。
- カード提示 → 判定が 🔴 でない → ユーザーの「main merge」入力が有効、の3条件が揃って初めてマージする。

**過去のヒヤリ（2026-07-08）:** docs 更新PR #318 に、検証作業の副作用で `lib/useMeta.ts` のバグ版が混入し、直前にマージしていれば #307 の修正を巻き戻すところだった。マージ前の「6. 混入チェック」で検知・回避。この手順を毎回踏むことが再発防止になる。

---

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

### 🚨 運用の大原則 — 「待つ」のではなく「構造を固定して中身で攻める」

**間違った運用（旧ルールの罠）**: 「回復途中だから触らない。回復するまで待つ」。
これは無限ループの罠。待っている間サイトは育たず、回復に終わりは来ない。**待つことは回復のメカニズムではない。**

**正しい運用**: 回復は「座って待つ」ものではなく「**構造を固定したまま、良いコンテンツを足し続けながら通り過ぎる**」もの。危険なのは *変更すること* ではなく、*構造を触ること* と *一度に大量にやること* の2つだけ。

| 種別 | 回復を遅らせるか | 運用 |
|------|------------------|------|
| **構造**（hreflang/canonical/redirects/sitemap/robots/prerender.ts/useMeta.ts/urlMap.ts／20ファイル超の一括変更／共通コンポーネント連打） | **遅らせる（実証済み）** | **待つのではなく、永久に触らない**。すでに正しい状態（5/3「インフラは完全に健全」確認済み）。固定＝コストゼロ |
| **コンテンツ**（新規ページ・本文加筆・内部リンク・1ページ単位のUI改善） | **遅らせない。むしろ回復を早める** | **待ち時間ゼロ。今日から普通に書いてよい**。Googleが最も評価する正のシグナル |

**爆発半径で判断する（触ったものでサイトへの影響範囲が決まる）**:

| 触ったもの | 爆発半径 |
|------------|----------|
| 1ページの本文 | そのページだけ（サイト全体は落ちない） |
| 共通コンポーネント（Header/Footer/Hero/Pricing/Navbar 等） | それを使う全ページ＝全言語 |
| 構造（hreflang/canonical/sitemap 等） | 全言語サイト全体 |

→ **個別ページのコンテンツは恐れず日次でいじってよい。** サイト全体を落とす力は構造と共通コンポーネントにしかない。

**実証された危険パターン（＝これだけ避ければよい）**:
- hreflang全削除（構造いじり）→ 全言語サイト失速
- 65ファイル一括 sed 置換（大量一括）→ 5/26 外免切替 -3位
- Footer 7連続コミット（共通コンポーネント連打）→ 全サイト再評価誘発

**重要**: 「普通にコンテンツページを1本足したこと」で落ちた事例は**一件もない**。落ちたのは全部「構造」か「大量一括」。コンテンツ投入を止める理由はない。

### 🔴 「余震」概念の正しい適用範囲

5/11の大型コミット（65ファイル一括）→ +15日で外免切替下落。**余震＝2〜4週間遅れの順位変動は「構造変更・大量一括変更」に対して起きる**。1ページの本文加筆には適用されない。
→ 構造・大量一括をやった場合のみ14日観察。通常のコンテンツ投入は観察待ち不要。

### 「大変更」の定義（これをやったら14日観察）

以下は実行前に慎重判断、実行後14日観察:

1. **1コミットで20ファイル以上の変更**
2. **1日に5コミット以上のプッシュ**
3. **共通コンポーネント（Header/Footer/Hero/Pricing/Services/CardGrid/Navbar）への変更**
4. **SEO関連ファイルへの変更**（hreflang/canonical/sitemap/robots/_redirects/prerender.ts/useMeta.ts/urlMap.ts）

上記**以外**（＝通常のコンテンツ追加・1ページ単位の改善）は、量と頻度の常識的上限（1コミット20ファイル未満・共通コンポーネント連打しない）さえ守れば**自由・日次OK**。

### 現在のステータス（2026-06-28 更新）

- **ペナルティ: なし**（GSC「手動による対策」「セキュリティの問題」ともに *No issues detected* を実機確認、2026-06-28）
- **ドメイン健全**: 構造にバグなし。一部ページは順位上位を維持（例: `/ja/psa-shussei-cost/` 順位1.24、NBI系も生存）。落ち込みは自損事故（3/29 hreflang全削除・5/11 65ファイル一括）由来の一時的シグナル不安定で、ページ/クラスター単位で段階的に回復中（アルゴリズム再評価の挙動。ペナルティの挙動ではない）
- **新ドメイン移行は不採用**: ペナルティ無し＝健全なドメインを捨てる理由がない。4ヶ月のクロール実績・インデックスを失い、YMYL新ドメインの再評価を一から受けるのは純粋に損。心機一転が必要なら「同ドメインでコード書き直し」で十分
- **運用モード**: 構造は凍結維持（触らない＝無料）。コンテンツは恐れず日次投入。受注は「順位回復待ち」ではなく**コンバージョン改善（CTA・価格・納期・信頼要素＝SEO非依存・即効・リスクゼロ）**で先に上げる
- **本日の本番投入（2026-06-28）**: #273 revert（#301）／#287 NBI郵送料修正／#300 Contact(EN)／#243 PSA料金表。すべて個別ページ・ビルド検証済み・爆発半径小

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

---

## 2026-07-09 セッションサマリー（問い合わせKPIレポート分析・GSC実データ監査・title/descバグ発見）

### 完了したこと（PR #322・ドラフト・main未マージ）

1. **問い合わせKPIレポート分析**：全問い合わせ55件中、英語問い合わせの76%がChatGPT経由と判明。LLMO（AI最適化）が実際に受注を運んでいる実証データ。
2. **GSC Performance実データ（過去6ヶ月）分析**：国別・サービス別・クエリ別に集計。日本市場はNBI/DFAアポ/LTOが1ページ目上位なのにCTRゼロの取りこぼしが多数あることが判明。米国は表示3,103でクリック1（価格調べ層・非顧客）と確認、深追い不要と結論。
3. **NBIページ（`/ja/nbi-clearance/`）のhydration時title劣化バグ修正**：`useMeta()`が`prerender.ts`の正しいtitleを古いtitleに上書きしていた。
4. **中東2ヶ国（Saudi Arabia・Kuwait）着地ページ新規追加**：既存の国別テンプレート方式（`lib/countryConfig.ts`）で追加。
5. **`/en/psa-birth-certificate-cost/`（GSC最大表示 2,554impr）のtitle/desc同期修正**：4/30のCTR改善titleがJS側で古いtitleに戻されていたバグを実機Playwright検証で確認・修正。
6. **サイト全体のtitle/descバグ監査**：117ルート中、**85ページで「`useMeta()` vs `prerender.ts`」のtitle不一致**を検出（実機検証込み）。国別テンプレート13ページは`description`が「Applying for X visaType?」vs「Moving to X?」で共通して不一致。

### 今後のタスク（持ち越し・別セッション・別日程で対応）

#### A. 対症療法の続き（残り約84ページのtitle/desc同期修正）
- 原因：`pages/*.tsx`の`useMeta()`（hydration後にJSがtitleを上書き）と`scripts/prerender.ts`の静的title/descriptionが長期間の個別編集で乖離。Googleの2パスレンダリングで不安定なsnippetが出るリスク。
- 対応方針：`prerender.ts`側（Googleが実際に見る静的HTML）に`useMeta()`を合わせる。**GSC表示回数順に1回5〜10ページ・複数セッションに分散**（1コミット20ファイル未満・1日5コミット未満厳守。5/11 65ファイル一括変更→15日後-3位下落の教訓に基づく）。
- 優先度上位の残り（表示回数順）：`/ja/`(558)・`/en/cenomar/`(536)・`/en/drivers-license-conversion/`(442)・`/ja/apostille/`(410)・`/en/pricing/`(377)・`/ja/gaimen-kirikae-guide/`(349)・`/en/apostille/`(335)・`/ja/haigusha-visa/`(308、旧月ハードコード「2026年3月版」も混在)・`/en/apostille-processing-time/`(292)・`/en/apostille-fee/`(237)・`/en/nbi-clearance/`(219) ...以下略。詳細な全85件リストと生データは本セッションの監査スクリプトを再実行すれば再現可能（`scripts/prerender.ts`と各`pages/*.tsx`の`useMeta()`呼び出しを機械比較）。

#### B. 根治（Aが一巡してから着手）
- `useMeta.ts`と`prerender.ts`のtitle/description二重管理を構造的に解消。単一ソース化（例：ページごとのメタ定義を1箇所にまとめ、prerender.tsとuseMeta()呼び出しの両方がそこを参照する設計）。
- 既存の「Phase B残課題」に記載の「`useMeta.ts`のhydration中の再設計」と統合して対応。

#### C. 新規着地ページ2本（②結婚・③帰化、両方作る）
- **②結婚**：配偶者ビザ・国際結婚の「必要書類」着地ページ。GSCで「配偶者ビザ フィリピン 必要書類 一覧」pos80.5、「国際結婚 フィリピン 必要書類 一覧」pos80、「カナダ 配偶者ビザ フィリピン 書類」pos96等、本命クエリが深く沈んでいる。日本＋カナダ/UK/フランス等の組み合わせを想定。
- **③帰化**：帰化申請の「必要書類・代行」着地ページ強化。「帰化申請 フィリピン 代行」pos39.5、「帰化申請 psa」pos38、「フィリピン 帰化 書類 代行」pos51.5。既存`/ja/kika-shinsei-guide/`はガイドはあるが「代行」検索意図への接続が弱い。書類点数が多く高単価になりやすい層。

#### D. LLMO強化（料金・納期・手順のプレーン明文化＋構造化データ、未着手）
- ChatGPT経由の受注導線（問い合わせの76%）を太くするため、主要サービスページに料金・納期・手順をLLMが抜き出しやすい形（プレーンテキスト・箇条書き）で明記。
- FAQ/HowTo/DefinedTermSet構造化データを主要ページに追加。

#### E. 保留中の意思決定（ユーザーのYes/No待ち）
- **JAトップページ（`HomeJa.tsx`／`Hero.tsx`）のH1を「書類の羅列」から「国際結婚が主柱」の見せ方に寄せるか**：SEOレベル3・共通Heroコンポーネントの変更にあたるため、着手前にユーザーの明示的な承認が必要。実データ上、ENトップは既に結婚主軸の訴求になっているが、JAトップは書類名の羅列のままという非対称が残っている。

#### F. 継続監視
- PR #322：CI green（seo-gate・Cloudflare Pages）・レビューコメントなし。**main mergeは絶対禁止**（2026-07-15まで、解除は「main merge」明示入力のみ）。マージ・クローズまで監視継続。
