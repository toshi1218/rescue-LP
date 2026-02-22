import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, AlertTriangle, FileText, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

const faqs = [
  {
    q: 'PSA婚姻証明書とはどのような書類ですか？',
    a: 'PSA婚姻証明書（PSA Marriage Certificate）は、フィリピン統計局（PSA）が発行する婚姻の公式記録です。婚姻した日時・場所・両者の情報が記載されており、フィリピン国内で法的に婚姻が成立したことを証明します。日本での国際結婚報告届・配偶者ビザ申請などで必要になります。',
  },
  {
    q: 'PSA婚姻証明書はいつ取得できますか？',
    a: 'フィリピンの地方市役所（Local Civil Registry）で婚姻が登録された後、PSAのデータベースに記録されるまで通常3〜6ヶ月かかります。PSAへの登録が完了してからPSA婚姻証明書の申請・取得が可能になります。',
  },
  {
    q: '日本の婚姻届提出後にPSA婚姻証明書は必要ですか？',
    a: '「日本先行婚姻」の場合、日本での婚姻届が受理されたら、次にフィリピン大使館で「婚姻の報告的届出（Report of Marriage）」を行います。この際にPSA婚姻証明書は不要で、日本の戸籍謄本等を使います。ただし、配偶者ビザ申請では必要になる場合があります。',
  },
  {
    q: 'PSA婚姻証明書の有効期限はありますか？',
    a: '法的な有効期限はありませんが、提出先の機関（入管・大使館など）が「発行から6ヶ月以内」を求める場合があります。使用予定日から逆算して取得することをおすすめします。',
  },
  {
    q: 'フィリピン先行婚姻でPSA婚姻証明書が届くまでの間、何もできませんか？',
    a: 'PSA婚姻証明書の発行（3〜6ヶ月）を待つ間、日本での婚姻届提出はできません。ただし、配偶者ビザの申請準備（NBI Clearanceの取得など）は並行して進めることができます。スケジュールを見通して準備しましょう。',
  },
  {
    q: 'PSA婚姻証明書はどこで申請できますか？',
    a: 'PSA Helpline（PSAHelpline.com）でオンライン申請できます。フィリピン国内ではPSAのサービスセンターや郵便局（PhilPost）でも申請が可能です。日本から自分で申請する場合は国際配送に時間がかかります。代行サービスを利用すると、書類の取得状況の確認から発送まで日本語でサポートします。',
  },
  {
    q: 'PSA婚姻証明書を複数部取得することはできますか？',
    a: 'はい、PSA婚姻証明書は複数部の申請が可能です。配偶者ビザ申請・大使館提出・日本の市区町村役場提出など、複数の手続きで必要になることがあります。必要部数を事前に把握した上でまとめて申請することをおすすめします。',
  },
  {
    q: 'フィリピンでの婚姻が無効・取り消しになった場合、PSA婚姻証明書はどうなりますか？',
    a: 'フィリピンではアニュルメント（婚姻無効・取り消し）が裁判所で認められると、PSAにその記録が登録されます。その後に改めてCENOMARを取得すると「独身」として発行されます。詳しい手続きについてはご相談ください。',
  },
];

