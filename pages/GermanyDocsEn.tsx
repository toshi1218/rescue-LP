import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import RelatedArticles from '../components/RelatedArticles';
import { FileCheck, Shield } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_EN } from '../lib/seoDate';

const faqs = [
  {
    q: 'Is a Philippine Apostille enough for Germany?',
    a: 'No. The Apostille Convention is not in force between Germany and the Philippines. If the receiving authority requires legalization, obtain a paper DFA Authentication Certificate before German Embassy legalization. Electronic documents and e-Apostilles cannot be legalized by the Embassy. Ask the receiving authority whether it requires legalization.',
  },
  {
    q: 'Can you obtain a CENOMAR for a German notary, rather than a marriage application?',
    a: 'Yes. We support CENOMAR and Birth Certificate requests for proof of single status and other notarial or administrative uses, as well as marriage and visa applications. Tell us the purpose, receiving authority and deadline so we can confirm the required documents.',
  },
  {
    q: 'Do I need to travel to the Philippines?',
    a: 'For eligible representative applications, we can arrange local processing with a written, signed authorization and the document owner’s ID copy. We confirm any personal-appearance or additional identification requirements before starting.',
  },
  {
    q: 'What if my PSA certificate is unclear or names do not match?',
    a: 'Additional LCR evidence may be required, such as Form 1A for an unclear birth record. CENOMAR legalization also requires Birth Certificate/LCR supporting evidence. We check the entries and confirm how additional records can be obtained before proceeding.',
  },
  {
    q: 'Is a German translation required?',
    a: 'The Embassy does not require a German translation for legalization itself. The German notary or receiving authority may separately require one; confirm that requirement before arranging translation.',
  },
  {
    q: 'How long does the complete service take?',
    a: 'We confirm a case-specific estimate after reviewing the requirements. PSA retrieval, DFA authentication, VFS appointment availability, Embassy review and international delivery are separate stages. Additional LCR documents or verification can extend the timeline. Tell us your deadline before ordering.',
  },
  {
    q: 'Can the CENOMAR be shipped before the Birth Certificate?',
    a: 'We can discuss separate shipments when the urgent document and all required supporting evidence are ready. VFS requests Birth Certificate/LCR evidence for a CENOMAR, so an incomplete birth record may still need attention. Additional shipping costs are confirmed before dispatch.',
  },
];

