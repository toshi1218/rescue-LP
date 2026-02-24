import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, AlertTriangle, FileText, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function PsaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  const faqs = [
    {
      q: t('PSA出生証明書とNSO出生証明書は違いますか？', 'Is PSA Birth Certificate different from NSO Birth Certificate?'),
      a: t(
        '同じ書類です。NSO（国家統計局）は2014年にPSA（フィリピン統計局）に統合されました。古いNSOの書類でも有効な場合がありますが、最新のPSAが発行したものを用意するのが確実です。',
        'They are the same document. NSO (National Statistics Office) was merged into PSA (Philippine Statistics Authority) in 2014. Older NSO documents may still be valid, but it is safest to prepare the latest PSA-issued version.'
      ),
    },
    {
      q: t('PSA出生証明書に有効期限はありますか？', 'Does PSA Birth Certificate have an expiration date?'),
      a: t(
        '法的な有効期限はありませんが、多くの機関（日本の役所・大使館・入管）は「発行から6ヶ月以内」の書類を求めます。使用予定日の2〜3ヶ月前に取得することをおすすめします。',
        'There is no legal expiration date, but most institutions (Japanese municipal offices, embassies, immigration) require a document issued within 6 months. We recommend obtaining it 2–3 months before your planned use date.'
      ),
    },
    {
      q: t('海外生まれのフィリピン人でも取得できますか？', 'Can overseas-born Filipinos obtain it?'),
      a: t(
        'はい。フィリピン国籍を持つ方であれば、海外で生まれた場合でもPSAに出生登録がされていれば取得できます。ただし、海外生まれの場合は手続きが複雑になる場合があります。まずはご相談ください。',
        'Yes. Any Philippine national can obtain it, even if born overseas, as long as the birth is registered with PSA. However, the process may be more complex for those born overseas. Please consult us first.'
      ),
    },
    {
      q: t('「NO RECORD FOUND」と返ってきた場合はどうすればよいですか？', 'What should I do if I get "NO RECORD FOUND"?'),
      a: t(
        'PSAのデータベースに記録がない状態です。出生登録が市役所レベルでのみ行われ、PSAへの提出が遅れているケースや、登録自体がされていないケースがあります。この場合は地方市役所（Local Civil Registry）への照会が必要です。',
        'This means there is no record in the PSA database. This can happen when birth registration was only done at the municipal level and submission to PSA was delayed, or when registration was not done at all. In this case, inquiry to the Local Civil Registry (LCR) is required.'
      ),
    },
    {
      q: t('日本語翻訳は必要ですか？', 'Is a Japanese translation required?'),
      a: t(
        '日本の市区町村役場に提出する場合、英語のPSA書類には日本語訳の添付が求められます（翻訳者の署名が必要）。大使館提出の場合は不要なことが多いです。提出先に事前確認されることをおすすめします。',
        'When submitting to Japanese municipal offices, a Japanese translation of the English PSA document is required (translator\'s signature needed). For embassy submissions, it is often not required. We recommend confirming with the destination in advance.'
      ),
    },
    {
      q: t('PSA出生証明書の取得代行にかかる費用はどのくらいですか？', 'How much does proxy acquisition of PSA Birth Certificate cost?'),
      a: t(
        '代行費用はPSA手数料・国際郵便代込みで約4万円〜が目安です。DFAアポスティーユ認証もセットで依頼できます。詳細はお問い合わせください。',
        'The proxy service fee, including PSA fee and international shipping, is approximately ¥40,000 or more. DFA Apostille authentication can also be requested as a set. Please contact us for details.'
      ),
    },
    {
      q: t('複数部数まとめて取得できますか？', 'Can I obtain multiple copies at once?'),
      a: t(
        'はい、PSA出生証明書は複数部の同時申請が可能です。婚姻届提出用・入管提出用など複数枚が必要な場合はご相談ください。まとめて代行することでスムーズに取得できます。',
        'Yes, multiple copies of PSA Birth Certificate can be applied for simultaneously. If you need multiple copies for marriage registration, immigration, etc., please consult us. Bundling them together makes the process smoother.'
      ),
    },
    {
      q: t('親の情報が誤っている場合、訂正はできますか？', 'Can errors in parent information be corrected?'),
      a: t(
        '出生証明書に記載された親の氏名・生年月日等の誤りを訂正するには、フィリピンの地方市役所（LCR）への申請が必要です。場合によっては裁判所の命令が必要になることもあります。複雑なケースは早めにご相談ください。',
        'To correct errors in parent names, dates of birth, etc. recorded on the birth certificate, an application to the Philippine Local Civil Registry (LCR) is required. In some cases, a court order may be necessary. For complex cases, please consult us early.'
      ),
    },
    {
      q: t('PSA出生証明書の内容はどのような情報が記載されていますか？', 'What information is included on PSA Birth Certificate?'),
      a: t(
        'PSA出生証明書（Birth Certificate）には、①氏名（フルネーム）②生年月日・出生時刻 ③出生地（市・州・病院名）④性別 ⑤父の氏名・国籍 ⑥母の旧姓・国籍 ⑦登録番号・登録日・登録機関が記載されています。書類はすべて英語で記載されており、日本の機関に提出する際は日本語翻訳が必要なことがあります。',
        'PSA Birth Certificate includes: ① Full name ② Date and time of birth ③ Place of birth (city, province, hospital name) ④ Sex ⑤ Father\'s name and nationality ⑥ Mother\'s maiden name and nationality ⑦ Registration number, registration date, and registering authority. The document is entirely in English, so a Japanese translation may be required when submitting to Japanese institutions.'
      ),
    },
    {
      q: t('「SECPA（Security Paper）」とはPSAのどの書類ですか？', 'What is "SECPA (Security Paper)" in PSA documents?'),
      a: t(
        'PSAが発行する出生証明書・婚姻証明書・死亡証明書は、セキュリティペーパー（SECPA）と呼ばれる専用の用紙に印刷されて発行されます。このSECPAが付いたものがPSA発行の公式書類であり、コピーや白紙への再印刷は公式書類として認められません。代行取得の場合は必ずSECPA付きの書類をお届けします。',
        'Birth certificates, marriage certificates, and death certificates issued by PSA are printed on special paper called Security Paper (SECPA). Only documents with SECPA are official PSA-issued documents; copies or reprints on plain paper are not recognized as official documents. When obtaining through our proxy service, we always deliver documents with SECPA.'
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
          { '@type': 'ListItem', position: 2, name: 'PSA出生証明書ガイド', item: 'https://ph-document.com/psa-shussei-shomeisho/' },
        ],
      },
      {
        '@type': 'Article',
        headline: 'フィリピンPSA出生証明書の取得方法｜国際結婚・ビザ申請で必要な理由【2026年】',
        description: 'PSA出生証明書（旧NSO）の取得方法を自分で・大使館・代行の3パターンで解説。費用・期間・NO RECORD FOUNDのトラブル対処まで徹底ガイド。',
        url: 'https://ph-document.com/psa-shussei-shomeisho/',
        inLanguage: 'ja',
        dateModified: '2026-02-22',
        author: { '@type': 'Organization', name: '株式会社IGRS' },
        publisher: { '@type': 'Organization', name: 'フィリピン書類取得代行センター' },
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
          <span className="text-gray-600">{t('PSA出生証明書ガイド', 'PSA Birth Certificate Guide')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {lang === 'ja' ? (
            <>フィリピンPSA出生証明書の取得方法｜<br className="hidden md:block" />国際結婚・ビザ申請で必要な理由【2026年最新】</>
          ) : (
            <>How to Obtain Philippine PSA Birth Certificate |<br className="hidden md:block" />Why It's Needed for International Marriage & Visa [2026 Guide]</>
          )}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t('最終更新：2026年2月22日 ｜ 株式会社IGRS', 'Last updated: February 22, 2026 | IGRS Inc.')}</p>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('目次', 'Table of Contents')}</p>
          <ol className="space-y-1 text-sm text-secondary">
            {[
              t('PSA出生証明書とは', 'What is PSA Birth Certificate'),
              t('必要になる場面', 'When It Is Needed'),
              t('基本情報', 'Basic Information'),
              t('取得方法3パターン', '3 Ways to Obtain'),
              t('よくあるトラブル', 'Common Issues'),
              t('よくある質問（FAQ）', 'FAQ'),
              t('お問い合わせ', 'Contact Us'),
            ].map((item, i) => (
              <li key={i}><a href={`#ps-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="ps-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('1. PSA出生証明書とは', '1. What is PSA Birth Certificate')}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            {lang === 'ja' ? (
              <><strong>PSA出生証明書（PSA Birth Certificate）</strong>は、フィリピン統計局（PSA）が発行する出生の公式記録です。氏名・生年月日・出生地・両親の情報が記載されており、フィリピン人の身分を証明する最も基本的な公文書です。</>
            ) : (
              <><strong>PSA Birth Certificate</strong> is the official birth record issued by the Philippine Statistics Authority (PSA). It contains name, date of birth, place of birth, and parents' information, making it the most fundamental public document proving a Filipino's identity.</>
            )}
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            {t(
              '日本でいう「戸籍謄本」に相当するもので、国際結婚・ビザ申請・海外移住など、あらゆる手続きで提出を求められます。',
              'It is equivalent to the Japanese "family register (koseki tohon)" and is required for all procedures such as international marriage, visa applications, and overseas migration.'
            )}
          </p>
        </section>

        {/* Section 2 */}
        <section id="ps-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('2. 必要になる場面', '2. When It Is Needed')}
          </h2>
          <div className="grid gap-3">
            {[
              {
                title: t('日本での国際結婚手続き', 'International Marriage Procedures in Japan'),
                desc: t('市区町村役場への婚姻届提出時に、フィリピン人配偶者の出生証明書が必要です。', 'The Philippine spouse\'s birth certificate is required when submitting a marriage registration at a Japanese municipal office.'),
              },
              {
                title: t('配偶者ビザの申請', 'Spouse Visa Application'),
                desc: t('日本の入管局（出入国在留管理庁）への配偶者ビザ申請書類として求められます。', 'Required as a document for spouse visa applications to the Japanese Immigration Services Agency.'),
              },
              {
                title: t('フィリピン大使館でのRPU（Report of Birth）', 'Philippine Embassy Report of Birth (RPU)'),
                desc: t('海外生まれのフィリピン人の子どもをPSAに登録する手続きに必要です。', 'Required for the procedure to register overseas-born Filipino children with PSA.'),
              },
              {
                title: t('パスポート申請・更新', 'Passport Application / Renewal'),
                desc: t('フィリピンのパスポート申請・更新時に本人確認書類として使用します。', 'Used as an identity document for Philippine passport applications and renewals.'),
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
        <section id="ps-3" className="mb-10">
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
                  [t('発行機関', 'Issuing Authority'), t('フィリピン統計局（PSA）', 'Philippine Statistics Authority (PSA)')],
                  [t('旧称', 'Former Name'), t('NSO出生証明書（同じ書類）', 'NSO Birth Certificate (same document)')],
                  [t('有効期限', 'Validity'), t('法的な期限なし（ただし6ヶ月以内のものを求められることが多い）', 'No legal expiration (but most institutions require one issued within 6 months)')],
                  [t('申請費用', 'Application Fee'), t('約365ペソ（約900円）＋配送料', 'Approx. 365 PHP (~$7 USD) + shipping')],
                  [t('取得期間（代行）', 'Acquisition Time (Proxy)'), t('約3〜6週間', 'Approximately 3–6 weeks')],
                  [t('言語', 'Language'), t('英語', 'English')],
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
        <section id="ps-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('4. 取得方法3パターン', '4. 3 Ways to Obtain')}
          </h2>
          <div className="grid gap-4">
            {[
              {
                label: t('方法①', 'Option ①'),
                title: t('PSAオンライン申請（自分で）', 'PSA Online Application (Self)'),
                items: [
                  t('PSAHelpline.comで申請', 'Apply at PSAHelpline.com'),
                  t('クレジットカード/PayPal決済', 'Pay by credit card or PayPal'),
                  t('国際郵便で日本に届く', 'Delivered to Japan by international mail'),
                ],
                pros: t('コストが安い', 'Lower cost'),
                cons: t('英語対応が必要。配送トラブルのリスクあり', 'English required. Risk of shipping issues'),
                color: 'border-gray-200',
              },
              {
                label: t('方法②', 'Option ②'),
                title: t('在日フィリピン大使館で申請', 'Apply at Philippine Embassy in Japan'),
                items: [
                  t('東京・大阪・名古屋の領事館で受付', 'Available at consulates in Tokyo, Osaka, Nagoya'),
                  t('予約が必要', 'Appointment required'),
                  t('現地に出向く必要あり', 'Must visit in person'),
                ],
                pros: t('比較的安価', 'Relatively inexpensive'),
                cons: t('平日のみ。予約が取りにくい場合あり', 'Weekdays only. Appointments may be hard to get'),
                color: 'border-gray-200',
              },
              {
                label: t('方法③ おすすめ', 'Option ③ Recommended'),
                title: t('代行サービスに依頼', 'Use a Proxy Service'),
                items: [
                  t('日本語のみでやり取り完結', 'Everything handled in English only'),
                  t('書類確認から郵送まで一括サポート', 'Full support from document check to mailing'),
                  t('不備によるトラブルリスクを最小化', 'Minimizes risk of issues due to document errors'),
                ],
                pros: t('手間ゼロ。日本語サポートあり', 'Zero hassle. English support available'),
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

        {/* 申請成功のポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('PSA出生証明書の申請を成功させるポイント', 'Key Points for a Successful PSA Birth Certificate Application')}
          </h2>
          <div className="space-y-4">
            {[
              {
                num: '01',
                title: t('取得前に名前のスペル・生年月日を確認する', 'Check Name Spelling and Date of Birth Before Applying'),
                body: t(
                  'PSA出生証明書に記載される氏名（英語表記）・生年月日が、パスポートや他の書類と一致しているか事前確認が重要です。不一致があると婚姻届・ビザ申請で問題になります。特にミドルネームの記載有無、ハイフン・スペースの違いに注意してください。',
                  'It is important to confirm in advance that the name (English spelling) and date of birth on the PSA Birth Certificate match the passport and other documents. Discrepancies can cause problems with marriage registration and visa applications. Pay special attention to the presence of middle names and differences in hyphens or spaces.'
                ),
              },
              {
                num: '02',
                title: t('使用目的・提出先の「有効期限」要件を確認する', 'Confirm the "Validity" Requirements of the Submission Destination'),
                body: t(
                  'PSA出生証明書自体に法的な有効期限はありませんが、提出先（日本の市区町村・入管・大使館）が「発行から6ヶ月以内」を求めることがあります。使用時期が決まったら逆算して取得してください。早めに取得しすぎると期限切れになる場合があります。',
                  'PSA Birth Certificate itself has no legal expiration date, but the submission destination (Japanese municipal office, immigration, embassy) may require one "issued within 6 months." Once your use date is determined, work backward to plan acquisition. Obtaining it too early may result in it expiring before use.'
                ),
              },
              {
                num: '03',
                title: t('「NO RECORD FOUND」への対処を知っておく', 'Know How to Handle "NO RECORD FOUND"'),
                body: t(
                  'PSAに出生記録がない場合（NO RECORD FOUND）、地方市役所（LCR）に出生登録がされていない可能性があります。この場合、遅延登録（Late Registration）の手続きが必要です。手続きには出生を証明できる書類（病院の記録、学校の書類など）が必要になります。複雑な場合は早めにご相談ください。',
                  'If there is no birth record in PSA (NO RECORD FOUND), the birth may not have been registered at the Local Civil Registry (LCR). In this case, a Late Registration procedure is required. Documentation proving the birth (hospital records, school documents, etc.) will be needed. For complex cases, please consult us early.'
                ),
              },
              {
                num: '04',
                title: t('DFAアポスティーユの必要性を確認する', 'Confirm Whether DFA Apostille Is Required'),
                body: t(
                  '日本の市区町村への婚姻届ではアポスティーユは不要なことが多いですが、配偶者ビザ申請や特定の大使館手続きで必要になる場合があります。提出先に事前確認し、必要な場合はPSA取得と同時にDFAアポスティーユもセットで依頼することをおすすめします。',
                  'Apostille is often not required for Japanese municipal marriage registration, but may be needed for spouse visa applications or specific embassy procedures. Confirm with the destination in advance. If needed, we recommend requesting DFA Apostille together with PSA acquisition.'
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

        {/* PSA書類到着後のチェックリスト */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('PSA書類が届いたら確認すること', 'What to Check When PSA Documents Arrive')}
          </h2>
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card">
            <p className="text-sm text-gray-700 mb-4">
              {t(
                'PSA出生証明書を受け取ったら、提出前に以下を必ず確認してください。',
                'When you receive your PSA Birth Certificate, always check the following before submission.'
              )}
            </p>
            <div className="space-y-3">
              {[
                { check: t('氏名（スペル）がパスポートと一致しているか', 'Name spelling matches the passport'), note: t('大文字小文字・ミドルネームを含め確認', 'Check including capitalization and middle name') },
                { check: t('生年月日が正しいか', 'Date of birth is correct'), note: t('日・月・年の順番に注意', 'Pay attention to day/month/year order') },
                { check: t('書類がSECPA（セキュリティペーパー）で発行されているか', 'Document is issued on SECPA (Security Paper)'), note: t('PSAの公印・透かしが入っているか確認', 'Check for PSA official seal and watermark') },
                { check: t('発行日付が新しいか（6ヶ月以内か）', 'Issue date is recent (within 6 months)'), note: t('提出先の要件を確認', 'Confirm the destination\'s requirements') },
                { check: t('親の氏名・国籍情報が正確か', 'Parent names and nationality information are accurate'), note: t('日本の婚姻届・ビザ申請で確認されることがある', 'May be checked during Japanese marriage registration or visa application') },
                { check: t('日本語翻訳が必要な場合は翻訳を用意する', 'Prepare a Japanese translation if required'), note: t('翻訳者の氏名・署名・翻訳日が必要', 'Translator\'s name, signature, and translation date are required') },
              ].map((item, i) => (
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

        {/* 代行費用目安 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('代行費用の目安', 'Estimated Proxy Service Fees')}
          </h2>
          <div className="grid gap-3">
            {[
              {
                item: t('PSA出生証明書 取得代行', 'PSA Birth Certificate Proxy Acquisition'),
                cost: t('約40,000円〜', 'From ¥40,000'),
                note: t('PSA手数料・国際郵便込み', 'Includes PSA fee & international shipping'),
              },
              {
                item: t('PSA出生証明書 + DFAアポスティーユ セット', 'PSA Birth Certificate + DFA Apostille Set'),
                cost: t('約60,000円〜', 'From ¥60,000'),
                note: t('DFA手数料・認証費用込み', 'Includes DFA fee & authentication cost'),
              },
              {
                item: t('複数部数（2枚目以降）', 'Multiple Copies (2nd copy onward)'),
                cost: t('1枚あたり+5,000円〜', '+¥5,000 per additional copy'),
                note: t('同時申請でまとめて対応可能', 'Can be handled together with simultaneous application'),
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
              '※ NO RECORD FOUNDや訂正が必要な場合は別途費用・期間がかかります。',
              '* Additional fees and time apply for NO RECORD FOUND cases or cases requiring corrections.'
            )}
          </p>
        </section>

        {/* Section 5 */}
        <section id="ps-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('5. よくあるトラブル', '5. Common Issues')}
          </h2>
          <div className="space-y-4">
            {[
              {
                title: t('「NO RECORD FOUND」と返ってきた', '"NO RECORD FOUND" returned'),
                body: t(
                  'PSAのデータに出生記録がない状態。地方市役所（Local Civil Registry）に記録がある場合は、PSAへの遅延登録（Late Registration）が必要です。',
                  'No birth record exists in PSA data. If records exist at the Local Civil Registry (LCR), a Late Registration to PSA is required.'
                ),
              },
              {
                title: t('名前のスペルが異なる', 'Name spelling is different'),
                body: t(
                  'パスポート・PSA書類・CENOMARで名前のスペルが一致しないと、各機関で問題になります。書類間の整合性を事前に確認してください。',
                  'If name spelling does not match across passport, PSA documents, and CENOMAR, issues will arise at various institutions. Confirm consistency across all documents in advance.'
                ),
              },
              {
                title: t('親の情報が間違って記録されている', 'Parent information is incorrectly recorded'),
                body: t(
                  '出生登録時のミスで親の氏名・生年月日が誤って記録されているケースがあります。訂正には裁判所命令が必要になる場合も。',
                  'There are cases where parent names and dates of birth are incorrectly recorded due to errors at birth registration. Correction may require a court order in some cases.'
                ),
              },
              {
                title: t('届くまでに時間がかかる', 'Takes a long time to arrive'),
                body: t(
                  '国際郵便の遅延で数ヶ月かかるケースがあります。急ぎの場合は代行サービスへの相談をおすすめします。',
                  'International mail delays can cause cases taking several months. For urgent matters, we recommend consulting a proxy service.'
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

        {/* CTA */}
        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">{t('PSA書類取得、まるごとお任せ', 'Leave PSA Document Acquisition to Us')}</h2>
          <p className="text-sm text-gray-300 mb-5">
            {t(
              '面倒な手続きはプロにお任せください。日本語でサポートします。',
              'Leave the complicated procedures to the professionals. Full support in English.'
            )}
          </p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            {t('無料相談する', 'Free Consultation')}
          </a>
        </div>

        {/* FAQ */}
        <section id="ps-6" className="mb-10">
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

        {/* 関連ページ */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('関連ガイド', 'Related Guides')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { to: '/cenomar-guide', title: t('CENOMARガイド', 'CENOMAR Guide'), desc: t('独身証明書の取得方法・費用・期間', 'How to obtain CENOMAR, fees & timeline') },
              { to: '/nbi-clearance-guide', title: t('NBI無犯罪証明書ガイド', 'NBI Clearance Guide'), desc: t('NBI HIT問題の解説と取得手順', 'NBI HIT issues explained & acquisition steps') },
              { to: '/kokusai-kekkon-guide', title: t('フィリピン国際結婚ガイド', 'Philippines International Marriage Guide'), desc: t('手続き全体の流れ・必要書類', 'Overall process flow & required documents') },
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
                'どの書類が必要かわからない方も、お気軽にご相談ください。',
                'Even if you are unsure which documents you need, please feel free to consult us.'
              )}
            </p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【PSAガイドからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/psa-shussei-shomeisho/" />
              <div>
                <label htmlFor="psa-name" className="block text-xs text-gray-600 mb-1">{t('お名前', 'Name')}</label>
                <input id="psa-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('山田 太郎', 'John Smith')} />
              </div>
              <div>
                <label htmlFor="psa-email" className="block text-xs text-gray-600 mb-1">{t('メールアドレス', 'Email Address')}</label>
                <input id="psa-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="psa-message" className="block text-xs text-gray-600 mb-1">{t('ご相談内容', 'Message')}</label>
                <textarea id="psa-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('PSA出生証明書の取得について、お気軽にご相談ください。', 'Feel free to consult us about PSA Birth Certificate acquisition.')} />
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
