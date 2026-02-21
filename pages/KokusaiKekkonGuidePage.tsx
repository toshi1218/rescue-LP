import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, FileText, ArrowRight, AlertTriangle } from 'lucide-react';
import Navbar from '../components/Navbar';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

const steps = [
  {
    phase: 'フェーズ①',
    title: '日本先行婚姻（日本で先に婚姻届を出す場合）',
    steps: [
      { step: 'STEP 1', title: 'フィリピン側の書類を準備', desc: 'CENOMAR（独身証明書）・PSA出生証明書・有効なパスポートが必要です。' },
      { step: 'STEP 2', title: '日本の市区町村役場に婚姻届を提出', desc: '日本人側の戸籍謄本とフィリピン人側の書類（英文＋日本語訳）を用意します。' },
      { step: 'STEP 3', title: '戸籍謄本を取得', desc: '婚姻が受理されたら、日本人側の戸籍謄本に配偶者情報が記載されます。' },
      { step: 'STEP 4', title: 'フィリピン大使館で婚姻の報告的届出（Report of Marriage）', desc: '東京のフィリピン大使館に婚姻を報告します。必要書類をまとめて提出。' },
      { step: 'STEP 5', title: '配偶者ビザの申請（在留資格の変更）', desc: '配偶者ビザ（日本人の配偶者等）を入管に申請します。PSA書類・NBI等が必要です。' },
    ],
  },
  {
    phase: 'フェーズ②',
    title: 'フィリピン先行婚姻（フィリピンで先に婚姻届を出す場合）',
    steps: [
      { step: 'STEP 1', title: '婚姻要件具備証明書（LCCM）の取得', desc: '日本人側が在フィリピン日本大使館で「独身であり婚姻能力がある」ことを証明する書類を取得します。' },
      { step: 'STEP 2', title: 'フィリピン市役所で婚姻申請', desc: 'フィリピン人側の書類（CENOMAR・PSA出生証明書等）と日本人側のLCCMを提出します。' },
      { step: 'STEP 3', title: '婚姻証明書（PSA Marriage Certificate）の取得', desc: 'フィリピン市役所での婚姻後、PSAが発行する婚姻証明書を取得します（約3〜6ヶ月後）。' },
      { step: 'STEP 4', title: '日本の市区町村役場に婚姻届を提出', desc: 'PSA婚姻証明書の日本語訳とともに、外国方式による婚姻として報告的届出を行います。' },
      { step: 'STEP 5', title: '配偶者ビザの申請', desc: '日本での在留資格（配偶者ビザ）を申請します。' },
    ],
  },
];

const requiredDocs = [
  { doc: 'CENOMAR（独身証明書）', who: 'フィリピン人側', note: 'PSA発行・発行から6ヶ月以内が目安' },
  { doc: 'PSA出生証明書', who: 'フィリピン人側', note: 'PSA発行・最新のもの' },
  { doc: '有効なパスポート（コピー）', who: 'フィリピン人側', note: '全ページのコピーが必要な場合あり' },
  { doc: '戸籍謄本', who: '日本人側', note: '市区町村役場で取得' },
  { doc: '婚姻届', who: '両者', note: '役所所定の様式' },
  { doc: '日本語翻訳', who: 'フィリピン人書類全般', note: '翻訳者の署名が必要な場合あり' },
  { doc: 'NBI Clearance', who: 'フィリピン人側（ビザ申請時）', note: '配偶者ビザ申請で求められる場合あり' },
];

