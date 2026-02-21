import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, AlertTriangle, FileText, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

const checklistItems = [
  {
    category: 'フィリピン人配偶者の書類（PSA・CENOMAR関連）',
    items: [
      { doc: 'CENOMAR（独身証明書）', required: true, note: 'PSA発行・発行から6ヶ月以内が目安' },
      { doc: 'PSA出生証明書', required: true, note: 'PSA発行（旧NSOでも可の場合あり）' },
      { doc: 'PSA婚姻証明書', required: true, note: 'フィリピン先行婚姻の場合' },
      { doc: 'NBI Clearance（無犯罪証明書）', required: false, note: '求められる場合あり。DFAアポスティーユ付が望ましい' },
      { doc: '有効なパスポートのコピー（全ページ）', required: true, note: '' },
    ],
  },
  {
    category: '日本人配偶者の書類',
    items: [
      { doc: '戸籍謄本', required: true, note: '婚姻事項記載のもの' },
      { doc: '住民票（世帯全員分）', required: true, note: '続柄記載あり' },
      { doc: '在職証明書または確定申告書（源泉徴収票）', required: true, note: '収入証明として必要' },
      { doc: '課税証明書', required: false, note: '地方自治体で取得' },
      { doc: '銀行の残高証明書', required: false, note: '直近3〜6ヶ月分が望ましい' },
      { doc: '交際・婚姻に至る経緯書（スナップ写真付き）', required: true, note: '入管の審査で重視される' },
    ],
  },
  {
    category: '申請書類（入管提出用）',
    items: [
      { doc: '在留資格認定証明書交付申請書（または変更申請書）', required: true, note: '入管所定の書式' },
      { doc: '身元保証書', required: true, note: '日本人配偶者が署名' },
      { doc: '質問書（入管所定）', required: true, note: '入管提供のフォーム' },
    ],
  },
];

const faqs = [
  {
    q: '配偶者ビザ申請でCENOMARは必ず必要ですか？',
    a: '婚姻が成立した後（戸籍や婚姻証明書に記載済み）の配偶者ビザ申請では、婚姻の証明として戸籍謄本やPSA婚姻証明書が主な書類になります。ただし、フィリピン人側の独身証明（CENOMAR）は婚姻届提出の際に提出済みであることが多く、入管から改めて求められる場合もあります。念のため取得しておくことをおすすめします。',
  },
  {
    q: 'フィリピン側の書類に日本語翻訳は必要ですか？',
    a: 'はい、入管に提出するフィリピン語・英語の書類には、すべて日本語訳を添付する必要があります。翻訳は申請者本人または翻訳業者が行ったものでも可ですが、翻訳者の署名・翻訳日の記載が必要です。',
  },
  {
    q: 'NBI ClclearanceにDFAアポスティーユ認証は必要ですか？',
    a: '入管に提出するNBI ClclearanceにはDFAアポスティーユ認証を付けることが推奨されます（必須ではない場合もありますが、審査官によって判断が異なるため、付けておく方が安全です）。当センターでNBI取得＋DFAアポスティーユのセット代行が可能です。',
  },
  {
    q: '配偶者ビザの審査期間はどのくらいですか？',
    a: '通常1〜3ヶ月程度です。書類の不備があると追加書類の提出を求められ、さらに時間がかかる場合があります。書類を完備して申請することが審査期間短縮の鍵です。',
  },
  {
    q: '書類の取得は代行してもらえますか？',
    a: 'はい、CENOMAR・PSA出生証明書・PSA婚姻証明書・NBI Clearance（＋DFAアポスティーユ）の取得を代行いたします。日本語でのやり取りのみで完結しますので、お気軽にご相談ください。',
  },
];

