import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Heart, FileCheck, Globe, Users } from 'lucide-react';

export default function MarriageGuideEn() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'International Marriage Documents Service' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'International Marriage Documents Service',
        url: 'https://ph-document.com/en/international-marriage-guide',
        provider: { '@type': 'Organization', name: 'IGRS Inc.' },
      }}
    >
      <HeroBanner
        title="Philippine Marriage Documents for Your US Visa Petition"
        badges={['Ships via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Filing a CR-1 or IR-1 spouse visa petition',
            description: 'NVC requires PSA Marriage Certificate and Birth Certificate with DFA Apostille. We handle all documents in one flow.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Petitioner based in the USA',
            description: 'You fund the process; your Filipino spouse needs the documents. We coordinate everything from the Philippines and ship directly to you.',
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
            title: 'DHL shipping to your US address',
            description: 'All documents shipped together with tracking. No forwarding needed.',
          },
        ]}
      />

      <CtaBox
        title="All-inclusive pricing — no surprise add-ons"
        description="All documents, DFA Apostille, and DHL shipping are quoted together in one price."
        buttonText="Get a Quote"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your visa type (CR-1, IR-1) and your target NVC submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles all PSA retrieval and DFA Apostille.' },
          { title: 'DHL delivery to the USA', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
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
