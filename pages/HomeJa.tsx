import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustSimple from '../components/TrustSimple';
import ServicePacks from '../components/ServicePacks';
import FinalCta from '../components/FinalCta';
import Footer from '../components/Footer';
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
    '@type': 'Organization',
    name: 'IGRS Inc.',
    alternateName: 'ph-document.com',
    url: 'https://ph-document.com/ja/',
    logo: 'https://ph-document.com/logo.png',
    description: 'フィリピンの公的書類（PSA出生証明書・CENOMAR・NBI Clearance・DFAアポスティーユ）を日本語だけで代行取得するサービスを提供。国際結婚・配偶者ビザ・帰化申請・外免切替に対応。',
    areaServed: [
      { '@type': 'Country', name: 'JP' },
      { '@type': 'Country', name: 'PH' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'Japanese',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'フィリピン書類取得代行サービス',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CENOMAR（独身証明書）取得代行' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PSA出生証明書取得代行' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NBI Clearance取得代行' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DFAアポスティーユ代行' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LTOドライバーズレコード取得代行' } },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Navbar />
      <main>
        <Hero />
        <ServicePacks />
        <TrustSimple />
        <FinalCta />
        <Footer />
      </main>
    </div>
  );
}
