import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { FileCheck, Globe, Users, Shield } from 'lucide-react';
import RelatedArticles from '../components/RelatedArticles';
import { useMeta } from '../lib/useMeta';

export default function CanadaDocsEn() {
  useMeta(
    'PH Documents for Canada Immigration [April 2026]',
    'Applying for Canada PR or spousal sponsorship? We retrieve PSA records and NBI Clearance, confirm the current IRCC format, and arrange authentication only when required.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Canada Immigration Documents' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Philippine Documents for Canada Immigration (IRCC)',
        description: 'We retrieve Philippine civil records and NBI Clearance for Canada immigration, confirm the current IRCC checklist, and arrange authentication only when required.',
        url: 'https://ph-document.com/en/canada/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: { '@type': 'Country', name: 'CA' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '899',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '899',
            priceCurrency: 'USD',
            description: 'Canada immigration document package — agreed documents, any required authentication, and delivery',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Does Canada require DFA Apostille on Philippine documents?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Canada is a Hague Convention member, but IRCC requirements vary by application and document. Confirm the current IRCC checklist; we verify whether authentication is needed before processing.',
              },
            },
            {
              '@type': 'Question',
              name: 'What documents are needed for Canada PR or spouse visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The document list depends on the application. An NBI Clearance and PSA civil records may be requested. IRCC does not impose a universal DFA Apostille requirement, so we confirm the current checklist for your case.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case, covering the agreed documents, any authentication actually required, and delivery.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take to ship to Canada?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Canada typically takes 3–5 business days after documents are ready.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Philippine Documents for Canada Immigration"
        badges={['Current IRCC Checklist', 'Authentication When Required', 'Ships to Canada via DHL']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="August 30, 2026"
      />

      <SummaryBlock
        conclusion="Applying for Canada PR, spousal sponsorship, or citizenship? We confirm the current IRCC checklist, retrieve the agreed Philippine documents, and arrange authentication only when required."
        points={[
          'Hague Convention membership does not make Apostille mandatory for every IRCC document',
          'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
          'PSA e-Apostille delivered digitally; NBI and physical originals shipped via DHL when needed',
          'We confirm exact IRCC requirements for your specific application type',
        ]}
        ctaText="Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Shield className="w-4 h-4" />,
            title: 'Applying for Canada PR or spousal sponsorship',
            description: 'IRCC document and authentication requirements vary by application. We verify the current checklist and handle the agreed documents in one coordinated flow.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Filipino living in Canada with no contacts in the Philippines',
            description: 'Our Cebu-based team handles everything locally. You just need to provide the applicant information.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what documents IRCC requires',
            description: 'Requirements vary by application type. We confirm what your specific case needs before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm IRCC requirements before we start"
        description="PR application, spousal sponsorship, or citizenship — each has different document requirements. We verify for your specific case and quote everything together."
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
            title: 'PSA online application + NBI Clearance retrieval',
            description: 'We complete PSA applications and handle NBI Clearance retrieval in one coordinated flow. If authentication is required, PSA e-Apostille is electronic; non-PSA documents follow their applicable DFA process.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille authentication',
            description: 'We arrange authentication only when the current IRCC checklist or receiving authority requires it. PSA e-Apostille is delivered electronically from 16 March 2026.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your Canadian address',
            description: 'All documents shipped together with tracking. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your application type (PR, spousal sponsorship, etc.) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents for IRCC and provide all-inclusive pricing.' },
          { title: 'We handle the applications', description: 'We complete the agreed PSA and NBI applications. Any required PSA e-Apostille is processed online and delivered electronically.' },
          { title: 'DHL delivery to Canada', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Does Canada require DFA Apostille on Philippine documents?', a: 'Not in every case. Canada is a Hague Convention member, but IRCC requirements vary by application and document. Confirm the current checklist; we verify the required format before processing.' },
          { q: 'What documents are needed for Canada PR or spouse visa?', a: 'The document list depends on the application. An NBI Clearance and PSA civil records may be requested. IRCC does not impose a universal DFA Apostille requirement, so we confirm the current checklist for your case.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case, covering the agreed documents, any authentication actually required, and delivery.' },
          { q: 'How long does it take to ship to Canada?', a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Canada typically takes 3–5 business days after documents are ready.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Complete checklist for Canada spousal sponsorship and all other visa types.' },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: 'NBI Clearance + DFA Apostille + DHL to Canada.' },
          { href: '/en/cenomar/', title: 'CENOMAR Retrieval Service', description: 'CENOMAR + DFA Apostille + DHL to Canada.' },
        ]}
      />
    </PageLayout>
  );
}
