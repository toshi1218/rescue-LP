import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { FileCheck, Globe, Users, Car } from 'lucide-react';

export default function LicenseConversionEn() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Philippine License Conversion Documents' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Philippine License Conversion — LTO Driver\'s Record Retrieval Service',
        description: 'We retrieve the LTO Driver\'s Record with DFA Apostille for Philippine license conversion at US state DMVs. Bulk orders for employers welcome. Ships to your US address via DHL.',
        url: 'https://ph-document.com/en/drivers-license-conversion',
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
                text: 'We provide all-inclusive pricing after reviewing your case. LTO retrieval, DFA Apostille, and DHL shipping are all included.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can you handle multiple employees at once?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Share the number of applicants and we will coordinate bulk processing.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks total: LTO takes 2–3 weeks, DFA Apostille 1–2 weeks, and DHL shipping 3–5 business days.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="LTO Driver's Record for Philippine License Conversion — Shipped to the USA"
        badges={['Ships via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="Converting a Philippine license to a US state license? We retrieve the LTO documents you need."
        points={[
          'LTO Driver Record with DFA Apostille for state DMV requirements',
          'Requirements vary by state; we verify before starting',
          'Bulk orders available for employers sponsoring multiple drivers',
          'All-inclusive pricing with DHL Express shipping to USA',
        ]}
        ctaText="Start Free Consultation"
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
