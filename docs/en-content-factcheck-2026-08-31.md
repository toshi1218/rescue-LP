# /en/ 全ページ 事実確認監査 — 2026-08-31

対象: `/en/` 配下 68ページ（`pages/*En.tsx` 58枚 ＋ `lib/countryConfig.ts` 由来の国別テンプレート13枚）
方法: 全ページの本文・meta・JSON-LD を機械抽出して横断比較 ＋ 一次情報での外部照合。
**すべての指摘は `npm run build` 済みの `dist/` に対して grep で実在を確認済み**（推測ではなく実測）。
ビルド結果: 136/136ページ生成成功・indexable 129/129・sitemap 127 URL・重複 `<loc>` 0件。

**総括**: 日本語側と違い、e-Apostille移行の反映は EN のほうが進んでいる（`HomeEn` `ApostilleGuideEn` `CenomarValidityEn` などは正しい）。
EN 固有の問題は別のところにある — **国ごとの認証ルートの判定を間違えている**こと。
「ハーグ条約加盟国＝アポスティーユが必要」という論理の誤りがサイト全体の骨格になっており、
そのうえで加盟状況そのものを3か国で取り違えている。お客様が不要な認証費用を払う／必要な認証を取り損なう、どちらも起こりうる。

---

## 🔴 A. 加盟状況の判定を3か国で誤っている

アポスティーユ条約の加盟状況は事実確認が可能な一次情報がある。照合結果:

