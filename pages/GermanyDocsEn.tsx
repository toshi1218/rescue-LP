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
    `Moving to Germany? We retrieve CENOMAR, PSA & NBI Clearance with DFA Apostille for German Embassy. Ships via DHL. Free consultation.`,
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Germany Immigration Documents' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Philippine Documents for Germany Immigration (Ausländerbehörde)',
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
                text: 'Yes. Germany is a member of the Hague Apostille Convention. The German Ausländerbehörde and German embassies require DFA Apostille on Philippine civil documents for visa and residence permit applications.',
              },
            },
            {
              '@type': 'Question',
              name: 'What Philippine documents are needed for a German spouse visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For a German spouse visa (Ehegattennachzug), Filipino applicants typically need: PSA Birth Certificate + DFA Apostille, PSA Marriage Certificate + DFA Apostille, and NBI Clearance + DFA Apostille. The German embassy may also require a certified German translation (sworn translator).',
              },
            },
            {
              '@type': 'Question',
              name: 'Do German embassies accept PSA e-certificates?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'German embassies generally require physical PSA documents on Security Paper. Contact the German Embassy in Manila or your local German embassy to confirm their current policy on PSA e-certificates before ordering.',
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
        subtitle="CENOMAR, PSA Birth Certificate & NBI Clearance — retrieved, apostilled, and shipped to Germany via DHL"
        badges={['DFA Apostille Included', 'Ships to Germany via DHL', 'Free Consultation']}
        ctaText="Get a Free Quote"
        ctaHref="/en/contact/"
      />

      <SummaryBlock
        conclusion="Documents Required for German Visa & Residence Applications"
        points={['Filipino nationals applying for a German spouse visa (Ehegattennachzug), job seeker visa, or permanent residence must provide Philippine civil documents with DFA Apostille. Germany is a Hague Convention member, so no additional legalization by the German Embassy is required — but DFA Apostille is mandatory for all civil documents submitted to German authorities.']}
      />

      <FeatureList
        heading="What We Retrieve for Germany Applications"
        items={[
          {
            icon: <FileCheck className="w-6 h-6 text-blue-600" />,
            title: 'PSA Birth Certificate + DFA Apostille',
            description: 'Required for all visa and residence applications. We retrieve directly from PSA and obtain DFA Apostille.',
          },
          {
            icon: <FileCheck className="w-6 h-6 text-blue-600" />,
            title: 'CENOMAR or PSA Marriage Certificate + DFA Apostille',
            description: 'CENOMAR for single applicants; PSA Marriage Certificate for spouse visa (Ehegattennachzug). Both require DFA Apostille.',
          },
          {
            icon: <Shield className="w-6 h-6 text-blue-600" />,
            title: 'NBI Clearance + DFA Apostille',
            description: 'Philippine national police clearance required by German authorities for background verification. We handle NBI renewal and apostille.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your request', description: 'Fill out our form with your full name, date of birth, and the documents you need for Germany.' },
          { title: 'We retrieve from PSA / NBI', description: 'We order from official PSA channels and arrange NBI clearance (3–7 business days each).' },
          { title: 'DFA Apostille', description: 'We bring documents to DFA for Apostille authentication (3–5 business days).' },
          { title: 'DHL Express to Germany', description: 'We ship directly to your German address (3–5 business days). Tracking provided.' },
        ]}
      />

      <section className="py-8 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Note: German Translation Requirement</h2>
        <p className="text-gray-700">
          German authorities typically require all Philippine documents to be accompanied by a certified German translation prepared by a sworn translator (beeidigter Übersetzer). We can advise on this step and, in some cases, connect you with a certified translator. Please mention this when you contact us.
        </p>
      </section>

      <CtaBox
        title="Ready to Get Your Documents for Germany?"
        description="We handle PSA retrieval, DFA Apostille, and DHL shipping to Germany. Free quote, no hidden fees."
        buttonText="Get a Free Quote"
        href="/en/contact/"
      />

      <FaqSection
        items={[
          {
            q: 'Does Germany require DFA Apostille on Philippine documents?',
            a: 'Yes. Germany is a Hague Convention member. DFA Apostille is required for Philippine civil documents used in German visa and residence applications.',
          },
          {
            q: 'What Philippine documents are needed for a German spouse visa?',
            a: 'PSA Birth Certificate, PSA Marriage Certificate (or CENOMAR), and NBI Clearance — all with DFA Apostille. A sworn German translation is also typically required.',
          },
          {
            q: 'Do German embassies accept PSA e-certificates?',
            a: 'Generally, German authorities prefer physical PSA documents on Security Paper. Confirm with the German Embassy before ordering an e-certificate.',
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
