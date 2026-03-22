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
import RelatedArticles from '../components/RelatedArticles';

export default function PsaMarriageCertEn() {
  useMeta(
    'PSA Marriage Certificate + Apostille Service | Philippine Document Service',
    'PSA Marriage Certificate is an official marriage record from the Philippine Statistics Authority. Required for spouse visas and immigration. We retrieve it with DFA Apostille and ship worldwide.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PSA Marriage Certificate Retrieval' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PSA Marriage Certificate Retrieval Service (+ DFA Apostille)',
        description: 'We retrieve PSA Marriage Certificate from the Philippines with DFA Apostille and ship worldwide via DHL. Required for spouse visa and immigration applications in the US, Canada, Australia, UK & more.',
        url: 'https://ph-document.com/en/psa-marriage-certificate',
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
        title="PSA Marriage Certificate — Retrieved and Shipped Worldwide"
        badges={['Ships Worldwide via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
        lastUpdated="March 1, 2026"
      />

      <SummaryBlock
        conclusion="We retrieve your PSA Marriage Certificate with DFA Apostille and ship it to your address worldwide."
        points={[
          'Required for spouse visa and immigration applications worldwide',
          'Annotated or standard format available based on your needs',
          'DFA Apostille included for acceptance by USCIS, IRCC, Home Affairs, UKVI & more',
          'All-inclusive pricing with DHL Express shipping worldwide',
        ]}
        ctaText="Start Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Filing a spouse visa or immigration application',
            description: 'Immigration authorities worldwide require a PSA Marriage Certificate with DFA Apostille. We handle the full process from retrieval to delivery.',
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
        trustNote="Free cancellation before start ﾂｷ Progress updates at every stage ﾂｷ Pay balance only after confirming document copies"
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
            title: 'DHL shipping worldwide',
            description: 'Tracked international delivery directly to your door anywhere in the world. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your use case (CR-1, IR-1, etc.) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify whether Apostille or annotated version is required and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles PSA retrieval and DFA Apostille authentication.' },
          { title: 'DHL delivery worldwide', description: 'Documents are shipped with tracking. Estimated total: 4–6 weeks.' },
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

      <RelatedArticles
        items={[
          { href: '/en/cenomar-vs-marriage-certificate/', title: 'CENOMAR vs. Marriage Certificate', description: 'CR-1 needs the Marriage Certificate — not CENOMAR. Find out why.' },
          { href: '/en/cenomar/', title: 'CENOMAR Retrieval Service', description: 'Need CENOMAR instead? PSA CENOMAR + DFA Apostille + DHL worldwide.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Full checklist for CR-1, K-1, and all other visa types.' },
          { href: '/en/psa-birth-certificate/', title: 'PSA Birth Certificate Service', description: 'Order Marriage Certificate and Birth Certificate together.' },
        ]}
      />
    </PageLayout>
  );
}
