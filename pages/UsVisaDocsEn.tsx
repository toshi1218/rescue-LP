import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { FileCheck, Globe, Users, Heart } from 'lucide-react';

export default function UsVisaDocsEn() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'US Visa Documents Service' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'US Visa Philippine Documents Service',
        url: 'https://ph-document.com/en/us-visa-documents',
        provider: { '@type': 'Organization', name: 'IGRS Inc.' },
      }}
    >
      <HeroBanner
        title="Philippine Documents for Your US Visa Petition"
        badges={['Ships via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
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
