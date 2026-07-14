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
import { SEO_YEAR } from '../lib/seoDate';

export default function LicenseConversionEn() {
  useMeta(
    `Philippine Driver's License Conversion [${SEO_YEAR}] — LTO Record + Apostille`,
    "Need your LTO Driver's Record for license conversion abroad? We retrieve it with DFA Apostille and ship to USA, Canada, Australia, Japan, UAE and more. Free quote.",
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Philippine License Conversion Documents' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Philippine License Conversion — LTO Driver\'s Record Retrieval Service',
        description: 'We retrieve the LTO Driver\'s Record with DFA Apostille for Philippine license conversion worldwide. Bulk orders for employers welcome. Ships via DHL to the US, Canada, Australia, UK & more.',
        url: 'https://ph-document.com/en/drivers-license-conversion/',
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
        title="LTO Driver's Record for Philippine License Conversion — Shipped Worldwide"
        badges={['Ships Worldwide via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="Converting a Philippine license in the US, Canada, Australia, UK or Japan? We retrieve the LTO documents you need."
        points={[
          'LTO Driver Record with DFA Apostille for license conversion requirements worldwide',
          'Requirements vary by country; we verify before starting',
          'Bulk orders available for employers sponsoring multiple drivers',
          'All-inclusive pricing with DHL Express shipping worldwide',
        ]}
        ctaText="Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Car className="w-4 h-4" />,
            title: 'Converting a Philippine license in the US, Canada, Australia, UK or Japan',
            description: 'Most countries require an LTO Driver\'s Record with DFA Apostille for license conversion. We handle retrieval and authentication from our Cebu office.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Employer arranging documents for Filipino employees',
            description: 'We handle bulk orders for multiple employees. Share the number of applicants and we will coordinate.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what your local authority requires',
            description: 'Requirements vary by country and region. We confirm what your specific licensing authority needs before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm DMV requirements before we start"
        description="LTO Driver's Record, Apostille, official receipt — requirements vary by country and region. We verify for your specific case."
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
            title: 'DHL shipping worldwide',
            description: 'Tracked international delivery directly to your door anywhere in the world. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your country and licensing authority, number of applicants, and your target date.' },
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
