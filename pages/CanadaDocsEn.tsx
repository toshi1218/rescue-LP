import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { FileCheck, Globe, Users, Shield } from 'lucide-react';

export default function CanadaDocsEn() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Canada Immigration Documents' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Philippine Documents for Canada Immigration (IRCC)',
        description: 'We retrieve all Philippine documents for Canada immigration — CENOMAR, PSA Birth Certificate, NBI Clearance with DFA Apostille. Ships to Canada via DHL. IRCC-ready.',
        url: 'https://ph-document.com/en/canada/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: { '@type': 'Country', name: 'CA' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '899',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '899',
            priceCurrency: 'USD',
            description: 'Canada Immigration Document Package — all documents + DFA Apostille + DHL to Canada (all-inclusive)',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Does Canada require DFA Apostille on Philippine documents?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Canada is a Hague Convention member. IRCC requires DFA Apostille authentication on Philippine civil documents such as PSA Birth Certificates, CENOMAR, and NBI Clearance for immigration applications.',
              },
            },
            {
              '@type': 'Question',
              name: 'What documents are needed for Canada PR or spouse visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Typically NBI Clearance with DFA Apostille and PSA Birth Certificate for IRCC applications. For spousal sponsorship, CENOMAR or PSA Marriage Certificate may also be required. We confirm for your specific case.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to Canada are included.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take to ship to Canada?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Canada typically takes 3–5 business days after documents are ready.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Philippine Documents for Canada Immigration"
        badges={['IRCC-Ready', 'DFA Apostille Included', 'Ships to Canada via DHL']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="Applying for Canada PR, spousal sponsorship, or citizenship? We retrieve all required Philippine documents with DFA Apostille and ship directly to your Canadian address."
        points={[
          'Canada is a Hague Convention member — DFA Apostille is required on Philippine documents',
          'CENOMAR, PSA Birth Certificate, NBI Clearance, Marriage Certificate available',
          'Paper Apostille originals shipped via DHL Express to your Canadian address',
          'We confirm exact IRCC requirements for your specific application type',
        ]}
        ctaText="Start Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Shield className="w-4 h-4" />,
            title: 'Applying for Canada PR or spousal sponsorship',
            description: 'IRCC requires Philippine civil documents with DFA Apostille. We handle all required documents in one coordinated flow.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Filipino living in Canada with no contacts in the Philippines',
            description: 'Our Cebu-based team handles everything locally. You just need to provide the applicant information.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what documents IRCC requires',
            description: 'Requirements vary by application type. We confirm what your specific case needs before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm IRCC requirements before we start"
        description="PR application, spousal sponsorship, or citizenship — each has different document requirements. We verify for your specific case and quote everything together."
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
            description: 'We arrange DFA Apostille for all documents that require it. Paper originals provided — required by IRCC.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your Canadian address',
            description: 'All documents shipped together with tracking. No forwarding needed.',
          },
        ]}
      />

      <CtaBox
        title="All-inclusive pricing — no surprise add-ons"
        description="All documents, DFA Apostille, and DHL shipping to Canada are quoted together in one price."
        buttonText="Get a Quote"
        href="#contact"
        variant="secondary"
        trustNote="English only ﾂｷ Anonymous inquiries welcome ﾂｷ Reply within 24 hours"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your application type (PR, spousal sponsorship, etc.) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents for IRCC and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles all PSA retrieval and DFA Apostille.' },
          { title: 'DHL delivery to Canada', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Does Canada require DFA Apostille on Philippine documents?', a: 'Yes. Canada is a Hague Convention member. IRCC requires DFA Apostille authentication on Philippine civil documents such as PSA Birth Certificates, CENOMAR, and NBI Clearance for immigration applications.' },
          { q: 'What documents are needed for Canada PR or spouse visa?', a: 'Typically NBI Clearance with DFA Apostille and PSA Birth Certificate for IRCC applications. For spousal sponsorship, CENOMAR or PSA Marriage Certificate may also be required. We confirm for your specific case.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping to Canada are included.' },
          { q: 'How long does it take to ship to Canada?', a: 'Approximately 4–6 weeks total. DHL Express delivery from the Philippines to Canada typically takes 3–5 business days after documents are ready.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
