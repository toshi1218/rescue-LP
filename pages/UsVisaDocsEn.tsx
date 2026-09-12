import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import RelatedArticles from '../components/RelatedArticles';
import { FileCheck, Globe, Users, Heart } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_EN } from '../lib/seoDate';

export default function UsVisaDocsEn() {
  useMeta(
    `K-1 / CR-1 Visa Documents Service [${SEO_YEAR_MONTH_EN}]`,
    `US petitioner for a K-1 or CR-1/IR-1 visa? We retrieve the PSA records and NBI Clearance specified by the current U.S. checklist and ship paper records when required.`,
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'US Visa Documents Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'US Visa Philippine Documents Retrieval Service (K-1 / CR-1 / IR-1)',
        description: 'We retrieve Philippine civil records and NBI Clearance for K-1, CR-1, and IR-1 applications after confirming the current U.S. checklist.',
        url: 'https://ph-document.com/en/us-visa-documents/',
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
            description: 'K-1/CR-1 document package — agreed documents and delivery',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What documents are required for a K-1 visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The checklist differs by visa type and stage. PSA civil records and NBI Clearance may be requested; authentication is arranged only when the current official instructions require it.',
              },
            },
            {
              '@type': 'Question',
              name: 'What documents are required for a CR-1 visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The U.S. Embassy Manila checklist requires the applicable original PSA civil records and NBI Clearance. It does not list DFA Apostille as a universal requirement. We confirm the case and stage before processing.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case, covering the agreed documents and delivery. Authentication is added only if the specific authority requires it.',
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
          ],
        },
      ]}
    >
      <HeroBanner
        title="Philippine Documents for Your US Visa Petition"
        badges={['Current U.S. Checklist', 'No Unnecessary Authentication', 'All-Inclusive Pricing']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="August 30, 2026"
      />

      <SummaryBlock
        conclusion="K-1, CR-1, or IR-1 visa? We confirm the current U.S. checklist and retrieve only the Philippine documents your case requires."
        points={[
          'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
          'Authentication arranged only when the current U.S. checklist requires it',
          'We confirm exact requirements for your specific visa type',
          'All-inclusive pricing with DHL Express shipping to USA',
        ]}
        ctaText="Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Filing a K-1, CR-1, or IR-1 visa petition',
            description: 'USCIS, NVC, and embassy document requirements differ by stage. We verify the current official checklist and handle the agreed documents in one flow.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'US petitioner with no contacts in the Philippines',
            description: 'Our Cebu-based team handles everything locally. You just need to provide the applicant information.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what documents are required',
            description: 'Requirements vary by visa type and submission authority. We confirm what your specific case needs before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm USCIS/NVC requirements before we start"
        description="K-1, CR-1, IR-1 — each has different document requirements. We verify for your specific case and quote everything together."
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
            title: 'PSA document retrieval (Birth Cert, Marriage Cert, CENOMAR, NBI Clearance)',
            description: 'We retrieve all required PSA documents in one coordinated flow.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Authentication only when required',
            description: 'The current U.S. Embassy Manila checklist does not impose a universal DFA Apostille requirement. We add authentication only if your specific authority instructs you to do so.',
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
          { title: 'Submit your inquiry', description: 'Tell us your visa type (K-1, CR-1, IR-1) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents and provide all-inclusive pricing.' },
          { title: 'Processing in the Philippines', description: 'Our team retrieves the agreed PSA records and NBI Clearance in the format required for the application stage.' },
          { title: 'DHL delivery to the USA', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What documents are required for a K-1 visa?', a: 'The checklist differs between petition, NVC, and interview stages. PSA civil records and NBI Clearance may be requested. We confirm the current official instructions for your case before quoting.' },
          { q: 'What documents are required for a CR-1 visa?', a: 'The U.S. Embassy Manila checklist requires the applicable original PSA civil records and NBI Clearance. It does not list DFA Apostille as a universal requirement. We confirm the case and stage before processing.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case, covering the agreed documents and delivery. Authentication is added only if the specific authority requires it.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total. We coordinate all documents together to minimize total time.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/k1-visa-documents/', title: 'K-1 Fiancé Visa Documents', description: 'Specific document checklist for K-1 visa petitions filed with USCIS.' },
          { href: '/en/cr1-visa-documents/', title: 'CR-1 / IR-1 Visa Documents', description: 'Specific document checklist for CR-1 and IR-1 spousal immigrant visas.' },
          { href: '/en/cenomar/', title: 'CENOMAR Retrieval Service', description: 'Certificate of No Marriage required for K-1 fiancé visa and most US immigration cases involving a Filipino national.' },
          { href: '/en/apostille/', title: 'DFA Apostille Service', description: 'Authentication service for cases where the receiving authority specifically requires it.' },
        ]}
      />
    </PageLayout>
  );
}
