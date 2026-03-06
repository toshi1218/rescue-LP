import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, AlertTriangle, FileText, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA, SEO_YEAR_MONTH_EN, SEO_LAST_UPDATED_JA, SEO_LAST_UPDATED_EN, SEO_DATE_ISO } from '../lib/seoDate';
import { trackEvent } from '../lib/analytics';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function KekkonShomeishoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t(`PSA婚姻証明書の代行取得【${SEO_YEAR_MONTH_JA}】配偶者ビザ・国際結婚に｜フィリピン書類センター`, `PSA Marriage Certificate + Apostille: We Handle It All [${SEO_YEAR_MONTH_EN}]`),
    t('配偶者ビザ・国際結婚に必要なPSA婚姻証明書、自分で取ってもDFAアポスティーユがないと受理されません。当センターが取得から認証まで一括代行。まずは無料相談。', 'Need a PSA Marriage Certificate for your visa or marriage registration? We retrieve it with DFA Apostille and ship it to you. No trip to the Philippines. Free consultation.')
  );

  const faqs = [
    {
      q: t('PSA婚姻証明書とはどのような書類ですか？', 'What is a PSA Marriage Certificate?'),
      a: t('PSA婚姻証明書（PSA Marriage Certificate）は、フィリピン統計局（PSA）が発行する婚姻の公式記録です。婚姻した日時・場所・両者の情報が記載されており、フィリピン国内で法的に婚姻が成立したことを証明します。日本での国際結婚報告届・配偶者ビザ申請などで必要になります。', 'The PSA Marriage Certificate is an official marriage record issued by the Philippine Statistics Authority (PSA). It documents the date, location, and details of both parties, certifying the marriage was legally established in the Philippines. It is required for US CR-1/IR-1 spousal immigrant visa NVC submissions and is also relevant when a previously married Filipino applies for a K-1 visa.'),
    },
    {
      q: t('PSA婚姻証明書はいつ取得できますか？', 'When can I obtain a PSA Marriage Certificate?'),
      a: t('フィリピンの地方市役所（Local Civil Registry）で婚姻が登録された後、PSAのデータベースに記録されるまで通常3〜6ヶ月かかります。PSAへの登録が完了してからPSA婚姻証明書の申請・取得が可能になります。', 'After the marriage is registered at the Philippine Local Civil Registry, it typically takes 3–6 months for the record to appear in the PSA database. Once registration is complete, you can apply for and obtain the PSA Marriage Certificate.'),
    },
    {
      q: t('日本の婚姻届提出後にPSA婚姻証明書は必要ですか？', 'Is a PSA Marriage Certificate required for the CR-1/IR-1 or K-1 visa?'),
      a: t('「日本先行婚姻」の場合、日本での婚姻届が受理されたら、次にフィリピン大使館で「婚姻の報告的届出（Report of Marriage）」を行います。この際にPSA婚姻証明書は不要で、日本の戸籍謄本等を使います。ただし、配偶者ビザ申請では必要になる場合があります。', 'For the CR-1/IR-1 spousal immigrant visa: yes, the PSA Marriage Certificate is required for NVC document submission and must have DFA Apostille. For the K-1 fiancé visa: if the Filipino applicant was previously married and divorced/annulled, a PSA Marriage Certificate from the prior marriage (plus proof of dissolution) may be required. For first-time unmarried K-1 applicants, a CENOMAR is typically sufficient.'),
    },
    {
      q: t('PSA婚姻証明書の有効期限はありますか？', 'Does the PSA Marriage Certificate have an expiration date?'),
      a: t('法的な有効期限はありませんが、提出先の機関（入管・大使館など）が「発行から6ヶ月以内」を求める場合があります。使用予定日から逆算して取得することをおすすめします。', 'There is no legal expiration date, but submitting institutions (immigration, embassy, etc.) may require documents issued within 6 months. We recommend obtaining it by calculating backward from your intended date of use.'),
    },
    {
      q: t('フィリピン先行婚姻でPSA婚姻証明書が届くまでの間、何もできませんか？', 'Can I start the CR-1/IR-1 process while waiting for the PSA Marriage Certificate?'),
      a: t('PSA婚姻証明書の発行（3〜6ヶ月）を待つ間、日本での婚姻届提出はできません。ただし、配偶者ビザの申請準備（NBI Clearanceの取得など）は並行して進めることができます。スケジュールを見通して準備しましょう。', 'Yes. The US citizen petitioner can file Form I-130 with USCIS immediately after the marriage. You do not need the PSA Marriage Certificate at the I-130 stage. However, it will be required later at the NVC document submission stage, so order it as soon as possible — PSA registration takes 3–6 months after the marriage at the Local Civil Registry. Use that time to also obtain NBI Clearance and PSA Birth Certificate.'),
    },
    {
      q: t('PSA婚姻証明書はどこで申請できますか？', 'Where can I apply for a PSA Marriage Certificate?'),
      a: t('PSA Helpline（PSAHelpline.com）でオンライン申請できます。フィリピン国内ではPSAのサービスセンターや郵便局（PhilPost）でも申請が可能です。日本から自分で申請する場合は国際配送に時間がかかります。代行サービスを利用すると、書類の取得状況の確認から発送まで日本語でサポートします。', 'You can apply online at PSA Helpline (PSAHelpline.com). Within the Philippines, you can also apply at PSA service centers or PhilPost offices. When applying from the USA, international shipping takes time. Our retrieval service handles everything in the Philippines — from PSA application to DFA Apostille — and ships directly to your US address via DHL.'),
    },
    {
      q: t('PSA婚姻証明書を複数部取得することはできますか？', 'Can I obtain multiple copies of the PSA Marriage Certificate?'),
      a: t('はい、PSA婚姻証明書は複数部の申請が可能です。配偶者ビザ申請・大使館提出・日本の市区町村役場提出など、複数の手続きで必要になることがあります。必要部数を事前に把握した上でまとめて申請することをおすすめします。', 'Yes, multiple copies can be requested at once. For the CR-1/IR-1 process, you may need one for NVC submission, one for the embassy interview, and one to keep. We recommend ordering at least 2–3 copies with DFA Apostille to avoid delays from re-ordering later.'),
    },
    {
      q: t('フィリピンでの婚姻が無効・取り消しになった場合、PSA婚姻証明書はどうなりますか？', 'What happens to the PSA Marriage Certificate if the marriage in the Philippines is annulled?'),
      a: t('フィリピンではアニュルメント（婚姻無効・取り消し）が裁判所で認められると、PSAにその記録が登録されます。その後に改めてCENOMARを取得すると「独身」として発行されます。詳しい手続きについてはご相談ください。', 'In the Philippines, when an annulment is recognized by the court, the record is registered with the PSA. A subsequent CENOMAR will then be issued as "single." Please contact us for detailed procedures.'),
    },
    {
      q: t('PSA婚姻証明書に記載される情報はどのような内容ですか？', 'What information is included in the PSA Marriage Certificate?'),
      a: t('PSA婚姻証明書（Marriage Certificate）には、①夫・妻それぞれの氏名・生年月日・出生地・国籍・宗教 ②婚姻日 ③婚姻場所（市・州・教会/市役所名） ④立会人の氏名 ⑤証人（ニナン・ニナン）の氏名 ⑥執行者（神父・牧師・市長等）の氏名・署名 ⑦地方市役所の登録番号・登録日が記載されています。すべて英語で記載されます。', 'The PSA Marriage Certificate includes: ① Name, date and place of birth, nationality, and religion of husband and wife; ② Marriage date; ③ Marriage location (city, province, church/municipal office); ④ Names of witnesses; ⑤ Names of sponsors (Ninong/Ninang); ⑥ Name and signature of officiant (priest, pastor, mayor, etc.); ⑦ Local civil registry number and registration date. All entries are in English.'),
    },
    {
      q: t('地方市役所（LCR）に登録されたが、PSAに反映されるまでの状況を確認する方法はありますか？', 'Is there a way to check the registration status before it appears in the PSA database?'),
      a: t('PSAのオンラインサービス（PSAHelpline.com）で確認申請をすることで、PSAのデータベースに婚姻記録が登録されているか確認できます。「NO RECORD FOUND」と返ってきた場合は、まだPSAへの登録が完了していない状態です。地方市役所での婚姻から3〜6ヶ月を目安に再度確認してください。当センターでも登録状況の確認を代行しています。', 'You can confirm whether the marriage record is registered in the PSA database by submitting a verification request through the PSA online service (PSAHelpline.com). If "NO RECORD FOUND" is returned, registration with the PSA is not yet complete. Check again approximately 3–6 months after the local civil registry marriage. Our center also offers proxy status verification.'),
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
              { '@type': 'ListItem', position: 2, name: 'PSA婚姻証明書ガイド', item: 'https://ph-document.com/ja/psa-kekkon-shomeisho/' },
            ]
          : [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ph-document.com/en/' },
              { '@type': 'ListItem', position: 2, name: 'PSA Marriage Certificate Guide', item: 'https://ph-document.com/en/psa-marriage-certificate/' },
            ],
      },
      {
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': lang === 'ja' ? 'https://ph-document.com/ja/psa-kekkon-shomeisho/' : 'https://ph-document.com/en/psa-marriage-certificate/',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2'],
          },
        },
        headline: t(`フィリピンPSA婚姻証明書の取得方法｜国際結婚・配偶者ビザで必要な理由【${SEO_YEAR_MONTH_JA}】`, `How to Obtain a Philippine PSA Marriage Certificate | Why It's Required for International Marriage & Spouse Visa [${SEO_YEAR_MONTH_EN}]`),
        description: t('PSA婚姻証明書（フィリピン結婚証明書）の取得方法・必要な場面・費用・期間を解説。フィリピン先行婚姻後の報告手続きに必要な書類をガイド。', 'A guide on how to obtain a PSA Marriage Certificate (Philippine marriage certificate), when it is required, costs, and timeframes. Guides you through documents needed after a Philippines-first marriage.'),
        image: 'https://ph-document.com/og-image.png',
        url: lang === 'ja' ? 'https://ph-document.com/ja/psa-kekkon-shomeisho/' : 'https://ph-document.com/en/psa-marriage-certificate/',
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
          'https://psa.gov.ph',
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

  const tocItems = t(
    'PSA婚姻証明書とは,必要になる場面,基本情報,取得方法,日本先行 vs フィリピン先行での違い,よくあるトラブル,よくある質問（FAQ）,お問い合わせ',
    'What Is the PSA Marriage Certificate,When Is It Required,Basic Information,How to Obtain,CR-1/IR-1 vs K-1 Usage,Common Issues,FAQ,Contact'
  ).split(',');

  const useCases = [
    { title: t('日本の市区町村役場への婚姻届（フィリピン先行婚姻の場合）', 'CR-1/IR-1 Spousal Immigrant Visa — NVC Document Submission'), desc: t('フィリピンで先に婚姻手続きをした場合、日本への「報告的届出」にPSA婚姻証明書が必要です。', 'The PSA Marriage Certificate (with DFA Apostille) is required by the National Visa Center (NVC) as proof of the marriage for the CR-1/IR-1 immigrant visa process.') },
    { title: t('配偶者ビザ（在留資格）の申請', 'US Embassy Interview — CR-1/IR-1 Visa'), desc: t('日本の入管に配偶者ビザを申請する際、婚姻の証明としてPSA婚姻証明書を求められます。', 'The PSA Marriage Certificate is also required at the US Embassy Manila visa interview as part of the immigrant visa package.') },
    { title: t('フィリピン大使館での婚姻報告（日本先行婚姻の場合）', 'K-1 Fiancé Visa — Prior Marriage History'), desc: t('日本で婚姻届が受理された後、フィリピン大使館への「Report of Marriage」手続きで使用する場合があります（日本の戸籍謄本で代替可能なことも）。', 'If the Filipino K-1 applicant was previously married, the PSA Marriage Certificate from the prior marriage (plus proof of annulment or death certificate) must be submitted at the embassy interview.') },
    { title: t('子どもの出生登録・国籍確認', 'Child\'s US Citizenship or Permanent Residence'), desc: t('両親の婚姻を証明する書類として使用します。', 'Used to prove the parents\' marriage when filing for a child\'s US citizenship documentation or immigrant visa.') },
  ];

  const basicInfo = [
    [t('発行機関', 'Issuing Authority'), t('フィリピン統計局（PSA）', 'Philippine Statistics Authority (PSA)')],
    [t('有効期限', 'Validity'), t('法的な期限なし（6ヶ月以内を求められることが多い）', 'No legal expiration (often required within 6 months)')],
    [t('PSAへの登録', 'PSA Registration'), t('地方市役所での婚姻登録から約3〜6ヶ月後に利用可能', 'Available approximately 3–6 months after local civil registry marriage registration')],
    [t('申請費用', 'Application Fee'), t('約365ペソ（約900円）＋配送料', 'Approx. ₱365 (approx. ¥900) + shipping')],
    [t('取得期間（代行）', 'Procurement Period (proxy)'), t('約4〜8週間（登録状況による）', 'Approx. 4–8 weeks (depends on registration status)')],
    [t('言語', 'Language'), t('英語', 'English')],
  ];

  const obtainMethods = [
    {
      label: t('方法①', 'Option ①'),
      title: t('PSAオンライン申請（自分で）', 'PSA Online Application (yourself)'),
      items: [
        t('PSAHelpline.comで申請', 'Apply at PSAHelpline.com'),
        t('クレジットカード/PayPal決済', 'Credit card/PayPal payment'),
        t('国際郵便で日本に届く', 'Delivered to Japan by international mail'),
      ],
      pros: t('コストが安い', 'Lower cost'),
      cons: t('英語対応必須。配送に時間がかかる', 'English required. Delivery takes time.'),
      color: 'border-gray-200',
    },
    {
      label: t('方法② おすすめ', 'Option ② Recommended'),
      title: t('代行サービスに依頼', 'Use a Proxy Service'),
      items: [
        t('日本語のみでやり取り完結', 'All communication in English via email'),
        t('書類確認から郵送まで一括サポート', 'One-stop support from document verification to mailing'),
        t('フィリピン先行婚姻後の登録状況確認も対応', 'Also handles registration status verification after Philippines-first marriage'),
      ],
      pros: t('手間ゼロ。日本語サポートあり', 'Zero hassle. English support. Ships to USA.'),
      cons: t('代行手数料がかかる', 'Proxy service fee required'),
      color: 'border-primary',
    },
  ];

  const comparisonRows = [
    [t('日本先行婚姻', 'CR-1/IR-1 Visa (married in Philippines)'), t('配偶者ビザ申請・大使館Report of Marriage時に必要な場合あり', 'Required at NVC document stage and US Embassy interview. Must have DFA Apostille.'), t('婚姻届受理後（数ヶ月以内）', '3–6 months after marriage (PSA registration time)')],
    [t('フィリピン先行婚姻', 'K-1 Visa (fiancé — prior marriage only)'), t('日本への婚姻届（報告的届出）に必須', 'Only required if the Filipino applicant was previously married. Proof of dissolution also needed.'), t('フィリピン婚姻から3〜6ヶ月後以降', 'Before the embassy interview date')],
  ];

  const contentRows = [
    [t('夫・妻の氏名（フルネーム）', 'Husband\'s & Wife\'s Full Name'), t('パスポートの氏名と完全に一致しているか確認', 'Verify exact match with passport names')],
    [t('生年月日・出生地', 'Date & Place of Birth'), t('出生証明書（PSA Birth Certificate）と一致しているか', 'Matches PSA Birth Certificate')],
    [t('婚姻日・婚姻場所', 'Marriage Date & Location'), t('実際の婚姻日と場所が正確に記録されているか', 'Accurately recorded actual marriage date and location')],
    [t('登録番号・登録日', 'Registration Number & Date'), t('PSAのシリアルナンバーが付いているか（SECPA確認）', 'PSA serial number present (check SECPA)')],
    [t('証人・執行者の情報', 'Witness & Officiant Information'), t('婚姻を証明する立会人・執行者の情報が記載されているか', 'Witness and officiant information included')],
  ];

  const arrivalCheckItems = [
    { check: t('夫・妻の氏名スペルがパスポートと完全に一致しているか', 'Husband\'s and wife\'s name spelling exactly matches passports'), note: t('特にミドルネームの有無を確認', 'Check especially for middle name presence/absence') },
    { check: t('婚姻日・婚姻場所が実際と一致しているか', 'Marriage date and location match actual records'), note: t('年月日の順番・場所名の英語表記を確認', 'Check date order and English spelling of location') },
    { check: t('PSA発行のSECPA（セキュリティペーパー）で発行されているか', 'Issued on PSA SECPA (security paper)'), note: t('PSAの透かし・公印が確認できるか', 'PSA watermark and official seal visible') },
    { check: t('発行日が十分に新しいか（6ヶ月以内）', 'Issued recently enough (within 6 months)'), note: t('提出先によって異なる。必要なら再取得', 'Varies by submitting institution. Re-obtain if needed.') },
    { check: t('日本語翻訳が必要かどうか確認する', 'Check whether a certified English translation is required'), note: t('日本の役場・入管に提出する場合は必要', 'PSA documents are already in English, but USCIS/NVC may require a certified translation if any entry is unclear') },
    { check: t('DFAアポスティーユが必要かどうか確認する', 'Confirm DFA Apostille is attached'), note: t('配偶者ビザ申請等では求められることがある', 'Required for NVC submission. Always include Apostille for CR-1/IR-1 applications.') },
  ];

  const costItems = [
    { item: t('PSA婚姻証明書 取得代行', 'PSA Marriage Certificate Retrieval'), cost: t('約40,000円〜', 'From US$259'), note: t('PSA手数料・国際郵便込み', 'Includes PSA fee and DHL shipping to USA') },
    { item: t('PSA婚姻証明書 + DFAアポスティーユ セット', 'PSA Marriage Certificate + DFA Apostille'), cost: t('約60,000円〜', 'From US$389'), note: t('DFA手数料・認証費用込み', 'Includes DFA authentication and DHL shipping') },
    { item: t('PSA登録状況の確認（事前照会）', 'PSA Registration Status Verification'), cost: t('別途お見積もり', 'Quote on request'), note: t('フィリピン先行婚姻後の登録確認', 'Check if your marriage record is in the PSA database') },
  ];

  const troubleItems = [
    { title: t('PSAへの登録が遅れる', 'Delayed Registration with PSA'), body: t('フィリピンの市役所での婚姻登録後、PSAへの反映に3〜6ヶ月以上かかることがあります。「NO RECORD FOUND」と返ってきた場合、まだPSAに登録されていない可能性があります。時間をおいて再申請してください。', 'After marriage registration at the Philippine municipal office, it can take 3–6 months or more to appear in the PSA database. If "NO RECORD FOUND" is returned, registration may not yet be complete. Please re-apply after some time.') },
    { title: t('書類の名前スペルが一致しない', 'Name Spelling Does Not Match Across Documents'), body: t('婚姻証明書とパスポート・出生証明書で名前のスペルが異なると、後の手続きで問題になります。婚姻前に書類間の整合性を確認しましょう。', 'If name spellings differ between the marriage certificate and the passport or birth certificate, it will cause problems in later procedures. Verify consistency across documents before marriage.') },
    { title: t('市役所登録の遅延', 'Delayed Municipal Office Registration'), body: t('フィリピン地方市役所での婚姻登録自体が遅れ、PSAへのデータ送付が後回しになるケースがあります。特に地方の市役所で婚姻した場合は時間がかかる傾向があります。', 'The marriage registration at the Philippine local civil registry itself may be delayed, causing data submission to PSA to be postponed. This tends to take longer especially for marriages at rural municipal offices.') },
  ];

  const relatedLinks = [
    { to: t('/ja/cenomar', '/cenomar'), title: t('CENOMARガイド', 'CENOMAR Guide'), desc: t('独身証明書の取得方法・費用・期間', 'What is CENOMAR, requirements & how to get it') },
    { to: t('/ja/psa-shussei-shomeisho', '/psa-birth-certificate'), title: t('PSA出生証明書ガイド', 'PSA Birth Certificate Guide'), desc: t('出生証明書の取得方法と注意点', 'Requirements, cost PHP 365 & how to obtain') },
    { to: t('/ja/pricing', '/en/pricing'), title: t('料金プラン', 'Pricing Plans'), desc: t('PSA書類取得代行の費用・パッケージ一覧', 'PSA + Apostille + DHL shipping packages from $199') },
    { to: t('/ja/haigusha-visa', '/k1-visa-documents'), title: t('配偶者ビザ書類ガイド', 'K-1 / CR-1 Visa Documents Checklist'), desc: t('配偶者ビザに必要なフィリピン書類一覧', 'All Philippine documents required for K-1 & CR-1 visa') },
  ];

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        <nav className="text-xs text-gray-400 mb-6" aria-label={t('パンくずリスト', 'Breadcrumb')}>
          <Link to="/" className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('PSA婚姻証明書ガイド', 'PSA Marriage Certificate Guide')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {lang === 'ja' ? (
            <>フィリピンPSA婚姻証明書の取得方法<br className="hidden md:block" />国際結婚・配偶者ビザで必要な理由【{SEO_YEAR_MONTH_JA}最新】</>
          ) : (
            <>How to Obtain a Philippine PSA Marriage Certificate<br className="hidden md:block" />{' '}Required for US CR-1/IR-1 Spouse Visa (NVC) [{SEO_YEAR_MONTH_EN}]</>
          )}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t(`最終更新：${SEO_LAST_UPDATED_JA} ｜ 株式会社IGRS`, `Last updated: ${SEO_LAST_UPDATED_EN} | IGRS Inc.`)}</p>

        {/* TOC */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('目次', 'Table of Contents')}</p>
          <ol className="space-y-1 text-sm text-secondary">
            {tocItems.map((item, i) => (
              <li key={i}><a href={`#ks-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="ks-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">1. {t('PSA婚姻証明書とは', 'What Is the PSA Marriage Certificate?')}</h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            {lang === 'ja' ? (
              <><strong>PSA婚姻証明書（PSA Marriage Certificate）</strong>は、フィリピン統計局（PSA）が発行する<strong>婚姻の公式記録</strong>です。フィリピンの地方市役所（Local Civil Registry）に登録された婚姻情報が、PSAのデータベースに反映されたものです。</>
            ) : (
              <>The <strong>PSA Marriage Certificate</strong> is an <strong>official marriage record</strong> issued by the Philippine Statistics Authority (PSA). It reflects marriage information registered at the Philippine Local Civil Registry in the PSA database.</>
            )}
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            {t('CENOMARが「独身」を証明するのに対し、PSA婚姻証明書は「フィリピンで法的に婚姻が成立した」ことを証明します。フィリピン先行婚姻後の日本への婚姻届報告や、配偶者ビザ申請で使用します。', 'While the CENOMAR proves "single" status, the PSA Marriage Certificate proves a marriage was legally established in the Philippines. It is a core document for the US CR-1/IR-1 spousal immigrant visa NVC submission, and is also needed for K-1 applicants with prior marriage history.')}
          </p>
        </section>

        {/* Section 2 */}
        <section id="ks-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">2. {t('必要になる場面', 'When Is It Required?')}</h2>
          <div className="grid gap-3">
            {useCases.map((item, i) => (
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
        <section id="ks-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">3. {t('基本情報', 'Basic Information')}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('項目', 'Item')}</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">{t('内容', 'Details')}</th>
                </tr>
              </thead>
              <tbody>
                {basicInfo.map(([k, v], i) => (
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
        <section id="ks-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">4. {t('取得方法', 'How to Obtain')}</h2>
          <div className="grid gap-4">
            {obtainMethods.map((m, i) => (
              <div key={i} className={`bg-white border-2 ${m.color} rounded-xl p-5 shadow-card`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{m.label}</span>
                  <h3 className="font-bold text-secondary">{m.title}</h3>
                </div>
                <ul className="space-y-1 mb-3">
                  {m.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-700 flex gap-2"><span className="text-primary flex-shrink-0">▸</span>{item}</li>
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

        {/* Section 5 */}
        <section id="ks-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">5. {t('日本先行 vs フィリピン先行での違い', 'CR-1/IR-1 vs K-1: When You Need a PSA Marriage Certificate')}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('手続き', 'Procedure')}</th>
                  <th className="px-4 py-3 text-left font-semibold">{t('PSA婚姻証明書の役割', 'Role of PSA Marriage Certificate')}</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">{t('必要時期', 'When Needed')}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([k, v, timing], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100">{k}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{v}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs border-b border-gray-100">{timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            {t('※ 詳しい手順は', '※ For detailed procedures, see the ')}
            <Link to={t('/ja/kokusai-kekkon-guide/', '/cr1-visa-documents/')} className="text-secondary underline">{t('フィリピン国際結婚ガイド', 'CR-1/IR-1 Visa Documents Guide')}</Link>
            {t('をご覧ください。', '.')}
          </div>
        </section>

        {/* Content section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">{t('PSA婚姻証明書に記載される内容', 'Contents of the PSA Marriage Certificate')}</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            {t('PSA婚姻証明書（Marriage Certificate）にはどのような情報が記載されるかを事前に確認しておきましょう。', 'Let\'s check in advance what information is included in the PSA Marriage Certificate.')}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('記載項目', 'Field')}</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">{t('確認ポイント', 'Verification Point')}</th>
                </tr>
              </thead>
              <tbody>
                {contentRows.map(([item, point], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100">{item}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100 text-xs">{point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
            <AlertTriangle className="w-4 h-4 inline mr-2" />
            {t('記載内容に誤りがあった場合は、地方市役所（LCR）への訂正申請が必要です。氏名のスペルミスは後の手続きに影響するため、受け取り時に必ず確認してください。', 'If there are errors in the recorded content, a correction application to the Local Civil Registry (LCR) is required. Name spelling errors affect later procedures, so always verify upon receipt.')}
          </div>
        </section>

        {/* Arrival checklist */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">{t('PSA婚姻証明書が届いたら確認すること', 'What to Check When Your PSA Marriage Certificate Arrives')}</h2>
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card">
            <p className="text-sm text-gray-700 mb-4">{t('書類が届いたら、日本への婚姻届・ビザ申請に使用する前に以下をチェックしてください。', 'When documents arrive, verify the following before submitting to NVC or the US Embassy.')}</p>
            <div className="space-y-3">
              {arrivalCheckItems.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-secondary font-medium">{item.check}</p>
                    <p className="text-xs text-gray-500">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">{t('代行費用の目安', 'Proxy Service Cost Estimate')}</h2>
          <div className="grid gap-3">
            {costItems.map((row, i) => (
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

        {/* Section 6 Trouble */}
        <section id="ks-6" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">6. {t('よくあるトラブル', 'Common Issues')}</h2>
          <div className="space-y-4">
            {troubleItems.map((item, i) => (
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

        {/* CTA */}
        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">{t('PSA婚姻証明書、まるごとお任せ', 'Too Much Hassle? Let Us Handle It')}</h2>
          <p className="text-sm text-gray-300 mb-5">{t('PSAへの登録状況確認から取得・郵送まで、日本語でサポートします。', 'PSA Marriage Certificate + DFA Apostille + DHL to USA — all-in-one from $199. USCIS & NVC compliant.')}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to={t('/ja/pricing', '/en/pricing')} className="inline-block bg-white text-secondary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm" onClick={() => trackEvent('cta_click', { location: 'psa_marriage_certificate', type: 'pricing' })}>
              {t('料金プランを見る', 'View Pricing Plans')}
            </Link>
            <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors text-sm" onClick={() => trackEvent('cta_click', { location: 'psa_marriage_certificate', type: 'consultation' })}>
              {t('無料相談する', 'Free Consultation')}
            </a>
          </div>
        </div>

        {/* FAQ */}
        <section id="ks-7" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">7. {t('よくある質問（FAQ）', 'FAQ')}</h2>
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

        {/* Related */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('関連ガイド', 'Related Guides')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedLinks.map((link) => (
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
            <p className="text-sm text-gray-500 mb-6">{t('PSA婚姻証明書の取得代行についてお気軽にご相談ください。', 'Feel free to contact us about proxy procurement of PSA Marriage Certificates.')}</p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value={lang === 'ja' ? '【PSA婚姻証明書ガイドからのお問い合わせ】' : '[PSA Marriage Certificate Guide Inquiry - EN]'} />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/kekkon-shomeisho/" />
              <div>
                <label htmlFor="ks-name" className="block text-xs text-gray-600 mb-1">{t('お名前', 'Name')}</label>
                <input id="ks-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('山田 太郎', 'John Smith')} />
              </div>
              <div>
                <label htmlFor="ks-email" className="block text-xs text-gray-600 mb-1">{t('メールアドレス', 'Email Address')}</label>
                <input id="ks-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="ks-message" className="block text-xs text-gray-600 mb-1">{t('ご相談内容', 'Message')}</label>
                <textarea id="ks-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('PSA婚姻証明書の取得についてお気軽にどうぞ。', 'Please feel free to ask about PSA Marriage Certificate procurement.')} />
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3">
                <Send className="w-5 h-5" />{t('送信する', 'Send')}
              </button>
            </form>
            <a href="mailto:igrs20200601@gmail.com" className="mt-3 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />{t('メールで直接送る', 'Send directly by email')}: igrs20200601@gmail.com
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
