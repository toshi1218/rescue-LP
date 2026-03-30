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

export default function NetherlandsDocsEn() {
  useMeta(
    'PH Documents for Netherlands Immigration (IND) [March 2026]',
    'Applying for a Dutch partner visa or MVV? We retrieve CENOMAR, PSA & NBI Clearance with DFA Apostille for IND. Ships to Netherlands via DHL. Free consultation.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Netherlands Immigration Documents' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Philippine Documents for Netherlands Immigration (IND)',
        description: 'We retrieve all Philippine documents for Netherlands immigration — CENOMAR, PSA Birth Certificate, NBI Clearance with DFA Apostille. Ships to Netherlands via DHL. IND-ready.',
        url: 'https://ph-document.com/en/netherlands/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: { '@type': 'Country', name: 'NL' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '899',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '899',
            priceCurrency: 'USD',
            description: 'Netherlands Immigration Document Package — all documents + DFA Apostille + DHL to Netherlands (all-inclusive)',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Does the Netherlands require DFA Apostille on Philippine documents?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. The Netherlands is a Hague Convention member. The IND requires DFA Apostille authentication on Philippine civil documents such as PSA Birth Certificates, CENOMAR, and NBI Clearance for immigration applications.',
              },
            },
            {
              '@type': 'Question',
              name: 'What documents are needed for a Dutch partner visa or MVV?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Typically CENOMAR with DFA Apostille, PSA Birth Certificate with DFA Apostille, and NBI Clearance with DFA Apostille. Requirements may vary depending on your specific case. We confirm for your situation.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to the Netherlands are included.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take to ship to the Netherlands?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to the Netherlands typically takes 3–5 business days after documents are ready.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Philippine Documents for Netherlands Immigration"
        badges={['Netherlands-Ready', 'DFA Apostille Included', 'Ships to Netherlands via DHL']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
        lastUpdated="March 29, 2026"
      />

      <SummaryBlock
        conclusion="Applying for a Dutch partner visa (verblijfsvergunning), MVV, or family reunification? We retrieve all required Philippine documents with DFA Apostille and ship directly to your address in the Netherlands."
        points={[
          'The Netherlands is a Hague Convention member — DFA Apostille is required on Philippine documents',
          'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
          'Paper Apostille originals shipped via DHL Express to your Netherlands address',
          'We confirm exact IND requirements for your specific application type',
        ]}
        ctaText="Start Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Shield className="w-4 h-4" />,
            title: 'Applying for a Dutch partner visa or MVV',
            description: 'The IND (Immigratie- en Naturalisatiedienst) requires Philippine civil documents with DFA Apostille. We handle all required documents in one coordinated flow.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Filipino living in the Netherlands with no contacts in the Philippines',
            description: 'Our Cebu-based team handles everything locally. You just need to provide the applicant information.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what documents the IND requires',
            description: 'Requirements vary by application type (partner visa, MVV, family reunification). We confirm what your specific case needs before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm IND requirements before we start"
        description="Partner visa, MVV, or family reunification — each has different document requirements. We verify for your specific case and quote everything together."
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
            description: 'We arrange DFA Apostille for all documents that require it. Paper originals provided — required by the IND.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your Netherlands address',
            description: 'All documents shipped together with tracking. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your application type (partner visa, MVV, etc.) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents for the IND and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles all PSA retrieval and DFA Apostille.' },
          { title: 'DHL delivery to the Netherlands', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Does the Netherlands require DFA Apostille on Philippine documents?', a: 'Yes. The Netherlands is a Hague Convention member. The IND requires DFA Apostille authentication on Philippine civil documents such as PSA Birth Certificates, CENOMAR, and NBI Clearance for immigration applications.' },
          { q: 'What documents are needed for a Dutch partner visa or MVV?', a: 'Typically CENOMAR with DFA Apostille, PSA Birth Certificate with DFA Apostille, and NBI Clearance with DFA Apostille. Requirements may vary depending on your specific case. We confirm for your situation.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to the Netherlands are included.' },
          { q: 'How long does it take to ship to the Netherlands?', a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to the Netherlands typically takes 3–5 business days after documents are ready.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Complete checklist for Netherlands partner visa and all other visa types.' },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: 'NBI Clearance + DFA Apostille + DHL to Netherlands.' },
          { href: '/en/cenomar/', title: 'CENOMAR Retrieval Service', description: 'CENOMAR + DFA Apostille + DHL to Netherlands.' },
        ]}
      />
    </PageLayout>
  );
}
