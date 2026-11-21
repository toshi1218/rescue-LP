import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import RelatedArticles from '../components/RelatedArticles';
import { useMeta } from '../lib/useMeta';

const title = 'PSA Serbilis: Official Website, Delivery & PSAHelpline';
const description = 'PSA Serbilis is active at psaserbilis.com.ph. Compare direct overseas paper delivery, PSAHelpline courier pickup, and the PSA e-Certificate and DFA e-Apostille route.';
const serbilisUrl = 'https://www.psaserbilis.com.ph/';
const helplineUrl = 'https://psahelpline.ph/';
const helplineInternationalUrl = 'https://psahelpline.ph/faq/International-Order';
const psaAdvisory = 'https://psa.gov.ph/content/public-advisory-135';
const dfaPsaPortal = 'https://apostille.psahelpline.ph/';
const sourceLink = 'text-primary underline underline-offset-2';

const faq = [
  {
    q: 'Is PSA Serbilis still working?',
    a: 'Yes. The Philippine Statistics Authority lists PSA Serbilis and PSAHelpline as authorized online channels. The current Serbilis website is www.psaserbilis.com.ph.',
  },
  {
    q: 'Can PSA Serbilis deliver a certificate overseas?',
    a: 'Yes. PSA lists Serbilis as available to requesters abroad. Confirm the shipping options, delivery address, and total for your country on the official order site.',
  },
  {
    q: 'What does the PSAHelpline international fee cover?',
    a: 'It covers certificate processing. You arrange and pay for a courier separately if you want the physical certificate delivered abroad. PSAHelpline makes the digital copy available after identity verification.',
  },
  {
    q: 'Can I add a DFA e-Apostille to my Serbilis paper certificate?',
    a: 'For eligible PSA civil registry documents intended for Apostille Convention destinations, DFA authenticates the PSA electronic certificate through its designated online route. Ask your receiving office whether it needs the electronic set, a separate paper certificate, or both.',
  },
];

export default function PsaSerbilisEn() {
  useMeta(title, description);
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PSA Serbilis' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description,
          url: 'https://ph-document.com/en/psa-serbilis/',
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
        title="PSA Serbilis: How to Order PSA Documents Online"
        subtitle="Use the official Serbilis site for PSA paper certificates and overseas delivery. Choose the DFA online route if your receiving authority requires an electronic Apostille."
        lastUpdated="November 22, 2026"
      />

      <section className="mb-10 space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-secondary">PSA Serbilis and PSAHelpline are both active</h2>
        <p>
          The Philippine Statistics Authority (PSA) lists both as authorized online channels for civil registry records.
          You can use them to request birth, marriage or death certificates and a Certificate of No Marriage Record (CENOMAR).
          See the <a href={psaAdvisory} className={sourceLink}>PSA public advisory</a> for the current ordering sites.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[36rem] text-left">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3">What you need</th>
                <th scope="col" className="px-4 py-3">Where to start</th>
                <th scope="col" className="px-4 py-3">What to check</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <th scope="row" className="px-4 py-3">A paper certificate shipped abroad</th>
                <td className="px-4 py-3"><a href={serbilisUrl} className={sourceLink}>PSA Serbilis</a></td>
                <td className="px-4 py-3">Confirm delivery options, cost, and timing for your address before paying.</td>
              </tr>
              <tr>
                <th scope="row" className="px-4 py-3">Domestic delivery or pickup by your own international courier</th>
                <td className="px-4 py-3"><a href={helplineUrl} className={sourceLink}>PSAHelpline</a></td>
                <td className="px-4 py-3">For the <a href={helplineInternationalUrl} className={sourceLink}>international order service</a>, the fee covers processing. Book and pay for the courier separately.</td>
              </tr>
              <tr>
                <th scope="row" className="px-4 py-3">A PSA e-Certificate with a DFA e-Apostille</th>
                <td className="px-4 py-3"><a href={dfaPsaPortal} className={sourceLink}>DFA’s designated PSA ordering portal</a></td>
                <td className="px-4 py-3">Confirm that the receiving office accepts the electronic set for your case.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10 space-y-3 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-secondary">Before you order from overseas</h2>
        <p>Ask the office receiving your document which record it needs, whether it needs a paper original, and whether it requires authentication. In a visa case, check the requirements for your current step. An upload before the interview and a document you bring to the interview may need different formats.</p>
        <p>If your PSA copy is unreadable or the registry has no record, send us the rejection reason or tell us the city or municipality where the record was registered. We can check whether a follow-up with the Local Civil Registry is appropriate before you pay for another copy.</p>
      </section>

      <CtaBox
        title="Need help with a PSA order from abroad?"
        description="Tell us the certificate, receiving office, and deadline. We can check the route and quote for retrieval, authentication where required, and tracked delivery."
        buttonText="Get an Email Quote"
        href="#contact"
        service="PSA document retrieval"
      />

      <FaqSection items={faq} />
      <RelatedArticles items={[
        { href: '/en/psa-birth-certificate-cost/', title: 'PSA Birth Certificate Fees and Shipping Costs' },
        { href: '/en/psa-ecertificate-abroad/', title: 'PSA Electronic vs. Paper Certificates Abroad' },
        { href: '/en/cenomar/', title: 'CENOMAR: Documents and Ordering from Abroad' },
      ]} />
    </PageLayout>
  );
}
