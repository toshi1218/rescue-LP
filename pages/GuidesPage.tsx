import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, Clock, HelpCircle, Star, UserX, Fingerprint, BadgeCheck, Baby, Compass } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';

export default function GuidesPage() {
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t('お役立ちガイド一覧｜CENOMAR・NBI・DFAアポスティーユのFAQ集【2026年】｜フィリピン書類センター', 'Document Guides | CENOMAR, NBI, DFA Apostille FAQs [2026]'),
    t('フィリピン書類取得に関するお役立ちガイドとFAQ集。CENOMAR・NBI・DFAアポスティーユ・LTOについての疑問を解決するガイドページ一覧。', 'Helpful guides and FAQs for Philippine document retrieval. Find answers about CENOMAR, NBI Clearance, DFA Apostille, and LTO documents.')
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: 'お役立ちガイド一覧', item: 'https://ph-document.com/guides' },
        ],
      },
      {
        '@type': 'CollectionPage',
        name: 'お役立ちガイド一覧',
        description: 'フィリピン書類取得に関するお役立ちガイドとFAQ集。',
        url: 'https://ph-document.com/guides',
      },
    ],
  };

  const categories = [
    {
      title: t('CENOMAR（独身証明書）', 'CENOMAR (Certificate of No Marriage)'),
      icon: UserX,
      guides: [
        {
          to: t('/ja/cenomar', '/cenomar'),
          title: t('CENOMARガイド 完全版', 'CENOMAR Complete Guide'),
          desc: t('取得方法・費用・期間・有効期限まで基礎から解説', 'From acquisition method to fees, timeline, and validity — a complete guide'),
          tags: [t('基本ガイド', 'Basic Guide'), t('人気', 'Popular')],
          isPopular: true,
        },
        {
          to: t('/ja/cenomar-apostille', '/cenomar-apostille'),
          title: t('CENOMARにDFAアポスティーユは必要？', 'Does CENOMAR Need DFA Apostille?'),
          desc: t('国際結婚（LCCM）・配偶者ビザ・帰化の用途別に結論を解説', 'Answer by use case: LCCM, spouse visa, and naturalization'),
          tags: [t('FAQ', 'FAQ'), t('新着', 'New')],
          isPopular: false,
        },
        {
          to: t('/ja/cenomar-koyukigen', '/cenomar-validity'),
          title: t('CENOMARの有効期限は？"6ヶ月"の根拠', 'How Long Is CENOMAR Valid? The "6-Month Rule"'),
          desc: t('"6ヶ月"がどこに書いてあるか・取得タイミングの目安', 'Where the "6-month" rule comes from & ideal acquisition timing'),
          tags: [t('FAQ', 'FAQ'), t('新着', 'New')],
          isPopular: false,
        },
      ],
    },
    {
      title: t('NBI Clearance（無犯罪証明書）', 'NBI Clearance (Criminal Record Certificate)'),
      icon: Fingerprint,
      guides: [
        {
          to: t('/ja/nbi-clearance', '/nbi-clearance'),
          title: t('NBI Clearanceガイド 完全版', 'NBI Clearance Complete Guide'),
          desc: t('取得方法・HIT対処・DFAアポスティーユまで完全解説', 'From acquisition to HIT handling and DFA Apostille — complete guide'),
          tags: [t('基本ガイド', 'Basic Guide'), t('人気', 'Popular')],
          isPopular: true,
        },
        {
          to: t('/ja/nbi-hit', '/nbi-hit'),
          title: t('NBI HITとは？原因・解決手順・遅延日数', 'What is NBI HIT? Causes, Resolution & Delay Time'),
          desc: t('MATCH FOUNDが出た場合の対処法を徹底解説', 'Complete guide on what to do when "MATCH FOUND" appears'),
          tags: [t('FAQ', 'FAQ'), t('新着', 'New')],
          isPopular: false,
        },
        {
          to: t('/ja/nbi-koyukigen', '/nbi-validity'),
          title: t('NBI Clearanceの有効期限は？アポスティーユはExpireする？', 'NBI Clearance Validity & Does Apostille Expire?'),
          desc: t('1年ルール・用途別の注意点・アポスティーユの期限切れ問題を解説', '"1-year rule," usage-specific notes, and whether Apostille expires'),
          tags: [t('FAQ', 'FAQ')],
          isPopular: false,
        },
      ],
    },
    {
      title: t('DFAアポスティーユ認証', 'DFA Apostille Authentication'),
      icon: BadgeCheck,
      guides: [
        {
          to: t('/ja/apostille', '/apostille'),
          title: t('DFAアポスティーユガイド 完全版', 'DFA Apostille Complete Guide'),
          desc: t('対象書類・申請要件・取得方法・費用・期間を総合解説', 'Eligible documents, requirements, acquisition method, fees, and timeline'),
          tags: [t('基本ガイド', 'Basic Guide'), t('人気', 'Popular')],
          isPopular: true,
        },
        {
          to: t('/ja/apostille-shori-kikan', '/apostille-processing-time'),
          title: t('DFAアポスティーユ処理期間【2026年最新】', 'DFA Apostille Processing Time [2026]'),
          desc: t('通常・エクスプレスの日数目安と代行スケジュール', 'Standard & express day estimates and proxy service schedule'),
          tags: [t('FAQ', 'FAQ'), t('新着', 'New')],
          isPopular: false,
        },
        {
          to: t('/ja/apostille-ryokin', '/apostille-fee'),
          title: t('DFAアポスティーユの費用【2026年最新】', 'DFA Apostille Fee [2026]'),
          desc: t('DFA手数料・代行費用・セット料金の目安を解説', 'DFA fees, proxy service costs, and set pricing explained'),
          tags: [t('FAQ', 'FAQ')],
          isPopular: false,
        },
      ],
    },
    {
      title: t('PSA書類（出生・婚姻証明書）', 'PSA Documents (Birth & Marriage Certificate)'),
      icon: Baby,
      guides: [
        {
          to: t('/ja/psa-shussei-shomeisho', '/psa-birth-certificate'),
          title: t('PSA出生証明書の取得方法', 'How to Obtain PSA Birth Certificate'),
          desc: t('国際結婚・ビザ申請で必要な出生証明書の完全ガイド', 'Complete guide for birth certificate needed for international marriage and visa'),
          tags: [t('基本ガイド', 'Basic Guide'), t('人気', 'Popular')],
          isPopular: true,
        },
        {
          to: t('/ja/psa-shussei-cost', '/psa-birth-certificate-cost'),
          title: t('PSA出生証明書の費用【2026年最新】', 'PSA Birth Certificate Cost [2026]'),
          desc: t('PSA手数料・代行費用・DFAアポスティーユとのセット料金を解説', 'PSA official fee, proxy costs, and DFA Apostille set pricing explained'),
          tags: [t('FAQ', 'FAQ')],
          isPopular: false,
        },
        {
          to: t('/ja/psa-kekkon-shomeisho', '/psa-marriage-certificate'),
          title: t('PSA婚姻証明書の取得方法', 'How to Obtain PSA Marriage Certificate'),
          desc: t('フィリピン婚姻後の婚姻証明書取得と必要な場面', 'Post-marriage certificate acquisition and when it is needed'),
          tags: [t('基本ガイド', 'Basic Guide')],
          isPopular: false,
        },
      ],
    },
    {
      title: t('目的別ガイド', 'Guides by Purpose'),
      icon: Compass,
      guides: [
        {
          to: t('/ja/kokusai-kekkon-guide', '/international-marriage-guide'),
          title: t('フィリピン人との国際結婚 完全ガイド', 'International Marriage with Filipino Complete Guide'),
          desc: t('手続きの流れ・必要書類・費用・期間を初心者向けに解説', 'Process flow, required documents, fees & timeline for beginners'),
          tags: [t('目的別', 'By Purpose'), t('人気', 'Popular')],
          isPopular: true,
        },
        {
          to: t('/ja/haigusha-visa', '/spouse-visa-documents'),
          title: t('配偶者ビザに必要なフィリピン書類', 'Philippine Documents for Spouse Visa'),
          desc: t('配偶者ビザ申請に必要な書類チェックリスト', 'Document checklist for spouse visa application'),
          tags: [t('目的別', 'By Purpose')],
          isPopular: false,
        },
        {
          to: t('/ja/gaimen-kirikae-guide', '/drivers-license-conversion'),
          title: t('フィリピン免許→日本免許 外免切替ガイド', 'Philippines License → Japan License Conversion Guide'),
          desc: t('必要なLTO書類・手順・費用を解説', 'Required LTO documents, steps, and fees'),
          tags: [t('目的別', 'By Purpose')],
          isPopular: false,
        },
        {
          to: t('/ja/kika-shinsei-guide', '/naturalization-guide'),
          title: t('フィリピン人の帰化申請ガイド', 'Naturalization Guide for Filipino Nationals'),
          desc: t('日本帰化に必要なPSA・NBI書類と手続きの流れ', 'PSA & NBI documents and procedure flow for naturalization in Japan'),
          tags: [t('目的別', 'By Purpose')],
          isPopular: false,
        },
      ],
    },
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
        <nav className="text-xs text-gray-400 mb-6" aria-label="パンくずリスト">
          <Link to={t('/ja/', '/')} className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('お役立ちガイド一覧', 'All Guides')}</span>
        </nav>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden mb-6 shadow-card">
          <img
            src="/hero-photo.webp"
            alt={t('フィリピン書類取得ガイド', 'Philippine Document Procurement Guide')}
            className="w-full h-40 md:h-52 object-cover"
            loading="eager"
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {t('お役立ちガイド・FAQ一覧', 'All Guides & FAQ')}
        </h1>
        <p className="text-sm text-gray-500 mb-3">
          {t(
            'フィリピン書類取得でよくある疑問を、書類別・目的別にまとめました。ご自身の状況に合ったガイドを選んでご活用ください。',
            'We\'ve compiled common questions about Philippine document acquisition, organized by document type and purpose. Find the guide that matches your situation.'
          )}
        </p>
        <p className="text-sm text-gray-500 mb-10">{t('最終更新：2026年2月28日', 'Last updated: February 28, 2026')}</p>

        {/* 統計バナー */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {[
            { icon: <FileText className="w-5 h-5 text-primary" />, num: t('16本', '16'), label: t('ガイドページ', 'Guide Pages') },
            { icon: <HelpCircle className="w-5 h-5 text-primary" />, num: t('60+', '60+'), label: t('FAQ項目', 'FAQ Items') },
            { icon: <Clock className="w-5 h-5 text-primary" />, num: t('2026年', '2026'), label: t('最新情報', 'Latest Info') },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-card text-center">
              <div className="flex justify-center mb-1">{item.icon}</div>
              <p className="text-lg font-bold text-secondary">{item.num}</p>
              <p className="text-xs text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>

        {/* カテゴリー別ガイド */}
        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <section key={ci}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-lg font-bold text-secondary">{cat.title}</h2>
              </div>
              <div className="space-y-3">
                {cat.guides.map((guide, gi) => (
                  <Link
                    key={gi}
                    to={guide.to}
                    className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-card hover:border-primary hover:shadow-md transition-all group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        {guide.isPopular && (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                            <Star className="w-3 h-3" />{t('人気', 'Popular')}
                          </span>
                        )}
                        {guide.tags.filter(tag => !tag.includes('人気') && !tag.includes('Popular')).map((tag, ti) => (
                          <span key={ti} className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${
                            tag.includes('新着') || tag.includes('New')
                              ? 'bg-green-100 text-green-700'
                              : tag.includes('FAQ')
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-600'
                          }`}>{tag}</span>
                        ))}
                      </div>
                      <p className="text-sm font-bold text-secondary group-hover:text-primary transition-colors mb-1">{guide.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{guide.desc}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* よく検索されるキーワード */}
        <section className="mt-12 mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('よく検索されるキーワード', 'Frequently Searched Keywords')}</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'CENOMAR', 'CENOMAR meaning', 'what is CENOMAR', 'CENOMAR 有効期限', 'CENOMAR アポスティーユ',
              'NBI HIT', 'NBI Clearance 有効期限', 'does NBI apostille expire', 'NBI Clearance Philippines', 'フィリピン NBI',
              'DFA アポスティーユ 処理期間', 'DFA apostille processing time 2026', 'DFA apostille requirements',
              'PSA 出生証明書', 'PSA birth certificate cost 2026', 'PSA birth certificate requirements 2026', 'PSA 出生証明書 費用', 'PSA 婚姻証明書',
              'フィリピン 国際結婚', '配偶者ビザ 書類',
              '外免切替 フィリピン', '帰化申請 フィリピン人',
            ].map((kw, i) => (
              <span key={i} className="inline-block text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full shadow-sm">
                {kw}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-secondary text-white rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold mb-3">
            {t('お探しの情報が見つかりませんでしたか？', 'Couldn\'t find what you were looking for?')}
          </h2>
          <p className="text-sm text-gray-300 mb-5">
            {t(
              'どのような書類が必要かわからない方も、まずはお気軽にご相談ください。日本語で丁寧にご案内します。',
              'Even if you\'re unsure which documents you need, feel free to contact us first. We\'ll guide you through everything.'
            )}
          </p>
          <Link
            to={t('/ja/contact', '/contact')}
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors"
          >
            {t('無料相談する', 'Free Consultation')}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