const faqs = [
  {
    q: 'フィリピン人と国際結婚するとき、最初に何をすればよいですか？',
    a: 'まずCENOMAR（独身証明書）とPSA出生証明書を取得してください。これらは取得に時間がかかるため、結婚の準備段階で早めに申請することをおすすめします。その後、日本先行かフィリピン先行かを決めて手続きを進めます。',
  },
  {
    q: '日本とフィリピン、どちらで先に婚姻手続きをするべきですか？',
    a: '一般的にはフィリピン人が日本に住んでいる場合は「日本先行」、フィリピンに住んでいる場合や結婚式をフィリピンで行う場合は「フィリピン先行」が多いです。どちらにもメリット・デメリットがあるため、状況に応じて判断しましょう。',
  },
  {
    q: '国際結婚にかかる費用はどれくらいですか？',
    a: 'フィリピン書類の取得代行費用（CENOMARなど）で約4〜8万円が目安です。配偶者ビザ申請費用は別途かかります（行政書士への依頼費用を含めると15〜30万円程度）。詳細はご相談ください。',
  },
  {
    q: 'フィリピン人側が離婚経験者の場合はどうすればよいですか？',
    a: 'フィリピンには離婚制度がないため、法的に婚姻を解消するには「婚姻の取り消し（Annulment）」の裁判手続きが必要です。アニュルメントが認められた場合は、その判決書を取得した上でCENOMAR申請を行います。複雑なケースになるため、まずはご相談ください。',
  },
  {
    q: 'CENOMARの取得にどのくらい時間がかかりますか？',
    a: '代行サービス利用の場合、約3〜6週間が目安です。書類の準備を始めてから手続きが完了するまでの全体スケジュールを考えると、婚姻届提出の2〜3ヶ月前にはCENOMARの申請を始めることをおすすめします。',
  },
];

