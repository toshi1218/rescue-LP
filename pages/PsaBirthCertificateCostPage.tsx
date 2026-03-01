import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, Info, FileText, ArrowRight, DollarSign } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA, SEO_YEAR_MONTH_EN, SEO_LAST_UPDATED_JA, SEO_LAST_UPDATED_EN, SEO_DATE_ISO } from '../lib/seoDate';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function PsaBirthCertificateCostPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t(`PSA出生証明書の費用・料金【${SEO_YEAR_MONTH_JA}最新】自分で取得 vs 代行の比較｜フィリピン書類センター`, `PSA Birth Certificate Cost [${SEO_YEAR_MONTH_EN}]: DIY vs. Retrieval Service`),
    t('PSA出生証明書の公式料金・自分で取得する場合の費用・代行利用時の総費用を解説。DFAアポスティーユ込みの料金も紹介。', 'Compare the cost of getting a PSA Birth Certificate yourself vs. using a retrieval service. Includes official PSA fees and DFA Apostille costs.')
  );

  const faqs = [
    {
      q: t('PSA出生証明書の公式取得費用はいくらですか？', 'What is the official fee for a PSA birth certificate?'),
      a: t(
        'PSA（フィリピン統計局）への直接申請費用は1通あたり約PHP 365（約USD 6.50）です。ただし、PSAHelpLine（公式オンラインサービス）経由の場合はデリバリー料込みで約PHP 500〜600程度になります。為替レートにより変動します。',
        'The direct PSA (Philippine Statistics Authority) application fee is approximately PHP 365 per copy (about USD 6.50). However, when ordering through PSAHelpLine (official online service), the total including delivery is around PHP 500–600. This varies by exchange rate.'
      ),
    },
    {
      q: t('代行サービスを利用した場合の総費用はいくらですか？', 'What is the total cost when using a proxy service?'),
      a: t(
        '当センターの代行サービスでは、PSA書類費・現地手数料・国際配送費込みでUS$199〜となります。DFAアポスティーユ認証が必要な場合はUS$299〜（セットプラン）となります。配偶者ビザや国際結婚手続きで必要な場合はセットプランがお得です。',
        'Our proxy service starts at US$199, including PSA document fee, local handling fees, and international shipping. If DFA Apostille authentication is required, the set plan starts at US$299. The set plan is cost-effective for spouse visa and international marriage procedures.'
      ),
    },
    {
      q: t('PSA出生証明書のDFAアポスティーユ認証の費用は別途かかりますか？', 'Is the DFA Apostille authentication fee for PSA birth certificates separate?'),
      a: t(
        'はい、DFAアポスティーユ認証は別途費用がかかります。公式のDFA費用は1通あたりPHP 100（通常処理）またはPHP 200（エクスプレス）です。代行サービスでは、PSA取得＋DFAアポスティーユのセットプランで対応できます。',
        'Yes, DFA Apostille authentication incurs a separate fee. The official DFA fee is PHP 100 per document (standard) or PHP 200 (express). Our proxy service offers a combined PSA acquisition + DFA Apostille set plan.'
      ),
    },
    {
      q: t('NO RECORD FOUNDの場合、追加費用はかかりますか？', 'Are there additional fees if the result is NO RECORD FOUND?'),
      a: t(
        'PSA申請でNO RECORD FOUNDが返ってきた場合、PSA Serbilis（PSAオンラインサービス）や別のPSAセンターへの再申請が必要になることがあります。この場合、追加の申請費用・手数料が発生します。代行サービスでは、NO RECORD FOUNDへの対応方法（LCRへの申請等）もご相談いただけます。',
        'If PSA returns "NO RECORD FOUND," reapplication at PSA Serbilis (PSA online service) or another PSA center may be necessary, incurring additional application fees. Our proxy service can advise on NO RECORD FOUND handling (such as applying to LCR).'
      ),
    },
    {
      q: t('PSA出生証明書を複数通取得する場合、割引はありますか？', 'Is there a discount for obtaining multiple copies of PSA birth certificates?'),
      a: t(
        'PSAへの直接申請では、複数通を同時申請しても1通あたりの単価は変わりません。ただし代行サービスでは、複数通の場合に国際配送費の節約になることがあります。まとめてご依頼の場合はお問い合わせください。',
        'When applying directly to PSA, the per-copy fee does not decrease for multiple copies. However, with proxy services, ordering multiple copies at once can save on international shipping. Please contact us for bulk order inquiries.'
      ),
    },
    {
      q: t('PSA出生証明書の取得にかかる期間と費用の関係は？', 'What is the relationship between cost and turnaround time for PSA birth certificates?'),
      a: t(
        '自分でPSAHelpLine経由で申請する場合、通常2〜3週間で書類が届きます（フィリピン国内）。代行サービスでDFAアポスティーユ・日本への国際配送まで含めると4〜6週間が目安です。エクスプレス対応（DFAアポスティーユのエクスプレス申請含む）の場合は費用が上がりますが、期間を短縮できます。',
        'When applying yourself through PSAHelpLine, documents typically arrive within 2–3 weeks (within the Philippines). With proxy services including DFA Apostille and international delivery to Japan, expect 4–6 weeks. Express processing (including DFA Apostille express) costs more but reduces turnaround time.'
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
          { '@type': 'ListItem', position: 2, name: 'PSA Birth Certificate', item: 'https://ph-document.com/psa-birth-certificate' },
          { '@type': 'ListItem', position: 3, name: 'PSA Birth Certificate Cost', item: 'https://ph-document.com/psa-birth-certificate-cost' },
        ],
      },
      {
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://ph-document.com/psa-birth-certificate-cost/',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2'],
          },
        },
        headline: 'PSA Birth Certificate Cost 2026 — Official Fees, Proxy Service Pricing & Total Estimates',
        description: 'Complete breakdown of PSA birth certificate costs in 2026: official PSA fees, online ordering, proxy service pricing, and DFA Apostille add-on.',
        image: 'https://ph-document.com/og-image.png',
        url: 'https://ph-document.com/psa-birth-certificate-cost/',
        inLanguage: 'en',
        datePublished: '2025-12-01',
        dateModified: SEO_DATE_ISO,
        author: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Philippine Document Service',
          url: 'https://ph-document.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ph-document.com/favicon.svg',
          },
        },
        citation: [
          'https://psa.gov.ph',
          'https://www.psaserbilis.com.ph',
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

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6" aria-label="breadcrumb">
          <Link to={t('/ja/', '/')} className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <Link to={t('/ja/psa-shussei-shomeisho', '/psa-birth-certificate')} className="hover:text-secondary">{t('PSA出生証明書', 'PSA Birth Certificate')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('費用・料金', 'Cost & Fees')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {t(
            `PSA出生証明書の費用・料金【${SEO_YEAR_MONTH_JA}最新】公式料金 vs 代行費用の比較`,
            'PSA Birth Certificate Cost 2026 — Official Fees, Proxy Pricing & Total Estimates'
          )}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t(`最終更新：${SEO_LAST_UPDATED_JA} ｜ 株式会社IGRS`, `Last updated: ${SEO_LAST_UPDATED_EN} | IGRS Inc.`)}</p>

        {/* Summary box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-blue-800 mb-1">{t('このページの結論（要点）', 'Key Summary')}</p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>✓ {t('PSA公式費用：1通あたり約PHP 365（約USD 6.50）', 'PSA official fee: ~PHP 365 per copy (~USD 6.50)')}</li>
                <li>✓ {t('代行サービス利用時の総費用：US$199〜（国際配送込み）', 'Proxy service total: from US$199 (incl. international shipping)')}</li>
                <li>✓ {t('DFAアポスティーユ込みセット：US$299〜', 'With DFA Apostille set plan: from US$299')}</li>
                <li>✓ {t('日本から自分で取得する場合：難易度高・フィリピン現地住所が必要', 'Self-acquisition from Japan: difficult — requires a Philippines address')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('目次', 'Table of Contents')}</p>
          <ol className="space-y-1 text-sm text-secondary">
            {[
              t('PSA公式費用の内訳', 'Official PSA Fee Breakdown'),
              t('オンライン申請（PSAHelpLine）の費用', 'Online Application (PSAHelpLine) Costs'),
              t('代行サービス利用時の費用', 'Proxy Service Costs'),
              t('DFAアポスティーユ込みの費用', 'Cost Including DFA Apostille'),
              t('費用比較：自己取得 vs 代行', 'Cost Comparison: Self vs Proxy'),
              t('よくある質問（FAQ）', 'FAQ'),
            ].map((item, i) => (
              <li key={i}><a href={`#pc-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1: Official PSA fees */}
        <section id="pc-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('1. PSA公式費用の内訳', '1. Official PSA Fee Breakdown')}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-5">
            {t(
              'PSA（フィリピン統計局）が発行するPSA出生証明書の公式取得費用は、申請方法によって異なります。以下に主な申請チャネルと費用をまとめます。',
              'The official cost to obtain a PSA birth certificate from PSA (Philippine Statistics Authority) varies by application method. Below is a summary of the main channels and fees.'
            )}
          </p>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('申請チャネル', 'Application Channel')}</th>
                  <th className="px-4 py-3 text-center font-semibold">{t('費用（目安）', 'Cost (Estimate)')}</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">{t('備考', 'Notes')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    t('PSA窓口（直接申請）', 'PSA Counter (Direct Application)'),
                    'PHP 365〜 / copy',
                    t('フィリピン国内のPSAセンターに出頭', 'Visit PSA center in the Philippines'),
                  ],
                  [
                    t('PSAHelpLine（公式オンライン）', 'PSAHelpLine (Official Online)'),
                    'PHP 500〜600 / copy',
                    t('デリバリー料込み・フィリピン国内住所要', 'Incl. delivery — Philippine address required'),
                  ],
                  [
                    t('PSA Serbilis（オンライン）', 'PSA Serbilis (Online)'),
                    'PHP 365〜 / copy',
                    t('オンライン申請・フィリピン国内住所要', 'Online application — Philippine address required'),
                  ],
                ].map(([channel, cost, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100">{channel}</td>
                    <td className="px-4 py-3 text-center border-b border-gray-100">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">{cost}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-xs border-b border-gray-100">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            {t(
              '※ 1 USD ≈ PHP 56〜58（2026年2月現在）。為替レートにより変動します。',
              '* 1 USD ≈ PHP 56–58 (as of February 2026). Varies with exchange rate.'
            )}
          </p>
        </section>

        {/* Section 2: Online ordering */}
        <section id="pc-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('2. オンライン申請（PSAHelpLine）の費用', '2. Online Application (PSAHelpLine) Costs')}
          </h2>
          <p className="text-sm text-gray-700 mb-5">
            {t(
              'PSAHelpLine（psahelpline.com）はPSAの公式オンライン申請サービスです。フィリピン国内の住所へのデリバリーに対応していますが、海外（日本）への直接発送は行っていません。日本在住の方が利用するには、フィリピンの親族等の住所が必要です。',
              'PSAHelpLine (psahelpline.com) is the official PSA online application service. It supports delivery to Philippine addresses but does not ship directly overseas (Japan). Residents in Japan need a Philippine address (e.g., a relative\'s) to use this service.'
            )}
          </p>
          <div className="space-y-4">
            {[
              {
                num: '01',
                title: t('日本在住者がPSAHelpLineを使う場合の費用', 'PSAHelpLine Costs for Japan Residents'),
                body: t(
                  'PSA書類費（PHP 365〜）＋フィリピン国内デリバリー料（PHP 100〜150）＋日本への国際転送費用（別途）。フィリピンの親族に受け取ってもらい、日本へEMS等で転送すると総額約PHP 2,000〜4,000（約USD 35〜70）になることが多いです。',
                  'PSA document fee (PHP 365+) + Philippines domestic delivery (PHP 100–150) + international forwarding to Japan (extra). When having a Philippine relative receive and forward via EMS, total is often PHP 2,000–4,000 (approx. USD 35–70).'
                ),
              },
              {
                num: '02',
                title: t('海外転送サービスを使う場合', 'Using International Forwarding Services'),
                body: t(
                  'My Balikbayan Box等の転送サービスを利用する場合もありますが、手間・時間がかかり確実性が低くなります。代行サービスの利用の方がトータルで見ると簡便で信頼性が高いケースが多いです。',
                  'International forwarding services like My Balikbayan Box are an option, but they add hassle, time, and uncertainty. In most cases, using a proxy service is simpler and more reliable overall.'
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-card">
                <span className="text-2xl font-bold text-primary/20 flex-shrink-0 w-8">{item.num}</span>
                <div>
                  <p className="text-sm font-bold text-secondary mb-2">{item.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Proxy service costs */}
        <section id="pc-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('3. 代行サービス利用時の費用', '3. Proxy Service Costs')}
          </h2>
          <p className="text-sm text-gray-700 mb-5">
            {t(
              '代行サービスを利用した場合、PSA書類費・フィリピン現地手数料・国際配送費がすべて含まれた価格が提示されます。手間なく日本まで書類を届けてもらえます。',
              'When using a proxy service, a single price covers PSA document fees, local Philippines handling, and international shipping. Documents are delivered to Japan with no hassle on your part.'
            )}
          </p>
          <div className="grid gap-3 mb-5">
            {[
              {
                item: t('PSA出生証明書 取得代行', 'PSA Birth Certificate Proxy'),
                cost: 'US$199〜',
                note: t('PSA書類費・現地手数料・国際配送込み', 'Incl. PSA fee, local handling & international shipping'),
              },
              {
                item: t('PSA出生証明書＋DFAアポスティーユ セット', 'PSA Birth Certificate + DFA Apostille Set'),
                cost: 'US$299〜',
                note: t('DFA公式費用・認証手数料込み', 'Incl. DFA official fee & authentication charges'),
              },
              {
                item: t('複数書類セット（PSA＋CENOMAR 等）', 'Multi-document Set (PSA + CENOMAR, etc.)'),
                cost: t('お問い合わせ', 'Inquire for pricing'),
                note: t('セット割引あり', 'Set discount available'),
              },
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
          <div className="grid gap-4">
            {[
              {
                icon: <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
                title: t('追加費用なし・明確な料金設定', 'No Hidden Fees — Transparent Pricing'),
                body: t(
                  'PSA窓口での申請費用、国内交通費、書類確認費用、国際EMS配送料など、すべて含まれた価格です。追加費用は原則発生しません（NO RECORD FOUND・HIT等の特殊ケースを除く）。',
                  'All costs are included: PSA counter fees, local transportation, document verification, and international EMS shipping. No hidden extras in principle (except special cases like NO RECORD FOUND or HIT).'
                ),
              },
              {
                icon: <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
                title: t('NO RECORD FOUNDの場合の追加費用', 'Additional Cost for NO RECORD FOUND'),
                body: t(
                  'PSA申請でNO RECORD FOUNDが返った場合、PSA別センターへの再申請やLCR（地方市役所）への申請が必要になることがあり、追加費用が発生する場合があります。事前にご案内します。',
                  'If PSA returns NO RECORD FOUND, reapplication at another PSA center or filing with the LCR (Local Civil Registry) may be required, potentially incurring additional fees. We will advise you in advance.'
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-card">
                {item.icon}
                <div>
                  <p className="text-sm font-bold text-secondary mb-1">{item.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: With Apostille */}
        <section id="pc-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('4. DFAアポスティーユ込みの費用', '4. Cost Including DFA Apostille')}
          </h2>
          <p className="text-sm text-gray-700 mb-5">
            {t(
              '配偶者ビザ申請・USCIS（米国移民局）・帰化申請など、PSA出生証明書にDFAアポスティーユ認証が必要な場合があります。代行サービスではセットプランで一括対応します。',
              'DFA Apostille authentication on the PSA birth certificate may be required for spouse visa applications, USCIS (US immigration), naturalization, and other purposes. Our proxy service handles everything with a set plan.'
            )}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('サービス内容', 'Service')}</th>
                  <th className="px-4 py-3 text-center font-semibold rounded-tr-lg">{t('料金（目安）', 'Fee (Estimate)')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [t('PSA出生証明書 取得代行のみ', 'PSA Birth Certificate Proxy Only'), 'US$199〜'],
                  [t('DFA アポスティーユ認証（通常処理）', 'DFA Apostille (Standard)'), t('+US$80〜（単品追加の場合）', '+US$80~ (add-on)')],
                  [t('PSA出生証明書＋DFAアポスティーユ セット', 'PSA Birth Certificate + DFA Apostille Set'), 'US$299〜'],
                  [t('エクスプレス対応（DFAアポスティーユ）', 'Express DFA Apostille'), t('+US$30〜50（エクスプレス追加料金）', '+US$30–50 (express surcharge)')],
                ].map(([service, fee], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-secondary border-b border-gray-100">{service}</td>
                    <td className="px-4 py-3 text-center border-b border-gray-100">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">{fee}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            {t(
              '※ 料金は参考値です。最新の料金はお問い合わせください。',
              '* Fees are estimates. Please contact us for the latest pricing.'
            )}
          </p>
        </section>

        {/* Section 5: Comparison */}
        <section id="pc-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('5. 費用比較：自己取得 vs 代行サービス', '5. Cost Comparison: Self-Acquisition vs Proxy Service')}
          </h2>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('項目', 'Item')}</th>
                  <th className="px-4 py-3 text-center font-semibold">{t('自己取得', 'Self-Acquisition')}</th>
                  <th className="px-4 py-3 text-center font-semibold rounded-tr-lg">{t('代行サービス', 'Proxy Service')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [t('PSA書類費', 'PSA document fee'), '~PHP 365', t('込み', 'Included')],
                  [t('フィリピン国内配送', 'Philippines domestic delivery'), 'PHP 100〜150', t('込み', 'Included')],
                  [t('日本への国際配送', 'International shipping to Japan'), 'PHP 1,500〜3,000+', t('込み', 'Included')],
                  [t('フィリピン側の手間・連絡', 'Philippines-side coordination'), t('親族等が必要', 'Relative needed'), t('不要', 'Not needed')],
                  [t('DFAアポスティーユ（必要な場合）', 'DFA Apostille (if needed)'), t('別途手配', 'Arrange separately'), t('セットで対応', 'Set plan available')],
                  [t('日本語サポート', 'Japanese language support'), t('なし', 'None'), t('あり', 'Available')],
                  [t('総費用目安', 'Total estimated cost'), t('USD 35〜100+（転送費含む）', 'USD 35–100+ (incl. forwarding)'), t('US$199〜（すべて込み）', 'US$199~ (all inclusive)')],
                ].map(([item, self, proxy], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-secondary border-b border-gray-100 font-medium">{item}</td>
                    <td className="px-4 py-3 text-center border-b border-gray-100 text-xs text-gray-600">{self}</td>
                    <td className="px-4 py-3 text-center border-b border-gray-100">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">{proxy}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">
            {t('PSA出生証明書の取得、ご相談ください', 'Inquire About PSA Birth Certificate Acquisition')}
          </h2>
          <p className="text-sm text-gray-300 mb-5">
            {t('費用・期間・DFAアポスティーユの要否など、まずはお気軽にご相談ください。', 'For questions about cost, timeline, and whether DFA Apostille is needed — feel free to reach out.')}
          </p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            {t('無料相談する', 'Free Consultation')}
          </a>
        </div>

        {/* FAQ */}
        <section id="pc-6" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('6. よくある質問（FAQ）', '6. Frequently Asked Questions (FAQ)')}
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

        {/* Related Guides */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('関連ガイド', 'Related Guides')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                to: t('/ja/psa-shussei-shomeisho', '/psa-birth-certificate'),
                title: t('PSA出生証明書ガイド（基本）', 'PSA Birth Certificate Guide (Basics)'),
                desc: t('PSA出生証明書とは・取得方法・用途', 'What it is, how to obtain it, use cases'),
              },
              {
                to: t('/ja/apostille-ryokin', '/apostille-fee'),
                title: t('DFAアポスティーユ料金詳細', 'DFA Apostille Fee Details'),
                desc: t('公式料金・代行費用の詳細', 'Official fees & proxy service pricing'),
              },
              {
                to: t('/ja/apostille', '/apostille'),
                title: t('DFAアポスティーユガイド', 'DFA Apostille Guide'),
                desc: t('アポスティーユとは・対象書類・手続き', 'What Apostille is, eligible documents, process'),
              },
              {
                to: t('/ja/kokusai-kekkon-guide', '/international-marriage-guide'),
                title: t('フィリピン国際結婚ガイド', 'Philippines International Marriage Guide'),
                desc: t('結婚手続き全体の流れ・必要書類', 'Overall marriage process & required documents'),
              },
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
            <p className="text-sm text-gray-500 mb-6">
              {t(
                'PSA出生証明書の費用・代行依頼についてお気軽にご相談ください。',
                'Feel free to contact us about PSA birth certificate costs and proxy service inquiries.'
              )}
            </p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【PSA出生証明書費用ページからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/psa-birth-certificate-cost" />
              <div>
                <label htmlFor="pbc-name" className="block text-xs text-gray-600 mb-1">{t('お名前', 'Name')}</label>
                <input id="pbc-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('山田 太郎', 'John Smith')} />
              </div>
              <div>
                <label htmlFor="pbc-email" className="block text-xs text-gray-600 mb-1">{t('メールアドレス', 'Email Address')}</label>
                <input id="pbc-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="pbc-message" className="block text-xs text-gray-600 mb-1">{t('ご相談内容', 'Message')}</label>
                <textarea id="pbc-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('PSA出生証明書の用途（国際結婚・ビザ申請・帰化等）と必要通数をお知らせください。', 'Please share the purpose (international marriage, visa application, naturalization, etc.) and number of copies needed.')} />
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
