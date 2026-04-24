import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SummaryBlock from '../components/SummaryBlock';
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
        <div className="container mx-auto max-w-5xl px-4 pt-8">
          <SummaryBlock
            conclusion="2026年3月以降、フィリピンPSA書類は電子と紙に分かれました。弊社は知る限り、従来の紙原本＋紙アポスティーユで継続対応できる数少ない代行業者です。"
            points={[
              'PSA E-Certificate（電子）とSECPA（紙原本）のどちらの形式にも対応。日本の提出先の要件に合わせてお選びいただけます。',
              'フィリピン現地の自社営業所からPSA窓口・DFA窓口ルートで紙原本を直接取得できるため、オンライン業者が紙の納品を縮小する中でも継続対応可能です。',
              '現在ご依頼が急増しており、納期は約2ヶ月が目安です。提出期限がある方は早めにご相談ください（お急ぎの方は個別にご相談承ります）。',
            ]}
          />
        </div>
        <ServicePacks />
        <PainPoints />
        <WhyUs />
        <CaseStudies />
        <DiyRisks />
        <SocialProof />
        <GuideLinks maxItems={6} />
        <QuickFacts />
        <FAQ />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
