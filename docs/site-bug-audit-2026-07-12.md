# サイト全体バグ監査レポート（2026-07-12）

`main`（3cf6413）を対象に、ビルド〜実機（headless Chromium）まで全128ページを機械監査した結果。
**修正状況（同日追記・本ブランチで修正済み）**: バグ1（og:image→プレースホルダー画像追加で解消）・バグ2（canonical 5ページ）・バグ3（urlMap死にエントリ）・バグ4（RelatedLinks言語対応）は修正し、hydration後canonical・EN見出し・画像Content-Typeを実機で検証済み。**バグ5（title/desc不一致95ページ）とバグ6（日付陳腐化）は未修正**（既存の分散修正計画で対応）。

## 監査方法

1. `npm run build`（lint-seo → vite build → prerender 129/129）
2. dist 全HTML の内部リンク・hreflang・JSON-LD・canonical・title を機械チェック
3. `vite preview` + Playwright で全128ページを実ロードし、静的HTML vs hydration後の title / description / canonical を比較、JSエラーを収集
4. App.tsx ルート vs prerender vs sitemap の突合、_redirects 先の存在確認
5. 主要5ページ（/ja/・/en/・/ko/・/ja/cenomar/・/ja/ryokin/）を SP(390px)/PC(1280px) でスクリーンショット目視
6. 本番 curl で og:image 実在確認

## 検出したバグ（重要度順）

### 🐛 1. hydration後の og:image が JA/KO 全ページで 404 画像を指す

- `lib/useMeta.ts:13-14` が `/og-image-ja.png`・`/og-image-ko.png` を参照するが、**この2ファイルは public/ に存在しない**
- 本番実測: `https://ph-document.com/og-image-ja.png` → HTTP 200 だが `text/html`（SPAフォールバックの210KB HTML）。KO も同様
- 影響: hydration後に全JA/KOページの `og:image`・`twitter:image` が非画像URLに書き換わる。FB/X等のスクレイパーは静的HTML（正しい `og-image.png`）を読むため実害は限定的だが、JS実行系クローラー（Google 2パスレンダリング含む）には壊れた画像シグナル
- 修正案: `og-image-ja.png`/`og-image-ko.png` を実際に作って public/ に置く、または useMeta.ts の定数を既存の `og-image.png` に統一（**useMeta.ts は構造ファイル扱いのため、修正タイミングは要判断**）

### 🐛 2. JA 5ページ: hydration後 canonical が末尾スラッシュ無し（301元URL）に書き換わる

対象ページ（いずれも `useMeta()` に渡す canonical 引数が末尾スラッシュ無しでハードコード）:

| ページ | 該当ソース |
|---|---|
| /ja/cenomar-vs-marriage-certificate/ | `pages/CenomarVsMarriageCertJa.tsx:18` |
| /ja/document-checklist-by-visa/ | `pages/DocumentChecklistByVisaJa.tsx:18` |
| /ja/nbi-clearance-overseas/ | `pages/NbiClearanceOverseasJa.tsx:18` |
| /ja/psa-late-registration/ | `pages/PsaLateRegistrationJa.tsx:18` |
| /ja/psa-shussei-shomeisho/ | `pages/PsaBirthCertJa.tsx:21` |

- 静的HTMLは正しい（スラッシュ有り）が、hydration後に canonical と og:url が「301リダイレクト元」のURLになる
- 影響: Google の2パスレンダリングで canonical シグナルが矛盾（正規URL→非正規URL）。canonical はレベル2（取扱注意）領域
- 修正案: 各ページの文字列末尾に `/` を足すだけ（5ファイル・各1文字）。canonical値の変更だが「静的HTMLと同じ値に揃える」方向なので実質バグ修正

### 🐛 3. `lib/urlMap.ts:37` に存在しないENページへの死にエントリ

- `'/en/dfa-apostille-genchi-report': '/ja/dfa-apostille-genchi-report'` — このENページは `/en/dfa-apostille-cebu-report` にリネーム済み（42行目に正しいエントリあり）
- ビルド時警告「urlMap validation: 1 missing from routes[]」の原因
- 逆引きマップは first-wins のため、`/ja/dfa-apostille-genchi-report` の EN対応が誤って旧URLに解決される
- 実害: 現状このページに可視の言語切替UIは無く、影響は ScrollToTop のスクロール維持判定と将来 `getLangSwitchUrl` を使うUIを追加した時の404。ビルド警告のノイズ除去も兼ねて37行目を1行削除すべき

### 🐛 4. ENページ10ページに日本語見出し「関連ページ」が表示される

