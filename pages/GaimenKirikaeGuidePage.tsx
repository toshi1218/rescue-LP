import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, AlertTriangle, FileText, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

const faqs = [
  {
    q: 'フィリピンの運転免許証で日本の免許に切り替えられますか？',
    a: 'はい、可能です。フィリピンと日本は「道路交通に関する条約（ジュネーブ条約）」の加盟国です。ただし、フィリピン免許の取得経緯（適正な手続きで取得したもの）や在留資格によって審査が異なります。外免切替（外国免許切替）の手続きを各都道府県の運転免許センターで行います。',
  },
  {
    q: '外免切替に必要な書類はすべて日本で揃えられますか？',
    a: 'いいえ、フィリピン側の書類が必要です。具体的にはフィリピンLTOが発行する「運転記録証明書（Certification of Driver\'s License）」や「免許の真正証明」が必要になります。これらはLTO（フィリピン陸運局）に申請して取得します。当センターで代行取得が可能です。',
  },
  {
    q: '外免切替のLTO書類取得にどのくらいかかりますか？',
    a: '代行サービスを利用した場合、約3〜8週間が目安です。LTOは支局によって処理時間が異なり、記録照会に時間がかかる場合があります。余裕を持ったスケジュールで申請することをおすすめします。',
  },
  {
    q: '免許の取得から一定期間以上経過していないと切替できませんか？',
    a: 'フィリピン免許取得後、一定期間（通常3ヶ月以上）その免許を使用していたことが求められます。また、日本に入国した日以降に免許を取得した場合は外免切替ができないルールがあります。詳細は各都道府県の免許センターにご確認ください。',
  },
  {
    q: 'LTO書類にDFAアポスティーユ認証は必要ですか？',
    a: '都道府県の運転免許センターによって要件が異なります。DFAアポスティーユ認証を求めるところもあれば、不要なところもあります。申請予定の免許センターに事前確認することを強くおすすめします。当センターではLTO書類＋DFAアポスティーユのセット代行も対応しています。',
  },
  {
    q: '外免切替が不許可になる場合はどのようなケースですか？',
    a: '主なケースとして、①日本に入国後にフィリピンで取得した免許、②免許取得から3ヶ月未満、③フィリピン免許の有効期限が切れている、④必要書類の不備などが挙げられます。事前に免許センターで要件を確認し、書類を完備した上で申請することが重要です。',
  },
  {
    q: 'フィリピンの免許証の翻訳はどこで取得できますか？',
    a: 'フィリピン運転免許証の日本語翻訳は、公益財団法人「自動車安全運転センター」が発行する書類が一般的に使用されます。または公証済みの翻訳も利用できます。都道府県によって受け付ける翻訳の種類が異なるため、申請先の免許センターに事前確認してください。',
  },
  {
    q: 'LTO書類の代行費用はどのくらいですか？',
    a: 'LTO運転記録証明書の代行取得費用は、DFAアポスティーユ認証なしで約4〜5万円、セットで約6〜7万円が目安です。LTO支局の状況・書類の種類によって変動します。詳細はお問い合わせください。',
  },
  {
    q: 'フィリピンの免許証を更新せずに期限切れにしてしまった場合はどうなりますか？',
    a: 'フィリピンの運転免許証が有効期限切れの場合、外免切替はできません。LTOでの更新手続きを先に行う必要があります。ただし、LTOの更新手続きは現地（フィリピン）での対応が必要です。詳細はLTOまたは代行業者にご相談ください。',
  },
  {
    q: '外免切替が完了したら、フィリピンの免許証はどうすればよいですか？',
    a: '外免切替が完了すると、日本の運転免許センターからフィリピンの免許証と引き換えに日本の免許証が交付されます（フィリピンの免許証は返却されない場合があります）。フィリピンの免許証を手元に残したい場合は、事前に免許センターに確認してください。フィリピンで引き続き運転する場合は、改めてLTOで免許を取得する必要があります。',
  },
];

const requiredDocs = [
  { doc: 'フィリピンの有効な運転免許証（オリジナル）', note: '有効期限内のもの' },
  { doc: 'フィリピンの運転免許証（日本語翻訳）', note: '自動車安全運転センター等が発行したもの、または公的翻訳' },
  { doc: 'LTO発行の運転記録証明書（英語）', note: '当センターで代行取得可' },
  { doc: '有効なパスポート（全ページコピー）', note: '入国日・在留歴の確認用' },
  { doc: '在留カード', note: '現在の在留資格確認' },
  { doc: '住民票', note: '現住所確認' },
  { doc: '申請書（免許センター所定）', note: '窓口で取得可' },
  { doc: 'DFAアポスティーユ認証（要確認）', note: '都道府県によって要否が異なる' },
];