export default function HaigushaVisaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: '配偶者ビザ書類ガイド', item: 'https://ph-document.com/haigusha-visa-shorui/' },
        ],
      },
      {
        '@type': 'Article',
        headline: '配偶者ビザに必要なフィリピン書類チェックリスト【2026年最新】',
        description: '配偶者ビザ（在留資格：日本人の配偶者等）の申請に必要なフィリピン書類をチェックリスト形式で解説。CENOMAR・PSA・NBI Clearance等の取得代行にも対応。',
        url: 'https://ph-document.com/haigusha-visa-shorui/',
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
          <span className="text-gray-600">配偶者ビザ書類ガイド</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          配偶者ビザに必要なフィリピン書類<br className="hidden md:block" />
          チェックリスト【2026年最新】
        </h1>
        <p className="text-sm text-gray-500 mb-8">最終更新：2026年2月22日 ｜ 株式会社IGRS</p>

        {/* リード文 */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 text-sm text-blue-900 leading-relaxed">
          このページでは、フィリピン人配偶者の「在留資格（配偶者ビザ）」申請に必要なフィリピン側の書類を中心にチェックリスト形式で解説します。
          <br /><br />
          ※ビザ申請書類全体（日本語書類・入管申請書等）については行政書士への相談をおすすめします。当センターはフィリピン書類の取得代行に特化しています。
        </div>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">目次</p>
          <ol className="space-y-1 text-sm text-secondary">
            {['必要書類チェックリスト', 'フィリピン書類の取得ポイント', '注意点', 'よくある質問（FAQ）', 'お問い合わせ'].map((item, i) => (
              <li key={i}><a href={`#hv-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1: Checklist */}
        <section id="hv-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">1. 必要書類チェックリスト</h2>
          {checklistItems.map((cat, ci) => (
            <div key={ci} className="mb-6">
              <h3 className="text-sm font-bold text-secondary bg-secondary/5 px-4 py-2 rounded-lg mb-3">{cat.category}</h3>
              <div className="space-y-2">
                {cat.items.map((item, ii) => (
                  <div key={ii} className="flex gap-3 bg-white border border-gray-100 rounded-lg px-4 py-3 shadow-card">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${item.required ? 'text-primary' : 'text-gray-300'}`} />
                    <div>
                      <span className="text-sm text-secondary font-medium">{item.doc}</span>
                      {!item.required && (
                        <span className="ml-2 text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">場合による</span>
                      )}
                      {item.note && <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Section 2 */}
        <section id="hv-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">2. フィリピン書類の取得ポイント</h2>
          <div className="grid gap-4">
            {[
              { to: '/cenomar-guide', icon: '📄', title: 'CENOMAR（独身証明書）', point: '婚姻届提出済みでも、念のため最新版を手元に用意しておくと審査がスムーズです。有効期限（6ヶ月）に注意。' },
              { to: '/psa-shussei-shomeisho', icon: '📋', title: 'PSA出生証明書', point: '婚姻前に取得していたものでも使用できますが、発行から時間が経っている場合は再取得を推奨。' },
              { to: '/nbi-clearance-guide', icon: '🛡️', title: 'NBI Clearance', point: '入管がNBI Clearanceを求める場合はDFAアポスティーユ付が推奨されます。HIT案件は早めに相談を。' },
            ].map((item) => (
              <Link key={item.to} to={item.to} className="bg-white border border-gray-200 rounded-xl p-4 shadow-card hover:border-primary transition-colors group block">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <h3 className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">{item.title}</h3>
                  <ArrowRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-primary transition-colors" />
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{item.point}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section id="hv-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">3. 注意点</h2>
          <div className="space-y-4">
            {[
              { title: '書類はすべて日本語訳が必要', body: '入管に提出するフィリピン側の書類（英語）には、日本語訳を添付する必要があります。翻訳者の氏名・署名・翻訳日の記載が必要です。' },
              { title: '書類の有効期限を確認する', body: 'CENOMAR・NBI Clearanceには有効期限があります。申請が遅れて期限切れにならないよう、スケジュールを逆算して取得しましょう。' },
              { title: '書類間の名前のスペルを統一する', body: 'フィリピン人配偶者の名前スペルが書類間で異なると審査に支障をきたします。パスポートと全書類で一致していることを必ず確認してください。' },
              { title: '入管の要求書類は変わる場合がある', body: '必要書類は入管の判断や申請内容によって変わる場合があります。最新情報は出入国在留管理庁の公式サイトで確認するか、行政書士に相談してください。' },
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
          <p className="text-xs text-primary font-bold mb-2">フィリピン書類の取得はお任せください</p>
          <h2 className="text-xl font-bold mb-3">CENOMAR・PSA・NBI、まとめて代行</h2>
          <p className="text-sm text-gray-300 mb-5">
            ビザ申請に必要なフィリピン書類を日本語サポートで取得代行。<br />
            まずは無料相談からどうぞ。
          </p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            無料相談する
          </a>
        </div>

        {/* FAQ */}
        <section id="hv-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">4. よくある質問（FAQ）</h2>
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
              { to: '/nbi-clearance-guide', title: 'NBI無犯罪証明書ガイド', desc: 'NBI HIT問題の解説と取得手順' },
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
            <p className="text-sm text-gray-500 mb-6">書類の取得代行・翻訳サポートについてお気軽にご相談ください。</p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【配偶者ビザ書類ガイドからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/haigusha-visa-shorui/" />
              <div>
                <label htmlFor="hv-name" className="block text-xs text-gray-600 mb-1">お名前</label>
                <input id="hv-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="山田 太郎" />
              </div>
              <div>
                <label htmlFor="hv-email" className="block text-xs text-gray-600 mb-1">メールアドレス</label>
                <input id="hv-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="hv-message" className="block text-xs text-gray-600 mb-1">ご相談内容</label>
                <textarea id="hv-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="配偶者ビザに必要なフィリピン書類の取得についてお気軽にどうぞ。" />
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
