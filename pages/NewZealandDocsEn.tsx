import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import RelatedArticles from '../components/RelatedArticles';
import { useMeta } from '../lib/useMeta';

const title = 'Philippine Documents for a New Zealand Partner Visa';
const description = 'Check Immigration New Zealand’s partner residence visa checklist for relationship evidence, PSA civil records and Philippine police certificates before ordering.';
const visaGuide = 'https://www.immigration.govt.nz/visas/partner-of-a-new-zealander-resident-visa/';
const policeGuide = 'https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/character-requirements-third-party-checks-and-police-certificates/police-certificates/';
const sourceLink = 'text-primary underline underline-offset-2';

const faq = [
  { q: 'Does Immigration New Zealand require a DFA Apostille?', a: 'Follow the INZ checklist for your visa category and each specific record. DFA is the Philippine issuing authority when the receiving office asks for an Apostille and the Convention applies.' },
  { q: 'Do I need a Philippine NBI Clearance?', a: 'Use INZ’s police certificate instructions for each applicant. If the checklist asks for a Philippine police certificate, tell us whether you previously obtained NBI Clearance, the format INZ requests, and the submission date.' },
  { q: 'Is a PSA Marriage Certificate enough to show our relationship?', a: 'A Philippine marriage certificate can document the marriage. For the partner resident visa, INZ also assesses whether the relationship is genuine and stable, including evidence of living together.' },
];

export default function NewZealandDocsEn() {
  useMeta(title, description);
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'New Zealand Immigration Documents' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: title,
          description,
          url: 'https://ph-document.com/en/new-zealand/',
          provider: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
          areaServed: { '@type': 'Country', name: 'NZ' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        },
      ]}
    >
      <HeroBanner
        title="Philippine Documents for a New Zealand Partner Visa"
        subtitle="Start with the Immigration New Zealand checklist. We can retrieve the Philippine records it calls for and confirm the format before you order."
        ctaText="Get an Email Quote"
        ctaHref="#contact"
        lastUpdated="November 22, 2026"
      />

      <section className="mb-10 space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-secondary">New Zealand partner residence visa: what to prepare</h2>
        <ol className="list-decimal space-y-3 pl-5">
          <li><strong>Build a relationship timeline.</strong> INZ asks for evidence of a genuine and stable relationship, including evidence of living together. A marriage certificate can document the marriage. Use the relationship timeline and evidence checklist to organize the other supporting records.</li>
          <li><strong>Check police certificate requirements person by person.</strong> Use the instructions for the applicant and family members included. Check which countries the records must come from, how recent they must be, and when to submit them.</li>
          <li><strong>Confirm the format for each Philippine document.</strong> Check whether INZ asks for a scan, a paper original, a translation, or authentication. If the instructions are unclear, ask about the specific document before paying to have anything authenticated.</li>
        </ol>
        <p>Official references: <a href={visaGuide} className={sourceLink}>Immigration New Zealand partner resident visa checklist</a> and <a href={policeGuide} className={sourceLink}>INZ police certificate instructions</a>.</p>
      </section>

      <section className="mb-10 space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-secondary">What to share for a document quote</h2>
        <p>Send the visa category, the exact list of Philippine records requested, the submission date, and any directions about the format. If a Philippine police certificate is needed, include the year of your prior NBI Clearance, if you have one.</p>
        <p>We confirm which PSA records and NBI options fit the request, whether authentication is needed, and how the electronic files or paper originals will be delivered.</p>
      </section>

      <CtaBox
        title="Get a quote based on your INZ checklist"
        description="Share the Philippine documents on your checklist and when you need them. We will confirm retrieval, any authentication, and delivery to New Zealand."
        buttonText="Get an Email Quote"
        href="#contact"
        service="Philippine documents for New Zealand"
      />

      <FaqSection items={faq} />
      <RelatedArticles items={[
        { href: '/en/nbi-clearance/', title: 'NBI Clearance from Overseas' },
        { href: '/en/cenomar-meaning/', title: 'Choose Between CENOMAR, AOM and a Marriage Certificate' },
        { href: '/en/psa-ecertificate-abroad/', title: 'Choose a PSA Electronic or Paper Certificate' },
      ]} />
    </PageLayout>
  );
}
