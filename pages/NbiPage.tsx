import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, AlertTriangle, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

const faqs = [
  {
    q: 'NBI クリアランスの有効期限はどのくらいですか？',
    a: '発行日から1年間です。ただし使用目的によっては、より新しい書類（6ヶ月以内など）を求められることがあります。',
  },
  {
    q: 'NBI HITとは何ですか？どう対処すればよいですか？',
    a: 'NBI HITとは、申請者の名前がNBIの犯罪記録データベースに登録されている同姓同名の人物と一致した状態です。本人が犯罪を犯したわけではなく、同姓同名が原因であることが多いです。この場合、NBIのQueueing Systemで追加確認（Hit Clearance）を行い、本人と記録の人物が別人であることを証明する必要があります。代行サービスでサポート可能です。',
  },
  {
    q: '日本から自分でNBI クリアランスを申請できますか？',
    a: 'はい、可能です。NBI公式サイト（clearance.nbi.gov.ph）でオンライン申請し、代理人を立てて受け取る方法があります。ただし代理人の設定、支払い方法（フィリピン国内決済手段が必要なことが多い）など、海外からは手続きが複雑です。代行サービスの利用が最もスムーズです。',
  },
  {
    q: 'DFAアポスティーユ認証もまとめて依頼できますか？',
    a: 'はい、対応しております。NBI クリアランス取得後、DFA（外務省）でのアポスティーユ認証もセットで代行可能です。日本の入管や大使館への提出には、アポスティーユ認証が必要な場合があります。',
  },
  {
    q: 'NBI クリアランスを日本語に翻訳する必要はありますか？',
    a: '日本の役所や入管に提出する場合は、英語原文への日本語翻訳が求められることがあります。翻訳サービスについてもご相談いただけます。',
  },
];

