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

export default function NewZealandDocsEn() {
  useMeta(
    'Philippine Documents for New Zealand Immigration [2026]',
    'Applying for a New Zealand partner visa or residence? We handle your CENOMAR & PSA Birth Certificate online applications with DFA e-Apostille, plus NBI Clearance retrieval with physical Apostille shipped to NZ via DHL. Free consultation.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'New Zealand Immigration Documents' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Philippine Documents for New Zealand Immigration (Immigration NZ)',
          description: 'We retrieve all Philippine documents for New Zealand immigration — CENOMAR, PSA Birth Certificate, NBI Clearance with DFA Apostille. Ships to NZ via DHL. Immigration NZ-ready.',
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
              description: 'New Zealand Immigration Document Package — all documents + DFA Apostille + DHL to NZ (all-inclusive)',
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
                text: 'Yes. New Zealand is a member of the Hague Apostille Convention. Immigration New Zealand requires DFA Apostille authentication on Philippine civil documents for residence and partner visa applications.',
              },
            },
            {
              '@type': 'Question',
              name: 'What Philippine documents are needed for a New Zealand partner visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For a New Zealand partner visa (Residence from Family Category), you typically need: PSA Birth Certificate + DFA Apostille, CENOMAR or PSA Marriage Certificate + DFA Apostille, and NBI Clearance + DFA Apostille. Your partner\'s evidence of relationship is also required.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I get my Philippine documents apostilled and shipped to New Zealand?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. We complete the PSA online applications and DFA e-Apostille applications on your behalf, and handle NBI Clearance retrieval with physical Apostille shipped directly to your New Zealand address via DHL Express. Total processing time is approximately 2–4 weeks.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do I need an NBI Clearance for New Zealand immigration?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Immigration NZ may require a police clearance from the Philippines for applicants who have lived there within a certain period. NBI Clearance + DFA Apostille satisfies this requirement.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Philippine Documents for New Zealand Immigration"
        subtitle="CENOMAR, PSA Birth Certificate & NBI Clearance — retrieved, apostilled, and shipped to New Zealand via DHL"
        ctaLabel="Get a Free Quote"
        ctaHref="/en/contact/"
      />

      <SummaryBlock
        heading="Documents Immigration NZ Requires from Filipino Applicants"
        body="Filipino nationals applying for New Zealand residence, partner visa, or citizenship must provide Philippine civil documents authenticated by DFA Apostille. New Zealand joined the Hague Apostille Convention, so no additional embassy legalization is required — but DFA Apostille is mandatory for all documents used in Immigration NZ applications."
      />

      <FeatureList
        heading="What We Handle for New Zealand Applications"
        items={[
          {
            icon: <FileCheck className="w-6 h-6 text-blue-600" />,
            title: 'PSA Birth Certificate + DFA e-Apostille',
            description: 'Required for all residence and citizenship applications. We complete the PSA online application and DFA e-Apostille application on your behalf.',
          },
          {
            icon: <FileCheck className="w-6 h-6 text-blue-600" />,
            title: 'CENOMAR or PSA Marriage Certificate + DFA e-Apostille',
            description: 'CENOMAR for single applicants; PSA Marriage Certificate for married applicants. Both authenticated by DFA e-Apostille (PSA documents no longer receive a paper Apostille).',
          },
          {
            icon: <Shield className="w-6 h-6 text-blue-600" />,
            title: 'NBI Clearance + DFA Apostille',
            description: 'Philippine national police clearance required for immigration background checks. We handle NBI renewal and apostille.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your request', description: 'Fill out our form with your full name, date of birth, and the documents you need.' },
          { title: 'We handle the PSA online applications / NBI retrieval', description: 'We complete the PSA online applications and arrange NBI clearance (3–7 business days each).' },
          { title: 'DFA e-Apostille / physical Apostille', description: 'We handle the DFA e-Apostille application for PSA documents, and physical Apostille authentication for NBI Clearance (3–5 business days).' },
          { title: 'Delivery to New Zealand', description: 'PSA documents delivered electronically; NBI Clearance shipped via DHL Express (3–5 business days). Tracking provided.' },
        ]}
      />

      <CtaBox
        heading="Ready to Get Your Documents for New Zealand?"
        body="We handle everything — PSA online applications, DFA e-Apostille, and NBI Clearance retrieval with DHL shipping to New Zealand. Free quote, no hidden fees."
        ctaLabel="Get a Free Quote"
        ctaHref="/en/contact/"
      />

      <FaqSection
        items={[
          {
            question: 'Does New Zealand require DFA Apostille on Philippine documents?',
            answer: 'Yes. New Zealand is a Hague Convention member. DFA Apostille is required for Philippine civil documents used in Immigration NZ applications.',
          },
          {
            question: 'What Philippine documents are needed for a New Zealand partner visa?',
            answer: 'PSA Birth Certificate, CENOMAR or PSA Marriage Certificate, and NBI Clearance — all with DFA Apostille.',
          },
          {
            question: 'Can I get my Philippine documents apostilled and shipped to New Zealand?',
            answer: 'Yes. We retrieve, apostille, and ship via DHL Express to your New Zealand address. Total time: approximately 2–4 weeks.',
          },
          {
            question: 'Do I need an NBI Clearance for New Zealand immigration?',
            answer: 'Immigration NZ typically requires a Philippine police clearance (NBI Clearance + DFA Apostille) for applicants who have lived in the Philippines.',
          },
        ]}
      />

      <RelatedArticles
        articles={[
          { href: '/en/australia/', label: 'Australia Immigration Documents' },
          { href: '/en/uk/', label: 'UK Spouse Visa Documents' },
          { href: '/en/cenomar/', label: 'CENOMAR — How to Get It' },
          { href: '/en/apostille/', label: 'DFA Apostille Service' },
        ]}
      />
    </PageLayout>
  );
}
