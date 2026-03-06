import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { Heart, FileCheck, Globe, Users } from 'lucide-react';

export default function PsaMarriageCertEn() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PSA Marriage Certificate Retrieval' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PSA Marriage Certificate Retrieval Service (+ DFA Apostille)',
        description: 'We retrieve PSA Marriage Certificate from the Philippines with DFA Apostille and ship to your US address via DHL. Required for CR-1/IR-1 spouse visa and NVC submission.',
        url: 'https://ph-document.com/en/psa-marriage-certificate',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: { '@type': 'Country', name: 'US' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '289',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '289',
            priceCurrency: 'USD',
            description: 'PSA retrieval + DFA Apostille + DHL shipping to USA (all-inclusive)',
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
                text: 'We provide all-inclusive pricing after reviewing your case. PSA retrieval, DFA Apostille, and DHL shipping are all included.',
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
              name: 'Do I need an annotated marriage certificate?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'If you have gone through annulment or foreign divorce recognition, an annotated version may be required. Share your situation and we will confirm.',
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
        title="PSA Marriage Certificate — Retrieved and Shipped to the USA"
        badges={['Ships via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="We retrieve your PSA Marriage Certificate with DFA Apostille and ship it to your US address."
        points={[
          'Required for CR-1/IR-1 spouse visa, NVC submission, and marriage registration',
          'Annotated or standard format available based on your needs',
          'DFA Apostille included for USCIS and NVC acceptance',
          'All-inclusive pricing with DHL Express shipping to USA',
        ]}
        ctaText="Start Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Filing a CR-1 or IR-1 spouse visa petition',
            description: 'NVC requires a PSA Marriage Certificate with DFA Apostille. We handle the full process from retrieval to delivery.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Need an annotated marriage certificate',
            description: 'After annulment or foreign divorce recognition, an annotated PSA Marriage Certificate may be required. We handle this too.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what format is required',
            description: 'We confirm whether Apostille is needed for your specific submission authority before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm requirements before we start"
        description="Apostille required or not? Annotated or standard? We verify for your specific case so you do not pay for the wrong document."
        buttonText="Talk to Us"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA Marriage Certificate retrieval',
            description: 'We apply to PSA and obtain the SECPA-printed original on your behalf.',
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
        description="PSA retrieval, DFA Apostille, and DHL shipping are all included in one quoted price."
        buttonText="Get a Quote"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your use case (CR-1, IR-1, etc.) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify whether Apostille or annotated version is required and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles PSA retrieval and DFA Apostille authentication.' },
          { title: 'DHL delivery to the USA', description: 'Documents are shipped with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. PSA retrieval, DFA Apostille, and DHL shipping are all included.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total: PSA takes 2–3 weeks, DFA Apostille 1–2 weeks, and DHL shipping 3–5 business days.' },
          { q: 'Do I need an annotated marriage certificate?', a: 'If you have gone through annulment or foreign divorce recognition, an annotated version may be required. Share your situation and we will confirm.' },
          { q: 'Can you handle urgent cases?', a: 'Yes. Share your deadline and we will confirm whether priority processing is feasible before you commit.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
