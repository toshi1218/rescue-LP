import React, { useEffect } from 'react';
import { FileText, Info } from 'lucide-react';
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
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { trackLandingView } from '../lib/analytics';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function HomeJa() {
  useMeta(
    `フィリピン書類、日本語だけで確実に取り寄せできます｜CENOMAR・PSA・NBI代行【${SEO_YEAR_MONTH_JA}】`,
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '47',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: '30代 女性（国際結婚）' },
        reviewBody: '日本語で全て対応してもらえ、フィリピンに渡航せずにCENOMARとPSA出生証明書を取得できました。進捗報告も丁寧で安心でした。',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: '40代 男性（配偶者ビザ申請）' },
        reviewBody: 'NBI ClearanceのDFAアポスティーユも含めてまとめて依頼できました。入管提出に間に合い、配偶者ビザ申請が無事完了しました。',
      },
    ],
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
        <div className="container mx-auto max-w-5xl px-4 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {/* 紙原本対応 */}
            <section className="rounded-xl bg-white border border-gray-200 border-l-4 border-l-red-700 shadow-sm px-4 py-3.5 flex flex-col gap-2.5">
              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-red-700 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="inline-block px-2 py-0.5 bg-red-700 text-white text-[10px] font-bold rounded tracking-wide mb-1.5">紙原本対応</span>
                  <p className="text-xs text-gray-700 leading-relaxed">2026年3月のPSAデジタル化以降も、当社はPSA・DFA窓口で直接<strong className="text-red-700">紙原本の取得・アポスティーユ対応が可能です</strong>。納期は約2ヶ月が目安。</p>
                </div>
              </div>
              <a href="#contact" className="inline-flex items-center gap-0.5 text-xs font-bold text-red-700 hover:text-red-800 transition-colors self-start">
                詳細を見る →
              </a>
            </section>

            {/* e-Certificate対応 */}
            <section className="rounded-xl bg-blue-50 border border-blue-100 shadow-sm px-4 py-3.5 flex flex-col gap-2.5">
              <div className="flex items-start gap-3">
                <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-xs font-bold text-blue-800 leading-snug mb-1">e-Certificate（電子文書）での提出が認められている場合</p>
                  <p className="text-xs text-blue-700 leading-relaxed">電子文書でOKと言われた場合は、<strong>e-CertificateおよびeApostille</strong>の取得代行にも対応しています。</p>
                </div>
              </div>
              <a href="#contact" className="inline-block text-xs font-bold text-blue-800 underline underline-offset-2 hover:text-blue-900 transition-colors self-start">
                まずご相談ください →
              </a>
            </section>
          </div>
        </div>
        <ServicePacks />
        <PainPoints />
        <WhyUs />
        <SocialProof />
        <CaseStudies />
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
