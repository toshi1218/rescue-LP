import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, FileText, ArrowRight, AlertTriangle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

const steps = [
  { step: 'STEP 1', title: '帰化の要件を確認する', desc: '在留期間・就労・納税・素行要件などを確認します。フィリピン国籍の方は原則5年以上の継続在留が必要です。' },
  { step: 'STEP 2', title: '法務局で事前相談（予約制）', desc: '管轄の法務局に予約を取り、担当官と必要書類の確認を行います。書類リストは個人の状況により異なります。' },
  { step: 'STEP 3', title: 'フィリピン側の書類を取得する', desc: 'PSA出生証明書・PSA婚姻証明書（既婚者）・NBI Clearance等、フィリピンから取り寄せる書類を準備します。' },
  { step: 'STEP 4', title: '日本側の書類を準備する', desc: '住民票・納税証明書・在留カードのコピー・在勤証明書等、日本で取得する書類を揃えます。' },
  { step: 'STEP 5', title: '申請書類一式を法務局に提出', desc: '全書類が揃ったら法務局に提出します。担当官との面接も実施されます。' },
  { step: 'STEP 6', title: '審査・官報告示・帰化届', desc: '審査には6ヶ月〜1年以上かかります。許可の場合は官報に告示され、その後市区町村役場に帰化届を提出します。' },
];

const requiredDocs = [
  { doc: 'PSA出生証明書', who: 'フィリピン当局', note: 'PSA発行のもの。アポスティーユ認証が必要な場合あり' },
  { doc: 'PSA婚姻証明書', who: 'フィリピン当局', note: '既婚者のみ。PSA発行のもの' },
  { doc: 'NBI Clearance', who: 'フィリピン当局', note: '発行から3〜6ヶ月以内のもの。DFAアポスティーユ推奨' },
  { doc: '日本語翻訳', who: '申請者（または代行）', note: 'フィリピン書類全般に翻訳添付が必要' },
  { doc: '住民票（世帯全員）', who: '市区町村役場', note: '3ヶ月以内のもの' },
  { doc: '在留カードのコピー', who: '申請者', note: '表・裏両面' },
  { doc: '納税証明書', who: '税務署・市区町村', note: '過去数年分が必要' },
  { doc: '在勤証明書・源泉徴収票', who: '勤務先', note: '自営の場合は事業証明書等' },
];

const faqs = [
  {
    q: '帰化申請にフィリピンの書類が必要なのはなぜですか？',
    a: '法務局はあなたの出生・身分関係をフィリピン政府発行の公式書類で確認する必要があります。PSA出生証明書はあなたの生年月日・親族関係を証明し、NBI Clearanceはフィリピン国内に犯罪歴がないことを証明するために求められます。',
  },
  {
    q: 'フィリピンのPSA書類にアポスティーユは必要ですか？',
    a: '法務局の担当官の判断によって異なりますが、DFAアポスティーユ認証を付けておくと手続きがスムーズです。当センターではPSA書類の取得代行とアポスティーユ認証取得の代行を合わせて対応しています。',
  },
  {
    q: 'NBI Clearanceの有効期限はどのくらいですか？',
    a: '一般的に発行から1年ですが、法務局への提出時点で3〜6ヶ月以内のものを求められることが多いです。審査に時間がかかることを考慮し、申請直前に取得することをおすすめします。',
  },
  {
    q: '帰化申請の審査にどのくらいかかりますか？',
    a: '書類提出から許可まで通常6ヶ月〜1年以上かかります。審査中に追加書類の提出を求められることもあります。書類の不備があると大幅に遅延するため、最初から完全な書類を揃えることが重要です。',
  },
  {
    q: '帰化が許可されたらフィリピン国籍はどうなりますか？',
    a: '日本に帰化すると日本国籍を取得し、フィリピン国籍は原則として失いますが、日本の帰化法は二重国籍を認めていないため、フィリピン国籍の離脱手続きが必要になります。詳細はフィリピン大使館にお問い合わせください。',
  },
  {
    q: '配偶者が日本人の場合、帰化の要件は緩和されますか？',
    a: 'はい。日本人の配偶者として3年以上日本に居住している場合、通常5年の居住要件が緩和される特例があります（日本国籍法第7条）。ただし他の要件（素行・生計など）は引き続き審査されます。',
  },
  {
    q: '離婚歴がある場合、PSA書類は何が必要ですか？',
    a: 'フィリピンには離婚制度がないため、法的に婚姻を解消しているかどうかによって必要書類が異なります。アニュルメント（婚姻無効）判決書がある場合はその認証書類も必要になります。個別の状況をもとにご相談ください。',
  },
  {
    q: '子どもも同時に帰化申請できますか？',
    a: 'はい。未成年の子どもを親の帰化申請に含める「随伴帰化」が可能です。子どものPSA出生証明書なども必要になります。',
  },
];

