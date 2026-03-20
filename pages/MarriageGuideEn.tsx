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

export default function MarriageGuideEn() {
  useMeta(
    'Marrying a Filipino? Documents We Get for You [March 2026]',
    'Planning to marry a Filipino/Filipina? We handle all Philippine documents — CENOMAR, PSA Birth Certificate, NBI Clearance + DFA Apostille. Shipped to your door. Free consultation for US and JP petitioners.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'International Marriage Documents Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Philippine Marriage Documents Retrieval Service (CENOMAR + PSA + Apostille)',
        description: 'We retrieve all Philippine documents needed to marry a Filipino/Filipina — CENOMAR, PSA Birth Certificate, NBI Clearance with DFA Apostille. Ships worldwide via DHL.',
        url: 'https://ph-document.com/en/international-marriage-guide',
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
              name: 'What documents are needed for a CR-1 visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Typically PSA Marriage Certificate and Birth Certificate with DFA Apostille. Requirements vary by NVC case. We confirm for your specific case.',
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
        title="Philippine Marriage Documents for Your Visa Application Worldwide"
        badges={['Ships Worldwide via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="Marrying a Filipino? We get all the Philippine documents you need and ship them to your door worldwide."
        points={[
          'CENOMAR, PSA Birth Certificate, and NBI Clearance retrieved in one order',
          'DFA Apostille included for all documents',
          'Works for K-1 visa, CR-1, partner visa, spousal sponsorship & more',
          'All-inclusive pricing with DHL Express shipping worldwide',
        ]}
        ctaText="Start Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Filing a spouse visa or partner visa petition',
            description: 'Immigration authorities worldwide (NVC, IRCC, Home Affairs, UKVI) require PSA Marriage Certificate and Birth Certificate with DFA Apostille. We handle all documents in one flow.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Petitioner based outside the Philippines',
            description: 'You fund the process; your Filipino partner needs the documents. We coordinate everything from the Philippines and ship directly to you.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what documents are required',
            description: 'Requirements vary by submission authority. We confirm what your specific case needs before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm requirements before we start"
        description="Marriage certificate, birth certificate, CENOMAR — we verify what your specific case needs and quote everything together."
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
            title: 'PSA document retrieval (Marriage Cert, Birth Cert, CENOMAR)',
            description: 'We retrieve all required PSA documents in one coordinated flow.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille authentication',
            description: 'We arrange DFA Apostille for all documents that require it. Paper originals provided.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping worldwide',
            description: 'All documents shipped together with tracking to your address. No forwarding needed.',
          },
        ]}
      />

      <CtaBox
        title="All-inclusive pricing — no surprise add-ons"
        description="All documents, DFA Apostille, and DHL shipping are quoted together in one price."
        buttonText="Get a Quote"
        href="#contact"
        variant="secondary"
        trustNote="English only ﾂｷ Anonymous inquiries welcome ﾂｷ Reply within 24 hours"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your visa type (K-1, CR-1, partner visa, spousal sponsorship, etc.) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles all PSA retrieval and DFA Apostille.' },
          { title: 'DHL delivery worldwide', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What documents are needed for a CR-1 visa?', a: 'Typically PSA Marriage Certificate and Birth Certificate with DFA Apostille. Requirements vary by NVC case. We confirm for your specific case.' },
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
