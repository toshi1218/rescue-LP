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

export default function HongKongDocsEn() {
  useMeta(
    'PH Documents for Hong Kong Immigration (ImmD) [March 2026]',
    'Need Philippine documents for Hong Kong? We retrieve CENOMAR, PSA & NBI Clearance with DFA Apostille for ImmD. Ships to Hong Kong via DHL. Free consultation.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Hong Kong Immigration Documents' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Philippine Documents for Hong Kong Immigration (ImmD)',
        description: 'We retrieve all Philippine documents for Hong Kong immigration — CENOMAR, PSA Birth Certificate, NBI Clearance with DFA Apostille. Ships to Hong Kong via DHL. ImmD-ready.',
        url: 'https://ph-document.com/en/hong-kong/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: { '@type': 'Country', name: 'HK' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '899',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '899',
            priceCurrency: 'USD',
            description: 'Hong Kong Immigration Document Package — all documents + DFA Apostille + DHL to Hong Kong (all-inclusive)',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Does Hong Kong accept DFA Apostille on Philippine documents?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Hong Kong accepts Apostille-authenticated documents through China\'s accession to the Hague Apostille Convention. DFA Apostille is recognized for Philippine civil documents submitted to Hong Kong authorities.',
              },
            },
            {
              '@type': 'Question',
              name: 'What documents are needed for Hong Kong dependant visa or employment visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Typically PSA Birth Certificate with DFA Apostille, CENOMAR or PSA Marriage Certificate, and NBI Clearance with DFA Apostille. Requirements vary by visa type (dependant, employment, marriage registration). We confirm for your specific case.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to Hong Kong are included.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take to ship to Hong Kong?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Hong Kong typically takes 2–3 business days after documents are ready.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Philippine Documents for Hong Kong Immigration"
        badges={['Hong Kong-Ready', 'DFA Apostille Included', 'Ships to Hong Kong via DHL']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
        lastUpdated="March 29, 2026"
      />

      <SummaryBlock
        conclusion="Need Philippine documents for a Hong Kong dependant visa, employment visa, or marriage registration? We retrieve all required documents with DFA Apostille and ship directly to your Hong Kong address."
        points={[
          'Hong Kong accepts DFA Apostille through China\'s Hague Convention accession',
          'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
          'Paper Apostille originals shipped via DHL Express to your Hong Kong address',
          'We confirm exact ImmD requirements for your specific application type',
        ]}
        ctaText="Start Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Shield className="w-4 h-4" />,
            title: 'Applying for a dependant visa, employment visa, or marriage registration in Hong Kong',
            description: 'The ImmD (Immigration Department) requires Philippine civil documents with DFA Apostille. We handle all required documents in one coordinated flow.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Filipino working or living in Hong Kong',
            description: 'Our Cebu-based team handles everything locally. You just need to provide the applicant information — no trip to the Philippines needed.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what documents ImmD requires',
            description: 'Requirements vary by visa type (dependant, employment, marriage). We confirm what your specific case needs before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm Hong Kong immigration requirements before we start"
        description="Dependant visa, employment visa, or marriage registration — each has different document requirements. We verify for your specific case and quote everything together."
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
            description: 'We arrange DFA Apostille for all documents that require it. Paper originals provided — required by Hong Kong authorities.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your Hong Kong address',
            description: 'All documents shipped together with tracking. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your application type (dependant visa, employment visa, marriage, etc.) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents for ImmD and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles all PSA retrieval and DFA Apostille.' },
          { title: 'DHL delivery to Hong Kong', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Does Hong Kong accept DFA Apostille on Philippine documents?', a: 'Yes. Hong Kong accepts Apostille-authenticated documents through China\'s accession to the Hague Apostille Convention. DFA Apostille is recognized for Philippine civil documents submitted to Hong Kong authorities.' },
          { q: 'What documents are needed for Hong Kong dependant visa or employment visa?', a: 'Typically PSA Birth Certificate with DFA Apostille, CENOMAR or PSA Marriage Certificate, and NBI Clearance with DFA Apostille. Requirements vary by visa type. We confirm for your specific case.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to Hong Kong are included.' },
          { q: 'How long does it take to ship to Hong Kong?', a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Hong Kong typically takes 2–3 business days after documents are ready.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Complete checklist for Hong Kong visas and all other visa types.' },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: 'NBI Clearance + DFA Apostille + DHL to Hong Kong.' },
          { href: '/en/cenomar/', title: 'CENOMAR Retrieval Service', description: 'CENOMAR + DFA Apostille + DHL to Hong Kong.' },
        ]}
      />
    </PageLayout>
  );
}
