import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import RelatedArticles from '../components/RelatedArticles';
import { FileCheck, Globe, Shield } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_EN } from '../lib/seoDate';

export default function GermanyDocsEn() {
  useMeta(
    `PH Documents for Germany Immigration [${SEO_YEAR_MONTH_EN}]`,
    `Moving to Germany? We retrieve the Philippine civil records and police certificates identified by your German authority, with authentication when required.`,
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Germany Immigration Documents' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Philippine Documents for Germany Immigration (Ausländerbehörde)',
          description: 'We retrieve Philippine civil records and police certificates identified by the responsible German authority, with authentication and translation support when required.',
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
                text: 'Not automatically. Hague Convention membership determines how an Apostille is recognized when proof of authenticity is requested; it does not make Apostille mandatory for every document. Follow the checklist of the responsible German mission, registry office, or immigration authority.',
              },
            },
            {
              '@type': 'Question',
              name: 'What Philippine documents are needed for a German spouse visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The document set depends on the mission and local authority handling the case. PSA birth or marriage records, proof of civil status, a police certificate, authentication, and a certified German translation may be requested. Use the current case-specific checklist.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do German embassies accept PSA e-certificates?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Confirm the required format with the receiving German authority. If it asks for a DFA Apostille on a PSA civil record, the Apostille has been issued electronically since March 16, 2026; a separately ordered SECPA paper certificate is not automatically authenticated by that e-Apostille.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take to get Philippine documents shipped to Germany?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Total processing time is approximately 2–4 weeks: PSA retrieval (3–7 business days), DFA Apostille (3–5 business days), and DHL shipping to Germany (3–5 business days).',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Philippine Documents for Germany Immigration"
        subtitle="Philippine civil records and police certificates — retrieved in the format required by your German authority"
        badges={['Requirements Checked', 'Ships to Germany via DHL', 'Free Consultation']}
        ctaText="Get a Free Quote"
        ctaHref="/en/contact/"
      />

      <SummaryBlock
        conclusion="Documents Required for German Visa & Residence Applications"
        points={['Requirements differ by visa route, German mission, registry office, and local immigration authority. Hague Convention membership explains how an Apostille is recognized when requested; it does not make authentication mandatory for every Philippine document. Confirm the exact checklist before ordering.']}
      />

      <FeatureList
        heading="What We Retrieve for Germany Applications"
        items={[
          {
            icon: <FileCheck className="w-6 h-6 text-blue-600" />,
            title: 'PSA Birth Certificate',
            description: 'We retrieve it when listed by the responsible German authority and arrange electronic DFA Apostille only if authentication is requested.',
          },
          {
            icon: <FileCheck className="w-6 h-6 text-blue-600" />,
            title: 'CENOMAR or PSA Marriage Certificate',
            description: 'The appropriate civil-status record depends on the application. Authentication and format must follow the receiving authority\'s current instructions.',
          },
          {
            icon: <Shield className="w-6 h-6 text-blue-600" />,
            title: 'NBI Clearance + DFA Apostille',
            description: 'We arrange NBI Clearance and its physical Apostille when the current German checklist requests them.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your request', description: 'Fill out our form with your full name, date of birth, and the documents you need for Germany.' },
          { title: 'We retrieve from PSA / NBI', description: 'We order from official PSA channels and arrange NBI clearance (3–7 business days each).' },
          { title: 'Authentication when required', description: 'For PSA civil records, DFA Apostille is electronic; non-PSA documents such as NBI follow the applicable physical process.' },
          { title: 'DHL Express to Germany', description: 'We ship directly to your German address (3–5 business days). Tracking provided.' },
        ]}
      />

      <section className="py-8 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Note: German Translation Requirement</h2>
        <p className="text-gray-700">
          A German authority may request a certified German translation prepared by a sworn translator (beeidigter Übersetzer). Confirm which records must be translated and whether the translation must be completed in Germany before commissioning it.
        </p>
      </section>

      <CtaBox
        title="Ready to Get Your Documents for Germany?"
        description="We confirm the requested records and formats, then handle retrieval, authentication when required, and DHL shipping."
        buttonText="Get a Free Quote"
        href="/en/contact/"
      />

      <FaqSection
        items={[
          {
            q: 'Does Germany require DFA Apostille on Philippine documents?',
            a: 'Not automatically. Hague Convention membership determines how an Apostille is recognized when requested; it does not make authentication mandatory for every document. Follow the responsible German authority\'s current checklist.',
          },
          {
            q: 'What Philippine documents are needed for a German spouse visa?',
            a: 'The set depends on the mission and local authority. PSA civil records, an NBI Clearance, authentication, and a sworn German translation may be requested; confirm the current case-specific checklist.',
          },
          {
            q: 'Do German embassies accept PSA e-certificates?',
            a: 'Confirm the required format with the receiving authority. If it requests DFA authentication of a PSA record, the Apostille is an electronic PDF from March 16, 2026; any SECPA paper record is ordered separately.',
          },
          {
            q: 'How long does it take to get Philippine documents shipped to Germany?',
            a: 'Approximately 2–4 weeks: PSA retrieval + DFA Apostille + DHL Express shipping to Germany.',
          },
        ]}
      />

      <RelatedArticles
        items={[
          { href: '/en/uk/', title: 'UK Spouse Visa Documents' },
          { href: '/en/australia/', title: 'Australia Immigration Documents' },
          { href: '/en/cenomar/', title: 'CENOMAR — How to Get It' },
          { href: '/en/apostille/', title: 'DFA Apostille Service' },
        ]}
      />
    </PageLayout>
  );
}
