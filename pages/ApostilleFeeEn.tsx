import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { FileCheck, Globe, AlertTriangle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function ApostilleFeeEn() {
  useMeta(
    'DFA Apostille Fee [April 2026] — Full Price Breakdown',
    'Full cost breakdown for DFA Apostille: official fees + proxy service + international shipping. Compare CENOMAR, PSA, and NBI pricing. Free quote available.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'DFA Apostille Fee & Pricing' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'DFA Apostille Authentication Service — All-Inclusive Pricing',
        description: 'Full cost breakdown for DFA Apostille: official fees + proxy service + DHL shipping worldwide. All-inclusive pricing with no hidden fees. Free quote available for CENOMAR, PSA, and NBI.',
        url: 'https://ph-document.com/en/apostille-fee/',
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
              name: 'How much does DFA Apostille cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case. DFA Apostille, PSA retrieval (when needed), and DHL shipping are all included in one quote.',
              },
            },
            {
              '@type': 'Question',
              name: 'Why is your price higher than some agencies?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Some agencies quote only the base fee and add Apostille, shipping, and handling separately. Our price includes everything — compare total costs, not base fees.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is Apostille always required?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'It depends on your submission authority. We confirm this before quoting so you do not pay for authentication you do not need.',
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
        title="DFA Apostille Pricing: Know the Real Total Before You Start"
        badges={['All-Inclusive Pricing', 'No Hidden Fees', 'Ships via DHL']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="DFA Apostille costs more than the government fee alone. We quote the real total upfront."
        points={[
          'Government fee is just the base; handling, shipping, and retrieval add up',
          'Our all-inclusive price covers DFA Apostille + document retrieval + DHL shipping',
          'No surprise add-ons after you commit',
          'Compare total costs across providers before deciding',
        ]}
        ctaText="Get Your Total Quote"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Comparing agencies by per-document price',
            description: 'Some agencies advertise a low base fee but add Apostille, shipping, and handling separately. We quote everything upfront in one price.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Want to know the total cost before committing',
            description: 'We provide all-inclusive pricing after a free consultation — DFA Apostille, PSA retrieval, and DHL shipping included.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Not sure if Apostille is even required',
            description: 'We confirm whether Apostille is needed for your specific submission authority before quoting — no unnecessary costs.',
          },
        ]}
      />

      <CtaBox
        title="Get the real total — not just the base fee"
        description="We quote DFA Apostille, PSA retrieval, and DHL shipping together. No surprise add-ons after you start."
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
            description: 'We can bundle PSA retrieval with Apostille for a single all-inclusive price.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your address worldwide',
            description: 'Tracked delivery directly to your door. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us which documents need Apostille and your submission authority.' },
          { title: 'We provide all-inclusive pricing', description: 'DFA Apostille, PSA retrieval, and DHL shipping quoted together upfront.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles retrieval and authentication.' },
          { title: 'DHL delivery worldwide', description: 'Tracked shipment to your address. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'How much does DFA Apostille cost?', a: 'We provide all-inclusive pricing after reviewing your case. DFA Apostille, PSA retrieval (when needed), and DHL shipping are all included in one quote.' },
          { q: 'Why is your price higher than some agencies?', a: 'Some agencies quote only the base fee and add Apostille, shipping, and handling separately. Our price includes everything — compare total costs, not base fees.' },
          { q: 'Is Apostille always required?', a: 'It depends on your submission authority. We confirm this before quoting so you do not pay for authentication you do not need.' },
          { q: 'Can you handle urgent cases?', a: 'Yes. Share your deadline and we will confirm whether priority processing is feasible before you commit.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
