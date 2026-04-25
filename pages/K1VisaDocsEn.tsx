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

export default function K1VisaDocsEn() {
  useMeta(
    'K-1 Visa Documents: CENOMAR, PSA & NBI [March 2026]',
    'American petitioner for a K-1 visa? We retrieve CENOMAR, PSA Birth Certificate, and NBI Clearance with DFA Apostille for your Filipino fiancé(e). Ships to your US address. Free consultation.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'K-1 Fiancé Visa Documents Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'K-1 Fiancé Visa Philippine Documents Retrieval Service',
        description: 'We retrieve all Philippine documents required for a K-1 fiancé visa — CENOMAR, PSA Birth Certificate, NBI Clearance with DFA Apostille. USCIS-ready. Ships to your US address via DHL.',
        url: 'https://ph-document.com/en/k1-visa-documents/',
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
            description: 'K-1 Document Package — all documents + DFA Apostille + DHL to USA (all-inclusive)',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What Philippine documents does USCIS require for K-1?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Typically CENOMAR, Birth Certificate, and NBI Clearance with DFA Apostille. Requirements may vary. We confirm for your specific case.',
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
                text: 'Yes. Share your USCIS or interview deadline and we will confirm whether priority processing is feasible.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="K-1 Fiancé Visa: Philippine Documents Retrieved and Shipped to the USA"
        badges={['Ships via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
        lastUpdated="March 1, 2026"
      />

      <SummaryBlock
        conclusion="Filing a K-1 fiance visa? We get CENOMAR, PSA Birth Certificate, and NBI Clearance with Apostille."
        points={[
          'USCIS requires CENOMAR, PSA Birth Certificate, and NBI Clearance with DFA Apostille',
          'We handle the entire document chain from retrieval to authentication',
          'Shipped via DHL Express to your US address',
          'All-inclusive pricing: no hidden fees for Apostille or shipping',
        ]}
        ctaText="Start Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'US citizen filing a K-1 fiancé visa petition',
            description: 'USCIS requires CENOMAR, Birth Certificate, and NBI Clearance with DFA Apostille from your Filipino fiancé. We handle all of it.',
          },
          {
            icon: <Clock className="w-4 h-4" />,
            title: 'Have a USCIS or embassy interview date',
            description: 'We work backward from your target date to ensure all documents arrive valid and on time.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure exactly what USCIS requires',
            description: 'We confirm the required documents and format for your specific K-1 case before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm K-1 requirements before we start"
        description="CENOMAR, Birth Certificate, NBI Clearance — we verify what your specific USCIS case needs and quote everything together."
        buttonText="Talk to Us"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage · Pay balance only after confirming document copies"
        whatsappHref="https://wa.me/639452833727"
      />

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA CENOMAR, Birth Certificate, NBI Clearance retrieval',
            description: 'We retrieve all required K-1 documents in one coordinated flow from our Cebu office.',
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
          { title: 'Submit your inquiry', description: 'Tell us your K-1 case status and your target USCIS or embassy interview date.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles CENOMAR, Birth Certificate, NBI Clearance, and DFA Apostille.' },
          { title: 'DHL delivery to the USA', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What Philippine documents does USCIS require for K-1?', a: 'Typically CENOMAR, Birth Certificate, and NBI Clearance with DFA Apostille. Requirements may vary. We confirm for your specific case.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. All documents, DFA Apostille, and DHL shipping are included.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total. We coordinate all documents together to minimize total time.' },
          { q: 'Can you handle urgent cases?', a: 'Yes. Share your USCIS or interview deadline and we will confirm whether priority processing is feasible.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Complete checklist for K-1, CR-1, and all other visa types.' },
          { href: '/en/cenomar-vs-marriage-certificate/', title: 'CENOMAR vs. Marriage Certificate', description: 'Confused about which one you need? Read this.' },
          { href: '/en/cenomar/', title: 'CENOMAR Retrieval Service', description: 'PSA CENOMAR + DFA Apostille + DHL worldwide.' },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: 'NBI Clearance + DFA Apostille + DHL worldwide.' },
        ]}
      />
    </PageLayout>
  );
}
