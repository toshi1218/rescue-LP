import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import RelatedArticles from '../components/RelatedArticles';
import { useMeta } from '../lib/useMeta';

const title = 'CENOMAR Meaning: PSA No Marriage Record vs. AOM';
const description = 'CENOMAR means Certificate of No Marriage Record. Learn what PSA checks, how it differs from an Advisory on Marriages or a marriage certificate, and when to order each.';
const definition = 'CENOMAR stands for Certificate of No Marriage Record. The Philippine Statistics Authority (PSA) issues it when its records search finds no marriage record for the person.';
const sourceLink = 'text-primary underline underline-offset-2';

const faq = [
  { q: 'What does CENOMAR stand for?', a: definition },
  { q: 'What does PSA issue if a marriage record is found?', a: 'PSA issues an Advisory on Marriages (AOM), which lists the marriage records it found for the person. A PSA Marriage Certificate is a copy of the record for one specific marriage.' },
  { q: 'Do I need an Apostille for my CENOMAR?', a: 'Ask the receiving authority whether it requires authentication. If it requires a Philippine Apostille and the Convention applies, DFA issues an e-Apostille for the PSA electronic certificate. A paper PSA copy can be ordered separately if requested.' },
  { q: 'How long is CENOMAR valid?', a: 'The receiving office sets how recent it must be. Ask whether it measures the age of the certificate at filing, interview, or another deadline before ordering.' },
  { q: 'Can I get a CENOMAR from abroad?', a: 'Yes. You can check the PSA-authorized ordering channels or ask IGRS to handle the retrieval and any required authentication. Have the receiving authority, purpose, and deadline ready.' },
];

export default function CenomarMeaningEn() {
  useMeta(title, description);
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'What Is CENOMAR?' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description,
          url: 'https://ph-document.com/en/cenomar-meaning/',
          datePublished: '2026-04-30',
          dateModified: '2026-11-22',
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
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
        title="What Does CENOMAR Mean?"
        subtitle={definition}
        lastUpdated="November 22, 2026"
      />

      <section className="mb-10 space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-secondary">CENOMAR vs. AOM vs. PSA marriage certificate</h2>
        <p>Choose the certificate by what the receiving office wants to verify. A CENOMAR reflects the PSA records search, so ask how to document a prior marriage, divorce, annulment, or widowhood if that applies to you.</p>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[33rem] text-left">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3">Document</th>
                <th scope="col" className="px-4 py-3">What it shows</th>
                <th scope="col" className="px-4 py-3">When to ask for it</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <th scope="row" className="px-4 py-3">CENOMAR</th>
                <td className="px-4 py-3">PSA found no marriage record for the person.</td>
                <td className="px-4 py-3">The receiving office wants evidence of no marriage record.</td>
              </tr>
              <tr>
                <th scope="row" className="px-4 py-3">Advisory on Marriages (AOM)</th>
                <td className="px-4 py-3">PSA lists the marriage records it found.</td>
                <td className="px-4 py-3">The office wants the applicant’s marriage records, such as an AOM named on its checklist.</td>
              </tr>
              <tr>
                <th scope="row" className="px-4 py-3">PSA Marriage Certificate</th>
                <td className="px-4 py-3">A certified record of a particular marriage.</td>
                <td className="px-4 py-3">The office asks for evidence of that specific marriage.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Official reference: <a href="https://psa.gov.ph/cenomar" className={sourceLink}>PSA’s CENOMAR guide</a>.</p>
      </section>

      <section className="mb-10 space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-secondary">What to confirm before ordering</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Check the exact document name and the acceptable issue date on the receiving office’s checklist.</li>
          <li>For a prior marriage, check which supporting record the office asks for, such as an annotated marriage certificate or a spouse’s death certificate.</li>
          <li>If you are applying from overseas, confirm whether the office needs an electronic certificate, an authenticated electronic set, a paper original, or more than one format.</li>
        </ul>
      </section>

      <CtaBox
        title="Order a CENOMAR or confirm which PSA record you need"
        description="Share the receiving authority, purpose, and deadline. We can check the format and give you a quote for the appropriate document."
        buttonText="See CENOMAR Fees and Ordering"
        href="/en/cenomar/"
        variant="primary"
      />

      <FaqSection items={faq} />
      <RelatedArticles items={[
        { href: '/en/cenomar-vs-marriage-certificate/', title: 'CENOMAR vs. PSA Marriage Certificate' },
        { href: '/en/psa-serbilis/', title: 'PSA Serbilis and PSAHelpline Ordering Options' },
        { href: '/en/psa-ecertificate-abroad/', title: 'Choosing a PSA Electronic or Paper Certificate' },
      ]} />
    </PageLayout>
  );
}
