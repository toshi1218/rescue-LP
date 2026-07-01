# 支払者ベース・セグメンテーション戦略 — 外国人配偶者向け英語ページ構成案

**作成日**: 2026-07-01
**元ネタ**: Sofia 案件（EUR 建て Wise・一人称複数への切替＝第三者支払いの傍証）
**位置づけ**: 凍結明け（回復期解除後）に着手する SEO/コンテンツ TODO。**本ドキュメント自体はコード変更を伴わない**（構成案の記録のみ）
**実装ゲート**: 新規ページ追加・prerender.ts / urlMap.ts / sitemap 変更は回復期対象。解除条件（2026-06-19 以降 ＋ GSC impressions 2週連続プラス）を満たすまで実装しない

---

## 0. 一行サマリー

**「摩擦の有無」×「支払者が誰か」の 2 軸で、最上位セグメント＝〈高摩擦 × 第三者支払い〉＝フィリピン人と結婚する外国人パートナーに正面から売る。** 買っているのは書類ではなく「婚姻手続きが遅延なく前進すること」。価格の比較対象を政府手数料（$10）から「遅延コスト（面接再予約・渡航やり直し・式の延期）」に移す。

---

## 1. 理論（記録用）

### 第三者支払い（third-party payer）＋ 感情的ステークス

価格弾力性が最も低くなる条件の組み合わせ。医療・冠婚葬祭・贈答品が同構造で高マージンを維持している。

1. **払う人の財布は痛むが、価格比較の動機がない** — 支払者は相場を知らない・調べない。買う行為自体が目的
2. **買っているのは物ではなく関係の前進** — 今回なら「婚姻手続きが進むこと」。書類は媒体
3. **値切ると買っているものの価値が毀損する** — 恋人の書類手続きで値切る行為は支払者の中で何かを損なう。値切り圧力が構造的に弱い

Sofia の「なぜ $10 の書類が $100？」は**受益者の論理**。支払者（配偶者）はその質問をしない。彼女があっさり納得したのは自分の財布が痛まないため、と読むと整合する。

### 2 軸セグメンテーション

|              | 受益者＝支払者              | 第三者が支払い                     |
|--------------|-----------------------------|------------------------------------|
| **高摩擦**   | —                           | ★**最上位**：国際結婚の書類（外国人パートナーが支払い） |
| **低摩擦**   | 最安値競争（OFW の自己手続き）| （限定的）                         |

- 既存の枠組み「摩擦ゲートにしかマージンはない」に、**第二の軸「支払者ベースのセグメンテーション」**が加わった
- **OFW = 受益者＝支払者・送金原資からの支出 = 価格弾力性最大**。ここで戦うと最安値競争。避ける

### 運用上の留意（レビュー崩壊の防止）

これは「高く売りつける」話ではない。**支払者が本当に買っているもの（確実性・速度・手続きの前進）を正面から売る**話。ここを外すと足元を見た価格設定になりレビューで崩れる。訴求は必ず「確実性・速度」に紐づける。

---

## 2. 現状監査 — 転換はコード上すでに大半が完了している

英語ページ群は**すでに外国人パートナー（受益者ではなく支払者）が打つクエリに対応済み**。理論に対する「未実装」はゼロからのページ制作ではなく、**フレーミングと価格の見せ方**に集中している。

### 既に存在する資産

| ページ | slug | 支払者ターゲットへの対応度 |
|--------|------|---------------------------|
| `MarriageGuideEn.tsx` | `/en/international-marriage-guide/` | ◎ 既に "Marrying a Filipino? Documents We Get for You" で支払者視点。title/description も K-1・spouse visa 訴求済み |
| `K1VisaDocsEn.tsx` | K-1 | ◯ 外国人 petitioner 向け |
| `Cr1VisaDocsEn.tsx` | CR-1 | ◯ 同上 |
| `UsVisaDocsEn.tsx` / `UkDocsEn.tsx` / `CanadaDocsEn.tsx` / `AustraliaDocsEn.tsx` | 各国 | ◯ 移民先国の外国人配偶者向け |
| `CountryDocsEnTemplate` 経由 11 か国 | new-zealand, germany, netherlands, uae, singapore, hong-kong, qatar, italy, norway, sweden, switzerland | ◯ family reunification / partner visa の外国人側 |
| `PhilippinesWeddingGuideEn.tsx` | `/en/getting-married-in-philippines/` | ◯ 現地挙式する外国人向け |

**結論**: 「英語 56 ページを海外フィリピン人から外国人パートナーへ全面転換」は誤認。**大半が既に外国人パートナー向け**。やるべきは全面書き換えではなく、以下の 3 点の**上乗せ**。

---

## 3. やること（凍結明け・段階適用・各 2 週間観察）

> **重要**: 全ページ一括変更は禁止（回復期＋コミット量ルール）。1 ページずつ、2 週間 GSC 観察してから次へ。SEO 実装手順（CLAUDE.md）に従い、対象ページを都度確認。

### 3-A. 価格の再フレーミング（最優先・レベル4・SEO 安全）

**内容**: 各主要ページの価格提示直前に「比較対象の付け替え」ブロックを直書き追記。政府手数料ではなく遅延コストと比較させ、Sofia の "$10 → $100?" 質問が発生する前に潰す。

**追記文の型（EN）**:
```
Before you compare this to the ~$10 government fee, compare it to the real cost of a delay:
• Rebooking a visa interview / consular appointment
• Re-doing international travel because a document arrived late or got rejected
• Postponing the wedding itself
Against those, getting every Philippine document right the first time — CENOMAR, PSA, NBI +
DFA Apostille, shipped worldwide — is the cheap part.
```