- `components/RelatedLinks.tsx:9` が `関連ページ` をハードコードしており、EN 10ページで英語圏ユーザーに日本語が見える
- 対象: /en/dfa-apostille-cebu-report/・/en/getting-married-in-philippines/・/en/immigration-lawyer-vs-document-service/・/en/japan-first-vs-philippines-first-marriage/・/en/lto-sm-seaside-cebu-report/・/en/personalized-roadmap/・/en/psa-crs-cebu-report/・/en/psa-ecertificate-abroad/・/en/spouse-visa-document-checklist/・/en/tb-certificate/
- 既知の「EN日本語バイアス」問題の一部。共通コンポーネントだが、`lang` prop（または `heading` prop）を足して EN では "Related Pages" を出すだけの小修正。RelatedLinks を使う全ページに波及する点だけ留意

### 🐛 5. 【既知・持ち越しタスクA】title/desc の静的HTML vs hydration後の不一致: 95ページ

- 前回監査（2026-07-09、85ページ）から再計測。**今回は95ページ**（title不一致60・description不一致77・重複含む）
- #322 で修正済みの `/en/psa-birth-certificate-cost/`・`/ja/nbi-clearance/` は**同期維持を確認（OK）**
- 修正方針は既定どおり: prerender.ts 側（Googleが見る静的HTML）に `useMeta()` を合わせる、GSC表示回数順に1回5〜10ページずつ分散
- 全95ページの一覧は本レポート末尾の付録参照

### 🐛 6. 日付表記の陳腐化・不整合

- `lib/seoDate.ts` の `SEO_MONTH = '4'` のまま（現在7月）。サイト全域の title/バッジが「[April 2026]」「2026年4月」表示
  - ※更新は全ページのHTMLが変わる＝波及大。デプロイ頻度ルール（14日バケツ）に載せて計画的に実施すること
- seoDate 定数を使わない**ハードコードの旧日付**が残存（同一ページ内で April と March が混在するものも）:
  - `/en/spouse-visa-document-checklist/`: [March 2026] と [April 2026] が混在
  - `/ja/haigusha-visa-shorui/`（`pages/SpouseVisaShoryuJa.tsx`）: 「2026年3月版」「2026年3月時点」多数（既知）
  - `/ja/kekkaku-shomeisho/`: 「2026年3月版」
  - ほか `pages/*Ja.tsx` に `lastUpdated="2026年3月1日"` 等のハードコード多数（grep `2026年3月` で再現可能）

## 問題なしを確認した項目 ✅

| 項目 | 結果 |
|---|---|
| ビルド・prerender | 129/129 成功、lint-seo 通過 |
| JS実行エラー（pageerror） | 全128ページで **0件** |
| 内部リンク切れ | 0件（dist全HTML×アンカー、_redirects考慮済み） |
| hreflang | ターゲット全実在・相互参照（reciprocity）全整合・x-default全ページ有り |
| JSON-LD | 全ページでJSONパース可 |
| canonical（静的HTML） | 全ページ self-canonical 正常 |
| 重複 title | 0件 |
| ルート整合性 | App.tsx（動的な国別ルート含む）vs prerender vs sitemap 一致 |
| _redirects | 212ルール、リダイレクト先の不存在 0件 |
| UIレイアウト | /ja/・/en/・/ko/・/ja/cenomar/・/ja/ryokin/ を SP/PC で目視、崩れなし |
| KO料金表記 | KRW と円換算注記の整合 OK |
| chatApi.ts | SSEパース・LEAD_TOKENのチャンク跨ぎ検出とも問題なし |

## 推奨対応順（すべて別途承認・別コミットで）

1. **バグ2（canonical 5ページ）** — 5ファイル各1文字、静的HTMLと揃えるだけ。爆発半径小
2. **バグ3（urlMap 1行削除）** — ビルド警告解消。爆発半径小
3. **バグ4（RelatedLinks の言語対応）** — 共通コンポーネントのため単独コミット・14日バケツ考慮
4. **バグ1（og:image）** — useMeta.ts（構造ファイル）に触るか、画像2枚追加で済ませるか要判断
5. **バグ5・6** — 既存の持ち越しタスクA（5〜10ページ/回の分散修正）に日付ハードコード解消を合流させる

## 付録: title/desc 不一致 全95ページ

