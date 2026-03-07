import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { FileCheck, Globe, AlertTriangle } from 'lucide-react';

export default function ApostilleGuideEn() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'DFA Apostille Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'DFA Apostille Authentication Service',
        description: 'We handle DFA Apostille authentication for PSA, NBI, CENOMAR, and LTO documents. Physical paper Apostille provided. Ships worldwide via DHL. No trip to the Philippines needed.',
        url: 'https://ph-document.com/en/apostille',
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
                text: 'We provide all-inclusive pricing after reviewing your case. DFA Apostille, PSA retrieval (when needed), and DHL shipping are all included.',
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
      />

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
        trustNote="Free cancellation before start ﾂｷ Progress updates at every stage ﾂｷ Pay balance only after confirming document copies"
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

      <CtaBox
        title="All-inclusive pricing — no surprise add-ons"
        description="DFA Apostille, PSA retrieval (when needed), and DHL shipping are all included in one quoted price."
        buttonText="Get a Quote"
        href="#contact"
        variant="secondary"
        trustNote="English only ﾂｷ Anonymous inquiries welcome ﾂｷ Reply within 24 hours"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us which documents need Apostille and your submission authority.' },
          { title: 'We confirm scope and quote', description: 'We verify requirements and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles PSA retrieval and DFA Apostille authentication.' },
          { title: 'DHL delivery worldwide', description: 'Documents are shipped with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. DFA Apostille, PSA retrieval (when needed), and DHL shipping are all included.' },
          { q: 'What is the difference between e-Apostille and paper Apostille?', a: 'e-Apostille is a digital authentication issued online. Most immigration authorities (USCIS, IRCC, Home Affairs, UKVI) require a paper Apostille original. We provide paper originals.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total: PSA takes 2–3 weeks, DFA Apostille 1–2 weeks, and DHL shipping 3–5 business days.' },
          { q: 'Can you handle urgent cases?', a: 'Yes. Share your deadline and we will confirm whether priority processing is feasible before you commit.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
