import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Heart, FileCheck, Globe } from 'lucide-react';

export default function CenomarApostilleEn() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'CENOMAR Apostille Service' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CENOMAR Apostille Service',
        url: 'https://ph-document.com/en/cenomar-apostille',
        provider: { '@type': 'Organization', name: 'IGRS Inc.' },
      }}
    >
      <HeroBanner
        title="CENOMAR with DFA Apostille — Shipped to the USA"
        badges={['Ships via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Filing a K-1 or CR-1 visa petition',
            description: 'USCIS and NVC require Philippine civil documents with DFA Apostille. We handle the full process.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure if Apostille is required',
            description: 'Requirements vary by submission authority. We confirm what your specific case needs before we start.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Living in the US with no contacts in the Philippines',
            description: 'Our Cebu-based team handles everything locally — no need for you to arrange anything in the Philippines.',
          },
        ]}
      />

      <CtaBox
        title="Not sure what you need? Start here."
        description="We confirm whether Apostille is required for your case before quoting. No guesswork, no wasted money."
        buttonText="Talk to Us"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA CENOMAR retrieval',
            description: 'We apply to the Philippine Statistics Authority (PSA) and obtain the CENOMAR on your behalf.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille authentication',
            description: 'We arrange DFA Apostille at the Philippine Department of Foreign Affairs. Paper original included.',
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
        description="PSA retrieval, DFA Apostille, and DHL shipping are all included in one quoted price. No hidden fees after you start."
        buttonText="Get a Quote"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your use case (K-1, CR-1, etc.) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify whether Apostille is required and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles PSA retrieval and DFA Apostille authentication.' },
          { title: 'DHL delivery to the USA', description: 'Documents are shipped with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. PSA retrieval, DFA Apostille, and DHL shipping are all included.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total: PSA takes 2–3 weeks, DFA Apostille 1–2 weeks, and DHL shipping 3–5 business days.' },
          { q: 'Can you handle urgent cases?', a: 'Yes. Share your deadline and we will confirm whether priority processing is feasible before you commit.' },
          { q: 'Does USCIS accept e-Apostille?', a: 'Most USCIS and NVC submissions require a paper Apostille original. We confirm the required format for your specific case.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
