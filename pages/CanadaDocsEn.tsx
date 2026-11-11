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
    'Get a paper-issued NBI Clearance for Canadian Working Holiday, permanent residence, or other IRCC applications. We check your document checklist and arrange delivery.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Canada Immigration Documents' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Philippine Documents for Canada Immigration (IRCC)',
        description: 'Get a paper-issued NBI Clearance for Canadian Working Holiday, permanent residence, or other IRCC applications. We check your document checklist and arrange delivery.',
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
            description: 'Canada Immigration Document Package — agreed documents, any requested authentication, and DHL to Canada',
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
                text: 'Follow the checklist for your application. If IRCC requests a Philippine police certificate, obtain the paper-issued NBI Clearance. We can also arrange PSA documents if requested.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We quote the agreed documents, any required authentication, and shipping before work starts.',
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
        badges={['IRCC-Ready', 'Paper NBI Clearance', 'Ships to Canada via DHL']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="November 11, 2026"
      />

      <SummaryBlock
        conclusion="We arrange Philippine documents for Canadian Working Holiday, permanent residence, and spousal sponsorship applications based on the applicable IRCC instructions."
        points={[
          'For IRCC police certificates, request a paper-issued NBI Clearance',
          'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
          'Paper originals are available with tracked international shipping',
          'We confirm exact IRCC requirements for your specific application type',
        ]}
        ctaText="Free Consultation"
      />

      <section className="mb-8 space-y-3 rounded-xl border border-gray-200 p-5 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">NBI Clearance for Canada Working Holiday</h2>
        <p>IRCC does not accept the digital or online version of Philippine NBI Clearance as a police certificate. For International Experience Canada (IEC), including Working Holiday, obtain the paper-issued clearance unless your individual instructions specify otherwise. The standard IRCC guidance does not list an Apostille. <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/police-certificates/how/philippines.html" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">IRCC guidance for the Philippines</a></p>
        <p>If you cannot obtain the certificate by the initial IEC application deadline, IRCC allows an application receipt or an online order confirmation to be uploaded. If you already have a later request letter, follow the instructions and deadline in that letter. <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec/apply-work-permit.html" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">Official IEC submission guidance</a></p>
      </section>

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
            description: 'Our Cebu-based team handles the local steps and guides you through any applicant actions, such as fingerprinting.',
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
            description: 'We coordinate PSA document requests and retrieval of paper-issued NBI Clearance according to your checklist.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille authentication',
            description: 'If IRCC or another receiving authority specifically requests authentication, we check the instructions and the applicable DFA process.',
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
          { title: 'We handle the applications', description: 'We arrange the agreed PSA documents and paper-issued NBI Clearance.' },
          { title: 'DHL delivery to Canada', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Does Canada require DFA Apostille on Philippine documents?', a: 'Not in every case. Canada is a Hague Convention member, but IRCC requirements vary by application and document. Confirm the current checklist; we verify the required format before processing.' },
          { q: 'What documents are needed for Canada PR or spouse visa?', a: 'Follow the checklist for your application. If IRCC requests a Philippine police certificate, obtain the paper-issued NBI Clearance. We can also arrange PSA documents if requested.' },
          { q: 'How much does it cost?', a: 'We quote the agreed documents, any required authentication, and shipping before work starts.' },
          { q: 'How long does it take to ship to Canada?', a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Canada typically takes 3–5 business days after documents are ready.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Complete checklist for Canada spousal sponsorship and all other visa types.' },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: 'Paper-issued NBI Clearance and tracked international shipping.' },
          { href: '/en/cenomar/', title: 'CENOMAR Retrieval Service', description: 'CENOMAR + DFA Apostille + DHL to Canada.' },
        ]}
      />
    </PageLayout>
  );
}
