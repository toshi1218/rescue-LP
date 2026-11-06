import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SectionDivider from '../components/SectionDivider';
import { FileCheck, Globe, AlertTriangle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR } from '../lib/seoDate';

const faqs = [
  {
    q: `How much does a PSA Birth Certificate cost in ${SEO_YEAR}?`,
    a: 'The PSA outlet base fee is ₱155 per copy; local fees may apply. PSAHelpline lists ₱290 for a birth eCert and ₱365 for a printed certificate with domestic delivery. For international orders, ₱365 is the processing fee only: you book and pay the international courier separately. These are alternative routes, not fees to add together.',
  },
  {
    q: 'Does ₱365 include international delivery?',
    a: 'No. PSAHelpline international orders charge ₱365 per copy for processing. You arrange and pay the international courier separately. Authentication, if required by your receiving authority, is a separate step.',
  },
  {
    q: 'Can I use the ₱290 eCert instead of a paper certificate?',
    a: 'Check with the authority receiving your document before ordering. An electronic certificate and a physical PSA original are different formats; the required format and any authentication depend on your submission requirements.',
  },
  {
    q: 'How much is the IGRS service?',
    a: 'Our existing US$199 package covers a physical PSA birth certificate and DHL shipping, without Apostille. The US$349 package includes retrieval, the applicable DFA authentication route, and DHL when a physical document is needed. We confirm eligibility, the required format, delivery scope, and any work outside the package before payment.',
  },
  {
    q: 'Is Apostille always required?',
    a: 'No. The receiving authority decides whether authentication is required and which document format it accepts. Share its checklist or instructions so we can check the appropriate route before quoting. Acceptance remains the receiving authority’s decision.',
  },
  {
    q: 'What should I include in an email inquiry?',
    a: 'Tell us your delivery country, receiving authority or purpose, required format if known, and deadline. If a requirement is unclear, describe your situation. We will review the scope and provide a quote before you decide whether to proceed.',
  },
];

