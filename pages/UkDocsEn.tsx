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

export default function UkDocsEn() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'UK Immigration Documents' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Philippine Documents for UK Immigration (UKVI)',
        description: 'We retrieve all Philippine documents for UK immigration — CENOMAR, PSA Birth Certificate, NBI Clearance with DFA Apostille. Ships to the UK via DHL. UKVI-ready.',
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
            description: 'UK Immigration Document Package — all documents + DFA Apostille + DHL to UK (all-inclusive)',
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
                text: 'Yes. The UK is a Hague Convention member. UK Visas and Immigration (UKVI) requires DFA Apostille authentication on Philippine civil documents for spouse visa and immigration applications.',
              },
            },
            {
              '@type': 'Question',
              name: 'What documents are needed for a UK spouse visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Typically CENOMAR and PSA Birth Certificate with DFA Apostille. NBI Clearance may also be required. Requirements vary by visa type. We confirm for your specific case.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to the UK are included.',
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
        badges={['UKVI-Ready', 'DFA Apostille Included', 'Ships to UK via DHL']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="Applying for a UK spouse visa, settlement, or citizenship? We retrieve all required Philippine documents with DFA Apostille and ship directly to your UK address."
        points={[
          'The UK is a Hague Convention member — DFA Apostille is required on Philippine documents',
          'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
          'Paper Apostille originals shipped via DHL Express to your UK address',
          'We confirm exact UKVI requirements for your specific visa type',
        ]}
        ctaText="Start Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Shield className="w-4 h-4" />,
            title: 'Applying for a UK spouse visa or settlement',
            description: 'UKVI requires Philippine civil documents with DFA Apostille. We handle all required documents in one coordinated flow.',
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
        trustNote="Free cancellation before start ﾂｷ Progress updates at every stage ﾂｷ Pay balance only after confirming document copies"
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
            description: 'We arrange DFA Apostille for all documents that require it. Paper originals provided — required by UKVI.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your UK address',
            description: 'All documents shipped together with tracking. No forwarding needed.',
          },
        ]}
      />

      <CtaBox
        title="All-inclusive pricing — no surprise add-ons"
        description="All documents, DFA Apostille, and DHL shipping to the UK are quoted together in one price."
        buttonText="Get a Quote"
        href="#contact"
        variant="secondary"
        trustNote="English only ﾂｷ Anonymous inquiries welcome ﾂｷ Reply within 24 hours"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your visa type (spouse visa, settlement, etc.) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents for UKVI and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles all PSA retrieval and DFA Apostille.' },
          { title: 'DHL delivery to the UK', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Does the UK require DFA Apostille on Philippine documents?', a: 'Yes. The UK is a Hague Convention member. UK Visas and Immigration (UKVI) requires DFA Apostille authentication on Philippine civil documents for spouse visa and immigration applications.' },
          { q: 'What documents are needed for a UK spouse visa?', a: 'Typically CENOMAR and PSA Birth Certificate with DFA Apostille. NBI Clearance may also be required. Requirements vary by visa type. We confirm for your specific case.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to the UK are included.' },
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