export default function KikaShinseiGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: '帰化申請ガイド', item: 'https://ph-document.com/kika-shinsei-guide/' },
        ],
      },
      {
        '@type': 'Article',
        headline: 'フィリピン人の帰化申請ガイド｜必要書類・手続きの流れ・PSA・NBI取得【2026年最新】',
        description: 'フィリピン国籍の方が日本に帰化するための手続きの流れ・必要書類（PSA出生証明書・NBI Clearance等）・費用・審査期間をわかりやすく解説。',
        url: 'https://ph-document.com/kika-shinsei-guide/',
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
          <span className="text-gray-600">帰化申請ガイド</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          フィリピン人の帰化申請 完全ガイド<br className="hidden md:block" />
          必要書類・手続きの流れ・PSA・NBI取得【2026年最新】
        </h1>
        <p className="text-sm text-gray-500 mb-8">最終更新：2026年2月22日 ｜ 株式会社IGRS</p>

        {/* リード文 */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 text-sm text-blue-900 leading-relaxed">
          日本への帰化申請では、法務局に提出するフィリピン側の書類（PSA出生証明書・NBI Clearance等）の取得が最初のハードルです。このガイドでは、帰化申請の全体的な流れと、フィリピン書類の準備方法をわかりやすく解説します。
        </div>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">目次</p>
          <ol className="space-y-1 text-sm text-secondary">
            {['帰化申請の主な要件', '手続きの流れ（6ステップ）', '必要書類チェックリスト', '費用の目安', '注意点・よくある失敗', 'よくある質問（FAQ）', 'お問い合わせ'].map((item, i) => (
              <li key={i}><a href={`#ks-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1: 要件 */}
        <section id="ks-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">1. 帰化申請の主な要件</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            帰化申請には法務局による審査があり、以下の要件を満たす必要があります。
          </p>
          <div className="grid gap-3">
            {[
              { icon: '🗓️', title: '居住要件', desc: '引き続き5年以上日本に住んでいること（日本人配偶者の場合は3年）。' },
              { icon: '🔞', title: '能力要件', desc: '20歳以上で本国法により能力者であること。' },
              { icon: '✅', title: '素行要件', desc: '素行が善良であること（犯罪歴・交通違反歴なども確認される）。' },
              { icon: '💰', title: '生計要件', desc: '自己または配偶者その他の親族の資産・技能で生計を営めること。' },
              { icon: '🏳️', title: '国籍喪失要件', desc: '帰化申請中・許可後に元の国籍を離脱できること。' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-lg p-4 shadow-card">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold text-secondary">{item.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 要件の詳細・例外規定は法務省の資料または法務局でご確認ください。</p>
        </section>

        {/* Section 2: Steps */}
        <section id="ks-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">2. 手続きの流れ（6ステップ）</h2>
          <div className="space-y-3 pl-4 border-l-2 border-gray-200">
            {steps.map((s, i) => (
              <div key={i} className="relative pl-4">
                <div className="absolute -left-[17px] top-1 w-3 h-3 rounded-full bg-primary"></div>
                <p className="text-xs font-bold text-primary">{s.step}</p>
                <p className="text-sm font-bold text-secondary">{s.title}</p>
                <p className="text-xs text-gray-600 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* フィリピン書類コールアウト */}
        <div className="bg-primary/10 border border-primary/30 rounded-xl p-5 mb-10">
          <p className="text-sm font-bold text-secondary mb-3">フィリピン書類の取得が最初のボトルネック</p>
          <p className="text-xs text-gray-700 mb-4 leading-relaxed">
            PSA出生証明書やNBI Clearanceはフィリピンから取り寄せる必要があり、取得に数週間かかります。法務局への相談と並行して早めに申請を開始することが重要です。
          </p>
          <div className="grid gap-3">
            {[
              { icon: '📋', title: 'PSA出生証明書を取得', desc: '帰化申請の核となる書類。アポスティーユ推奨。', link: '/psa-shussei-shomeisho' },
              { icon: '🛡️', title: 'NBI Clearanceを取得', desc: 'フィリピン国内の無犯罪証明。HIT案件は早めに対応。', link: '/nbi-clearance-guide' },
              { icon: '🔏', title: 'DFAアポスティーユ認証', desc: 'PSA・NBI書類への認証付加。法務局要求時に対応。', link: '/apostille-guide' },
            ].map((item, i) => (
              <Link key={i} to={item.link} className="flex gap-4 bg-white border border-gray-100 rounded-lg p-4 hover:border-primary transition-colors group">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">{item.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 ml-auto flex-shrink-0 self-center group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Section 3: Docs */}
        <section id="ks-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">3. 必要書類チェックリスト</h2>
          <p className="text-sm text-gray-700 mb-4">主な必要書類です。法務局の担当官から個別の書類リストが渡されます。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">書類</th>
                  <th className="px-4 py-3 text-left font-semibold">取得先</th>
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
          <p className="text-xs text-gray-500 mt-3">※ 書類リストは個人の状況（既婚・独身・子どもの有無等）により異なります。法務局での事前相談で確認してください。</p>
        </section>

        {/* Section 4: Cost */}
        <section id="ks-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">4. 費用の目安</h2>
          <div className="grid gap-3">
            {[
              { item: 'PSA出生証明書取得代行', cost: '約40,000円〜', note: 'PSA手数料・国際郵便込み' },
              { item: 'NBI Clearance取得代行', cost: '約45,000円〜', note: 'HIT案件は追加費用あり' },
              { item: 'DFAアポスティーユ認証代行', cost: '約15,000円〜/通', note: 'PSA・NBI各書類に追加' },
              { item: 'PSA婚姻証明書取得代行', cost: '約40,000円〜', note: '既婚者のみ' },
              { item: '日本語翻訳', cost: '約5,000〜15,000円/通', note: '書類の種類・量による' },
              { item: '行政書士への帰化申請サポート', cost: '約15〜35万円', note: '当センター対象外・参考値' },
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
        <section id="ks-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">5. 注意点・よくある失敗</h2>
          <div className="space-y-4">
            {[
              { title: 'NBI Clearanceの取得タイミングを誤る', body: '審査中に有効期限が切れてしまい、再取得を求められるケースがあります。法務局への書類提出直前に取得するのが理想です。' },
              { title: '書類の名前スペルが不一致', body: 'パスポート・PSA書類・NBI等で名前のスペルが異なると書類が認められません。全書類のスペルを事前に統一確認してください。' },
              { title: 'フィリピン書類の取得に時間がかかる', body: 'PSA書類・NBI Clearanceは取得まで数週間かかります。法務局に相談を開始したらすぐに取得手続きを始めましょう。' },
              { title: '翻訳が不完全', body: '法務局に提出するフィリピン書類の翻訳は正確さが求められます。不完全な翻訳は追加資料の提出を求められる原因になります。' },
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
          <p className="text-xs text-primary font-bold mb-2">帰化申請のフィリピン書類でお困りの方へ</p>
          <h2 className="text-xl font-bold mb-3">PSA・NBI取得はまるごとお任せください</h2>
          <p className="text-sm text-gray-300 mb-5">
            PSA出生証明書・NBI Clearance・アポスティーユ認証の取得代行まで、<br />
            日本語だけで完結します。まずは無料相談からどうぞ。
          </p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            無料相談する
          </a>
        </div>

        {/* FAQ */}
        <section id="ks-6" className="mb-10">
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
          <h2 className="text-lg font-bold text-secondary mb-4">関連書類のガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { to: '/psa-shussei-shomeisho', title: 'PSA出生証明書ガイド', desc: '出生証明書の取得方法と注意点' },
              { to: '/nbi-clearance-guide', title: 'NBI無犯罪証明書ガイド', desc: 'NBI HIT問題の解説と取得手順' },
              { to: '/apostille-guide', title: 'DFAアポスティーユガイド', desc: 'フィリピン書類への認証取得方法' },
              { to: '/kokusai-kekkon-guide', title: '国際結婚ガイド', desc: 'フィリピン人との国際結婚手続き' },
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
            <p className="text-sm text-gray-500 mb-6">PSA・NBI等のフィリピン書類取得に関するご相談はお気軽にどうぞ。</p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【帰化申請ガイドからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/kika-shinsei-guide/" />
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
                <textarea id="ks-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="帰化申請に必要なPSA・NBI書類の取得代行についてお気軽にご相談ください。" />
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