| ページ | 不一致項目 |
|---|---|
| / (root index.html) | title・desc |
| /en/ | title |
| /en/apostille-processing-time/ | desc |
| /en/cenomar-validity/ | title・desc |
| /en/cenomar-vs-marriage-certificate/ | title・desc |
| /en/cenomar/ | title・desc |
| /en/company/ | desc |
| /en/cr1-visa-documents/ | title・desc |
| /en/dfa-apostille-cebu-report/ | desc |
| /en/document-checklist-by-visa/ | title・desc |
| /en/driver-record/ | title・desc |
| /en/drivers-license-conversion/ | title・desc |
| /en/f-6-philippines-documents/ | title・desc |
| /en/germany/ | title・desc |
| /en/getting-married-in-philippines/ | desc |
| /en/guides/ | desc |
| /en/hong-kong/ | desc |
| /en/how-to-get-cenomar-abroad/ | desc |
| /en/immigration-lawyer-vs-document-service/ | title・desc |
| /en/international-marriage-guide/ | title・desc |
| /en/italy/ | desc |
| /en/japan-first-vs-philippines-first-marriage/ | title・desc |
| /en/k1-visa-documents/ | desc |
| /en/kuwait/ | desc |
| /en/lto-sm-seaside-cebu-report/ | desc |
| /en/naturalization-guide/ | title・desc |
| /en/nbi-clearance-overseas/ | title・desc |
| /en/nbi-clearance/ | title・desc |
| /en/nbi-hit/ | desc |
| /en/nbi-validity/ | title・desc |
| /en/netherlands/ | desc |
| /en/new-zealand/ | title・desc |
| /en/norway/ | desc |
| /en/personalized-roadmap/ | desc |
| /en/philippine-statistics-authority/ | desc |
| /en/pricing/ | title・desc |
| /en/psa-birth-certificate/ | title・desc |
| /en/psa-crs-cebu-report/ | title・desc |
| /en/psa-ecertificate-abroad/ | desc |
| /en/psa-late-registration/ | title・desc |
| /en/psa-marriage-certificate/ | title・desc |
| /en/psa-online/ | desc |
| /en/qatar/ | desc |
| /en/saudi-arabia/ | desc |
| /en/singapore/ | desc |
| /en/spouse-visa-document-checklist/ | title・desc |
| /en/spouse-visa-documents/ | title・desc |
| /en/sweden/ | desc |
| /en/switzerland/ | desc |
| /en/terms/ | desc |
| /en/uae/ | desc |
| /en/uk/ | desc |
| /en/us-visa-documents/ | desc |
| /ja/ | title |
| /ja/apostille-ryokin/ | title |
| /ja/apostille-shori-kikan/ | title |
| /ja/apostille/ | title |
| /ja/australia/ | title |
| /ja/business/ | title・desc |
| /ja/business/gyoseishoshi/ | title |
| /ja/business/kigyou/ | title・desc |
| /ja/business/menkyo-kirikae/ | desc |
| /ja/business/touroku-shien-kikan/ | title・desc |
| /ja/canada/ | title |
| /ja/cenomar-apostille/ | title |
| /ja/cenomar-koyukigen/ | title |
| /ja/cenomar-vs-marriage-certificate/ | title・desc・canonical |
| /ja/cenomar/ | desc |
| /ja/contact/ | desc |
| /ja/document-checklist-by-visa/ | desc・canonical |
| /ja/driver-record/ | title |
| /ja/gaimen-kirikae-guide/ | title・desc |
| /ja/gyouseishoshi-to-shorui-shuttoku/ | title |
| /ja/haigusha-visa-shorui/ | title・desc |
| /ja/kekkaku-shomeisho/ | title・desc |
| /ja/kojin-joho-hogo/ | title・desc |
| /ja/lto-koyo-kakunin/ | title・desc |
| /ja/nbi-clearance-overseas/ | desc・canonical |
| /ja/nbi-hit/ | title |
| /ja/nbi-koyukigen/ | title・desc |
| /ja/nihon-senko-ph-senko/ | title |
| /ja/philippines-de-kekkon/ | title・desc |
| /ja/privacy/ | title・desc |
| /ja/psa-kekkon-shomeisho/ | title・desc |
| /ja/psa-late-registration/ | desc・canonical |
| /ja/psa-shussei-cost/ | title・desc |
| /ja/psa-shussei-shomeisho/ | desc・canonical |
| /ja/ryokin/ | title |
| /ja/terms/ | title・desc |
| /ja/uk/ | title |
| /ja/us-visa-documents/ | title・desc |
| /ko/ | title |
| /ko/f-6-philippines-documents/ | desc |
| /ko/nbi-clearance/ | title・desc |
| /ko/pricing/ | title |

