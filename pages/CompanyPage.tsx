import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Clock, Building2, Globe, FileCheck, Users, Target, Heart, Award, CheckCircle, ArrowRight, Scale, ShieldAlert } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
        { '@type': 'ListItem', position: 2, name: '会社概要', item: 'https://ph-document.com/company/' },
      ],
    },
    {
      '@type': 'Organization',
      name: '株式会社IGRS',
      url: 'https://ph-document.com/',
      email: 'info@ph-document.com',
      foundingDate: '2020-06-01',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '和歌山市',
        addressRegion: '和歌山県',
        addressCountry: 'JP',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'info@ph-document.com',
        availableLanguage: 'Japanese',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      },
    },
  ],
};

export default function CompanyPage() {
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t('会社概要｜株式会社IGRS（フィリピン書類取得代行センター）', 'About Us | IGRS Co., Ltd. (Philippine Document Service)'),
    t('フィリピン書類取得代行センターを運営する株式会社IGRSの会社概要。所在地・代表者・事業内容・特定商取引法表記をご案内。', 'Learn about IGRS Co., Ltd., the company behind the Philippine Document Retrieval Service. Office location, representative, and business details.')
  );

  const serviceFeatures = [
    {
      icon: Globe,
      title: t('日本とフィリピンの架け橋', 'Bridge Between Japan & the Philippines'),
      desc: t(
        '和歌山（日本）とセブ（フィリピン）の両拠点を持ち、現地の情報と日本側の手続き要件を両方把握したうえでサポートします。',
        'With offices in Wakayama (Japan) and Cebu (Philippines), we understand both local Philippine conditions and Japanese procedural requirements.'
      ),
    },
    {
      icon: FileCheck,
      title: t('書類取得のBPO専門', 'Document Procurement BPO'),
      desc: t(
        'フィリピン公的書類の取得に特化したBPOサービス。PSA・NBI・LTOなど各機関とのやり取りを一括代行します。',
        'A BPO service specializing in Philippine official document retrieval. We handle all communications with PSA, NBI, LTO, and other agencies on your behalf.'
      ),
    },
    {
      icon: Building2,
      title: t('企業進出支援も対応', 'Business Entry Support'),
      desc: t(
        '個人の書類取得だけでなく、フィリピンへの法人設立・進出支援も承っています。まずはご相談ください。',
        'Beyond personal document services, we also support companies looking to establish or expand operations in the Philippines. Contact us to learn more.'
      ),
    },
  ];

  const values = [
    {
      icon: Heart,
      title: t('寄り添うサポート', 'Personalized Support'),
      desc: t(
        '「どの書類が必要かわからない」という方が大半です。状況をヒアリングし、最適な方法をわかりやすくご説明することを最優先にしています。',
        'Most clients are unsure which documents they need. We listen carefully to your situation and explain the best approach in plain language.'
      ),
    },
    {
      icon: Users,
      title: t('現地との強固なネットワーク', 'Strong Local Network'),
      desc: t(
        'セブ拠点のスタッフがPSA・NBI・DFA・LTOなど各機関と直接やり取りします。最新の手続き情報や窓口事情をリアルタイムで把握しています。',
        'Our Cebu-based staff communicate directly with PSA, NBI, DFA, LTO, and other agencies, giving us real-time knowledge of the latest procedures and office conditions.'
      ),
    },
    {
      icon: Target,
      title: t('明朗な料金・丁寧な説明', 'Transparent Pricing'),
      desc: t(
        'お見積もり前に費用の内訳と範囲を詳しくご説明します。追加費用が発生する可能性がある場合も、事前に必ずお伝えします。',
        'We explain all cost breakdowns and scope before providing a quote. Any potential additional charges are always communicated in advance.'
      ),
    },
    {
      icon: Award,
      title: t('品質へのこだわり', 'Commitment to Quality'),
      desc: t(
        '書類の不備や記載ミスは再申請につながります。提出前の確認・チェックを徹底し、一度で確実に取得できるよう努めています。',
        'Document errors and omissions lead to resubmissions. We thoroughly review everything before filing to ensure documents are obtained correctly the first time.'
      ),
    },
  ];

  const documentCategories = [
    {
      category: t('PSA書類', 'PSA Documents'),
      items: [
        t('出生証明書（Birth Certificate）', 'Birth Certificate'),
        t('婚姻証明書（Marriage Certificate）', 'Marriage Certificate'),
        t('CENOMAR（独身証明書）', 'CENOMAR (Certificate of No Marriage)'),
      ],
    },
    {
      category: t('NBI・警察関係', 'NBI & Police Records'),
      items: [
        t('NBI Clearance（無犯罪証明書）', 'NBI Clearance'),
        t('DFAアポスティーユ認証', 'DFA Apostille Authentication'),
        t('在フィリピン大使館関連書類', 'Philippine Embassy-related Documents'),
      ],
    },
    {
      category: t('LTO関係', 'LTO Documents'),
      items: [
        t('フィリピン運転免許証（外免切替用）', 'Philippine Driver\'s License (for license conversion)'),
        t('LTOトランザクション履歴', 'LTO Transaction History'),
        t('免許翻訳・認証書類', 'License Translation & Certification'),
      ],
    },
    {
      category: t('ビザ・在留資格', 'Visa & Residency'),
      items: [
        t('配偶者ビザ申請サポート', 'Spouse Visa Application Support'),
        t('在留資格「日本人の配偶者等」', 'Residence Status: Spouse of Japanese National'),
        t('帰化申請サポート', 'Naturalization Application Support'),
      ],
    },
  ];

  const japanOfficeItems = [
    t('日本語でのご相談受付', 'Consultations in Japanese'),
    t('書類の国内転送対応', 'Domestic document forwarding'),
    t('翻訳・認証書類の確認', 'Review of translated & certified documents'),
  ];

  const cebuOfficeItems = [
    t('PSA・NBI・DFAへの直接申請', 'Direct applications to PSA, NBI, DFA'),
    t('LTO書類取得代行', 'LTO document procurement'),
    t('アポスティーユ認証手続き', 'Apostille authentication procedures'),
  ];

  const stats = [
    { value: t('2020年', '2020'), label: t('創業', 'Founded'), sub: t('6月1日設立', 'June 1, 2020') },
    { value: '100+', label: t('取扱い実績', 'Cases Handled'), sub: t('累計対応案件数', 'Total cases to date') },
    { value: t('2拠点', '2 Offices'), label: t('日本×フィリピン', 'Japan × Philippines'), sub: t('和歌山・セブ', 'Wakayama · Cebu') },
    { value: t('3言語', '3 Languages'), label: t('対応言語', 'Languages'), sub: t('日本語・英語・タガログ語', 'Japanese / English / Tagalog') },
  ];

  const tableRows = [
    { label: t('商号', 'Company Name'), value: t('株式会社IGRS', 'IGRS Inc.') },
    { label: t('設立', 'Established'), value: t('2020年6月1日', 'June 1, 2020') },
    { label: t('本店所在地', 'Head Office (Japan)'), value: t('和歌山県和歌山市', 'Wakayama City, Wakayama Prefecture, Japan') },
    { label: t('セブ営業所在地', 'Cebu Office (Philippines)'), value: t('フィリピン共和国 セブ市', 'Cebu City, Republic of the Philippines') },
    {
      label: t('事業内容', 'Business'),
      value: null,
      custom: (
        <ul className="space-y-1 text-gray-700">
          <li>・{t('フィリピンへの企業進出支援', 'Support for companies entering the Philippine market')}</li>
          <li>・{t('フィリピン公的書類取得に関する業務プロセスアウトソーシング（BPO）', 'Business process outsourcing (BPO) for Philippine official document procurement')}</li>
        </ul>
      ),
    },
    { label: t('メール', 'Email'), value: 'info@ph-document.com' },
    { label: t('対応言語', 'Languages'), value: t('日本語・英語・タガログ語', 'Japanese / English / Tagalog') },
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
        <nav className="text-xs text-gray-400 mb-6" aria-label="breadcrumb">
          <Link to="/" className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('会社概要', 'Company')}</span>
        </nav>

        <h1 className="text-2xl font-bold text-secondary mb-2">{t('会社概要', 'Company')}</h1>
        <p className="text-sm text-gray-500 mb-8">{t('株式会社IGRSについて', 'About IGRS Inc.')}</p>

        {/* Mission */}
        <section className="mb-10 bg-secondary text-white rounded-2xl p-7">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Our Mission</p>
          <h2 className="text-xl font-bold mb-3 leading-snug">
            {t(
              <>書類の壁をなくして、<br />国境を越えた人生を支える。</>,
              'Breaking down document barriers to support people living across borders.'
            )}
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            {t(
              'フィリピンの公的書類取得は、言語・距離・手続きの複雑さという三重の壁があります。私たちは日本とフィリピン両国に拠点を持つことで、その壁を取り除き、お客様が本来やるべきことに集中できる環境を提供します。',
              'Obtaining official Philippine documents involves a triple barrier of language, distance, and procedural complexity. By maintaining offices in both Japan and the Philippines, we remove those barriers and provide an environment where clients can focus on what truly matters to them.'
            )}
          </p>
        </section>

        {/* Company Info Table */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h2 className="text-sm font-bold text-secondary">{t('会社情報', 'Company Information')}</h2>
          </div>
          <table className="w-full text-sm">
            <tbody>
              {tableRows.map(({ label, value, custom }) => (
                <tr key={label} className="border-b border-gray-100 last:border-0">
                  <th className="text-left text-xs font-bold text-gray-500 bg-gray-50 px-6 py-4 w-2/5 align-top whitespace-nowrap">
                    {label}
                  </th>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">
                    {custom ?? value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Founding Background */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('創業の背景', 'Our Background')}</h2>
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6 space-y-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              {t(
                '弊社代表は、フィリピン人パートナーとの国際結婚手続きを経験するなかで、PSA書類・NBI Clearanceなどの取得がいかに困難かを身をもって知りました。英語での窓口対応、長い待ち時間、書類不備による再申請——多くの人が同じ壁にぶつかっています。',
                'Our founder experienced first-hand the difficulty of obtaining PSA documents and NBI Clearance during the international marriage process with a Filipino partner. Navigating English-language counters, long wait times, and resubmissions due to document errors — these are challenges many people face.'
              )}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {t(
                '「日本語だけで、日本にいながら取得できる仕組みを作りたい」——その思いから、2020年に和歌山（日本）とセブ（フィリピン）の二拠点体制で株式会社IGRSを設立しました。',
                'With the goal of creating a system where clients in Japan can obtain these documents entirely in Japanese, IGRS Inc. was established in 2020 with dual offices in Wakayama (Japan) and Cebu (Philippines).'
              )}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {t(
                '以来、国際結婚・配偶者ビザ・外免切替・帰化申請など多岐にわたる案件を支援しており、「日本語で気軽に相談できる」というスタンスは創業当初から変わりません。',
                'Since then, we have supported clients with a wide range of cases including international marriage, spouse visas, license conversions, and naturalization applications. Our commitment to easy, accessible consultations has remained unchanged since day one.'
              )}
            </p>
          </div>
        </section>

        {/* Track Record */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('実績・強み', 'Track Record & Strengths')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map(({ value, label, sub }) => (
              <div key={label} className="bg-white rounded-xl p-4 shadow-card border border-gray-100 text-center">
                <p className="text-xl font-bold text-primary font-display">{value}</p>
                <p className="text-xs font-bold text-secondary mt-1">{label}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact & Hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {/* Contact */}
          <div className="bg-white rounded-xl p-5 shadow-card border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-secondary" />
              </div>
              <h3 className="font-bold text-secondary text-sm">{t('ご連絡先', 'Contact')}</h3>
            </div>
            <a
              href="mailto:info@ph-document.com"
              className="text-sm text-primary hover:underline block mb-3"
            >
              info@ph-document.com
            </a>
            <Link
              to="/contact/"
              className="inline-block text-xs bg-primary text-white font-bold px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors"
            >
              {t('お問い合わせフォームはこちら', 'Go to Contact Form')}
            </Link>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-xl p-5 shadow-card border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-secondary" />
              </div>
              <h3 className="font-bold text-secondary text-sm">{t('対応時間', 'Business Hours')}</h3>
            </div>
            <p className="text-sm text-gray-700 mb-1">{t('平日 9:00〜18:00（日本時間）', 'Mon–Fri 9:00–18:00 (JST)')}</p>
            <p className="text-xs text-gray-500">{t('※お問い合わせへの返信は原則翌営業日以内', '* We aim to reply to all inquiries within the next business day.')}</p>
          </div>
        </div>

        {/* Service Features */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('サービスの特徴', 'Service Features')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {serviceFeatures.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-5 shadow-card border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-secondary" />
                  </div>
                  <h3 className="font-bold text-secondary text-sm">{title}</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('私たちが大切にしていること', 'Our Values')}</h2>
          <div className="space-y-3">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-5 shadow-card border border-gray-100 flex gap-4">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary text-sm mb-1">{title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Locations */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('拠点情報', 'Our Locations')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-card border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <h3 className="font-bold text-secondary text-sm">{t('本店（日本）', 'Head Office (Japan)')}</h3>
              </div>
              <p className="text-sm text-gray-700">{t('和歌山県和歌山市', 'Wakayama City, Wakayama Prefecture, Japan')}</p>
              <p className="text-xs text-gray-500 mt-1 mb-3">{t('日本側の書類対応・お客様サポート窓口', 'Japan-side document handling & client support')}</p>
              <ul className="space-y-1">
                {japanOfficeItems.map(item => (
                  <li key={item} className="flex items-center gap-1.5 text-xs text-gray-600">
                    <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-card border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <h3 className="font-bold text-secondary text-sm">{t('セブ営業所（フィリピン）', 'Cebu Office (Philippines)')}</h3>
              </div>
              <p className="text-sm text-gray-700">{t('フィリピン共和国 セブ市', 'Cebu City, Republic of the Philippines')}</p>
              <p className="text-xs text-gray-500 mt-1 mb-3">{t('現地書類取得・PSA/NBI/LTO各機関への対応', 'On-site document procurement & liaison with PSA/NBI/LTO')}</p>
              <ul className="space-y-1">
                {cebuOfficeItems.map(item => (
                  <li key={item} className="flex items-center gap-1.5 text-xs text-gray-600">
                    <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Documents & Services */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('取り扱い書類・サービス一覧', 'Documents & Services')}</h2>
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {documentCategories.map(({ category, items }) => (
                <div key={category} className="p-5 border-b border-r border-gray-100 last:border-b-0">
                  <h3 className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">{category}</h3>
                  <ul className="space-y-1">
                    {items.map(item => (
                      <li key={item} className="text-xs text-gray-700 flex items-start gap-1.5">
                        <span className="text-primary flex-shrink-0 mt-0.5">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 法務連携について */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-primary" />
            {t('法務が関係する案件について', 'Cases Involving Legal Procedures')}
          </h2>
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
            <div className="p-6 space-y-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                {t(
                  '不動産・相続・銀行など、フィリピン国内で法務手続きが必要となる案件については、フィリピンの弁護士が受任して対応します。日本国内の法務手続きは日本の弁護士等の専門家領域です。',
                  'For cases requiring legal procedures in the Philippines — such as real estate, inheritance, or banking matters — a Philippine attorney will accept and handle the engagement. Legal procedures within Japan fall under the domain of Japanese attorneys and specialists.'
                )}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                {t(
                  'IGRSは、記録取得・現地確認・証跡保全・案件管理を担当し、法律相談や法的判断は行いません。',
                  'IGRS handles document retrieval, on-site verification, evidence preservation, and case management. We do not provide legal consultations or legal judgments.'
                )}
              </p>

              {/* 役割分担 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div className="bg-secondary/5 rounded-xl p-4">
                  <p className="text-xs font-bold text-secondary mb-2 uppercase tracking-wide">
                    {t('IGRSが担当すること', 'What IGRS Handles')}
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      t('フィリピン書類・記録の取得', 'Document & record retrieval in the Philippines'),
                      t('現地確認・証跡保全', 'On-site verification & evidence preservation'),
                      t('案件管理・進捗報告', 'Case management & progress reporting'),
                      t('必要に応じた弁護士との調整窓口', 'Coordination with attorneys as needed'),
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">
                    {t('弁護士が担当すること', 'What Attorneys Handle')}
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      t('法務案件の受任・見積・請求', 'Accepting, quoting & billing for legal matters'),
                      t('法的判断・法律相談', 'Legal judgments & legal consultations'),
                      t('法務手続きの遂行責任', 'Responsibility for legal procedure execution'),
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 免責事項 */}
              <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mt-2">
                <ShieldAlert className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-amber-800">{t('免責事項', 'Disclaimer')}</p>
                  <ul className="space-y-1 text-xs text-amber-700">
                    <li>・{t('IGRSは法律相談・法的判断を提供しません', 'IGRS does not provide legal consultations or legal judgments')}</li>
                    <li>・{t('弁護士業務は弁護士が受任し、弁護士の責任で遂行します', 'Legal engagements are accepted and executed under the responsibility of the attorney')}</li>
                    <li>・{t('提出先による受理や手続き結果を保証するものではありません', 'We do not guarantee acceptance by the receiving authority or the outcome of any procedure')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
          <p className="text-sm font-bold text-secondary mb-2">{t('まずは無料でご相談ください', 'Start with a Free Consultation')}</p>
          <p className="text-xs text-gray-600 mb-4">
            {t(
              'どの書類が必要かわからない方も、状況をお聞きして最適な方法をご案内します。',
              "Not sure which documents you need? Tell us your situation and we'll guide you to the best solution."
            )}
          </p>
          <Link
            to="/contact/"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary-hover transition-colors shadow-md"
          >
            {t('お問い合わせはこちら', 'Contact Us')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
