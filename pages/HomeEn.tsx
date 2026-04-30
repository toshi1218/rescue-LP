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
import { SEO_DATE_ISO } from '../lib/seoDate';

export default function HomeEn() {
  useMeta(
    'Philippine PSA Documents for Overseas Submission',
    'Not every authority accepts a PSA e-Certificate. We verify format requirements, procure physical originals + DFA Apostille, and ship via DHL worldwide.',
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
    description: 'Philippine PSA document service for overseas submission. We verify receiving authority requirements and procure physical PSA Birth Certificates, CENOMAR, NBI Clearance, and DFA Apostille for clients in UAE, Korea, Europe, USA, and worldwide. Paper originals shipped via DHL Express.',
    areaServed: [
      { '@type': 'Country', name: 'US' },
      { '@type': 'Country', name: 'CA' },
      { '@type': 'Country', name: 'AU' },
      { '@type': 'Country', name: 'GB' },
      { '@type': 'Country', name: 'JP' },
      { '@type': 'Country', name: 'KR' },
      { '@type': 'Country', name: 'NL' },
      { '@type': 'Country', name: 'DE' },
      { '@type': 'Country', name: 'SG' },
      { '@type': 'Country', name: 'HK' },
      { '@type': 'Country', name: 'NZ' },
      { '@type': 'Country', name: 'AE' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'Japanese'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Philippine Document Services for Overseas Submission',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Acceptance Check — Verify receiving authority format requirements' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Physical PSA Birth Certificate (Original, not e-Certificate)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Physical CENOMAR (Certificate of No Marriage) — Original' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NBI Clearance for Immigration and Visa' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DFA Apostille Authentication — Paper Original' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'International Shipping via DHL Express' } },
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
      <main id="main-content">
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
        <GuideLinks maxItems={6} />
        <QuickFacts />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

