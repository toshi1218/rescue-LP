import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { FileCheck, Globe, AlertTriangle } from 'lucide-react';

export default function ApostilleGuideEn() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'DFA Apostille Service' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'DFA Apostille Service',
        url: 'https://ph-document.com/en/apostille',
        provider: { '@type': 'Organization', name: 'IGRS Inc.' },
      }}
    >
      <HeroBanner
        title="DFA Apostille for Philippine Documents — Shipped to the USA"
        badges={['Paper Apostille Original', 'Ships via DHL', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'USCIS or NVC requires Apostille on your Philippine documents',
            description: 'We arrange DFA Apostille for PSA documents (CENOMAR, Birth Certificate, Marriage Certificate, NBI Clearance) and ship to the USA.',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'e-Apostille was rejected by your submission authority',
            description: 'Most US immigration authorities require a paper Apostille original. We provide paper originals, not digital versions.',
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
            title: 'DHL shipping to your US address',
            description: 'Tracked international delivery directly to your door. No forwarding needed.',
          },
        ]}
      />

      <CtaBox
        title="All-inclusive pricing — no surprise add-ons"
        description="DFA Apostille, PSA retrieval (when needed), and DHL shipping are all included in one quoted price."
        buttonText="Get a Quote"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us which documents need Apostille and your submission authority.' },
          { title: 'We confirm scope and quote', description: 'We verify requirements and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles PSA retrieval and DFA Apostille authentication.' },
          { title: 'DHL delivery to the USA', description: 'Documents are shipped with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. DFA Apostille, PSA retrieval (when needed), and DHL shipping are all included.' },
          { q: 'What is the difference between e-Apostille and paper Apostille?', a: 'e-Apostille is a digital authentication issued online. Most US immigration authorities (USCIS, NVC) require a paper Apostille original. We provide paper originals.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total: PSA takes 2–3 weeks, DFA Apostille 1–2 weeks, and DHL shipping 3–5 business days.' },
          { q: 'Can you handle urgent cases?', a: 'Yes. Share your deadline and we will confirm whether priority processing is feasible before you commit.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
