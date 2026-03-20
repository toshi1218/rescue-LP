import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { FileCheck, Globe, Users, Heart } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function UsVisaDocsEn() {
  useMeta(
    'K-1 / CR-1 Visa Documents Service [March 2026]',
    'US petitioner for a K-1 or CR-1/IR-1 visa? We retrieve all Philippine documents — PSA, CENOMAR, NBI + DFA Apostille — and ship to your door. Free consultation for American petitioners.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'US Visa Documents Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'US Visa Philippine Documents Retrieval Service (K-1 / CR-1 / IR-1)',
        description: 'We retrieve all Philippine documents for K-1, CR-1, and IR-1 visa applications — CENOMAR, PSA Birth Certificate, Marriage Certificate, NBI Clearance with DFA Apostille. Ships to USA via DHL.',
        url: 'https://ph-document.com/en/us-visa-documents',
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
            description: 'K-1/CR-1 Document Package — all documents + DFA Apostille + DHL to USA (all-inclusive)',
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
                text: 'Typically CENOMAR, Birth Certificate, and NBI Clearance with DFA Apostille. Requirements vary by USCIS case. We confirm for your specific petition.',
              },
            },
            {
              '@type': 'Question',
              name: 'What documents are required for a CR-1 visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Typically Marriage Certificate and Birth Certificate with DFA Apostille. Requirements vary by NVC case. We confirm for your specific petition.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping are included.',
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
        badges={['Ships via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="K-1, CR-1, or IR-1 visa? We retrieve all required Philippine documents with Apostille and ship to you."
        points={[
          'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
          'DFA Apostille included for USCIS, NVC, and US Embassy acceptance',
          'We confirm exact requirements for your specific visa type',
          'All-inclusive pricing with DHL Express shipping to USA',
        ]}
        ctaText="Start Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Filing a K-1, CR-1, or IR-1 visa petition',
            description: 'USCIS and NVC require Philippine civil documents with DFA Apostille. We handle all required documents in one flow.',
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
        trustNote="Free cancellation before start ﾂｷ Progress updates at every stage ﾂｷ Pay balance only after confirming document copies"
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
          { title: 'Submit your inquiry', description: 'Tell us your visa type (K-1, CR-1, IR-1) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles all PSA retrieval and DFA Apostille.' },
          { title: 'DHL delivery to the USA', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What documents are required for a K-1 visa?', a: 'Typically CENOMAR, Birth Certificate, and NBI Clearance with DFA Apostille. Requirements vary by USCIS case. We confirm for your specific petition.' },
          { q: 'What documents are required for a CR-1 visa?', a: 'Typically Marriage Certificate and Birth Certificate with DFA Apostille. Requirements vary by NVC case. We confirm for your specific petition.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping are included.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total. We coordinate all documents together to minimize total time.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
