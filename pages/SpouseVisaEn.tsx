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

export default function SpouseVisaEn() {
  useMeta(
    'Spouse Visa Document Service [April 2026] | PSA & NBI',
    'Overwhelmed by Philippine document requirements for a spouse visa? We handle your PSA and CENOMAR online applications with DFA e-Apostille, plus NBI Clearance retrieval with physical Apostille, and ship what needs shipping to you. Free consultation for petitioners.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Spouse Visa Documents Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Spouse Visa Philippine Documents Retrieval Service',
        description: 'We retrieve all Philippine documents required for spouse visa applications worldwide — PSA Marriage Certificate, Birth Certificate, NBI Clearance with DFA Apostille. Ships via DHL.',
        url: 'https://ph-document.com/en/spouse-visa-documents/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'KR'],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '899',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '899',
            priceCurrency: 'USD',
            description: 'Immigration Document Package — all documents + DFA Apostille + DHL worldwide (all-inclusive)',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What documents does NVC require for a spouse visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Typically PSA Marriage Certificate and Birth Certificate with DFA Apostille. Requirements vary by case. We confirm for your specific petition.',
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
        title="Philippine Documents for Your Spouse Visa Petition"
        badges={['Ships via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="We retrieve all Philippine documents needed for your spouse visa and ship them Apostille-ready worldwide."
        points={[
          'PSA Marriage Certificate, Birth Certificate, NBI Clearance, and CENOMAR available',
          'DFA Apostille included so documents are accepted by immigration authorities worldwide',
          'We verify requirements for your specific visa type before starting',
          'All-inclusive pricing with DHL Express shipping worldwide',
        ]}
        ctaText="Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Petitioner filing a spouse or partner visa',
            description: 'You are abroad; your Filipino spouse needs Philippine documents with DFA Apostille. We handle everything from the Philippines.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Need multiple documents for your submission',
            description: 'Marriage Certificate, Birth Certificate, CENOMAR — we retrieve all required documents in one coordinated flow.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what format your authority requires',
            description: 'We confirm requirements for your specific case before starting — no guesswork, no wasted money.',
          },
        ]}
      />

      <CtaBox
        title="We confirm NVC requirements before we start"
        description="Requirements vary by case. We verify what your specific petition needs and quote everything together."
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
            title: 'PSA online application',
            description: 'We complete the online applications for all required PSA documents (Marriage Cert, Birth Cert, CENOMAR) and payment, on your behalf.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA e-Apostille application',
            description: 'We handle the DFA e-Apostille application for PSA documents that require it, and physical Apostille for non-PSA documents like NBI Clearance.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Format guidance for your authority',
            description: 'We confirm what your specific submission authority accepts before you order. Physical documents (e.g. NBI Clearance) ship worldwide via DHL.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your visa type (CR-1, IR-1, partner visa, spousal sponsorship, etc.) and your submission deadline.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents and provide all-inclusive pricing.' },
          { title: 'We handle the applications', description: 'We complete the PSA online applications and DFA e-Apostille applications; our Cebu team handles NBI Clearance retrieval and its physical DFA Apostille.' },
          { title: 'Delivery', description: 'PSA documents delivered electronically; physical documents (e.g. NBI Clearance) shipped with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What documents does NVC require for a spouse visa?', a: 'Typically PSA Marriage Certificate and Birth Certificate with DFA Apostille. Requirements vary by case. We confirm for your specific petition.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping are included.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total. We coordinate all documents together to minimize total time.' },
          { q: 'Can you handle urgent cases?', a: 'Yes. Share your NVC deadline and we will confirm whether priority processing is feasible.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
