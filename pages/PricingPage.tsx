import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Fingerprint, Gem, CheckCircle, ChevronRight, ChevronDown, Heart, Award, HelpCircle, AlertTriangle, X, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getCtaVariant, trackEvent } from '../lib/analytics';

const plans = [
  {
    id: 'psa',
    icon: FileText,
    title: 'PSA取得代行',
    subtitle: '出生証明書 / 婚姻証明書 / CENOMAR',
    price: '¥40,000',
    note: '〜 (税・送料別)',
    highlights: ['役所申請手数料込み', '国際送料別途'],
    details: {
      period: '約4週間',
      note: '※税・国際送料は別途',
      docs: ['出生証明書（+ アポスティーユ）', '婚姻証明書（+ アポスティーユ）', 'CENOMAR（+ アポスティーユ）'],
    },
    featured: false,
  },
  {
    id: 'nbi',
    icon: Fingerprint,
    title: 'NBI取得代行',
    subtitle: '無犯罪証明書の取得サポート',
    price: '¥45,000',
    note: '〜 (税・送料別)',
    highlights: ['指紋採取サポート', 'DFA認証オプション可'],
    details: {
      period: '約4週間',
      note: '※税・国際送料は別途',
      docs: ['NBI無犯罪証明書', 'DFAアポスティーユ認証（オプション）'],
    },
    featured: false,
  },
  {
    id: 'lto',
    icon: FileText,
    title: 'LTO関連書類取得代行',
    subtitle: '運転免許関連書類（外免切り替え用）',
    price: '¥85,000',
    note: '〜 (税・送料別)',
    highlights: ['役所申請手数料込み', '国際送料別途'],
    details: {
      period: '約4週間',
      note: '※税・国際送料は別途',
      docs: ['LTO運転免許証関連書類', 'LTOトランザクション履歴'],
    },
    featured: false,
  },
  {
    id: 'pack',
    icon: Gem,
    title: '国際結婚パック',
    subtitle: '婚姻済証明書申請に必要な書類一式',
    price: '¥85,000',
    note: '〜 (税・送料別)',
    highlights: ['日本語翻訳込み', '優先対応サポート'],
    details: {
      period: '約4週間',
      note: '※税・国際送料は別途',
      docs: ['出生証明書（+ アポスティーユ）', 'セノマー独身証明書（+ アポスティーユ）'],
    },
    featured: true,
  },
  {
    id: 'visa',
    icon: Heart,
    title: '配偶者ビザ',
    subtitle: '在留資格「日本人の配偶者等」申請サポート',
    price: '¥85,000',
    note: '〜 (税・送料別)',
    highlights: ['必要書類の準備サポート', '申請書類チェック'],
    details: {
      period: '要相談',
      note: '※ケースにより異なります',
      docs: ['在留資格認定証明書交付申請書', '婚姻証明書・戸籍謄本など'],
    },
    featured: false,
  },
  {
    id: 'naturalization',
    icon: Award,
    title: '帰化申請',
    subtitle: '日本国籍取得の申請サポート',
    price: '¥85,000',
    note: '〜 (税・送料別)',
    highlights: ['必要書類の準備サポート', '継続的フォローアップ'],
    details: {
      period: '要相談',
      note: '※ケースにより異なります',
      docs: ['帰化許可申請書類一式', '居住・納税関連書類など'],
    },
    featured: false,
  },
];

const faqs = [
  { q: '料金に消費税は含まれていますか？', a: '表示金額はすべて税抜きです。別途消費税（10%）がかかります。' },
  { q: '国際送料はいくらですか？', a: '送り先の国・地域によって異なります。お問い合わせ時にご確認ください。日本へのEMS発送の場合、概ね1,500〜3,000円程度が目安です。' },
  { q: '取得難易度による変動とはどういう意味ですか？', a: 'フィリピン現地での追加調査や再申請が必要な場合（MATCH FOUND、NO RECORD FOUND等）は、別途費用が発生することがあります。事前に詳しくご説明しますのでご安心ください。' },
  { q: '複数の書類をまとめて依頼できますか？', a: 'はい、まとめての対応が可能です。書類の組み合わせによってはセット割引が適用される場合もありますので、まずはご相談ください。' },
  { q: '支払い方法は何がありますか？', a: '銀行振込でのお支払いをお願いしています。お見積もり確認後、着手前にお振り込みいただく形となります。詳細はお問い合わせ時にご案内します。' },
  { q: '急ぎの場合は対応できますか？', a: '書類の種類によっては優先対応が可能な場合があります。ただし、PSA・NBI等フィリピン政府機関の処理期間は弊社でコントロールできないため、あらかじめご了承ください。まずはご相談ください。' },
  { q: 'キャンセルは可能ですか？', a: '着手前のキャンセルは可能です。フィリピン現地機関への申請手続き完了後のキャンセルは、現地手数料が発生している関係でご対応が難しい場合があります。詳しくはお問い合わせください。' },
  { q: '書類が取得できなかった場合はどうなりますか？', a: 'PSAの「NO RECORD FOUND」など、フィリピン政府機関の記録上の問題で取得できなかった場合は、代替手続きをご案内します。弊社の作業に起因する問題については責任をもって対応いたします。' },
];

