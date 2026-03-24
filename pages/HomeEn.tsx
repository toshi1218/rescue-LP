import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import GuideLinks from '../components/GuideLinks';
import QuickFacts from '../components/QuickFacts';
import PainPoints from '../components/PainPoints';
import WhyProxy from '../components/WhyProxy';
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
import { useMeta } from '../lib/useMeta';
import { SEO_TITLE_BADGE_EN, SEO_DATE_ISO } from '../lib/seoDate';

export default function HomeEn() {
  useMeta(
    `Philippine Document Service | PSA, NBI & CENOMAR ${SEO_TITLE_BADGE_EN}`,
    'Need Philippine documents for immigration? We retrieve PSA, CENOMAR, NBI Clearance + DFA Apostille. Ships via DHL worldwide. Free consultation.',
    'https://ph-document.com/en/',
  );

  useEffect(() => {
    trackLandingView();
  }, []);

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IGRS Inc.',
    alternateName: 'ph-document.com',
    url: 'https://ph-document.com/en/',
    logo: 'https://ph-document.com/logo.png',
    description: 'Philippine document retrieval service for immigration. We obtain PSA Birth Certificates, CENOMAR, NBI Clearance, and DFA Apostille for clients worldwide. Specializing in international marriage, spouse visas, naturalization, and license conversion.',
    areaServed: [
      { '@type': 'Country', name: 'US' },
      { '@type': 'Country', name: 'CA' },
      { '@type': 'Country', name: 'AU' },
      { '@type': 'Country', name: 'GB' },
      { '@type': 'Country', name: 'JP' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'Japanese'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Philippine Document Retrieval Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CENOMAR (Certificate of No Marriage) Retrieval' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PSA Birth Certificate Retrieval' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NBI Clearance Retrieval' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DFA Apostille Authentication' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LTO Driver Record Retrieval' } },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '47',
    },
    dateModified: SEO_DATE_ISO,
  };

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PainPoints />
        <WhyProxy />
        <TrustTransparency />
        <WhyUs />
        <CaseStudies />
        <SocialProof />
        <Process />
        <DiyRisks />
        <GuideLinks />
        <QuickFacts />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

