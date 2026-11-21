import React from 'react';
import PageLayout from '../components/PageLayout';
import SummaryBlock from '../components/SummaryBlock';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import RelatedLinks from '../components/RelatedLinks';
import { useMeta } from '../lib/useMeta';

const title = 'PSA e-Certificate Abroad: Paper, PDF or e-Apostille?';
const description = 'Find out when to order a PSA e-Certificate, a paper SECPA original, or an electronic set with a DFA e-Apostille. Compare the requirements by filing stage.';
const dfaRequirements = 'https://www.apostille.gov.ph/documentary-requirements/';
const sourceLink = 'text-primary underline underline-offset-2';

const faq = [
  { q: 'Can I submit a PSA e-Certificate abroad?', a: 'Ask the receiving office which PSA format it accepts for your specific filing. Some offices request a paper original or a scan of that original. Others accept the PSA e-Certificate or the electronic set with a DFA e-Apostille.' },
  { q: 'Does an e-Apostille also authenticate a separate paper PSA copy?', a: 'The e-Apostille authenticates the PSA e-Certificate it was issued for. A separately ordered paper PSA certificate is a different record for submission purposes. Ask the receiving office whether it needs one format or both.' },
  { q: 'What if my destination is outside the Apostille Convention?', a: 'DFA directs PSA applicants for non-Convention destinations to the physical Certificate of Authentication route. The receiving office or embassy can confirm any further legalization and whether to order a separate paper PSA certificate.' },
];

export default function PsaEcertificateAbroadEn() {
  useMeta(title, description);

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Home', href: '/en/' },
        { label: 'Guides', href: '/en/guides/' },
        { label: 'PSA e-Certificate Abroad' },
      ]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description,
          datePublished: '2026-04-30',
          dateModified: '2026-11-22',
          author: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
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
      <h1 className="mb-4 text-2xl font-bold text-secondary md:text-3xl">Which PSA Certificate Format Do You Need Abroad?</h1>
      <SummaryBlock
        conclusion="Order the format your receiving office lists. A PSA e-Certificate, a SECPA paper original, and a PSA e-Certificate with a DFA e-Apostille serve different submission requirements."
        points={[
          'PSA e-Certificate: use the digital record if the checklist accepts a PSA electronic certificate.',
          'SECPA paper original: order the paper copy if the office asks to see the original or wants a scan of that copy.',
          'PSA e-Certificate with e-Apostille: if the office requires authentication and the Convention applies, keep the signed electronic set for submission.',
          'Non-Convention destination: check the DFA Certificate of Authentication and any embassy legalization requirements.',
        ]}
      />

      <section className="mb-10 space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-secondary">Check the requirement at each filing stage</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>United States:</strong> CEAC upload and an immigrant-visa interview are separate steps. The U.S. Department of State asks applicants to bring original or certified civil documents to the interview. Check the <a href="https://travel.state.gov/content/travel/en/us-visas/immigrate/the-immigrant-visa-process/step-10-prepare-for-the-interview/step-11-applicant-interview.html" className={sourceLink}>interview instructions</a> for your case.</li>
          <li><strong>Canada, Australia, and the UK:</strong> check your own application checklist for the document, upload format, and any later requirement to show an original. Requirements can vary by program or stage.</li>
          <li><strong>United Arab Emirates:</strong> if authentication is needed, follow the <a href={dfaRequirements} className={sourceLink}>DFA route for non-Convention destinations</a> and confirm the further requirements with the receiving office or embassy.</li>
        </ul>
      </section>

      <section className="mb-10 space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-secondary">A question to send to the receiving office</h2>
        <blockquote className="rounded-xl border-l-4 border-primary bg-gray-50 px-5 py-4">
          For my [application type] at the [filing or interview] stage, do you accept the PSA e-Certificate with its DFA e-Apostille as electronic files, or do you require a separate SECPA paper original? Is authentication required for my document?
        </blockquote>
        <p>For the official Philippine authentication route, see the <a href={dfaRequirements} className={sourceLink}>DFA documentary requirements</a>. Then choose an <a href="/en/psa-serbilis/" className={sourceLink}>authorized PSA ordering channel</a> for the format you need.</p>
      </section>

      <CtaBox
        title="Get help choosing and ordering the right PSA format"
        description="Send us the receiving office, exact document request, and deadline. We can quote for the PSA certificate, applicable authentication, and paper delivery if required."
        buttonText="Get an Email Quote"
        href="#contact"
        service="PSA document retrieval"
      />

      <FaqSection items={faq} />
      <RelatedLinks links={[
        { label: 'PSA Serbilis and PSAHelpline Ordering Options', path: '/en/psa-serbilis/' },
        { label: 'PSA Birth Certificate Cost and Delivery', path: '/en/psa-birth-certificate-cost/' },
        { label: 'DFA Apostille Fees', path: '/en/apostille-fee/' },
      ]} />
    </PageLayout>
  );
}
