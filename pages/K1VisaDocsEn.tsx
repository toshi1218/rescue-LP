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
import { SEO_YEAR_MONTH_EN } from '../lib/seoDate';

export default function K1VisaDocsEn() {
  useMeta(
    `K-1 Visa Documents: CENOMAR, PSA & NBI [${SEO_YEAR_MONTH_EN}]`,
    `K-1 visa petitioner? We confirm the current petition and interview checklists, retrieve the specified PSA records and NBI Clearance, and ship paper records when required.`,
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'K-1 Fiancé Visa Documents Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'K-1 Fiancé Visa Philippine Documents Retrieval Service',
        description: 'We retrieve Philippine documents requested for a K-1 fiancé visa and match the format to the current petition or interview-stage checklist. Ships to your US address via DHL.',
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
            description: 'K-1 document package — agreed documents and delivery',
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
                text: 'Requirements differ between petition and interview stages. PSA civil records and NBI Clearance may be requested. DFA Apostille is not a universal U.S. requirement, so we confirm the current checklist for your case.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case, covering the agreed documents and delivery. Authentication is added only if specifically required.',
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
        badges={['Current U.S. Checklist', 'No Unnecessary Authentication', 'All-Inclusive Pricing']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="Filing a K-1 fiancé visa? We confirm the current stage-specific checklist and retrieve only the Philippine documents your case requires."
        points={[
          'Current USCIS, NVC, and embassy-stage requirements checked before processing',
          'We handle the entire document chain from retrieval to authentication',
          'Shipped via DHL Express to your US address',
          'All-inclusive pricing for the agreed scope and delivery',
        ]}
        ctaText="Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'US citizen filing a K-1 fiancé visa petition',
            description: 'Required documents differ by K-1 stage. PSA civil records and NBI Clearance may be requested; we verify the current official checklist before processing.',
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
            title: 'Authentication only when required',
            description: 'DFA Apostille is not a universal K-1 requirement. We add authentication only if the specific authority instructs you to do so.',
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
          { title: 'Processing in the Philippines', description: 'Our team retrieves the agreed PSA records and NBI Clearance in the format required for the application stage.' },
          { title: 'DHL delivery to the USA', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What Philippine documents does USCIS require for K-1?', a: 'Requirements differ between petition and interview stages. PSA civil records and NBI Clearance may be requested. We confirm the current official checklist for your case.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case, covering the agreed documents and delivery. Authentication is added only if specifically required.' },
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
