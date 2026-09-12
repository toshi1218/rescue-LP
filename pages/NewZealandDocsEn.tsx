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
import { SEO_YEAR, SEO_YEAR_MONTH_EN } from '../lib/seoDate';

export default function NewZealandDocsEn() {
  useMeta(
    `Philippine Documents for New Zealand Immigration [${SEO_YEAR}]`,
    'Applying for a New Zealand partner visa or residence? We retrieve CENOMAR, PSA Birth Certificate & NBI Clearance with DFA Apostille. Ships to NZ via DHL. Free consultation.',
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
                text: 'Yes. We retrieve PSA documents, obtain DFA Apostille, and ship directly to your New Zealand address via DHL Express. Total processing time is approximately 2–4 weeks.',
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
        badges={['DFA Apostille Included', 'Ships to New Zealand via DHL', 'Free Consultation']}
        ctaText="Get a Free Quote"
        ctaHref="/en/contact/"
      />

      <SummaryBlock
        conclusion="Documents Immigration NZ Requires from Filipino Applicants"
        points={['Filipino nationals applying for New Zealand residence, partner visa, or citizenship must provide Philippine civil documents authenticated by DFA Apostille. New Zealand joined the Hague Apostille Convention, so no additional embassy legalization is required — but DFA Apostille is mandatory for all documents used in Immigration NZ applications.']}
      />

      <FeatureList
        heading="What We Retrieve for New Zealand Applications"
        items={[
          {
            icon: <FileCheck className="w-6 h-6 text-blue-600" />,
            title: 'PSA Birth Certificate + DFA Apostille',
            description: 'Required for all residence and citizenship applications. We retrieve directly from PSA and obtain DFA Apostille.',
          },
          {
            icon: <FileCheck className="w-6 h-6 text-blue-600" />,
            title: 'CENOMAR or PSA Marriage Certificate + DFA Apostille',
            description: 'CENOMAR for single applicants; PSA Marriage Certificate for married applicants. Both require DFA Apostille.',
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
          { title: 'We retrieve from PSA / NBI', description: 'We order from official PSA channels and arrange NBI clearance (3–7 business days each).' },
          { title: 'DFA Apostille', description: 'We bring documents to DFA for Apostille authentication (3–5 business days).' },
          { title: 'DHL Express to New Zealand', description: 'We ship directly to your NZ address (3–5 business days). Tracking provided.' },
        ]}
      />

      <CtaBox
        title="Ready to Get Your Documents for New Zealand?"
        description="We handle everything — PSA retrieval, DFA Apostille, and DHL shipping to New Zealand. Free quote, no hidden fees."
        buttonText="Get a Free Quote"
        href="/en/contact/"
      />

      <FaqSection
        items={[
          {
            q: 'Does New Zealand require DFA Apostille on Philippine documents?',
            a: 'Yes. New Zealand is a Hague Convention member. DFA Apostille is required for Philippine civil documents used in Immigration NZ applications.',
          },
          {
            q: 'What Philippine documents are needed for a New Zealand partner visa?',
            a: 'PSA Birth Certificate, CENOMAR or PSA Marriage Certificate, and NBI Clearance — all with DFA Apostille.',
          },
          {
            q: 'Can I get my Philippine documents apostilled and shipped to New Zealand?',
            a: 'Yes. We retrieve, apostille, and ship via DHL Express to your New Zealand address. Total time: approximately 2–4 weeks.',
          },
          {
            q: 'Do I need an NBI Clearance for New Zealand immigration?',
            a: 'Immigration NZ typically requires a Philippine police clearance (NBI Clearance + DFA Apostille) for applicants who have lived in the Philippines.',
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