export default function PsaCostEn() {
  useMeta(
    `PSA Birth Certificate Cost [${SEO_YEAR}]: ₱155, ₱290 or ₱365?`,
    'PSA birth certificate: ₱155 outlet base, ₱290 eCert, ₱365 domestic delivery. International courier costs extra. Compare IGRS US$199/US$349 services.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PSA Birth Certificate Cost' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PSA Birth Certificate Retrieval and DHL Delivery',
        description: 'Physical PSA birth certificate retrieval and DHL shipping without Apostille. The required format, eligibility, and delivery scope are confirmed before payment.',
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
          price: '199',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '199',
            priceCurrency: 'USD',
            description: 'Physical PSA birth certificate retrieval and DHL shipping, without Apostille; eligibility and delivery scope confirmed before payment',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        },
      ]}
    >
      <HeroBanner
        title="PSA Birth Certificate Cost: Which Fee Applies to You?"
        badges={['Official Fees Explained', 'Direct Order or Managed Service', 'Free Email Quote']}
        ctaText="Get My Email Quote"
        ctaHref="#contact"
        ctaService="Other"
        lastUpdated="November 7, 2026"
      />

      <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto text-center px-4">
        A PSA Birth Certificate starts at <strong>₱155 at a PSA outlet</strong>. PSAHelpline offers a <strong>₱290 birth eCert</strong> or <strong>₱365 printed certificate with domestic delivery</strong>. For an international order, <strong>₱365 covers processing only</strong>; you arrange and pay the courier separately.
      </p>

      <div className="max-w-2xl mx-auto px-4">
        <SectionDivider variant="beige">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Compare your ordering options</h2>
          <p className="text-sm text-gray-600 mb-4">Choose one route. These prices cover different services and are not fees to add together. IGRS is an independent service; using an agent is optional.</p>
          <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm text-sm">
            <table className="w-full text-left">
              <caption className="sr-only">Alternative PSA birth certificate ordering routes and what each price covers</caption>
              <thead className="bg-secondary text-white">
                <tr>
                  <th scope="col" className="w-1/3 px-3 py-3 font-bold">Route</th>
                  <th scope="col" className="px-3 py-3 font-bold">Price per copy and scope</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {[
                  { route: 'PSA outlet', price: '₱155 base fee', scope: 'Certificate issuance. Local fees may apply; you arrange the application and collection.' },
                  { route: 'PSAHelpline birth eCert', price: '₱290', scope: 'Electronic certificate. Check that your receiving authority accepts this format.' },
                  { route: 'PSAHelpline domestic order', price: '₱365', scope: 'Printed certificate with delivery within the Philippines.' },
                  { route: 'PSAHelpline international order', price: '₱365 + your courier cost', scope: 'Processing only. You book and pay the international courier separately; authentication is not included.' },
                  { route: 'IGRS physical-document service', price: 'US$199', scope: 'Physical PSA birth certificate retrieval and DHL shipping, without Apostille.' },
                  { route: 'IGRS service with authentication', price: 'US$349', scope: 'Retrieval, the applicable DFA authentication route, and DHL when a physical document is needed.' },
                ].map((row, index) => (
                  <tr key={row.route} className={index % 2 ? 'bg-gray-50/60' : 'bg-white'}>
                    <th scope="row" className="px-3 py-3 align-top font-semibold">{row.route}</th>
                    <td className="px-3 py-3 align-top">
                      <strong className="block mb-1 text-secondary">{row.price}</strong>
                      <span>{row.scope}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Direct-order sources: <a href="https://psa.gov.ph/system/files/citizens-charter/6-PSA-2025-Citizens-Charter-National-Capital-Region-External-Services.pdf" className="text-primary underline" target="_blank" rel="noopener noreferrer">PSA outlet base fee</a> · <a href="https://psahelpline.ph/faq/PSA-ECert" className="text-primary underline" target="_blank" rel="noopener noreferrer">birth eCert</a> · <a href="https://order-now.psahelpline.ph/order/choose-type?type=birth" className="text-primary underline" target="_blank" rel="noopener noreferrer">domestic order</a> · <a href="https://psahelpline.ph/faq/International-Order" className="text-primary underline" target="_blank" rel="noopener noreferrer">international processing and courier</a>.</p>
          <p className="text-xs text-gray-500 mt-2">IGRS prices match our <a href="/en/pricing/" className="text-primary underline">published service packages</a>. We confirm the required format, authentication, eligibility, delivery scope, and any exceptional work before payment. For application requirements, see our <a href="/en/psa-birth-certificate/" className="text-primary underline">PSA birth certificate guide</a>.</p>
        </SectionDivider>
      </div>

      <CtaBox
        title="Need help arranging your birth certificate from abroad?"
        description="Tell us your delivery country, receiving authority or purpose, required format if known, and deadline. We will check the appropriate service and quote the scope before you decide."
        buttonText="Get My Quote by Email"
        href="#contact"
        service="Other"
        variant="primary"
        trustNote="Free consultation · No payment needed to request a quote"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Need help coordinating from overseas',
            description: 'Choose direct ordering if you can arrange your own application and delivery. Our managed service coordinates Philippine retrieval and the agreed delivery route.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Want to know the total cost before committing',
            description: 'We confirm whether the US$199 physical-document service or US$349 service with applicable authentication fits your requirements before you pay.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Not sure which format you need',
            description: 'Share your receiving authority’s checklist. We review the format and authentication requirements; the authority makes the final acceptance decision.',
          },
        ]}
      />

      <FeatureList
        heading="What our managed service covers"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA Birth Certificate retrieval',
            description: 'The US$199 package includes a physical PSA original. We confirm the required format and applicant eligibility before starting.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille authentication',
            description: 'The US$349 package includes the applicable DFA authentication route when your receiving authority requires it.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your address worldwide',
            description: 'The physical-document service includes DHL shipping. We confirm the delivery destination and scope in your quote.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Send your email inquiry', description: 'Tell us your delivery country, receiving authority or purpose, format if known, and deadline.' },
          { title: 'Review the scope and quote', description: 'We confirm document format, eligibility, any required authentication, delivery, and the price before you proceed.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles the agreed retrieval and any required authentication.' },
          { title: 'Physical-document delivery', description: 'DHL shipping for the agreed physical-document route. Estimated total: 4–6 weeks; timing varies by case.' },
        ]}
      />

      <FaqSection items={faqs} />

      <CtaBox
        title="Ready to check your document requirements?"
        description="Send your situation by email, even if the required format is still unclear. We will review the scope and provide a quote before you commit."
        buttonText="Email My Requirements"
        href="#contact"
        service="Other"
        variant="primary"
        trustNote="Free cancellation before start · Pay balance after confirming document copies"
      />
    </PageLayout>
  );
}
