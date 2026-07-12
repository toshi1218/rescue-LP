import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import GuideLinks from '../components/GuideLinks';
import CtaBox from '../components/CtaBox';
import { useMeta } from '../lib/useMeta';
import { SEO_TITLE_BADGE_YEAR_EN, SEO_YEAR } from '../lib/seoDate';

const COUNTRY_LINKS = [
  { label: 'United States (K-1 / CR-1)', path: '/en/us-visa-documents/' },
  { label: 'Canada', path: '/en/canada/' },
  { label: 'Australia', path: '/en/australia/' },
  { label: 'UK', path: '/en/uk/' },
];

export default function GuidesEn() {
  useMeta(
    `Philippine Document Guides ${SEO_TITLE_BADGE_YEAR_EN} | FAQ & How-To`,
    `${SEO_YEAR} guide library for Philippine documents: CENOMAR, NBI Clearance, DFA Apostille explained. Answers for US visa, K-1, CR-1, and immigration applicants.`,
  );
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Guides' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Philippine Document Services — Guide Index</h1>
      <p className="text-sm text-gray-600 mb-6">
        We retrieve CENOMAR, PSA Birth Certificate, NBI Clearance, and DFA Apostille for Filipino nationals living abroad.
        All-inclusive service starting from US$349 — shipped worldwide via DHL. No trip to the Philippines needed.
      </p>
      <GuideLinks />

      <section className="mt-10">
        <h2 className="text-lg font-bold text-secondary mb-3 border-b border-primary/20 pb-2">Document Requirements by Country</h2>
        <p className="text-sm text-gray-600 mb-4">Philippine document and authentication requirements vary by destination country. Select your country below.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {COUNTRY_LINKS.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className="block px-3 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-10">
        <CtaBox
          title="Not sure which documents you need?"
          description="Tell us your visa type and destination country. We confirm exactly what to order — CENOMAR, PSA, NBI, Apostille — and give you a fixed all-inclusive quote."
          buttonText="Free Consultation"
          href="#contact"
          variant="primary"
          trustNote="Free cancellation before start · Reply within 24 hours · Pay by Visa / Mastercard / Amex"
          whatsappHref="https://wa.me/639452833727"
        />
      </div>
    </PageLayout>
  );
}
