import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { AlertTriangle, FileCheck, Globe, Clock } from 'lucide-react';

export default function NbiHitEn() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'NBI HIT Resolution Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'NBI MATCH FOUND (HIT) Resolution + NBI Clearance Retrieval Service',
        description: 'NBI MATCH FOUND does not always mean a criminal record. We handle HIT resolution, NBI Clearance retrieval, and DFA Apostille. Ships to your US address via DHL. Visa deadlines met.',
        url: 'https://ph-document.com/en/nbi-hit',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: { '@type': 'Country', name: 'US' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '329',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '329',
            priceCurrency: 'USD',
            description: 'NBI retrieval + HIT resolution support + DFA Apostille + DHL to USA (all-inclusive)',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Does a HIT mean my visa will be denied?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Not necessarily. A HIT means a record exists in the NBI database, which could be a name match with another person. The content of the HIT determines the impact. We help you find out.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does HIT resolution take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'It depends on the nature of the HIT. Verification alone can take several weeks. Starting early is strongly recommended.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Pricing depends on the resolution approach required. We provide a quote after reviewing your specific situation in a free consultation.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can you handle urgent cases?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We will do our best. Share your deadline and we will confirm what is feasible given your timeline.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="NBI HIT Result? We Help You Resolve It"
        badges={['English Support', 'Case-by-Case Handling', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="NBI HIT does not mean your visa is denied. We resolve HIT cases and get your NBI Clearance on time."
        points={[
          'HIT (MATCH FOUND) is common and usually caused by name similarities',
          'We handle the HIT verification and resolution process at NBI offices',
          'NBI Clearance + DFA Apostille shipped to your US address after resolution',
          'Many petitioners have met their visa deadlines with our help',
        ]}
        ctaText="Get Help Now"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Your NBI result shows a HIT',
            description: 'A HIT means a record exists in the NBI database. It does not always mean a criminal record — it may be a name match with someone else. We help you find out and resolve it.',
          },
          {
            icon: <Clock className="w-4 h-4" />,
            title: 'You have a K-1 or CR-1 interview coming up',
            description: 'HIT resolution can take time. The earlier you start, the more options you have. Contact us now.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'You have no idea why a HIT appeared',
            description: 'Name matches with other individuals are common. We help you confirm the source and guide next steps.',
          },
        ]}
      />

      <CtaBox
        title="First, let us understand your situation"
        description="The right approach depends on what the HIT is. Share your case and we will advise on the fastest resolution path."
        buttonText="Talk to Us"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="What We Can Help With"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'HIT verification support',
            description: 'We support the NBI inquiry and verification process to identify the source of the HIT.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBI Clearance retrieval after resolution',
            description: 'Once the HIT is resolved, we handle NBI Clearance retrieval and DFA Apostille in one flow.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your US address',
            description: 'Tracked international delivery directly to your door after the clearance is issued.',
          },
        ]}
      />

      <CtaBox
        title="The longer you wait, the fewer options you have"
        description="HIT resolution takes time. Starting early gives you the best chance of meeting your visa timeline."
        buttonText="Check My Options"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Share your situation', description: 'Tell us what the HIT shows, your submission authority, and your deadline.' },
          { title: 'We advise on resolution path', description: 'We confirm the approach and provide pricing based on your specific case.' },
          { title: 'Local handling in the Philippines', description: 'Our Cebu team manages the NBI verification and clearance process.' },
          { title: 'DHL delivery to the USA', description: 'Once cleared, documents are shipped with tracking to your address.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Does a HIT mean my visa will be denied?', a: 'Not necessarily. A HIT means a record exists in the NBI database, which could be a name match with another person. The content of the HIT determines the impact. We help you find out.' },
          { q: 'How long does HIT resolution take?', a: 'It depends on the nature of the HIT. Verification alone can take several weeks. Starting early is strongly recommended.' },
          { q: 'How much does it cost?', a: 'Pricing depends on the resolution approach required. We provide a quote after reviewing your specific situation in a free consultation.' },
          { q: 'Can you handle urgent cases?', a: 'We will do our best. Share your deadline and we will confirm what is feasible given your timeline.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
