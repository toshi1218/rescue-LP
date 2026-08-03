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
import CtaBox from '../components/CtaBox';
import Footer from '../components/Footer';
import { trackLandingView } from '../lib/analytics';
import { useMeta } from '../lib/useMeta';
import { SEO_DATE_ISO, SEO_YEAR_MONTH_EN } from '../lib/seoDate';

export default function HomeEn() {
  useMeta(
    `Philippine Documents for International Marriage & Visa [${SEO_YEAR_MONTH_EN}]`,
    `Getting married to a Filipino, or moving countries together? We verify format requirements, procure physical PSA originals + DFA Apostille, and ship via DHL worldwide.`,
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
        <section className="bg-white px-4 py-8">
          <div className="mx-auto max-w-4xl rounded-2xl border border-primary/25 bg-primary/5 p-5 md:p-6">
            <h2 className="mb-2 text-lg font-bold text-secondary">One service from retrieval to authentication and worldwide delivery</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              We coordinate PSA and NBI retrieval, DFA authentication, and international delivery. For PSA civil documents, DFA authentication is issued as an e-Apostille; where your authority needs a physical PSA original, we confirm the required format before arranging DHL delivery.
            </p>
            <p className="mt-2 text-xs text-gray-500">Free quote · Reply within one business day. Tell us the receiving authority even if you are unsure whether an electronic or physical document is required.</p>
            <a href="#contact" className="mt-4 inline-flex items-center justify-center rounded-xl bg-secondary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-secondary-light">
              Request a Free Quote
            </a>
          </div>
        </section>
        <Services />
        <PainPoints />
        <WhyProxy />
        <TrustTransparency />
        <WhyUs />
        <CaseStudies />
        <div className="container mx-auto max-w-4xl px-4 my-12">
          <CtaBox
            title="Not sure which documents you need?"
            description="Tell us your situation — we'll map out the exact Philippine documents required and send a clear quote within 24 hours."
            buttonText="Free Consultation"
            href="#contact"
            trustNote="Free cancellation at quote stage · Reply within 24h"
            whatsappHref="https://wa.me/639452833727"
          />
        </div>
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