**適用順（1 ページずつ）**:
1. `/en/international-marriage-guide/`（`MarriageGuideEn.tsx`）— 最も支払者純度が高い
2. `/en/k1-visa-documents/` 等 K-1 ページ
3. 各国ページ（`CountryDocsEnTemplate` は共通コンポーネント経由なので**直書きせず config 側に per-country のオプション文字列**を足す形にする。共通テンプレ本体への文言直書きは全ページ一斉更新シグナルになるため避ける）

**SEO/LLMO 影響**: 本文追記のみ（レベル4）。構造非変更＝低リスク。LLMO 面ではむしろ「価格の妥当性根拠」が明文化され引用されやすくなるプラス。

### 3-B. 支払者視点のフレーミング補強（レベル4・ページ単位）

**内容**: 各ページの導入部に「読者＝支払者（外国人パートナー）」を明示する一文を追加。既に MarriageGuide は対応済みなので、対応が弱いページ（各国テンプレ・US/UK/CA/AU）を優先。

**型**: `"Marrying a Filipina/Filipino? We handle every Philippine document so your wedding — and your visa timeline — isn't held up by paperwork you've never dealt with before."`

**検索クエリ想定（支払者が打つ）**:
- `PSA birth certificate for marriage in France`（★下記 3-D の France ギャップに直結）
- `CENOMAR for K-1 visa`
- `apostille Philippine documents for [country] spouse visa`
- `how to get fiancée's PSA documents from abroad`
- `Philippine marriage requirements for foreigner`

### 3-C. 決済摩擦の除去（コード外・業務オペ／CEO マター）

支払者が欧州・北米にいる前提なら、**EUR/USD 建て請求書 ＋ カード決済は「あれば便利」ではなく支払者に直接リーチする必須経路**。来週対応予定のカード決済はこの文脈で優先度が一段上がる。

- Sofia は WhatsApp でのパスポート送付に不安を明言 → ドメインメール（info@ph-document.com）と簡易アップロードフォームの整備が体感を変える（前回セッションの改善提案 #4 と重複・統合管理）
- **コード側でできる補助**: カード決済実装後、CTA 近くに「Card payment available / EUR・USD invoicing」バッジを追加（レベル4）。ただし決済実装完了後に着手

### 3-D. France（および EU 仏語圏）ページのギャップ補完（新規ページ・回復期対象・要注意）

**発見**: 国別 config は NZ/DE/NL/UAE/SG/HK/QA/IT/NO/SE/CH。**France が無い**。CEO の例 "marriage in France" はまさにこのクエリ。仏はフィリピン人配偶者の移民先として実数が多く、支払者純度も高い。

**やること（凍結明け・単発ページとして）**:
- `lib/countryConfig.ts` に France エントリ追加（slug: `france`, countryCode: `FR`, visaType: `Regroupement familial / Visa long séjour conjoint`）
- `CountryDocsEnTemplate` 経由で自動生成されるため本文制作コストは低い
- **ただし** 新規ルート追加＝`prerender.ts` / `urlMap.ts` / `sitemap` に触れる＝**回復期トリガー＆SEO-destructive 相当**。以下を厳守:
  - 回復期解除後に単発で実施（同日に他の SEO 変更をしない）
  - hreflang は EN 単独で開始（JA/KO 対応ページが無いなら reciprocity を作らない）
  - 追加後 2〜4 週間 GSC でインデックス状況を観察してから次国（Spain / Belgium 等）を検討
- **候補追加国**（France 定着後）: Spain, Belgium, Ireland — いずれもフィリピン人配偶者移民の実数がある英/仏/西語圏

### 3-E. 問い合わせフォームのセグメント活用（一部完了済み）

- `service = "International Marriage"` の選択肢は既に存在 → このリードは支払者構造が違う＝価格感度が違うと判別可能
- 本セッションで JA/EN/KO フォームに**部数・出生地・PSA 原本有無・配送先国・希望期限**を追加済み（別コミット `0d9dc80`）。初回返信で見積もり可能に
- **凍結明け候補**: web3forms の通知先で `service=International Marriage` を別ラベル化し、見積もり方針（遅延コスト訴求・確実性重視）を運用側で切り替え

---

## 4. 優先度まとめ

| 優先 | 項目 | レベル | 実装可能時期 |
|------|------|--------|-------------|
| 1 | 3-A 価格の再フレーミング（marriage-guide 1 ページ先行） | レベル4 | 凍結明け即 |
| 2 | 3-B 支払者フレーミング補強（弱いページから 1 枚ずつ） | レベル4 | 凍結明け・A の 2 週後 |
| 3 | 3-C 決済バッジ（カード決済実装後） | レベル4 | 決済実装後 |
| 4 | 3-D France ページ新設 | レベル2相当（新規ルート） | **回復期解除後・単発** |
| 5 | 3-E フォーム通知のセグメント分岐 | 非SEO | いつでも |

---

## 5. やらないこと・注意

- **英語 56 ページの全面書き換えはしない**（大半が既に支払者向け。全面改稿は大変更シグナル＆レビュー崩壊リスク）
- **共通テンプレ（CountryDocsEnTemplate）本体への文言直書きはしない**（全国ページ一斉更新シグナル）。per-country は config 側で出し分ける
- **価格訴求は必ず「確実性・速度」に紐づける**。単独の値上げ・足元見た価格設定はレビューで崩れる
- **France 追加を「ついで」で他の SEO 変更と同日にやらない**（回復期・単日複数 SEO 変更禁止）
