import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, AlertTriangle, Clock, FileText, ArrowRight, MapPin, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function CenomarGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    'CENOMAR（独身証明書）取得方法【2026年最新版】費用・期間・代行｜フィリピン書類センター',
    'フィリピン独身証明書CENOMARの取得方法を自分で・大使館・代行の3パターンで解説。費用・期間・有効期限・トラブル対処まで徹底ガイド。'
  );

  const faqs = [
    {
      q: t('CENOMARとNSO独身証明書は同じですか？', 'Is CENOMAR the same as NSO Certificate of No Marriage?'),
      a: t(
        'はい、同じ書類です。NSOは旧称で、2014年にPSA（フィリピン統計局）に改組されたため、現在は「PSA CENOMAR」と呼ばれます。日本の役所や大使館ではどちらの名称でも通用します。',
        'Yes, they are the same document. NSO is the former name; since it was reorganized into PSA (Philippine Statistics Authority) in 2014, it is now called "PSA CENOMAR." Both names are accepted at Japanese municipal offices and embassies.'
      ),
    },
    {
      q: t('CENOMARの有効期限はどのくらいですか？', 'How long is CENOMAR valid?'),
      a: t(
        '発行日から6ヶ月が目安です。ただし、使用目的（日本での婚姻届、ビザ申請など）によって求められる発行日の基準が異なります。早めに取得しすぎると無効になる場合があるため、使用予定日の2〜3ヶ月前に申請するのが理想的です。',
        'Approximately 6 months from the date of issuance. However, the required issuance date standard varies depending on the purpose (Japanese marriage registration, visa application, etc.). Obtaining it too early may result in it expiring before use, so applying 2–3 months before the planned use date is ideal.'
      ),
    },
    {
      q: t('日本に住んでいる場合、CENOMARは取得できますか？', 'Can I obtain CENOMAR while living in Japan?'),
      a: t(
        '取得できます。方法は2つあります。①在日フィリピン大使館・領事館で申請する、②PSAオンライン（PSAHelpline.com）で申請し国際郵便で受け取る、の2つです。ただし大使館・領事館経由の場合は予約が必要で時間がかかります。代行サービスを利用すれば手続きをすべてお任せいただけます。',
        'Yes, you can obtain it. There are two methods: ① Apply at the Philippine Embassy or Consulate in Japan, ② Apply through PSA online (PSAHelpline.com) and receive it by international mail. However, the embassy/consulate route requires an appointment and takes time. Using a proxy service allows you to leave all procedures to us.'
      ),
    },
    {
      q: t('再婚予定の場合、CENOMARとは別に必要な書類はありますか？', 'If I plan to remarry, are there documents needed in addition to CENOMAR?'),
      a: t(
        'はい、離婚歴がある場合は「CENOMAR」に加え、フィリピンの裁判所が発行した「婚姻の取り消し（Annulment）」または「承認判決」の書類が必要になります。これはフィリピンに離婚制度がないためです。ケースが複雑になるため、まずはご相談ください。',
        'Yes, if you have a history of divorce, in addition to CENOMAR, documents of "Annulment" or "Recognition Judgment" issued by a Philippine court are required. This is because the Philippines does not have a divorce system. Cases can be complex, so please consult us first.'
      ),
    },
    {
      q: t('CENOMARが「MATCH FOUND」と出た場合はどうすればよいですか？', 'What should I do if CENOMAR shows "MATCH FOUND"?'),
      a: t(
        '「MATCH FOUND」はPSAのデータに婚姻記録が見つかったことを意味します。これが誤りの場合（例：同姓同名の別人の記録）は、PSAへの異議申し立てが必要です。過去に婚姻歴がある場合は、アニュルメント手続き後に改めてCENOMARを取得する必要があります。まずは状況をお聞かせください。',
        '"MATCH FOUND" means a marriage record was found in the PSA data. If this is an error (e.g., a record for a different person with the same name), a dispute with PSA is required. If you have a history of marriage, you will need to obtain CENOMAR again after the annulment process. Please tell us your situation first.'
      ),
    },
    {
      q: t('CENOMARの申請に必要な情報は何ですか？', 'What information is needed to apply for CENOMAR?'),
      a: t(
        'PSAオンライン申請に必要な主な情報は、氏名（パスポートと同じスペル）、生年月日、生まれた市区町村（出生地）、父母の氏名です。パスポートのコピーがあると確認に便利です。',
        'The main information required for PSA online application is: name (same spelling as passport), date of birth, city/municipality of birth (place of birth), and parents\' names. Having a copy of your passport is helpful for confirmation.'
      ),
    },
    {
      q: t('代行を依頼した場合、どのくらいで届きますか？', 'How long does it take when using a proxy service?'),
      a: t(
        '一般的に申請から3〜6週間程度が目安です。PSA側の処理状況や郵便事情により変動することがあります。お急ぎの場合は事前にご相談ください。',
        'Generally, approximately 3–6 weeks from application is the guideline. This may vary depending on PSA processing status and postal conditions. Please consult us in advance if you are in a hurry.'
      ),
    },
    {
      q: t('CENOMARに日本語翻訳は必要ですか？', 'Is a Japanese translation of CENOMAR required?'),
      a: t(
        '市区町村役場によって異なります。日本語訳の添付を求める役場がある一方、英語のまま受け付ける役場もあります。提出先に事前に確認することをおすすめします。翻訳が必要な場合は弊社でもご対応できますのでご相談ください。',
        'It varies by municipal office. Some offices require a Japanese translation, while others accept the English version as is. We recommend confirming with the destination in advance. If translation is needed, we can assist — please consult us.'
      ),
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: 'CENOMARガイド', item: 'https://ph-document.com/cenomar-guide/' },
        ],
      },
      {
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://ph-document.com/cenomar-guide/',
        },
        headline: 'フィリピン独身証明書（CENOMAR／セノマー）とは？取得方法・費用・期間を完全解説【2026年】',
        description: 'CENOMARの取得方法を自分で・大使館で・代行での3パターンで解説。費用・期間・有効期限・よくあるトラブルまで初心者向けに徹底ガイド。',
        image: 'https://ph-document.com/og-image.png',
        url: 'https://ph-document.com/cenomar-guide/',
        inLanguage: 'ja',
        datePublished: '2025-11-01',
        dateModified: '2026-02-22',
        author: {
          '@type': 'Organization',
          name: '株式会社IGRS',
          url: 'https://ph-document.com/',
        },
        publisher: {
          '@type': 'Organization',
          name: 'フィリピン書類取得代行センター',
          url: 'https://ph-document.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ph-document.com/favicon.svg',
          },
        },
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
          <span className="text-gray-600">{t('CENOMARガイド', 'CENOMAR Guide')}</span>
        </nav>

        {/* H1 */}
        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {lang === 'ja' ? (
            <>フィリピン独身証明書（CENOMAR／セノマー）とは？<br className="hidden md:block" />取得方法・費用・期間を完全解説【2026年最新】</>
          ) : (
            <>What is Philippine CENOMAR (Certificate of No Marriage)?<br className="hidden md:block" />Complete Guide to Obtaining It [2026]</>
          )}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t('最終更新：2026年2月22日 ｜ 株式会社IGRS', 'Last updated: February 22, 2026 | IGRS Inc.')}</p>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('目次', 'Table of Contents')}</p>
          <ol className="space-y-1 text-sm text-secondary">
            {[
              { href: '#section-1', label: t('CENOMARとは何か', 'What is CENOMAR') },
              { href: '#section-2', label: t('どんな場面で必要か', 'When It Is Needed') },
              { href: '#section-3', label: t('基本情報（発行元・費用・期間）', 'Basic Info (Issuer, Fees & Timeline)') },
              { href: '#section-4', label: t('取得方法3パターン比較', 'Comparison of 3 Acquisition Methods') },
              { href: '#section-5', label: t('申請の流れ・ステップ別ガイド', 'Step-by-Step Application Guide') },
              { href: '#section-6', label: t('在日フィリピン大使館・領事館の窓口', 'Philippine Embassy / Consulate Offices in Japan') },
              { href: '#section-7', label: t('書類が届いたあとの手続き', 'Procedures After Documents Arrive') },
              { href: '#section-8', label: t('よくあるトラブルと注意点', 'Common Issues & Notes') },
              { href: '#section-terms', label: t('用語解説：CENOMAR・SECPA・PSA', 'Terminology: CENOMAR / SECPA / PSA') },
              { href: '#section-9', label: t('よくある質問（FAQ）', 'FAQ') },
              { href: '#contact', label: t('無料相談・お問い合わせ', 'Free Consultation / Contact') },
            ].map((item, i) => (
              <li key={i}>
                <a href={item.href} className="hover:underline">
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="section-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('1. CENOMARとは何か', '1. What is CENOMAR')}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            {lang === 'ja' ? (
              <><strong>CENOMAR（セノマー）</strong>は<strong>Certificate of No Marriage Record</strong>の略称で、フィリピン統計局（PSA）が発行する<strong>独身証明書</strong>です。日本語では「婚姻記録不存在証明書」とも呼ばれます。</>
            ) : (
              <><strong>CENOMAR</strong> stands for <strong>Certificate of No Marriage Record</strong>, and is a <strong>certificate of unmarried status</strong> issued by the Philippine Statistics Authority (PSA). In Japanese, it is also called "Certificate of Non-Existence of Marriage Records."</>
            )}
          </p>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            {t(
              'PSAのデータベースに婚姻記録が存在しないことを公式に証明する書類で、「この人はフィリピンで結婚したことがない」ということを政府が保証するものです。',
              'It is a document that officially certifies that no marriage record exists in the PSA database, guaranteeing that the person has never married in the Philippines.'
            )}
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            <strong>{t('ポイント：', 'Key Point: ')}</strong>
            {t(
              'CENOMARはかつて「NSO独身証明書」とも呼ばれていました。NSOは2014年にPSAに統合されたため、現在は「PSA CENOMAR」が正式名称です。どちらも同じ書類です。',
              'CENOMAR was formerly also called "NSO Certificate of No Marriage." Since NSO was merged into PSA in 2014, "PSA CENOMAR" is now the official name. Both refer to the same document.'
            )}
          </div>
        </section>

        {/* Section 2 */}
        <section id="section-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('2. どんな場面で必要か', '2. When It Is Needed')}
          </h2>
          <div className="grid gap-3">
            {[
              {
                title: t('日本でフィリピン人との国際結婚手続き', 'International Marriage Procedures with a Filipino in Japan'),
                desc: t(
                  '日本の市区町村役場に婚姻届を提出する際、フィリピン側の独身証明として必須。配偶者となるフィリピン人が取得します。',
                  'Required as proof of unmarried status on the Philippine side when submitting a marriage registration at a Japanese municipal office. Obtained by the Filipino who will become the spouse.'
                ),
              },
              {
                title: t('日本の配偶者ビザ（在留資格）の申請', 'Japanese Spouse Visa (Residence Status) Application'),
                desc: t(
                  '配偶者ビザ（「日本人の配偶者等」）の申請書類として入管が求める場合があります。',
                  'Immigration may require it as a document for spouse visa ("Spouse of Japanese National") applications.'
                ),
              },
              {
                title: t('フィリピン国内での婚姻届', 'Marriage Registration in the Philippines'),
                desc: t(
                  'フィリピン市役所（Local Civil Registry）での婚姻届にも必要な場合があります。',
                  'May also be required for marriage registration at a Philippine Local Civil Registry.'
                ),
              },
              {
                title: t('再婚手続き', 'Remarriage Procedures'),
                desc: t(
                  '離婚歴がある方が再婚する場合、アニュルメント判決書と合わせて提出します。',
                  'For those with a history of divorce who are remarrying, submitted together with the annulment judgment.'
                ),
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
        <section id="section-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('3. 基本情報（発行元・費用・期間）', '3. Basic Info (Issuer, Fees & Timeline)')}
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
                  [t('正式名称', 'Official Name'), 'Certificate of No Marriage Record (CENOMAR)'],
                  [t('発行機関', 'Issuing Authority'), t('フィリピン統計局（PSA: Philippine Statistics Authority）', 'Philippine Statistics Authority (PSA)')],
                  [t('有効期限', 'Validity'), t('発行日から約6ヶ月（使用目的により異なる）', 'Approximately 6 months from issuance (varies by purpose)')],
                  [t('PSA申請費用', 'PSA Application Fee'), t('約365ペソ（約900円）＋国際郵便料金', 'Approx. 365 PHP (~$7 USD) + international shipping')],
                  [t('取得期間（代行）', 'Acquisition Time (Proxy)'), t('約3〜6週間（状況による）', 'Approximately 3–6 weeks (depends on situation)')],
                  [t('言語', 'Language'), t('英語（日本語翻訳が必要な場合あり）', 'English (Japanese translation may be required)')],
                  [t('対象者', 'Eligible Applicants'), t('フィリピン国籍を持つ方（海外生まれのフィリピン人も対象）', 'Philippine nationals (including overseas-born Filipinos)')],
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
        <section id="section-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('4. 取得方法3パターン比較', '4. Comparison of 3 Acquisition Methods')}
          </h2>
          <div className="grid gap-4">
            {[
              {
                label: t('方法①', 'Option ①'),
                title: t('PSAオンライン申請（自分で）', 'PSA Online Application (Self)'),
                items: [
                  t('PSAHelpline.comまたはPSA公式サイトで申請', 'Apply at PSAHelpline.com or the PSA official website'),
                  t('支払いはクレジットカードまたはPayPal', 'Payment by credit card or PayPal'),
                  t('国際郵便で日本の住所へ届く（3〜8週間）', 'Delivered to your Japanese address by international mail (3–8 weeks)'),
                ],
                pros: t('コストが最も安い', 'Lowest cost'),
                cons: t('英語対応必須。届くまで時間がかかる。届かないリスクあり', 'English required. Takes time to arrive. Risk of non-delivery'),
                color: 'border-gray-200',
              },
              {
                label: t('方法②', 'Option ②'),
                title: t('在日フィリピン大使館・領事館で申請', 'Apply at Philippine Embassy / Consulate in Japan'),
                items: [
                  t('東京・大阪・名古屋の領事館で申請可能', 'Available at consulates in Tokyo, Osaka, Nagoya'),
                  t('事前予約（オンライン予約）が必要', 'Prior online appointment required'),
                  t('窓口で申請書を記入し手数料を支払う', 'Fill in application form and pay fee at the counter'),
                ],
                pros: t('比較的安い', 'Relatively inexpensive'),
                cons: t('予約が取りにくい。平日のみ。窓口まで出向く手間', 'Appointments hard to get. Weekdays only. Must visit in person'),
                color: 'border-gray-200',
              },
              {
                label: t('方法③ おすすめ', 'Option ③ Recommended'),
                title: t('代行サービスに依頼', 'Use a Proxy Service'),
                items: [
                  t('日本語でやり取りするだけ', 'Just communicate in English'),
                  t('必要書類の確認から郵送まで完全サポート', 'Complete support from document check to mailing'),
                  t('書類の不備リスクを最小化', 'Minimizes risk of document errors'),
                ],
                pros: t('手間が一切かからない。日本語サポートあり', 'Zero hassle. English support available'),
                cons: t('代行手数料がかかる', 'Proxy service fee applies'),
                color: 'border-primary',
              },
            ].map((m, i) => (
              <div key={i} className={`bg-white border-2 ${m.color} rounded-xl p-5 shadow-card`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{m.label}</span>
                  <h3 className="font-bold text-secondary">{m.title}</h3>
                </div>
                <ul className="space-y-1 mb-3">
                  {m.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-primary flex-shrink-0">▸</span>{item}
                    </li>
                  ))}
                </ul>
                <div className="text-xs space-y-1">
                  <p><span className="text-green-600 font-bold">{t('メリット：', 'Pros: ')}</span>{m.pros}</p>
                  <p><span className="text-red-500 font-bold">{t('デメリット：', 'Cons: ')}</span>{m.cons}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: ステップ別ガイド */}
        <section id="section-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('5. 申請の流れ・ステップ別ガイド', '5. Step-by-Step Application Guide')}
          </h2>
          <p className="text-sm text-gray-600 mb-5">
            {t('代行サービスを利用した場合の一般的な流れです。', 'This is the general process when using a proxy service.')}
          </p>
          <div className="space-y-3">
            {[
              {
                step: 1,
                title: t('お問い合わせ・無料相談', 'Inquiry & Free Consultation'),
                desc: t(
                  'フォームまたはメールでご連絡ください。氏名・生年月日・目的（国際結婚・ビザ申請など）をお知らせいただくと、スムーズにご案内できます。',
                  'Contact us by form or email. Providing your name, date of birth, and purpose (international marriage, visa application, etc.) allows us to assist you smoothly.'
                ),
              },
              {
                step: 2,
                title: t('必要情報のご確認', 'Confirmation of Required Information'),
                desc: t(
                  'ご依頼内容をもとに、必要な情報（氏名のスペル・出生地・父母の情報など）を確認します。不明な点は一緒に調べます。',
                  'Based on your request, we confirm the required information (name spelling, place of birth, parents\' information, etc.). We investigate unclear points together.'
                ),
              },
              {
                step: 3,
                title: t('お見積もり・ご入金', 'Quote & Payment'),
                desc: t(
                  '費用と納期の概算をご提示します。ご了承いただいた後、銀行振込でのお支払いをお願いします。',
                  'We provide an estimated cost and delivery time. After your approval, we ask for payment by bank transfer.'
                ),
              },
              {
                step: 4,
                title: t('フィリピン現地での申請', 'Application in the Philippines'),
                desc: t(
                  'セブ拠点のスタッフがPSAへの申請手続きを代行します。必要に応じてDFAアポスティーユ認証も同時に手配します。',
                  'Our Cebu-based staff handle the PSA application procedures on your behalf. DFA Apostille authentication is also arranged simultaneously if needed.'
                ),
              },
              {
                step: 5,
                title: t('書類受領・日本へ転送', 'Document Receipt & Forwarding to Japan'),
                desc: t(
                  '書類が発行され次第、国際郵便（EMSなど）で日本の住所へ転送します。追跡番号をお知らせします。',
                  'Once documents are issued, they are forwarded to your Japanese address via international mail (EMS, etc.). We will provide you with a tracking number.'
                ),
              },
              {
                step: 6,
                title: t('お受け取り・確認', 'Receipt & Verification'),
                desc: t(
                  '書類が届いたら、氏名・生年月日・出生地など記載内容に誤りがないかご確認ください。不備があればすぐにご連絡ください。',
                  'When documents arrive, please check for any errors in the content such as name, date of birth, and place of birth. Contact us immediately if there are any issues.'
                ),
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-card">
                <div className="w-8 h-8 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center flex-shrink-0">{s.step}</div>
                <div>
                  <p className="font-bold text-secondary text-sm mb-1">{s.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: 大使館窓口 */}
        <section id="section-6" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('6. 在日フィリピン大使館・領事館の窓口', '6. Philippine Embassy / Consulate Offices in Japan')}
          </h2>
          <p className="text-sm text-gray-600 mb-5">
            {t(
              '自力で申請する場合は、最寄りの窓口に事前予約のうえ来訪する必要があります。',
              'If applying on your own, you must make an advance appointment and visit the nearest office.'
            )}
          </p>
          <div className="grid gap-3">
            {[
              {
                name: t('フィリピン大使館（東京）', 'Philippine Embassy (Tokyo)'),
                addr: t('東京都港区六本木5-15-5', '5-15-5 Roppongi, Minato-ku, Tokyo'),
                note: t('関東・東北・北海道方面の方', 'For those in Kanto, Tohoku, Hokkaido regions'),
              },
              {
                name: t('フィリピン総領事館（大阪）', 'Philippine Consulate General (Osaka)'),
                addr: t('大阪府大阪市中央区久太郎町1-9-16', '1-9-16 Kutarocho, Chuo-ku, Osaka'),
                note: t('近畿・中国・四国方面の方', 'For those in Kinki, Chugoku, Shikoku regions'),
              },
              {
                name: t('フィリピン総領事館（名古屋）', 'Philippine Consulate General (Nagoya)'),
                addr: t('愛知県名古屋市中村区名駅4-4-38', '4-4-38 Meieki, Nakamura-ku, Nagoya, Aichi'),
                note: t('東海・北陸・甲信越方面の方', 'For those in Tokai, Hokuriku, Koshinetsu regions'),
              },
            ].map((office) => (
              <div key={office.name} className="flex gap-3 bg-white border border-gray-100 rounded-lg p-4 shadow-card">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-secondary">{office.name}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{office.addr}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{office.note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-800">
            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-500" />
            <p>
              {lang === 'ja' ? (
                <>大使館・領事館での申請は<strong>事前のオンライン予約が必須</strong>です。予約なしの来訪は対応不可の場合があります。余裕をもって手続きを進めてください。</>
              ) : (
                <><strong>Prior online appointment is mandatory</strong> for applications at embassies and consulates. Walk-in visits may not be accommodated. Please proceed with your procedures with ample time.</>
              )}
            </p>
          </div>
        </section>

        {/* Section 7: 書類が届いたあと */}
        <section id="section-7" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('7. 書類が届いたあとの手続き', '7. Procedures After Documents Arrive')}
          </h2>
          <p className="text-sm text-gray-600 mb-5">
            {t(
              'CENOMARを取得したら、目的別に次のステップへ進みます。',
              'After obtaining CENOMAR, proceed to the next steps based on your purpose.'
            )}
          </p>
          <div className="space-y-4">
            {[
              {
                title: t('国際結婚（日本先行）の場合', 'For International Marriage (Japan First)'),
                steps: [
                  t('CENOMARとPSA出生証明書を揃える', 'Gather CENOMAR and PSA Birth Certificate'),
                  t('必要に応じて日本語翻訳を準備する', 'Prepare Japanese translation if required'),
                  t('市区町村役場に婚姻届を提出する', 'Submit marriage registration at a municipal office'),
                  t('婚姻届受理証明書を取得してフィリピン大使館に報告（婚姻報告的届出）', 'Obtain acceptance certificate of marriage registration and report to Philippine Embassy (Report of Marriage)'),
                ],
                color: 'border-blue-200 bg-blue-50',
                textColor: 'text-blue-800',
              },
              {
                title: t('配偶者ビザ（在留資格）申請の場合', 'For Spouse Visa (Residence Status) Application'),
                steps: [
                  t('CENOMARのほかにNBI Clearance・PSA婚姻証明書なども揃える', 'In addition to CENOMAR, gather NBI Clearance, PSA Marriage Certificate, etc.'),
                  t('在留資格認定証明書交付申請書を作成する', 'Prepare the Certificate of Eligibility application form'),
                  t('入国管理局（入管）に申請書類一式を提出する', 'Submit the complete set of application documents to the Immigration Services Agency'),
                  t('認定証明書が発行されたらフィリピンにいる配偶者がビザを申請する', 'Once the Certificate of Eligibility is issued, the spouse in the Philippines applies for a visa'),
                ],
                color: 'border-green-200 bg-green-50',
                textColor: 'text-green-800',
              },
            ].map((scenario) => (
              <div key={scenario.title} className={`border rounded-xl p-5 ${scenario.color}`}>
                <h3 className={`font-bold text-sm mb-3 ${scenario.textColor}`}>{scenario.title}</h3>
                <ol className="space-y-1">
                  {scenario.steps.map((step, i) => (
                    <li key={i} className={`text-xs flex gap-2 ${scenario.textColor}`}><span className="font-bold flex-shrink-0">{i + 1}.</span>{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: よくあるトラブルと注意点 */}
        <section id="section-8" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('8. よくあるトラブルと注意点', '8. Common Issues & Notes')}
          </h2>
          <div className="space-y-4">
            {[
              {
                title: t('書類が届かない', 'Documents do not arrive'),
                body: t(
                  'PSAオンライン申請で支払い完了後、数週間経っても届かないケースがあります。国際郵便の遅延・紛失が原因のことが多く、再申請が必要になる場合も。',
                  'There are cases where documents do not arrive even weeks after payment is completed for PSA online applications. This is often caused by international mail delays or loss, and reapplication may be necessary.'
                ),
              },
              {
                title: t('MATCH FOUNDと記載されていた', '"MATCH FOUND" was indicated'),
                body: t(
                  '婚姻記録が見つかった場合に「MATCH FOUND」と記載されます。過去に結婚歴がある場合は正常ですが、身に覚えがない場合はPSAへの異議申し立てが必要です。',
                  '"MATCH FOUND" is indicated when a marriage record is found. This is normal if you have a history of marriage, but if you have no recollection of it, a dispute with PSA is required.'
                ),
              },
              {
                title: t('名前のスペルが異なる', 'Name spelling is different'),
                body: t(
                  'パスポートの名前とCENOMARの名前が一致しない場合、大使館や役所で問題になることがあります。申請前に必ずパスポートと同じ名前で申請しましょう。',
                  'If the name on the passport and CENOMAR do not match, problems may arise at embassies and municipal offices. Always apply with the same name as on your passport.'
                ),
              },
              {
                title: t('有効期限切れで再取得が必要', 'Expiration requires reacquisition'),
                body: t(
                  '取得後に手続きが長引き、有効期限（6ヶ月）を過ぎてしまうケースがあります。手続きのスケジュールを逆算して取得時期を決めることが重要です。',
                  'There are cases where procedures drag on after acquisition and the validity period (6 months) passes. It is important to decide the acquisition timing by working backward from your procedure schedule.'
                ),
              },
              {
                title: t('翻訳が必要なケース', 'Cases where translation is required'),
                body: t(
                  '日本の市区町村役場によっては、英語のCENOMARに日本語翻訳の添付を求める場合があります。事前に提出先の窓口に確認しておきましょう。',
                  'Some Japanese municipal offices may require a Japanese translation to be attached to the English CENOMAR. Check with the destination counter in advance.'
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-amber-800 mb-1">{item.title}</p>
                  <p className="text-xs text-amber-700">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <p className="text-xs text-primary font-bold mb-2">{t('手続きが面倒な方へ', 'For Those Who Find Procedures Troublesome')}</p>
          <h2 className="text-xl font-bold mb-3">{t('CENOMAR取得、全部お任せください', 'Leave Everything About CENOMAR Acquisition to Us')}</h2>
          <p className="text-sm text-gray-300 mb-5">
            {lang === 'ja' ? (
              <>申請書類の確認から取得・郵送まで、日本語でサポートします。<br />どの書類が必要かわからない方もまずはご相談ください。</>
            ) : (
              <>From document confirmation to acquisition and mailing, we support you in English.<br />Even if you are unsure which documents you need, please consult us first.</>
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-5 text-xs">
            {[
              t('日本語でやり取りのみ', 'English communication only'),
              t('トラブルもサポート', 'Troubleshooting support'),
              t('現地セブ拠点あり', 'Cebu office on-site'),
              t('翻訳対応も可能', 'Translation available'),
            ].map((item) => (
              <span key={item} className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
                <Shield className="w-3 h-3 text-primary" />{item}
              </span>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors shadow-lg"
          >
            {t('無料相談する', 'Free Consultation')}
          </a>
        </div>

        {/* Section Terms — SEO: "what is CENOMAR in Tagalog / in Philippines" + SECPA */}
        <section id="section-terms" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('用語解説：CENOMAR・SECPA・PSA（英語・フィリピノ語対照）', 'Terminology: What is CENOMAR in Tagalog / Filipino — CENOMAR, SECPA & PSA Explained')}
          </h2>
          <p className="text-sm text-gray-600 mb-5">
            {t(
              'CENOMAR申請・PSA書類に関わる重要用語を日本語・英語・フィリピノ語（タガログ語）で解説します。',
              'Key terms related to CENOMAR and PSA documents, explained in English and Filipino (Tagalog).'
            )}
          </p>
          <div className="space-y-4">
            {[
              {
                term: 'CENOMAR',
                en: 'Certificate of No Marriage Record',
                tl: 'Sertipiko ng Walang Rekord ng Kasal',
                ja: t('独身証明書（婚姻記録不存在証明書）', 'Certificate of No Marriage / Proof of Unmarried Status'),
                desc: t(
                  'PSA（フィリピン統計局）が発行する、婚姻記録が存在しないことを証明する公文書。日本や海外での国際結婚・ビザ申請に使われます。フィリピノ語（タガログ語）では "Sertipiko ng Walang Rekord ng Kasal"（婚姻記録のない証明書）とも呼ばれますが、日常会話でも "CENOMAR" がそのまま使われます。かつては "NSO独身証明書" とも呼ばれていました。',
                  'An official document issued by PSA (Philippine Statistics Authority) certifying no marriage record exists. Used for international marriage and visa applications in Japan and overseas. In Filipino/Tagalog, it is called "Sertipiko ng Walang Rekord ng Kasal" (certificate with no marriage record), though "CENOMAR" is used in everyday speech as well. It was formerly known as the "NSO Certificate of No Marriage."'
                ),
              },
              {
                term: 'SECPA',
                en: 'Security Paper',
                tl: 'Security Paper (Seguridad na Papel)',
                ja: t('セキュリティペーパー（PSA公式発行用紙）', 'PSA Official Security Paper'),
                desc: t(
                  'PSAが発行する出生証明書・婚姻証明書・死亡証明書・CENOMARは、このSECPA（Security Paper：専用のセキュリティ印刷用紙）に印刷されて発行されます。透かし・公印が入ったこの用紙に印刷されたもののみが公式書類として認められます。コピーや白紙への再印刷は公式書類として認められません。代行取得の場合は必ずSECPA付きの書類をお届けします。',
                  'Birth certificates, marriage certificates, death certificates, and CENOMAR issued by PSA are printed on SECPA (Security Paper — a dedicated security-grade paper). Only documents printed on this paper with watermarks and official seals are recognized as official documents. Copies or reprints on plain paper are not accepted as official documents. When obtaining through our proxy service, we always deliver documents with SECPA.'
                ),
              },
              {
                term: 'PSA',
                en: 'Philippine Statistics Authority',
                tl: 'Pangasiwaan ng Estadistika ng Pilipinas',
                ja: t('フィリピン統計局', 'Philippine Statistics Authority'),
                desc: t(
                  'フィリピンの政府機関で、出生・婚姻・死亡・CENOMARなどの公文書を発行します。2014年以前はNSO（National Statistics Office）と呼ばれていましたが、PSAに統合されました。PSAが発行するすべての書類はSECPA（セキュリティペーパー）に印刷されます。',
                  'A Philippine government agency that issues official documents including birth, marriage, death certificates and CENOMAR. Before 2014, it was called NSO (National Statistics Office) before being merged into PSA. All documents issued by PSA are printed on SECPA (Security Paper).'
                ),
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-card">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-base font-bold text-secondary">{item.term}</span>
                  <span className="text-xs text-gray-300">|</span>
                  <span className="text-xs text-gray-500">{item.en}</span>
                  <span className="text-xs text-gray-300">|</span>
                  <span className="text-xs text-gray-500 italic">{item.tl} {t('（フィリピノ語）', '(Filipino/Tagalog)')}</span>
                </div>
                <p className="text-xs font-bold text-primary mb-2">{item.ja}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 9: FAQ */}
        <section id="section-9" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('9. よくある質問（FAQ）', '9. Frequently Asked Questions (FAQ)')}
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
                  {openFaq === i
                    ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
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
              { to: '/psa-shussei-shomeisho', title: t('PSA出生証明書ガイド', 'PSA Birth Certificate Guide'), desc: t('国際結婚・ビザに必要なPSA書類の取得方法', 'How to obtain PSA documents for international marriage & visa') },
              { to: '/nbi-clearance-guide', title: t('NBI無犯罪証明書ガイド', 'NBI Clearance Guide'), desc: t('NBI HIT問題の解説と日本からの取得手順', 'NBI HIT issues explained & how to obtain from Japan') },
              { to: '/kokusai-kekkon-guide', title: t('フィリピン国際結婚ガイド', 'Philippines International Marriage Guide'), desc: t('手続き全体の流れ・必要書類・費用', 'Overall process, required documents & fees') },
              { to: '/haigusha-visa-shorui', title: t('配偶者ビザ書類チェックリスト', 'Spouse Visa Documents Checklist'), desc: t('配偶者ビザに必要なフィリピン書類一覧', 'List of Philippine documents needed for spouse visa') },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 shadow-card hover:border-primary transition-colors group"
              >
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

        {/* Contact Form */}
        <section id="contact" className="mb-10">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-soft">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-xs text-primary font-bold">{t('まずは無料相談', 'Free Consultation First')}</span>
            </div>
            <h2 className="text-xl font-bold text-secondary mb-2">{t('お問い合わせ', 'Contact Us')}</h2>
            <p className="text-sm text-gray-500 mb-6">
              {lang === 'ja' ? (
                <>どの書類が必要かわからない方も、お気軽にご相談ください。<br />平日 9:00〜18:00（日本時間）・翌営業日以内にご返信します。</>
              ) : (
                <>Even if you are unsure which documents you need, please feel free to consult us.<br />Weekdays 9:00–18:00 (Japan time) · We reply within the next business day.</>
              )}
            </p>
            <form
              action={FORMSPREE_ENDPOINT}
              method="POST"
              className="space-y-3"
            >
              <input type="hidden" name="_subject" value="【CENOMARガイドからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/cenomar-guide/" />
              <div>
                <label htmlFor="name" className="block text-xs text-gray-600 mb-1">{t('お名前', 'Name')}</label>
                <input id="name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('山田 太郎', 'John Smith')} />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-gray-600 mb-1">{t('メールアドレス', 'Email Address')}</label>
                <input id="email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-gray-600 mb-1">{t('ご相談内容', 'Message')}</label>
                <textarea id="message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('CENOMAR取得のご相談、必要書類の確認など、お気軽にどうぞ。', 'Feel free to consult us about CENOMAR acquisition, required document confirmation, etc.')} />
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3">
                <Send className="w-5 h-5" />
                {t('送信する', 'Send')}
              </button>
            </form>
            <a href="mailto:igrs20200601@gmail.com" className="mt-3 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />
              {t('メールで直接送る: igrs20200601@gmail.com', 'Send directly by email: igrs20200601@gmail.com')}
            </a>
          </div>
        </section>

        <footer className="text-center text-xs text-gray-300 pb-8">
          <p>{t('© 2026 IGRS Inc. ｜ ', '© 2026 IGRS Inc. | ')}<Link to="/" className="hover:text-secondary">{t('フィリピン書類取得代行センター', 'Philippine Document Procurement Center')}</Link></p>
        </footer>
      </main>
    </div>
  );
}