export default function KekkonShomeishoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: 'PSA婚姻証明書ガイド', item: 'https://ph-document.com/kekkon-shomeisho/' },
        ],
      },
      {
        '@type': 'Article',
        headline: 'フィリピンPSA婚姻証明書の取得方法｜国際結婚・配偶者ビザで必要な理由【2026年】',
        description: 'PSA婚姻証明書（フィリピン結婚証明書）の取得方法・必要な場面・費用・期間を解説。フィリピン先行婚姻後の報告手続きに必要な書類をガイド。',
        url: 'https://ph-document.com/kekkon-shomeisho/',
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
          <span className="text-gray-600">PSA婚姻証明書ガイド</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          フィリピンPSA婚姻証明書の取得方法<br className="hidden md:block" />
          国際結婚・配偶者ビザで必要な理由【2026年最新】
        </h1>
        <p className="text-sm text-gray-500 mb-8">最終更新：2026年2月22日 ｜ 株式会社IGRS</p>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">目次</p>
          <ol className="space-y-1 text-sm text-secondary">
            {['PSA婚姻証明書とは', '必要になる場面', '基本情報', '取得方法', '日本先行 vs フィリピン先行での違い', 'よくあるトラブル', 'よくある質問（FAQ）', 'お問い合わせ'].map((item, i) => (
              <li key={i}><a href={`#ks-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="ks-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">1. PSA婚姻証明書とは</h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            <strong>PSA婚姻証明書（PSA Marriage Certificate）</strong>は、フィリピン統計局（PSA）が発行する<strong>婚姻の公式記録</strong>です。フィリピンの地方市役所（Local Civil Registry）に登録された婚姻情報が、PSAのデータベースに反映されたものです。
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            CENOMARが「独身」を証明するのに対し、PSA婚姻証明書は「フィリピンで法的に婚姻が成立した」ことを証明します。フィリピン先行婚姻後の日本への婚姻届報告や、配偶者ビザ申請で使用します。
          </p>
        </section>

        {/* Section 2 */}
        <section id="ks-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">2. 必要になる場面</h2>
          <div className="grid gap-3">
            {[
              { title: '日本の市区町村役場への婚姻届（フィリピン先行婚姻の場合）', desc: 'フィリピンで先に婚姻手続きをした場合、日本への「報告的届出」にPSA婚姻証明書が必要です。' },
              { title: '配偶者ビザ（在留資格）の申請', desc: '日本の入管に配偶者ビザを申請する際、婚姻の証明としてPSA婚姻証明書を求められます。' },
              { title: 'フィリピン大使館での婚姻報告（日本先行婚姻の場合）', desc: '日本で婚姻届が受理された後、フィリピン大使館への「Report of Marriage」手続きで使用する場合があります（日本の戸籍謄本で代替可能なことも）。' },
              { title: '子どもの出生登録・国籍確認', desc: '両親の婚姻を証明する書類として使用します。' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 bg-white border border-gray-100 rounded-lg p-4 shadow-card">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-secondary">{item.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section id="ks-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">3. 基本情報</h2>
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
                  ['発行機関', 'フィリピン統計局（PSA）'],
                  ['有効期限', '法的な期限なし（6ヶ月以内を求められることが多い）'],
                  ['PSAへの登録', '地方市役所での婚姻登録から約3〜6ヶ月後に利用可能'],
                  ['申請費用', '約365ペソ（約900円）＋配送料'],
                  ['取得期間（代行）', '約4〜8週間（登録状況による）'],
                  ['言語', '英語'],
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

        {/* Section 4 */}
        <section id="ks-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">4. 取得方法</h2>
          <div className="grid gap-4">
            {[
              {
                label: '方法①', title: 'PSAオンライン申請（自分で）',
                items: ['PSAHelpline.comで申請', 'クレジットカード/PayPal決済', '国際郵便で日本に届く'],
                pros: 'コストが安い', cons: '英語対応必須。配送に時間がかかる', color: 'border-gray-200',
              },
              {
                label: '方法② おすすめ', title: '代行サービスに依頼',
                items: ['日本語のみでやり取り完結', '書類確認から郵送まで一括サポート', 'フィリピン先行婚姻後の登録状況確認も対応'],
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

        {/* Section 5: 日本先行 vs フィリピン先行 */}
        <section id="ks-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">5. 日本先行 vs フィリピン先行での違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">手続き</th>
                  <th className="px-4 py-3 text-left font-semibold">PSA婚姻証明書の役割</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">必要時期</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['日本先行婚姻', '配偶者ビザ申請・大使館Report of Marriage時に必要な場合あり', '婚姻届受理後（数ヶ月以内）'],
                  ['フィリピン先行婚姻', '日本への婚姻届（報告的届出）に必須', 'フィリピン婚姻から3〜6ヶ月後以降'],
                ].map(([k, v, t], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100">{k}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{v}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs border-b border-gray-100">{t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            ※ 詳しい手順は<Link to="/kokusai-kekkon-guide" className="text-secondary underline">フィリピン国際結婚ガイド</Link>をご覧ください。
          </div>
        </section>

        {/* Section 6 */}
        <section id="ks-6" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">6. よくあるトラブル</h2>
          <div className="space-y-4">
            {[
              { title: 'PSAへの登録が遅れる', body: 'フィリピンの市役所での婚姻登録後、PSAへの反映に3〜6ヶ月以上かかることがあります。「NO RECORD FOUND」と返ってきた場合、まだPSAに登録されていない可能性があります。時間をおいて再申請してください。' },
              { title: '書類の名前スペルが一致しない', body: '婚姻証明書とパスポート・出生証明書で名前のスペルが異なると、後の手続きで問題になります。婚姻前に書類間の整合性を確認しましょう。' },
              { title: '市役所登録の遅延', body: 'フィリピン地方市役所での婚姻登録自体が遅れ、PSAへのデータ送付が後回しになるケースがあります。特に地方の市役所で婚姻した場合は時間がかかる傾向があります。' },
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
          <h2 className="text-xl font-bold mb-3">PSA婚姻証明書、まるごとお任せ</h2>
          <p className="text-sm text-gray-300 mb-5">PSAへの登録状況確認から取得・郵送まで、日本語でサポートします。</p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            無料相談する
          </a>
        </div>

        {/* FAQ */}
        <section id="ks-7" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">7. よくある質問（FAQ）</h2>
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
              { to: '/kokusai-kekkon-guide', title: 'フィリピン国際結婚ガイド', desc: '日本先行・フィリピン先行の手続き流れ' },
              { to: '/cenomar-guide', title: 'CENOMARガイド', desc: '独身証明書の取得方法・費用・期間' },
              { to: '/psa-shussei-shomeisho', title: 'PSA出生証明書ガイド', desc: '出生証明書の取得方法と注意点' },
              { to: '/haigusha-visa-shorui', title: '配偶者ビザ書類ガイド', desc: '配偶者ビザに必要なフィリピン書類一覧' },
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
            <p className="text-sm text-gray-500 mb-6">PSA婚姻証明書の取得代行についてお気軽にご相談ください。</p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【PSA婚姻証明書ガイドからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/kekkon-shomeisho/" />
              <div>
                <label htmlFor="ks-name" className="block text-xs text-gray-600 mb-1">お名前</label>
                <input id="ks-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="山田 太郎" />
              </div>
              <div>
                <label htmlFor="ks-email" className="block text-xs text-gray-600 mb-1">メールアドレス</label>
                <input id="ks-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="ks-message" className="block text-xs text-gray-600 mb-1">ご相談内容</label>
                <textarea id="ks-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="PSA婚姻証明書の取得についてお気軽にどうぞ。" />
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
