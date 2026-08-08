import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import GuideLinks from '../components/GuideLinks';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import CaseStudies from '../components/CaseStudies';
import SocialProof from '../components/SocialProof';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { trackLandingView } from '../lib/analytics';
import { useMeta } from '../lib/useMeta';
import { SEO_DATE_ISO } from '../lib/seoDate';

export default function HomeEn() {
  useMeta(
    'Philippine Documents for International Marriage & Visa',
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
        <section className="bg-secondary px-4 py-16 text-white" aria-labelledby="home-pricing-title">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary">Transparent pricing</span>
              <h2 id="home-pricing-title" className="text-2xl font-bold">Know the likely cost before you contact us</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
                Your final quote depends on the document, destination, and receiving authority. We confirm the required format before you pay.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { name: 'Marriage Basic', price: 'US$399', detail: 'PSA Birth Certificate + CENOMAR, required authentication, and DHL', time: 'Approx. 4–6 weeks' },
                { name: 'Marriage Full', price: 'US$699', detail: 'PSA documents + CENOMAR + NBI, required authentication, and DHL', time: 'Approx. 4–6 weeks' },
                { name: 'Single PSA Document', price: 'From US$199', detail: 'Physical PSA original + DHL. Authentication quoted only when required.', time: 'Approx. 4–6 weeks' },
              ].map((plan) => (
                <article key={plan.name} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                  <h3 className="text-sm font-bold text-primary">{plan.name}</h3>
                  <p className="mt-2 text-2xl font-extrabold">{plan.price}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{plan.detail}</p>
                  <p className="mt-4 text-xs font-semibold text-white/60">{plan.time}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href="/en/pricing/" className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-4 font-bold text-secondary shadow-lg transition-all hover:bg-primary-hover">
                View All Pricing & Inclusions
              </a>
              <p className="mt-3 text-xs text-white/60">Fixed quote before work starts · No commitment at quote stage</p>
            </div>
          </div>
        </section>
        <WhyUs />
        <CaseStudies />
        <SocialProof />
        <Process />
        <GuideLinks maxItems={4} />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
