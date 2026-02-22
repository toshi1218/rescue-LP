import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, AlertTriangle, FileText, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

const faqs = [
  {
    q: 'DFAアポスティーユ認証とは何ですか？',
    a: 'アポスティーユ（Apostille）は、ハーグ条約加盟国間で公文書の信憑性を確認するための認証制度です。フィリピンではDFA（外務省）がこの認証を行います。認証されると、加盟国でその書類が正式な公文書として認められます。日本とフィリピンは両方ともハーグ条約加盟国です。',
  },
  {
    q: '国際結婚でアポスティーユは必ず必要ですか？',
    a: '日本の市区町村役場での婚姻届提出には、フィリピン書類（CENOMAR・PSA出生証明書）へのアポスティーユは必須ではないことが多いです。ただし、入管（配偶者ビザ申請）や公証機関によって異なるため、提出先に事前確認することをおすすめします。NBI Clearanceについては、アポスティーユ付きを求められる場合があります。',
  },
  {
    q: 'アポスティーユの取得にどのくらいかかりますか？',
    a: 'DFA窓口での通常申請は5〜7営業日程度、エクスプレス申請は3営業日程度が目安です。代行サービスを利用した場合、書類の取得からアポスティーユ認証まで合計で約4〜8週間かかります（書類の種類・状況による）。',
  },
  {
    q: 'アポスティーユとDFA公証（Authentication）は同じですか？',
    a: '異なります。アポスティーユはハーグ条約加盟国向けの簡略化された認証制度です。日本はハーグ条約加盟国なので、フィリピン書類を日本で使う場合はアポスティーユで対応できます。DFA公証（Authentication）はハーグ条約非加盟国向けの手続きです。',
  },
  {
    q: 'アポスティーユ認証後に日本語翻訳は必要ですか？',
    a: 'アポスティーユ認証自体は翻訳ではなく、書類の真正性を証明するものです。英語で書かれたフィリピン書類を日本の機関に提出する場合、別途日本語翻訳が必要になることがあります。',
  },
  {
    q: 'アポスティーユはどこで申請できますか？自分でできますか？',
    a: 'フィリピン国内のDFA（外務省）事務所で申請できます。マニラ・セブ・ダバオ等にオフィスがあります。日本からご自身で申請するには現地代理人が必要であり、DFAオンライン予約システムの利用も必要です。代行サービスを利用すれば、これらの手続きをすべてお任せいただけます。',
  },
  {
    q: 'アポスティーユ認証の有効期限はありますか？',
    a: 'アポスティーユ認証自体に法的な有効期限はありません。ただし、認証の対象となる書類（NBI ClearanceやCENOMAR等）に有効期限がある場合は、書類の期限切れ前に使用する必要があります。',
  },
  {
    q: '複数の書類にまとめてアポスティーユ認証を取得できますか？',
    a: 'はい、複数の書類（例：CENOMAR・PSA出生証明書・NBI Clearance）のアポスティーユをまとめて申請することが可能です。まとめて代行することで、個別に依頼するよりも効率的に手続きが完了します。',
  },
];

const targetDocs = [
  { doc: 'CENOMAR（独身証明書）', use: '配偶者ビザ申請・婚姻手続き', note: '必要かどうか提出先に確認' },
  { doc: 'PSA出生証明書', use: '各種身分証明', note: '必要かどうか提出先に確認' },
  { doc: 'PSA婚姻証明書', use: '婚姻の証明・ビザ申請', note: '入管提出時に求められることあり' },
  { doc: 'NBI Clearance（無犯罪証明書）', use: '配偶者ビザ・海外就労', note: '推奨・入管が求めることが多い' },
  { doc: 'LTO関連書類（外免切替用）', use: '日本の免許切替申請', note: '都道府県によって要否が異なる' },
];

