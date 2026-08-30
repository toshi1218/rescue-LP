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
import { SEO_YEAR_MONTH_EN } from '../lib/seoDate';

export default function UkDocsEn() {
  useMeta(
    `PH Documents for UK Immigration [${SEO_YEAR_MONTH_EN}]`,
    `Applying for a UK spouse visa? We retrieve PSA records and NBI Clearance, confirm the current UKVI format, and arrange authentication only when required.`,
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'UK Immigration Documents' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Philippine Documents for UK Immigration (UKVI)',
        description: 'We retrieve Philippine civil records and NBI Clearance for UK immigration, confirm the current UKVI checklist, and arrange authentication only when required.',
        url: 'https://ph-document.com/en/uk/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: { '@type': 'Country', name: 'GB' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '899',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '899',
            priceCurrency: 'USD',
            description: 'UK immigration document package — agreed documents, any required authentication, and delivery',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Does the UK require DFA Apostille on Philippine documents?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The UK is a Hague Convention member, but UKVI requirements vary by route and document. We verify the current checklist before processing.',
              },
            },
            {
              '@type': 'Question',
              name: 'What documents are needed for a UK spouse visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The document list depends on the route and circumstances. PSA civil records, relationship evidence, or a police certificate may be requested; authentication is arranged only when the current checklist requires it.',
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
              name: 'How long does it take to ship to the UK?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to the UK typically takes 3–5 business days after documents are ready.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Philippine Documents for UK Immigration"
        badges={['Current UKVI Checklist', 'Authentication When Required', 'Ships to UK via DHL']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="August 30, 2026"
      />

      <SummaryBlock
        conclusion="Applying for a UK spouse visa, settlement, or citizenship? We confirm the current checklist, retrieve the agreed Philippine documents, and arrange authentication only when required."
        points={[
          'Hague Convention membership does not make Apostille mandatory for every UKVI document',
          'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
          'PSA e-Apostille delivered digitally; NBI and physical originals shipped via DHL when needed',
          'We confirm exact UKVI requirements for your specific visa type',
        ]}
        ctaText="Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Shield className="w-4 h-4" />,
            title: 'Applying for a UK spouse visa or settlement',
            description: 'UKVI document and authentication requirements vary by route. We verify the current checklist and handle the agreed documents in one coordinated flow.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Filipino living in the UK with no contacts in the Philippines',
            description: 'Our Cebu-based team handles everything locally. You just need to provide the applicant information.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what documents UKVI requires',
            description: 'Requirements vary by visa type. We confirm what your specific case needs before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm UKVI requirements before we start"
        description="Spouse visa, settlement, or citizenship — each has different document requirements. We verify for your specific case and quote everything together."
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
            description: 'We arrange authentication only when the current UKVI checklist or receiving authority requires it. PSA e-Apostille is delivered electronically from 16 March 2026.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your UK address',
            description: 'All documents shipped together with tracking. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your visa type (spouse visa, settlement, etc.) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents for UKVI and provide all-inclusive pricing.' },
          { title: 'Processing in the Philippines', description: 'We retrieve the agreed records. Any required PSA e-Apostille is processed online and delivered electronically.' },
          { title: 'DHL delivery to the UK', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Does the UK require DFA Apostille on Philippine documents?', a: 'Not in every case. The UK is a Hague Convention member, but requirements vary by route and document. We verify the current UKVI checklist before processing.' },
          { q: 'What documents are needed for a UK spouse visa?', a: 'The document list depends on the route and circumstances. PSA civil records, relationship evidence, or a police certificate may be requested; authentication is arranged only when the current checklist requires it.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case, covering the agreed documents, any authentication actually required, and delivery.' },
          { q: 'How long does it take to ship to the UK?', a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to the UK typically takes 3–5 business days after documents are ready.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Complete checklist for UK spouse visa and all other visa types.' },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: 'NBI Clearance + DFA Apostille + DHL to the UK.' },
          { href: '/en/cenomar/', title: 'CENOMAR Retrieval Service', description: 'CENOMAR + DFA Apostille + DHL to the UK.' },
        ]}
      />
    </PageLayout>
  );
}
