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
    'PH Documents for Australia Immigration [March 2026]',
    'Applying for Australian partner visa or PR? We retrieve CENOMAR, PSA & NBI Clearance with DFA Apostille. Ships to Australia via DHL. Free consultation.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Australia Immigration Documents' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Philippine Documents for Australia Immigration (Home Affairs)',
        description: 'We retrieve all Philippine documents for Australia immigration — CENOMAR, PSA Birth Certificate, NBI Clearance with DFA Apostille. Ships to Australia via DHL. Home Affairs-ready.',
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
            description: 'Australia Immigration Document Package — all documents + DFA Apostille + DHL to Australia (all-inclusive)',
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
                text: 'Yes. Australia is a Hague Convention member. The Department of Home Affairs requires DFA Apostille authentication on Philippine civil documents for partner visa and immigration applications.',
              },
            },
            {
              '@type': 'Question',
              name: 'What documents are needed for an Australian partner visa (subclass 820/801)?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Typically CENOMAR and PSA Birth Certificate with DFA Apostille. NBI Clearance may also be required. Requirements vary by visa subclass. We confirm for your specific case.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to Australia are included.',
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
        badges={['Home Affairs-Ready', 'DFA Apostille Included', 'Ships to Australia via DHL']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="Applying for an Australian partner visa, PR, or citizenship? We retrieve all required Philippine documents with DFA Apostille and ship directly to your Australian address."
        points={[
          'Australia is a Hague Convention member — DFA Apostille is required on Philippine documents',
          'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
          'Paper Apostille originals shipped via DHL Express to your Australian address',
          'We confirm exact Home Affairs requirements for your specific visa subclass',
        ]}
        ctaText="Start Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Shield className="w-4 h-4" />,
            title: 'Applying for Australian partner visa or PR',
            description: 'The Department of Home Affairs requires Philippine civil documents with DFA Apostille. We handle all required documents in one coordinated flow.',
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
            title: 'PSA document retrieval (Birth Cert, Marriage Cert, CENOMAR, NBI Clearance)',
            description: 'We retrieve all required PSA documents in one coordinated flow.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille authentication',
            description: 'We arrange DFA Apostille for all documents that require it. Paper originals provided — required by Home Affairs.',
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
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles all PSA retrieval and DFA Apostille.' },
          { title: 'DHL delivery to Australia', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Does Australia require DFA Apostille on Philippine documents?', a: 'Yes. Australia is a Hague Convention member. The Department of Home Affairs requires DFA Apostille authentication on Philippine civil documents for partner visa and immigration applications.' },
          { q: 'What documents are needed for an Australian partner visa (subclass 820/801)?', a: 'Typically CENOMAR and PSA Birth Certificate with DFA Apostille. NBI Clearance may also be required. Requirements vary by visa subclass. We confirm for your specific case.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to Australia are included.' },
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
