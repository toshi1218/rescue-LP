import React from 'react';
import PageLayout from '../components/PageLayout';
import SummaryBlock from '../components/SummaryBlock';
import CtaBox from '../components/CtaBox';
import RelatedLinks from '../components/RelatedLinks';
import { useMeta } from '../lib/useMeta';
import { AlertTriangle } from 'lucide-react';

export default function PsaEcertificateGuideEn() {
  useMeta(
    'PSA eCertificate & DFA eApostille: Accepted Internationally? 2026 Guide',
    'PSA eCertificate and DFA eApostille launched in 2026 — but are they accepted for US, UK, UAE, and other visa applications? We explain the current acceptance status and what OFWs should know.',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Home', href: '/en/' },
        { label: 'PSA eCertificate & eApostille Guide' },
      ]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'PSA eCertificate & DFA eApostille: Accepted Internationally? 2026 Guide',
          description:
            'PSA eCertificate and DFA eApostille launched in 2026. We explain the current international acceptance status for US, UK, UAE, and other visa applications.',
          datePublished: '2026-04-24',
          author: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
        },
      ]}
    >
      <SummaryBlock
        conclusion="PSA eCertificate and DFA eApostille are legally valid under the Hague Convention. However, as of April 2026, acceptance by foreign embassies, immigration offices, and civil registry authorities varies by country and office. We recommend confirming before submitting electronic documents for visa applications."
        points={[
          'DFA eApostille launched on March 16, 2026 — legal equivalence to physical Apostille under HCCH eAPP standards.',
          'US (USCIS/NVC), UK, UAE, and other immigration authorities have not yet published explicit acceptance policies for eApostille.',
          'Physical paper copies (PSA Security Paper + DFA physical Apostille) remain the safest option for high-stakes visa applications.',
          'Several OFWs have reported being asked to resubmit physical documents after presenting eCertificates.',
        ]}
      />

      {/* What are these documents */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">What Are PSA eCertificate and DFA eApostille?</h2>
        </div>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">PSA eCertificate</strong>: A PDF electronic version of PSA-issued documents — birth certificates, marriage certificates, and CENOMAR. Obtained through PSAHelpline.ph or similar platforms. Each document has a QR code for authenticity verification.
          </p>
          <p>
            <strong className="text-gray-900">DFA eApostille (launched March 16, 2026)</strong>: A fully digital Apostille attached to PSA eCertificates. The first full-digital Apostille system in ASEAN, meeting HCCH eAPP standards — legally equivalent to a physical Apostille.{' '}
            <strong>Printing may invalidate it</strong> — always submit digitally unless specifically authorized otherwise.
          </p>
          <p>
            Traditional paper originals (PSA Security Paper / SECPA) with physical DFA Apostille remain available and continue to be issued. The eApostille is an added option, not a replacement.
          </p>
        </div>
      </section>

      {/* International acceptance status */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">International Acceptance Status (April 2026)</h2>
        </div>
        <div className="space-y-3">
          {[
            {
              title: 'United States (USCIS / NVC / US Embassy Manila)',
              body: 'No explicit acceptance policy for eApostille has been published. USCIS forms and NVC instructions still reference PSA-issued civil documents without distinguishing electronic vs. paper. Embassy interviews typically require the original document. Confirm directly before submitting.',
            },
            {
              title: 'United Kingdom (UKVI)',
              body: 'UKVI guidance refers to "original" documents for Philippine civil records. No explicit eApostille policy has been issued. For spouse visas and family visas, physical originals are strongly recommended.',
            },
            {
              title: 'UAE, Saudi Arabia, and Gulf Countries',
              body: 'Embassy attestation and MOFA authentication processes in Gulf countries are document-specific and office-specific. Many require physical originals for attestation. Check with the specific embassy in Manila before submitting eCertificates.',
            },
            {
              title: 'Australia (Department of Home Affairs)',
              body: 'Australian immigration accepts certified documents but has not published explicit guidance on Philippine eApostille. Contact the Department of Home Affairs or a registered migration agent before relying on electronic documents.',
            },
            {
              title: 'Canada (IRCC)',
              body: 'IRCC instructions for Philippine documents reference PSA certificates but do not yet address eApostille. Physical documents with apostille are recommended for sponsorship and immigration applications.',
            },
          ].map(({ title, body }) => (
            <div key={title} className="flex items-start gap-3 p-4 rounded-xl border border-amber-100 bg-amber-50">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900 mb-1">{title}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Real cases */}
      <section className="mb-10 rounded-2xl overflow-hidden border border-gray-200 border-l-4 border-l-red-700 bg-white shadow-sm">
        <div className="p-6 md:p-8">
          <div className="inline-block mb-3 px-3 py-1 bg-red-700 text-white text-xs font-bold rounded tracking-wide">
            Cases reported to us
          </div>
          <p className="text-base font-bold text-secondary mb-4">
            Since March 2026, several OFWs have contacted us after running into acceptance issues with eCertificates:
          </p>
          <ul className="space-y-3">
            {[
              'Submitted PSA eCertificate to an embassy — asked to resubmit physical PSA paper copy with physical Apostille.',
              'Engaged another service that delivered eCertificate only — immigration office required paper original, leading to delays.',
              'Used eCertificate for civil registration in a destination country — local registry required notarized physical copy instead.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-700 leading-relaxed">"{item}"</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-400">* Cases shared with identifying details removed.</p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">eCertificate vs. Physical Paper: Comparison</h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 w-1/3">Factor</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-500">eCertificate + eApostille</th>
                <th className="text-center px-4 py-3 font-semibold text-primary">Paper Original + Physical Apostille</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Legal validity', 'Valid (HCCH standard)', 'Valid'],
                ['International acceptance', 'Varies by country/office (confirm first)', 'High — established standard'],
                ['Obtainable from overseas', 'Yes — PSAHelpline online', 'Requires in-country agent'],
                ['Can be printed and submitted', 'Generally no — may be invalidated', 'Yes'],
                ['Risk of resubmission request', 'Present (transition period)', 'Low'],
              ].map(([factor, electronic, paper]) => (
                <tr key={factor} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-medium text-gray-800">{factor}</td>
                  <td className="px-4 py-3 text-center text-gray-600">{electronic}</td>
                  <td className="px-4 py-3 text-center text-gray-800 font-medium">{paper}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recommendations */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">Recommended Approach (by priority)</h2>
        </div>
        <ol className="space-y-4">
          {[
            {
              title: 'Confirm with your specific embassy or immigration office (required)',
              body: 'Contact the embassy, consulate, or immigration office where you will submit the document. Ask specifically about PSA eCertificate and DFA eApostille. If possible, send a sample PDF to confirm.',
            },
            {
              title: 'Use physical paper for high-stakes applications (recommended)',
              body: 'For visa applications, green card / PR processes, and civil registration abroad — use PSA Security Paper with physical DFA Apostille. The transition period carries too much uncertainty for important applications.',
            },
            {
              title: 'If using eCertificate: submit digitally only',
              body: 'Do not print DFA eApostille — it may be invalidated when printed. Submit the PDF digitally as obtained from the official DFA system (apostille.gov.ph). Always include QR code verification information.',
            },
            {
              title: 'Monitor official guidance updates',
              body: 'Acceptance policies are being updated. Check DFA, PSA, and your destination country\'s immigration authority websites regularly. This is a rapidly evolving situation since the eApostille system only launched in March 2026.',
            },
          ].map(({ title, body }, i) => (
            <li key={title} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">{title}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <CtaBox
        title="Need a physical PSA paper copy with DFA Apostille?"
        description="Our team in the Philippines retrieves PSA documents in person and submits directly to DFA for physical Apostille. We ship worldwide via DHL. If an electronic document was rejected, contact us — we can help you get the physical version quickly."
        buttonText="Get a Free Quote"
        href="/en/contact/"
        trustNote="Cancel before start for free · Progress updates included · 24-hour reply"
        service="PSA Document Retrieval"
      />

      <RelatedLinks
        links={[
          { label: 'PSA Birth Certificate Service', path: '/en/psa-birth-certificate/' },
          { label: 'PSA Birth Certificate Cost', path: '/en/psa-birth-certificate-cost/' },
          { label: 'CENOMAR Service', path: '/en/cenomar/' },
          { label: 'Document Checklist by Visa Type', path: '/en/document-checklist-by-visa/' },
        ]}
      />
    </PageLayout>
  );
}
