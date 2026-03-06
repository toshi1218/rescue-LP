import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Heart, FileCheck, Globe, Users } from 'lucide-react';

export default function SpouseVisaEn() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Spouse Visa Documents Service' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Spouse Visa Documents Service',
        url: 'https://ph-document.com/en/spouse-visa-documents',
        provider: { '@type': 'Organization', name: 'IGRS Inc.' },
      }}
    >
      <HeroBanner
        title="Philippine Documents for Your Spouse Visa Petition"
        badges={['Ships via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'US petitioner filing a CR-1 or IR-1 visa',
            description: 'You are in the USA; your Filipino spouse needs Philippine documents with DFA Apostille. We handle everything from the Philippines.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Need multiple documents for NVC submission',
            description: 'Marriage Certificate, Birth Certificate, CENOMAR — we retrieve all required documents in one coordinated flow.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what format NVC requires',
            description: 'We confirm requirements for your specific NVC case before starting — no guesswork, no wasted money.',
          },
        ]}
      />

      <CtaBox
        title="We confirm NVC requirements before we start"
        description="Requirements vary by case. We verify what your specific petition needs and quote everything together."
        buttonText="Talk to Us"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA document retrieval',
            description: 'We retrieve all required PSA documents (Marriage Cert, Birth Cert, CENOMAR) in one flow.',
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
          { title: 'Submit your inquiry', description: 'Tell us your visa type (CR-1, IR-1) and your NVC submission deadline.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles all PSA retrieval and DFA Apostille.' },
          { title: 'DHL delivery to the USA', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
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
