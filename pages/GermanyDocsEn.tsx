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

export default function GermanyDocsEn() {
  useMeta(
    'PH Documents for Germany Immigration [March 2026]',
    'Applying for a German family reunion or spouse visa? We retrieve CENOMAR, PSA & NBI Clearance with DFA Apostille for the Ausländerbehörde. Ships to Germany via DHL. Free consultation.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Germany Immigration Documents' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Philippine Documents for Germany Immigration',
        description: 'We retrieve all Philippine documents for Germany immigration — CENOMAR, PSA Birth Certificate, NBI Clearance with DFA Apostille. Ships to Germany via DHL.',
        url: 'https://ph-document.com/en/germany/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: { '@type': 'Country', name: 'DE' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '899',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '899',
            priceCurrency: 'USD',
            description: 'Germany Immigration Document Package — all documents + DFA Apostille + DHL to Germany (all-inclusive)',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Does Germany require DFA Apostille on Philippine documents?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Germany is a Hague Convention member. The Ausländerbehörde and German embassies require DFA Apostille authentication on Philippine civil documents for immigration applications.',
              },
            },
            {
              '@type': 'Question',
              name: 'What documents are needed for a German spouse visa or family reunion?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Typically CENOMAR with DFA Apostille, PSA Birth Certificate with DFA Apostille, and NBI Clearance with DFA Apostille. For spouse visa (Familiennachzug), a PSA Marriage Certificate may also be required. We confirm for your specific case.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to Germany are included.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take to ship to Germany?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Germany typically takes 3–5 business days after documents are ready.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Philippine Documents for Germany Immigration"
        badges={['Germany-Ready', 'DFA Apostille Included', 'Ships to Germany via DHL']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
        lastUpdated="March 29, 2026"
      />

      <SummaryBlock
        conclusion="Applying for a German spouse visa (Familiennachzug), family reunion, or marriage registration? We retrieve all required Philippine documents with DFA Apostille and ship directly to your address in Germany."
        points={[
          'Germany is a Hague Convention member — DFA Apostille is required on Philippine documents',
          'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
          'Paper Apostille originals shipped via DHL Express to your German address',
          'We confirm exact Ausländerbehörde requirements for your specific application type',
        ]}
        ctaText="Start Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Shield className="w-4 h-4" />,
            title: 'Applying for a German spouse visa or family reunion',
            description: 'The Ausländerbehörde (Foreigners\' Registration Office) requires Philippine civil documents with DFA Apostille. We handle all required documents in one coordinated flow.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Filipino living in Germany with no contacts in the Philippines',
            description: 'Our Cebu-based team handles everything locally. You just need to provide the applicant information.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what documents the Ausländerbehörde requires',
            description: 'Requirements vary by application type (spouse visa, family reunion, marriage). We confirm what your specific case needs before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm German immigration requirements before we start"
        description="Spouse visa, family reunion, or marriage registration — each has different document requirements. We verify for your specific case and quote everything together."
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
            description: 'We arrange DFA Apostille for all documents that require it. Paper originals provided — required by German authorities.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your German address',
            description: 'All documents shipped together with tracking. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your application type (spouse visa, family reunion, etc.) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents for your case and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles all PSA retrieval and DFA Apostille.' },
          { title: 'DHL delivery to Germany', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Does Germany require DFA Apostille on Philippine documents?', a: 'Yes. Germany is a Hague Convention member. The Ausländerbehörde and German embassies require DFA Apostille authentication on Philippine civil documents for immigration applications.' },
          { q: 'What documents are needed for a German spouse visa or family reunion?', a: 'Typically CENOMAR with DFA Apostille, PSA Birth Certificate with DFA Apostille, and NBI Clearance with DFA Apostille. For spouse visa (Familiennachzug), a PSA Marriage Certificate may also be required. We confirm for your specific case.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to Germany are included.' },
          { q: 'How long does it take to ship to Germany?', a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Germany typically takes 3–5 business days after documents are ready.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Complete checklist for German spouse visa and all other visa types.' },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: 'NBI Clearance + DFA Apostille + DHL to Germany.' },
          { href: '/en/cenomar/', title: 'CENOMAR Retrieval Service', description: 'CENOMAR + DFA Apostille + DHL to Germany.' },
        ]}
      />
    </PageLayout>
  );
}
