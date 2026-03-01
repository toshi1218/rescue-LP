import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, FileText, ArrowRight, AlertTriangle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function KokusaiKekkonGuidePage() {
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t('フィリピン国際結婚ガイド【2026年最新版】手続き・必要書類・費用を徹底解説', 'International Marriage with a Filipino: Complete Guide [2026]'),
    t('フィリピン人との国際結婚手続きをステップ別に解説。日本先行・フィリピン先行の2パターン、必要書類（CENOMAR・PSA等）・費用・期間まで網羅。', 'Step-by-step guide to international marriage procedures. Covers Japan-first and Philippines-first processes, required documents (CENOMAR, PSA), costs, and timelines.')
  );

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    {
      phase: t('フェーズ①', 'Phase ①'),
      title: t('日本先行婚姻（日本で先に婚姻届を出す場合）', 'Country-First Marriage (Registering in Your Country of Residence First)'),
      steps: [
        { step: 'STEP 1', title: t('フィリピン側の書類を準備', 'Prepare Philippine documents'), desc: t('CENOMAR（独身証明書）・PSA出生証明書・有効なパスポートが必要です。', 'CENOMAR, PSA Birth Certificate, and a valid passport are required from the Filipino side.') },
        { step: 'STEP 2', title: t('日本の市区町村役場に婚姻届を提出', 'Submit marriage registration at your local civil registry'), desc: t('日本人側の戸籍謄本とフィリピン人側の書類（英文＋日本語訳）を用意します。', 'Gather your country\'s required identity/civil status documents along with the Philippine documents. A certified translation may be required depending on the country.') },
        { step: 'STEP 3', title: t('戸籍謄本を取得', 'Obtain proof of marriage registration'), desc: t('婚姻が受理されたら、日本人側の戸籍謄本に配偶者情報が記載されます。', 'Once the marriage is accepted, obtain official proof of the registration (e.g., marriage certificate or family register update) from the local registry.') },
        { step: 'STEP 4', title: t('フィリピン大使館で婚姻の報告的届出（Report of Marriage）', 'Report of Marriage at the nearest Philippine Embassy or Consulate'), desc: t('東京のフィリピン大使館に婚姻を報告します。必要書類をまとめて提出。', 'Report the marriage to the nearest Philippine Embassy or Consulate. Submit all required documents together.') },
        { step: 'STEP 5', title: t('配偶者ビザの申請（在留資格の変更）', 'Apply for spouse / partner visa'), desc: t('配偶者ビザ（日本人の配偶者等）を入管に申請します。PSA書類・NBI等が必要です。', 'Apply for a spouse or partner visa with your country\'s immigration office. PSA documents and NBI Clearance are commonly required.') },
      ],
    },
    {
      phase: t('フェーズ②', 'Phase ②'),
      title: t('フィリピン先行婚姻（フィリピンで先に婚姻届を出す場合）', 'Philippines-First Marriage (Registering in the Philippines first)'),
      steps: [
        { step: 'STEP 1', title: t('婚姻要件具備証明書（LCCM）の取得', 'Obtain Certificate of Legal Capacity to Contract Marriage (LCCM)'), desc: t('日本人側が在フィリピン日本大使館で「独身であり婚姻能力がある」ことを証明する書類を取得します。', 'The non-Filipino spouse obtains an LCCM (Certificate of Legal Capacity to Contract Marriage) from their country\'s embassy in the Philippines, certifying they are single and eligible to marry.') },
        { step: 'STEP 2', title: t('フィリピン市役所で婚姻申請', 'Marriage application at Philippine City Hall'), desc: t('フィリピン人側の書類（CENOMAR・PSA出生証明書等）と日本人側のLCCMを提出します。', 'Submit the Filipino spouse\'s documents (CENOMAR, PSA Birth Certificate, etc.) and the non-Filipino spouse\'s LCCM at the Philippine Local Civil Registry.') },
        { step: 'STEP 3', title: t('婚姻証明書（PSA Marriage Certificate）の取得', 'Obtain PSA Marriage Certificate'), desc: t('フィリピン市役所での婚姻後、PSAが発行する婚姻証明書を取得します（約3〜6ヶ月後）。', 'After marriage at the Philippine City Hall, obtain the PSA-issued marriage certificate (approximately 3–6 months later).') },
        { step: 'STEP 4', title: t('日本の市区町村役場に婚姻届を提出', 'Submit marriage registration in your country of residence'), desc: t('PSA婚姻証明書の日本語訳とともに、外国方式による婚姻として報告的届出を行います。', 'Report the foreign marriage at your local civil registry using the PSA Marriage Certificate. A certified translation may be required.') },
        { step: 'STEP 5', title: t('配偶者ビザの申請', 'Apply for spouse / partner visa'), desc: t('日本での在留資格（配偶者ビザ）を申請します。', 'Apply for a spouse or partner visa with your country\'s immigration office using the PSA Marriage Certificate and other required documents.') },
      ],
    },
  ];

  const requiredDocs = [
    { doc: 'CENOMAR', who: t('フィリピン人側', 'Philippine spouse'), note: t('PSA発行・発行から6ヶ月以内が目安', 'PSA-issued, within 6 months of issue') },
    { doc: t('PSA出生証明書', 'PSA Birth Certificate'), who: t('フィリピン人側', 'Philippine spouse'), note: t('PSA発行・最新のもの', 'PSA-issued, most recent') },
    { doc: t('有効なパスポート（コピー）', 'Valid Passport (copy)'), who: t('フィリピン人側', 'Philippine spouse'), note: t('全ページのコピーが必要な場合あり', 'All pages may be required') },
    { doc: t('戸籍謄本', 'Civil Status Documents (non-Filipino spouse)'), who: t('日本人側', 'Non-Filipino spouse'), note: t('市区町村役場で取得', 'Varies by country — check with your local registry') },
    { doc: t('婚姻届', 'Marriage Registration Form'), who: t('両者', 'Both parties'), note: t('役所所定の様式', 'Use the official form of your local registry office') },
    { doc: t('日本語翻訳', 'Certified Translation (if required)'), who: t('フィリピン人書類全般', 'Philippine documents'), note: t('翻訳者の署名が必要な場合あり', 'Required in non-English-speaking countries — confirm with the registry') },
    { doc: 'NBI Clearance', who: t('フィリピン人側（ビザ申請時）', 'Filipino spouse (at visa application)'), note: t('配偶者ビザ申請で求められる場合あり', 'Commonly required for spouse/partner visa applications') },
  ];

  const faqs = [
    {
      q: t('フィリピン人と国際結婚するとき、最初に何をすればよいですか？', 'What should I do first when marrying a Filipino/Filipina?'),
      a: t(
        'まずCENOMAR（独身証明書）とPSA出生証明書を取得してください。これらは取得に時間がかかるため、結婚の準備段階で早めに申請することをおすすめします。その後、日本先行かフィリピン先行かを決めて手続きを進めます。',
        'Start by obtaining CENOMAR and PSA Birth Certificate from the Filipino side — these take time, so apply early. At the same time, decide whether to register the marriage in the Philippines first or in your country of residence first. Both paths are valid; the right choice depends on where you both live and your timeline.'
      ),
    },
    {
      q: t('日本とフィリピン、どちらで先に婚姻手続きをするべきですか？', 'Should I register the marriage in the Philippines or my country of residence first?'),
      a: t(
        '一般的にはフィリピン人が日本に住んでいる場合は「日本先行」、フィリピンに住んでいる場合や結婚式をフィリピンで行う場合は「フィリピン先行」が多いです。どちらにもメリット・デメリットがあるため、状況に応じて判断しましょう。',
        'If the Filipino spouse already lives in your country, registering there first ("country-first") is generally smoother. If they are still in the Philippines, or if you plan to have the ceremony there, "Philippines-first" is a common choice. Both paths eventually require registration in both countries — the order affects the timeline for visa applications.'
      ),
    },
    {
      q: t('国際結婚にかかる費用はどれくらいですか？', 'How much does international marriage cost?'),
      a: t(
        'フィリピン書類の取得代行費用（CENOMARなど）で約4〜8万円が目安です。配偶者ビザ申請費用は別途かかります（行政書士への依頼費用を含めると15〜30万円程度）。詳細はご相談ください。',
        'Our proxy fee for Philippine documents (CENOMAR, PSA Birth Certificate, NBI Clearance, etc.) is approximately USD $300–$600 depending on the combination. Spouse or partner visa application fees vary by country. Please contact us for a free estimate.'
      ),
    },
    {
      q: t('フィリピン人側が離婚経験者の場合はどうすればよいですか？', 'What if the Filipino/Filipina has been divorced?'),
      a: t(
        'フィリピンには離婚制度がないため、法的に婚姻を解消するには「婚姻の取り消し（Annulment）」の裁判手続きが必要です。アニュルメントが認められた場合は、その判決書を取得した上でCENOMAR申請を行います。複雑なケースになるため、まずはご相談ください。',
        'The Philippines does not have a divorce system, so legally dissolving a marriage requires an Annulment court procedure. If annulment is granted, obtain the judgment document and then apply for CENOMAR. This is a complex case, so please consult us first.'
      ),
    },
    {
      q: t('CENOMARの取得にどのくらい時間がかかりますか？', 'How long does it take to obtain CENOMAR?'),
      a: t(
        '代行サービス利用の場合、CENOMAR取得（2〜3週間）＋DFAアポスティーユ（約2週間）＋国際配送（3〜5営業日）を合わせ、約4〜6週間が目安です。書類の準備を始めてから手続きが完了するまでの全体スケジュールを考えると、婚姻届提出の2〜3ヶ月前にはCENOMARの申請を始めることをおすすめします。',
        'When using our agency service, CENOMAR acquisition (2–3 weeks) + DFA Apostille (approx. 2 weeks) + international shipping (3–5 business days) totals approximately 4–6 weeks. Considering the overall schedule from starting document preparation to completing procedures, we recommend starting the CENOMAR application 2–3 months before the planned marriage registration.'
      ),
    },
    {
      q: t('フィリピン人側がすでに日本に住んでいる場合、どちら先行の手続きがおすすめですか？', 'If the Filipino/Filipina already lives in my country, which should come first?'),
      a: t(
        'フィリピン人配偶者がすでに日本に在留している場合は「日本先行婚姻」がスムーズです。在留資格の状況に応じて変更申請か認定申請かを選ぶ必要があります。在留資格を確認した上で行政書士に相談することをおすすめします。',
        'If the Filipino spouse is already living in your country, registering there first is generally the smoother path — it avoids the need to apply for a visa just to come and get married. The exact process depends on your country\'s marriage registration requirements. Contact us for guidance on the Philippine documents you\'ll need regardless of which path you choose.'
      ),
    },
    {
      q: t('子どもが生まれた後に婚姻手続きをする場合、何か変わりますか？', 'Does anything change if we marry after having a child?'),
      a: t(
        '子どもが先に生まれている場合、認知手続きや国籍確認など追加の手続きが必要になる場合があります。PSA出生証明書（子ども分）やPSA婚姻証明書が求められることがあります。ケースごとに状況が異なるため、早めにご相談ください。',
        'If a child is born before marriage, additional procedures such as acknowledgment and nationality confirmation may be required. PSA Birth Certificate (for the child) and PSA Marriage Certificate may be needed. Each case is different, so please contact us early.'
      ),
    },
    {
      q: t('国際結婚後、フィリピン人配偶者はフィリピン国籍を失いますか？', 'Will the Filipino/Filipina spouse lose their Philippine nationality after marriage?'),
      a: t(
        'いいえ、フィリピン人女性が日本人男性と結婚しても、フィリピン国籍は自動的に失われません。ただし、本人が自発的に外国籍を取得・申請した場合には状況が変わります。フィリピン国籍法に関しては、フィリピン大使館にご確認ください。',
        'No — marrying a foreign national does not automatically cause a Filipino/Filipina to lose Philippine citizenship. However, if they voluntarily acquire a foreign nationality, Philippine citizenship may be affected. Please consult the nearest Philippine Embassy for guidance on Philippine nationality law.'
      ),
    },
    {
      q: t('国際結婚の手続き中に子どもが生まれた場合、どうすればよいですか？', 'What should we do if a child is born during the marriage registration process?'),
      a: t(
        '婚姻手続き中に子どもが生まれた場合、まず子どもの出生届を日本の市区町村役場に提出します。国籍の取得（日本国籍またはフィリピン国籍）についても対応が必要です。また、フィリピン大使館への出生報告（Report of Birth）も必要になる場合があります。婚姻手続きと並行して進める必要があるため、早めにご相談ください。',
        'If a child is born before or during the marriage process, additional procedures around birth registration, acknowledgment, and nationality may be required in both your country and the Philippines. A Report of Birth to the nearest Philippine Embassy is typically needed. Please contact us early — we can advise on which Philippine documents you\'ll need.'
      ),
    },
    {
      q: t('フィリピン人側がOFW（海外就労者）の場合、CENOMAR取得は通常と異なりますか？', 'If the Filipino/Filipina is an OFW (Overseas Filipino Worker), is CENOMAR retrieval different?'),
      a: t(
        'OFW（Overseas Filipino Workers）の方もCENOMARの取得方法は基本的に同じです。ただし、住所がフィリピン国外の場合、PSAオンラインシステムへの登録や書類の受け取り方法に違いが生じることがあります。代行サービスを利用すれば、OFWの方でも日本語でスムーズに対応できます。',
        'The method for obtaining CENOMAR is basically the same for OFWs. However, if the address is outside the Philippines, there may be differences in PSA online system registration and document receipt methods. Using our agency service, OFWs can also proceed smoothly in English.'
      ),
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: 'International Marriage Guide', item: 'https://ph-document.com/kokusai-kekkon-guide/' },
        ],
      },
      {
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://ph-document.com/kokusai-kekkon-guide/',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2'],
          },
        },
        headline: 'Complete Guide to International Marriage with a Filipino/Filipina | Procedures, Documents & Costs [2026]',
        description: 'Step-by-step guide to international marriage with a Filipino/Filipina. Covers Japan-first and Philippines-first patterns, required documents (CENOMAR, PSA, etc.), costs, and timelines.',
        image: 'https://ph-document.com/og-image.png',
        url: 'https://ph-document.com/kokusai-kekkon-guide/',
        inLanguage: lang,
        datePublished: '2025-11-01',
        dateModified: '2026-02-22',
        author: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Philippine Document Procurement Center',
          url: 'https://ph-document.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ph-document.com/favicon.svg',
          },
        },
        citation: [
          'https://psa.gov.ph',
          'https://www.dfa.gov.ph',
          'https://www.mofa.go.jp',
        ],
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

  const tocItems = [
    t('まずやるべきこと（書類の取得）', 'First Steps (Document Retrieval)'),
    t('2つの手続きパターン', 'Two Procedure Patterns'),
    t('必要書類チェックリスト', 'Required Document Checklist'),
    t('費用の目安', 'Cost Estimate'),
    t('注意点・よくある失敗', 'Important Notes & Common Mistakes'),
    t('よくある質問（FAQ）', 'FAQ'),
    t('お問い合わせ', 'Contact'),
  ];

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6" aria-label={t('パンくずリスト', 'Breadcrumb')}>
          <Link to="/" className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('フィリピン国際結婚ガイド', 'International Marriage Guide')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {t(
            'フィリピン人との国際結婚 完全ガイド',
            'Complete Guide to International Marriage with a Filipino/Filipina'
          )}<br className="hidden md:block" />
          {t('手続きの流れ・必要書類・費用【2026年最新】', 'Procedures, Documents & Costs [2026]')}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t('最終更新：2026年2月22日 ｜ 株式会社IGRS', 'Last updated: February 22, 2026 | IGRS Inc.')}</p>

        {/* リード文 */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 text-sm text-blue-900 leading-relaxed">
          {t(
            'フィリピン人との国際結婚では、書類の取得に時間がかかり「何から始めればいいのかわからない」という方が多くいます。このガイドでは、書類準備から婚姻届提出・配偶者ビザ申請まで、すべての流れをステップ別にわかりやすく解説します。',
            'Many people are unsure where to start when it comes to international marriage with a Filipino/Filipina, as document retrieval takes time. This guide explains the entire process step by step, from document preparation to marriage registration and spouse visa application.'
          )}
        </div>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('目次', 'Table of Contents')}</p>
          <ol className="space-y-1 text-sm text-secondary">
            {tocItems.map((item, i) => (
              <li key={i}><a href={`#kk-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="kk-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">1. {t('まずやるべきこと（書類の取得）', 'First Steps (Document Retrieval)')}</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            {t(
              '国際結婚の準備で最初にやるべきことは、',
              'The most important first step in preparing for international marriage is '
            )}
            <strong>{t('フィリピン側の書類を早めに申請すること', 'applying for Philippine documents early')}</strong>
            {t('です。特にCENOMAR（独身証明書）とPSA出生証明書は取得に時間がかかります。', '. In particular, CENOMAR and PSA Birth Certificate take time to obtain.')}
          </p>
          <div className="grid gap-3">
            {[
              { icon: '📄', title: t('CENOMAR（独身証明書）を申請', 'Apply for CENOMAR'), desc: t('取得まで4〜6週間（アポスティーユ・配送含む）。婚姻届提出の2〜3ヶ月前には申請開始を。', '4–6 weeks to obtain (incl. Apostille & shipping). Start the application 2–3 months before the planned marriage registration.'), link: t('/ja/cenomar', '/cenomar') },
              { icon: '📋', title: t('PSA出生証明書を申請', 'Apply for PSA Birth Certificate'), desc: t('最新のPSA発行のものが必要。古い書類は受け付けない場合あり。', 'The latest PSA-issued document is required. Old documents may not be accepted.'), link: t('/ja/psa-shussei-shomeisho', '/psa-birth-certificate') },
              { icon: '🛡️', title: t('（必要な場合）NBI Clearanceを申請', '(If needed) Apply for NBI Clearance'), desc: t('配偶者ビザ申請で求められることがある。HIT案件は早めに対応。', 'May be required for spouse visa application. Address HIT cases early.'), link: t('/ja/nbi-clearance', '/nbi-clearance') },
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
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">2. {t('2つの手続きパターン', 'Two Procedure Patterns')}</h2>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            {t(
              '国際結婚の手続きには「日本先行」と「フィリピン先行」の2パターンがあります。状況に応じてどちらかを選びます。',
              'There are two patterns for international marriage procedures: "Japan-first" and "Philippines-first." Choose based on your situation.'
            )}
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
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">3. {t('必要書類チェックリスト', 'Required Document Checklist')}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('書類', 'Document')}</th>
                  <th className="px-4 py-3 text-left font-semibold">{t('取得者', 'Who Obtains')}</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">{t('備考', 'Notes')}</th>
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
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">4. {t('費用の目安', 'Cost Estimate')}</h2>
          <div className="grid gap-3">
            {[
              { item: t('CENOMAR取得代行', 'CENOMAR Retrieval'), cost: t('約40,000円〜', 'From ¥40,000'), note: t('PSA手数料・国際郵便込み', 'PSA fee & int\'l postage included') },
              { item: t('PSA出生証明書取得代行', 'PSA Birth Certificate Retrieval'), cost: t('約40,000円〜', 'From ¥40,000'), note: t('PSA手数料・国際郵便込み', 'PSA fee & int\'l postage included') },
              { item: t('NBI Clearance取得代行', 'NBI Clearance Retrieval'), cost: t('約45,000円〜', 'From ¥45,000'), note: t('HIT案件は追加費用あり', 'Additional fee for HIT cases') },
              { item: t('結婚手続きパック（CENOMAR・PSA・翻訳込み）', 'Marriage Package (CENOMAR, PSA, translation)'), cost: t('約85,000円〜', 'From ¥85,000'), note: t('セットで割安に対応可能', 'Set discount available') },
              { item: t('配偶者ビザ申請（行政書士依頼）', 'Spouse Visa Application (via scrivener)'), cost: t('約15〜30万円', 'Approx. ¥150,000–¥300,000'), note: t('当センター対象外・参考値', 'Not in our scope – reference only') },
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

        {/* Section: 状況別おすすめルート */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">{t('状況別おすすめルート', 'Recommended Route by Situation')}</h2>
          <p className="text-sm text-gray-700 mb-4">{t('ご自身の状況に合わせてどちらのルートが向いているか確認してみましょう。', 'Check which route suits your situation.')}</p>
          <div className="grid gap-4">
            {[
              {
                situation: t('フィリピン人がすでに日本に在留している', 'The Filipino/Filipina is already living in Japan'),
                recommend: t('日本先行婚姻', 'Japan-First Marriage'),
                reason: t('日本での婚姻届が比較的スムーズです。婚姻後は在留資格変更申請で配偶者ビザに切り替えます。CENOMARとPSA出生証明書を準備しておきましょう。', 'Marriage registration in Japan is relatively smooth. After marriage, switch to a spouse visa via a residence status change application. Prepare CENOMAR and PSA Birth Certificate in advance.'),
                color: 'border-blue-200 bg-blue-50',
              },
              {
                situation: t('フィリピン人がフィリピンに在住で、フィリピンで結婚式をしたい', 'The Filipino/Filipina lives in the Philippines and wants to have a wedding there'),
                recommend: t('フィリピン先行婚姻', 'Philippines-First Marriage'),
                reason: t('フィリピンで正式な婚姻手続きを行います。日本人側はLCCM（婚姻要件具備証明書）を在フィリピン日本大使館で取得してから手続きを進めます。婚姻後はPSA婚姻証明書が発行されてから日本の役場で報告的届出を行います。', 'Conduct the formal marriage procedure in the Philippines. The Japanese spouse obtains LCCM at the Japanese Embassy in the Philippines before proceeding. After marriage, a report is filed in Japan once the PSA Marriage Certificate is issued.'),
                color: 'border-green-200 bg-green-50',
              },
              {
                situation: t('急いで在留資格を取得したい', 'Need to obtain residence status urgently'),
                recommend: t('日本先行婚姻（書類を早めに準備）', 'Japan-First Marriage (prepare documents early)'),
                reason: t('フィリピン先行婚姻はPSA婚姻証明書の発行に3〜6ヶ月かかるため、急ぐ場合は日本先行が有利です。ただし、CENOMARやPSA出生証明書の取得も早めに開始することが重要です。', 'Philippines-first marriage takes 3–6 months for the PSA Marriage Certificate to be issued, so Japan-first is advantageous if you are in a hurry. However, it is important to start obtaining CENOMAR and PSA Birth Certificate early.'),
                color: 'border-amber-200 bg-amber-50',
              },
              {
                situation: t('フィリピン人が離婚経験（アニュルメント）がある', 'The Filipino/Filipina has been through annulment'),
                recommend: t('アニュルメント判決書の取得が最優先', 'Obtaining the annulment judgment is the top priority'),
                reason: t('フィリピンには離婚制度がないため、前の婚姻が法的に解消されていることを証明するアニュルメント（婚姻無効）判決書が必要です。これがなければ再婚できません。判決書取得後にCENOMAR・PSA手続きを進めます。', 'The Philippines has no divorce system, so an annulment judgment proving that the previous marriage is legally dissolved is required. Without this, remarriage is not possible. Proceed with CENOMAR and PSA procedures after obtaining the judgment.'),
                color: 'border-red-100 bg-red-50',
              },
            ].map((item, i) => (
              <div key={i} className={`border rounded-xl p-5 ${item.color}`}>
                <p className="text-xs font-bold text-gray-500 mb-1">{t('このような方に', 'For those who')}</p>
                <p className="text-sm font-bold text-secondary mb-2">{item.situation}</p>
                <p className="text-xs font-bold text-primary mb-1">{t('おすすめルート：', 'Recommended route: ')}{item.recommend}</p>
                <p className="text-xs text-gray-700 leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: 全体タイムライン */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">{t('全体タイムラインの目安（日本先行婚姻の場合）', 'Overall Timeline (Japan-First Marriage)')}</h2>
          <p className="text-sm text-gray-700 mb-4">{t('書類取得開始から配偶者ビザ取得までの一般的なスケジュールです。', 'A general schedule from starting document retrieval to obtaining a spouse visa.')}</p>
          <div className="space-y-3">
            {[
              { period: t('今すぐ〜', 'Now →'), action: t('CENOMAR・PSA出生証明書の取得を代行依頼', 'Order CENOMAR & PSA Birth Certificate retrieval'), note: t('この段階が一番重要。早めに動くほど全体が短縮される', 'This stage is the most important. The earlier you act, the shorter the overall timeline.') },
              { period: t('1〜2ヶ月後', '1–2 months later'), action: t('フィリピン書類が日本に到着', 'Philippine documents arrive in Japan'), note: t('NBI Clearanceも必要な場合は同時並行で申請', 'If NBI Clearance is also needed, apply simultaneously.') },
              { period: t('2ヶ月後〜', '2+ months later'), action: t('日本の市区町村役場に婚姻届を提出', 'Submit marriage registration at Japanese municipal office'), note: t('フィリピン書類の日本語翻訳を添付', 'Attach Japanese translation of Philippine documents.') },
              { period: t('婚姻届受理後〜', 'After marriage registration →'), action: t('フィリピン大使館でReport of Marriageを提出', 'Submit Report of Marriage at the Philippine Embassy'), note: t('東京のフィリピン大使館で報告的届出', 'File at the Philippine Embassy in Tokyo.') },
              { period: t('書類が揃ったら', 'Once documents are ready'), action: t('入管に配偶者ビザ申請', 'Apply for spouse visa at immigration'), note: t('認定申請（海外）または変更申請（日本在留）', 'Certification application (overseas) or change application (living in Japan).') },
              { period: t('申請から1〜3ヶ月後', '1–3 months after application'), action: t('配偶者ビザ取得', 'Spouse visa granted'), note: t('不許可の場合は追加書類提出または再申請', 'If denied, submit additional documents or reapply.') },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-lg px-4 py-3 shadow-card">
                <div className="w-28 flex-shrink-0">
                  <span className="text-xs font-bold text-primary">{item.period}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-secondary">{item.action}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">{t('※ タイムラインは書類取得の状況・入管の審査状況によって変動します。HIT案件・NO RECORD FOUND等のトラブルがあると延長します。', '* The timeline may vary depending on document retrieval status and immigration review. HIT cases or NO RECORD FOUND issues can extend the timeline.')}</p>
        </section>

        {/* Section 5: 注意点 */}
        <section id="kk-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">5. {t('注意点・よくある失敗', 'Important Notes & Common Mistakes')}</h2>
          <div className="space-y-4">
            {[
              { title: t('CENOMARを取得するタイミングを誤る', 'Obtaining CENOMAR at the wrong time'), body: t('有効期限は約6ヶ月のため、取得が早すぎると使用前に期限切れになることがあります。婚姻届提出予定日から逆算して申請しましょう。', 'The validity period is approximately 6 months, so obtaining it too early may result in expiration before use. Calculate backwards from the planned marriage registration date.') },
              { title: t('書類の名前のスペルが一致しない', 'Name spelling inconsistencies across documents'), body: t('パスポート・CENOMAR・PSA出生証明書で名前のスペルが異なると受理されません。事前に全書類の整合性を確認することが重要です。', 'If the name spelling differs between the passport, CENOMAR, and PSA Birth Certificate, the documents will not be accepted. It is important to verify consistency across all documents in advance.') },
              { title: t('フィリピン先行婚姻でPSA婚姻証明書の取得に時間がかかる', 'PSA Marriage Certificate takes time in Philippines-first marriage'), body: t('フィリピンの市役所での婚姻後、PSAに婚姻記録が登録されるまで3〜6ヶ月かかることがあります。日本での報告的届出はPSA書類が届いてから行います。', 'After marriage at the Philippine City Hall, it can take 3–6 months for the marriage record to be registered with PSA. The report in Japan should be filed after the PSA documents arrive.') },
              { title: t('離婚歴・再婚のケースで追加書類が必要', 'Additional documents needed for divorce/remarriage cases'), body: t('フィリピン人側に離婚歴がある場合、アニュルメント判決書が必要です。日本人側に離婚歴がある場合も戸籍謄本で確認が必要です。', 'If the Filipino/Filipina has a history of annulment, the annulment judgment is required. If the Japanese spouse has a divorce history, confirmation via family register is also necessary.') },
            ].map((t_item, i) => (
              <div key={i} className="flex gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-amber-800 mb-1">{t_item.title}</p>
                  <p className="text-xs text-amber-700">{t_item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <p className="text-xs text-primary font-bold mb-2">{t('書類の準備でお困りの方へ', 'For those struggling with document preparation')}</p>
          <h2 className="text-xl font-bold mb-3">{t('書類取得はまるごとお任せください', 'Leave all document retrieval to us')}</h2>
          <p className="text-sm text-gray-300 mb-5">
            {t(
              'CENOMAR・PSA・NBI取得の代行から翻訳サポートまで、\n日本語だけで完結します。まずは無料相談からどうぞ。',
              'From CENOMAR, PSA, and NBI retrieval to translation support,\neverything is handled in English. Start with a free consultation.'
            )}
          </p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            {t('無料相談する', 'Free Consultation')}
          </a>
        </div>

        {/* FAQ */}
        <section id="kk-6" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">6. {t('よくある質問（FAQ）', 'Frequently Asked Questions (FAQ)')}</h2>
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
          <h2 className="text-lg font-bold text-secondary mb-4">{t('個別書類のガイド', 'Individual Document Guides')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { to: t('/ja/cenomar', '/cenomar'), title: t('CENOMARガイド', 'CENOMAR Guide'), desc: t('独身証明書の取得方法・費用・期間', 'How to obtain CENOMAR, costs, and timeline') },
              { to: t('/ja/psa-shussei-shomeisho', '/psa-birth-certificate'), title: t('PSA出生証明書ガイド', 'PSA Birth Certificate Guide'), desc: t('出生証明書の取得方法と注意点', 'How to obtain the birth certificate and key points') },
              { to: t('/ja/nbi-clearance', '/nbi-clearance'), title: t('NBI無犯罪証明書ガイド', 'NBI Clearance Guide'), desc: t('NBI HIT問題の解説と取得手順', 'Explanation of NBI HIT issues and retrieval steps') },
              { to: t('/ja/haigusha-visa', '/spouse-visa-documents'), title: t('配偶者ビザ書類ガイド', 'Spouse Visa Document Guide'), desc: t('配偶者ビザに必要なフィリピン書類一覧', 'List of Philippine documents required for spouse visa') },
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
            <h2 className="text-xl font-bold text-secondary mb-2">{t('お問い合わせ', 'Contact Us')}</h2>
            <p className="text-sm text-gray-500 mb-6">{t('書類の準備からビザ申請のご相談まで、まずはお気軽にどうぞ。', 'From document preparation to visa application consultations, feel free to reach out.')}</p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【国際結婚ガイドからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/kokusai-kekkon-guide/" />
              <div>
                <label htmlFor="kk-name" className="block text-xs text-gray-600 mb-1">{t('お名前', 'Name')}</label>
                <input id="kk-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('山田 太郎', 'John Smith')} />
              </div>
              <div>
                <label htmlFor="kk-email" className="block text-xs text-gray-600 mb-1">{t('メールアドレス', 'Email Address')}</label>
                <input id="kk-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="kk-message" className="block text-xs text-gray-600 mb-1">{t('ご相談内容', 'Message')}</label>
                <textarea id="kk-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('国際結婚の書類準備、手続きの流れなどについてお気軽にご相談ください。', 'Feel free to ask about document preparation and procedures for international marriage.')} />
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3">
                <Send className="w-5 h-5" />{t('送信する', 'Send')}
              </button>
            </form>
            <a href="mailto:igrs20200601@gmail.com" className="mt-3 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />{t('メールで直接送る: igrs20200601@gmail.com', 'Send directly by email: igrs20200601@gmail.com')}
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
