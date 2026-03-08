import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { FileCheck, Globe, AlertTriangle } from 'lucide-react';

export default function PsaCostEn() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PSA Birth Certificate Cost' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PSA Birth Certificate Retrieval — All-Inclusive Pricing',
        description: 'Full cost breakdown for PSA Birth Certificate retrieval: PSA fee + DFA Apostille + DHL shipping worldwide. All-inclusive pricing with no hidden fees. Free quote available.',
        url: 'https://ph-document.com/en/psa-birth-certificate-cost',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'KR'],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '349',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '349',
            priceCurrency: 'USD',
            description: 'PSA retrieval + DFA Apostille + DHL shipping worldwide (all-inclusive)',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case. PSA retrieval, DFA Apostille, and DHL shipping are all included in one quote.',
              },
            },
            {
              '@type': 'Question',
              name: 'Why is your price higher than some agencies?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Some agencies quote only the PSA retrieval fee and add Apostille, shipping, and handling separately. Our price includes everything — compare total costs, not base fees.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is Apostille always required?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'It depends on your submission authority. We confirm this before quoting so you do not pay for authentication you do not need.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can you handle urgent cases?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Share your deadline and we will confirm whether priority processing is feasible before you commit.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="PSA Birth Certificate: Know the Real Total Cost Before You Start"
        badges={['All-Inclusive Pricing', 'No Hidden Fees', 'Ships via DHL']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto text-center px-4">
        The official PSA certificate fee is ₱365 per copy. However, using it abroad requires DFA Apostille authentication and international shipping — here's the full cost breakdown.
      </p>

      <SummaryBlock
        conclusion="The real cost of a PSA Birth Certificate is more than the PHP 365 government fee. We quote everything upfront."
        points={[
          'Government fee is only the base; DFA Apostille, shipping, and handling add up',
          'Our all-inclusive price covers PSA retrieval + DFA Apostille + DHL shipping',
          'No surprise add-ons after you start the process',
          'Compare total costs, not just base fees, when choosing a service',
        ]}
        ctaText="Get Your Total Quote"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Comparing agencies by per-document price',
            description: 'Some agencies advertise a low per-document fee but add Apostille, shipping, and handling separately. We quote everything upfront in one price.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Want to know the total cost before committing',
            description: 'We provide all-inclusive pricing after a free consultation — PSA retrieval, DFA Apostille, and DHL shipping included.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Want to avoid paying twice for the wrong document',
            description: 'We confirm the required format for your submission authority before starting. No re-procurement risk.',
          },
        ]}
      />

      <CtaBox
        title="Get the real total — not just the base fee"
        description="We quote PSA retrieval, DFA Apostille, and DHL shipping together. No surprise add-ons after you start."
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
            title: 'PSA Birth Certificate retrieval',
            description: 'We apply to PSA and obtain the SECPA-printed original on your behalf.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille authentication',
            description: 'We arrange DFA Apostille when required by your submission authority.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your address worldwide',
            description: 'Tracked delivery directly to your door. No forwarding needed.',
          },
        ]}
      />

      <CtaBox
        title="Knowing the total upfront is the best cost control"
        description="Starting with a clear quote prevents re-procurement costs and wasted time. Consult us first."
        buttonText="Get a Quote"
        href="#contact"
        variant="secondary"
        trustNote="English only ﾂｷ Anonymous inquiries welcome ﾂｷ Reply within 24 hours"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your use case and submission authority.' },
          { title: 'We provide all-inclusive pricing', description: 'PSA, Apostille, and DHL shipping quoted together upfront.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles retrieval and authentication.' },
          { title: 'DHL delivery worldwide', description: 'Tracked shipment to your address. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. PSA retrieval, DFA Apostille, and DHL shipping are all included in one quote.' },
          { q: 'Why is your price higher than some agencies?', a: 'Some agencies quote only the PSA retrieval fee and add Apostille, shipping, and handling separately. Our price includes everything — compare total costs, not base fees.' },
          { q: 'Is Apostille always required?', a: 'It depends on your submission authority. We confirm this before quoting so you do not pay for authentication you do not need.' },
          { q: 'Can you handle urgent cases?', a: 'Yes. Share your deadline and we will confirm whether priority processing is feasible before you commit.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
