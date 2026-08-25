import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { FileCheck, Globe, AlertTriangle } from 'lucide-react';
import RelatedArticles from '../components/RelatedArticles';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_EN } from '../lib/seoDate';

export default function ApostilleGuideEn() {
  useMeta(
    `DFA Apostille Service [${SEO_YEAR_MONTH_EN}] — No Trip Needed`,
    'Need a DFA Apostille but can\'t go to the Philippines? We handle PSA, NBI, CENOMAR authentication — and ship to you. Free consultation available.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'DFA Apostille Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'DFA Apostille Authentication Service',
        description: 'We handle the appropriate DFA authentication route for PSA, NBI, CENOMAR, and LTO documents. PSA e-Apostilles are delivered digitally; physical documents ship via DHL when needed.',
        url: 'https://ph-document.com/en/apostille/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'KR'],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '349',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '349',
            priceCurrency: 'USD',
            description: 'DFA Apostille + DHL shipping worldwide (all-inclusive)',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'DFA Apostille is included in all service packages starting at US$349. PSA/NBI retrieval + Apostille + DHL shipping are all covered. See our Pricing page for the full breakdown.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the difference between e-Apostille and paper Apostille?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The route depends on the document and destination. For PSA e-Certificates used in Apostille Convention countries, DFA issues a digital e-Apostille. Non-member destinations use a physical Certificate of Authentication and may require embassy attestation. Confirm the receiving authority before ordering.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks total: PSA takes 2–3 weeks, DFA Apostille 1–2 weeks, and DHL shipping 3–5 business days.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can you handle urgent cases?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Share your deadline and we will confirm whether priority processing is feasible before you commit.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="DFA Apostille for Philippine Documents — Shipped Worldwide"
        badges={['Correct Authentication Route', 'Digital or DHL Delivery', 'All-Inclusive Pricing']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="August 18, 2026"
      />

      <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto text-center px-4">
        DFA Apostille is an official authentication issued by the{' '}
        <a href="https://dfa.gov.ph" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Philippine Department of Foreign Affairs (DFA)</a>{' '}
        that makes Philippine documents legally recognized in 124+ Hague Convention countries.
      </p>

      <SummaryBlock
        conclusion="We handle DFA Apostille for any Philippine document and ship the authenticated original to your door."
        points={[
          'DFA Apostille is required for Philippine documents to be accepted abroad',
          'We authenticate PSA, NBI, CENOMAR, and other government documents',
          'Digital e-Apostille or physical authentication delivered through the correct route',
          'Can be combined with document retrieval for a seamless one-stop service',
        ]}
        ctaText="Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Your immigration authority requires Apostille on Philippine documents',
            description: 'We arrange DFA Apostille for PSA documents (CENOMAR, Birth Certificate, Marriage Certificate, NBI Clearance) and ship worldwide.',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Your authority requires a different authentication route',
            description: 'Apostille Convention countries, non-member countries, and individual authorities use different routes. We confirm whether you need an e-Apostille, a physical Certificate of Authentication, embassy attestation, or no authentication.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Want to bundle document retrieval and Apostille',
            description: 'We handle PSA retrieval, DFA Apostille, and DHL shipping together in one flow.',
          },
        ]}
      />

      <CtaBox
        title="Not sure if Apostille is required? Start here."
        description="Requirements vary by submission authority. We confirm what your specific case needs before quoting — no unnecessary costs."
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
            title: 'DFA Apostille authentication',
            description: 'We arrange DFA Apostille at the Philippine Department of Foreign Affairs. Paper original provided.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA document retrieval (when needed)',
            description: 'We can bundle PSA retrieval with Apostille. Covers CENOMAR, Birth Certificate, Marriage Certificate, and NBI Clearance.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping worldwide',
            description: 'Tracked international delivery directly to your door anywhere in the world. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Tell us which documents need Apostille and your deadline', description: 'Share the document type (CENOMAR, NBI, PSA Birth Certificate, etc.), the destination country, and your submission deadline.' },
          { title: 'We confirm authentication requirements per destination authority', description: 'Requirements differ by document and country — we verify whether an e-Apostille, Certificate of Authentication, embassy attestation, or no authentication is required.' },
          { title: 'We retrieve the document and submit to the DFA Apostille queue', description: 'Our team requests the source document from PSA or NBI, then submits it to DFA for official Apostille authentication in the Philippines.' },
          { title: 'Correct format delivered digitally or by DHL', description: 'Digital authentication is emailed in its original form; physical documents are shipped with DHL tracking when needed. Estimated total: 4–6 weeks.' },
        ]}
      />

      <div className="my-8 rounded-xl border border-gray-100 bg-gray-50 p-5">
        <h2 className="mb-3 text-base font-bold text-secondary">Does your document need DFA authentication?</h2>
        <p className="text-sm leading-relaxed text-gray-700">There is no country-wide yes/no rule for every immigration case. The requirement depends on the document, destination, application stage, and receiving authority.</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-700">
          <li>For PSA e-Certificates intended for Apostille Convention use, DFA issues an electronic e-Apostille.</li>
          <li>For non-Apostille destinations, a physical Certificate of Authentication and further consular legalization may be required.</li>
          <li>Non-PSA documents, such as NBI Clearance or LTO records, can follow a different physical-document route.</li>
        </ul>
        <p className="mt-3 text-xs text-gray-500">Always confirm the current official checklist from the receiving authority before ordering or paying for authentication.</p>
      </div>

      <FaqSection
        items={[
          { q: 'How much does it cost?', a: 'DFA Apostille is included in all service packages starting at US$349. PSA/NBI retrieval + Apostille + DHL shipping are all covered. See our Pricing page for the full breakdown.' },
          { q: 'What is the difference between e-Apostille and physical authentication?', a: 'For PSA e-Certificates used in Apostille Convention countries, DFA issues a digital e-Apostille. For non-member destinations, DFA issues a physical Certificate of Authentication and the destination may require embassy attestation. The receiving authority decides which route is acceptable.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total: PSA takes 2–3 weeks, DFA Apostille 1–2 weeks, and DHL shipping 3–5 business days.' },
          { q: 'Can you handle urgent cases?', a: 'Yes. Share your deadline and we will confirm whether priority processing is feasible before you commit.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/apostille-processing-time/', title: 'DFA Apostille Processing Time', description: 'Regular vs Express: how long does DFA Apostille take in 2026?' },
          { href: '/en/apostille-fee/', title: 'DFA Apostille Fee Breakdown', description: 'Full cost breakdown including PSA retrieval and DHL shipping.' },
          { href: '/en/dfa-apostille-cebu-report/', title: 'DFA Apostille at Cebu Window — Field Report', description: 'Step-by-step guide for obtaining DFA Apostille at the Cebu office.' },
          { href: '/en/cenomar/', title: 'CENOMAR Service', description: 'CENOMAR retrieval with DFA Apostille included.' },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: 'NBI Clearance retrieval with DFA Apostille included.' },
        ]}
      />
    </PageLayout>
  );
}
