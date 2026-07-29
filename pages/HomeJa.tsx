import React, { useEffect, useState } from 'react';
import { CheckCircle, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import GuideLinks from '../components/GuideLinks';
import QuickFacts from '../components/QuickFacts';
import PainPoints from '../components/PainPoints';
import WhyUs from '../components/WhyUs';
import CaseStudies from '../components/CaseStudies';
import SocialProof from '../components/SocialProof';
import DiyRisks from '../components/DiyRisks';
import ServicePacks from '../components/ServicePacks';
import FAQ from '../components/FAQ';
import FinalCta from '../components/FinalCta';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { trackLandingView } from '../lib/analytics';
import { useMeta } from '../lib/useMeta';
import { SEO_TITLE_BADGE_JA } from '../lib/seoDate';

export default function HomeJa() {
  const [noticeExpanded, setNoticeExpanded] = useState(false);

  useMeta(
    `フィリピン書類、日本語だけで確実に取り寄せできます｜CENOMAR・PSA・NBI代行${SEO_TITLE_BADGE_JA}`,
    'CENOMAR・PSA出生証明書・NBI Clearance・DFAアポスティーユを日本語だけで安心代行。フィリピン渡航不要。進捗は随時ご報告。国際結婚・配偶者ビザ・帰化申請に対応。無料相談受付中。',
    'https://ph-document.com/ja/',
  );

  useEffect(() => {
    trackLandingView();
  }, []);

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: 'フィリピン書類取得代行センター',
    legalName: '株式会社IGRS',
    alternateName: ['ph-document.com', 'IGRS Inc.'],
    url: 'https://ph-document.com/ja/',
    logo: 'https://ph-document.com/logo.png',
    image: 'https://ph-document.com/og-image.png',
    description: 'フィリピンの公的書類（PSA出生証明書・CENOMAR・NBI Clearance・DFAアポスティーユ）を日本語だけで代行取得するサービスを提供。国際結婚・配偶者ビザ・帰化申請・外免切替に対応。渡航不要。',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'JP',
      addressRegion: '和歌山県',
      addressLocality: '和歌山市',
    },
    location: {
      '@type': 'Place',
      name: 'セブ市営業所（フィリピン共和国）',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PH',
        addressLocality: 'Cebu City',
      },
    },
    email: 'igrs20200601@gmail.com',
    sameAs: [
      'https://ph-document.com/ja/company/',
      'https://ph-document.com/en/company/',
      'https://share.google/oOoXo3nIRvnAAhbg0',
      'https://note.com/igrs_philippines',
      'https://x.com/GswCnxL7Sg15778',
      'https://www.facebook.com/share/1KTmc7CeXi/',
      'https://page.line.me/827jdwvl',
    ],
    areaServed: [
      { '@type': 'Country', name: 'JP' },
      { '@type': 'Country', name: 'PH' },
      { '@type': 'Country', name: 'US' },
      { '@type': 'Country', name: 'CA' },
      { '@type': 'Country', name: 'AU' },
      { '@type': 'Country', name: 'GB' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'igrs20200601@gmail.com',
      contactType: 'customer service',
      availableLanguage: ['Japanese', 'English'],
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    priceRange: '¥50,000〜¥100,000',
    currenciesAccepted: 'JPY',
    // NOTE: aggregateRating はプリレンダのテンプレート（buildLocalBusinessJsonLd）が
    // LocalBusiness 側で出力する。自己掲載の review[] マークアップは Google の
    // 自己申告レビュー方針上リスクが高いため JSON-LD からは除去（本文「お客様の声」
    // 表示は維持）。実在・検証可能なレビュー（GBP等）が用意できたら再検討する。
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'フィリピン書類取得代行サービス',
      itemListElement: [
        {
          '@type': 'Offer',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: '50000', priceCurrency: 'JPY' },
          itemOffered: { '@type': 'Service', name: 'CENOMAR・PSA出生証明書取得代行＋DFAアポスティーユ', description: 'フィリピン統計局（PSA）発行の独身証明書・出生証明書をDFAアポスティーユ付きで代行取得。DHL配送込み。' },
        },
        {
          '@type': 'Offer',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: '55000', priceCurrency: 'JPY' },
          itemOffered: { '@type': 'Service', name: 'NBI Clearance取得代行＋DFAアポスティーユ', description: 'フィリピン国家捜査局（NBI）発行の無犯罪証明書をDFAアポスティーユ付きで代行取得。DHL配送込み。' },
        },
        {
          '@type': 'Offer',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: '99800', priceCurrency: 'JPY' },
          itemOffered: { '@type': 'Service', name: '国際結婚準備パック（PSA出生証明書＋CENOMAR＋DFAアポスティーユ）', description: '日本での国際結婚手続きに必要なフィリピン側書類をまとめて代行取得。' },
        },
        {
          '@type': 'Offer',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: '100000', priceCurrency: 'JPY' },
          itemOffered: { '@type': 'Service', name: 'LTO運転経歴証明書取得代行（外免切替用）', description: 'フィリピン陸運局（LTO）発行の運転経歴証明書をDFAアポスティーユ付きで代行取得。DHL配送込み。' },
        },
      ],
    },
    dateModified: '2026-03-01',
  };

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Navbar />
      <main id="main-content">
        <Hero />
        {/* スティッキージャンプバー */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
          <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 py-2.5 flex items-center justify-center gap-1 overflow-x-auto">
            <a href="#faq" className="flex-shrink-0 text-xs font-bold text-gray-600 hover:text-secondary transition-colors py-1.5 px-3 rounded-lg hover:bg-gray-50 whitespace-nowrap">よくある質問</a>
            <span className="text-gray-200 text-xs">|</span>
            <a href="/ja/ryokin/" className="flex-shrink-0 text-xs font-bold text-gray-600 hover:text-secondary transition-colors py-1.5 px-3 rounded-lg hover:bg-gray-50 whitespace-nowrap">料金を見る</a>
            <span className="text-gray-200 text-xs">|</span>
            <a href="#contact" className="flex-shrink-0 text-xs font-bold text-white bg-secondary py-1.5 px-4 rounded-lg hover:bg-secondary/90 transition-all whitespace-nowrap">今すぐ相談</a>
          </div>
        </div>
        <div className="container mx-auto max-w-5xl px-4 pt-8">
          <section className="mb-10 rounded-2xl overflow-hidden border border-gray-200 border-l-4 border-l-secondary bg-white shadow-md">
            <div className="h-1.5 w-full bg-gradient-to-r from-secondary via-secondary-light to-secondary" />
            <div className="p-6 md:p-8">
              <div className="inline-block mb-4 px-3 py-1 bg-secondary text-white text-xs font-bold rounded tracking-wide">
                PSA紙原本 取得可能
              </div>
              <p className="text-base md:text-lg font-bold text-secondary leading-snug mb-3">
                <span className="text-primary-dark">PSAの紙原本は現在も取得できます。</span>2026年3月以降に変更されたのは<strong>認証方法のみ</strong>で、DFAの認証がe-Apostille（電子）へ移行しました。当社では、<strong>PSA紙原本の取得からe-Apostille、海外発送（DHL）まで一括で対応</strong>します。
              </p>
              {noticeExpanded && (
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      <strong className="text-gray-900">変わったこと・変わらないこと</strong>：変わったのはDFAの認証方法だけです。PSA民事書類（出生・婚姻・CENOMAR等）へ貼る<strong>物理アポスティーユ（紙）は2026年3月以降発行されず、e-Apostille（電子）に一本化</strong>されました。一方で<strong className="text-primary-dark">PSAの紙原本（SECPA）そのものは従来どおり取得でき、DHLで日本・海外へお届けできます</strong>。NBI・LTO・PRCなどのPSA以外の書類には、引き続き物理アポスティーユが利用できます。
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      <strong className="text-gray-900">日本の役所・入管・総領事館の傾向</strong>：日本の提出先は当面、紙のPSA原本を前提とする運用が想定されます。紙原本はこれまでどおりお届けできますので、確認が必要なのは<strong>認証をe-Apostille（電子）で受理してもらえるか</strong>の一点です。確認の進め方が分からない場合も、当社が一緒に整理します。
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      <strong className="text-gray-900">当社が行うこと</strong>：現地でのPSA紙原本の取得手配、DFA e-Apostilleのオンライン申請・支払い代行（英語・タガログのみの公式サイトを日本語で代行）、書類のチェック、DHLでの海外発送までをまとめてお引き受けします。
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      <strong className="text-gray-900">納期の目安</strong>：現在ご依頼が集中しており、納期は約2ヶ月が目安です。提出期限がある方はお早めにご相談ください。
                    </span>
                  </li>
                </ul>
              )}
              {!noticeExpanded && (
                <button
                  onClick={() => setNoticeExpanded(true)}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-secondary-light transition-colors"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                  詳細を見る
                </button>
              )}

              {/* e-Certificate対応の案内 */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-start gap-3 bg-blue-50 rounded-xl px-4 py-3">
                <span className="flex-shrink-0 text-blue-500 text-base leading-none mt-0.5">ℹ️</span>
                <div>
                  <p className="text-xs font-bold text-blue-800 mb-0.5">e-Certificate（電子文書）での提出が認められている場合</p>
                  <p className="text-xs text-blue-700 leading-relaxed">
                    提出先に確認し、電子文書でOKと言われた場合は<strong>e-CertificateおよびeApostilleの取得代行</strong>にも対応しています。
                    <a href="#contact" className="underline underline-offset-2 font-bold ml-1 hover:text-blue-900 transition-colors">まずご相談ください</a>。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <ServicePacks />
        <PainPoints />
        <WhyUs />
        <SocialProof />
        <CaseStudies />
        <FinalCta />
        <DiyRisks />
        <GuideLinks maxItems={6} />
        <QuickFacts />
        <FAQ />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