export default function GermanyDocsEn() {
  useMeta(
    `PH Documents for Germany Immigration [${SEO_YEAR_MONTH_EN}]`,
    'CENOMAR and PSA documents for Germany: retrieval, paper DFA Authentication, German Embassy legalization through VFS Global, and delivery. Free consultation.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Germany Immigration Documents' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Philippine Documents for Germany — Retrieval, Authentication and Legalization',
          description: 'We arrange PSA CENOMAR, Birth and Marriage Certificate retrieval, paper DFA Authentication, German Embassy legalization through VFS Global and delivery to Germany for notarial, marriage, visa and administrative uses.',
          url: 'https://ph-document.com/en/germany/',
          provider: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/en/',
          },
          areaServed: { '@type': 'Country', name: 'DE' },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: '899',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '899',
              priceCurrency: 'USD',
              description: 'Germany Immigration Document Package — procurement, authentication and DHL to Germany; scope confirmed before ordering',
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
        title="Philippine Documents for Germany Immigration"
        subtitle="CENOMAR and PSA certificates for German notaries, marriage, visa and administrative use — retrieval, paper DFA Authentication, German Embassy legalization through VFS Global, and delivery to Germany"
        badges={['Paper DFA Authentication', 'German Embassy Legalization', 'Delivery to Germany']}
        ctaText="Get a Free Quote"
        ctaHref="/en/contact/"
      />

      <SummaryBlock
        conclusion="One service from PSA retrieval to German Embassy legalization and Germany delivery"
        points={[
          'We arrange CENOMAR, Birth and Marriage Certificates, the required paper DFA Authentication Certificate, VFS Global submission, German Embassy legalization and overseas delivery.',
          'This service also covers proof of single status for a German notary; it is not limited to marriage or visa applications.',
          'Germany and the Philippines do not apply the Apostille Convention between them. If your receiving authority requires legalization, an Apostille alone is insufficient. We confirm the required route before starting.',
        ]}
      />

      <FeatureList
        heading="Documents We Can Arrange"
        items={[
          {
            icon: <FileCheck className="w-6 h-6 text-blue-600" />,
            title: 'PSA Birth Certificate',
            description: 'PSA original, paper DFA Authentication and Embassy legalization where required. If the PSA record is unclear, we confirm additional LCR requirements and procurement options.',
          },
          {
            icon: <FileCheck className="w-6 h-6 text-blue-600" />,
            title: 'CENOMAR or PSA Marriage Certificate',
            description: 'For proof of single status, notarial, civil-registration, marriage or visa purposes. We review names, the receiving checklist and required birth/LCR supporting documents.',
          },
          {
            icon: <Shield className="w-6 h-6 text-blue-600" />,
            title: 'NBI Clearance',
            description: 'Available when your German receiving authority requests it. We confirm the appropriate DFA and Embassy authentication route for the document.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Confirm the receiving requirements', description: 'Tell us the document type, number of copies, purpose, German receiving authority, deadline and delivery country. We confirm the scope and costs before starting.' },
          { title: 'Retrieve the PSA original', description: 'We arrange the required PSA certificates and check the entries. Additional LCR evidence may be needed for unclear records.' },
          { title: 'Obtain paper DFA Authentication', description: 'We arrange a physical DFA Authentication Certificate. Electronic documents and e-Apostilles cannot be used for German Embassy legalization.' },
          { title: 'Submit through VFS Global', description: 'We prepare the authorization, ID copies, application and supporting evidence, then arrange an appointment and submission. VFS accepts legalization applications in Manila and Cebu.' },
          { title: 'German Embassy legalization', description: 'VFS forwards the documents to the German Embassy in Manila. We collect or receive the completed originals and check them before international dispatch.' },
          { title: 'Delivery to Germany', description: 'We arrange tracked DHL/FedEx international shipping. Separate shipments can be discussed if the urgent document and its supporting evidence are complete.' },
        ]}
      />

      <section className="mb-8 rounded-2xl border border-primary/25 bg-primary/5 p-5 md:p-6">
        <h2 className="text-xl font-bold text-secondary mb-3">What to Prepare</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed text-gray-700">
          <li>A clear passport/ID copy and a signed authorization covering the agreed representative processing.</li>
          <li>The document owner’s full registered name, birth details, parents’ names and any existing certificate copies.</li>
          <li>The receiving authority’s checklist, purpose, deadline and shipping details.</li>
          <li>Birth Certificate/LCR evidence for CENOMAR legalization; additional LCR records if PSA entries are unclear.</li>
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-gray-700">CENOMAR and Birth Certificate details must match. Civil-status certificates should be no more than six months old when submitted to the German authority. Additional verification may be required for delayed birth registrations.</p>
      </section>

      <section className="mb-8 px-4">
        <h2 className="text-xl font-bold text-secondary mb-3">Translation, Timing and Fees</h2>
        <p className="text-gray-700 leading-relaxed mb-3">German translation is not required for Embassy legalization itself. The notary or receiving authority may require it separately. We confirm document procurement, DFA, VFS/Embassy processing, additional records and international delivery costs before starting; tell us if separate shipments are needed.</p>
        <p className="text-gray-700 leading-relaxed mb-3">The Embassy lists approximately one week for complete PSA/NBI legalization applications. This is only the Embassy stage, not the complete service: retrieval, DFA processing, appointments, additional evidence and international shipping take extra time. We confirm feasibility against your deadline.</p>
        <p className="text-sm text-gray-600 leading-relaxed">
          Official guidance: <a href="https://manila.diplo.de/ph-en/service/2673916-2673916" target="_blank" rel="noopener noreferrer" className="underline">German Embassy Manila</a>{' · '}
          <a href="https://visa.vfsglobal.com/phl/en/deu/legalizations" target="_blank" rel="noopener noreferrer" className="underline">VFS Global legalization</a>{' · '}
          <a href="https://www.apostille.gov.ph/documentary-requirements/" target="_blank" rel="noopener noreferrer" className="underline">DFA requirements</a>
        </p>
      </section>

      <CtaBox
        title="Need Philippine Documents for a German Notary or Authority?"
        description="Tell us your documents, purpose and deadline. We coordinate retrieval, the correct DFA authentication, VFS/German Embassy legalization and delivery to Germany."
        buttonText="Get a Free Quote"
        href="/en/contact/"
      />

      <FaqSection items={faqs} />

      <RelatedArticles
        items={[
          { href: '/en/cenomar/', title: 'CENOMAR Retrieval Service' },
          { href: '/en/apostille/', title: 'DFA Authentication Routes' },
          { href: '/en/cenomar-requirements-by-country/', title: 'CENOMAR Requirements by Country' },
        ]}
      />
    </PageLayout>
  );
}
