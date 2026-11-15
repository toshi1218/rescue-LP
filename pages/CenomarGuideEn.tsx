import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { Heart, FileCheck, Globe } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR } from '../lib/seoDate';
import RelatedArticles from '../components/RelatedArticles';

const faqs = [
  {
    q: 'Can I order a CENOMAR while outside the Philippines?',
    a: 'Yes. We arrange PSA document retrieval, any required DFA authentication, and delivery from the Philippines. First, tell us the destination country, receiving authority, and deadline so we can confirm the format and quote.',
  },
  {
    q: 'How much does the CENOMAR service cost?',
    a: 'The published single-document price is US$199 for a physical PSA original with DHL delivery, without Apostille. The option with required DFA authentication is US$349 in total. We confirm the document format, included work, and any urgent or complex-case costs before you pay.',
  },
  {
    q: 'What does CENOMAR mean?',
    a: 'CENOMAR means Certificate of No Marriage Record. It reports that PSA found no marriage record for the person searched. If PSA has a marriage record, it issues an Advisory on Marriages instead.',
  },
  {
    q: 'What if I am or was previously married?',
    a: 'Tell us which document the receiving authority requested. Where PSA has a marriage record, the search results in an Advisory on Marriages rather than a CENOMAR. An annotated marriage record or other supporting documents may be needed depending on the case and current checklist.',
  },
  {
    q: 'Does the service include a paper Apostille?',
    a: 'For the PSA e-Certificate route to Apostille Convention countries, DFA issues an electronic e-Apostille. A separately ordered physical PSA original is a different document, not a paper Apostille. Other destinations may require a different authentication route; we confirm the receiving authority’s requirements before processing.',
  },
  {
    q: 'How long does it take?',
    a: 'The published delivery estimate is approximately 4–6 weeks. The actual schedule depends on the PSA record, required authentication, and delivery destination. Share your deadline so we can check feasibility before you commit.',
  },
  {
    q: 'What should I send for an initial quote?',
    a: 'Send the destination country, receiving authority or application purpose, the document and format requested if known, and your deadline. You do not need to upload an ID to ask for an initial quote. We explain any document requirements before ordering.',
  },
];

const steps = [
  { title: 'Request a free quote by email', description: 'Share the destination country, receiving authority, requested document or format, and deadline. If you are unsure about the document name, send the checklist wording.' },
  { title: 'Confirm the scope and total', description: 'We confirm the PSA record, authentication route if required, delivery method, and price before you decide to proceed.' },
  { title: 'We arrange the agreed documents', description: 'After you provide the necessary application information, we arrange PSA retrieval and the agreed authentication. The PSA result determines whether a CENOMAR or Advisory on Marriages is issued.' },
  { title: 'Receive the agreed digital or paper format', description: 'An e-Certificate and e-Apostille are delivered digitally. A separately requested physical PSA original is sent by tracked DHL delivery.' },
];

