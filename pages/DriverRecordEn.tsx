import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { useMeta } from '../lib/useMeta';

const title = "Philippine LTO Driver's Record from Abroad | US$330";
const description = "Get your Philippine LTO Certification and License History from overseas. US$330 includes DFA Apostille and DHL. Allow 4–6 weeks for standard orders.";
const serviceName = "Philippine LTO Driver's Record Retrieval";
const standardFee = 330;
const standardTurnaround = '4–6 weeks';

const faq = [
  {
    q: 'Can I get my Philippine driving record while living abroad?',
    a: 'Yes. Tell us your destination country and state or province, what the receiving office requested, and your deadline. Our Cebu team can review your case and arrange retrieval in the Philippines.',
  },
  {
    q: 'How much does it cost?',
    a: `The standard US$${standardFee} package includes LTO Certification and License History, DFA Apostille, and tracked DHL delivery. We quote receipt searches, record discrepancies, and additional documents separately before you decide to proceed.`,
  },
  {
    q: 'How long does it take?',
    a: `Allow about ${standardTurnaround} from the time your application documents and payment are ready. A record search or correction can take longer. Share your deadline so we can check timing before you pay.`,
  },
  {
    q: 'Can you handle multiple employees?',
    a: 'Yes. Tell us how many applicants you have, the documents requested for each person, and your deadline. We can confirm the scope and provide a combined quote.',
  },
];

export default function DriverRecordEn() {
  useMeta(title, description);

  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'LTO Driver Record Retrieval' }]}
      description={description}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: serviceName,
          description,
          url: 'https://ph-document.com/en/driver-record/',
          provider: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/en/',
          },
          areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'KR'],
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: standardFee,
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        },
      ]}
    >
      <HeroBanner
        title="Get Your Philippine LTO Driver’s Record from Abroad"
        subtitle={`US$${standardFee} includes LTO Certification and License History, DFA Apostille, and tracked DHL delivery. Allow about ${standardTurnaround} for a standard order.`}
        badges={[]}
        ctaText="Request a Quote"
        ctaHref="#contact"
        lastUpdated="November 22, 2026"
      />

      <section aria-labelledby="record-options" className="mb-8 space-y-3 rounded-2xl border border-gray-200 p-5 text-base leading-relaxed text-gray-700">
        <h2 id="record-options" className="text-xl font-bold text-secondary">Which document should you request?</h2>
        <dl className="space-y-3">
          <div>
            <dt className="font-semibold text-secondary">License conversion</dt>
            <dd>Ask your local licensing authority for the exact document name and whether it requires an Apostille. For a U.S. application, send us the state and the DMV’s written request if you have it.</dd>
          </div>
          <div>
            <dt className="font-semibold text-secondary">Employer or insurer request</dt>
            <dd>Ask what the record must show, such as license status or original issue date, and whether a scan is acceptable. Tell us how many drivers are involved.</dd>
          </div>
          <div>
            <dt className="font-semibold text-secondary">Missing Official Receipt or a mismatch in the record</dt>
            <dd>Tell us what is missing or different. We will check whether a search, reissuance, or correction is needed and quote that work before you commit.</dd>
          </div>
        </dl>
        <p>
          The <a href="https://lto.gov.ph/wp-content/uploads/2025/09/LTO-CC-2025-External.pdf" className="text-primary underline underline-offset-2">LTO Citizen’s Charter</a> describes license history and certification. See our <a href="/en/lto-sm-seaside-cebu-report/" className="text-primary underline underline-offset-2">Cebu LTO field report with photos</a> if you plan to visit a Philippine office in person.
        </p>
      </section>

      <CtaBox
        title="Send your destination and deadline"
        description="Include the requesting office, the document name if known, and whether you have your license and Official Receipt. Leave license numbers and ID scans out of the first message."
        buttonText="Get a License Conversion Quote"
        href="#contact"
        service="License Transfer"
      />

      <StepList
        heading="From quote to delivery"
        steps={[
          { title: 'Confirm the scope', description: 'We check what you need and send the total cost and estimated delivery date.' },
          { title: 'Retrieve and authenticate the record', description: 'After you approve the quote and supply the required documents, our Cebu team arranges the LTO record and any agreed DFA Apostille.' },
          { title: 'Receive the originals', description: 'Check the document copies before paying the balance. We send the originals by DHL with tracking.' },
        ]}
      />

      <FaqSection items={faq} />
    </PageLayout>
  );
}
