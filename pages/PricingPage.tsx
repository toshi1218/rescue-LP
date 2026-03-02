import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Fingerprint, Gem, CheckCircle, ChevronRight, ChevronDown, Heart, Award, HelpCircle, AlertTriangle, X, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getCtaVariant, trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA, SEO_YEAR_MONTH_EN } from '../lib/seoDate';

export default function PricingPage() {
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('ホーム', 'Home'), item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: t('料金プラン', 'Pricing Plans'), item: 'https://ph-document.com/pricing/' },
        ],
      },
    ],
  };

  useMeta(
    t(`料金一覧【${SEO_YEAR_MONTH_JA}最新】フィリピン書類取得代行の費用・プラン`, `Pricing Plans [${SEO_YEAR_MONTH_EN}] | Philippine Document Service`),
    t('フィリピン書類取得代行の料金一覧。CENOMAR・PSA・NBI・DFAアポスティーユの費用・処理期間・プランをご案内。無料見積もり受付中。', 'View pricing for CENOMAR, PSA, NBI, and DFA Apostille retrieval. All plans include tax and DHL international shipping. Free quote available.')
  );

  const plans = [
    {
      id: 'psa',
      icon: FileText,
      title: t('PSA取得代行', 'PSA Document Retrieval'),
      subtitle: t('出生証明書 / 婚姻証明書 / CENOMAR', 'Birth Certificate / Marriage Certificate / CENOMAR'),
      price: t('¥40,000', 'US$289–359'),
      basicPrice: lang === 'en' ? 'US$199–259' : undefined,
      note: t('〜 (税・送料別)', '(Apostille + tax + DHL incl.)'),
      highlights: [
        t('役所申請手数料込み', 'Govt. application fee included'),
        t('国際送料別途', 'DHL shipping to USA included'),
        ...(lang === 'en' ? ['DFA Apostille authentication included'] : []),
      ],
      details: {
        period: t('約4〜6週間', 'Approx. 4–6 weeks'),
        note: t('※税・国際送料は別途', '* Apostille, tax & DHL intl. shipping included'),
        docs: [
          t('出生証明書（+ アポスティーユ）', 'Birth Certificate + DFA Apostille'),
          t('婚姻証明書（+ アポスティーユ）', 'Marriage Certificate + DFA Apostille'),
          t('CENOMAR（+ アポスティーユ）', 'CENOMAR + DFA Apostille'),
        ],
      },
      featured: false,
    },
    {
      id: 'nbi',
      icon: Fingerprint,
      title: t('NBI取得代行', 'NBI Clearance Retrieval'),
      subtitle: t('無犯罪証明書の取得サポート', 'NBI Clearance with DFA Apostille'),
      price: t('¥45,000', 'US$329–429'),
      basicPrice: lang === 'en' ? 'US$249–329' : undefined,
      note: t('〜 (税・送料別)', '(Apostille + tax + DHL incl.)'),
      highlights: [
        t('指紋採取サポート', 'Fingerprint appointment support'),
        t('DFA認証オプション可', 'DFA Apostille included'),
        ...(lang === 'en' ? ['MATCH FOUND resolution support'] : []),
      ],
      details: {
        period: t('約4〜6週間', 'Approx. 4–6 weeks'),
        note: t('※税・国際送料は別途', '* Apostille, tax & DHL intl. shipping included'),
        docs: [
          t('NBI無犯罪証明書', 'NBI Clearance'),
          t('DFAアポスティーユ認証（オプション）', 'DFA Apostille Authentication'),
        ],
      },
      featured: false,
    },
    {
      id: 'lto',
      icon: FileText,
      title: t('LTO関連書類取得代行', 'LTO Document Retrieval'),
      subtitle: t('運転免許関連書類（外免切り替え用）', 'License-related documents (for license conversion)'),
      price: t('¥100,000', 'US$699–899'),
      basicPrice: undefined,
      note: t('〜 (税・送料別)', '(tax & DHL shipping incl.)'),
      highlights: [t('役所申請手数料込み', 'Govt. application fee included'), t('国際送料別途', 'DHL shipping included')],
      details: {
        period: t('約4〜6週間', 'Approx. 4–6 weeks'),
        note: t('※税・国際送料は別途', '* Tax & DHL intl. shipping included'),
        docs: [
          t('LTO運転免許証関連書類', 'LTO Driver\'s License Documents'),
          t('LTOトランザクション履歴', 'LTO Transaction History'),
        ],
      },
      featured: false,
    },
    {
      id: 'pack',
      icon: Gem,
      title: t('国際結婚パック', 'International Marriage Package'),
      subtitle: t('婚姻済証明書申請に必要な書類一式', 'All documents for marriage certificate application'),
      price: t('¥85,000', 'US$799–1,049'),
      basicPrice: undefined,
      note: t('〜 (税・送料別)', '(Apostille + tax + DHL incl.)'),
      highlights: [
        t('日本語翻訳込み', 'English document review included'),
        t('優先対応サポート', 'Priority support'),
        ...(lang === 'en' ? ['Apostille Ready – submit directly to US immigration'] : []),
      ],
      details: {
        period: t('約4〜6週間', 'Approx. 4–6 weeks'),
        note: t('※税・国際送料は別途', '* Apostille, tax & DHL intl. shipping included'),
        docs: [
          t('出生証明書（+ アポスティーユ）', 'Birth Certificate + DFA Apostille'),
          t('セノマー独身証明書（+ アポスティーユ）', 'CENOMAR + DFA Apostille'),
        ],
      },
      featured: true,
    },
    {
      id: 'visa',
      icon: Heart,
      title: t('配偶者ビザ', 'Spouse / CR-1 Visa Support'),
      subtitle: t('在留資格「日本人の配偶者等」申請サポート', 'Document support for CR-1/IR-1 & K-1 visa applicants'),
      price: t('¥85,000', 'US$799–1,049'),
      basicPrice: undefined,
      note: t('〜 (税・送料別)', '(Apostille + tax + DHL incl.)'),
      highlights: [
        t('必要書類の準備サポート', 'Document preparation support'),
        t('申請書類チェック', 'Application document review'),
        ...(lang === 'en' ? ['Apostille Ready for USCIS/NVC submission'] : []),
      ],
      details: {
        period: t('要相談', 'Contact for details'),
        note: t('※ケースにより異なります', '* Varies by case'),
        docs: [
          t('在留資格認定証明書交付申請書', 'PSA Birth Certificate + Apostille'),
          t('婚姻証明書・戸籍謄本など', 'CENOMAR + Apostille, NBI Clearance + Apostille'),
        ],
      },
      featured: false,
    },
    {
      id: 'naturalization',
      icon: Award,
      title: t('帰化申請', 'Naturalization Application'),
      subtitle: t('日本国籍取得の申請サポート', 'Support for acquiring Japanese nationality'),
      price: t('¥85,000', 'US$799–1,049'),
      basicPrice: undefined,
      note: t('〜 (税・送料別)', '(Apostille + tax + DHL incl.)'),
      highlights: [t('必要書類の準備サポート', 'Document preparation support'), t('継続的フォローアップ', 'Ongoing follow-up')],
      details: {
        period: t('要相談', 'Contact for details'),
        note: t('※ケースにより異なります', '* Varies by case'),
        docs: [
          t('帰化許可申請書類一式', 'Naturalization application documents'),
          t('居住・納税関連書類など', 'Residency and tax documents, etc.'),
        ],
      },
      featured: false,
    },
  ];

  const faqs = [
    {
      q: t('料金に消費税は含まれていますか？', 'Does the price include consumption tax?'),
      a: t('表示金額はすべて税抜きです。別途消費税（10%）がかかります。', 'All displayed prices are all-inclusive: Philippine tax and DHL international shipping to the USA are already included.'),
    },
    {
      q: t('国際送料はいくらですか？', 'How much is the international shipping fee?'),
      a: t('送り先の国・地域によって異なります。お問い合わせ時にご確認ください。日本へのEMS発送の場合、概ね5,000〜6,000円程度が目安です。', 'DHL Express international shipping to the USA is already included in the displayed price. No additional shipping fee will be charged.'),
    },
    {
      q: t('取得難易度による変動とはどういう意味ですか？', 'What does "price may vary depending on difficulty" mean?'),
      a: t('フィリピン現地での追加調査や再申請が必要な場合（MATCH FOUND、NO RECORD FOUND等）は、別途費用が発生することがあります。事前に詳しくご説明しますのでご安心ください。', 'If additional investigation or re-application is required in the Philippines (e.g., MATCH FOUND, NO RECORD FOUND), additional costs may apply. We will explain the details in advance so you can proceed with confidence.'),
    },
    {
      q: t('複数の書類をまとめて依頼できますか？', 'Can I order multiple documents at once?'),
      a: t('はい、まとめての対応が可能です。書類の組み合わせによってはセット割引が適用される場合もありますので、まずはご相談ください。', 'Yes, we can handle multiple documents at once. Set discounts may apply depending on the combination of documents, so please consult with us first.'),
    },
    {
      q: t('支払い方法は何がありますか？', 'What payment methods are available?'),
      a: t('銀行振込でのお支払いをお願いしています。お見積もり確認後、着手前にお振り込みいただく形となります。詳細はお問い合わせ時にご案内します。', 'We accept bank transfer. Payment is required before we begin, after you confirm the estimate. Details will be provided at the time of inquiry.'),
    },
    {
      q: t('急ぎの場合は対応できますか？', 'Can you handle urgent requests?'),
      a: t('書類の種類によっては優先対応が可能な場合があります。ただし、PSA・NBI等フィリピン政府機関の処理期間は弊社でコントロールできないため、あらかじめご了承ください。まずはご相談ください。', 'Priority handling may be available depending on the document type. However, please note that we cannot control the processing times of Philippine government agencies such as PSA and NBI. Please contact us first.'),
    },
    {
      q: t('キャンセルは可能ですか？', 'Can I cancel my order?'),
      a: t('着手前のキャンセルは可能です。フィリピン現地機関への申請手続き完了後のキャンセルは、現地手数料が発生している関係でご対応が難しい場合があります。詳しくはお問い合わせください。', 'Cancellation before we begin is possible. Cancellation after the application process has been completed with Philippine agencies may be difficult due to incurred local fees. Please contact us for details.'),
    },
    {
      q: t('書類が取得できなかった場合はどうなりますか？', 'What happens if the documents cannot be obtained?'),
      a: t('PSAの「NO RECORD FOUND」など、フィリピン政府機関の記録上の問題で取得できなかった場合は、代替手続きをご案内します。弊社の作業に起因する問題については責任をもって対応いたします。', 'If documents cannot be obtained due to issues in Philippine government records such as PSA "NO RECORD FOUND," we will guide you on alternative procedures. We will take full responsibility for any issues caused by our work.'),
    },
  ];

  const scenarios = [
    {
      icon: '💍',
      title: t('フィリピン人と国際結婚したい', 'I want to marry a Filipino/Filipina'),
      desc: t('日本での婚姻届にはCENOMARとPSA出生証明書が必要です。フィリピン先行の場合はさらに追加書類が必要になります。', 'Marriage registration in Japan requires CENOMAR and PSA Birth Certificate. Additional documents are needed for Philippine-first marriage.'),
      recommend: t('国際結婚パック', 'International Marriage Package'),
      planId: 'pack',
    },
    {
      icon: '🛂',
      title: t('配偶者ビザ（在留資格）を申請したい', 'I want to apply for a spouse visa (residence status)'),
      desc: t('入管への配偶者ビザ申請では、PSA書類・NBI Clearance・日本語翻訳などの準備が必要です。', 'Spouse visa application to immigration requires PSA documents, NBI Clearance, and Japanese translations.'),
      recommend: t('配偶者ビザサポート', 'Spouse Visa Support'),
      planId: 'visa',
    },
    {
      icon: '🚗',
      title: t('フィリピン免許を日本免許に切り替えたい', 'I want to convert my Philippine license to a Japanese license'),
      desc: t('外免切替にはLTO発行の書類（運転免許・トランザクション記録）が必要です。フィリピンに行かずに取得代行できます。', 'License transfer requires LTO-issued documents (license and transaction records). We can handle retrieval without you traveling to the Philippines.'),
      recommend: t('LTO関連書類取得代行', 'LTO Document Retrieval'),
      planId: 'lto',
    },
    ...(lang === 'en' ? [{
      icon: '🇺🇸',
      title: 'Applying for a US CR-1/IR-1 or K-1 visa',
      desc: 'USCIS and NVC submissions require PSA, CENOMAR, and NBI documents with DFA Apostille.',
      recommend: 'Spouse / CR-1 Visa Support',
      planId: 'visa',
    }] : []),
    {
      icon: '📋',
      title: t('まず何が必要か確認したい', 'I want to find out what I need first'),
      desc: t('「どの書類が必要かわからない」という方も大歓迎です。状況をお聞きして最適なプランをご提案します。', '"I don\'t know which documents I need" is perfectly fine. We will listen to your situation and recommend the best plan.'),
      recommend: t('無料相談から', 'Start with a free consultation'),
      planId: null,
    },
  ];

  const included = [
    t('フィリピン各機関への申請手続き代行', 'Application procedures with Philippine agencies'),
    t('書類の確認・不備チェック', 'Document review and deficiency check'),
    t('日本語での進捗報告', 'Progress updates in English'),
    t('書類受領後の日本への転送（国際送料別途）', 'DHL Express international shipping to the USA'),
    t('DFAアポスティーユ認証の代行（オプション）', 'DFA Apostille authentication (Premium plans)'),
    ...(lang === 'en' ? ['Philippine government agency fees'] : []),
  ];

  const notIncluded = [
    t('消費税（別途10%）', 'Consumption tax (already included)'),
    t('国際郵便送料', 'DHL shipping (already included)'),
    t('フィリピン政府機関の申請手数料（一部プランで含む）', 'Japanese translation (contact us if needed)'),
    t('日本語翻訳費用（必要な場合は別途ご相談）', 'Additional investigation fees (MATCH FOUND resolution)'),
    t('追加調査費用（MATCH FOUND等の異議申し立て）', 'Additional investigation fees (for MATCH FOUND cases, etc.)'),
  ];

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
        <nav className="text-xs text-gray-400 mb-6" aria-label={t('パンくずリスト', 'Breadcrumb')}>
          <Link to="/" className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('料金', 'Pricing')}</span>
        </nav>

        {/* ヘッダー */}
        <div className="text-center mb-4">
          <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-1 block">Price</span>
          <h1 className="text-2xl font-bold text-secondary">{t('料金プラン', 'Pricing Plans')}</h1>
          <p className="text-xs text-gray-500 mt-2">{t('※取得難易度により変動する場合があります。すべて税抜き表示。', '* Prices may vary by document complexity. All prices include tax & DHL shipping to the USA.')}</p>
        </div>

        {/* リード文 */}
        <div className="max-w-2xl mx-auto text-center mb-6">
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {t(
              'フィリピン書類の取得は、言語の壁・手続きの煩雑さ・時間のロスが大きな負担になります。弊社は現地セブ拠点を活かし、',
              'Obtaining Philippine documents can be a significant burden due to language barriers, complex procedures, and time loss. Leveraging our Cebu base, we provide a service where '
            )}
            <strong>{t('すべて日本語でやり取りするだけ', 'you only need to communicate in English')}</strong>
            {t('で書類を取得できるサービスを提供しています。', ' to obtain your documents.')}
          </p>
          <Link
            to="/contact/"
            className="inline-flex items-center gap-2 text-sm text-primary font-bold hover:underline"
          >
            {t('まずは無料相談する', 'Start with a free consultation')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* EN: Apostille Ready callout */}
        {lang === 'en' && (
          <div className="max-w-2xl mx-auto mb-10 bg-primary/5 border border-primary/20 rounded-2xl p-5">
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Apostille Ready</p>
            <p className="text-sm font-bold text-secondary mb-1">Documents ready for direct submission to USCIS, NVC, or the US Embassy</p>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              Our Premium plans include <strong>DFA Apostille authentication</strong> — the official Philippine government stamp recognized under the Hague Convention. No extra steps needed: just submit your documents directly to immigration.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <p className="font-bold text-secondary">DIY total</p>
                <p className="text-gray-500">~US$60–150</p>
                <p className="text-gray-400 text-[10px] mt-1">+ weeks of coordination</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-primary/30 relative">
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] px-2 py-0.5 rounded-full font-bold">Our Service</span>
                <p className="font-bold text-primary">Premium</p>
                <p className="text-primary font-semibold">from US$289</p>
                <p className="text-gray-400 text-[10px] mt-1">Apostille incl.</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <p className="font-bold text-secondary">Basic</p>
                <p className="text-gray-500">from US$199</p>
                <p className="text-gray-400 text-[10px] mt-1">No Apostille</p>
              </div>
            </div>
          </div>
        )}

        {/* 代行 vs 自力 比較表 */}
        <section className="mb-12 max-w-3xl mx-auto">
          <h2 className="text-lg font-bold text-secondary mb-4 text-center">{t('代行 vs 自力取得 どちらがいい？', 'Agency vs Self-Retrieval: Which is Better?')}</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold">{t('比較項目', 'Comparison')}</th>
                  <th className="px-4 py-3 text-center font-semibold">{t('自力取得', 'Self-Retrieval')}</th>
                  <th className="px-4 py-3 text-center font-semibold text-primary">{t('弊社代行', 'Our Service')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    t('手続きの手間', 'Effort'),
                    t('英語対応・申請書記入など自分でやる必要あり', 'Must handle English communication and forms yourself'),
                    t('日本語でのやり取りのみ', 'English communication only'),
                  ],
                  [
                    t('言語の壁', 'Language barrier'),
                    t('フィリピン機関は英語・タガログ語のみ', 'Philippine agencies operate in English/Filipino only'),
                    t('現地スタッフが対応', 'Our local staff handle it'),
                  ],
                  [
                    t('トラブル対応', 'Trouble handling'),
                    t('自分で解決が必要（MATCH FOUND等）', 'Must resolve issues yourself (MATCH FOUND, etc.)'),
                    t('サポートあり', 'Full support provided'),
                  ],
                  [
                    t('日本にいながら取得', 'Remote acquisition'),
                    t('大使館窓口への来訪や国際郵便手配が必要', 'Embassy visits or international mail arrangements needed'),
                    t('完全遠隔で対応可能', 'Fully remote'),
                  ],
                  [
                    t('費用', 'Cost'),
                    t('手数料＋国際郵便のみ（安い）', 'Fees + int\'l postage only (cheaper)'),
                    t('代行手数料が加算される', 'Agency fee applies'),
                  ],
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
          <h2 className="text-lg font-bold text-secondary mb-6 text-center">{t('料金プラン一覧', 'Plan List')}</h2>
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
                      {t('人気 No.1', 'Most Popular')}
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

                    <div className="mb-4">
                      {plan.basicPrice && (
                        <div className="mb-2 flex flex-col gap-1">
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold font-display text-primary">{plan.price}</span>
                            <span className="text-xs text-gray-500">{plan.note}</span>
                          </div>
                          <span className="inline-block text-[11px] bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full w-fit">Premium – Apostille Ready ✓</span>
                          <div className="text-xs text-gray-400 mt-1">
                            Basic (no Apostille): <span className="font-semibold text-gray-600">{plan.basicPrice}</span>
                          </div>
                        </div>
                      )}
                      {!plan.basicPrice && (
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold font-display text-primary">{plan.price}</span>
                          <span className="text-xs text-gray-500">{plan.note}</span>
                        </div>
                      )}
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
                      {t('詳細を見る', 'View Details')}
                      {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </button>

                    {isOpen && (
                      <div className="bg-gray-50 rounded-xl p-4 mb-3 text-sm text-gray-700 space-y-3">
                        <div>
                          <p className="font-bold text-secondary mb-1">{t('取得できる書類', 'Included Documents')}</p>
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
                          <span>{t('納期', 'Delivery')}: {plan.details.period}</span>
                          <span>{plan.details.note}</span>
                        </div>
                      </div>
                    )}

                    <Link
                      to="/contact/"
                      onClick={() => trackEvent('cta_click', { location: 'pricing_page', type: plan.id, variant: ctaVariant })}
                      className={`w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-1 transition-colors ${
                        plan.featured
                          ? 'bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-secondary-light'
                          : 'bg-primary text-white hover:bg-primary-hover'
                      }`}
                    >
                      {t('相談して見積もる', 'Get a Quote')}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* どのプランを選べばいい？ */}
        <section className="mb-12 max-w-3xl mx-auto">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('どのプランを選べばいい？', 'Which Plan Should I Choose?')}</h2>
          <p className="text-sm text-gray-500 mb-5">{t('状況別におすすめのプランをご案内します。', 'We recommend plans based on your situation.')}</p>
          <div className="space-y-3">
            {scenarios.map((s) => (
              <div key={s.title} className="bg-white border border-gray-100 rounded-xl p-4 shadow-card flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-secondary text-sm mb-1">{s.title}</h3>
                  <p className="text-xs text-gray-600 mb-2">{s.desc}</p>
                  <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {t('推奨：', 'Recommended: ')}{s.recommend}
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
                    {t('詳細', 'Details')} <ChevronRight className="w-3 h-3" />
                  </button>
                )}
                {!s.planId && (
                  <Link to="/contact/" className="text-xs text-secondary hover:text-primary flex-shrink-0 flex items-center gap-1 transition-colors">
                    {t('相談する', 'Consult')} <ChevronRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 料金に含まれるもの / 含まれないもの */}
        <section className="mb-12 max-w-3xl mx-auto">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('料金に含まれるもの・含まれないもの', "What's Included / Not Included")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-700 text-sm mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                {t('含まれるもの', "What's Included")}
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
                {t('含まれないもの（別途）', 'Not Included (Extra)')}
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
        <div className="max-w-3xl mx-auto mb-12 space-y-3">
          <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-800 mb-1">{t('料金についての注意点', 'Important Note on Pricing')}</p>
              <p className="text-xs text-amber-700">
                {t(
                  '表示価格はあくまで目安です。フィリピン現地の状況（MATCH FOUND、NO RECORD FOUND等）によっては追加対応が必要になる場合があります。お見積もり確定前に詳しくご説明しますので、まずはご相談ください。',
                  'Displayed prices are estimates only. Additional handling may be required depending on the situation in the Philippines (e.g., MATCH FOUND, NO RECORD FOUND). We will explain the details before finalizing the estimate, so please consult with us first.'
                )}
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed px-1">
            {t(
              '※表示価格はすべて税抜きです。取得難易度により変動する場合があります。',
              '* All prices include Philippine tax and DHL international shipping to the USA. Final amount may vary by document condition.'
            )}
          </p>
        </div>

        {/* FAQ */}
        <section className="max-w-2xl mx-auto mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            {t('料金に関するよくある質問', 'Frequently Asked Questions about Pricing')}
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
          <p className="text-xs text-primary font-bold mb-2">{t('まずはお気軽に', 'Feel free to reach out')}</p>
          <p className="text-xl font-bold mb-3">{t('どの書類が必要か、わからなくて大丈夫です', "It's okay if you don't know which documents you need")}</p>
          <p className="text-sm text-gray-300 mb-6">
            {t(
              '状況をお聞きして、必要な書類と費用の概算をご案内します。',
              'We will listen to your situation and provide an estimate of the required documents and costs.'
            )}
          </p>
          <Link
            to="/contact/"
            onClick={() => trackEvent('cta_click', { location: 'pricing_page_bottom', variant: ctaVariant })}
            className="inline-block bg-primary text-white font-bold px-10 py-4 rounded-xl hover:bg-primary-hover transition-colors shadow-lg"
          >
            {t('無料で相談する', 'Get a Free Consultation')}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