export default function CenomarGuideEn() {
  useMeta(
    `Get CENOMAR from Abroad [${SEO_YEAR}] | Fees & Delivery`,
    'Get CENOMAR from abroad. Physical PSA original + DHL: US$199; with required DFA authentication: US$349. Confirm your document format with a free email quote.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'CENOMAR Service' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'DefinedTerm',
          name: 'CENOMAR',
          alternateName: 'Certificate of No Marriage Record',
          description: 'A PSA certification that no marriage record was found for the person searched. Where a marriage record is found, PSA issues an Advisory on Marriages instead.',
          inDefinedTermSet: 'https://ph-document.com/#glossary',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How to Arrange a Physical CENOMAR Original with DHL from Abroad',
          description: 'The standard US$199 package covers PSA retrieval and DHL delivery of a physical original, without Apostille. The option with required DFA authentication is US$349 total, confirmed in the quote.',
          totalTime: 'P42D',
          estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '199' },
          step: steps.map(step => ({ '@type': 'HowToStep', name: step.title, text: step.description })),
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'CENOMAR Retrieval from Abroad',
          description: 'PSA document retrieval with the required authentication and delivery format confirmed before ordering. Electronic authentication and any separately ordered physical PSA original are distinct documents.',
          url: 'https://ph-document.com/en/cenomar/',
          provider: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
          areaServed: ['US', 'CA', 'AU', 'GB', 'AE', 'KR'],
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: '199',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '199',
              priceCurrency: 'USD',
              description: 'Physical PSA original and DHL delivery, without Apostille.',
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
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['#faqsection-heading', "[id^='faqsec-panel-']"],
          },
        },
      ]}
    >
      <HeroBanner
        title="Get CENOMAR from Abroad"
        subtitle="We arrange your PSA document, the required authentication, and delivery in the format your receiving authority requests. Consult us in English before ordering."
        badges={['Physical original + DHL: US$199', 'Authentication option: US$349', 'Free email quote']}
        ctaText="Get My Email Quote"
        ctaHref="#contact"
        ctaService="Other"
        lastUpdated="November 7, 2026"
      />

      <div className="max-w-2xl mx-auto px-4 mb-6 space-y-3 text-sm text-gray-600 leading-relaxed">
        <p><strong>CENOMAR means Certificate of No Marriage Record.</strong> It reports that PSA found no marriage record for the person searched. If PSA has a marriage record, it issues an <strong>Advisory on Marriages</strong> instead. The required record depends on your receiving authority’s checklist.</p>
        <p>Looking for the definition rather than a retrieval service? Read our <a href="/en/cenomar-meaning/" className="text-primary underline">CENOMAR meaning guide</a>.</p>
      </div>

      <SummaryBlock
        conclusion="Arrange CENOMAR from overseas with the required format and total cost confirmed first."
        points={[
          'Physical PSA original with DHL: US$199, without Apostille',
          'With required DFA authentication: US$349 total; the route depends on your destination',
          'Electronic authentication and a physical PSA original are separate documents',
          'Start with your destination, requested document, and deadline',
        ]}
      />

      <section aria-labelledby="cenomar-fees" className="mb-8">
        <h2 id="cenomar-fees" className="text-xl font-bold text-secondary mb-4">CENOMAR service fees</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="text-sm font-bold text-secondary">Physical PSA original + DHL</h3>
            <p className="my-2 text-2xl font-bold text-primary">US$199</p>
            <p className="text-sm text-gray-600">PSA retrieval and DHL delivery of the physical original. Apostille is not included.</p>
          </div>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
            <h3 className="text-sm font-bold text-secondary">With required DFA authentication</h3>
            <p className="my-2 text-2xl font-bold text-primary">US$349 total</p>
            <p className="text-sm text-gray-600">PSA retrieval, the applicable DFA authentication, and DHL delivery of the physical PSA original. We confirm the route before ordering.</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600">Where the PSA e-Certificate/e-Apostille route applies, the authenticated documents are digital. Any SECPA paper original is separate; it is not a paper Apostille. Other destinations may need a different authentication route.</p>
        <p className="mt-2 text-xs text-gray-500">These are the published single-document service prices. Urgent, complex, or mismatched records may need a separate quote. See <a href="/en/pricing/" className="text-primary underline">pricing and payment terms</a>.</p>
      </section>

      <CtaBox
        title="Tell us where and when you need the document"
        description="For an initial quote, share the destination country, receiving authority, requested document or format if known, and deadline. No ID upload is needed to ask."
        buttonText="Get My Email Quote"
        href="#contact"
        service="Other"
        trustNote="Free quote · Free cancellation before work starts"
        whatsappHref="https://wa.me/639452833727"
      />

      <FeatureList
        heading="What we arrange"
        items={[
          { icon: <FileCheck className="w-4 h-4" />, title: 'PSA record retrieval', description: 'We arrange the PSA document requested by your authority. The search result determines whether PSA issues a CENOMAR or Advisory on Marriages.' },
          { icon: <Heart className="w-4 h-4" />, title: 'The authentication your case requires', description: 'Share the current marriage, visa, or other application checklist. We confirm whether authentication is requested and which route applies.' },
          { icon: <Globe className="w-4 h-4" />, title: 'Digital documents and separate paper delivery', description: 'The e-Certificate/e-Apostille route is delivered digitally. If a physical PSA original is also needed, we arrange it separately with tracked DHL delivery.' },
        ]}
      />

      <StepList heading="How to order from abroad" steps={steps} />

      <FaqSection items={faqs} />

      <CtaBox
        title="Not sure whether you need CENOMAR or an Advisory?"
        description="Tell us what the receiving authority asked for and your deadline. We will confirm the document, format, and service scope before quoting."
        buttonText="Ask by Email"
        href="#contact"
        service="Other"
      />

      <RelatedArticles
        items={[
          { href: '/en/cenomar-meaning/', title: 'What CENOMAR means', description: 'Understand the PSA record and how an Advisory on Marriages differs.' },
          { href: '/en/cenomar-validity/', title: 'CENOMAR validity and timing', description: 'Check the issue-date requirement set by your receiving authority.' },
          { href: '/en/cenomar-requirements-by-country/', title: 'Requirements by destination', description: 'Review the requested record and format for your application.' },
          { href: '/en/cenomar-cost-comparison/', title: 'Compare CENOMAR request costs', description: 'Compare official request routes and a retrieval service by their included scope.' },
          { href: '/en/cenomar-vs-marriage-certificate/', title: 'CENOMAR vs. PSA Marriage Certificate', description: 'Check which civil-status document the current checklist requests.' },
        ]}
      />

      <p className="mt-6 text-xs text-gray-500">Official references: <a href="https://psa.gov.ph/sites/default/files/citizen-charter/Philippine-Statistics-Authority-Citizens-Charter-2025-1st-Edition.pdf" target="_blank" rel="noopener noreferrer" className="underline">PSA Citizen’s Charter</a> (CENOMAR / Advisory on Marriages) and <a href="https://www.apostille.gov.ph/documentary-requirements/" target="_blank" rel="noopener noreferrer" className="underline">DFA documentary requirements</a> (authentication format).</p>
    </PageLayout>
  );
}
