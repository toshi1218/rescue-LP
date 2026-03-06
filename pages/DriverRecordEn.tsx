import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { FileCheck, Globe, Users, Car } from 'lucide-react';

export default function DriverRecordEn() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'LTO Driver Record Retrieval' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'LTO Driver\'s Record Retrieval Service (+ DFA Apostille)',
        description: 'We retrieve the LTO Driver\'s Record from the Philippines with DFA Apostille and ship to your US address via DHL. Required for Philippine license conversion at US state DMVs.',
        url: 'https://ph-document.com/en/driver-record',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: { '@type': 'Country', name: 'US' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '699',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '699',
            priceCurrency: 'USD',
            description: 'LTO retrieval + DFA Apostille + DHL shipping to USA (all-inclusive)',
          },
        },
      }}
    >
      <HeroBanner
        title="LTO Driver's Record — Retrieved and Shipped to the USA"
        badges={['Ships via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Car className="w-4 h-4" />,
            title: 'Converting a Philippine license to a US state license',
            description: 'Most US states require an LTO Driver\'s Record with DFA Apostille. We handle retrieval and authentication from our Cebu office.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Employer arranging documents for Filipino employees',
            description: 'We handle bulk orders for multiple employees. Share the number of applicants and we will coordinate.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what your state DMV requires',
            description: 'Requirements vary by state. We confirm what your specific DMV needs before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm DMV requirements before we start"
        description="LTO Driver's Record, Apostille, official receipt — requirements vary by state. We verify for your specific case."
        buttonText="Talk to Us"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'LTO Driver\'s Record retrieval',
            description: 'We apply to the Land Transportation Office (LTO) and obtain the Driver\'s Record on your behalf.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille authentication',
            description: 'We arrange DFA Apostille when required by your state DMV. Paper original provided.',
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
        description="LTO retrieval, DFA Apostille, and DHL shipping are all included in one quoted price."
        buttonText="Get a Quote"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your state DMV, number of applicants, and your target date.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles LTO retrieval and DFA Apostille authentication.' },
          { title: 'DHL delivery to the USA', description: 'Documents are shipped with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What documents are required for Philippine license conversion?', a: 'Typically an LTO Driver\'s Record with DFA Apostille. Some states also require an official LTO receipt. Requirements vary by state — we confirm for your specific DMV.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. LTO retrieval, DFA Apostille, and DHL shipping are all included.' },
          { q: 'Can you handle multiple employees at once?', a: 'Yes. Share the number of applicants and we will coordinate bulk processing.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total: LTO takes 2–3 weeks, DFA Apostille 1–2 weeks, and DHL shipping 3–5 business days.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