export default function NbiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: 'NBI無犯罪証明書ガイド', item: 'https://ph-document.com/nbi-clearance-guide/' },
        ],
      },
      {
        '@type': 'Article',
        headline: 'フィリピンNBI無犯罪証明書（NBI Clearance）とは？日本から取得する方法【2026年】',
        description: 'NBI Clearanceの取得方法・NBI HITの対処法・DFAアポスティーユ認証まで完全解説。日本から代行で取得する手順をわかりやすくガイド。',
        url: 'https://ph-document.com/nbi-clearance-guide/',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6" aria-label="パンくずリスト">
          <Link to="/" className="hover:text-secondary">ホーム</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">NBI無犯罪証明書ガイド</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          フィリピンNBI無犯罪証明書（NBI Clearance）とは？<br className="hidden md:block" />
          日本から取得する方法【2026年最新】
        </h1>
        <p className="text-sm text-gray-500 mb-8">最終更新：2026年2月22日 ｜ 株式会社IGRS</p>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">目次</p>
          <ol className="space-y-1 text-sm text-secondary">
            {['NBI クリアランスとは', '必要になる場面', '基本情報', '取得手順（代行の場合）', 'NBI HITとは？対処法', 'DFAアポスティーユ認証', 'よくある質問（FAQ）', 'お問い合わせ'].map((item, i) => (
              <li key={i}><a href={`#nbi-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="nbi-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">1. NBI クリアランスとは</h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            <strong>NBI Clearance（NBI クリアランス）</strong>は、フィリピン国家捜査局（NBI: National Bureau of Investigation）が発行する<strong>無犯罪証明書</strong>です。申請者の氏名がNBIの犯罪記録データベースに登録されていないことを証明します。
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            日本でいう「警察証明書」に相当する書類で、海外移住・就労ビザ・国際結婚など、あらゆる場面で求められる重要な書類です。
          </p>
        </section>

        {/* Section 2 */}
        <section id="nbi-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">2. 必要になる場面</h2>
          <div className="grid gap-3">
            {[
              { title: '配偶者ビザ・在留資格の申請', desc: '日本の入管が配偶者ビザ申請の書類として求める場合があります。' },
              { title: '就労ビザ・海外就職', desc: '日本・海外での就職時に雇用主から提出を求められます。' },
              { title: 'フィリピンのパスポート申請', desc: '成人のパスポート申請時に必要になるケースがあります。' },
              { title: '海外移住・永住権申請', desc: '多くの国の移民・永住権申請で無犯罪証明書が必要です。' },
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
        <section id="nbi-3" className="mb-10">
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
                  ['発行機関', 'フィリピン国家捜査局（NBI）'],
                  ['有効期限', '発行日から1年間'],
                  ['申請費用', '約130ペソ（約320円）＋e-payment手数料'],
                  ['取得期間（代行）', '通常2〜4週間（HIT案件は追加期間が必要）'],
                  ['言語', '英語'],
                  ['DFAアポスティーユ', 'セットで依頼可能（別途費用）'],
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
        <section id="nbi-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">4. 取得手順（代行の場合）</h2>
          <div className="space-y-3">
            {[
              { step: 'STEP 1', title: 'お問い合わせ・必要情報の確認', desc: 'お名前・生年月日・目的などをヒアリング。HIT案件の可能性も事前チェックします。' },
              { step: 'STEP 2', title: '必要書類の準備', desc: 'フィリピンの有効なIDコピーをご用意いただきます（パスポートなど）。' },
              { step: 'STEP 3', title: 'NBI申請・取得', desc: '現地の代理人がNBIシステムに申請・窓口受け取りを代行します。' },
              { step: 'STEP 4', title: '（必要に応じて）DFAアポスティーユ認証', desc: '日本の入管・大使館に提出する場合はDFA認証もセットで対応します。' },
              { step: 'STEP 5', title: '日本へ国際郵便で発送', desc: '取得した書類を速達・追跡付きで日本の住所へお届けします。' },
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

        {/* Section 5: NBI HIT */}
        <section id="nbi-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">5. NBI HITとは？対処法</h2>
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-6">
            <div className="flex gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <h3 className="text-sm font-bold text-amber-800">NBI HITとは？</h3>
            </div>
            <p className="text-sm text-amber-800 mb-4">
              申請者の名前が、NBIの犯罪記録データベースに登録された同姓同名の人物と一致した状態を「HIT」といいます。本人が犯罪を犯したわけではありません。
            </p>
            <p className="text-sm text-amber-800">
              フィリピンは同じ名前の人が多いため、HIT（ヒット）が出るケースは珍しくありません。
            </p>
          </div>
          <h3 className="text-sm font-bold text-secondary mb-3">HIT が出た場合の対処手順</h3>
          <div className="space-y-3">
            {[
              'NBIのQueueing Systemで「Hit Clearance」の処理を行う',
              '指紋照合・本人確認書類の提示が求められる',
              '担当官が記録の人物と申請者が別人であることを確認',
              '確認後、通常のNBI クリアランスが発行される（追加で数日〜2週間程度かかる場合あり）',
            ].map((step, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-secondary text-white text-xs font-bold flex-shrink-0 flex items-center justify-center mt-0.5">{i + 1}</span>
                <p className="text-sm text-gray-700">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            <ShieldCheck className="w-4 h-4 inline mr-2" />
            当センターではHIT案件にも対応しています。まずはお気軽にご相談ください。
          </div>
        </section>

        {/* Section 6: DFA */}
        <section id="nbi-6" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">6. DFAアポスティーユ認証</h2>
          <p className="text-sm text-gray-700 mb-4">
            日本の入管・大使館に提出するNBI クリアランスには、<strong>DFA（フィリピン外務省）のアポスティーユ認証</strong>が必要な場合があります。
          </p>
          <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-card text-sm text-gray-700 space-y-2">
            <p>✓ NBI クリアランス取得後、DFAに書類を提出</p>
            <p>✓ アポスティーユスタンプ（認証印）が付与される</p>
            <p>✓ 国際的な公文書として認証される</p>
            <p>✓ 当センターではNBI＋DFAアポスティーユのセット代行が可能</p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">NBI クリアランス取得、まるごとお任せ</h2>
          <p className="text-sm text-gray-300 mb-5">HIT案件・DFAアポスティーユも対応。日本語でサポートします。</p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            無料相談する
          </a>
        </div>

        {/* FAQ */}
        <section id="nbi-7" className="mb-10">
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
              { to: '/cenomar-guide', title: 'CENOMARガイド', desc: '独身証明書の取得方法・費用・期間' },
              { to: '/psa-shussei-shomeisho', title: 'PSA出生証明書ガイド', desc: '出生証明書の取得方法と注意点' },
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
            <p className="text-sm text-gray-500 mb-6">NBI HIT案件・DFAアポスティーユも対応。まずはご相談ください。</p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【NBIガイドからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/nbi-clearance-guide/" />
              <div>
                <label htmlFor="nbi-name" className="block text-xs text-gray-600 mb-1">お名前</label>
                <input id="nbi-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="山田 太郎" />
              </div>
              <div>
                <label htmlFor="nbi-email" className="block text-xs text-gray-600 mb-1">メールアドレス</label>
                <input id="nbi-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="nbi-message" className="block text-xs text-gray-600 mb-1">ご相談内容</label>
                <textarea id="nbi-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="NBI取得・HIT案件・DFAアポスティーユについてお気軽にどうぞ。" />
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
