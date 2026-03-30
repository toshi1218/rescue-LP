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

export default function SingaporeDocsEn() {
  useMeta(
    'PH Documents for Singapore Immigration (ICA/MOM) [March 2026]',
    'Need Philippine documents for Singapore? We retrieve CENOMAR, PSA & NBI Clearance with DFA Apostille for ICA and MOM. Ships to Singapore via DHL. Free consultation.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Singapore Immigration Documents' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Philippine Documents for Singapore Immigration (ICA/MOM)',
        description: 'We retrieve all Philippine documents for Singapore immigration — CENOMAR, PSA Birth Certificate, NBI Clearance with DFA Apostille. Ships to Singapore via DHL. ICA/MOM-ready.',
        url: 'https://ph-document.com/en/singapore/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: { '@type': 'Country', name: 'SG' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '899',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '899',
            priceCurrency: 'USD',
            description: 'Singapore Immigration Document Package — all documents + DFA Apostille + DHL to Singapore (all-inclusive)',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Does Singapore require DFA Apostille on Philippine documents?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Singapore is a Hague Convention member. ICA and MOM require DFA Apostille authentication on Philippine civil documents for immigration and employment applications.',
              },
            },
            {
              '@type': 'Question',
              name: 'What documents are needed for Singapore LTVP or work pass?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Typically PSA Birth Certificate with DFA Apostille, CENOMAR or PSA Marriage Certificate, and NBI Clearance with DFA Apostille. Requirements vary by pass type (LTVP, Work Permit, S Pass, Employment Pass). We confirm for your specific case.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to Singapore are included.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take to ship to Singapore?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Singapore typically takes 2–3 business days after documents are ready.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Philippine Documents for Singapore Immigration"
        badges={['Singapore-Ready', 'DFA Apostille Included', 'Ships to Singapore via DHL']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
        lastUpdated="March 29, 2026"
      />

      <SummaryBlock
        conclusion="Need Philippine documents for a Singapore Long-Term Visit Pass (LTVP), work pass, marriage registration, or other application? We retrieve all required documents with DFA Apostille and ship directly to your Singapore address."
        points={[
          'Singapore is a Hague Convention member — DFA Apostille is required on Philippine documents',
          'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
          'Paper Apostille originals shipped via DHL Express to your Singapore address',
          'We confirm exact ICA/MOM requirements for your specific application type',
        ]}
        ctaText="Start Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Shield className="w-4 h-4" />,
            title: 'Applying for LTVP, work pass, or marriage registration in Singapore',
            description: 'ICA (Immigration & Checkpoints Authority) and MOM (Ministry of Manpower) require Philippine civil documents with DFA Apostille. We handle all required documents in one coordinated flow.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Filipino working or living in Singapore',
            description: 'Our Cebu-based team handles everything locally. You just need to provide the applicant information — no trip to the Philippines needed.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what documents ICA or MOM requires',
            description: 'Requirements vary by pass type (LTVP, Work Permit, S Pass, Employment Pass). We confirm what your specific case needs before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm ICA/MOM requirements before we start"
        description="LTVP, work permit, marriage registration — each has different document requirements. We verify for your specific case and quote everything together."
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
            description: 'We arrange DFA Apostille for all documents that require it. Paper originals provided — required by ICA and MOM.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your Singapore address',
            description: 'All documents shipped together with tracking. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your application type (LTVP, work pass, marriage, etc.) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents for ICA/MOM and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles all PSA retrieval and DFA Apostille.' },
          { title: 'DHL delivery to Singapore', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Does Singapore require DFA Apostille on Philippine documents?', a: 'Yes. Singapore is a Hague Convention member. ICA and MOM require DFA Apostille authentication on Philippine civil documents for immigration and employment applications.' },
          { q: 'What documents are needed for Singapore LTVP or work pass?', a: 'Typically PSA Birth Certificate with DFA Apostille, CENOMAR or PSA Marriage Certificate, and NBI Clearance with DFA Apostille. Requirements vary by pass type. We confirm for your specific case.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to Singapore are included.' },
          { q: 'How long does it take to ship to Singapore?', a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Singapore typically takes 2–3 business days after documents are ready.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Complete checklist for Singapore passes and all other visa types.' },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: 'NBI Clearance + DFA Apostille + DHL to Singapore.' },
          { href: '/en/cenomar/', title: 'CENOMAR Retrieval Service', description: 'CENOMAR + DFA Apostille + DHL to Singapore.' },
        ]}
      />
    </PageLayout>
  );
}
