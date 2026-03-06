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
      subtitle: t('出生証明書 / 婚姻証明書 / CENOMAR', 'Birth Certificate / Marriage Certificate / CENOMAR + DFA Apostille'),
      price: t('¥40,000', 'US$289–359'),
      basicPrice: lang === 'en' ? 'US$199–259' : undefined,
      note: t('〜 (税・送料別)', '(Apostille + tax + DHL incl.)'),
      highlights: [
        t('役所申請手数料込み', 'DFA Apostille authentication included'),
        t('国際送料別途', 'DHL Express to USA / Canada / Australia'),
        ...(lang === 'en' ? ['Accepted by USCIS, NVC & US Embassy'] : []),
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
      subtitle: t('無犯罪証明書の取得サポート', 'NBI Clearance + DFA Apostille — required for K-1 & CR-1 visas'),
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
      subtitle: t('運転免許関連書類（外免切り替え用）', "Philippine driver's license records for immigration background checks"),
      price: t('¥100,000', 'US$699–899'),
      basicPrice: undefined,
      note: t('〜 (税・送料別)', '(tax & DHL incl.)'),
      highlights: [t('役所申請手数料込み', 'Govt. application fee included'), t('国際送料別途', 'DHL Express to USA / Canada / Australia')],
      details: {
        period: t('約4〜6週間', 'Approx. 4–6 weeks'),
        note: t('※税・国際送料は別途', '* Tax & DHL intl. shipping included'),
        docs: [
          t('LTO運転免許証関連書類', "LTO Driver's License Documents"),
          t('LTOトランザクション履歴', 'LTO Transaction History'),
        ],
      },
      featured: false,
    },
    {
      id: 'pack',
      icon: Gem,
      title: t('国際結婚パック', 'K-1 / CR-1 Visa Document Package'),
      subtitle: t('婚姻済証明書申請に必要な書類一式', 'All PSA & NBI docs Apostille-ready for USCIS / NVC submission'),
      price: t('¥85,000', 'US$799–1,049'),
      basicPrice: undefined,
      note: t('〜 (税・送料別)', '(Apostille + tax + DHL incl.)'),
      highlights: [
        t('日本語翻訳込み', 'Apostille Ready — submit directly to USCIS/NVC'),
        t('優先対応サポート', 'Priority support'),
        ...(lang === 'en' ? ['DHL Express shipped to your US address'] : []),
      ],
      details: {
        period: t('約4〜6週間', 'Approx. 4–6 weeks'),
        note: t('※税・国際送料は別途', '* Apostille, tax & DHL intl. shipping included'),
        docs: [
          t('出生証明書（+ アポスティーユ）', 'PSA Birth Certificate + DFA Apostille'),
          t('セノマー独身証明書（+ アポスティーユ）', 'CENOMAR + DFA Apostille'),
        ],
      },
      featured: true,
    },
    {
      id: 'visa',
      icon: Heart,
      title: t('配偶者ビザ', 'CR-1 / IR-1 Spouse Visa Support'),
      subtitle: t('在留資格「日本人の配偶者等」申請サポート', 'Document support for CR-1, IR-1 & K-1 fiancé visa applicants'),
      price: t('¥85,000', 'US$799–1,049'),
      basicPrice: undefined,
      note: t('〜 (税・送料別)', '(Apostille + tax + DHL incl.)'),
      highlights: [
        t('必要書類の準備サポート', 'Document preparation support'),
        t('申請書類チェック', 'Apostille Ready for USCIS / NVC submission'),
        ...(lang === 'en' ? ['Application document review included'] : []),
      ],
      details: {
        period: t('要相談', 'Contact for details'),
        note: t('※ケースにより異なります', '* Varies by case'),
        docs: [
          t('在留資格認定証明書交付申請書', 'PSA Birth Certificate + Apostille'),
          t('婚姻証明書・戸籍謄本など', 'CENOMAR + Apostille'),
          ...(lang === 'en' ? ['NBI Clearance + Apostille'] : []),
        ],
      },
      featured: false,
    },
    {
      id: 'naturalization',
      icon: Award,
      title: t('帰化申請', 'US Embassy Interview Prep'),
      subtitle: t('日本国籍取得の申請サポート', 'All Philippine documents ready before your US Embassy interview'),
      price: t('¥85,000', 'US$799–1,049'),
      basicPrice: undefined,
      note: t('〜 (税・送料別)', '(Apostille + tax + DHL incl.)'),
      highlights: [
        t('必要書類の準備サポート', 'Document preparation support'),
        t('継続的フォローアップ', 'Apostille Ready for US Embassy checklist'),
        ...(lang === 'en' ? ['Ongoing follow-up until interview'] : []),
      ],
      details: {
        period: t('要相談', 'Contact for details'),
        note: t('※ケースにより異なります', '* Varies by case'),
        docs: [
          t('帰化許可申請書類一式', 'PSA Birth Certificate + Apostille'),
          t('居住・納税関連書類など', 'CENOMAR + Apostille'),
          ...(lang === 'en' ? ['NBI Clearance + Apostille'] : []),
        ],
      },
      featured: false,
    },
  ];

  const faqs = lang === 'en' ? [
    {
      q: 'Are prices all-inclusive? What exactly is covered?',
      a: 'Yes — all displayed prices include Philippine government agency fees, DFA Apostille authentication (Premium plans), Philippine tax, and DHL Express international shipping to the USA, Canada, or Australia. No hidden fees.',
    },
    {
      q: 'Are the documents accepted by USCIS, NVC, and the US Embassy?',
      a: 'Yes. Our Premium plans include DFA Apostille authentication — the official Philippine government certification recognized under the Hague Convention. These documents are accepted by USCIS, NVC, the US Embassy, and immigration authorities in Canada and Australia.',
    },
    {
      q: 'What does "price may vary" mean?',
      a: 'If additional investigation or re-application is required in the Philippines (e.g., NBI MATCH FOUND, PSA NO RECORD FOUND), additional costs may apply. We will explain everything before finalizing your estimate — no surprises.',
    },
    {
      q: 'Can I order PSA, CENOMAR, and NBI together?',
      a: 'Yes. We recommend our K-1 / CR-1 Visa Document Package, which bundles the most commonly required documents for US visa petitions. Package discounts may apply — please consult us first.',
    },
    {
      q: 'How long does it take? Will it arrive before my USCIS deadline?',
      a: 'Typical delivery is 4–6 weeks from order to DHL delivery at your door. If you have a specific USCIS or NVC deadline, please let us know upfront and we will advise on feasibility. Priority handling may be available.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept bank transfer (wire transfer). Payment is required before we begin, after you confirm the estimate. Details will be provided at the time of inquiry.',
    },
    {
      q: 'Can I cancel my order?',
      a: 'Cancellation before we begin is free. Cancellation after the application process has been submitted to Philippine agencies may be difficult due to incurred local fees. Please contact us for details.',
    },
    {
      q: 'What if the documents cannot be obtained (NO RECORD FOUND)?',
      a: 'If PSA or NBI cannot locate records, we will guide you through alternative procedures such as late registration or annotation. We take full responsibility for any issues caused by our work.',
    },
  ] : [
    {
      q: '料金に消費税は含まれていますか？',
      a: '表示金額はすべて税抜きです。別途消費税（10%）がかかります。',
    },
    {
      q: '国際送料はいくらですか？',
      a: '送り先の国・地域によって異なります。お問い合わせ時にご確認ください。日本へのEMS発送の場合、概ね5,000〜6,000円程度が目安です。',
    },
    {
      q: '取得難易度による変動とはどういう意味ですか？',
      a: 'フィリピン現地での追加調査や再申請が必要な場合（MATCH FOUND、NO RECORD FOUND等）は、別途費用が発生することがあります。事前に詳しくご説明しますのでご安心ください。',
    },
    {
      q: '複数の書類をまとめて依頼できますか？',
      a: 'はい、まとめての対応が可能です。書類の組み合わせによってはセット割引が適用される場合もありますので、まずはご相談ください。',
    },
    {
      q: '支払い方法は何がありますか？',
      a: '銀行振込でのお支払いをお願いしています。お見積もり確認後、着手前にお振り込みいただく形となります。詳細はお問い合わせ時にご案内します。',
    },
    {
      q: '急ぎの場合は対応できますか？',
      a: '書類の種類によっては優先対応が可能な場合があります。ただし、PSA・NBI等フィリピン政府機関の処理期間は弊社でコントロールできないため、あらかじめご了承ください。まずはご相談ください。',
    },
    {
      q: 'キャンセルは可能ですか？',
      a: '着手前のキャンセルは可能です。フィリピン現地機関への申請手続き完了後のキャンセルは、現地手数料が発生している関係でご対応が難しい場合があります。詳しくはお問い合わせください。',
    },
    {
      q: '書類が取得できなかった場合はどうなりますか？',
      a: 'PSAの「NO RECORD FOUND」など、フィリピン政府機関の記録上の問題で取得できなかった場合は、代替手続きをご案内します。弊社の作業に起因する問題については責任をもって対応いたします。',
    },
  ];

  const scenarios = lang === 'en' ? [
    {
      icon: '💍',
      title: 'Filing a K-1 Fiancé Visa petition (USCIS)',
      desc: 'USCIS I-129F requires CENOMAR and PSA Birth Certificate with DFA Apostille. We handle everything from retrieval to DHL shipping directly to your US address.',
      recommend: 'K-1 / CR-1 Visa Document Package',
      planId: 'pack',
    },
    {
      icon: '🛂',
      title: 'Applying for a CR-1 / IR-1 Spouse Visa (NVC)',
      desc: 'NVC submission requires PSA Marriage Certificate, CENOMAR, and NBI Clearance — all with DFA Apostille. We prepare all documents to USCIS/NVC standards.',
      recommend: 'CR-1 / IR-1 Spouse Visa Support',
      planId: 'visa',
    },
    {
      icon: '🏛️',
      title: 'Preparing for a US Embassy interview in Manila',
      desc: 'The US Embassy checklist requires Apostille-authenticated PSA and NBI documents. We get everything ready before your interview date.',
      recommend: 'US Embassy Interview Prep',
      planId: 'naturalization',
    },
    {
      icon: '🇨🇦',
      title: 'Applying for a Canadian Spousal Sponsorship (IRCC)',
      desc: 'IRCC requires PSA Birth Certificate, CENOMAR, and NBI Clearance with DFA Apostille. We ship directly to your Canadian address via DHL.',
      recommend: 'K-1 / CR-1 Visa Document Package',
      planId: 'pack',
    },
    {
      icon: '🇦🇺',
      title: 'Applying for an Australian Partner Visa (subclass 309/100)',
      desc: 'The Department of Home Affairs requires Apostille-authenticated PSA and NBI documents. We handle retrieval and DHL shipping to Australia.',
      recommend: 'CR-1 / IR-1 Spouse Visa Support',
      planId: 'visa',
    },
    {
      icon: '📋',
      title: "I'm not sure which documents I need",
      desc: '"I don\'t know which documents I need" is perfectly fine. We will listen to your situation and recommend the best plan.',
      recommend: 'Start with a free consultation',
      planId: null,
    },
  ] : [
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

  const included = lang === 'en' ? [
    'Application procedures with PSA, NBI, DFA & LTO agencies',
    'DFA Apostille authentication (Premium plans)',
    'Document review and deficiency check',
    'Progress updates in English',
    'DHL Express international shipping to USA / Canada / Australia',
    'Philippine government agency fees',
  ] : [
    'フィリピン各機関への申請手続き代行',
    '書類の確認・不備チェック',
    '日本語での進捗報告',
    '書類受領後の日本への転送（国際送料別途）',
    'DFAアポスティーユ認証の代行（オプション）',
  ];

  const notIncluded = lang === 'en' ? [
    'Translation fees (contact us if needed)',
    'Additional investigation fees (MATCH FOUND resolution)',
    'Re-application fees for NO RECORD FOUND cases',
    'US immigration filing fees (USCIS / NVC / Embassy)',
  ] : [
    '消費税（別途10%）',
    '国際郵便送料',
    'フィリピン政府機関の申請手数料（一部プランで含む）',
    '日本語翻訳費用（必要な場合は別途ご相談）',
    '追加調査費用（MATCH FOUND等の異議申し立て）',
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
          <h1 className="text-2xl font-bold text-secondary">{t('料金プラン', `Pricing Plans [${SEO_YEAR_MONTH_EN}]: CENOMAR, PSA & NBI for US Visa`)}</h1>
          <p className="text-xs text-gray-500 mt-2">{t('※取得難易度により変動する場合があります。すべて税抜き表示。', '* Prices may vary by document complexity. All prices include tax & DHL shipping to the USA.')}</p>
        </div>

        {/* リード文 */}
        <div className="max-w-2xl mx-auto text-center mb-6">
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {lang === 'en' ? (
              <>
                Getting Philippine documents from the US, Canada, or Australia is complicated — PSA, NBI, and DFA each have different requirements, and mistakes can delay your visa by months.{' '}
                <strong>We handle everything from retrieval to Apostille to DHL delivery at your door.</strong>
              </>
            ) : (
              <>
                フィリピン書類の取得は、言語の壁・手続きの煩雑さ・時間のロスが大きな負担になります。弊社は現地セブ拠点を活かし、
                <strong>すべて日本語でやり取りするだけ</strong>
                で書類を取得できるサービスを提供しています。
              </>
            )}
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
                {(lang === 'en' ? [
                  [
                    'Effort',
                    'Must navigate PSA, NBI & DFA websites, fill forms, and coordinate in Filipino/English',
                    'We handle everything — just send us your details',
                  ],
                  [
                    'USCIS / NVC compliance',
                    'Easy to get the wrong format — rejected documents delay your visa',
                    'We ensure Apostille-authenticated docs meet USCIS/NVC standards',
                  ],
                  [
                    'MATCH FOUND / errors',
                    'Must resolve NBI MATCH FOUND or PSA discrepancies yourself from abroad',
                    'Full resolution support included',
                  ],
                  [
                    'Remote from USA/Canada/AU',
                    'Philippine agencies require in-person visits or local representatives',
                    'Fully remote — we ship DHL Express to your door',
                  ],
                  [
                    'DFA Apostille',
                    'PSA documents alone are typically not accepted — Apostille requires a separate in-Philippines procedure. Even budget agencies charge it separately',
                    'We assess whether Apostille is needed and handle it in one package — no surprise extra costs',
                  ],
                  [
                    'Cost',
                    'Agency fees + int\'l postage only (cheaper) — but re-procurement adds hidden costs',
                    'Agency fee applies — but reduces resubmission and reshipping risk',
                  ],
                ] : [
                  [
                    '手続きの手間',
                    '英語対応・申請書記入など自分でやる必要あり',
                    '日本語でのやり取りのみ',
                  ],
                  [
                    '言語の壁',
                    'フィリピン機関は英語・タガログ語のみ',
                    '現地スタッフが対応',
                  ],
                  [
                    'DFAアポスティーユ',
                    'PSA書類だけでは受け付けてもらえないことが多い。アポスティーユは別途フィリピン現地での手続きが必要で、他社の格安代行でも別料金になるケースがほとんど',
                    '必要かどうかを事前に確認したうえで、取得まで一括対応。追加費用の発生を防ぐ',
                  ],
                  [
                    'トラブル対応',
                    '自分で解決が必要（MATCH FOUND等）',
                    'サポートあり',
                  ],
                  [
                    '日本にいながら取得',
                    '大使館窓口への来訪や国際郵便手配が必要',
                    '完全遠隔で対応可能',
                  ],
                  [
                    '費用',
                    '手数料＋国際郵便のみ（安い）ただし再取得が発生すると追加コスト',
                    '代行手数料あり。再提出・再送料のリスクを減らせる',
                  ],
                ]).map(([item, self, agency], i) => (
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

          {/* 比較表直下CTA */}
          <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-5 text-center">
            <p className="text-sm font-bold text-secondary mb-1">
              {t('どの方法が自分に合うか分からない方へ', 'Not sure which option is right for you?')}
            </p>
            <p className="text-xs text-gray-600 mb-4">
              {t('1分で確認できます。用途に応じて必要書類を案内します。', "Check in 1 minute. We'll guide you on the exact documents needed for your situation.")}
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary text-white text-sm font-bold py-2.5 px-6 rounded-lg hover:bg-primary-hover transition-colors"
            >
              {t('まずは無料相談', 'Start with a Free Consultation')}
            </a>
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
