import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, AlertTriangle, FileText, ArrowRight, Info } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA, SEO_YEAR_MONTH_EN, SEO_LAST_UPDATED_JA, SEO_LAST_UPDATED_EN, SEO_DATE_ISO } from '../lib/seoDate';
import { trackEvent } from '../lib/analytics';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function CenomarApostillePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t(`CENOMARにDFAアポスティーユは必要？【${SEO_YEAR_MONTH_JA}最新】用途別の結論｜フィリピン書類センター`, `Does CENOMAR Need DFA Apostille? [${SEO_YEAR_MONTH_EN} Guide]`),
    t('CENOMARにDFAアポスティーユ認証が必要かどうかを用途別（国際結婚LCCM・配偶者ビザ・帰化）に解説。東京フィリピン大使館の要件をもとに正確な情報を提供。', 'Find out whether your CENOMAR needs DFA Apostille authentication. Covers international marriage (LCCM), spouse visa, and naturalization use cases.')
  );

  const faqs = [
    {
      q: t(
        '日本でのLCCM（国際結婚の法定能力証明）にアポスティーユは必要ですか？',
        'Is Apostille required for LCCM (Legal Capacity to Contract Marriage) in Japan?'
      ),
      a: t(
        '在日フィリピン大使館（東京）が発行するLCCMの場合、CENOMARにDFAアポスティーユは不要です。大使館がPSAデータベースへ直接アクセスして認証するためです。ただし日本の市区町村役場や法務局の指示に従い、必要書類を事前に確認することを強くおすすめします。',
        'For LCCM issued by the Philippine Embassy in Tokyo, DFA Apostille on the CENOMAR is generally NOT required. The embassy accesses PSA databases directly for authentication. However, always confirm required documents with your local municipal office or the relevant Japanese authority before proceeding.'
      ),
    },
    {
      q: t(
        '配偶者ビザ申請のCENOMARにアポスティーユは必要ですか？',
        'Is Apostille required on CENOMAR for a spouse visa application?'
      ),
      a: t(
        '日本の入国管理局（入管）への配偶者ビザ申請では、CENOMARへのDFAアポスティーユは通常不要です。ただし、在外公館（海外の日本大使館・領事館）経由で申請する場合や、申請先の担当官の判断によっては求められるケースもあります。行政書士や申請先に事前確認することをおすすめします。',
        'For spouse visa applications to Japanese Immigration (入管), DFA Apostille on CENOMAR is generally NOT required. However, if applying through Japanese embassies or consulates overseas, or depending on the reviewing officer, it may be requested. Consult with an administrative scrivener or your immigration office beforehand.'
      ),
    },
    {
      q: t(
        '帰化申請（日本国籍取得）のCENOMARにアポスティーユは必要ですか？',
        'Is Apostille required on CENOMAR for naturalization in Japan?'
      ),
      a: t(
        '法務局に提出する帰化申請では、CENOMARへのDFAアポスティーユが求められることがあります。管轄の法務局によって指示が異なるため、管轄法務局に直接確認してください。アポスティーユが必要と判断された場合は当センターで代行いたします。',
        'For naturalization applications submitted to the Legal Affairs Bureau (法務局), DFA Apostille on CENOMAR may be required. Requirements vary by jurisdiction, so contact your local Legal Affairs Bureau directly. If Apostille is required, our service can handle it for you.'
      ),
    },
    {
      q: t(
        'アポスティーユ付きのCENOMARはアポスティーユなしのものと何が違いますか？',
        'What is the difference between a CENOMAR with and without Apostille?'
      ),
      a: t(
        'PSA発行のCENOMARは国内的に有効ですが、ハーグ条約加盟国（日本・米国等）への公文書提出にはDFAアポスティーユ認証が国際的な正式認証となります。アポスティーユ付きは、その書類がフィリピン政府機関によって公式に認証されたことを国際的に証明します。',
        'A PSA-issued CENOMAR is valid domestically, but for official document submission in Hague Convention member countries (Japan, US, etc.), DFA Apostille is the internationally recognized authentication. An Apostilled CENOMAR proves that the document has been officially certified by a Philippine government authority, and is internationally recognized.'
      ),
    },
    {
      q: t(
        'アポスティーユ認証の取得にどのくらいかかりますか？',
        'How long does it take to obtain Apostille authentication?'
      ),
      a: t(
        'DFAアポスティーユ認証には通常約2週間（10〜15営業日）かかります（エクスプレス処理の場合は3〜5営業日）。CENOMARの取得期間（2〜3週間）と国際配送（3〜5営業日）を合わせると、トータルで4〜6週間が目安です。余裕をもったスケジュールで進めることをおすすめします。',
        'DFA Apostille authentication typically takes approximately 2 weeks (10–15 business days) (or 3–5 business days for express processing). Combined with CENOMAR acquisition (2–3 weeks) and international shipping (3–5 business days), the total guideline is approximately 4–6 weeks. We recommend planning well in advance.'
      ),
    },
    {
      q: t(
        'CENOMARのアポスティーユ認証を代行依頼できますか？',
        'Can I outsource CENOMAR Apostille authentication?'
      ),
      a: t(
        'はい、当センターではCENOMAR取得とDFAアポスティーユ認証をセットで代行いたします。フィリピン現地の対応が難しい方、手続きを一括して任せたい方におすすめです。お問い合わせよりご相談ください。',
        'Yes, our center handles both CENOMAR acquisition and DFA Apostille authentication as a combined service. This is ideal for those who cannot handle the Philippines-side process themselves or who want everything managed in one place. Please contact us for details.'
      ),
    },
    {
      q: t(
        'フィリピン大使館（東京以外）でのLCCMでもアポスティーユは不要ですか？',
        'Is Apostille still not required for LCCM at Philippine embassies outside Tokyo?'
      ),
      a: t(
        '基本的にはフィリピン大使館・領事館経由のLCCMでは不要なケースが多いですが、大阪総領事館など担当窓口によって運用が変わることがあります。最終的には申請予定の大使館・領事館に直接確認することが最も確実です。',
        'In general, Apostille is not required for LCCM processed at Philippine embassies and consulates. However, procedures may vary at consulates such as Osaka. The most reliable approach is to confirm directly with the embassy or consulate where you plan to apply.'
      ),
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: lang === 'ja'
          ? [
              { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/ja/' },
              { '@type': 'ListItem', position: 2, name: 'CENOMARガイド', item: 'https://ph-document.com/ja/cenomar/' },
              { '@type': 'ListItem', position: 3, name: 'CENOMARにアポスティーユは必要？', item: 'https://ph-document.com/ja/cenomar-apostille/' },
            ]
          : [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ph-document.com/en/' },
              { '@type': 'ListItem', position: 2, name: 'CENOMAR Guide', item: 'https://ph-document.com/en/cenomar/' },
              { '@type': 'ListItem', position: 3, name: 'CENOMAR Apostille Guide', item: 'https://ph-document.com/en/cenomar-apostille/' },
            ],
      },
      {
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': lang === 'ja' ? 'https://ph-document.com/ja/cenomar-apostille/' : 'https://ph-document.com/en/cenomar-apostille/',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2'],
          },
        },
        headline: lang === 'ja'
          ? `CENOMARにDFAアポスティーユは必要？用途別の結論【${SEO_YEAR_MONTH_JA}最新】`
          : `Does CENOMAR Need DFA Apostille? A Use-Case Guide [${SEO_YEAR_MONTH_EN}]`,
        description: lang === 'ja'
          ? 'CENOMARにDFAアポスティーユ認証が必要かどうかを用途別（国際結婚LCCM・配偶者ビザ・帰化）に解説。'
          : 'Does CENOMAR need DFA Apostille? Explained by use case: US visa (K-1, CR-1), USCIS, international marriage, and naturalization.',
        image: 'https://ph-document.com/og-image.png',
        url: lang === 'ja' ? 'https://ph-document.com/ja/cenomar-apostille/' : 'https://ph-document.com/en/cenomar-apostille/',
        inLanguage: lang,
        datePublished: '2025-12-01',
        dateModified: SEO_DATE_ISO,
        author: {
          '@type': 'Organization',
          name: lang === 'ja' ? '株式会社IGRS' : 'IGRS Inc.',
          url: 'https://ph-document.com/',
        },
        publisher: {
          '@type': 'Organization',
          name: lang === 'ja' ? 'フィリピン書類取得代行センター' : 'Philippine Document Service',
          url: 'https://ph-document.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ph-document.com/favicon.svg',
          },
        },
        citation: [
          'https://psa.gov.ph',
          'https://www.dfa.gov.ph',
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
        <nav className="text-xs text-gray-400 mb-6" aria-label="パンくずリスト">
          <Link to={t('/ja/', '/')} className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <Link to={t('/ja/cenomar', '/cenomar')} className="hover:text-secondary">{t('CENOMARガイド', 'CENOMAR Guide')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('アポスティーユは必要？', 'Is Apostille Required?')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {t(
            `CENOMARにDFAアポスティーユは必要？用途別の結論【${SEO_YEAR_MONTH_JA}最新】`,
            `Does CENOMAR Need DFA Apostille? [${SEO_YEAR_MONTH_EN} Answer by Use Case]`
          )}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t(`最終更新：${SEO_LAST_UPDATED_JA} ｜ 株式会社IGRS`, `Last updated: ${SEO_LAST_UPDATED_EN} | IGRS Inc.`)}</p>

        {/* リード文 */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800 leading-relaxed">
              {t(
                'CENOMARを取得したあと、「DFAアポスティーユ認証も必要？」と迷う方は多いです。結論は用途によって異なります。このページでは、国際結婚（LCCM）・配偶者ビザ・帰化申請の3ケースについて、2026年時点の実務情報をもとに解説します。',
                'After obtaining CENOMAR, many people wonder: "Do I also need DFA Apostille?" The answer depends on the intended use. This page explains the practical answer for 2026 across three scenarios: international marriage (LCCM), spouse visa, and naturalization.'
              )}
            </p>
          </div>
        </div>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('目次', 'Table of Contents')}</p>
          <ol className="space-y-1 text-sm text-secondary">
            {[
              t('アポスティーユとは', 'What is Apostille'),
              t('用途別：アポスティーユが必要かどうか', 'Is Apostille Required? By Use Case'),
              t('国際結婚（LCCM）の場合', 'International Marriage (LCCM)'),
              t('配偶者ビザ申請の場合', 'Spouse Visa Application'),
              t('帰化申請の場合', 'Naturalization Application'),
              t('代行サービスについて', 'About Proxy Services'),
              t('よくある質問（FAQ）', 'FAQ'),
            ].map((item, i) => (
              <li key={i}><a href={`#ca-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="ca-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('1. DFAアポスティーユとは', '1. What is DFA Apostille')}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            {t(
              'DFAアポスティーユ（Apostille）とは、フィリピン外務省（DFA: Department of Foreign Affairs）が行う公文書の国際認証です。ハーグ条約（外国公文書の認証を不要とする条約）に基づき、条約加盟国（日本・米国など）への公文書提出時に有効な認証として機能します。',
              'DFA Apostille is an international authentication of official documents performed by the Philippine Department of Foreign Affairs (DFA). Based on the Hague Convention (which abolishes the requirement of legalization for foreign public documents), it serves as valid authentication for official document submission in member countries such as Japan and the US.'
            )}
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            {t(
              'アポスティーユスタンプが付いたCENOMARは、フィリピン政府機関による正式認証済みの書類として国際的に通用します。ただし、すべての用途でアポスティーユが必要なわけではありません。',
              'A CENOMAR with an Apostille stamp is internationally recognized as an officially certified document by a Philippine government authority. However, Apostille is not required for every use case.'
            )}
          </p>
        </section>

        {/* Section 2: Summary table */}
        <section id="ca-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('2. 用途別：アポスティーユが必要かどうか（一覧）', '2. Is Apostille Required? Summary by Use Case')}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('用途', 'Use Case')}</th>
                  <th className="px-4 py-3 text-center font-semibold">{t('アポスティーユ', 'Apostille')}</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">{t('備考', 'Notes')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    t('国際結婚（LCCM）in 日本', 'International Marriage (LCCM) in Japan'),
                    t('原則不要', 'Generally NOT required'),
                    t('大使館がPSAデータベースに直接アクセス', 'Embassy accesses PSA database directly'),
                  ],
                  [
                    t('配偶者ビザ申請（日本入管）', 'Spouse Visa (Japan Immigration)'),
                    t('通常不要', 'Usually NOT required'),
                    t('担当官の判断による場合あり', 'May depend on reviewing officer'),
                  ],
                  [
                    t('帰化申請（法務局）', 'Naturalization (Legal Affairs Bureau)'),
                    t('管轄により異なる', 'Varies by jurisdiction'),
                    t('管轄法務局に要確認', 'Confirm with your local bureau'),
                  ],
                  [
                    t('米国K-1ビザ・USCIS申請', 'US K-1 Visa / USCIS Application'),
                    t('必要な場合あり', 'May be required'),
                    t('申請先に事前確認を', 'Confirm with the relevant authority'),
                  ],
                ].map(([use, need, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100">{use}</td>
                    <td className="px-4 py-3 text-center border-b border-gray-100">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${
                        (need as string).includes('不要') || (need as string).includes('NOT')
                          ? 'bg-green-100 text-green-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}>{need}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-xs border-b border-gray-100">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            {t(
              '※ 上記は2026年2月現在の一般的な実務情報です。申請先の指示が最優先となります。必ず事前に確認してください。',
              '* The above reflects general practical information as of February 2026. Always follow the instructions of the relevant authority. Confirm before proceeding.'
            )}
          </p>
        </section>

        {/* Section 3: LCCM */}
        <section id="ca-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('3. 国際結婚（LCCM）の場合', '3. International Marriage (LCCM) Case')}
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-5">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-green-800 mb-1">{t('結論：原則アポスティーユ不要', 'Conclusion: Apostille generally NOT required')}</p>
                <p className="text-sm text-green-700">
                  {t(
                    '在日フィリピン大使館（東京）または大阪総領事館でLCCMを取得する場合、大使館がPSAのデータベースに直接アクセスしてCENOMARの内容を照合するため、DFAアポスティーユ認証は通常不要です。',
                    'When obtaining LCCM at the Philippine Embassy in Tokyo or Consulate General in Osaka, the embassy directly accesses the PSA database to verify the CENOMAR, so DFA Apostille authentication is generally not required.'
                  )}
                </p>
              </div>
            </div>
          </div>
          <h3 className="text-sm font-bold text-secondary mb-3">{t('LCCM取得の流れ（CENOMARとの関係）', 'LCCM Process (Relationship with CENOMAR)')}</h3>
          <div className="space-y-3">
            {[
              {
                step: 'STEP 1',
                title: t('PSA発行のCENOMARを取得', 'Obtain PSA-issued CENOMAR'),
                desc: t('アポスティーユなしのPSA原本で申請可能です。', 'The PSA original without Apostille can be used for the application.'),
              },
              {
                step: 'STEP 2',
                title: t('フィリピン大使館・領事館に予約・来館', 'Make an appointment at the Philippine Embassy / Consulate'),
                desc: t('LCCMの申請に必要な書類（CENOMAR・パスポートなど）を持参します。', 'Bring required documents (CENOMAR, passport, etc.) for the LCCM application.'),
              },
              {
                step: 'STEP 3',
                title: t('大使館がCENOMARを照合・LCCMを発行', 'Embassy verifies CENOMAR and issues LCCM'),
                desc: t('大使館がPSAデータベースに直接アクセスし、CENOMARの有効性を確認します。', 'The embassy accesses the PSA database directly to verify the validity of the CENOMAR.'),
              },
              {
                step: 'STEP 4',
                title: t('日本の市区町村役場で婚姻届を提出', 'Submit marriage registration at a Japanese municipal office'),
                desc: t('LCCMとその他の必要書類を役場に提出します。', 'Submit the LCCM and other required documents to the municipal office.'),
              },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-lg p-4 shadow-card">
                <div className="w-16 flex-shrink-0">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">{s.step}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary mb-1">{s.title}</p>
                  <p className="text-xs text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800">
                {t(
                  '市区町村役場によっては、独自の書類要件を設けている場合があります。事前に役場に確認し、必要書類リストを入手してください。',
                  'Some municipal offices may have their own document requirements. Always confirm with your local office and obtain a required documents list in advance.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Spouse Visa */}
        <section id="ca-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('4. 配偶者ビザ申請の場合', '4. Spouse Visa Application Case')}
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-5">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-green-800 mb-1">{t('結論：通常アポスティーユ不要', 'Conclusion: Usually NOT required')}</p>
                <p className="text-sm text-green-700">
                  {t(
                    '日本の出入国在留管理局（入管）への配偶者ビザ（在留資格「日本人の配偶者等」）申請では、CENOMARへのDFAアポスティーユは通常求められません。ただし、申請書類に漏れがある場合や担当官の判断によって追加提出を求められる例も報告されています。',
                    'For spouse visa applications (resident status "Spouse of Japanese National") to Japan\'s Immigration Services Agency, DFA Apostille on CENOMAR is usually not required. However, there are reports of cases where additional documents were requested due to missing documents or at the discretion of the reviewing officer.'
                  )}
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-700 mb-4">
            {t(
              '確実を期すため、申請前に行政書士や申請予定の入管に確認することをおすすめします。なお、入管の書類要件は定期的に変わることがあります。',
              'For certainty, we recommend consulting with an administrative scrivener (行政書士) or the immigration office where you plan to apply before submitting. Note that immigration document requirements can change periodically.'
            )}
          </p>
        </section>

        {/* Section 5: Naturalization */}
        <section id="ca-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('5. 帰化申請の場合', '5. Naturalization Application Case')}
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-amber-800 mb-1">{t('結論：管轄法務局に要確認', 'Conclusion: Confirm with your local Legal Affairs Bureau')}</p>
                <p className="text-sm text-amber-700">
                  {t(
                    '帰化申請で法務局に提出するCENOMARは、管轄する法務局によってアポスティーユ認証の要否が異なります。東京法務局など大都市の法務局では求められるケースがある一方、求めない法務局もあります。必ず管轄法務局に事前確認してください。',
                    'Whether DFA Apostille is required on the CENOMAR submitted to the Legal Affairs Bureau for naturalization varies by jurisdiction. Some bureaus in major cities like Tokyo may require it, while others do not. Always confirm with your local Legal Affairs Bureau beforehand.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Proxy service */}
        <section id="ca-6" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('6. CENOMAR＋アポスティーユの代行サービス', '6. CENOMAR + Apostille Proxy Service')}
          </h2>
          <p className="text-sm text-gray-700 mb-5">
            {t(
              '「用途を確認したらアポスティーユが必要だった」という場合は、当センターのセット代行サービスをご利用ください。CENOMAR取得からDFAアポスティーユ認証まで、フィリピン現地での手続きをすべて代行します。',
              'If you\'ve confirmed that Apostille is required for your use case, our combined proxy service can handle everything. From CENOMAR acquisition to DFA Apostille authentication — we manage all Philippines-side procedures on your behalf.'
            )}
          </p>
          <div className="grid gap-3">
            {[
              {
                item: t('CENOMAR取得代行（アポスティーユなし）', 'CENOMAR Proxy (without Apostille)'),
                cost: 'US$299〜',
                note: t('PSA書類費・国際配送込み', 'Includes PSA fee & international shipping'),
              },
              {
                item: t('CENOMAR＋DFAアポスティーユ セット', 'CENOMAR + DFA Apostille Set'),
                cost: 'US$349〜',
                note: t('DFA手数料・認証費用込み', 'Includes DFA fee & authentication cost'),
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
          <p className="text-xs text-gray-500 mt-3">
            {t('※ 費用は為替・申請状況により変動します。詳細はお問い合わせください。', '* Fees may vary depending on exchange rates and application conditions. Contact us for details.')}
          </p>
        </section>

        {/* CTA */}
        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">
            {t('CENOMAR＋アポスティーユ、まるごとお任せ', 'Too Much Hassle? Let Us Handle It')}
          </h2>
          <p className="text-sm text-gray-300 mb-5">
            {t('用途確認からフィリピン現地対応まで日本語サポート。', 'CENOMAR + DFA Apostille + DHL to USA — all-in-one from $199. USCIS & NVC compliant.')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to={t('/ja/pricing', '/en/pricing')} className="inline-block bg-white text-secondary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm" onClick={() => trackEvent('cta_click', { location: 'cenomar_apostille', type: 'pricing' })}>
              {t('料金プランを見る', 'View Pricing Plans')}
            </Link>
            <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors text-sm" onClick={() => trackEvent('cta_click', { location: 'cenomar_apostille', type: 'consultation' })}>
              {t('無料相談する', 'Free Consultation')}
            </a>
          </div>
        </div>

        {/* FAQ */}
        <section id="ca-7" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('7. よくある質問（FAQ）', '7. Frequently Asked Questions (FAQ)')}
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

        {/* 関連ページ */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('関連ガイド', 'Related Guides')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                to: t('/ja/cenomar', '/cenomar'),
                title: t('CENOMARガイド（基本）', 'CENOMAR Guide'),
                desc: t('CENOMARとは何か・取得方法・費用', 'What is CENOMAR, requirements & how to get it'),
              },
              {
                to: t('/ja/cenomar-koyukigen', '/cenomar-validity'),
                title: t('CENOMARの有効期限', 'CENOMAR Validity Period'),
                desc: t('"6ヶ月"の根拠と用途別の考え方', 'How long is CENOMAR valid for K-1 & CR-1 visa?'),
              },
              {
                to: t('/ja/pricing', '/en/pricing'),
                title: t('料金プラン', 'Pricing Plans'),
                desc: t('CENOMAR+アポスティーユ代行の費用一覧', 'CENOMAR + Apostille + DHL shipping packages from $199'),
              },
              {
                to: t('/ja/haigusha-visa', '/k1-visa-documents'),
                title: t('配偶者ビザ書類チェックリスト', 'K-1 / CR-1 Visa Documents Checklist'),
                desc: t('ビザ申請に必要な全書類', 'All Philippine documents required for K-1 & CR-1 visa'),
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
                'アポスティーユが必要かどうか、お客様の状況に合わせてご案内します。',
                'We will advise you on whether Apostille is required based on your specific situation.'
              )}
            </p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value={lang === 'ja' ? '【CENOMARアポスティーユページからのお問い合わせ】' : '[CENOMAR Apostille Inquiry - EN]'} />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/cenomar-apostille" />
              <div>
                <label htmlFor="ca-name" className="block text-xs text-gray-600 mb-1">{t('お名前', 'Name')}</label>
                <input id="ca-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('山田 太郎', 'John Smith')} />
              </div>
              <div>
                <label htmlFor="ca-email" className="block text-xs text-gray-600 mb-1">{t('メールアドレス', 'Email Address')}</label>
                <input id="ca-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="ca-message" className="block text-xs text-gray-600 mb-1">{t('ご相談内容', 'Message')}</label>
                <textarea id="ca-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('用途（国際結婚・配偶者ビザ・帰化など）とご質問内容をご記入ください。', 'Please describe your use case (international marriage, spouse visa, naturalization, etc.) and your question.')} />
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
