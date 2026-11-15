import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { FileCheck, Globe, AlertTriangle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR } from '../lib/seoDate';

const faqs = [
  { q: 'How much does DFA Apostille cost?', a: 'The government fee per document is ₱100 regular or ₱200 expedited/e-Apostille. Document issuance, delivery, and service charges are separate.' },
  { q: 'What does your service quote include?', a: 'We list the agreed document retrieval, authentication, and delivery scope before you commit. The government fee alone is not our service price.' },
  { q: 'Is Apostille always required?', a: 'It depends on your submission authority. We confirm this before quoting so you do not pay for authentication you do not need.' },
  { q: 'Can you handle urgent cases?', a: 'Share your deadline and document type. We confirm whether expedited processing is available for your route; this does not guarantee an earlier appointment or end-to-end delivery date.' },
];

export default function ApostilleFeeEn() {
  useMeta(
    `DFA Apostille Fee [${SEO_YEAR}] — Regular, Expedited & e-Apostille Costs`,
    'DFA fees per document: ₱100 regular, ₱200 expedited or e-Apostille. Compare government charges with document issuance, delivery, and our service quote.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'DFA Apostille Fee & Pricing' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'DFA Apostille Authentication Service — All-Inclusive Pricing',
        description: 'We quote retrieval, the authentication route required by the receiving authority, and delivery separately from the published DFA government fee.',
        url: 'https://ph-document.com/en/apostille-fee/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'KR'],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '219',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '219',
            priceCurrency: 'USD',
            description: 'DFA Apostille + DHL shipping worldwide (all-inclusive)',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        },
      ]}
    >
      <HeroBanner
        title="DFA Apostille Fees: Government Charges & Service Cost"
        subtitle="See the official fees below. Our quote covers the agreed retrieval, authentication, and delivery work your case requires."
        badges={['Government Fees Explained', 'Upfront Service Quote', 'Electronic or Physical Delivery']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="November 6, 2026"
      />

      <SummaryBlock
        conclusion="The DFA government fee and our service price cover different things. We confirm your required documents and quote the agreed total before starting."
        points={[
          'Eligible PSA e-Certificates use the electronic e-Apostille route; eligible non-PSA documents may follow a physical process',
          'Document issuance, delivery, and our service fee must be considered alongside government charges',
          'Your quote includes only the retrieval, authentication, and physical shipping scope agreed for your case',
        ]}
        ctaText="Get Your Total Quote"
      />

      <section className="mb-10" aria-labelledby="dfa-fees-heading">
        <h2 id="dfa-fees-heading" className="text-xl font-bold text-gray-900 mb-3">Official DFA fees per document</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-secondary text-white">
              <tr><th scope="col" className="px-4 py-3">Processing</th><th scope="col" className="px-4 py-3">Government fee</th><th scope="col" className="px-4 py-3">Release</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              <tr><th scope="row" className="px-4 py-3 font-medium">Regular</th><td className="px-4 py-3">₱100</td><td className="px-4 py-3">After 5 working days</td></tr>
              <tr><th scope="row" className="px-4 py-3 font-medium">Expedited</th><td className="px-4 py-3">₱200</td><td className="px-4 py-3">After 2 working days</td></tr>
              <tr><th scope="row" className="px-4 py-3 font-medium">e-Apostille</th><td className="px-4 py-3">₱200</td><td className="px-4 py-3">After 1 working day</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Sources: <a href="https://www.apostille.gov.ph/schedule-of-fees-tab/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">DFA Schedule of Fees</a> and <a href="https://www.apostille.gov.ph/faqs/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">DFA FAQs</a>. Availability depends on the document and route. These schedules exclude document issuance and delivery and are not an end-to-end guarantee.
        </p>
      </section>

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Comparing agencies by per-document price',
            description: 'Some agencies advertise a low base fee but add Apostille, shipping, and handling separately. We quote everything upfront in one price.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Want to know the total cost before committing',
            description: 'We quote the agreed scope after confirming whether the case uses PSA e-Apostille, an eligible non-PSA physical route, or no DFA authentication.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Not sure if Apostille is even required',
            description: 'We confirm whether Apostille is needed for your specific submission authority before quoting — no unnecessary costs.',
          },
        ]}
      />

      <CtaBox
        title="Get the real total — not just the base fee"
        description="We quote the DFA Apostille application, PSA online application, and DHL shipping for physical documents together. No surprise add-ons after you start."
        buttonText="Talk to Us"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage · Pay balance only after confirming document copies"
      />

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille application',
            description: 'For eligible PSA e-Certificates, DFA issues an electronic e-Apostille. Eligible non-PSA documents may follow a physical process under the current DFA requirements.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA online application (when needed)',
            description: 'We can bundle the PSA online application with the DFA e-Apostille application for a single all-inclusive price.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping when physical delivery is needed',
            description: 'Tracked delivery is included in the agreed physical-document scope. e-Apostilles are delivered electronically.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us which documents need Apostille and your submission authority.' },
          { title: 'We provide all-inclusive pricing', description: 'DFA Apostille application, PSA online application, and DHL shipping for physical documents quoted together upfront.' },
          { title: 'We handle the applications', description: 'We complete PSA online applications and e-Apostille applications; eligible non-PSA documents follow the current physical process when applicable.' },
          { title: 'Electronic delivery or physical shipment', description: 'Receive the e-Apostille electronically. If paper documents are required, we arrange tracked shipping and quote the total timeline for that scope.' },
        ]}
      />

      <FaqSection
        items={faqs}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