export default function ApostillePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: 'DFAアポスティーユガイド', item: 'https://ph-document.com/apostille-guide/' },
        ],
      },
      {
        '@type': 'Article',
        headline: 'フィリピンDFAアポスティーユ認証とは？対象書類・取得方法・費用【2026年】',
        description: 'フィリピンDFAアポスティーユ認証の取得方法・対象書類・費用・期間を解説。CENOMAR・PSA・NBI Clearanceへの認証取得を代行サービスで日本語対応。',
        url: 'https://ph-document.com/apostille-guide/',
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
          <span className="text-gray-600">DFAアポスティーユガイド</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          フィリピンDFAアポスティーユ認証とは？<br className="hidden md:block" />
          対象書類・取得方法・費用【2026年最新】
        </h1>
        <p className="text-sm text-gray-500 mb-8">最終更新：2026年2月22日 ｜ 株式会社IGRS</p>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">目次</p>
          <ol className="space-y-1 text-sm text-secondary">
            {['アポスティーユ認証とは', '対象となる書類', '取得手順', '基本情報（費用・期間）', '注意点', 'よくある質問（FAQ）', 'お問い合わせ'].map((item, i) => (
              <li key={i}><a href={`#ap-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="ap-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">1. アポスティーユ認証とは</h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            <strong>アポスティーユ（Apostille）</strong>は、1961年のハーグ条約に基づく<strong>外国公文書の認証制度</strong>です。条約加盟国の機関が発行した公文書を、他の加盟国でもそのまま有効な公文書として認めるための認証スタンプです。
          </p>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            フィリピンでは<strong>DFA（Department of Foreign Affairs／外務省）</strong>がこの認証を行います。PSA・NBIなどが発行した書類にDFAのアポスティーユスタンプを取得することで、その書類が日本の機関でも公式に認められます。
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            <strong>ポイント：</strong> 日本とフィリピンはどちらもハーグ条約加盟国のため、フィリピン書類にアポスティーユ認証を付けることで、日本での公的な効力が保証されます。
          </div>
        </section>

        {/* Section 2 */}
        <section id="ap-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">2. 対象となる書類</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            フィリピン書類の中でアポスティーユ認証が必要・推奨される主な書類は以下の通りです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">書類</th>
                  <th className="px-4 py-3 text-left font-semibold">主な使用場面</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">備考</th>
                </tr>
              </thead>
              <tbody>
                {targetDocs.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100">{row.doc}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.use}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs border-b border-gray-100">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 必要かどうかは提出先（市区町村・入管・大使館等）によって異なります。事前確認をおすすめします。</p>
        </section>

        {/* Section 3 */}
        <section id="ap-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">3. 取得手順</h2>
          <div className="space-y-3">
            {[
              { step: 'STEP 1', title: '対象書類の取得', desc: 'まずPSA・NBIなどから対象書類を取得します。アポスティーユはこれらの書類に後から付けるものです。' },
              { step: 'STEP 2', title: 'DFAに書類を提出', desc: 'DFA（フィリピン外務省）の認証局（Authentication Division）に書類を持参または郵送します。オンライン予約が必要です。' },
              { step: 'STEP 3', title: 'アポスティーユスタンプの取得', desc: 'DFAが書類の真正性を確認し、アポスティーユスタンプを押します。通常5〜7営業日、エクスプレスは3営業日。' },
              { step: 'STEP 4', title: '日本へ発送', desc: 'アポスティーユ付きの書類を速達・追跡付きの国際郵便で日本の住所へお届けします。' },
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

        {/* Section 4 */}
        <section id="ap-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">4. 基本情報（費用・期間）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">項目</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">内容</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['認証機関', 'DFA（Department of Foreign Affairs／フィリピン外務省）'],
                  ['DFA手数料', '約100〜200ペソ（約250〜500円）／1通'],
                  ['処理期間（通常）', '5〜7営業日'],
                  ['処理期間（エクスプレス）', '3営業日（追加料金あり）'],
                  ['代行取得期間の目安', '書類取得からアポスティーユまで合計4〜8週間'],
                  ['対象書類', 'PSA書類・NBI Clearance・LTO書類 等'],
                ].map(([k, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100">{k}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5 */}
        <section id="ap-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">5. 注意点</h2>
          <div className="space-y-4">
            {[
              { title: '書類の有効期限に注意', body: 'アポスティーユを付ける前に書類自体の有効期限が切れていないか確認してください。特にNBI Clearanceは1年、CENOMARは6ヶ月が目安です。' },
              { title: 'アポスティーユが必要かどうか提出先に確認する', body: '日本の婚姻届提出にはアポスティーユ不要なことが多いです。入管・大使館など提出先によって異なるため、必ず事前確認をしてください。' },
              { title: '書類はオリジナルが必要', body: 'アポスティーユはコピーではなく、発行機関が発行したオリジナル書類に対して行います。' },
              { title: 'DFA認証とアポスティーユの混同に注意', body: 'フィリピン書類を日本で使う場合は「アポスティーユ」で対応できます。「DFA Authentication（DFA公証）」は別制度（ハーグ条約非加盟国向け）です。' },
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
          <h2 className="text-xl font-bold mb-3">アポスティーユ認証、まるごとお任せ</h2>
          <p className="text-sm text-gray-300 mb-5">PSA・NBI書類の取得からDFAアポスティーユまで一括代行。日本語でサポートします。</p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            無料相談する
          </a>
        </div>

        {/* FAQ */}
        <section id="ap-6" className="mb-10">
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
              { to: '/cenomar-guide', title: 'CENOMARガイド', desc: '独身証明書の取得方法・費用・期間' },
              { to: '/nbi-clearance-guide', title: 'NBI無犯罪証明書ガイド', desc: 'NBI HIT問題の解説と取得手順' },
              { to: '/haigusha-visa-shorui', title: '配偶者ビザ書類ガイド', desc: '配偶者ビザに必要なフィリピン書類一覧' },
              { to: '/kokusai-kekkon-guide', title: 'フィリピン国際結婚ガイド', desc: '手続き全体の流れ・必要書類' },
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
            <p className="text-sm text-gray-500 mb-6">アポスティーユ認証の代行・必要書類の確認など、お気軽にご相談ください。</p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【アポスティーユガイドからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/apostille-guide/" />
              <div>
                <label htmlFor="ap-name" className="block text-xs text-gray-600 mb-1">お名前</label>
                <input id="ap-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="山田 太郎" />
              </div>
              <div>
                <label htmlFor="ap-email" className="block text-xs text-gray-600 mb-1">メールアドレス</label>
                <input id="ap-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="ap-message" className="block text-xs text-gray-600 mb-1">ご相談内容</label>
                <textarea id="ap-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="アポスティーユ認証の代行・必要書類についてお気軽にどうぞ。" />
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
