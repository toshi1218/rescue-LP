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
    'PSA Marriage Certificate is an official marriage record from the Philippine Statistics Authority. Required for spouse visas and immigration. We handle the online PSA application and DFA e-Apostille application on your behalf.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PSA Marriage Certificate Retrieval' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PSA Marriage Certificate Online Application Service (+ DFA e-Apostille)',
        description: 'We handle your PSA Marriage Certificate online application and DFA e-Apostille application on your behalf — in English, with payment handled for you. Required for spouse visa and immigration applications in the US, Canada, Australia, UK & more.',
        url: 'https://ph-document.com/en/psa-marriage-certificate/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'KR'],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '219',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '219',
            priceCurrency: 'USD',
            description: 'PSA online application + DFA e-Apostille application (all-inclusive) — pricing under review following DFA\'s March 2026 e-Apostille policy change',
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
                text: 'We provide all-inclusive pricing after reviewing your case, covering the PSA online application and DFA e-Apostille application.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Timing depends on PSA and DFA processing queues. We confirm a current estimate for your case before you commit.',
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
        title="PSA Marriage Certificate — Online Application &amp; e-Apostille, Handled For You"
        badges={['Online Application Handled', 'DFA e-Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="We handle your PSA Marriage Certificate online application and DFA e-Apostille application on your behalf — in English, no trip to the Philippines."
        points={[
          'Required for spouse visa and immigration applications worldwide',
          'Annotated or standard format available based on your needs',
          'Since March 2026, DFA authenticates PSA documents with an electronic e-Apostille (a paper Apostille is no longer issued for PSA documents) — we handle that application too',
          'All-inclusive pricing: no hidden fees for the application or e-Apostille',
        ]}
        ctaText="Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Filing a spouse visa or immigration application',
            description: 'Immigration authorities worldwide require a PSA Marriage Certificate with DFA authentication. We handle the online application and e-Apostille process.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Need an annotated marriage certificate',
            description: 'After annulment or foreign divorce recognition, an annotated PSA Marriage Certificate may be required. We handle this application too.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what format is required',
            description: 'We confirm whether Apostille is needed — and whether your authority accepts the e-Apostille — for your specific submission before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm requirements before we start"
        description="Apostille required or not? Annotated or standard? We verify for your specific case so you do not pay for the wrong document."
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
            title: 'PSA Marriage Certificate online application',
            description: 'We complete the PSA online application form and payment on your behalf, in English.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA e-Apostille application',
            description: 'We handle the DFA e-Apostille (electronic) application at the Philippine Department of Foreign Affairs. Since March 2026, DFA no longer issues a paper Apostille for PSA documents.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Format guidance for your authority',
            description: 'We confirm what your specific immigration authority accepts (e-Apostille PDF, or a physical PSA original) before you order.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your use case (CR-1, IR-1, etc.) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify whether e-Apostille is accepted by your authority, whether an annotated version is required, and provide all-inclusive pricing.' },
          { title: 'We complete the PSA and DFA online applications', description: 'We handle the PSA application, payment, and DFA e-Apostille application on your behalf, in English.' },
          { title: 'Document delivered', description: 'PSA delivers your document; the DFA e-Apostille is delivered electronically for submission.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case, covering the PSA online application and DFA e-Apostille application.' },
          { q: 'How long does it take?', a: 'Timing depends on PSA and DFA processing queues. We confirm a current estimate for your case before you commit.' },
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
