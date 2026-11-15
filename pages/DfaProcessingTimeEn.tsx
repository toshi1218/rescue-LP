import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { Clock, Calendar, FileCheck, Globe } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

const faqs = [
  { q: 'How long does DFA Apostille take?', a: 'DFA lists release after 5 working days (regular), 2 (expedited), or 1 (e-Apostille). Document issuance and delivery take additional time.' },
  { q: 'Can I request priority handling?', a: 'Share your deadline and document type. We confirm whether expedited processing is available for your route; this does not guarantee an earlier appointment or end-to-end delivery date.' },
  { q: 'How much does your service cost?', a: 'We quote the agreed scope separately from government fees, including document retrieval, authentication when required, and shipping only when physical delivery is needed.' },
  { q: 'I am worried about missing my deadline', a: 'Share your deadline and we will confirm whether it is feasible. Starting early is the best way to stay on track.' },
];

export default function DfaProcessingTimeEn() {
  useMeta(
    'DFA Apostille Processing Time: Regular, Expedited & e-Apostille',
    'DFA lists release after 5 working days for regular, 2 for expedited, and 1 for e-Apostille. Check document issuance and delivery time separately.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'DFA Apostille Processing Time' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'DFA Apostille Service — Timed for Your Visa Deadline',
          description: 'DFA processing time depends on the document and route. PSA e-Apostilles are handled online, while eligible non-PSA documents may follow a physical process. We confirm the current timeline before you apply.',
          url: 'https://ph-document.com/en/apostille-processing-time/',
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
              description: 'DFA Apostille authentication + DHL shipping worldwide (all-inclusive)',
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
        title="DFA Apostille Processing Time: Official Schedule & Your Deadline"
        subtitle="Check the DFA release schedule below, then allow for document retrieval, appointment availability, and any delivery your case requires."
        badges={['Current Route Confirmed', 'Digital or Physical Process', 'Deadline-Aware Planning']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="November 6, 2026"
      />

      <SummaryBlock
        conclusion="DFA processing is one part of your timeline. The applicable route must be confirmed before estimating when your documents will be ready to submit."
        points={[
          'Eligible PSA e-Certificates use the electronic e-Apostille route; eligible non-PSA documents may follow a physical process',
          'Document issuance, appointment availability, corrections, and shipping can extend the total timeline',
          'We check your document type, receiving authority, and deadline before quoting',
        ]}
        ctaText="Check Your Deadline"
      />

      <section className="mb-10" aria-labelledby="dfa-schedule-heading">
        <h2 id="dfa-schedule-heading" className="text-xl font-bold text-gray-900 mb-3">Official DFA release schedule</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-secondary text-white">
              <tr><th scope="col" className="px-4 py-3">Processing</th><th scope="col" className="px-4 py-3">Release</th><th scope="col" className="px-4 py-3">Government fee / document</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              <tr><th scope="row" className="px-4 py-3 font-medium">Regular</th><td className="px-4 py-3">After 5 working days</td><td className="px-4 py-3">₱100</td></tr>
              <tr><th scope="row" className="px-4 py-3 font-medium">Expedited</th><td className="px-4 py-3">After 2 working days</td><td className="px-4 py-3">₱200</td></tr>
              <tr><th scope="row" className="px-4 py-3 font-medium">e-Apostille</th><td className="px-4 py-3">After 1 working day</td><td className="px-4 py-3">₱200</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Sources: <a href="https://www.apostille.gov.ph/schedule-of-fees-tab/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">DFA Schedule of Fees</a> and <a href="https://www.apostille.gov.ph/faqs/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">DFA FAQs</a>. These are processing schedules, not a delivery guarantee. Government fees exclude source-document issuance, shipping, and our service fee. Route eligibility and current availability apply.
        </p>
      </section>

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Clock className="w-4 h-4" />,
            title: 'Want to know how long DFA Apostille takes',
            description: 'Physical-document and PSA e-Apostille routes follow different processes. We confirm the current route and work backward from your deadline before quoting.',
          },
          {
            icon: <Calendar className="w-4 h-4" />,
            title: 'Have a K-1 or CR-1 interview date coming up',
            description: 'We work backward from your target date and confirm whether any priority option is available for the applicable route.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Want to bundle document retrieval and Apostille',
            description: 'We handle the PSA application, the applicable DFA authentication route, and DHL shipping when a physical document is required.',
          },
        ]}
      />

      <CtaBox
        title="Tell us your deadline — we will plan the timeline"
        description="We confirm the current route, estimated timing, and whether any priority option is available for your case."
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
            title: 'DFA Apostille authentication',
            description: 'For PSA e-Certificates, the DFA e-Apostille is delivered electronically. Non-PSA documents may follow a physical route when applicable.',
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
          { title: 'Share your target date', description: 'Tell us your visa interview, immigration submission, or other deadline.' },
          { title: 'We plan the timeline and quote', description: 'We confirm the current route, timing, and whether a priority option is available.' },
          { title: 'We handle the applications', description: 'We complete PSA online applications and DFA e-Apostille applications; eligible non-PSA documents follow the current physical process when applicable.' },
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