export default function GaimenKirikaeGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: 'フィリピン免許の外免切替ガイド', item: 'https://ph-document.com/gaimen-kirikae-guide/' },
        ],
      },
      {
        '@type': 'Article',
        headline: 'フィリピン運転免許の外免切替ガイド｜必要なLTO書類・手順・費用【2026年】',
        description: 'フィリピン運転免許を日本の免許に切り替える（外免切替）ための手順・必要書類・LTO書類の取得方法を解説。LTO書類の代行取得に対応。',
        url: 'https://ph-document.com/gaimen-kirikae-guide/',
        inLanguage: 'ja',
        dateModified: '2026-02-22',
        author: { '@type': 'Organization', name: '株式会社IGRS' },
        publisher: { '@type': 'Organization', name: 'フィリピン書類取得代行センター' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        <nav className="text-xs text-gray-400 mb-6" aria-label="パンくずリスト">
          <Link to="/" className="hover:text-secondary">ホーム</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">フィリピン免許の外免切替ガイド</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          フィリピン運転免許の外免切替ガイド<br className="hidden md:block" />
          必要なLTO書類・手順・費用【2026年最新】
        </h1>
        <p className="text-sm text-gray-500 mb-8">最終更新：2026年2月22日 ｜ 株式会社IGRS</p>

        {/* リード */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 text-sm text-blue-900 leading-relaxed">
          日本に在住のフィリピン人が、フィリピンの運転免許を日本の免許証に切り替える（<strong>外国免許切替・外免切替</strong>）ためには、フィリピンLTO（陸運局）が発行する書類が必要です。このページでは、必要書類・手順・LTO書類の取得方法を解説します。
        </div>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">目次</p>
          <ol className="space-y-1 text-sm text-secondary">
            {['外免切替とは', '外免切替の全体手順', '必要書類チェックリスト', 'LTO書類の取得方法', '注意点', 'よくある質問（FAQ）', 'お問い合わせ'].map((item, i) => (
              <li key={i}><a href={`#lto-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="lto-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">1. 外免切替とは</h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            <strong>外免切替（外国免許切替）</strong>とは、外国で取得した運転免許証を日本の運転免許証に切り替える制度です。学科試験や技能試験が免除（または一部免除）され、適性検査のみで取得できることが多いです。
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            フィリピンの免許で外免切替をする場合、フィリピンのLTO（Land Transportation Office）が発行した運転記録証明書などが必要になります。
          </p>
        </section>

        {/* Section 2: Steps */}
        <section id="lto-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">2. 外免切替の全体手順</h2>
          <div className="space-y-3">
            {[
              { step: 'STEP 1', title: 'LTO書類の取得（当センターで代行可）', desc: 'フィリピンLTOから「運転記録証明書」等の必要書類を取得します。日本からは代行サービスが最もスムーズです。' },
              { step: 'STEP 2', title: '書類の翻訳・確認', desc: 'フィリピン免許証の日本語翻訳（自動車安全運転センター発行のもの等）を準備します。LTO書類も必要に応じて翻訳。' },
              { step: 'STEP 3', title: '運転免許センターへ予約・申請', desc: '居住地の都道府県運転免許センターに予約を入れ、書類を持参して申請します。' },
              { step: 'STEP 4', title: '適性検査（視力・運動能力）', desc: '視力等の適性検査を受けます。学科・技能試験は原則免除（ただし審査内容は都道府県による）。' },
              { step: 'STEP 5', title: '日本の免許証交付', desc: '審査が通れば日本の運転免許証が交付されます。' },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-lg p-4 shadow-card">
                <div className="w-16 flex-shrink-0">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">{s.step}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary mb-1">{s.title}</p>
                  <p className="text-xs text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Checklist */}
        <section id="lto-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">3. 必要書類チェックリスト</h2>
          <div className="space-y-2">
            {requiredDocs.map((item, i) => (
              <div key={i} className="flex gap-3 bg-white border border-gray-100 rounded-lg px-4 py-3 shadow-card">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-secondary font-medium">{item.doc}</p>
                  {item.note && <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 必要書類は都道府県の運転免許センターによって異なります。事前に確認してください。</p>
        </section>

        {/* Section 4: LTO */}
        <section id="lto-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">4. LTO書類の取得方法</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            LTO書類の主な取得方法は2つあります。
          </p>
          <div className="grid gap-4">
            {[
              {
                label: '方法① 自分で申請', title: 'LTO支局に申請する',
                items: ['フィリピン在住の家族・知人に依頼してLTO支局で申請', 'またはLTOのオンラインポータルを利用', '処理時間はLTO支局によって異なる'],
                pros: 'コストが安い', cons: '代理人が必要。英語でのやり取り必須。時間がかかる場合あり', color: 'border-gray-200',
              },
              {
                label: '方法② おすすめ', title: '代行サービスに依頼',
                items: ['日本語のみでやり取り完結', 'LTO書類取得からDFAアポスティーユまで一括対応', 'トラブル時もプロが対応'],
                pros: '手間ゼロ。日本語サポートあり', cons: '代行手数料がかかる', color: 'border-primary',
              },
            ].map((m, i) => (
              <div key={i} className={`bg-white border-2 ${m.color} rounded-xl p-5 shadow-card`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{m.label}</span>
                  <h3 className="font-bold text-secondary">{m.title}</h3>
                </div>
                <ul className="space-y-1 mb-3">
                  {m.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-700 flex gap-2"><span className="text-primary flex-shrink-0">▸</span>{item}</li>
                  ))}
                </ul>
                <div className="text-xs space-y-1">
                  <p><span className="text-green-600 font-bold">メリット：</span>{m.pros}</p>
                  <p><span className="text-red-500 font-bold">デメリット：</span>{m.cons}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section id="lto-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">5. 注意点</h2>
          <div className="space-y-4">
            {[
              { title: '都道府県によって必要書類が異なる', body: '外免切替の手続きは都道府県の運転免許センターが行います。必要書類・手続きが都道府県によって異なるため、必ず申請先の免許センターに事前確認してください。' },
              { title: '入国後に取得した免許は切替不可', body: '日本に入国した後（在留資格取得後）にフィリピンで取得した免許は外免切替の対象外です。フィリピン在住時に取得した免許が対象です。' },
              { title: '免許の取得から3ヶ月以上の使用実績が必要', body: 'フィリピンで免許を取得してから3ヶ月以上経過していることが求められます。取得直後の免許では切替できません。' },
              { title: 'LTO書類の取得に時間がかかる', body: 'LTO書類はLTO支局での申請・発行に時間がかかります。免許センターへの申請予定日から逆算して余裕を持って申請してください。' },
            ].map((t, i) => (
              <div key={i} className="flex gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-amber-800 mb-1">{t.title}</p>
                  <p className="text-xs text-amber-700">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: 費用の目安 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">6. 費用の目安</h2>
          <div className="grid gap-3">
            {[
              { item: 'LTO運転記録証明書 代行取得', cost: '約40,000円〜', note: 'LTO手数料・国際郵便込み' },
              { item: 'LTO書類＋DFAアポスティーユ セット', cost: '約60,000円〜', note: 'DFA手数料・認証費用込み' },
              { item: '外免切替申請サポート（書類確認）', cost: '別途お見積もり', note: '申請書類の確認・アドバイス' },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center bg-white border border-gray-100 rounded-lg px-4 py-3 shadow-card">
                <div>
                  <p className="text-sm font-medium text-secondary">{row.item}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{row.note}</p>
                </div>
                <span className="text-sm font-bold text-primary ml-4 flex-shrink-0">{row.cost}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 費用はLTO支局の状況・書類の種類によって変動します。詳細はお問い合わせください。</p>
        </section>

        {/* Section: 免許センター当日の流れ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">免許センター当日の流れ</h2>
          <p className="text-sm text-gray-700 mb-4">書類が揃ったら、居住地の都道府県運転免許センターで申請を行います。当日の一般的な流れは以下の通りです。</p>
          <div className="space-y-3">
            {[
              { step: '受付・書類提出', desc: '事前に揃えた書類（LTO書類・フィリピン免許証・日本語翻訳・パスポート・在留カード・住民票）を窓口に提出します。' },
              { step: '書類審査', desc: '担当官が書類の内容を確認します。不備や追加資料が必要な場合はここで指摘されます。' },
              { step: '適性検査（視力・聴力など）', desc: '視力・聴力・運動能力などの基本的な適性検査を行います。眼鏡・コンタクトが必要な方は忘れずに。' },
              { step: '口頭試問（場合による）', desc: '都道府県・担当官によっては、フィリピンでの免許取得経緯や運転経験について口頭で質問されることがあります。' },
              { step: '写真撮影・免許証交付', desc: '審査が通れば写真撮影を行い、日本の運転免許証が交付されます。' },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-lg p-4 shadow-card">
                <div className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex-shrink-0 flex items-center justify-center mt-0.5">{i + 1}</div>
                <div>
                  <p className="text-sm font-bold text-secondary mb-1">{s.step}</p>
                  <p className="text-xs text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            ※ 手続きは都道府県・免許センターによって異なります。事前に各都道府県の運転免許センターのウェブサイトで確認するか、電話で問い合わせてください。
          </div>
        </section>

        {/* Section: 申請前チェックリスト */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">申請前の最終確認チェックリスト</h2>
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card">
            <p className="text-sm text-gray-700 mb-4">免許センターに行く前に、以下を確認してください。</p>
            <div className="space-y-3">
              {[
                { check: 'フィリピン免許証の有効期限が切れていないか', note: '有効期限内のものが必要' },
                { check: '免許取得からフィリピンで3ヶ月以上使用しているか', note: '取得後の日本入国前の期間が対象' },
                { check: '日本に入国した後にフィリピルで取得した免許ではないか', note: '入国後取得は切替不可' },
                { check: 'LTO書類（運転記録証明書）を取得済みか', note: '代行で取得した場合は原本が手元にあるか確認' },
                { check: 'フィリピン免許の日本語翻訳を取得済みか', note: '自動車安全運転センター発行等が一般的' },
                { check: '有効なパスポート（全ページコピー）を準備済みか', note: '入国日の確認に使用' },
                { check: '在留カード・住民票を用意済みか', note: '現住所・在留資格の確認' },
                { check: 'DFAアポスティーユが必要かどうか申請先に確認済みか', note: '都道府県によって異なる' },
                { check: '免許センターへの予約が完了しているか', note: '都道府県によっては予約制' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-secondary font-medium">{item.check}</p>
                    <p className="text-xs text-gray-500">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">LTO書類取得、まるごとお任せ</h2>
          <p className="text-sm text-gray-300 mb-5">外免切替に必要なLTO書類・DFAアポスティーユを日本語サポートで代行します。</p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            無料相談する
          </a>
        </div>

        {/* FAQ */}
        <section id="lto-6" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">6. よくある質問（FAQ）</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm font-bold text-secondary pr-4">Q. {faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-700 leading-relaxed border-t border-gray-100">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 関連ページ */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { to: '/apostille-guide', title: 'DFAアポスティーユガイド', desc: 'LTO書類への認証取得方法' },
              { to: '/cenomar-guide', title: 'CENOMARガイド', desc: '独身証明書の取得方法' },
              { to: '/nbi-clearance-guide', title: 'NBI無犯罪証明書ガイド', desc: 'NBI HIT問題の解説と取得手順' },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 shadow-card hover:border-primary transition-colors group">
                <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">{link.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{link.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 ml-auto flex-shrink-0 group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-10">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-soft">
            <h2 className="text-xl font-bold text-secondary mb-2">お問い合わせ</h2>
            <p className="text-sm text-gray-500 mb-6">LTO書類の代行取得・DFAアポスティーユについてお気軽にご相談ください。</p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【外免切替ガイドからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/gaimen-kirikae-guide/" />
              <div>
                <label htmlFor="lto-name" className="block text-xs text-gray-600 mb-1">お名前</label>
                <input id="lto-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="山田 太郎" />
              </div>
              <div>
                <label htmlFor="lto-email" className="block text-xs text-gray-600 mb-1">メールアドレス</label>
                <input id="lto-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="lto-message" className="block text-xs text-gray-600 mb-1">ご相談内容</label>
                <textarea id="lto-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="外免切替のLTO書類取得についてお気軽にどうぞ。" />
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3">
                <Send className="w-5 h-5" />送信する
              </button>
            </form>
            <a href="mailto:igrs20200601@gmail.com" className="mt-3 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />メールで直接送る: igrs20200601@gmail.com
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
