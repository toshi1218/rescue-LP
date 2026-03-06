import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Heart, FileCheck, Globe, Users } from 'lucide-react';

export default function PsaBirthCertEn() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PSA Birth Certificate Retrieval' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PSA Birth Certificate Retrieval Service (+ DFA Apostille)',
        description: 'We retrieve PSA Birth Certificate from the Philippines with DFA Apostille and ship to your US address via DHL. Required for K-1, CR-1, naturalization, and immigration applications.',
        url: 'https://ph-document.com/en/psa-birth-certificate',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: { '@type': 'Country', name: 'US' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '289',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '289',
            priceCurrency: 'USD',
            description: 'PSA retrieval + DFA Apostille + DHL shipping to USA (all-inclusive)',
          },
        },
      }}
    >
      <HeroBanner
        title="PSA Birth Certificate — Retrieved and Shipped to the USA"
        badges={['Ships via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Filing a K-1 or CR-1 visa petition',
            description: 'USCIS and NVC require a PSA Birth Certificate with DFA Apostille. We handle the full process from retrieval to delivery.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what format is required',
            description: 'We confirm whether Apostille is needed for your specific submission authority before we start — no guesswork.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'No contacts in the Philippines',
            description: 'Our Cebu-based team handles everything locally. You just need to provide the applicant information.',
          },
        ]}
      />

      <CtaBox
        title="We confirm requirements before we start"
        description="Apostille required or not? Paper or digital? We verify for your specific case so you do not pay for the wrong document."
        buttonText="Talk to Us"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA Birth Certificate retrieval',
            description: 'We apply to the Philippine Statistics Authority (PSA) and obtain the SECPA-printed original on your behalf.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille authentication',
            description: 'We arrange DFA Apostille at the Philippine Department of Foreign Affairs. Paper original included.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your US address',
            description: 'Tracked international delivery directly to your door. No forwarding needed.',
          },
        ]}
      />

      <CtaBox
        title="All-inclusive pricing — no surprise add-ons"
        description="PSA retrieval, DFA Apostille, and DHL shipping are all included in one quoted price. No hidden fees after you start."
        buttonText="Get a Quote"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your use case (K-1, CR-1, etc.) and your target submission date.' },
          { title: 'We confirm scope and quote', description: 'We verify whether Apostille is required and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles PSA retrieval and DFA Apostille authentication.' },
          { title: 'DHL delivery to the USA', description: 'Documents are shipped with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. PSA retrieval, DFA Apostille, and DHL shipping are all included.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total: PSA takes 2–3 weeks, DFA Apostille 1–2 weeks, and DHL shipping 3–5 business days.' },
          { q: 'Can you handle urgent cases?', a: 'Yes. Share your deadline and we will confirm whether priority processing is feasible before you commit.' },
          { q: 'Can I order CENOMAR and Birth Certificate together?', a: 'Yes. Bundling multiple documents is common for K-1 and CR-1 petitions. We handle them together at no extra coordination cost.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
