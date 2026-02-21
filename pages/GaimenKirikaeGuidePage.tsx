import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, AlertTriangle, FileText, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

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

        <footer className="text-center text-xs text-gray-300 pb-8">
          <p>© 2026 IGRS Inc. ｜ <Link to="/" className="hover:text-secondary">フィリピン書類取得代行センター</Link></p>
        </footer>
      </main>
    </div>
  );
}
