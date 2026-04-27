import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { FileCheck, Globe, Users, Car } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function DriverRecordEn() {
  useMeta(
    "LTO Driver's Record from the Philippines | Philippine Document Service",
    "LTO Driver's Record from the Philippines — retrieved by our local staff with DFA Apostille. Required for foreign license conversion and background checks.",
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'LTO Driver Record Retrieval' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'LTO Driver\'s Record Retrieval Service (+ DFA Apostille)',
        description: 'We retrieve the LTO Driver\'s Record from the Philippines with DFA Apostille and ship to your address worldwide via DHL. Required for Philippine license conversion in the US, Canada, Australia, UK, and Japan.',
        url: 'https://ph-document.com/en/driver-record/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'KR'],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '699',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '699',
            priceCurrency: 'USD',
            description: 'LTO retrieval + DFA Apostille + DHL shipping worldwide (all-inclusive)',
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
        title="LTO Driver's Record — Retrieved and Shipped Worldwide via DHL"
        badges={['Ships via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="We retrieve your LTO Driver Record with DFA Apostille and ship it to your address worldwide."
        points={[
          'Required for license conversion, employment verification, and immigration',
          'DFA Apostille included for acceptance by immigration authorities worldwide',
          'Bulk orders available for employers and fleet operators',
          'All-inclusive pricing with DHL Express shipping',
        ]}
        ctaText="Start Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Car className="w-4 h-4" />,
            title: 'Converting a Philippine license in the US, Canada, Australia, UK, or Japan',
            description: 'Most countries require an LTO Driver\'s Record with DFA Apostille for license conversion. We handle retrieval and authentication from our Cebu office.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Employer arranging documents for Filipino employees',
            description: 'We handle bulk orders for multiple employees. Share the number of applicants and we will coordinate.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what your country\'s authority requires',
            description: 'Requirements vary by country and authority. We confirm what your specific licensing authority needs before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm requirements before we start"
        description="LTO Driver's Record, Apostille, official receipt — requirements vary by country. We verify for your specific case."
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
            title: 'DHL shipping to your address worldwide',
            description: 'Tracked international delivery directly to your door. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your destination country, number of applicants, and your target date.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles LTO retrieval and DFA Apostille authentication.' },
          { title: 'DHL delivery worldwide', description: 'Documents are shipped with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What documents are required for Philippine license conversion?', a: 'Typically an LTO Driver\'s Record with DFA Apostille. Some countries also require an official LTO receipt. Requirements vary by country — we confirm for your specific authority.' },
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
