import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { Heart, FileCheck, Globe, Clock } from 'lucide-react';
import RelatedArticles from '../components/RelatedArticles';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR } from '../lib/seoDate';

export default function Cr1VisaDocsEn() {
  useMeta(
    `CR-1 Visa Philippine Documents [${SEO_YEAR}] — PSA + Apostille for NVC`,
    `CR-1/IR-1 spouse visa? Get PSA Marriage Certificate, Birth Certificate, NBI Clearance + DFA Apostille ready for NVC. We handle everything from abroad. Free quote.`,
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'CR-1/IR-1 Spouse Visa Documents Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CR-1/IR-1 Spouse Visa Philippine Documents Retrieval Service',
        description: 'We retrieve all Philippine documents required for a CR-1/IR-1 spouse visa — PSA Marriage Certificate, Birth Certificate, NBI Clearance with DFA Apostille. NVC-ready. Ships to USA via DHL.',
        url: 'https://ph-document.com/en/cr1-visa-documents/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: { '@type': 'Country', name: 'US' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '899',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '899',
            priceCurrency: 'USD',
            description: 'CR-1/IR-1 Document Package — all documents + DFA Apostille + DHL to USA (all-inclusive)',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What Philippine documents does NVC require for CR-1/IR-1?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Typically PSA Marriage Certificate, Birth Certificate, and NBI Clearance with DFA Apostille. Requirements may vary. We confirm for your specific case.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case. All documents, DFA Apostille, and DHL shipping are included.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks total. We coordinate all documents together to minimize total time.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can you handle urgent cases?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Share your NVC deadline and we will confirm whether priority processing is feasible.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="CR-1/IR-1 Spouse Visa: Philippine Documents Retrieved and Shipped to the USA"
        badges={['Ships via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="Filing a CR-1 or IR-1 spouse visa? We retrieve all Philippine documents NVC-ready and ship to your door."
        points={[
          'PSA Marriage Certificate, Birth Certificate, NBI Clearance with DFA Apostille',
          'Documents formatted for NVC submission requirements',
          'We verify what your specific case needs before starting',
          'All-inclusive pricing with DHL Express shipping to USA',
        ]}
        ctaText="Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'US citizen or LPR filing a CR-1 or IR-1 petition',
            description: 'NVC requires PSA Marriage Certificate, Birth Certificate, and NBI Clearance with DFA Apostille from your Filipino spouse. We handle all of it.',
          },
          {
            icon: <Clock className="w-4 h-4" />,
            title: 'Have an NVC submission or embassy interview date',
            description: 'We work backward from your target date to ensure all documents arrive valid and on time.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure exactly what NVC requires',
            description: 'We confirm the required documents and format for your specific CR-1/IR-1 case before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm NVC requirements before we start"
        description="Marriage Certificate, Birth Certificate, NBI Clearance — we verify what your specific NVC case needs and quote everything together."
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
            title: 'PSA Marriage Certificate, Birth Certificate, NBI Clearance retrieval',
            description: 'We retrieve all required CR-1/IR-1 documents in one coordinated flow from our Cebu office.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille authentication',
            description: 'We arrange DFA Apostille for all documents that require it. Paper originals provided.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your US address',
            description: 'All documents shipped together with tracking. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your CR-1/IR-1 case status and your NVC submission or interview deadline.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles Marriage Certificate, Birth Certificate, NBI Clearance, and DFA Apostille.' },
          { title: 'DHL delivery to the USA', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What Philippine documents does NVC require for CR-1/IR-1?', a: 'Typically PSA Marriage Certificate, Birth Certificate, and NBI Clearance with DFA Apostille. Requirements may vary. We confirm for your specific case.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. All documents, DFA Apostille, and DHL shipping are included.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total. We coordinate all documents together to minimize total time.' },
          { q: 'Can you handle urgent cases?', a: 'Yes. Share your NVC deadline and we will confirm whether priority processing is feasible.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Complete checklist for CR-1, K-1, and all other visa types.' },
          { href: '/en/psa-marriage-certificate/', title: 'PSA Marriage Certificate Service', description: 'PSA Marriage Certificate + DFA Apostille + DHL worldwide.' },
          { href: '/en/cenomar-vs-marriage-certificate/', title: 'CENOMAR vs. Marriage Certificate', description: 'CR-1 needs the Marriage Certificate — not CENOMAR. Find out why.' },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: 'NBI Clearance + DFA Apostille + DHL worldwide. HIT cases handled.' },
        ]}
      />
    </PageLayout>
  );
}