const scenarios = [
  {
    icon: '💍',
    title: 'フィリピン人と国際結婚したい',
    desc: '日本での婚姻届にはCENOMARとPSA出生証明書が必要です。フィリピン先行の場合はさらに追加書類が必要になります。',
    recommend: '国際結婚パック',
    planId: 'pack',
  },
  {
    icon: '🛂',
    title: '配偶者ビザ（在留資格）を申請したい',
    desc: '入管への配偶者ビザ申請では、PSA書類・NBI Clearance・日本語翻訳などの準備が必要です。',
    recommend: '配偶者ビザサポート',
    planId: 'visa',
  },
  {
    icon: '🚗',
    title: 'フィリピン免許を日本免許に切り替えたい',
    desc: '外免切替にはLTO発行の書類（運転免許・トランザクション記録）が必要です。フィリピンに行かずに取得代行できます。',
    recommend: 'LTO関連書類取得代行',
    planId: 'lto',
  },
  {
    icon: '📋',
    title: 'まず何が必要か確認したい',
    desc: '「どの書類が必要かわからない」という方も大歓迎です。状況をお聞きして最適なプランをご提案します。',
    recommend: '無料相談から',
    planId: null,
  },
];

const included = [
  'フィリピン各機関への申請手続き代行',
  '書類の確認・不備チェック',
  '日本語での進捗報告',
  '書類受領後の日本への転送（国際送料別途）',
  'DFAアポスティーユ認証の代行（オプション）',
];

const notIncluded = [
  '消費税（別途10%）',
  '国際郵便送料',
  'フィリピン政府機関の申請手数料（一部プランで含む）',
  '日本語翻訳費用（必要な場合は別途ご相談）',
  '追加調査費用（MATCH FOUND等の異議申し立て）',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
        { '@type': 'ListItem', position: 2, name: '料金プラン', item: 'https://ph-document.com/pricing/' },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'フィリピン書類取得代行 料金プラン一覧',
      itemListElement: plans.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.title,
        description: p.subtitle,
      })),
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

