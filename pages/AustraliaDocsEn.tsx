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

export default function AustraliaDocsEn() {
  useMeta(
    'PH Documents for Australia Immigration [April 2026]',
    'Applying for an Australian partner visa or PR? We retrieve PSA records and NBI Clearance, confirm the current Home Affairs format, and arrange authentication only when required.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Australia Immigration Documents' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Philippine Documents for Australia Immigration (Home Affairs)',
        description: 'We retrieve Philippine civil records and NBI Clearance for Australia immigration, confirm the current Home Affairs checklist, and arrange authentication only when required.',
        url: 'https://ph-document.com/en/australia/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: { '@type': 'Country', name: 'AU' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '899',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '899',
            priceCurrency: 'USD',
            description: 'Australia immigration document package — agreed documents, any required authentication, and delivery',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Does Australia require DFA Apostille on Philippine documents?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Australia is a Hague Convention member, but Home Affairs requirements vary by visa subclass and document. We verify the current checklist before processing.',
              },
            },
            {
              '@type': 'Question',
              name: 'What documents are needed for an Australian partner visa (subclass 820/801)?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The document list depends on the visa subclass and circumstances. PSA civil records and police certificates may be requested; authentication is arranged only when the current checklist requires it.',
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
              name: 'How long does it take to ship to Australia?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Australia typically takes 3–5 business days after documents are ready.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Philippine Documents for Australia Immigration"
        badges={['Current Home Affairs Checklist', 'Authentication When Required', 'Ships to Australia via DHL']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="August 30, 2026"
      />

      <SummaryBlock
        conclusion="Applying for an Australian partner visa, PR, or citizenship? We confirm the current checklist, retrieve the agreed Philippine documents, and arrange authentication only when required."
        points={[
          'Hague Convention membership does not make Apostille mandatory for every Home Affairs document',
          'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
          'PSA e-Apostille delivered digitally; NBI and physical originals shipped via DHL when needed',
          'We confirm exact Home Affairs requirements for your specific visa subclass',
        ]}
        ctaText="Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Shield className="w-4 h-4" />,
            title: 'Applying for Australian partner visa or PR',
            description: 'Home Affairs document and authentication requirements vary by visa subclass. We verify the current checklist and handle the agreed documents in one coordinated flow.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Filipino living in Australia with no contacts in the Philippines',
            description: 'Our Cebu-based team handles everything locally. You just need to provide the applicant information.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what documents Home Affairs requires',
            description: 'Requirements vary by visa subclass. We confirm what your specific case needs before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm Home Affairs requirements before we start"
        description="Partner visa, PR, or citizenship — each has different document requirements. We verify for your specific case and quote everything together."
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
            description: 'We arrange authentication only when the current Home Affairs checklist or receiving authority requires it. PSA e-Apostille is delivered electronically from 16 March 2026.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your Australian address',
            description: 'All documents shipped together with tracking. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your visa subclass (partner visa, PR, etc.) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents for Home Affairs and provide all-inclusive pricing.' },
          { title: 'We handle the applications', description: 'We complete the agreed PSA and NBI applications. Any required PSA e-Apostille is processed online and delivered electronically.' },
          { title: 'DHL delivery to Australia', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Does Australia require DFA Apostille on Philippine documents?', a: 'Not in every case. Australia is a Hague Convention member, but requirements vary by visa subclass and document. We verify the current Home Affairs checklist before processing.' },
          { q: 'What documents are needed for an Australian partner visa (subclass 820/801)?', a: 'The document list depends on the visa subclass and circumstances. PSA civil records and police certificates may be requested; authentication is arranged only when the current checklist requires it.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case, covering the agreed documents, any authentication actually required, and delivery.' },
          { q: 'How long does it take to ship to Australia?', a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Australia typically takes 3–5 business days after documents are ready.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Complete checklist for Australia partner visa and all other visa types.' },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: 'NBI Clearance + DFA Apostille + DHL to Australia.' },
          { href: '/en/cenomar/', title: 'CENOMAR Retrieval Service', description: 'CENOMAR + DFA Apostille + DHL to Australia.' },
        ]}
      />
    </PageLayout>
  );
}
