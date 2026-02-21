import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, AlertTriangle, Clock, FileText, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

const faqs = [
  {
    q: 'CENOMARとNSO独身証明書は同じですか？',
    a: 'はい、同じ書類です。NSOは旧称で、2014年にPSA（フィリピン統計局）に改組されたため、現在は「PSA CENOMAR」と呼ばれます。日本の役所や大使館ではどちらの名称でも通用します。',
  },
  {
    q: 'CENOMARの有効期限はどのくらいですか？',
    a: '発行日から6ヶ月が目安です。ただし、使用目的（日本での婚姻届、ビザ申請など）によって求められる発行日の基準が異なります。早めに取得しすぎると無効になる場合があるため、使用予定日の2〜3ヶ月前に申請するのが理想的です。',
  },
  {
    q: '日本に住んでいる場合、CENOMARは取得できますか？',
    a: '取得できます。方法は2つあります。①在日フィリピン大使館・領事館で申請する、②PSAオンライン（PSAHelpline.com）で申請し国際郵便で受け取る、の2つです。ただし大使館・領事館経由の場合は予約が必要で時間がかかります。代行サービスを利用すれば手続きをすべてお任せいただけます。',
  },
  {
    q: '再婚予定の場合、CENOMARとは別に必要な書類はありますか？',
    a: 'はい、離婚歴がある場合は「CENOMAR」に加え、フィリピンの裁判所が発行した「婚姻の取り消し（Annulment）」または「承認判決」の書類が必要になります。これはフィリピンに離婚制度がないためです。ケースが複雑になるため、まずはご相談ください。',
  },
  {
    q: 'CENOMARが「MATCH FOUND」と出た場合はどうすればよいですか？',
    a: '「MATCH FOUND」はPSAのデータに婚姻記録が見つかったことを意味します。これが誤りの場合（例：同姓同名の別人の記録）は、PSAへの異議申し立てが必要です。過去に婚姻歴がある場合は、アニュルメント手続き後に改めてCENOMARを取得する必要があります。まずは状況をお聞かせください。',
  },
];

