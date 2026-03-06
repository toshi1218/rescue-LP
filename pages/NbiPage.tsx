import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, AlertTriangle, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA, SEO_YEAR_MONTH_EN, SEO_LAST_UPDATED_JA, SEO_LAST_UPDATED_EN, SEO_DATE_ISO } from '../lib/seoDate';
import { trackEvent } from '../lib/analytics';
import { NbiClearanceSample } from '../components/DocumentSampleImage';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function NbiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openCase, setOpenCase] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t(`NBI Clearance 代行取得【${SEO_YEAR_MONTH_JA}】配偶者ビザ・就労に必要な無犯罪証明書｜フィリピン書類センター`, `NBI Clearance + Apostille: We Get It for Your Visa [${SEO_YEAR_MONTH_EN}]`),
    t('配偶者ビザや就労に必要なNBI Clearance、フィリピンに行かずに取得できます。HIT案件も対応。DFAアポスティーユ付きでお届け。日本語サポート・無料相談。', "Need NBI Clearance for a spouse visa or immigration? We retrieve it with DFA Apostille and ship it to you. HIT cases handled. Free consultation for petitioners and employers.")
  );

  const cases = [
    {
      title: t('配偶者ビザ申請のためにNBIが必要な方', 'Those Needing NBI for a Spouse / Partner Visa'),
      detail: t(
        '日本の入管（出入国在留管理庁）が配偶者ビザ（日本人の配偶者等）の申請書類としてNBI Clearanceを求める場合があります。DFAアポスティーユ認証付きのものが推奨されます。NBI Clearanceの有効期限（1年間）を考慮して、ビザ申請の2〜3ヶ月前に取得を開始しましょう。HIT案件の場合は追加で2〜4週間かかることがあるため、余裕をもったスケジュールが重要です。',
        'Immigration offices worldwide (Japan, US, Canada, Australia, UK, and more) commonly require NBI Clearance for spouse or partner visa applications. DFA Apostille authentication is often recommended or required. Start the process at least 2–3 months before your visa application, as HIT cases can take an additional 2–4 weeks.'
      ),
    },
    {
      title: t('海外就職のためにNBIが必要な方', 'Those Needing NBI for Overseas Employment'),
      detail: t(
        'フィリピン人の方が日本や海外で就職する際、雇用主からNBI Clearanceを求められることがあります。企業によっては「3ヶ月以内」の書類を指定するケースもあります。就職確定後すぐに申請を開始し、入社日に間に合うようにスケジュールを組むことをおすすめします。',
        'Overseas employers and recruitment agencies frequently require NBI Clearance from Filipino applicants. Some companies specify a document issued "within 3 months." Start the application as soon as your employment is confirmed to ensure it arrives by your start date.'
      ),
    },
    {
      title: t('海外移住・永住権申請のためにNBIが必要な方', 'Those Needing NBI for Overseas Migration or Permanent Residency'),
      detail: t(
        'カナダ・オーストラリア・ニュージーランドなど多くの国の移民・永住権申請で、フィリピンのNBI Clearanceが必要です。移住先の国の要件によって「発行から6ヶ月以内」などの条件がある場合があります。移住エージェントや弁護士の指示に従い、必要部数・アポスティーユの有無を事前に確認してください。',
        'Philippine NBI Clearance is required for immigration or permanent residency applications in many countries including Canada, Australia, and New Zealand. Conditions such as "issued within 6 months" may apply depending on the destination country\'s requirements. Follow the guidance of your migration agent or lawyer, and confirm in advance the number of copies needed and whether Apostille is required.'
      ),
    },
    {
      title: t('フィリピンのパスポート申請でNBIが必要な方', 'Those Needing NBI for Philippine Passport Application'),
      detail: t(
        '成人のパスポート申請時に、NBI Clearanceを求められるケースがあります（特に初回申請や長期間パスポートを更新していない方）。DFA（フィリピン外務省）のパスポート申請要件は定期的に変わるため、最新情報をDFAの公式サイトで確認することをおすすめします。当センターでのNBI取得後、DFAへの申請準備もサポートします。',
        'NBI Clearance may be required for adult passport applications (especially for first-time applicants or those who have not renewed for a long time). DFA passport requirements change periodically, so we recommend checking the latest information on the DFA official website. After obtaining NBI through our center, we also support preparation for DFA applications.'
      ),
    },
  ];

  const faqs = [
    {
      q: t('NBI クリアランスの有効期限はどのくらいですか？', 'How long is NBI Clearance valid?'),
      a: t(
        '発行日から1年間です。ただし使用目的によっては、より新しい書類（6ヶ月以内など）を求められることがあります。',
        'It is valid for 1 year from the date of issuance. However, depending on the purpose of use, a more recent document (e.g., within 6 months) may be required.'
      ),
    },
    {
      q: t('NBI HITとは何ですか？どう対処すればよいですか？', 'What is NBI HIT and how should I handle it?'),
      a: t(
        'NBI HITとは、申請者の名前がNBIの犯罪記録データベースに登録されている同姓同名の人物と一致した状態です。本人が犯罪を犯したわけではなく、同姓同名が原因であることが多いです。この場合、NBIのQueueing Systemで追加確認（Hit Clearance）を行い、本人と記録の人物が別人であることを証明する必要があります。代行サービスでサポート可能です。',
        'NBI HIT means the applicant\'s name matched someone with the same name in the NBI criminal records database. This does not mean the applicant committed a crime — it is most often caused by sharing a name with someone else. In this case, additional verification (Hit Clearance) through the NBI Queueing System is required to prove that the applicant and the person on record are different individuals. Our proxy service can assist with this.'
      ),
    },
    {
      q: t('海外から自分でNBI クリアランスを申請できますか？', 'Can I apply for NBI Clearance from overseas on my own?'),
      a: t(
        'はい、可能です。NBI公式サイト（clearance.nbi.gov.ph）でオンライン申請し、代理人を立てて受け取る方法があります。ただし代理人の設定、支払い方法（フィリピン国内決済手段が必要なことが多い）など、海外からは手続きが複雑です。代行サービスの利用が最もスムーズです。',
        'Yes, it is possible. You can apply online at the NBI official website (clearance.nbi.gov.ph) and have a local representative pick it up on your behalf. However, the process can be complex from overseas due to payment method restrictions and the need to coordinate a local representative. Using a proxy service is by far the easiest option.'
      ),
    },
    {
      q: t('DFAアポスティーユ認証もまとめて依頼できますか？', 'Can I also request DFA Apostille authentication together?'),
      a: t(
        'はい、対応しております。NBI クリアランス取得後、DFA（外務省）でのアポスティーユ認証もセットで代行可能です。日本の入管や大使館への提出には、アポスティーユ認証が必要な場合があります。',
        'Yes, we can handle that. After obtaining NBI Clearance, we can also proxy the DFA (Department of Foreign Affairs) Apostille authentication as a set. Apostille authentication may be required for submission to Japanese immigration or embassies.'
      ),
    },
    {
      q: t('NBI クリアランスを日本語に翻訳する必要はありますか？', 'Does NBI Clearance need to be translated into Japanese?'),
      a: t(
        '日本の役所や入管に提出する場合は、英語原文への日本語翻訳が求められることがあります。翻訳サービスについてもご相談いただけます。',
        'When submitting to Japanese government offices or immigration, a Japanese translation of the English original may be required. Please feel free to consult us about translation services as well.'
      ),
    },
    {
      q: t('NBI クリアランスの申請に必要なIDは何ですか？', 'What ID is required to apply for NBI Clearance?'),
      a: t(
        'フィリピンの有効な政府発行IDが必要です。パスポート（最も確実）、UMID、フィリピン運転免許証などが使用できます。海外在住の方はパスポートを準備してください。',
        'A valid Philippine government-issued ID is required. A passport (most reliable), UMID, or Philippine driver\'s license can be used. Those living overseas should prepare their passport.'
      ),
    },
    {
      q: t('NBI クリアランスを急いで取得したい場合はどうすればよいですか？', 'What should I do if I need NBI Clearance urgently?'),
      a: t(
        'NBI自体にエクスプレス処理の制度はありませんが、代行サービスを利用することで手続きの抜け漏れなく迅速に対応できます。HIT案件でない通常案件であれば、2〜3週間での取得を目指して対応します。お急ぎの場合はその旨をご相談時にお伝えください。',
        'NBI itself does not have an express processing system, but using a proxy service allows for prompt handling without procedural gaps. For standard non-HIT cases, we aim to obtain the document within 2–3 weeks. Please let us know if you are in a hurry when you contact us.'
      ),
    },
    {
      q: t('フィリピンに住所がない在外フィリピン人でも申請できますか？', 'Can overseas Filipinos without a Philippine address still apply?'),
      a: t(
        'はい、海外在住のフィリピン人（OFW・永住権取得者等）もNBI クリアランスを申請できます。ただしNBIオンラインシステムへの登録や現地での手続きに代理人が必要です。当センターで海外在住者の代行申請にも対応しています。',
        'Yes, overseas Filipinos (OFWs, permanent residents, etc.) can also apply for NBI Clearance. However, a representative is needed for NBI online system registration and local procedures. Our center also handles proxy applications for overseas residents.'
      ),
    },
    {
      q: t('NBI クリアランスに記載される情報はどのような内容ですか？', 'What information is included on NBI Clearance?'),
      a: t(
        'NBI クリアランスには、申請者の氏名・生年月日・出生地・申請日・発行日・有効期限・顔写真・指紋・シリアルナンバーが記載されています。「MATCH FOUND（HIT）」または「NO DEROGATORY RECORD（無犯罪）」の結果も明記されます。英語で記載されるため、日本の機関に提出する場合は日本語翻訳が必要なことがあります。',
        'NBI Clearance includes the applicant\'s name, date of birth, place of birth, application date, issuance date, expiration date, photo, fingerprints, and serial number. The result "MATCH FOUND (HIT)" or "NO DEROGATORY RECORD" is also stated. Since it is written in English, a Japanese translation may be required when submitting to Japanese institutions.'
      ),
    },
    {
      q: t('NBI クリアランスを取得した後、次に何をすればよいですか？', 'What should I do after obtaining NBI Clearance?'),
      a: t(
        'NBI Clearance取得後の次のステップは目的によって異なります。①配偶者ビザ申請の場合：DFAアポスティーユ認証を取得し、必要なら日本語翻訳を添付して入管に提出します。②就職・雇用先提出の場合：雇用主の指示に従い提出します。③海外移住の場合：移住先の国の要件に合わせてアポスティーユや認証を取得します。当センターではNBI取得後のDFAアポスティーユ認証・発送もセットで対応しています。',
        'The next steps after obtaining NBI Clearance depend on your purpose. ① For spouse visa applications: obtain DFA Apostille authentication, attach a Japanese translation if needed, and submit to immigration. ② For employment/employer submission: follow the employer\'s instructions. ③ For overseas migration: obtain Apostille or authentication according to the destination country\'s requirements. Our center also handles DFA Apostille authentication and shipping after NBI acquisition as a set.'
      ),
    },
    {
      q: t('NBI クリアランスのアポスティーユに有効期限はありますか？', 'Does NBI Clearance apostille expire? What is the expiration date?'),
      a: t(
        'DFAアポスティーユ認証自体に法的な有効期限はありません。ただし、アポスティーユが付いているNBI Clearance本体の有効期限は発行日から1年です。NBI Clearanceが失効すれば書類全体が無効になるため、実質的な有効期限はNBI発行日から1年となります。また入管・大使館など提出先によっては「発行から6ヶ月以内」の書類を求める場合もあります。提出先の要件を確認のうえ、アポスティーユ取得後はなるべく早く提出するか、提出予定日の3〜4ヶ月前に取得を開始することをおすすめします。',
        'DFA Apostille authentication itself has no legal expiration date. However, the NBI Clearance to which the Apostille is attached is valid for 1 year from the date of issuance. Since the entire document becomes invalid once the NBI Clearance expires, the practical expiration date is 1 year from the NBI issuance date. Some destinations such as immigration offices and embassies may also require documents "issued within 6 months." We recommend confirming the destination\'s requirements and submitting as soon as possible after obtaining Apostille, or starting the process 3–4 months before your planned submission date.'
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
              { '@type': 'ListItem', position: 2, name: 'NBI無犯罪証明書ガイド', item: 'https://ph-document.com/ja/nbi-clearance/' },
            ]
          : [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ph-document.com/en/' },
              { '@type': 'ListItem', position: 2, name: 'NBI Clearance Guide', item: 'https://ph-document.com/en/nbi-clearance/' },
            ],
      },
      {
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': lang === 'ja' ? 'https://ph-document.com/ja/nbi-clearance/' : 'https://ph-document.com/en/nbi-clearance/',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2'],
          },
        },
        headline: lang === 'ja'
          ? `フィリピンNBI無犯罪証明書（NBI Clearance）とは？日本から取得する方法【${SEO_YEAR_MONTH_JA}】`
          : `NBI Clearance: How to Get It, Requirements & NBI HIT Guide [${SEO_YEAR_MONTH_EN}]`,
        description: lang === 'ja'
          ? 'NBI Clearanceの取得方法・NBI HITの対処法・DFAアポスティーユ認証まで完全解説。日本から代行で取得する手順をわかりやすくガイド。'
          : 'Complete guide to NBI Clearance: how to get it from the Philippines, NBI HIT resolution, DFA Apostille, and proxy service for K-1, CR-1, and US visa applications.',
        image: 'https://ph-document.com/og-image.png',
        url: lang === 'ja' ? 'https://ph-document.com/ja/nbi-clearance/' : 'https://ph-document.com/en/nbi-clearance/',
        inLanguage: lang,
        datePublished: '2025-11-01',
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
          'https://www.nbi.gov.ph',
          'https://clearance.nbi.gov.ph',
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
          <Link to="/" className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('NBI無犯罪証明書ガイド', 'NBI Clearance Guide')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {lang === 'ja' ? (
            <>フィリピンNBI無犯罪証明書（NBI Clearance）とは？<br className="hidden md:block" />日本から取得する方法【{SEO_YEAR_MONTH_JA}最新】</>
          ) : (
            <>Philippine NBI Clearance: Complete Guide [{SEO_YEAR_MONTH_EN}]<br className="hidden md:block" />{' '}How to Get It for US Visa, K-1 & CR-1</>
          )}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t(`最終更新：${SEO_LAST_UPDATED_JA} ｜ 株式会社IGRS`, `Last updated: ${SEO_LAST_UPDATED_EN} | IGRS Inc.`)}</p>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('目次', 'Table of Contents')}</p>
          <ol className="space-y-1 text-sm text-secondary">
            {[
              t('NBI クリアランスとは', 'What is NBI Clearance'),
              t('必要になる場面', 'When It Is Needed'),
              t('基本情報', 'Basic Information'),
              t('取得手順（代行の場合）', 'Acquisition Process (Proxy Service)'),
              t('NBI HITとは？対処法', 'What is NBI HIT? How to Handle It'),
              t('DFAアポスティーユ認証', 'DFA Apostille Authentication'),
              t('よくある質問（FAQ）', 'FAQ'),
              t('お問い合わせ', 'Contact Us'),
            ].map((item, i) => (
              <li key={i}><a href={`#nbi-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="nbi-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('1. NBI クリアランスとは', '1. What is NBI Clearance')}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            {lang === 'ja' ? (
              <><strong>NBI Clearance（NBI クリアランス）</strong>は、フィリピン国家捜査局（NBI: National Bureau of Investigation）が発行する<strong>無犯罪証明書</strong>です。申請者の氏名がNBIの犯罪記録データベースに登録されていないことを証明します。</>
            ) : (
              <><strong>NBI Clearance</strong> is a <strong>criminal record certificate</strong> issued by the Philippine National Bureau of Investigation (NBI). It certifies that the applicant's name is not registered in the NBI's criminal records database.</>
            )}
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            {t(
              '日本でいう「警察証明書」に相当する書類で、海外移住・就労ビザ・国際結婚など、あらゆる場面で求められる重要な書類です。',
              'It is the Philippine equivalent of a police clearance or background check certificate. It is an important document required worldwide for overseas employment, immigration, partner visas, and international marriage procedures.'
            )}
          </p>
          <NbiClearanceSample lang={lang} />
        </section>

        {/* Section 2 */}
        <section id="nbi-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('2. 必要になる場面', '2. When It Is Needed')}
          </h2>
          <div className="grid gap-3">
            {[
              {
                title: t('配偶者ビザ・在留資格の申請', 'Spouse / Partner Visa Application'),
                desc: t('日本の入管が配偶者ビザ申請の書類として求める場合があります。', 'Immigration authorities in many countries require NBI Clearance as part of a spouse or partner visa application.'),
              },
              {
                title: t('就労ビザ・海外就職', 'Work Visa / Overseas Employment'),
                desc: t('日本・海外での就職時に雇用主から提出を求められます。', 'Employers and foreign immigration offices may require NBI Clearance when a Filipino applies for work overseas.'),
              },
              {
                title: t('フィリピンのパスポート申請', 'Philippine Passport Application'),
                desc: t('成人のパスポート申請時に必要になるケースがあります。', 'May be required for adult passport applications.'),
              },
              {
                title: t('海外移住・永住権申請', 'Overseas Migration / Permanent Residency Application'),
                desc: t('多くの国の移民・永住権申請で無犯罪証明書が必要です。', 'A criminal record certificate is required for immigration and permanent residency applications in many countries.'),
              },
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
        <section id="nbi-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('3. 基本情報', '3. Basic Information')}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('項目', 'Item')}</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">{t('内容', 'Details')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [t('発行機関', 'Issuing Authority'), t('フィリピン国家捜査局（NBI）', 'Philippine National Bureau of Investigation (NBI)')],
                  [t('有効期限', 'Validity'), t('発行日から1年間', '1 year from date of issuance')],
                  [t('申請費用', 'Application Fee'), t('約130ペソ（約320円）＋e-payment手数料', 'Approx. 130 PHP (~$2.50 USD) + e-payment fee')],
                  [t('取得期間（代行）', 'Acquisition Time (Proxy)'), t('通常2〜4週間（HIT案件は追加期間が必要）', 'Usually 2–4 weeks (HIT cases require additional time)')],
                  [t('言語', 'Language'), t('英語', 'English')],
                  [t('DFAアポスティーユ', 'DFA Apostille'), t('セットで依頼可能（別途費用）', 'Can be requested as a set (additional fee)')],
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
        <section id="nbi-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('4. 取得手順（代行の場合）', '4. Acquisition Process (Proxy Service)')}
          </h2>
          <div className="space-y-3">
            {[
              {
                step: 'STEP 1',
                title: t('お問い合わせ・必要情報の確認', 'Inquiry & Information Confirmation'),
                desc: t(
                  'お名前・生年月日・目的などをヒアリング。HIT案件の可能性も事前チェックします。',
                  'We gather your name, date of birth, purpose, etc. We also pre-check the possibility of a HIT case.'
                ),
              },
              {
                step: 'STEP 2',
                title: t('必要書類の準備', 'Preparing Required Documents'),
                desc: t(
                  'フィリピンの有効なIDコピーをご用意いただきます（パスポートなど）。',
                  'Please prepare a copy of your valid Philippine ID (passport, etc.).'
                ),
              },
              {
                step: 'STEP 3',
                title: t('NBI申請・取得', 'NBI Application & Retrieval'),
                desc: t(
                  '現地の代理人がNBIシステムに申請・窓口受け取りを代行します。',
                  'Our local representative handles the NBI system application and counter pickup on your behalf.'
                ),
              },
              {
                step: 'STEP 4',
                title: t('（必要に応じて）DFAアポスティーユ認証', '(If Needed) DFA Apostille Authentication'),
                desc: t(
                  '入管・大使館に提出する場合はDFA認証もセットで対応します。',
                  'If your destination country or immigration office requires Apostille authentication, we arrange it at the same time.'
                ),
              },
              {
                step: 'STEP 5',
                title: t('国際郵便で発送', 'International Shipping'),
                desc: t(
                  '取得した書類を速達・追跡付きでご指定の住所へお届けします。',
                  'The obtained documents are shipped to your address anywhere in the world via express tracked courier.'
                ),
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
        </section>

        {/* ケース別ガイド */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-2 border-l-4 border-primary pl-3">
            {t('どんな方がNBIを必要としているか', 'Who Needs NBI Clearance')}
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            {t(
              '目的・状況別に、NBI Clearanceの取得ポイントをまとめました。',
              'Key points for obtaining NBI Clearance, organized by purpose and situation.'
            )}
          </p>
          <div className="space-y-2">
            {cases.map((c, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenCase(openCase === i ? null : i)}
                >
                  <span className="text-sm font-bold text-secondary pr-4">{c.title}</span>
                  {openCase === i ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                </button>
                {openCase === i && (
                  <div className="px-5 pb-4 text-sm text-gray-700 leading-relaxed border-t border-gray-100">
                    <p className="pt-3">{c.detail}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: NBI HIT */}
        <section id="nbi-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('5. NBI HITとは？対処法', '5. What is NBI HIT? How to Handle It')}
          </h2>
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-6">
            <div className="flex gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <h3 className="text-sm font-bold text-amber-800">{t('NBI HITとは？', 'What is NBI HIT?')}</h3>
            </div>
            <p className="text-sm text-amber-800 mb-4">
              {t(
                '申請者の名前が、NBIの犯罪記録データベースに登録された同姓同名の人物と一致した状態を「HIT」といいます。本人が犯罪を犯したわけではありません。',
                '"HIT" refers to a situation where the applicant\'s name matches a person with the same name registered in the NBI\'s criminal records database. This does not mean the applicant has committed a crime.'
              )}
            </p>
            <p className="text-sm text-amber-800">
              {t(
                'フィリピンは同じ名前の人が多いため、HIT（ヒット）が出るケースは珍しくありません。',
                'Because the Philippines has many people with the same names, HIT cases are not uncommon.'
              )}
            </p>
          </div>
          <h3 className="text-sm font-bold text-secondary mb-3">
            {t('HIT が出た場合の対処手順', 'Steps to Handle a HIT Result')}
          </h3>
          <div className="space-y-3">
            {[
              t('NBIのQueueing Systemで「Hit Clearance」の処理を行う', 'Process "Hit Clearance" through the NBI Queueing System'),
              t('指紋照合・本人確認書類の提示が求められる', 'Fingerprint matching and presentation of identity documents are required'),
              t('担当官が記録の人物と申請者が別人であることを確認', 'An officer confirms that the person on record and the applicant are different individuals'),
              t('確認後、通常のNBI クリアランスが発行される（追加で数日〜2週間程度かかる場合あり）', 'After confirmation, a standard NBI Clearance is issued (may take an additional few days to 2 weeks)'),
            ].map((step, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-secondary text-white text-xs font-bold flex-shrink-0 flex items-center justify-center mt-0.5">{i + 1}</span>
                <p className="text-sm text-gray-700">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            <ShieldCheck className="w-4 h-4 inline mr-2" />
            {t(
              '当センターではHIT案件にも対応しています。まずはお気軽にご相談ください。',
              'Our center handles HIT cases as well. Please feel free to contact us first.'
            )}
          </div>
        </section>

        {/* Section 6: DFA */}
        <section id="nbi-6" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('6. DFAアポスティーユ認証', '6. DFA Apostille Authentication')}
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            {lang === 'ja' ? (
              <>日本の入管・大使館に提出するNBI クリアランスには、<strong>DFA（フィリピン外務省）のアポスティーユ認証</strong>が必要な場合があります。</>
            ) : (
              <>NBI Clearance submitted to foreign immigration offices or embassies often requires <strong>DFA (Department of Foreign Affairs) Apostille authentication</strong>, especially for visa and immigration procedures overseas.</>
            )}
          </p>
          <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-card text-sm text-gray-700 space-y-2 mb-6">
            <p>✓ {t('NBI クリアランス取得後、DFAに書類を提出', 'After obtaining NBI Clearance, submit documents to the DFA')}</p>
            <p>✓ {t('アポスティーユスタンプ（認証印）が付与される', 'An Apostille stamp (authentication mark) is applied')}</p>
            <p>✓ {t('国際的な公文書として認証される', 'The document is authenticated as an official international public document')}</p>
            <p>✓ {t('当センターではNBI＋DFAアポスティーユのセット代行が可能', 'We can handle NBI + DFA Apostille as a combined proxy service, shipped worldwide')}</p>
          </div>

          {/* LLMO/SEO: "does nbi apostille expire" / "nbi apostille expiration date" */}
          <h3 className="text-sm font-bold text-secondary mb-2">
            {t('NBI ClearanceのアポスティーユはExpire（期限切れ）になりますか？', 'Does NBI Clearance Apostille Expire?')}
          </h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
            <p className="mb-2">
              {lang === 'ja' ? (
                <><strong>DFAアポスティーユ認証自体に法的な有効期限はありません。</strong>ただし、アポスティーユが付いているNBI Clearance本体の有効期限は発行日から<strong>1年間</strong>です。</>
              ) : (
                <><strong>DFA Apostille authentication itself has no legal expiration date.</strong> However, the NBI Clearance to which the Apostille is attached is valid for <strong>1 year</strong> from the date of issuance.</>
              )}
            </p>
            <p>
              {t(
                'NBI Clearanceが失効すれば書類全体が無効となるため、実質的な有効期限はNBI発行日から1年です。入管・大使館など提出先によっては「発行から6ヶ月以内」を求める場合もあります。',
                'Once NBI Clearance expires, the entire document (including the Apostille) becomes invalid. The practical expiration date is therefore 1 year from the NBI issuance date. Some submission destinations (immigration offices, embassies) may additionally require documents issued within 6 months.'
              )}
            </p>
          </div>
        </section>

        {/* NBI申請成功のポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('NBI申請を成功させるための重要ポイント', 'Key Points for a Successful NBI Application')}
          </h2>
          <div className="space-y-4">
            {[
              {
                num: '01',
                title: t('パスポートの有効期限と名前のスペルを確認する', 'Check Passport Validity and Name Spelling'),
                body: t(
                  'NBI申請に使用するIDは有効期限内のものが必要です。また、パスポートに記載されている名前のスペルがNBI申請書類と一致していることが重要です。スペルの不一致は後の配偶者ビザ審査や大使館提出でトラブルになります。全書類でスペルが統一されているか必ず事前確認してください。',
                  'The ID used for NBI application must be within its validity period. It is also important that the name spelling on the passport matches the NBI application documents. Spelling mismatches can cause problems in later spouse visa reviews or embassy submissions. Always confirm in advance that the spelling is consistent across all documents.'
                ),
              },
              {
                num: '02',
                title: t('有効期限を考慮して申請タイミングを計画する', 'Plan Application Timing Considering Expiration Date'),
                body: t(
                  'NBI Clearanceの有効期限は発行日から1年間です。使用目的（配偶者ビザ申請・就職・移住など）に合わせて、提出先が書類を必要とする日から逆算して取得しましょう。代行で取得する場合は2〜4週間かかるため、余裕をもって申請を開始してください。HIT案件はさらに時間がかかることも念頭に置いてください。',
                  'NBI Clearance is valid for 1 year from the date of issuance. Plan your acquisition by working backward from the date the submission destination needs the document, based on your purpose (spouse visa, employment, migration, etc.). Allow 2–4 weeks when using a proxy service. Keep in mind that HIT cases take additional time.'
                ),
              },
              {
                num: '03',
                title: t('DFAアポスティーユが必要かどうかを事前に確認する', 'Confirm Whether DFA Apostille Is Required'),
                body: t(
                  '日本の入管や大使館に提出するNBI Clearanceは、DFAアポスティーユ認証付きを求められる場合があります。提出先（入管の担当者・行政書士・大使館窓口）に事前に確認し、必要な場合はNBI取得と合わせてDFAアポスティーユもセットで代行依頼すると効率的です。アポスティーユ取得には別途約2週間（10〜15営業日）かかります。',
                  'NBI Clearance submitted to Japanese immigration or embassies may require DFA Apostille authentication. Confirm with the destination (immigration officer, administrative scrivener, embassy counter) in advance. If needed, requesting DFA Apostille together with NBI acquisition is more efficient. Obtaining Apostille takes an additional approx. 2 weeks (10–15 business days).'
                ),
              },
              {
                num: '04',
                title: t('「MATCH FOUND（HIT）」の可能性を事前に把握する', 'Be Aware of "MATCH FOUND (HIT)" Possibility'),
                body: t(
                  'フィリピンは同姓同名の人が多いため、HIT（同名の犯罪記録との一致）が出るケースは珍しくありません。HITが出た場合、追加の確認手続き（Hit Clearance）が必要になり、さらに2〜4週間かかることがあります。急ぎの申請が必要な場合は、余裕のあるスケジュールを組むか、代行サービスにHIT対応も含めて相談することをおすすめします。',
                  'Because the Philippines has many people with the same names, HIT cases (matching with a criminal record of the same name) are not uncommon. If a HIT occurs, additional verification procedures (Hit Clearance) are required, which can take an additional 2–4 weeks. For urgent applications, we recommend building in extra time or consulting a proxy service that includes HIT handling.'
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

        {/* 料金目安 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('代行費用の目安', 'Estimated Proxy Service Fees')}
          </h2>
          <div className="grid gap-3">
            {[
              {
                item: t('NBI Clearance 取得代行', 'NBI Clearance Proxy Acquisition'),
                cost: t('約45,000円〜', 'From ¥45,000'),
                note: t('NBI申請料・国際郵便込み', 'Includes NBI application fee & international shipping'),
              },
              {
                item: t('NBI + DFAアポスティーユ セット', 'NBI + DFA Apostille Set'),
                cost: t('約65,000円〜', 'From ¥65,000'),
                note: t('DFA手数料・認証費用込み', 'Includes DFA fee & authentication cost'),
              },
              {
                item: t('NBI HIT案件（追加対応）', 'NBI HIT Case (Additional Handling)'),
                cost: t('別途お見積もり', 'Quote upon request'),
                note: t('状況によって費用が異なります', 'Cost varies depending on the situation'),
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
            {t(
              '※ 費用は申請内容・HIT有無・書類の種類によって変動します。詳細はお問い合わせください。',
              '* Fees vary depending on application content, HIT status, and document type. Please contact us for details.'
            )}
          </p>
        </section>

        {/* 代行サービスが選ばれる理由 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('7. 代行サービスが選ばれる理由', '7. Why Our Proxy Service Is Chosen')}
          </h2>
          <div className="grid gap-4">
            {[
              {
                icon: '🌐',
                title: t('完全日本語対応', 'Full English Support — No Filipino Required'),
                body: t(
                  'フィリピン機関とのやり取り・書類確認・発送まですべて日本語でOK。英語が不得意な方でも安心です。',
                  'Everything — communicating with Philippine agencies, document verification, and international shipping — is handled in English. You never need to deal with local offices in the Philippines.'
                ),
              },
              {
                icon: '⚡',
                title: t('HIT案件にも対応', 'HIT Cases Also Handled'),
                body: t(
                  'NBI HITが出た場合の追加手続き（Hit Clearance）もサポート。複雑なケースも経験豊富なスタッフが対応します。',
                  'We support additional procedures (Hit Clearance) when an NBI HIT occurs. Experienced staff handle even complex cases.'
                ),
              },
              {
                icon: '📦',
                title: t('DFAアポスティーユまで一括対応', 'All-Inclusive: NBI + Apostille + Worldwide Shipping'),
                body: t(
                  'NBI取得からDFAアポスティーユ認証・国際郵便発送まで、まるごとお任せいただけます。',
                  'From NBI acquisition to DFA Apostille authentication and international shipping to your address — everything handled in one service.'
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-card">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold text-secondary mb-1">{item.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <p className="text-xs font-bold text-primary mb-2">{t('配偶者ビザ申請中の方・雇用主の方へ', 'For Visa Petitioners & Employers')}</p>
          <h2 className="text-xl font-bold mb-3">
            {t('NBI取得で詰まっている時間はありません。プロに任せて先へ進みましょう', "Don\u2019t let NBI paperwork stall your visa. Let us handle it fast.")}
          </h2>
          <p className="text-sm text-gray-300 mb-5">
            {t(
              'HIT案件も含めてDFAアポスティーユまで一括対応。ビザ申請の締切に間に合わせます。',
              'HIT resolution, DFA Apostille, and DHL shipping — all handled together. We help you meet your visa deadline.'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to={t('/ja/pricing', '/en/pricing')} className="inline-block bg-white text-secondary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm" onClick={() => trackEvent('cta_click', { location: 'nbi_clearance', type: 'pricing' })}>
              {t('料金プランを見る', 'View Pricing Plans')}
            </Link>
            <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors text-sm" onClick={() => trackEvent('cta_click', { location: 'nbi_clearance', type: 'consultation' })}>
              {t('無料相談する', 'Free Consultation')}
            </a>
          </div>
        </div>

        {/* FAQ */}
        <section id="nbi-7" className="mb-10">
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
              { to: t('/ja/nbi-hit', '/nbi-hit'), title: t('NBI HITとは？', 'NBI HIT Guide'), desc: t('NBI HIT問題の原因・解決手順', 'What is NBI HIT, causes & how to resolve it') },
              { to: t('/ja/nbi-koyukigen', '/nbi-validity'), title: t('NBI Clearanceの有効期限', 'NBI Clearance Validity'), desc: t('1年間の有効期限と更新タイミング', '1-year validity rule & when to renew for visa') },
              { to: t('/ja/pricing', '/en/pricing'), title: t('料金プラン', 'Pricing Plans'), desc: t('NBI取得代行の費用・パッケージ一覧', 'NBI + Apostille + DHL shipping packages from $199') },
              { to: t('/ja/haigusha-visa', '/k1-visa-documents'), title: t('配偶者ビザ書類チェックリスト', 'K-1 / CR-1 Visa Documents Checklist'), desc: t('ビザ申請に必要な全書類', 'All Philippine documents required for K-1 & CR-1 visa') },
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
                'NBI HIT案件・DFAアポスティーユも対応。まずはご相談ください。',
                'NBI HIT cases and DFA Apostille also handled. Please contact us first.'
              )}
            </p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value={lang === 'ja' ? '【NBIガイドからのお問い合わせ】' : '[NBI Clearance Guide Inquiry - EN]'} />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/nbi-clearance-guide/" />
              <div>
                <label htmlFor="nbi-name" className="block text-xs text-gray-600 mb-1">{t('お名前', 'Name')}</label>
                <input id="nbi-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('山田 太郎', 'John Smith')} />
              </div>
              <div>
                <label htmlFor="nbi-email" className="block text-xs text-gray-600 mb-1">{t('メールアドレス', 'Email Address')}</label>
                <input id="nbi-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="nbi-message" className="block text-xs text-gray-600 mb-1">{t('ご相談内容', 'Message')}</label>
                <textarea id="nbi-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('NBI取得・HIT案件・DFAアポスティーユについてお気軽にどうぞ。', 'Feel free to ask about NBI acquisition, HIT cases, DFA Apostille, etc.')} />
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
