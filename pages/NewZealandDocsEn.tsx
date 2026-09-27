import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import RelatedArticles from '../components/RelatedArticles';
import { FileCheck, Globe, Users, Shield } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_EN } from '../lib/seoDate';

export default function NewZealandDocsEn() {
  useMeta(
    `PH Documents for New Zealand Immigration [${SEO_YEAR_MONTH_EN}]`,
    `Moving to New Zealand? We retrieve PSA records and NBI Clearance, confirm the current Immigration New Zealand format, and arrange authentication only when required.`,
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'New Zealand Immigration Documents' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Philippine Documents for New Zealand Immigration (Immigration NZ)',
          description: 'We retrieve Philippine civil records and NBI Clearance for New Zealand immigration, confirm the current checklist, and arrange authentication only when required.',
          url: 'https://ph-document.com/en/new-zealand/',
          provider: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/en/',
          },
          areaServed: { '@type': 'Country', name: 'NZ' },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: '899',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '899',
              priceCurrency: 'USD',
              description: 'New Zealand immigration document package — agreed documents, any required authentication, and delivery',
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Does New Zealand require DFA Apostille on Philippine documents?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Not automatically. Hague Convention membership determines how an Apostille is recognized when one is required; it does not make Apostille mandatory for every Immigration New Zealand application. Check the current visa-specific checklist.',
              },
            },
            {
              '@type': 'Question',
              name: 'What Philippine documents are needed for a New Zealand partner visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The document list depends on the visa and circumstances. PSA civil records, relationship evidence, and a police certificate may be requested. Authentication is arranged only when the current checklist requires it.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I get my Philippine documents apostilled and shipped to New Zealand?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. We retrieve the agreed records and arrange authentication when required. PSA e-Apostille is delivered electronically from 16 March 2026; paper records can be shipped separately when needed.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do I need an NBI Clearance for New Zealand immigration?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Immigration New Zealand may require a Philippine police certificate depending on the visa and residence history. The certificate must meet the current validity and translation rules; Apostille is not a universal requirement.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Philippine Documents for New Zealand Immigration"
        subtitle="CENOMAR, PSA Birth Certificate & NBI Clearance — retrieved in the format your application requires"
        badges={['Current INZ Checklist', 'Authentication When Required', 'Free Consultation']}
        ctaText="Get a Free Quote"
        ctaHref="/en/contact/"
        lastUpdated="August 30, 2026"
      />

      <SummaryBlock
        conclusion="Documents Immigration NZ Requires from Filipino Applicants"
        points={['Immigration New Zealand requirements depend on the visa and document. Hague Convention membership does not make DFA Apostille mandatory for every application; check the current visa-specific checklist before ordering authentication.']}
      />

      <FeatureList
        heading="What We Retrieve for New Zealand Applications"
        items={[
          {
            icon: <FileCheck className="w-6 h-6 text-blue-600" />,
            title: 'PSA Birth Certificate',
            description: 'May be requested depending on the application. If authentication is required, PSA e-Apostille is issued electronically.',
          },
          {
            icon: <FileCheck className="w-6 h-6 text-blue-600" />,
            title: 'CENOMAR or PSA Marriage Certificate',
            description: 'The appropriate civil-status record depends on the application. Apostille is arranged only when required by the receiving authority.',
          },
          {
            icon: <Shield className="w-6 h-6 text-blue-600" />,
            title: 'NBI Clearance',
            description: 'A Philippine police certificate may be required depending on the visa and residence history. We confirm the current format before processing.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your request', description: 'Fill out our form with your full name, date of birth, and the documents you need.' },
          { title: 'We retrieve from PSA / NBI', description: 'We order from official PSA channels and arrange NBI clearance (3–7 business days each).' },
          { title: 'Authentication when required', description: 'Any required PSA e-Apostille is processed online and delivered electronically; other documents follow their applicable DFA process.' },
          { title: 'DHL Express to New Zealand', description: 'We ship directly to your NZ address (3–5 business days). Tracking provided.' },
        ]}
      />

      <CtaBox
        title="Ready to Get Your Documents for New Zealand?"
        description="We confirm the current checklist, retrieve the agreed documents, and arrange authentication and paper delivery only when required."
        buttonText="Get a Free Quote"
        href="/en/contact/"
      />

      <FaqSection
        items={[
          {
            q: 'Does New Zealand require DFA Apostille on Philippine documents?',
            a: 'Not automatically. Hague Convention membership determines how an Apostille is recognized when one is required; it does not make Apostille mandatory for every Immigration New Zealand application.',
          },
          {
            q: 'What Philippine documents are needed for a New Zealand partner visa?',
            a: 'The document list depends on the visa and circumstances. PSA civil records, relationship evidence, and a police certificate may be requested. Authentication is arranged only when the current checklist requires it.',
          },
          {
            q: 'Can I get my Philippine documents apostilled and shipped to New Zealand?',
            a: 'Yes. We retrieve the agreed records and arrange authentication when required. PSA e-Apostille is delivered electronically; paper records can be shipped separately when needed.',
          },
          {
            q: 'Do I need an NBI Clearance for New Zealand immigration?',
            a: 'Immigration New Zealand may require a Philippine police certificate depending on the visa and residence history. Apostille is not a universal requirement.',
          },
        ]}
      />

      <RelatedArticles
        items={[
          { href: '/en/australia/', title: 'Australia Immigration Documents' },
          { href: '/en/uk/', title: 'UK Spouse Visa Documents' },
          { href: '/en/cenomar/', title: 'CENOMAR — How to Get It' },
          { href: '/en/apostille/', title: 'DFA Apostille Service' },
        ]}
      />
    </PageLayout>
  );
}
