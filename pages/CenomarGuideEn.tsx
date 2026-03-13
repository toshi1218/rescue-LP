import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { Heart, FileCheck, Globe, Users } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function CenomarGuideEn() {
  useMeta(
    'What is CENOMAR? Certificate of No Marriage from PSA | Philippine Document Service',
    'CENOMAR (Certificate of No Marriage Record) is an official PSA document proving single status in the Philippines. We retrieve it with DFA Apostille and ship worldwide via DHL.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'CENOMAR Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CENOMAR Retrieval Service (PSA + DFA Apostille)',
        description: 'We retrieve CENOMAR from PSA with DFA Apostille and ship worldwide via DHL. Required for immigration and visa applications in the US, Canada, Australia, UK, Japan and more.',
        url: 'https://ph-document.com/en/cenomar',
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
            description: 'PSA retrieval + DFA Apostille + DHL shipping worldwide (all-inclusive)',
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
                text: 'Our all-inclusive price covers PSA retrieval, DFA Apostille, and DHL shipping worldwide. Contact us for an exact quote based on your situation.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks. PSA issuance takes 2–3 weeks, DFA Apostille takes 1–2 weeks, and DHL international shipping takes 3–5 business days.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can you handle rush orders?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Let us know your deadline and we will check if expedited processing is available.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do I need a physical Apostille or is e-Apostille OK?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Most USCIS offices require a physical Apostille original. We will confirm the requirement for your specific case before processing.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="CENOMAR from the Philippines — Delivered to Your Door Worldwide"
        badges={['Ships Worldwide via DHL', 'Apostille Included', 'Approx. 4–6 Weeks']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto text-center px-4">
        CENOMAR (Certificate of No Marriage Record) is an official PSA document proving single status in the Philippines. Required for K-1 visas, international marriage registration, and immigration applications worldwide.
      </p>

      <SummaryBlock
        conclusion="We retrieve your CENOMAR from PSA, get DFA Apostille, and ship it to your address worldwide. No trip to the Philippines needed."
        points={[
          'All-inclusive service: PSA retrieval + DFA Apostille + DHL Express shipping',
          'Required for visa and immigration applications in the US, Canada, Australia, UK & more',
          'You consult in English; our Cebu team handles all Philippine government offices',
          'Transparent pricing with no hidden fees or surprise add-ons',
        ]}
        ctaText="Start Free Consultation"
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
        trustNote="Free cancellation before start ﾂｷ Progress updates at every stage ﾂｷ Pay balance only after confirming document copies"
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
            title: 'DHL International Shipping Worldwide',
            description: 'Your documents are shipped directly to your address worldwide with full tracking.',
          },
        ]}
      />

      <CtaBox
        title="All-Inclusive Pricing — No Hidden Fees"
        description="PSA retrieval, DFA Apostille, and DHL shipping worldwide are all bundled into one flat price. No surprises after you pay."
        buttonText="Get a Quote"
        href="#contact"
        variant="secondary"
        trustNote="English only ﾂｷ Anonymous inquiries welcome ﾂｷ Reply within 24 hours"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit the Consultation Form', description: 'Tell us your visa type and the name on the document. We confirm what you need.' },
          { title: 'Receive Your All-Inclusive Quote', description: 'We send you a fixed price covering everything — no add-ons later.' },
          { title: 'We Handle Everything in the Philippines', description: 'Our local team retrieves the PSA document and processes the DFA Apostille.' },
          { title: 'Delivered to Your Address Worldwide', description: 'Shipped via DHL with tracking. Estimated delivery: 4–6 weeks from order.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'How much does it cost?', a: 'Our all-inclusive price covers PSA retrieval, DFA Apostille, and DHL shipping worldwide. Contact us for an exact quote based on your situation.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks. PSA issuance takes 2–3 weeks, DFA Apostille takes 1–2 weeks, and DHL international shipping takes 3–5 business days.' },
          { q: 'Can you handle rush orders?', a: 'Yes. Let us know your deadline and we will check if expedited processing is available.' },
          { q: 'Do I need a physical Apostille or is e-Apostille OK?', a: 'Most USCIS offices require a physical Apostille original. We will confirm the requirement for your specific case before processing.' },
        ]}
        ctaTitle="Ready to Get Started?"
        ctaButton="Start Free Consultation"
      />
    </PageLayout>
  );
}
