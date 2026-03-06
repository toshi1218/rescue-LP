import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronDown, ChevronRight, AlertTriangle, FileText, Fingerprint, Clock, ArrowRight, HelpCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA, SEO_YEAR_MONTH_EN } from '../lib/seoDate';

export default function K1VisaDocumentsPage() {
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useMeta(
    t(`K-1婚約者ビザ フィリピン書類を代行取得【${SEO_YEAR_MONTH_JA}】CENOMAR・PSA・NBI一括`, `K-1 Fiancé Visa Documents: We Handle Everything [${SEO_YEAR_MONTH_EN}] \u2014 CENOMAR, PSA & NBI`),
    t('K-1ビザに必要なCENOMAR・PSA出生証明書・NBI Clearance、アメリカ人の婚約者の方が代わりに手配できます。DFAアポスティーユ付きで一括取得・郵送。まずは無料相談。', "American petitioner for a K-1 visa? We retrieve CENOMAR, PSA Birth Certificate, and NBI Clearance with DFA Apostille for your Filipino fianc\u00e9(e). Ships to your US address. Free consultation.")
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('ホーム', 'Home'), item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: t('K-1ビザ書類ガイド', 'K-1 Visa Documents Guide'), item: 'https://ph-document.com/k1-visa-documents/' },
        ],
      },
      {
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://ph-document.com/k1-visa-documents/',
          speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
        },
        headline: t(`K-1婚約者ビザ フィリピン書類ガイド【${SEO_YEAR_MONTH_JA}版】`, `K-1 Fiancé Visa: Philippine Documents Checklist [${SEO_YEAR_MONTH_EN}]`),
        description: t('K-1ビザ申請に必要なCENOMAR・PSA出生証明書・NBI Clearanceの取得方法とDFAアポスティーユを解説。', 'How to obtain CENOMAR, PSA Birth Certificate, and NBI Clearance with DFA Apostille for the K-1 fiancé visa application.'),
        image: 'https://ph-document.com/og-image.png',
        url: 'https://ph-document.com/k1-visa-documents/',
        inLanguage: lang,
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        author: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/' },
        publisher: {
          '@type': 'Organization',
          name: 'Philippine Document Retrieval Service',
          url: 'https://ph-document.com/',
          logo: { '@type': 'ImageObject', url: 'https://ph-document.com/favicon.svg' },
        },
        citation: ['https://travel.state.gov', 'https://ph.usembassy.gov', 'https://psa.gov.ph', 'https://www.nbi.gov.ph'],
      },
    ],
  };

  const steps = [
    {
      step: 'STEP 1',
      title: t('USCISにI-129Fを提出', 'US Citizen Files I-129F with USCIS'),
      desc: t(
        '米国市民がUSCISにI-129F（婚約者ビザ請願書）を提出します。承認まで通常6〜12ヶ月かかります。',
        'The US citizen petitioner submits Form I-129F (Petition for Alien Fiancé) to USCIS. Approval typically takes 6–12 months.'
      ),
    },
    {
      step: 'STEP 2',
      title: t('フィリピン側の書類を準備', 'Filipina/Filipino Prepares Philippine Documents'),
      desc: t(
        'フィリピン側のパートナーがPSA・CENOMAR・NBI書類とDFAアポスティーユを準備します。大使館面接の2〜3ヶ月前には手配を開始してください。',
        'The Filipino partner obtains PSA, CENOMAR, and NBI Clearance with DFA Apostille. Begin at least 2–3 months before your expected embassy interview date.'
      ),
    },
    {
      step: 'STEP 3',
      title: t('米国大使館でのビザ面接', 'Embassy Interview at US Embassy Manila'),
      desc: t(
        'NVC（National Visa Center）からの面接案内後、マニラの米国大使館でビザ面接を受けます。準備した書類一式を持参します。',
        'After receiving notice from NVC, attend the K-1 visa interview at the US Embassy in Manila with all required documents.'
      ),
    },
    {
      step: 'STEP 4',
      title: t('入国・90日以内に結婚', 'Enter the US & Marry Within 90 Days'),
      desc: t(
        'K-1ビザでの入国後、90日以内に米国市民のパートナーと結婚する必要があります。その後グリーンカード（AOS）の申請が可能です。',
        'After entering the US on the K-1 visa, you must marry your US citizen fiancé(e) within 90 days. You can then apply for a Green Card (Adjustment of Status).'
      ),
    },
  ];

  const docs = [
    {
      doc: t('PSA出生証明書 + DFAアポスティーユ', 'PSA Birth Certificate + DFA Apostille'),
      required: true,
      note: t('大使館面接時に提出必須。必ずApostille付きで取得。', 'Required at embassy interview. Must have DFA Apostille.'),
    },
    {
      doc: t('CENOMAR（独身証明書） + DFAアポスティーユ', 'CENOMAR (Certificate of No Marriage Record) + DFA Apostille'),
      required: true,
      note: t('婚約者の独身証明。発行から6ヶ月以内が目安。Apostille必須。', 'Proof of single status. Preferably issued within 6 months. Apostille required.'),
    },
    {
      doc: t('NBI Clearance（無犯罪証明書） + DFAアポスティーユ', 'NBI Clearance + DFA Apostille'),
      required: true,
      note: t('大使館面接で必要。発行から1年以内。Apostille強く推奨。', 'Required at embassy interview. Valid within 1 year. Apostille strongly recommended.'),
    },
    {
      doc: t('有効なフィリピンパスポート', 'Valid Philippine Passport'),
      required: true,
      note: t('面接日から6ヶ月以上の有効期限があること。', 'Must be valid for at least 6 months beyond the interview date.'),
    },
    {
      doc: t('医療診断書（指定パネル医）', 'Medical Examination (Designated Panel Physician)'),
      required: true,
      note: t("マニラのSt. Luke's Extension Clinic等、大使館指定機関のみ有効。", "Only valid from a US Embassy-designated clinic, e.g. St. Luke's Extension Clinic in Manila."),
    },
    {
      doc: t('証明写真', 'Passport-Style Photos'),
      required: true,
      note: t('大使館指定サイズの写真。面接当日持参。', 'Embassy-specified size. Bring on interview day.'),
    },
    {
      doc: t('交際証明（写真・連絡履歴等）', 'Evidence of Relationship (photos, chat history, etc.)'),
      required: false,
      note: t('必須ではないが、面接官からの質問に備えて持参を強く推奨。', 'Not strictly required, but strongly recommended to bring for the interview.'),
    },
  ];

  const faqs = [
    {
      q: t('CENOMARとはどんな書類ですか？', 'What is a CENOMAR and why is it needed for the K-1 visa?'),
      a: t(
        'CENOMARはフィリピン統計局（PSA）が発行する独身証明書（Certificate of No Marriage Record）です。K-1ビザ申請では、フィリピン側のパートナーが「婚姻歴のない独身者」であることを証明するために大使館に提出します。DFAアポスティーユ認証が必要です。',
        'CENOMAR stands for Certificate of No Marriage Record, issued by the Philippine Statistics Authority (PSA). For the K-1 visa, it proves your Filipino partner has never been legally married. The US Embassy requires it at the interview, along with DFA Apostille authentication.'
      ),
    },
    {
      q: t('NBI Clearanceは必ず必要ですか？', 'Is NBI Clearance always required for K-1?'),
      a: t(
        'はい、18歳以上のすべてのK-1ビザ申請者に必要です。NBI Clearanceは無犯罪証明書で、フィリピン国家捜査局（NBI）が発行します。大使館面接時にApostille認証済みのものを提出してください。',
        'Yes, NBI Clearance is required for all K-1 applicants aged 18 and over. It\'s a police clearance certificate issued by the Philippine National Bureau of Investigation. Submit it with DFA Apostille at the embassy interview.'
      ),
    },
    {
      q: t('DFAアポスティーユとは何ですか？', 'What is DFA Apostille and do all documents need it?'),
      a: t(
        'DFAアポスティーユとは、フィリピン外務省（DFA）が公文書の真正性を国際的に証明する認証です。PSA出生証明書・CENOMAR・NBI ClearanceはすべてK-1大使館面接でApostille付きが必要または強く推奨されます。最初からApostilleを取得しておくことをお勧めします。',
        'DFA Apostille is an authentication issued by the Philippine Department of Foreign Affairs (DFA) certifying the authenticity of public documents for international use. PSA Birth Certificate, CENOMAR, and NBI Clearance all require or strongly benefit from DFA Apostille for the K-1 embassy interview. We recommend getting Apostille on all documents from the start.'
      ),
    },
    {
      q: t('書類の取得にどのくらいかかりますか？', 'How long does it take to get all Philippine documents?'),
      a: t(
        'PSA書類（出生証明書・CENOMAR）は約2〜3週間、NBI Clearanceは通常約1〜2週間、DFAアポスティーユは各書類に約1〜2週間かかります。すべて合わせると4〜8週間が目安です。HITが発生した場合はさらに時間がかかることがあります。大使館面接の2〜3ヶ月前には手配を始めてください。',
        'PSA documents (Birth Certificate, CENOMAR) take about 2–3 weeks. NBI Clearance usually takes 1–2 weeks. DFA Apostille takes an additional 1–2 weeks per document. Total: expect 4–8 weeks. NBI HIT cases may take longer. Start the process at least 2–3 months before your expected embassy interview.'
      ),
    },
    {
      q: t('フィリピンに行かずに書類を取得できますか？', 'Can I get Philippine documents without traveling to the Philippines?'),
      a: t(
        'はい。弊社の代行サービスを利用すればフィリピンに渡航する必要はありません。セブを拠点とするスタッフがPSA・CENOMAR・NBI取得からDFAアポスティーユ認証まで一括して対応し、DHLで米国の指定住所に直接お届けします。',
        'Yes. Using our retrieval service, neither you nor your fiancé(e) needs to travel to get documents. Our Cebu-based team handles PSA, CENOMAR, NBI retrieval, and DFA Apostille, then ships everything via DHL Express directly to your US address.'
      ),
    },
    {
      q: t('NBI HITが出た場合はどうなりますか？', 'What happens if the NBI application shows a HIT?'),
      a: t(
        'NBI HITとは、同姓同名者の記録との照合（MATCH FOUND）が発生した状態です。追加の身元確認手続きが必要で、通常より1〜4週間程度追加でかかります。弊社ではHIT対応も込みでサポートしています。',
        'An NBI HIT (MATCH FOUND) means your name matched someone else in the NBI database, requiring additional identity verification. This typically adds 1–4 weeks. Our service includes full HIT resolution support at no extra charge.'
      ),
    },
    {
      q: t('CENOMARの有効期限はありますか？', 'Does CENOMAR have an expiration date?'),
      a: t(
        'CENOMARに法定の有効期限はありませんが、米国大使館は面接日から「6ヶ月以内」に発行されたものを要求することが多いです。面接予定日から逆算して取得することをおすすめします。',
        'CENOMAR has no legal expiration date, but the US Embassy typically requires it to be issued within 6 months of your interview date. Time your application accordingly and request it close to your expected interview.'
      ),
    },
    {
      q: t('K-1ビザが承認されたら、その後どうなりますか？', 'What happens after the K-1 visa is approved?'),
      a: t(
        'K-1ビザで米国入国後、90日以内に米国市民と結婚する必要があります。結婚後はI-485（身分変更申請）を提出してグリーンカード（永住権）を申請できます。2年未満の婚姻の場合は条件付きグリーンカード（CR-1相当）が発行されます。',
        'After entering the US on a K-1 visa, you must marry your US citizen fiancé(e) within 90 days. After marriage, you file Form I-485 (Adjustment of Status) to apply for a Green Card (permanent residence). If married less than 2 years, you receive a conditional Green Card.'
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6" aria-label={t('パンくずリスト', 'Breadcrumb')}>
          <Link to="/" className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('K-1ビザ書類ガイド', 'K-1 Visa Documents')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {t(
            `K-1婚約者ビザに必要なフィリピン書類ガイド【${SEO_YEAR_MONTH_JA}版】`,
            `Philippine Documents for the K-1 Fiancé Visa [${SEO_YEAR_MONTH_EN} Guide]`
          )}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t('最終更新：2026年3月1日 ｜ IGRS Inc.', 'Last updated: March 1, 2026 | IGRS Inc.')}</p>

        {/* Intro callout */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 text-sm text-blue-900 leading-relaxed">
          <strong>{t('このページについて', 'About this guide')}</strong><br />
          {t(
            'このガイドは、フィリピン人パートナーが米国K-1婚約者ビザを申請する際に必要なフィリピン書類の取得方法を解説します。書類の取得からDFAアポスティーユ、米国への発送まで一括代行しています。',
            'This guide covers every Philippine document your Filipino fiancé(e) needs for the K-1 fiancé visa application — CENOMAR, PSA Birth Certificate, and NBI Clearance with DFA Apostille. We retrieve and ship all documents to the USA.'
          )}
        </div>

        {/* Process overview */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('K-1ビザの流れ', 'K-1 Visa Process Overview')}</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4 bg-white rounded-xl border border-gray-100 shadow-card p-4">
                <div className="shrink-0 w-16 text-center">
                  <span className="text-xs font-bold text-primary">{s.step}</span>
                </div>
                <div>
                  <p className="font-bold text-secondary text-sm mb-1">{s.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Document checklist */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-secondary mb-2">
            {t('K-1ビザ大使館面接 必要書類チェックリスト', 'K-1 Visa Embassy Interview: Document Checklist')}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            {t(
              'マニラ米国大使館でのK-1ビザ面接時に持参が必要な書類です。',
              'Documents to bring to your K-1 visa interview at the US Embassy in Manila.'
            )}
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary text-white text-xs">
                  <th className="px-4 py-3 text-left font-semibold">{t('書類', 'Document')}</th>
                  <th className="px-4 py-3 text-center font-semibold">{t('必須', 'Required')}</th>
                  <th className="px-4 py-3 text-left font-semibold">{t('備考', 'Notes')}</th>
                </tr>
              </thead>
              <tbody>
                {docs.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100 text-xs">{item.doc}</td>
                    <td className="px-4 py-3 text-center border-b border-gray-100">
                      {item.required
                        ? <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                        : <span className="text-gray-300 text-xs">{t('推奨', 'Recommended')}</span>}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500 border-b border-gray-100">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 flex items-start gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              {t(
                '書類要件は変更になる場合があります。最新情報は米国大使館のウェブサイトでご確認ください。',
                'Document requirements may change. Always verify the latest requirements at the US Embassy Manila website before your interview.'
              )}
            </span>
          </div>
        </section>

        {/* How we help */}
        <section className="mb-12 bg-white rounded-2xl border border-gray-100 shadow-card p-6">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('弊社代行サービスでできること', 'What Our Service Covers')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            {[
              {
                icon: FileText,
                title: t('PSA出生証明書・CENOMAR取得', 'PSA Birth Certificate & CENOMAR'),
                desc: t('PSA公式書類の取得代行。Apostille認証込み。', 'Official PSA document retrieval including DFA Apostille.'),
              },
              {
                icon: Fingerprint,
                title: t('NBI Clearance取得', 'NBI Clearance Retrieval'),
                desc: t('指紋サポート込みのNBI取得代行。MATCH FOUND対応込み。', 'Includes fingerprint support and MATCH FOUND resolution.'),
              },
              {
                icon: CheckCircle,
                title: t('DFAアポスティーユ認証', 'DFA Apostille Authentication'),
                desc: t('すべての書類にDFAアポスティーユを付けてお届け。', 'All documents authenticated with DFA Apostille before shipping.'),
              },
              {
                icon: ArrowRight,
                title: t('米国住所へのDHL発送', 'DHL Shipping to USA'),
                desc: t('DHL Expressで米国の指定住所に直接発送。送料込み。', 'DHL Express direct to your US address. Shipping included.'),
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-sm mb-0.5">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-sm">
            <p className="font-bold text-primary mb-1">{t('料金目安（Apostille・税・DHL送料込み）', 'Price estimate (Apostille + DHL shipping incl.)')}</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• {t('PSA出生証明書 + CENOMAR（Apostille込み）：¥40,000〜', 'PSA Birth Certificate + CENOMAR (Apostille incl.): from US$289')}</li>
              <li>• {t('NBI Clearance（Apostille込み）：¥45,000〜', 'NBI Clearance (Apostille incl.): from US$329')}</li>
              <li>• {t('K-1フルパック（全書類 + Apostille）：¥85,000〜', 'K-1 Full Package (all docs + Apostille): from US$749')}</li>
            </ul>
            <Link to="/pricing/" className="inline-flex items-center gap-1 text-xs text-primary font-bold mt-3 hover:underline">
              {t('料金詳細を見る', 'See full pricing')} <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            {t('書類取得の目安期間', 'Estimated Timeline for Document Retrieval')}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary text-white text-xs">
                  <th className="px-4 py-3 text-left font-semibold">{t('書類', 'Document')}</th>
                  <th className="px-4 py-3 text-left font-semibold">{t('取得期間目安', 'Est. Retrieval Time')}</th>
                  <th className="px-4 py-3 text-left font-semibold">{t('DFAアポスティーユ', 'DFA Apostille')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { doc: t('PSA出生証明書', 'PSA Birth Certificate'), time: t('2〜3週間', '2–3 weeks'), apostille: t('+1〜2週間', '+1–2 weeks') },
                  { doc: 'CENOMAR', time: t('2〜3週間', '2–3 weeks'), apostille: t('+1〜2週間', '+1–2 weeks') },
                  { doc: t('NBI Clearance', 'NBI Clearance'), time: t('1〜2週間（HIT時+1〜4週間）', '1–2 weeks (HIT: +1–4 weeks)'), apostille: t('+1〜2週間', '+1–2 weeks') },
                  { doc: t('DHL発送〜米国到着', 'DHL to USA'), time: t('3〜5営業日', '3–5 business days'), apostille: '—' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100 text-xs">{row.doc}</td>
                    <td className="px-4 py-3 text-xs text-gray-600 border-b border-gray-100">{row.time}</td>
                    <td className="px-4 py-3 text-xs text-gray-600 border-b border-gray-100">{row.apostille}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            {t(
              '※上記はあくまでも目安です。LTOやNBI支局の混雑状況により変動します。',
              '* These are estimates and may vary based on PSA, NBI processing volume, and DFA Apostille workload.'
            )}
          </p>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('関連ガイド', 'Related Guides')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { to: '/cenomar/', label: t('CENOMARガイド 完全版', 'CENOMAR Complete Guide') },
              { to: '/nbi-clearance/', label: t('NBI Clearanceガイド 完全版', 'NBI Clearance Complete Guide') },
              { to: '/apostille/', label: t('DFAアポスティーユガイド', 'DFA Apostille Guide') },
              { to: '/psa-birth-certificate/', label: t('PSA出生証明書の取得方法', 'How to Get PSA Birth Certificate') },
              { to: '/cr1-visa-documents/', label: t('CR-1/IR-1ビザ書類ガイド', 'CR-1/IR-1 Visa Documents Guide') },
              { to: '/us-visa-documents/', label: t('米国ビザ書類 全体ガイド', 'US Visa Documents Overview') },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm text-secondary font-medium hover:border-primary hover:text-primary transition-colors shadow-card"
              >
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            {t('よくある質問', 'Frequently Asked Questions')}
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
                  {openFaq === i
                    ? <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                    : <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />}
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
        <div className="text-center bg-secondary text-white rounded-2xl p-8">
          <p className="text-xs text-primary font-bold mb-2">{t('まずはお気軽に', 'We handle everything — you focus on your future')}</p>
          <p className="text-xl font-bold mb-3">
            {t('書類の準備、全部まかせてください', 'Ready to start your K-1 document process?')}
          </p>
          <p className="text-sm text-gray-300 mb-6">
            {t(
              'K-1ビザに必要なフィリピン書類の取得からDFAアポスティーユ、米国への発送まで一括対応します。',
              'Tell us your situation and we\'ll confirm exactly which documents you need and provide a free quote. We retrieve, authenticate, and ship to the USA.'
            )}
          </p>
          <Link
            to="/contact/"
            onClick={() => trackEvent('cta_click', { location: 'k1_visa_page_bottom' })}
            className="inline-block bg-primary text-white font-bold px-10 py-4 rounded-xl hover:bg-primary-hover transition-colors shadow-lg"
          >
            {t('無料で相談する', 'Get a Free Quote')}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