| 国 | サイトの記載 | 事実 | 判定 |
|---|---|---|---|
| **サウジアラビア** | 「Saudi Arabia is **not** a Hague Convention member」→ Embassy Attestation を販売 | 2022-04-08 加入、**2022-12-07 発効**（[HCCH](https://www.hcch.net/en/news-archive/details/?varevent=857)） | ❌ **誤り** |
| **香港** | 「Hong Kong (HKSAR) **requires Embassy Attestation**」 | 条約は HKSAR に**継続適用**。さらに 2023-11-07 以降、在フィリピン中国大使館は比公文書の領事認証を**廃止**（[中国大使館告知](https://ph.china-embassy.gov.cn/eng/lsfw/gzrz/202311/t20231111_11178632.htm)） | ❌ **誤り** |
| **日本** | 「Japan joined the Hague Apostille Convention — apostilled documents are now accepted **as of 2024**」 | 日本の発効は **1970-07-27**。2024年に何かが変わった事実はない | ❌ **誤り** |
| UAE | not a member → Embassy Attestation | 非加盟 | ✅ 正しい |
| カタール | not a member → Embassy Attestation | 非加盟 | ✅ 正しい |
| クウェート | not a member → Embassy Attestation | 非加盟 | ✅ 正しい |
| シンガポール | 2021年加盟 | 2021-09-16 発効 | ✅ 正しい |

該当箇所:

- `lib/countryConfig.ts:406-441`（saudi-arabia）— `isHagueConvention: false` / `authLabel: 'Embassy Attestation'` / FAQ「Saudi Arabia is not a Hague Convention member」
  → **live 確認済み**: `dist/en/saudi-arabia/index.html`
- `lib/countryConfig.ts:214-249`（hong-kong）— 同上。**さらに同一configの中で自己矛盾**:
  認証FAQは「Embassy Attestation」なのに、料金FAQは「All PSA documents, **DFA Apostille**, and DHL shipping to Hong Kong are included」（`:243`）。
  また「**Philippine** Embassy attestation」という記述（`:227,235`）は、フィリピンの機関が自国発行文書を認証する形になっており手続きとして成立しない
  → **live 確認済み**: `dist/en/hong-kong/index.html`
- `pages/CenomarByCountryEn.tsx:149`（日本の行）
  → **live 確認済み**: `dist/en/cenomar-requirements-by-country/index.html`

### 併せて: 湾岸3か国について同じサイトが正反対のことを言っている

`/en/cenomar-requirements-by-country/`（`CenomarByCountryEn.tsx:99-131`）:

- UAE「DFA Apostille **accepted**」
- カタール「DFA Apostille **accepted**」
- 「Bahrain, Kuwait, Oman — Gulf countries **generally accept DFA Apostille** for Philippine documents」

一方 `/en/uae/` `/en/qatar/` `/en/kuwait/` は「非加盟なので Embassy Attestation が必要」。
**非加盟国ではアポスティーユに法的効力がない**ので、正しいのは国別ページのほう。by-country表を直す必要がある。
サウジの行（`:114-121`）だけは逆に「DFA Apostille accepted」で**正しく**、`/en/saudi-arabia/` と矛盾している。

---

## 🔴 B. 「ハーグ加盟国 ＝ アポスティーユが必要」という論理の誤り（live 9ページ）

条約加盟が意味するのは「**領事認証の代わりにアポスティーユで足りる**」ことであって、
「**受理機関が認証を要求する**」ことではない。この2つを取り違えた文が骨格になっている。

live 確認済み（`dist/en/*/index.html` に「Hague Convention member — DFA Apostille is required」が実在）:
`australia` `canada` `italy` `netherlands` `norway` `singapore` `sweden` `switzerland` `uk`

### 反証（一次情報）

- **カナダ IRCC はアポスティーユを要求していない**。要求されるのは英仏の認証翻訳
- **ニュージーランド INZ もアポスティーユを要求していない**。要求されるのは認証翻訳

にもかかわらず:

- `pages/NewZealandDocsEn.tsx:56,142`「**Yes.** … Immigration New Zealand **requires** DFA Apostille authentication」
  → live 確認済み: `dist/en/new-zealand/index.html`
- `lib/countryConfig.ts:43-44`（NZ）も同じ断定

### すでに半分だけ直っている（＝直し漏れ）

カナダ・豪州・UK は **JSON-LD の FAQ だけ**「Not in every case / requirements vary」に修正済み（`CanadaDocsEn:54` `AustraliaDocsEn:54` `UkDocsEn:55`）。
しかし**画面に出る SummaryBlock の箇条書きは旧文のまま**:

- `pages/CanadaDocsEn.tsx:96` `pages/AustraliaDocsEn.tsx:96` `pages/UkDocsEn.tsx:97`
  「〜 is a Hague Convention member — DFA Apostille **is required** on Philippine documents」

**同じページの中で、構造化データと本文が逆のことを言っている状態。**

### 断定が強すぎる包括表現

| ファイル:行 | 記載 |
|---|---|
| `ApostilleGuideEn.tsx:103` | 「DFA Apostille **is required** for Philippine documents to be accepted abroad」 |
| `CenomarApostilleEn.tsx:96` | 「DFA Apostille **is required** for CENOMAR to be accepted by immigration authorities **worldwide**」 |
| `CenomarVsMarriageCertEn.tsx:151` | 「Apostille required? — **Yes, for most countries**」 |
| `PhilippineStatisticsAuthorityEn.tsx:95` | 「For international use, DFA Apostille **is required**」 |
| `LicenseConversionEn.tsx:102` | 「**Most countries require** an LTO Driver's Record with DFA Apostille for license conversion」— 米国の州DMVは筆記・実技試験が中心でアポスティーユ付きLTO記録を求めるのが通例ではない |

---

## 🔴 C. PSA書類の「紙のアポスティーユ」を約束しているページが live 16枚

2026-03-16 以降、**アポスティーユ条約加盟国あての PSA 書類に DFA は e-Apostille しか発行しない**
（[DFA公式告知](https://www.apostille.gov.ph/2026/03/16/philippines-launches-fully-digital-apostille-for-philippine-statistics-authority-psa-ecertificates-and-commission-on-higher-education-ched-ecavs/) /
[PSAHelpline](https://apostille.psahelpline.ph/)）。紙の Certificate of Authentication が出るのは**非加盟国あてだけ**。

`dist/` を grep して実在を確認したページ:
`australia` `canada` `cenomar` `cenomar-requirements-by-country` `cr1-visa-documents` `dfa-apostille-cebu-report`
`italy` `k1-visa-documents` `naturalization-guide` `netherlands` `norway` `singapore` `sweden` `switzerland` `uk` `us-visa-documents`

| 該当箇所 | 記載 |
|---|---|
| `AustraliaDocsEn:145` `CanadaDocsEn:145` `UkDocsEn:146` | 「Paper originals provided — required by Home Affairs / IRCC / UKVI」 |
| `Cr1VisaDocsEn:146` `K1VisaDocsEn:146` `UsVisaDocsEn:146` `NaturalizationEn:145` | 「Paper originals provided.」 |
| `pages/CountryDocsEnTemplate.tsx:119` | `isHagueConvention` が true のとき「Paper originals provided — required by ${agencyAbbr}.」を出力。**加盟国ほど紙を約束する**という逆の分岐になっている |
| `lib/countryConfig.ts:114,191,306,344,382,497` ほか | 「**Paper Apostille originals** shipped via DHL Express to your … address」（italy / netherlands / norway / singapore / sweden / switzerland） |
| `CenomarGuideEn:45`（HowTo JSON-LD）, `:236`（本文） | 「The **physical CENOMAR (with Apostille)** is shipped directly to your address」→ 同ページ `:118,268` の FAQ は正しく e-Apostille を説明しており矛盾 |
| `CenomarGuideEn:245` | 「USA (K-1 & CR-1 visa) — **Physical Apostille required**」→ 2026-08-30 の EN 修正（`6c34862`）と逆 |
| `CenomarByCountryEn:23,25` | 米国の行で、列は「**Physical DFA Apostille required**」、同じ行の注記は「**do not assume an Apostille is required**」。**1行の中で矛盾** |
| `DfaGalleriaCebuEn:150` | 「The e-Certificate … **does not come with DFA Apostille** and is generally not accepted by Japanese immigration. **A paper original with DFA Apostille is required.**」→ 前半後半とも現在は誤り。しかも**すぐ下の CTA（`:156`）は「We complete … DFA e-Apostille applications」**で自己矛盾 |

---

## 🟠 D. PSA Serbilis — 2ページが正反対のことを言い、どちらも古い

| ページ | 記載 |
|---|---|
| `/en/psa-serbilis/`（`PsaSerbilisEn:50,90,168`） | 「PSA Serbilis is **no longer the primary service** … replaced by PSAHelpline.ph … the old Serbilis URLs **no longer process new** requests」 |
| `/en/psa-online/`（`PsaOnlineEn:52,105,180`） | 「PSA Serbilis **is the official online ordering system** of the PSA … Our Cebu team **applies to PSA Serbilis**」 |

事実:

- PSA Serbilis は 2025-11-10 から停止していたが、**PSA 自身が「新しい PSA Serbilis サイトが稼働開始」と告知**しており、現在は再稼働している
- PSAHelpline は PSA の**唯一の第三者委託事業者**であって、PSA 公式ポータルの「置き換え」ではない
- → **どちらのページも現状を正しく説明できていない**

さらに `/en/psa-online/` のサービス訴求の前提そのものが古い:

- `PsaOnlineEn:120,130,188`「PSA Serbilis **only delivers within the Philippines** … you need someone with a Philippine address」
  → **2025-12-05 から PSAHelpline は国際オーダーを受け付けている**（物理原本は利用者側で国際クーリエを手配し waybill をアップロードする方式）。
  「フィリピンに受取人がいないと無理」という前提は成立しなくなっている
- `PsaOnlineEn:135`「DFA Apostille — which **requires the original to be physically submitted to DFA**」→ PSA書類については現在は誤り

---

## 🟠 E. 価格 — ページの構造化データが料金表と合っていない

`components/Pricing.tsx` の EN プラン（正典）:
Marriage Basic **$399** / Full **$699** / 単品 **$199**（認証込み **$349**）/ NBI **$399** /
LTO **$449** / Spouse visa **$599** / Naturalization **$699** / Complex **$899**

各ページが JSON-LD で出している `price`:

| 値 | 該当 | 問題 |
|---|---|---|
| **$219** | `ApostilleFeeEn:35,38` `CenomarApostilleEn:36,39` `CenomarValidityEn:37,40` `DfaProcessingTimeEn:36,39` | **$219 という価格は料金表のどこにも存在しない** |
| **$699**（LTO） | `LicenseConversionEn:36,39` `DriverRecordEn:36,39` | 料金表は **$449** |
| **$899**（配偶者ビザ） | `SpouseVisaEn:36,39` | 料金表は **$599** |
| **$899**（帰化） | `NaturalizationEn:36,39` | 料金表は **$699** |
| **$899**（結婚） | `MarriageGuideEn:35,38` | 料金表は **$399 / $699** |
| **$899** | `CanadaDocsEn` `AustraliaDocsEn` `UkDocsEn` `UsVisaDocsEn` `K1VisaDocsEn` `Cr1VisaDocsEn` `GermanyDocsEn` `NewZealandDocsEn` ＋ 国別config全13件（`price: '899'`） | 最上位の「Complex / Urgent」価格を、通常の国別ページの Offer 価格として全ページに出している |

Google と LLM が読むのは JSON-LD なので、検索結果・AI回答には $899 / $219 のほうが出る。

---

## 🟠 F. NBI の HIT 対応 — EN と JA が正反対の約束をしている

| | 記載 |
|---|---|
| **EN** `NbiGuideEn:56,203` | 「HIT resolution is **included at no extra charge**」 |
| **JA** `NbiGuideJa:137` | 「HIT（同名者照合）発生・緊急対応は**追加料金が発生することがあります**」 |

同じサービスで、片方は無料、片方は有料。どちらかを直す必要がある。

---

## 🟠 G. DFAアポスティーユの処理期間 — EN内で3通り、いずれも公式値と不一致

公式（[DFA Schedule of Fees](https://www.apostille.gov.ph/schedule-of-fees-tab/)）:
Regular ₱100 / **5 working days**、Expedited ₱200 / **2 working days**、e-Apostille ₱200 / **1 working day**

| 記載 | 場所 |
|---|---|
| 「**5–10 business days**」 | `DfaProcessingTimeEn:15`（meta description） |
| 「**4 business days** (Regular) or **next business day** (Express)」 | `DfaProcessingTimeEn:25,54`（JSON-LD Service + FAQ） |
| 「DFA Apostille **1–2 weeks**」 | `ApostilleGuideEn:71,187` |

`/en/apostille-processing-time/` は1ページの中だけで2通り。
また `/en/apostille-fee/` は「Apostille Fee」というページ名でありながら、**政府手数料（₱100 / ₱200）を一度も書いていない**。日本語版（`ApostilleFeeJa:106-107`）には書いてある。

---

## 🟡 H. 鮮度

- **ビルド実測: EN 68ページ中 38ページの `<title>` に「[April 2026]」が入っている**（本日は 2026-08-31）。
  原因は `lib/seoDate.ts` の `SEO_MONTH = '4'`。2026-08-25 の構造監査でも指摘済み・未修正
- `MarriageGuideEn` と `SpouseVisaEn` は **2026-08-31 のコミット `6c34862` で本文を書き換えたのに、表示は `lastUpdated="April 1, 2026"` のまま**。
  同じコミットの他3ページ（`MarriageOrderEn` `PhilippinesWeddingGuideEn` `SpouseVisaDocChecklistEn`）は August 30, 2026 に更新されている＝**直し漏れ**
- 表記ゆれ: `CenomarMeaningEn:94` `NbiClearanceOnlineEn:95` `PhilippineStatisticsAuthorityEn:86` `PsaOnlineEn:88` は「April 2026」（日付なし）、他は「Month D, YYYY」

---

## 🟡 I. その他

| 該当 | 内容 |
|---|---|
| `F6DocsEn:132` | CENOMAR「Valid for **approximately one year** from issuance」→ `/en/cenomar-validity/`（title・meta とも「typically valid for **6 months**」）および `CenomarByCountryEn` の韓国の行（「6 months from issuance」）と矛盾 |
| `App.tsx:328-331` と `App.tsx:483` / `scripts/prerender.ts:748,760` と `:1784` | **`/en/germany/` と `/en/new-zealand/` がそれぞれ2回定義されている**（専用コンポーネント＋国別テンプレート）。実測: HTMLは2回書かれ、後勝ちで `<head>` はテンプレート側、`<body>` は専用コンポーネント側になる。sitemap の重複は無し。現状 title が偶然一致しているため表面化していないが、**どちらか片方を編集しても反映されない**状態 |
| `LicenseConversionEn` | 変換先として日本を挙げている（`:101`）が、**2025-10-01 の外免切替厳格化**（住民票要件・短期滞在者は対象外・知識確認50問）に一切触れていない。日本語の法人向けページ（`BusinessMenkyoKirikaeKigyouJa`）には書かれている |
| `CompanyEn:32`（meta description） | 「IGRS Inc. is a **Cebu-based** document retrieval agency … for **US visa** and immigration applicants」→ 本文・JSON-LD は「和歌山の日本法人＋セブ営業所」。ターゲットも全世界向けで、meta だけ実態と食い違う |
| `HomeJa:167` vs EN 全ページ | JA トップは「現在ご依頼が集中しており納期は**約2ヶ月**」と告知しているが、EN 側には同じ告知がなく全ページ「4–6 weeks」のまま |
| `PricingEn:164-167` `TermsEn:74-80` | キャンセル・返金が **2段階**（着手前は無料／着手後は実費・作業分が返金不可）。JA 側は **4段階**（DHL発送後は返金不可を含む）。矛盾ではないが非対称 |

---

## ✅ 照合して「正しかった」もの

| 項目 | 記載場所 | 照合結果 |
|---|---|---|
| PSA出生証明書 窓口 **₱155** / PSAHelpline オンライン **₱365** | `PsaCostEn:16,17,55,111,123-124` | 一致 ✅ |
| JPETS **2025-06-23** 開始・**180日**有効・Panel Clinic **6拠点**・特定技能は当面免除 | `TbCertEn:18,46,54,62,97,98` | 厚労省・入管庁の案内と一致 ✅ |
| アポスティーユ条約のフィリピン発効 **2019-05-14** | EN各所 | 一致 ✅ |
| UAE・カタール・クウェートが非加盟であること | `countryConfig`（uae / qatar / kuwait） | 一致 ✅ |
| シンガポール 2021年加盟 | `countryConfig:197` | 2021-09-16 発効 ✅ |
| 韓国 F-6: 在ソウル比大使館の LCCM が別途必要／却下時6か月の再申請制限 | `F6DocsEn:10,26,97` | 韓国の運用と整合（一次情報での裏取りは未実施） |
| フィリピン先行婚（LCCM は在マニラ／セブ／ダバオの日本大使館・総領事館で本人申請、10日公示、3か月以内の報告） | `MarriageOrderEn` `PhilippinesWeddingGuideEn` | 2026-08-30 修正済み・正確 ✅ |
| 法人番号 2170001016118 / 和歌山市新高町2番13号 | `CompanyEn:44,49` | gBizINFO と一致 ✅ |
| **ENページへの日本語テキスト混入** | `pages/*En.tsx` 全件 | **0件**。CLAUDE.md の「EN の日本語バイアス（日本語テキスト混入）」は文字レベルでは解消済み ✅ |
| `/en/` 内部リンク | 全ページ | **リンク切れ 0件** ✅ |
| ビルド | `npm run build` | 136/136 生成・indexable 129/129・sitemap 127 URL・重複 `<loc>` 0件 ✅ |

---

## 推奨する直し方

JA側の監査（`docs/ja-content-factcheck-2026-08-31.md`）と共通の原則（構造は固定・中身は1〜2ページずつ・共通コンポーネント連打しない）に加えて、EN固有の順序:

1. **A（加盟状況の誤り）を最優先**。サウジ・香港・日本の3件は `lib/countryConfig.ts` と `CenomarByCountryEn.tsx` の**データ修正だけ**で直り、爆発半径は3ページ。金額の判断も要らないので今日着手できる
2. **B（加盟＝必須の論理）** は文言の型を1つ決めてから展開する。カナダ・豪州・UK の JSON-LD にすでに正しい型（"Not in every case; requirements vary by …; we verify the current checklist"）があるので、それを SummaryBlock と `countryConfig.summaryPoints` にコピーする
3. **C（紙アポスティーユ）** は `CountryDocsEnTemplate.tsx:119` の分岐を直すと国別13ページが一度に動く＝**共通コンポーネント変更**なので、CLAUDE.md のルールどおり単独デプロイ＋7日空ける
4. **D（Serbilis）** は `/en/psa-serbilis/` と `/en/psa-online/` を**同時に**直す。片方だけ直すと矛盾が残る
5. **E（価格）** は JA 側と同じく「正典はどれか」をユーザーが決めてから。`$219` は出所不明なので要確認
6. **F（HIT）** は EN/JA どちらが実際の運用かを確認してから片方を直す
7. **H の `SEO_MONTH`** は1行だがEN 38ページ＋JA全ページの title が動く。単独デプロイ推奨

※ 本ドキュメントは調査結果のみ。ページ本文の修正は含んでいない。
