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

export default function HaigushaVisaPage() {
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t(`配偶者ビザ フィリピン書類チェックリスト【${SEO_YEAR_MONTH_JA}版】必要書類・取得方法`, `Philippine Documents for Spouse Visa Application [${SEO_YEAR_MONTH_EN} Checklist]`),
    t('配偶者ビザ申請に必要なフィリピン書類を完全リスト化。PSA・CENOMAR・NBI等の取得方法・費用・注意点を解説。代行サービスで一括取得対応。', 'Complete checklist of Philippine documents required for a Japanese spouse visa application. Covers PSA, CENOMAR, and NBI Clearance retrieval.')
  );

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const checklistItems = [
    {
      category: t('フィリピン人配偶者の書類（PSA・CENOMAR関連）', 'Philippine Spouse Documents (PSA & CENOMAR)'),
      items: [
        { doc: t('CENOMAR（独身証明書）', 'CENOMAR'), required: true, note: t('PSA発行・発行から6ヶ月以内が目安', 'PSA-issued, within 6 months of issue') },
        { doc: t('PSA出生証明書', 'PSA Birth Certificate'), required: true, note: t('PSA発行（旧NSOでも可の場合あり）', 'PSA-issued (old NSO may be accepted in some cases)') },
        { doc: t('PSA婚姻証明書', 'PSA Marriage Certificate'), required: true, note: t('フィリピン先行婚姻の場合', 'Required for Philippines-first marriage') },
        { doc: t('NBI Clearance（無犯罪証明書）', 'NBI Clearance'), required: false, note: t('求められる場合あり。DFAアポスティーユ付が望ましい', 'May be required. DFA Apostille recommended') },
        { doc: t('有効なパスポートのコピー（全ページ）', 'Valid Passport Copy (all pages)'), required: true, note: '' },
      ],
    },
    {
      category: t('日本人配偶者の書類', 'Japanese Spouse Documents'),
      items: [
        { doc: t('戸籍謄本', 'Family Register'), required: true, note: t('婚姻事項記載のもの', 'Must include marriage details') },
        { doc: t('住民票（世帯全員分）', 'Resident Record (all household members)'), required: true, note: t('続柄記載あり', 'With relationship description') },
        { doc: t('在職証明書または確定申告書（源泉徴収票）', 'Employment certificate or tax return (withholding slip)'), required: true, note: t('収入証明として必要', 'Required as income proof') },
        { doc: t('課税証明書', 'Tax Certificate'), required: false, note: t('地方自治体で取得', 'Obtained from local government') },
        { doc: t('銀行の残高証明書', 'Bank Balance Certificate'), required: false, note: t('直近3〜6ヶ月分が望ましい', '3–6 months of recent statements preferred') },
        { doc: t('交際・婚姻に至る経緯書（スナップ写真付き）', 'Statement of relationship history (with photos)'), required: true, note: t('入管の審査で重視される', 'Highly important for immigration review') },
      ],
    },
    {
      category: t('申請書類（入管提出用）', 'Application Documents (for immigration)'),
      items: [
        { doc: t('在留資格認定証明書交付申請書（または変更申請書）', 'Certificate of Eligibility Application (or change application)'), required: true, note: t('入管所定の書式', 'Official immigration form') },
        { doc: t('身元保証書', 'Guarantor Statement'), required: true, note: t('日本人配偶者が署名', 'Signed by Japanese spouse') },
        { doc: t('質問書（入管所定）', 'Questionnaire (immigration form)'), required: true, note: t('入管提供のフォーム', 'Form provided by immigration') },
      ],
    },
  ];

  const faqs = [
    {
      q: t('配偶者ビザ申請でCENOMARは必ず必要ですか？', 'Is CENOMAR always required for spouse visa application?'),
      a: t(
        '婚姻が成立した後（戸籍や婚姻証明書に記載済み）の配偶者ビザ申請では、婚姻の証明として戸籍謄本やPSA婚姻証明書が主な書類になります。ただし、フィリピン人側の独身証明（CENOMAR）は婚姻届提出の際に提出済みであることが多く、入管から改めて求められる場合もあります。念のため取得しておくことをおすすめします。',
        'For spouse visa applications after marriage is established, the family register and PSA Marriage Certificate are the main documents. However, immigration may request CENOMAR again. We recommend obtaining it as a precaution.'
      ),
    },
    {
      q: t('フィリピン側の書類に日本語翻訳は必要ですか？', 'Is a Japanese translation required for Philippine documents?'),
      a: t(
        'はい、入管に提出するフィリピン語・英語の書類には、すべて日本語訳を添付する必要があります。翻訳は申請者本人または翻訳業者が行ったものでも可ですが、翻訳者の署名・翻訳日の記載が必要です。',
        'Yes, all Filipino or English documents submitted to immigration must have a Japanese translation. The translator\'s signature and date of translation must be included.'
      ),
    },
    {
      q: t('NBI ClearanceにDFAアポスティーユ認証は必要ですか？', 'Is DFA Apostille required for NBI Clearance?'),
      a: t(
        '入管に提出するNBI ClearanceにはDFAアポスティーユ認証を付けることが推奨されます（必須ではない場合もありますが、審査官によって判断が異なるため、付けておく方が安全です）。当センターでNBI取得＋DFAアポスティーユのセット代行が可能です。',
        'DFA Apostille is recommended for NBI Clearance submitted to immigration (not always mandatory, but safer to include). Our center can handle NBI + DFA Apostille as a package.'
      ),
    },
    {
      q: t('配偶者ビザの審査期間はどのくらいですか？', 'How long does the spouse visa review take?'),
      a: t(
        '通常1〜3ヶ月程度です。書類の不備があると追加書類の提出を求められ、さらに時間がかかる場合があります。書類を完備して申請することが審査期間短縮の鍵です。',
        'Typically 1–3 months. Document deficiencies may cause delays. Submitting complete documents is key to a shorter review.'
      ),
    },
    {
      q: t('書類の取得は代行してもらえますか？', 'Can you handle document retrieval?'),
      a: t(
        'はい、CENOMAR・PSA出生証明書・PSA婚姻証明書・NBI Clearance（＋DFAアポスティーユ）の取得を代行いたします。日本語でのやり取りのみで完結しますので、お気軽にご相談ください。',
        'Yes, we handle CENOMAR, PSA Birth/Marriage Certificate, and NBI Clearance (+ DFA Apostille). Everything is in English. Feel free to contact us.'
      ),
    },
    {
      q: t('配偶者ビザの申請は自分でできますか？行政書士に依頼すべきですか？', 'Can I apply for the spouse visa myself?'),
      a: t(
        '申請者本人（または日本人配偶者）が自分で申請することも可能です。ただし書類の準備や審査対応は複雑なため、配偶者ビザの申請手続き全体については行政書士への相談をおすすめします。当センターはフィリピン書類の取得代行に特化しています。',
        'You can apply yourself, but document preparation and review response is complex. We recommend consulting an administrative scrivener for the overall process. Our center specializes in Philippine document retrieval.'
      ),
    },
    {
      q: t('入管に不許可になった場合、どうすればよいですか？', 'What if immigration denies the application?'),
      a: t(
        '不許可通知を受け取った際は、不許可の理由を入管に確認してください。書類の不備や収入証明の不足、交際経緯の説明不足などが主な原因です。再申請に向けて書類を補完することで、許可が下りるケースも多くあります。行政書士にご相談されることをおすすめします。',
        'Confirm the reason for denial with immigration. Main causes include document deficiencies, insufficient income proof, and inadequate relationship history. Many cases are approved after supplementing documents for re-application.'
      ),
    },
    {
      q: t('フィリピン書類の取得から配偶者ビザ申請まで、全体でどのくらいの期間がかかりますか？', 'How long does the entire process take?'),
      a: t(
        'フィリピン書類（CENOMAR・PSA・NBI等）の取得からDFAアポスティーユ・国際配送まで約4〜6週間、配偶者ビザの審査に約1〜3ヶ月が目安です。書類取得から申請まで含めると、早くて3〜4ヶ月程度みておくことをおすすめします。',
        'Philippine documents (CENOMAR, PSA, NBI, etc.) through DFA Apostille and international shipping take approximately 4–6 weeks, and the visa review takes 1–3 months. Allow at least 3–4 months from document retrieval to completion.'
      ),
    },
    {
      q: t('CENOMAR・PSA書類の有効期限はいつまでですか？', 'What is the validity of CENOMAR and PSA documents?'),
      a: t(
        'CENOMARは発行から約6ヶ月以内が一般的な目安です。PSA出生証明書は法的な有効期限はありませんが、6ヶ月以内のものを求められることが多いです。ビザ申請の予定日から逆算して、申請の2〜3ヶ月前にはフィリピン書類の取得を開始することをおすすめします。',
        'CENOMAR is generally valid within 6 months of issue. PSA Birth Certificate has no legal expiry but is often required within 6 months. Start obtaining documents 2–3 months before the planned application date.'
      ),
    },
    {
      q: t('フィリピン人配偶者が現在フィリピンにいる場合と日本にいる場合で、申請方法が違いますか？', 'Does the application method differ depending on where the Filipino/Filipina spouse is?'),
      a: t(
        'はい、申請の種類が異なります。フィリピン人配偶者が海外にいる場合は「在留資格認定証明書交付申請」を行い、日本に在留している場合は「在留資格変更許可申請」を行います。どちらの場合も書類の要件は概ね同じですが、手続きの流れが異なります。行政書士への相談をおすすめします。',
        'Yes, the application type differs. If overseas, apply for a "Certificate of Eligibility." If in Japan with another status, apply for a "Residence Status Change." Documents required are generally the same, but the process differs.'
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
              { '@type': 'ListItem', position: 2, name: '配偶者ビザ書類ガイド', item: 'https://ph-document.com/ja/haigusha-visa/' },
            ]
          : [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ph-document.com/en/' },
              { '@type': 'ListItem', position: 2, name: 'Spouse Visa Document Guide', item: 'https://ph-document.com/en/spouse-visa-documents/' },
            ],
      },
      {
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': lang === 'ja' ? 'https://ph-document.com/ja/haigusha-visa/' : 'https://ph-document.com/en/spouse-visa-documents/',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2'],
          },
        },
        headline: lang === 'ja'
          ? `配偶者ビザ申請に必要なフィリピン書類チェックリスト [${SEO_YEAR_MONTH_JA}]`
          : `Philippine Document Checklist for Spouse Visa Application [${SEO_YEAR_MONTH_EN}]`,
        description: lang === 'ja'
          ? '配偶者ビザ申請に必要なフィリピン書類（CENOMAR・PSA出生証明書・NBI Clearance・DFAアポスティーユ）の完全チェックリスト。'
          : 'Complete checklist of Philippine documents required for spouse visa applications: CENOMAR, PSA Birth Certificate, NBI Clearance, and DFA Apostille.',
        image: 'https://ph-document.com/og-image.png',
        url: lang === 'ja' ? 'https://ph-document.com/ja/haigusha-visa/' : 'https://ph-document.com/en/spouse-visa-documents/',
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
          'https://www.moj.go.jp',
          'https://www.immi-moj.go.jp',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        <nav className="text-xs text-gray-400 mb-6" aria-label={t('パンくずリスト', 'Breadcrumb')}>
          <Link to="/" className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('配偶者ビザ書類ガイド', 'Spouse Visa Document Guide')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {t('配偶者ビザに必要なフィリピン書類', 'Philippine Documents for Spouse Visa')}<br className="hidden md:block" />{' '}
          {t(`チェックリスト【${SEO_YEAR_MONTH_JA}最新】`, `Checklist [${SEO_YEAR_MONTH_EN}]`)}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t(`最終更新：${SEO_LAST_UPDATED_JA} ｜ 株式会社IGRS`, `Last updated: ${SEO_LAST_UPDATED_EN} | IGRS Inc.`)}</p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 text-sm text-blue-900 leading-relaxed">
          {t(
            'このページでは、フィリピン人配偶者の「在留資格（配偶者ビザ）」申請に必要なフィリピン側の書類を中心にチェックリスト形式で解説します。',
            <>
              <strong>Note:</strong> This guide is specifically for <strong>Japanese spouse visa (配偶者ビザ)</strong> applications — the checklist includes Japan-specific documents such as the Certificate of Eligibility and Family Register.
              <br /><br />
              If you are applying for a spouse visa in a country other than Japan, the Philippine documents section (CENOMAR, PSA Birth Certificate, NBI Clearance) still applies — but the non-Filipino spouse\'s documents and application forms will differ by country. Please check with your local immigration authority.
            </>
          )}
          <br /><br />
          {t(
            '※ビザ申請書類全体については行政書士への相談をおすすめします。当センターはフィリピン書類の取得代行に特化しています。',
            '* We specialize in obtaining Philippine documents (CENOMAR, PSA, NBI, Apostille). For visa application strategy and immigration forms, please consult a licensed immigration specialist in your country.'
          )}
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('目次', 'Table of Contents')}</p>
          <ol className="space-y-1 text-sm text-secondary">
            {[
              t('必要書類チェックリスト', 'Required Document Checklist'),
              t('フィリピン書類の取得ポイント', 'Key Points for Philippine Document Retrieval'),
              t('注意点', 'Important Notes'),
              t('よくある質問（FAQ）', 'FAQ'),
              t('お問い合わせ', 'Contact'),
            ].map((item, i) => (
              <li key={i}><a href={`#hv-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        <section id="hv-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">1. {t('必要書類チェックリスト', 'Required Document Checklist')}</h2>
          {checklistItems.map((cat, ci) => (
            <div key={ci} className="mb-6">
              <h3 className="text-sm font-bold text-secondary bg-secondary/5 px-4 py-2 rounded-lg mb-3">{cat.category}</h3>
              <div className="space-y-2">
                {cat.items.map((item, ii) => (
                  <div key={ii} className="flex gap-3 bg-white border border-gray-100 rounded-lg px-4 py-3 shadow-card">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${item.required ? 'text-primary' : 'text-gray-300'}`} />
                    <div>
                      <span className="text-sm text-secondary font-medium">{item.doc}</span>
                      {!item.required && (
                        <span className="ml-2 text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">{t('場合による', 'Situational')}</span>
                      )}
                      {item.note && <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="hv-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">2. {t('フィリピン書類の取得ポイント', 'Key Points for Philippine Document Retrieval')}</h2>
          <div className="grid gap-4">
            {[
              { to: t('/ja/cenomar', '/cenomar'), icon: '📄', title: 'CENOMAR', point: t('婚姻届提出済みでも、念のため最新版を手元に用意しておくと審査がスムーズです。有効期限（6ヶ月）に注意。', 'Having the latest version ready makes the review smoother. Note the 6-month validity.') },
              { to: t('/ja/psa-shussei-shomeisho', '/psa-birth-certificate'), icon: '📋', title: t('PSA出生証明書', 'PSA Birth Certificate'), point: t('婚姻前に取得していたものでも使用できますが、発行から時間が経っている場合は再取得を推奨。', 'Pre-marriage documents can be used, but re-obtaining is recommended if old.') },
              { to: t('/ja/nbi-clearance', '/nbi-clearance'), icon: '🛡️', title: 'NBI Clearance', point: t('入管がNBI Clearanceを求める場合はDFAアポスティーユ付が推奨されます。HIT案件は早めに相談を。', 'DFA Apostille is recommended when immigration requires NBI Clearance. Contact us early for HIT cases.') },
            ].map((item) => (
              <Link key={item.to} to={item.to} className="bg-white border border-gray-200 rounded-xl p-4 shadow-card hover:border-primary transition-colors group block">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <h3 className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">{item.title}</h3>
                  <ArrowRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-primary transition-colors" />
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{item.point}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="hv-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">3. {t('注意点', 'Important Notes')}</h2>
          <div className="space-y-4">
            {[
              { title: t('書類はすべて日本語訳が必要', 'Japanese translation required for all documents'), body: t('入管に提出するフィリピン側の書類（英語）には、日本語訳を添付する必要があります。翻訳者の氏名・署名・翻訳日の記載が必要です。', 'All Philippine documents submitted to immigration must have a Japanese translation. Translator name, signature, and date must be included.') },
              { title: t('書類の有効期限を確認する', 'Check document validity periods'), body: t('CENOMAR・NBI Clearanceには有効期限があります。申請が遅れて期限切れにならないよう、スケジュールを逆算して取得しましょう。', 'CENOMAR and NBI Clearance have validity periods. Plan backwards to avoid expiration.') },
              { title: t('書類間の名前のスペルを統一する', 'Ensure consistent name spelling'), body: t('フィリピン人配偶者の名前スペルが書類間で異なると審査に支障をきたします。パスポートと全書類で一致していることを必ず確認してください。', 'Name spelling differences across documents will hinder the review. Verify consistency with the passport.') },
              { title: t('入管の要求書類は変わる場合がある', 'Immigration requirements may change'), body: t('必要書類は入管の判断や申請内容によって変わる場合があります。最新情報は出入国在留管理庁の公式サイトで確認するか、行政書士に相談してください。', 'Required documents may change. Check the Immigration Services Agency website or consult an administrative scrivener.') },
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

        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">4. {t('配偶者ビザ審査で重視されるポイント', 'Key Points in the Spouse Visa Review')}</h2>
          <div className="grid gap-3">
            {[
              { num: '01', title: t('婚姻の真正性', 'Authenticity of Marriage'), body: t('入管は「形式的な婚姻ではないか」を厳しく審査します。出会いから交際・結婚に至る詳細な経緯書と証拠写真が重要です。', 'Immigration strictly reviews whether the marriage is genuine. A detailed statement and evidence photos are important.') },
              { num: '02', title: t('日本人配偶者の安定した収入', 'Stable income of Japanese spouse'), body: t('収入証明書や課税証明書、銀行残高証明書で経済的な安定を示します。年収の目安として200〜250万円以上が一般的に求められます。', 'Demonstrate economic stability with income documents. Annual income of ¥2,000,000–¥2,500,000+ is generally required.') },
              { num: '03', title: t('書類間の整合性', 'Consistency across documents'), body: t('申請書類に記載した内容が全書類で一致していることが重要です。矛盾があると審査官からの追加質問や不許可の原因になります。', 'Information in application documents must be consistent. Inconsistencies lead to additional questions or denial.') },
              { num: '04', title: t('フィリピン側書類の完備', 'Complete Philippine documents'), body: t('CENOMAR・PSA出生証明書・NBI Clearance（DFAアポスティーユ付き推奨）が揃っていることが審査をスムーズに進める上で重要です。', 'Having CENOMAR, PSA Birth Certificate, and NBI Clearance (DFA Apostille recommended) complete is important for a smooth review.') },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-card">
                <span className="text-2xl font-bold text-primary/20 flex-shrink-0 w-8">{item.num}</span>
                <div>
                  <p className="text-sm font-bold text-secondary mb-1">{item.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">{t('在留資格認定申請 vs 変更申請', 'Certificate of Eligibility vs. Status Change')}</h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            {t('配偶者ビザの申請方法は、フィリピン人配偶者が現在どこにいるかによって異なります。', 'The application method differs depending on where the Filipino/Filipina spouse is.')}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('申請の種類', 'Application Type')}</th>
                  <th className="px-4 py-3 text-left font-semibold">{t('対象となる方', 'Who This Applies To')}</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">{t('手続きの流れ', 'Process Flow')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    t('在留資格認定証明書交付申請', 'Certificate of Eligibility Application'),
                    t('フィリピン在住のフィリピン人配偶者', 'Filipino/Filipina spouse in the Philippines'),
                    t('①入管に申請 → ②証明書取得（1〜3ヶ月）→ ③大使館でビザ申請 → ④来日', '① Apply → ② Get certificate (1–3 months) → ③ Apply at embassy → ④ Come to Japan'),
                  ],
                  [
                    t('在留資格変更許可申請', 'Residence Status Change Application'),
                    t('日本に在留中のフィリピン人配偶者', 'Filipino/Filipina spouse in Japan'),
                    t('①入管に申請 → ②審査（1〜3ヶ月）→ ③配偶者ビザに変更 → ④在留カード交付', '① Apply → ② Review (1–3 months) → ③ Change to spouse visa → ④ Residence card issued'),
                  ],
                ].map(([type, target, flow], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100 text-sm">{type}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100 text-xs">{target}</td>
                    <td className="px-4 py-3 text-gray-500 border-b border-gray-100 text-xs">{flow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            {t(
              'どちらの申請でも、フィリピン書類の準備は共通です。当センターでは書類の取得代行のみ対応しています。申請手続き全体については行政書士へのご相談をおすすめします。',
              'Philippine documents are required for both applications. Our center only handles document retrieval. We recommend consulting an administrative scrivener for the overall process.'
            )}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">{t('フィリピン書類取得のタイムライン目安', 'Document Retrieval Timeline')}</h2>
          <div className="space-y-3">
            {[
              { period: t('2〜3週間', '2–3 weeks'), doc: 'CENOMAR', note: t('CENOMAR取得の目安', 'CENOMAR acquisition guideline') },
              { period: t('2〜3週間', '2–3 weeks'), doc: t('PSA出生証明書', 'PSA Birth Certificate'), note: t('状況により変動', 'May vary') },
              { period: t('2〜4週間', '2–4 weeks'), doc: 'NBI Clearance', note: t('HIT案件は追加2〜4週間', 'HIT cases take 2–4 weeks extra') },
              { period: t('+約2週間', '+approx. 2 weeks'), doc: t('DFAアポスティーユ認証', 'DFA Apostille'), note: t('上記書類取得後に実施', 'After above documents obtained') },
              { period: t('約4〜6週間', 'Approx. 4–6 weeks'), doc: t('書類一式（セット代行）', 'All documents (package)'), note: t('まとめて依頼で効率化', 'More efficient when ordered together') },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-lg px-4 py-3 shadow-card">
                <div className="w-28 flex-shrink-0"><span className="text-xs font-bold text-primary">{item.period}</span></div>
                <div>
                  <p className="text-sm font-medium text-secondary">{item.doc}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <p className="text-xs text-primary font-bold mb-2">{t('フィリピン書類の取得はお任せください', 'Leave Philippine document retrieval to us')}</p>
          <h2 className="text-xl font-bold mb-3">{t('CENOMAR・PSA・NBI、まとめて代行', 'Too Much Hassle? Let Us Handle It')}</h2>
          <p className="text-sm text-gray-300 mb-5">
            {t('ビザ申請に必要なフィリピン書類を英語サポートで取得代行。\nまずは無料相談からどうぞ。', 'CENOMAR + PSA + NBI + DFA Apostille + DHL to USA — all-in-one from $199. USCIS & NVC compliant.')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to={t('/ja/pricing', '/en/pricing')} className="inline-block bg-white text-secondary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm" onClick={() => trackEvent('cta_click', { location: 'haigusha_visa', type: 'pricing' })}>
              {t('料金プランを見る', 'View Pricing Plans')}
            </Link>
            <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors text-sm" onClick={() => trackEvent('cta_click', { location: 'haigusha_visa', type: 'consultation' })}>
              {t('無料相談する', 'Free Consultation')}
            </a>
          </div>
        </div>

        <section id="hv-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">4. {t('よくある質問（FAQ）', 'FAQ')}</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-card overflow-hidden">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
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

        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('関連ガイド', 'Related Guides')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { to: t('/ja/cenomar', '/cenomar'), title: t('CENOMARガイド', 'CENOMAR Guide'), desc: t('独身証明書の取得方法・費用・期間', 'What is CENOMAR, requirements & how to get it') },
              { to: t('/ja/psa-shussei-shomeisho', '/psa-birth-certificate'), title: t('PSA出生証明書ガイド', 'PSA Birth Certificate Guide'), desc: t('出生証明書の取得方法と注意点', 'Requirements, cost PHP 365 & how to obtain') },
              { to: t('/ja/nbi-clearance', '/nbi-clearance'), title: t('NBI無犯罪証明書ガイド', 'NBI Clearance Guide'), desc: t('NBI HIT問題の解説と取得手順', 'How to get NBI Clearance, HIT guide & fees') },
              { to: t('/ja/pricing', '/en/pricing'), title: t('料金プラン', 'Pricing Plans'), desc: t('書類取得代行の費用・パッケージ一覧', 'All-in-one packages from $199 — DHL ships to USA') },
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

        <section id="contact" className="mb-10">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-soft">
            <h2 className="text-xl font-bold text-secondary mb-2">{t('お問い合わせ', 'Contact Us')}</h2>
            <p className="text-sm text-gray-500 mb-6">{t('書類の取得代行・翻訳サポートについてお気軽にご相談ください。', 'Feel free to contact us about document retrieval and translation support.')}</p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value={lang === 'ja' ? '【配偶者ビザ書類ガイドからのお問い合わせ】' : '[Spouse Visa Documents Guide Inquiry - EN]'} />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/haigusha-visa-shorui/" />
              <div>
                <label htmlFor="hv-name" className="block text-xs text-gray-600 mb-1">{t('お名前', 'Name')}</label>
                <input id="hv-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('山田 太郎', 'John Smith')} />
              </div>
              <div>
                <label htmlFor="hv-email" className="block text-xs text-gray-600 mb-1">{t('メールアドレス', 'Email Address')}</label>
                <input id="hv-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="hv-message" className="block text-xs text-gray-600 mb-1">{t('ご相談内容', 'Message')}</label>
                <textarea id="hv-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('配偶者ビザに必要なフィリピン書類の取得についてお気軽にどうぞ。', 'Feel free to ask about Philippine documents for spouse visa.')} />
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3">
                <Send className="w-5 h-5" />{t('送信する', 'Send')}
              </button>
            </form>
            <a href="mailto:igrs20200601@gmail.com" className="mt-3 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />{t('メールで直接送る: igrs20200601@gmail.com', 'Send directly: igrs20200601@gmail.com')}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
