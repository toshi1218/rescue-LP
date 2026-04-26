import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import SectionDivider from '../components/SectionDivider';
import { FileCheck, Globe, AlertTriangle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function PsaCostEn() {
  useMeta(
    'PSA Birth Certificate Cost Philippines 2026: PHP 365 + Apostille',
    'PSA Birth Certificate official fee: PHP 365 per copy (2026). All-in from US$349 incl. DFA Apostille + DHL Express worldwide. No hidden fees. Free quote.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PSA Birth Certificate Cost' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PSA Birth Certificate Retrieval — All-Inclusive Pricing',
        description: 'Full cost breakdown for PSA Birth Certificate retrieval: PSA fee + DFA Apostille + DHL shipping worldwide. All-inclusive pricing with no hidden fees. Free quote available.',
        url: 'https://ph-document.com/en/psa-birth-certificate-cost/',
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
              name: 'How much does a PSA Birth Certificate cost in 2026?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The official PSA fee is PHP 365 per copy. With DFA Apostille and international DHL shipping, the total cost starts at USD $349.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the PSA Birth Certificate price with Apostille?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Our all-inclusive price covering PSA retrieval (PHP 365 official fee), DFA Apostille authentication, and DHL worldwide shipping starts at USD $349. No hidden fees.',
              },
            },
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
        lastUpdated="March 1, 2026"
      />

      <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto text-center px-4">
        The official PSA certificate fee is ₱365 per copy. However, using it abroad requires DFA Apostille authentication and international shipping — here's the full cost breakdown.
      </p>

      <div className="max-w-2xl mx-auto px-4 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">PSA Birth Certificate Official Fee in 2026</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          The <strong>Philippine Statistics Authority (PSA)</strong> charges a fixed government fee of <strong>₱365 per copy</strong> as of 2026. This applies whether you walk in at a PSA Serbilis outlet or order online through PSA's official portal. The fee is set by the Philippine government and does not vary by destination country.
        </p>
        <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm text-sm mb-4">
          <div className="grid grid-cols-[2fr_1fr] bg-secondary text-white">
            <div className="px-4 py-3 font-bold">Cost Item</div>
            <div className="px-4 py-3 font-bold text-center">Fee (2026)</div>
          </div>
          {[
            { label: 'PSA government fee (per copy)', price: '₱365' },
            { label: 'DFA Apostille authentication (if required)', price: 'additional fee' },
            { label: 'International shipping (DHL Express)', price: 'varies by country' },
            { label: 'Agency handling fee (if applying from abroad)', price: 'varies by agency' },
          ].map((row, i) => (
            <div key={row.label} className={`grid grid-cols-[2fr_1fr] border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}`}>
              <div className="px-4 py-3 text-gray-700">{row.label}</div>
              <div className="px-4 py-3 text-center text-gray-600">{row.price}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          For Filipinos living abroad who need the certificate for immigration or visa purposes, the total cost is significantly higher than ₱365 alone — because DFA Apostille and international delivery are required on top of the PSA fee. See the all-inclusive breakdown below.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4">
        <SectionDivider variant="beige">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Total Cost If You Are Applying from Abroad</h2>
          <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm text-sm">
            <div className="grid grid-cols-[2fr_1fr] bg-secondary text-white">
              <div className="px-4 py-3 font-bold">Item</div>
              <div className="px-4 py-3 font-bold text-center">Cost</div>
            </div>
            {[
              { label: 'Official PSA fee (government)', price: '₱365 / copy' },
              { label: 'DFA Apostille authentication', price: 'included' },
              { label: 'DHL international shipping (tracked)', price: 'included' },
              { label: 'Our all-inclusive service price', price: 'USD $349', bold: true },
            ].map((row, i) => (
              <div key={row.label} className={`grid grid-cols-[2fr_1fr] border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}`}>
                <div className={`px-4 py-3 text-gray-700 ${row.bold ? 'font-bold' : ''}`}>{row.label}</div>
                <div className={`px-4 py-3 text-center ${row.bold ? 'font-bold text-primary' : 'text-gray-600'}`}>{row.price}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">Urgent cases may incur an additional fee. Apostille is included by default — if not needed for your case, we confirm before charging.</p>
        </SectionDivider>
      </div>

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
        trustNote="Free cancellation before start · Progress updates at every stage · Pay balance only after confirming document copies"
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
          { q: 'How much is a PSA birth certificate in the Philippines in 2026?', a: 'The official PSA government fee is ₱365 per copy as of 2026. This is the fixed rate set by the Philippine Statistics Authority and applies at all PSA Serbilis outlets and through the PSA online delivery service.' },
          { q: 'What is the total cost of a PSA birth certificate if I am applying from abroad?', a: 'For Filipinos living overseas, the total cost is significantly more than ₱365. You typically need DFA Apostille authentication plus international shipping. Our all-inclusive service starts at USD $349, covering PSA retrieval, DFA Apostille, and DHL tracked delivery to your address — no hidden fees.' },
          { q: 'Has the PSA birth certificate price changed in 2026?', a: 'The PSA government fee remains ₱365 per copy in 2026. If you have seen different figures quoted online, they likely include agency fees, Apostille costs, or shipping — not the base PSA fee alone.' },
          { q: 'Is the PSA fee the same for birth certificate, marriage certificate, and CENOMAR?', a: 'Yes. PSA charges ₱365 per copy regardless of document type (birth certificate, marriage certificate, death certificate, or CENOMAR) as of 2026.' },
          { q: 'How much does it cost with your service?', a: 'Our all-inclusive price starts at USD $349, covering PSA retrieval, DFA Apostille, and DHL shipping worldwide. Urgent cases may incur an additional fee.' },
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