export default function KokusaiKekkonGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: 'フィリピン国際結婚ガイド', item: 'https://ph-document.com/kokusai-kekkon-guide/' },
        ],
      },
      {
        '@type': 'Article',
        headline: 'フィリピン人との国際結婚 完全ガイド｜手続きの流れ・必要書類・費用【2026年最新】',
        description: 'フィリピン人との国際結婚の手順をステップ別に解説。日本先行・フィリピン先行の2パターン、必要書類（CENOMAR・PSA等）、費用・期間まで初心者向けに徹底ガイド。',
        url: 'https://ph-document.com/kokusai-kekkon-guide/',
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
          <span className="text-gray-600">フィリピン国際結婚ガイド</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          フィリピン人との国際結婚 完全ガイド<br className="hidden md:block" />
          手続きの流れ・必要書類・費用【2026年最新】
        </h1>
        <p className="text-sm text-gray-500 mb-8">最終更新：2026年2月22日 ｜ 株式会社IGRS</p>

        {/* リード文 */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 text-sm text-blue-900 leading-relaxed">
          フィリピン人との国際結婚では、書類の取得に時間がかかり「何から始めればいいのかわからない」という方が多くいます。このガイドでは、書類準備から婚姻届提出・配偶者ビザ申請まで、すべての流れをステップ別にわかりやすく解説します。
        </div>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">目次</p>
          <ol className="space-y-1 text-sm text-secondary">
            {['まずやるべきこと（書類の取得）', '2つの手続きパターン', '必要書類チェックリスト', '費用の目安', '注意点・よくある失敗', 'よくある質問（FAQ）', 'お問い合わせ'].map((item, i) => (
              <li key={i}><a href={`#kk-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="kk-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">1. まずやるべきこと（書類の取得）</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            国際結婚の準備で最初にやるべきことは、<strong>フィリピン側の書類を早めに申請すること</strong>です。特にCENOMAR（独身証明書）とPSA出生証明書は取得に時間がかかります。
          </p>
          <div className="grid gap-3">
            {[
              { icon: '📄', title: 'CENOMAR（独身証明書）を申請', desc: '取得まで3〜6週間。婚姻届提出の2〜3ヶ月前には申請開始を。', link: '/cenomar-guide' },
              { icon: '📋', title: 'PSA出生証明書を申請', desc: '最新のPSA発行のものが必要。古い書類は受け付けない場合あり。', link: '/psa-shussei-shomeisho' },
              { icon: '🛡️', title: '（必要な場合）NBI Clearanceを申請', desc: '配偶者ビザ申請で求められることがある。HIT案件は早めに対応。', link: '/nbi-clearance-guide' },
            ].map((item, i) => (
              <Link key={i} to={item.link} className="flex gap-4 bg-white border border-gray-100 rounded-lg p-4 shadow-card hover:border-primary transition-colors group">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">{item.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 ml-auto flex-shrink-0 self-center group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* Section 2: Steps */}
        <section id="kk-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">2. 2つの手続きパターン</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            国際結婚の手続きには「日本先行」と「フィリピン先行」の2パターンがあります。状況に応じてどちらかを選びます。
          </p>
          {steps.map((phase, pi) => (
            <div key={pi} className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{phase.phase}</span>
                <h3 className="font-bold text-secondary text-sm">{phase.title}</h3>
              </div>
              <div className="space-y-3 pl-4 border-l-2 border-gray-200">
                {phase.steps.map((s, i) => (
                  <div key={i} className="relative pl-4">
                    <div className="absolute -left-[17px] top-1 w-3 h-3 rounded-full bg-primary"></div>
                    <p className="text-xs font-bold text-primary">{s.step}</p>
                    <p className="text-sm font-bold text-secondary">{s.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Section 3: Docs */}
        <section id="kk-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">3. 必要書類チェックリスト</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">書類</th>
                  <th className="px-4 py-3 text-left font-semibold">取得者</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">備考</th>
                </tr>
              </thead>
              <tbody>
                {requiredDocs.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100">{row.doc}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.who}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs border-b border-gray-100">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Cost */}
        <section id="kk-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">4. 費用の目安</h2>
          <div className="grid gap-3">
            {[
              { item: 'CENOMAR取得代行', cost: '約40,000円〜', note: 'PSA手数料・国際郵便込み' },
              { item: 'PSA出生証明書取得代行', cost: '約40,000円〜', note: 'PSA手数料・国際郵便込み' },
              { item: 'NBI Clearance取得代行', cost: '約45,000円〜', note: 'HIT案件は追加費用あり' },
              { item: '結婚手続きパック（CENOMAR・PSA・翻訳込み）', cost: '約85,000円〜', note: 'セットで割安に対応可能' },
              { item: '配偶者ビザ申請（行政書士依頼）', cost: '約15〜30万円', note: '当センター対象外・参考値' },
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
        </section>

        {/* Section 5: 注意点 */}
        <section id="kk-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">5. 注意点・よくある失敗</h2>
          <div className="space-y-4">
            {[
              { title: 'CENOMARを取得するタイミングを誤る', body: '有効期限は約6ヶ月のため、取得が早すぎると使用前に期限切れになることがあります。婚姻届提出予定日から逆算して申請しましょう。' },
              { title: '書類の名前のスペルが一致しない', body: 'パスポート・CENOMAR・PSA出生証明書で名前のスペルが異なると受理されません。事前に全書類の整合性を確認することが重要です。' },
              { title: 'フィリピン先行婚姻でPSA婚姻証明書の取得に時間がかかる', body: 'フィリピンの市役所での婚姻後、PSAに婚姻記録が登録されるまで3〜6ヶ月かかることがあります。日本での報告的届出はPSA書類が届いてから行います。' },
              { title: '離婚歴・再婚のケースで追加書類が必要', body: 'フィリピン人側に離婚歴がある場合、アニュルメント判決書が必要です。日本人側に離婚歴がある場合も戸籍謄本で確認が必要です。' },
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
          <p className="text-xs text-primary font-bold mb-2">書類の準備でお困りの方へ</p>
          <h2 className="text-xl font-bold mb-3">書類取得はまるごとお任せください</h2>
          <p className="text-sm text-gray-300 mb-5">
            CENOMAR・PSA・NBI取得の代行から翻訳サポートまで、<br />
            日本語だけで完結します。まずは無料相談からどうぞ。
          </p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            無料相談する
          </a>
        </div>

        {/* FAQ */}
        <section id="kk-6" className="mb-10">
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
          <h2 className="text-lg font-bold text-secondary mb-4">個別書類のガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { to: '/cenomar-guide', title: 'CENOMARガイド', desc: '独身証明書の取得方法・費用・期間' },
              { to: '/psa-shussei-shomeisho', title: 'PSA出生証明書ガイド', desc: '出生証明書の取得方法と注意点' },
              { to: '/nbi-clearance-guide', title: 'NBI無犯罪証明書ガイド', desc: 'NBI HIT問題の解説と取得手順' },
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
            <p className="text-sm text-gray-500 mb-6">書類の準備からビザ申請のご相談まで、まずはお気軽にどうぞ。</p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【国際結婚ガイドからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/kokusai-kekkon-guide/" />
              <div>
                <label htmlFor="kk-name" className="block text-xs text-gray-600 mb-1">お名前</label>
                <input id="kk-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="山田 太郎" />
              </div>
              <div>
                <label htmlFor="kk-email" className="block text-xs text-gray-600 mb-1">メールアドレス</label>
                <input id="kk-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="kk-message" className="block text-xs text-gray-600 mb-1">ご相談内容</label>
                <textarea id="kk-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="国際結婚の書類準備、手続きの流れなどについてお気軽にご相談ください。" />
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
