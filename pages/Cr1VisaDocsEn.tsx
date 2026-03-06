import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Heart, FileCheck, Globe, Clock } from 'lucide-react';

export default function Cr1VisaDocsEn() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'CR-1/IR-1 Spouse Visa Documents Service' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CR-1/IR-1 Spouse Visa Philippine Documents Service',
        url: 'https://ph-document.com/en/cr1-visa-documents',
        provider: { '@type': 'Organization', name: 'IGRS Inc.' },
      }}
    >
      <HeroBanner
        title="CR-1/IR-1 Spouse Visa: Philippine Documents Retrieved and Shipped to the USA"
        badges={['Ships via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
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

      <CtaBox
        title="All-inclusive pricing — no surprise add-ons"
        description="All CR-1/IR-1 documents, DFA Apostille, and DHL shipping are quoted together in one price."
        buttonText="Get a Quote"
        href="#contact"
        variant="secondary"
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
    </PageLayout>
  );
}
