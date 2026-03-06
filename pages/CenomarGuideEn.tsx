import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Heart, FileCheck, Globe, Users } from 'lucide-react';

export default function CenomarGuideEn() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'CENOMAR Service' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CENOMAR Retrieval Service (PSA + DFA Apostille)',
        description: 'We retrieve CENOMAR from PSA with DFA Apostille and ship to your US address via DHL. Required for K-1 fiancé visa and CR-1/IR-1 spouse visa. No trip to the Philippines needed.',
        url: 'https://ph-document.com/en/cenomar',
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
      }}
    >
      <HeroBanner
        title="CENOMAR from the Philippines — Delivered to Your Door in the USA"
        badges={['Ships to USA via DHL', 'Apostille Included', 'Approx. 4–6 Weeks']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Applying for a K-1 Fiancé Visa',
            description: 'USCIS requires a CENOMAR with DFA Apostille as proof of your Filipino partner\'s single status.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Filing for a CR-1 or IR-1 Spouse Visa',
            description: 'We handle the full document chain — PSA issuance, DFA Apostille, and international shipping.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what you need?',
            description: 'Requirements vary by visa type and USCIS office. Consult us first and we will confirm exactly what to order.',
          },
        ]}
      />

      <CtaBox
        title="Not Sure If You Need an Apostille?"
        description="Some USCIS offices accept e-Apostille; others require a physical original. We will confirm for your specific case before you pay."
        buttonText="Ask Us for Free"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA CENOMAR Retrieval',
            description: 'We order the official CENOMAR directly from the Philippine Statistics Authority (PSA) on your behalf.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille Authentication',
            description: 'We submit the document to the Department of Foreign Affairs (DFA) for physical Apostille certification.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL International Shipping to USA',
            description: 'Your documents are shipped directly to your US address with full tracking.',
          },
        ]}
      />

      <CtaBox
        title="All-Inclusive Pricing — No Hidden Fees"
        description="PSA retrieval, DFA Apostille, and DHL shipping to the USA are all bundled into one flat price. No surprises after you pay."
        buttonText="Get a Quote"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit the Consultation Form', description: 'Tell us your visa type and the name on the document. We confirm what you need.' },
          { title: 'Receive Your All-Inclusive Quote', description: 'We send you a fixed price covering everything — no add-ons later.' },
          { title: 'We Handle Everything in the Philippines', description: 'Our local team retrieves the PSA document and processes the DFA Apostille.' },
          { title: 'Delivered to Your US Address', description: 'Shipped via DHL with tracking. Estimated delivery: 4–6 weeks from order.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'How much does it cost?', a: 'Our all-inclusive price covers PSA retrieval, DFA Apostille, and DHL shipping to the USA. Contact us for an exact quote based on your situation.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks. PSA issuance takes 2–3 weeks, DFA Apostille takes 1–2 weeks, and DHL shipping to the USA takes 3–5 business days.' },
          { q: 'Can you handle rush orders?', a: 'Yes. Let us know your deadline and we will check if expedited processing is available.' },
          { q: 'Do I need a physical Apostille or is e-Apostille OK?', a: 'Most USCIS offices require a physical Apostille original. We will confirm the requirement for your specific case before processing.' },
        ]}
        ctaTitle="Ready to Get Started?"
        ctaButton="Start Free Consultation"
      />
    </PageLayout>
  );
}
