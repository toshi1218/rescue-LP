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

export default function ApostilleGuideEn() {
  useMeta(
    'DFA Apostille Service [March 2026] — No Trip Needed',
    'Need a DFA Apostille but can\'t go to the Philippines? We handle PSA, NBI, CENOMAR authentication — and ship to you. Free consultation available.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'DFA Apostille Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'DFA Apostille Authentication Service',
        description: 'We handle DFA Apostille authentication for PSA, NBI, CENOMAR, and LTO documents. Physical paper Apostille provided. Ships worldwide via DHL. No trip to the Philippines needed.',
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
                text: 'e-Apostille is a digital authentication issued online. Most US immigration authorities (USCIS, NVC) require a paper Apostille original. We provide paper originals.',
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
        badges={['Paper Apostille Original', 'Ships Worldwide via DHL', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
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
          'Paper Apostille original shipped via DHL Express worldwide',
          'Can be combined with document retrieval for a seamless one-stop service',
        ]}
        ctaText="Start Free Consultation"
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
            title: 'e-Apostille was rejected by your submission authority',
            description: 'Most immigration authorities (USCIS, IRCC, Home Affairs, UKVI) require a paper Apostille original. We provide paper originals, not digital versions.',
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
          { title: 'We confirm Apostille requirements per destination authority', description: 'Requirements differ by country — we verify whether a paper Apostille or e-Apostille is required and confirm the scope before quoting.' },
          { title: 'We retrieve the document and submit to the DFA Apostille queue', description: 'Our team requests the source document from PSA or NBI, then submits it to DFA for official Apostille authentication in the Philippines.' },
          { title: 'Apostilled original shipped via DHL — accepted in 124+ countries', description: 'The physical Apostilled document is shipped to your address with DHL tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      {/* Which documents need Apostille reference table */}
      <div className="my-8">
        <h2 className="text-base font-bold text-secondary mb-3">Which Documents Need DFA Apostille?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="px-3 py-2.5 text-left font-semibold">Document</th>
                <th className="px-3 py-2.5 text-center font-semibold">USA</th>
                <th className="px-3 py-2.5 text-center font-semibold">Canada</th>
                <th className="px-3 py-2.5 text-center font-semibold">Australia</th>
                <th className="px-3 py-2.5 text-center font-semibold">UK</th>
                <th className="px-3 py-2.5 text-center font-semibold">Japan</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['CENOMAR', '✓', '✓', '✓', '✓', '✓'],
                ['PSA Birth Certificate', '✓', '✓', '✓', '✓', '✓'],
                ['PSA Marriage Certificate', '✓', '✓', '✓', '✓', '✓'],
                ['NBI Clearance', '✓', '✓', '✓', '✓', '✓'],
                ['LTO Driver\'s Record', '✓', '✓', '✓', '✓', '✓'],
              ].map(([doc, ...checks], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-3 py-2.5 font-medium text-gray-700 border-t border-gray-100">{doc}</td>
                  {checks.map((c, j) => (
                    <td key={j} className="px-3 py-2.5 text-center text-green-600 font-medium border-t border-gray-100">{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">✓ = DFA Apostille required for immigration use. We verify the exact format requirement for your specific authority before starting.</p>
      </div>

      <FaqSection
        items={[
          { q: 'How much does it cost?', a: 'DFA Apostille is included in all service packages starting at US$349. PSA/NBI retrieval + Apostille + DHL shipping are all covered. See our Pricing page for the full breakdown.' },
          { q: 'What is the difference between e-Apostille and paper Apostille?', a: 'e-Apostille is a digital authentication issued online. Most immigration authorities (USCIS, IRCC, Home Affairs, UKVI) require a paper Apostille original. We provide paper originals.' },
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