export default function CenomarGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: 'CENOMARガイド', item: 'https://ph-document.com/cenomar-guide/' },
        ],
      },
      {
        '@type': 'Article',
        headline: 'フィリピン独身証明書（CENOMAR／セノマー）とは？取得方法・費用・期間を完全解説【2026年】',
        description: 'CENOMARの取得方法を自分で・大使館で・代行での3パターンで解説。費用・期間・有効期限・よくあるトラブルまで初心者向けに徹底ガイド。',
        url: 'https://ph-document.com/cenomar-guide/',
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
          <span className="text-gray-600">CENOMARガイド</span>
        </nav>

        {/* H1 */}
        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          フィリピン独身証明書（CENOMAR／セノマー）とは？<br className="hidden md:block" />
          取得方法・費用・期間を完全解説【2026年最新】
        </h1>
        <p className="text-sm text-gray-500 mb-8">最終更新：2026年2月22日 ｜ 株式会社IGRS</p>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">目次</p>
          <ol className="space-y-1 text-sm text-secondary">
            {['CENOMARとは何か', 'どんな場面で必要か', '基本情報（発行元・費用・期間）', '取得方法3パターン比較', 'よくあるトラブルと注意点', 'よくある質問（FAQ）', '無料相談・お問い合わせ'].map((item, i) => (
              <li key={i}>
                <a href={`#section-${i + 1}`} className="hover:underline">
                  {i + 1}. {item}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="section-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            1. CENOMARとは何か
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            <strong>CENOMAR（セノマー）</strong>は<strong>Certificate of No Marriage Record</strong>の略称で、フィリピン統計局（PSA）が発行する<strong>独身証明書</strong>です。日本語では「婚姻記録不存在証明書」とも呼ばれます。
          </p>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            PSAのデータベースに婚姻記録が存在しないことを公式に証明する書類で、「この人はフィリピンで結婚したことがない」ということを政府が保証するものです。
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            <strong>ポイント：</strong> CENOMARはかつて「NSO独身証明書」とも呼ばれていました。NSOは2014年にPSAに統合されたため、現在は「PSA CENOMAR」が正式名称です。どちらも同じ書類です。
          </div>
        </section>

        {/* Section 2 */}
        <section id="section-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            2. どんな場面で必要か
          </h2>
          <div className="grid gap-3">
            {[
              { title: '日本でフィリピン人との国際結婚手続き', desc: '日本の市区町村役場に婚姻届を提出する際、フィリピン側の独身証明として必須。配偶者となるフィリピン人が取得します。' },
              { title: '日本の配偶者ビザ（在留資格）の申請', desc: '配偶者ビザ（「日本人の配偶者等」）の申請書類として入管が求める場合があります。' },
              { title: 'フィリピン国内での婚姻届', desc: 'フィリピン市役所（Local Civil Registry）での婚姻届にも必要な場合があります。' },
              { title: '再婚手続き', desc: '離婚歴がある方が再婚する場合、アニュルメント判決書と合わせて提出します。' },
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
        <section id="section-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            3. 基本情報（発行元・費用・期間）
          </h2>
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
                  ['正式名称', 'Certificate of No Marriage Record (CENOMAR)'],
                  ['発行機関', 'フィリピン統計局（PSA: Philippine Statistics Authority）'],
                  ['有効期限', '発行日から約6ヶ月（使用目的により異なる）'],
                  ['PSA申請費用', '約365ペソ（約900円）＋国際郵便料金'],
                  ['取得期間（代行）', '約3〜6週間（状況による）'],
                  ['言語', '英語（日本語翻訳が必要な場合あり）'],
                  ['対象者', 'フィリピン国籍を持つ方（海外生まれのフィリピン人も対象）'],
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
        <section id="section-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            4. 取得方法3パターン比較
          </h2>
          <div className="grid gap-4">
            {[
              {
                label: '方法①', title: 'PSAオンライン申請（自分で）',
                items: ['PSAHelpline.comまたはPSA公式サイトで申請', '支払いはクレジットカードまたはPayPal', '国際郵便で日本の住所へ届く（3〜8週間）'],
                pros: 'コストが最も安い',
                cons: '英語対応必須。届くまで時間がかかる。届かないリスクあり',
                color: 'border-gray-200',
              },
              {
                label: '方法②', title: '在日フィリピン大使館・領事館で申請',
                items: ['東京・大阪・名古屋の領事館で申請可能', '事前予約（オンライン予約）が必要', '窓口で申請書を記入し手数料を支払う'],
                pros: '比較的安い',
                cons: '予約が取りにくい。平日のみ。窓口まで出向く手間',
                color: 'border-gray-200',
              },
              {
                label: '方法③ おすすめ', title: '代行サービスに依頼',
                items: ['日本語でやり取りするだけ', '必要書類の確認から郵送まで完全サポート', '書類の不備リスクを最小化'],
                pros: '手間が一切かからない。日本語サポートあり',
                cons: '代行手数料がかかる',
                color: 'border-primary',
              },
            ].map((m, i) => (
              <div key={i} className={`bg-white border-2 ${m.color} rounded-xl p-5 shadow-card`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{m.label}</span>
                  <h3 className="font-bold text-secondary">{m.title}</h3>
                </div>
                <ul className="space-y-1 mb-3">
                  {m.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-primary flex-shrink-0">▸</span>{item}
                    </li>
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
        <section id="section-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            5. よくあるトラブルと注意点
          </h2>
          <div className="space-y-4">
            {[
              {
                title: '書類が届かない',
                body: 'PSAオンライン申請で支払い完了後、数週間経っても届かないケースがあります。国際郵便の遅延・紛失が原因のことが多く、再申請が必要になる場合も。',
              },
              {
                title: 'MATCH FOUNDと記載されていた',
                body: '婚姻記録が見つかった場合に「MATCH FOUND」と記載されます。過去に結婚歴がある場合は正常ですが、身に覚えがない場合はPSAへの異議申し立てが必要です。',
              },
              {
                title: '名前のスペルが異なる',
                body: 'パスポートの名前とCENOMARの名前が一致しない場合、大使館や役所で問題になることがあります。申請前に必ずパスポートと同じ名前で申請しましょう。',
              },
              {
                title: '有効期限切れで再取得が必要',
                body: '取得後に手続きが長引き、有効期限（6ヶ月）を過ぎてしまうケースがあります。手続きのスケジュールを逆算して取得時期を決めることが重要です。',
              },
              {
                title: '翻訳が必要なケース',
                body: '日本の市区町村役場によっては、英語のCENOMARに日本語翻訳の添付を求める場合があります。事前に提出先の窓口に確認しておきましょう。',
              },
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

        {/* CTA Banner */}
        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <p className="text-xs text-primary font-bold mb-2">手続きが面倒な方へ</p>
          <h2 className="text-xl font-bold mb-3">CENOMAR取得、全部お任せください</h2>
          <p className="text-sm text-gray-300 mb-5">
            申請書類の確認から取得・郵送まで、日本語でサポートします。<br />
            どの書類が必要かわからない方もまずはご相談ください。
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors shadow-lg"
          >
            無料相談する
          </a>
        </div>

        {/* Section 6: FAQ */}
        <section id="section-6" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            6. よくある質問（FAQ）
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm font-bold text-secondary pr-4">Q. {faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
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
              { to: '/psa-shussei-shomeisho', title: 'PSA出生証明書ガイド', desc: '国際結婚・ビザに必要なPSA書類の取得方法' },
              { to: '/nbi-clearance-guide', title: 'NBI無犯罪証明書ガイド', desc: 'NBI HIT問題の解説と日本からの取得手順' },
              { to: '/kokusai-kekkon-guide', title: 'フィリピン国際結婚ガイド', desc: '手続き全体の流れ・必要書類・費用' },
              { to: '/haigusha-visa-shorui', title: '配偶者ビザ書類チェックリスト', desc: '配偶者ビザに必要なフィリピン書類一覧' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 shadow-card hover:border-primary transition-colors group"
              >
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

        {/* Section 7: Contact Form */}
        <section id="contact" className="mb-10">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-soft">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-xs text-primary font-bold">まずは無料相談</span>
            </div>
            <h2 className="text-xl font-bold text-secondary mb-2">お問い合わせ</h2>
            <p className="text-sm text-gray-500 mb-6">
              どの書類が必要かわからない方も、お気軽にご相談ください。
            </p>
            <form
              action={FORMSPREE_ENDPOINT}
              method="POST"
              className="space-y-3"
            >
              <input type="hidden" name="_subject" value="【CENOMARガイドからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/cenomar-guide/" />
              <div>
                <label htmlFor="name" className="block text-xs text-gray-600 mb-1">お名前</label>
                <input id="name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="山田 太郎" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-gray-600 mb-1">メールアドレス</label>
                <input id="email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-gray-600 mb-1">ご相談内容</label>
                <textarea id="message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="CENOMAR取得のご相談、必要書類の確認など、お気軽にどうぞ。" />
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3">
                <Send className="w-5 h-5" />
                送信する
              </button>
            </form>
            <a href="mailto:igrs20200601@gmail.com" className="mt-3 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />
              メールで直接送る: igrs20200601@gmail.com
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
