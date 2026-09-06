# /ja/ 全ページ 事実確認監査 — 2026-08-31

対象: `/ja/` 配下の日本語ページ 57枚（`pages/*Ja.tsx`）＋ 共通の `components/Pricing.tsx`
方法: 全ページの本文・meta・JSON-LD を機械抽出して横断比較（内部整合性）＋ 一次情報での外部照合（外部事実）
方針: 推測で「間違い」とは書かない。確認できたものは出典を付け、確認できなかったものは「未検証」と明記する。

**総括**: SEO構造・内部リンクは健全（リンク切れ 0件）。問題は**コンテンツの事実**に集中している。
最大の原因は「2026年3月16日のDFA e-Apostille完全移行」と「2026-08-23の価格統一(#436)」「2026-08-30のEN側修正」が
**一部のページにしか反映されていない**こと。同じサイトの中に新旧2つの世界が同居している状態。

---

## 🔴 A. PSAの「紙のアポスティーユ」— 現在は取得できないものを商品として掲載している

### 事実（一次情報）

- 2026年3月16日、DFAは PSA eCertificate / CHED eCAV の **Fully Digital Apostille** を開始
  （[apostille.gov.ph 公式告知](https://www.apostille.gov.ph/2026/03/16/philippines-launches-fully-digital-apostille-for-philippine-statistics-authority-psa-ecertificates-and-commission-on-higher-education-ched-ecavs/)）
- **アポスティーユ条約加盟国あての PSA 書類には e-Apostille のみが発行される**。
  非加盟国あてのみ SECPA 紙原本＋ Certificate of Authentication（紙）が発行される
  （[PSAHelpline アポスティーユ案内](https://apostille.psahelpline.ph/)）
- **日本はアポスティーユ条約加盟国** → 日本向けPSA書類に紙のアポスティーユは付かない。

この事実は `HomeJa` `EApostilleFukaJa` `CenomarGuideJa` `PricingJa` `SpouseVisaJa` `MarriageGuideJa` `PsaEcertificateNihonJa` では**正しく書かれている**。
問題は、以下が**古いまま残っている**こと。

### 該当箇所

| ファイル:行 | 記載内容 | 問題 |
|---|---|---|
| `pages/CenomarApostilleJa.tsx:114-123` | 同じ枠内で「2026年3月16日より完全移行」と書いた直後に「**当社は紙の原本＋DFAアポスティーユで対応しています**」 | 単一ブロック内での自己矛盾。最も目立つ |
| `pages/CenomarApostilleJa.tsx:72-75, 242` | 「原則として紙の原本＋DFAアポスティーユが必要です」 | 現在は取得不可 |
| `pages/CenomarApostilleJa.tsx:21,30,92,102,166,173,192,220` | ページ全体が「紙の原本アポスティーユ」訴求 | ページ設計ごと旧前提 |
| `pages/PsaBirthCertJa.tsx:20,182,197,249` | 「紙の原本＋DFAアポスティーユ形式で取り寄せ」「紙の原本で対応します」 | 同上 |
| `pages/PsaMarriageCertJa.tsx:16,98,121,186` | 「アポスティーユ付きの紙の原本が原則」 | 同上 |
| `pages/NaturalizationJa.tsx:177` | 「**全書類共通でDFAアポスティーユ（紙の原本）が必要です**」 | 同一ページ内 `:141`（PSAはe-Apostille一本化）`:312`（PSAはオンライン申請＋e-Apostille）と矛盾 |
| `pages/NaturalizationJa.tsx:195-197,228` | PSA各書類の形式を「DFAアポスティーユ付き原本」と表記 | 同上 |
| `pages/ApostilleGuideJa.tsx:14`（meta description） | 「紙の原本で日本へ郵送」 | 2026-03の変更が本文にも未反映（`:148` は「2025年の運用変更」で止まっている） |
| `pages/BusinessGyoseishoshiJa.tsx:39,47,87` | 「紙の原本アポスティーユ対応」「入管・市区町村役場・裁判所が求める『紙の原本アポスティーユ』形式で手配」 | 行政書士向けページ。専門家に誤情報が届く |
| `pages/InputSupportJa.tsx:59`（JSON-LD FAQ） | 「日本の…では紙の原本・**物理アポスティーユ**を求めるケースが多い」 | **同じページの本文 `:204` は正しく修正済み**。構造化データだけ旧版 = Google/LLMが読むのは旧版 |
| `components/Pricing.tsx:50,82,196` | 国際結婚準備パック／配偶者ビザ準備書類パック／帰化申請書類パックの `includes` に「DFAアポスティーユ認証」 | PSA書類のパックなので、実際に何が付くのか（e-Apostille）が読者に伝わらない |

> 補足: 正しい表現は `EApostilleFukaJa` にある**「紙のPSA原本（SECPA）＋ e-Apostille（電子認証）」**。
> これを他ページの正典としてコピーするのが最短。

---

## 🔴 B. 同じサービスに 4通りの価格が載っている

`components/Pricing.tsx`（料金表の正典）では、PSA単品は

- 認証なし **¥28,000（税込・DHL込み）**
- e-Apostille込み **¥30,000〜（税込）**
- 紙原本も要る場合 +¥10,000 = **¥40,000〜**

一方、他ページには以下が生きている。

| 価格 | 掲載場所 |
|---|---|
| **¥50,000〜（税抜）** | `PsaBirthCertJa.tsx:46,67,142,166,292` / `PsaCostJa.tsx:14`(meta) / `NaturalizationJa.tsx:41-47,68,294,331` / `ApostilleFeeJa.tsx:40-45`(JSON-LD) / `DfaProcessingTimeJa.tsx:39-45`(JSON-LD) / `CenomarApostilleJa.tsx:46,206` |
| **¥55,000〜（税抜）** | `BusinessHomeJa.tsx:149,154` / `BusinessTourokushienJa.tsx:97,102` / `BusinessGyoseishoshiJa.tsx:119,124,129` |
| **¥40,000〜（税込）** | `BusinessKigyouJa.tsx:145`（#436で統一済み。他の法人ページが取り残された） |

同様の食い違い:

- **LTO外免切替**: ¥99,000（税込・送料込み／`LicenseConversionJa` `DriverRecordJa` `BusinessMenkyoKirikaeJa` `Pricing.tsx`）に対し、`BusinessHomeJa.tsx:164` だけ **¥120,000〜（税抜）**
- **NBI更新**: `BusinessHomeJa.tsx:159` `BusinessTourokushienJa.tsx:107` が **¥50,000〜（税抜）**、`NbiGuideJa` は **¥39,800〜（税込）**／原本郵送込み ¥45,800、料金表は取得代行フル **¥55,000**
- **CENOMAR**: `CenomarGuideJa.tsx:180` は「代行料金（**税抜**）30,000円〜」、`Pricing.tsx` の同一プランは「**¥30,000〜 税込**」— **同じ数字で税の扱いが逆**。実際にいくら請求されるのかが決まらない
- **アポスティーユの加算額**: `NbiGuideJa.tsx:45,137` は「アポスティーユを付ける場合 **+20,000円**」、`Pricing.tsx` のアポスティーユ単体プランは **¥30,000＋税＋DHL¥6,000＝¥39,000**、PSA単品では **+¥2,000**（¥28,000→¥30,000）

---

## 🔴 C. 特定商取引法ページの記載が、他ページの実態と食い違う

| `pages/TokushoJa.tsx` の記載 | サイト内の実態 |
|---|---|
| `:34` 所在地「和歌山県和歌山市（**詳細は請求があり次第、遅滞なく開示**）」 | `pages/CompanyJa.tsx:54` で「**和歌山県和歌山市新高町2番13号**」を全面公開。gBizINFO（法人番号 2170001016118）でも公開。「請求があり次第開示」という説明自体が事実と違う |
| `:39` 追加費用「**なし**（ご案内した金額以外の費用は発生しません）」 | 多数のページが「**DHL国際郵送費は実費別途**」（`PsaBirthCertJa:67` `NaturalizationJa:47,68` `ApostilleFeeJa:45` `DfaProcessingTimeJa:45` `UsVisaDocsJa:64` ほか）。`NbiGuideJa:137`「HIT発生・緊急対応は追加料金が発生することがあります」。`PricingJa:106`「追加費用が必要な場合は、着手前に内容と金額をご案内し」 |
| `:41` サービス提供時期「全体で **4〜6週間**」 | `HomeJa.tsx:167`「現在ご依頼が集中しており、納期は**約2ヶ月**が目安です」 |

特商法表記は法定の開示なので、ここだけは「営業上の表現」では済まない。**どれが本当か決めて一本化が必要**。

### 併せて: 税抜表示（総額表示義務）

消費者向けページで **税抜** 表示が残っているもの（15ファイル以上）:
`ApostilleFeeJa:45` `AustraliaDocsJa:44` `CanadaDocsJa:44` `CenomarApostilleJa:46,200` `CenomarGuideJa:47,180,192`
`CenomarValidityJa:45` `DfaProcessingTimeJa:45` `MarriageGuideJa:48,133` `NaturalizationJa:47,294,331` `NbiHitJa:46`
`PsaBirthCertJa:46,141,160,292` `PsaCostJa:14` `PsaMarriageCertJa:41` `SpouseVisaJa:43,112,132`
`BusinessHomeJa:133` `BusinessTourokushienJa:81` `BusinessGyoseishoshiJa:103`

2021年4月から消費者向けは総額表示が義務。`HonyakuJa` `InputSupportJa` `NbiGuideJa` `LicenseConversionJa` `Pricing.tsx` は税込表示になっており、**サイト内で流儀が割れている**。

---

## 🟠 D. DFAアポスティーユの処理期間 — サイト内で4通り、しかもどれも公式値と違う

### 公式値（[DFA Authentication Division / Schedule of Fees](https://www.apostille.gov.ph/schedule-of-fees-tab/)）

| 区分 | 手数料 | 交付 |
|---|---|---|
| Regular | ₱100 | **5 working days** |
| Expedited | ₱200 | **2 working days** |
| e-Apostille | ₱200 | **1 working day** |

### サイトの記載

| 記載 | 場所 |
|---|---|
| 「Regular **4営業日**・Express **翌営業日**」 | `DfaProcessingTimeJa.tsx:18,19`（title と meta description）／`ApostilleFeeJa.tsx:182`／`NbiGuideJa.tsx:377`／`CenomarGuideJa.tsx:391` |
| 「Regular **通常5日程度**・Express **3日程度**」 | `DfaProcessingTimeJa.tsx:30,58,105,128,163`（本文・FAQ・JSON-LD） |
| 「通常 **4〜5営業日**」 | `DfaProcessingTimeJa.tsx:90` |
| 「通常 **1〜2週間**」 | `ApostilleGuideJa.tsx:89,268`／`CenomarApostilleJa.tsx:157`／`CenomarGuideJa.tsx:92`／`LicenseConversionJa.tsx:98`／`LtoKoyoKakuninJa.tsx:249`／`PsaBirthCertJa.tsx:91`（「約2週間」） |

**`DfaProcessingTimeJa` は1ページの中だけで3通り**（title=4営業日、本文=5日/3日、要約=4〜5営業日）。
このページは title に数字を書いているので、検索結果にそのまま誤った数字が出る。

なお「Regular ₱100・Express ₱200」という**手数料は正しい**（`ApostilleFeeJa.tsx:106-107,204`）。
ただし「翌営業日」は Express ではなく **e-Apostille** の交付日数。

---

## 🟠 E. 海外ビザ向け4ページ — 「アポスティーユが必要」の断定が誤り

| ファイル:行 | 記載 | 事実 |
|---|---|---|
| `CanadaDocsJa.tsx:57,199` | 「**はい。**カナダはハーグ条約加盟国です。IRCCへの申請には…DFAアポスティーユ認証が**必要です**」 | カナダの条約加盟（2024-01-11発効）は事実だが、**IRCCは外国公文書のアポスティーユ／認証を要求していない**。要求されるのは英仏の認証翻訳。加盟＝要求 ではない |
| `AustraliaDocsJa.tsx:57,199` | 「Department of Home Affairsへの提出には…必要です」 | 同型の断定。Home Affairs は認証翻訳を求めるがアポスティーユを一律要求していない（**要一次情報確認**） |
| `UkDocsJa.tsx:57,199` | 「UKVIへの提出には…必要です」 | 同上（**要一次情報確認**） |
| `UsVisaDocsJa.tsx:136` | 「米国提出書類には**ほぼ必須**」 | 2026-08-30 のコミット `6c34862` で **EN側は逆の内容に修正済み**（"The U.S. Embassy Manila checklist does not impose a universal DFA Apostille requirement"）。JA側だけ旧記述のまま = 言語間で正反対 |
| `DocumentChecklistByVisaJa.tsx:60-62,209` | 「アポスティーユは毎回必要ですか？→ **多くの国際手続きでは必要です**」 | 同上。アポスティーユを実務上求めるのは主に日本・韓国等の戸籍／登録手続き |

### 併せて: コピペ残り

**11ファイル**で、カナダ・豪州・UK・米国のページなのに見出しが
「DFAアポスティーユ認証（※**日本の手続き**ではほぼ必須です）」になっている:
`AustraliaDocsJa:148` `CanadaDocsJa:148` `UkDocsJa:148` `UsVisaDocsJa:165`
（他に `CenomarApostilleJa:191` `CenomarValidityJa:132` `DfaProcessingTimeJa:127` `DriverRecordJa:187` `NaturalizationJa:280` `PsaBirthCertJa:248` `PsaMarriageCertJa:159`）

---

## 🟠 F. 外免切替 — 2025年10月の制度改正が消費者向けページに反映されていない

2025年10月1日施行の改正で、外免切替は以下が変わった（[警察庁／各県警・報道](https://www.nikkei.com/article/DGXZQOUD04C6V0U5A700C2000000/)）:

- **日本の住民票が必要**になり、**短期滞在の観光客等は対象外**
- **知識確認が10問→50問**、正答率**90%以上**（45問以上）
- **技能確認の採点基準も厳格化**

サイト内の状況:

| ページ | 状態 |
|---|---|
| `BusinessMenkyoKirikaeKigyouJa.tsx:134,276,449` | ✅ 正しく記載（50問・90%以上・住所確認の厳格化） |
| `LicenseConversionJa.tsx:58,66,329,330`（`/ja/gaimen-kirikae-guide/`） | ❌ 「必要なのは①有効な免許 ②3か月滞在 ③LTO書類」で止まっている。住民票・知識確認・技能確認に一言も触れていない |
| `DriverRecordJa.tsx` / `BusinessMenkyoKirikaeJa.tsx` | ❌ 同様に未記載 |

`/ja/gaimen-kirikae-guide/` は GSC で最も反響のあるクラスタの入口。
**「3か月滞在さえ満たせば切替できる」と読める状態**は、短期滞在の読者にとって実害がある。
なお「免許取得後に通算3か月以上の滞在」という要件自体は**正しい**。

---

## 🟡 G. 鮮度シグナル（表示上の日付が実態と合っていない）

- `lib/seoDate.ts` の `SEO_MONTH = '4'` が4月のまま → JA主要ページの title が今も **【2026年4月最新】**（本日は8月31日）。
  これは 2026-08-25 の構造監査（リスク1）で指摘済みだが**未修正**
- `pages/PsaEcertificateNihonJa.tsx:33` / `scripts/prerender.ts:959` — title が **【2026年4月版】**、本文 `:62` は「**2026年8月14日時点**の確認情報」= 同一ページ内で日付が矛盾
- `pages/TbCertJa.tsx:23,28,31` — パンくず・JSON-LD headline が **【2026年3月版】**、`dateModified: '2026-03-14'`。
  `:402` の関連リンク文言も「配偶者ビザに必要な書類チェックリスト**【2026年3月版】**」で固定
- 表示上の「最終更新日」が `2026年3月1日` のまま残るページが約30枚。
  2026-08-26 の PR #442 で「真の更新日が確認できないものは据え置き」と判断済みなので**既知**。ただし A・B・D で内容を直すページは、その修正日に更新するのが筋

---

## 🟡 H. 細かい誤り

| ファイル:行 | 内容 |
|---|---|
| `GyoseishoshiVsDocServiceJa.tsx:117` | 「**フィリピドへの**国際郵送」— 誤字（→「フィリピンからの」） |
| `GyoseishoshiVsDocServiceJa.tsx:235` | 「配偶者ビザは本人・配偶者・弁護士・**行政書士が申請できます**」— 行政書士・弁護士は「申請者」ではなく**申請取次者**で、地方出入国在留管理局長への**届出済**であることが前提。同ページ `:90` の「入国管理局への申請書類の作成・**提出代行**」も同じ理由で要修正 |
| `NbiGuideJa.tsx:172` | 外部リンクが `http://nbi.gov.ph`（httpsでない） |
| NBIの日本語名が不統一 | 「フィリピン**国家**捜査局」（`NbiGuideJa:172` `HomeJa:107`）と「フィリピン捜査局」（`NaturalizationJa:136,229` `DocumentChecklistByVisaJa:110`）。正式名は National Bureau of Investigation = 国家捜査局 |
| `NaturalizationJa.tsx:212` | 「アポスティーユなし → **原本だけでは不受理になります**」と断定。同ページ `:176` は「警察記録証明書は必須書類ではなく『その他』区分」と正しく緩めており、トーンが不整合。法務局の運用は管轄差が大きいので断定は避けたい |

---

## ✅ 照合して「正しかった」もの（安心材料）

| 項目 | 記載場所 | 照合結果 |
|---|---|---|
| PSA出生証明書 **₱365** | `PsaCostJa:14,87,176` | PSAHelpline の出生・婚姻・死亡 ₱365 と一致 ✅ |
| CENOMAR **₱420** | `CenomarGuideJa:182` | PSAHelpline の CENOMAR/CENODEATH ₱420 と一致 ✅ |
| DFA政府手数料 Regular ₱100 / Express ₱200 | `ApostilleFeeJa:106-107` | DFA公式 Schedule of Fees と一致 ✅ |
| アポスティーユ条約のフィリピン発効 **2019年5月14日** | `ApostilleGuideJa:41,118,244` | 一致 ✅ |
| JPETS **2025年6月23日**開始・有効**180日**・特定技能は当面対象外 | `TbCertJa:19,29,47,55,88` | 厚労省・入管庁の案内と一致 ✅ |
| 外免切替の「免許取得後 通算3か月以上の滞在」要件 | `LicenseConversionJa:124,176,185` | 一致 ✅（ただしF参照） |
| フィリピン先行婚のLCCMは**在フィリピン日本国大使館・セブ／ダバオ総領事館で本人申請** | `PhilippinesWeddingGuideJa:95,211` `MarriageOrderJa:165` | 大使館PDFのとおり ✅（2026-08-30に修正済み） |
| 婚姻届の**10日間公示**・成立後**3か月以内**の報告的届出 | `PhilippinesWeddingGuideJa:52,99,107` | 一致 ✅ |
| 法人番号 **2170001016118** / 和歌山市新高町2番13号 | `CompanyJa:54,72` | gBizINFO と一致 ✅ |
| 名古屋のフィリピン総領事館の存在 | `GyoseishoshiVsDocServiceJa:46,114,234` | 実在 ✅ |
| NBI更新の「2014年以降・個人情報変更なし」条件 | `NbiGuideJa` `NbiValidityJa` | 大使館案内と整合 ✅ |
| `/ja/` 内部リンク | 全ページ | **リンク切れ 0件** ✅ |
| 金額の算術（¥15,000+¥1,500=¥16,500／¥132,500+¥26,500=¥159,000／49,800×1.1=54,780 ほか） | 各ページ | すべて一致 ✅ |
| TbCertJa のクリニック別費用（IOM ₱4,500/₱9,200/₱6,500、NHS ₱7,445/₱8,755） | `TbCertJa:170,186,266,285` | ページ内で整合。**外部一次情報は未検証**（各クリニック公表値の確認が必要） |

---

## 推奨する直し方（SEO安全性を踏まえた順序）

CLAUDE.md の「構造は固定・中身は日次でOK」「1コミット20ファイル未満・共通コンポーネント連打しない」に沿うと:

1. **A（紙アポスティーユ）を最優先で1〜2ページずつ**。まず `/ja/cenomar-apostille/`（自己矛盾が最も強い）→ `/ja/psa-shussei-shomeisho/` → `/ja/psa-kekkon-shomeisho/` → `/ja/kika-shinsei-guide/`。
   本文だけでなく **JSON-LD も同時に直す**（`InputSupportJa` のように本文だけ直すと構造化データが旧版のまま残る）
2. **B（価格）は「正典はどれか」をユーザーが決めてから一括**。`Pricing.tsx` を正とするなら、税抜表記のページを税込に揃える作業とセットになる
3. **C（特商法）は独立した1コミット**。法定表記なので他の変更と混ぜない
4. **D（処理期間）は数字を1か所に定数化**してから全ページ差し替え（`lib/` に定数を置く）。title に数字が入っているページがあるのでレベル3扱い
5. **E・F は各ページ1本ずつ**。E は EN 側（`6c34862`）の言い回しをJAへ移植すれば済む
6. **G の `SEO_MONTH`** は1行変更だが全ページの title が動く（レベル3・全ページ波及）。単独デプロイ推奨

※ 本ドキュメントは調査結果のみ。ページ本文の修正は含んでいない。
