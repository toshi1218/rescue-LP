import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import GuideLinks from '../components/GuideLinks';
import QuickFacts from '../components/QuickFacts';
import PainPoints from '../components/PainPoints';
import TrustTransparency from '../components/TrustTransparency';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import CaseStudies from '../components/CaseStudies';
import SocialProof from '../components/SocialProof';
import Process from '../components/Process';
import DiyRisks from '../components/DiyRisks';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { trackLandingView } from '../lib/analytics';

export default function HomeJa() {
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
        <GuideLinks />
        <QuickFacts />
        <PainPoints />
        <TrustTransparency />
        <Services />
        <WhyUs />
        <CaseStudies />
        <SocialProof />
        <Process />
        <DiyRisks />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