export default function PricingPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const ctaVariant = getCtaVariant();

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="max-w-md md:max-w-2xl lg:max-w-6xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6" aria-label="パンくずリスト">
          <Link to="/" className="hover:text-secondary">ホーム</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">料金</span>
        </nav>

        {/* ヘッダー */}
        <div className="text-center mb-4">
          <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-1 block">Price</span>
          <h1 className="text-2xl font-bold text-secondary">料金プラン</h1>
          <p className="text-xs text-gray-500 mt-2">※取得難易度により変動する場合があります。すべて税抜き表示。</p>
        </div>

        {/* リード文 */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            フィリピン書類の取得は、言語の壁・手続きの煩雑さ・時間のロスが大きな負担になります。
            弊社は現地セブ拠点を活かし、<strong>すべて日本語でやり取りするだけ</strong>で書類を取得できるサービスを提供しています。
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm text-primary font-bold hover:underline"
          >
            まずは無料相談する <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 代行 vs 自力 比較表 */}
        <section className="mb-12 max-w-3xl mx-auto">
          <h2 className="text-lg font-bold text-secondary mb-4 text-center">代行 vs 自力取得 どちらがいい？</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold">比較項目</th>
                  <th className="px-4 py-3 text-center font-semibold">自力取得</th>
                  <th className="px-4 py-3 text-center font-semibold text-primary">弊社代行</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['手続きの手間', '英語対応・申請書記入など自分でやる必要あり', '日本語でのやり取りのみ'],
                  ['言語の壁', 'フィリピン機関は英語・タガログ語のみ', '現地スタッフが対応'],
                  ['トラブル対応', '自分で解決が必要（MATCH FOUND等）', 'サポートあり'],
                  ['日本にいながら取得', '大使館窓口への来訪や国際郵便手配が必要', '完全遠隔で対応可能'],
                  ['費用', '手数料＋国際郵便のみ（安い）', '代行手数料が加算される'],
                ].map(([item, self, agency], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100">{item}</td>
                    <td className="px-4 py-3 text-gray-600 text-center border-b border-gray-100">
                      <span className="text-red-400 mr-1">△</span>{self}
                    </td>
                    <td className="px-4 py-3 text-center border-b border-gray-100">
                      <span className="text-green-500 mr-1">◎</span>
                      <span className="font-medium text-secondary">{agency}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* プランカード */}
        <section className="mb-14">
          <h2 className="text-lg font-bold text-secondary mb-6 text-center">料金プラン一覧</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const isOpen = openId === plan.id;

              return (
                <div
                  key={plan.id}
                  className={`bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-shadow relative ${
                    plan.featured
                      ? 'shadow-xl border border-primary/30 lg:scale-105 z-10'
                      : 'shadow-card border border-gray-100 hover:shadow-lg'
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                      人気 No.1
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-secondary text-lg">{plan.title}</h3>
                        <p className="text-xs text-gray-500">{plan.subtitle}</p>
                      </div>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${plan.featured ? 'bg-primary/10 text-primary' : 'bg-secondary/5 text-secondary'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-2xl font-bold font-display text-primary">{plan.price}</span>
                      <span className="text-xs text-gray-500">{plan.note}</span>
                    </div>

                    <ul className="space-y-2 mb-6 flex-1">
                      {plan.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setOpenId(isOpen ? null : plan.id)}
                      aria-expanded={isOpen}
                      className="w-full py-3 rounded-lg border border-secondary text-secondary font-bold text-sm transition-colors flex items-center justify-center gap-1 hover:bg-secondary hover:text-white mb-3"
                    >
                      詳細を見る
                      {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </button>

                    {isOpen && (
                      <div className="bg-gray-50 rounded-xl p-4 mb-3 text-sm text-gray-700 space-y-3">
                        <div>
                          <p className="font-bold text-secondary mb-1">取得できる書類</p>
                          <ul className="space-y-1">
                            {plan.details.docs.map((doc) => (
                              <li key={doc} className="flex items-start gap-2">
                                <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                {doc}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex gap-4 text-xs text-gray-500">
                          <span>納期: {plan.details.period}</span>
                          <span>{plan.details.note}</span>
                        </div>
                      </div>
                    )}

                    <Link
                      to="/contact"
                      onClick={() => trackEvent('cta_click', { location: 'pricing_page', type: plan.id, variant: ctaVariant })}
                      className={`w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-1 transition-colors ${
                        plan.featured
                          ? 'bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-secondary-light'
                          : 'bg-primary text-white hover:bg-primary-hover'
                      }`}
                    >
                      相談して見積もる
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* どのプランを選べばいい？ */}
        <section className="mb-12 max-w-3xl mx-auto">
          <h2 className="text-lg font-bold text-secondary mb-4">どのプランを選べばいい？</h2>
          <p className="text-sm text-gray-500 mb-5">状況別におすすめのプランをご案内します。</p>
          <div className="space-y-3">
            {scenarios.map((s) => (
              <div key={s.title} className="bg-white border border-gray-100 rounded-xl p-4 shadow-card flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-secondary text-sm mb-1">{s.title}</h3>
                  <p className="text-xs text-gray-600 mb-2">{s.desc}</p>
                  <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    推奨：{s.recommend}
                  </span>
                </div>
                {s.planId && (
                  <button
                    onClick={() => {
                      setOpenId(s.planId);
                      document.getElementById('plan-' + s.planId)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs text-secondary hover:text-primary flex-shrink-0 flex items-center gap-1 transition-colors"
                  >
                    詳細 <ChevronRight className="w-3 h-3" />
                  </button>
                )}
                {!s.planId && (
                  <Link to="/contact" className="text-xs text-secondary hover:text-primary flex-shrink-0 flex items-center gap-1 transition-colors">
                    相談する <ChevronRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 料金に含まれるもの / 含まれないもの */}
        <section className="mb-12 max-w-3xl mx-auto">
          <h2 className="text-lg font-bold text-secondary mb-4">料金に含まれるもの・含まれないもの</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-700 text-sm mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                含まれるもの
              </h3>
              <ul className="space-y-2">
                {included.map((item) => (
                  <li key={item} className="text-xs text-green-800 flex gap-2">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-700 text-sm mb-3 flex items-center gap-2">
                <X className="w-4 h-4" />
                含まれないもの（別途）
              </h3>
              <ul className="space-y-2">
                {notIncluded.map((item) => (
                  <li key={item} className="text-xs text-red-800 flex gap-2">
                    <span className="text-red-400 flex-shrink-0">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 注意点 */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-800 mb-1">料金についての注意点</p>
              <p className="text-xs text-amber-700">
                表示価格はあくまで目安です。フィリピン現地の状況（MATCH FOUND、NO RECORD FOUND等）によっては追加対応が必要になる場合があります。お見積もり確定前に詳しくご説明しますので、まずはご相談ください。
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="max-w-2xl mx-auto mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            料金に関するよくある質問
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex justify-between items-center"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm font-medium text-secondary">Q. {faq.q}</span>
                  {openFaq === i ? <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" /> : <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-secondary text-white rounded-2xl p-8 max-w-2xl mx-auto">
          <p className="text-xs text-primary font-bold mb-2">まずはお気軽に</p>
          <p className="text-xl font-bold mb-3">どの書類が必要か、わからなくて大丈夫です</p>
          <p className="text-sm text-gray-300 mb-6">
            状況をお聞きして、必要な書類と費用の概算をご案内します。
          </p>
          <Link
            to="/contact"
            onClick={() => trackEvent('cta_click', { location: 'pricing_page_bottom', variant: ctaVariant })}
            className="inline-block bg-primary text-white font-bold px-10 py-4 rounded-xl hover:bg-primary-hover transition-colors shadow-lg"
          >
            無料で相談する
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
