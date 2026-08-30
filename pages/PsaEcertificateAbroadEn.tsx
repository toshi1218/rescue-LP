import React from 'react';
import PageLayout from '../components/PageLayout';
import SummaryBlock from '../components/SummaryBlock';
import CtaBox from '../components/CtaBox';
import RelatedLinks from '../components/RelatedLinks';
import { useMeta } from '../lib/useMeta';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const countries = [
  {
    flag: '🇺🇸',
    name: 'United States',
    authority: 'USCIS / NVC / US Embassy Manila',
    status: 'mixed' as const,
    label: '△ Partial — physical PSA required at interview',
    detail:
      'U.S. document requirements differ between petition, NVC, and interview stages. Use the current official checklist for the specific case. A PSA e-Certificate and DFA e-Apostille are digital documents; if a physical PSA original is requested, obtain the SECPA copy separately. Do not assume an Apostille is required unless the receiving authority says so.',
  },
  {
    flag: '🇨🇦',
    name: 'Canada',
    authority: 'IRCC (Immigration, Refugees and Citizenship Canada)',
    status: 'mixed' as const,
    label: '△ Check the current IRCC document format',
    detail:
      'IRCC requirements vary by application and document. Confirm whether the current checklist accepts a PSA e-Certificate, requests a scan of a physical SECPA copy, or requires authentication. An e-Apostille remains a digital document and should be submitted in its original electronic form.',
  },
  {
    flag: '🇦🇺',
    name: 'Australia',
    authority: 'Department of Home Affairs',
    status: 'mixed' as const,
    label: '△ Check the current Home Affairs document format',
    detail:
      'Home Affairs requirements depend on the visa and document. Confirm whether the current checklist requests an uploaded civil record, a physical SECPA copy, or authentication. If DFA authentication is specifically required, the PSA e-Certificate and e-Apostille form the electronic authenticated set from March 16, 2026; any SECPA paper record is separate.',
  },
  {
    flag: '🇬🇧',
    name: 'United Kingdom',
    authority: 'UKVI (UK Visas and Immigration)',
    status: 'mixed' as const,
    label: '△ PDF upload accepted — printed e-Apostille invalid',
    detail:
      'UKVI requirements depend on the visa route and document. Confirm whether the current checklist requests an uploaded civil record, a physical SECPA copy, or authentication. If DFA authentication is specifically required, the PSA e-Certificate and e-Apostille form the electronic authenticated set from March 16, 2026; any SECPA paper record is separate.',
  },
  {
    flag: '🇦🇪',
    name: 'United Arab Emirates',
    authority: 'ICP / UAE MOFA (Federal Authority for Identity, Citizenship, Customs & Port Security)',
    status: 'no' as const,
    label: '× Apostille not recognized — attestation required',
    detail:
      'UAE is NOT a Hague Apostille Convention member. Apostille — whether e-Apostille or paper — carries no legal force in UAE. Required process: (1) Obtain physical PSA on SECPA, (2) DFA issues a Certificate of Authentication (not Apostille) via the "paper route" for non-Hague countries, (3) UAE Embassy/Consulate attestation in the Philippines, (4) UAE Ministry of Foreign Affairs (MoFA) attestation in UAE. Do not use e-Apostille for UAE submissions.',
  },
];

const statusIcon = (status: 'ok' | 'mixed' | 'no') => {
  if (status === 'ok') return <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />;
  if (status === 'mixed') return <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />;
  return <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />;
};

export default function PsaEcertificateAbroadEn() {
  useMeta(
    'PSA e-Certificate & DFA e-Apostille Abroad: Accepted? [2026 Country Guide]',
    'PSA e-Certificate and DFA e-Apostille country guide: US, Canada, Australia, UK, UAE. Printing an e-Apostille is invalid. Most authorities still require the physical PSA on Security Paper.',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Home', href: '/en/' },
        { label: 'Guides', href: '/en/guides/' },
        { label: 'PSA e-Certificate & e-Apostille Abroad' },
      ]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'PSA e-Certificate & DFA e-Apostille Abroad: Accepted? [2026 Country Guide]',
          description:
            'Country-by-country guide on whether PSA e-Certificate and DFA e-Apostille are accepted abroad in 2026. Covers US, Canada, Australia, UK, and UAE.',
          datePublished: '2026-04-30',
          author: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Can I submit a PSA e-Certificate with e-Apostille abroad?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'It depends on the country, application stage, and receiving authority. Confirm whether it accepts a PSA e-Certificate, requests a physical SECPA copy, and requires authentication. Non-Apostille-Convention destinations may require a Certificate of Authentication and embassy attestation.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I print an e-Apostille and submit it as a hard copy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. An e-Apostille is a digital document and must be submitted electronically in its original form. If your authority requires a physical PSA document, order the SECPA copy separately and confirm the required authentication route.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the difference between PSA e-Certificate and physical PSA on Security Paper?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A physical PSA certificate is printed on Security Paper (SECPA), while a PSA e-Certificate is a digital-only file. The receiving authority decides which format it accepts. If DFA e-Apostille is required, it authenticates the e-Certificate; it does not automatically authenticate a separately ordered SECPA paper certificate.',
              },
            },
            {
              '@type': 'Question',
              name: 'What happened to the paper Apostille for PSA documents?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For PSA e-Certificates intended for Apostille Convention countries, DFA uses the digital e-Apostille route. For non-member destinations, DFA issues a physical Certificate of Authentication. Other documents, such as NBI Clearance, may use a physical Apostille route. Confirm the document and destination before ordering.',
              },
            },
          ],
        },
      ]}
    >
      <SummaryBlock
        conclusion="PSA e-Certificates and DFA e-Apostilles are legally valid under the Hague Convention. However, most overseas immigration authorities still expect scans of the physical PSA on Security Paper (SECPA) — not a PSA e-certificate. Printing an e-Apostille is invalid. When in doubt, obtain the physical PSA on SECPA and confirm how your authority accepts its DFA authentication."
        points={[
          'For PSA e-Certificates intended for Apostille Convention countries, DFA issues a digital e-Apostille. Non-member destinations use a physical Certificate of Authentication, while non-PSA documents may use a different route.',
          'Printing an e-Apostille invalidates it (DFA official rule). It must be submitted electronically as a PDF.',
          'Most authorities (USCIS, IRCC, Home Affairs, UKVI) allow document uploads as scans — but expect scans of the physical SECPA, not the PSA e-certificate.',
          'UAE is not a Hague member. Apostille has no legal force there; a consular attestation chain is required.',
          'In all ambiguous cases, the safest approach is: physical PSA on SECPA + e-Apostille, with the authority’s acceptance of the e-Apostille confirmed in advance.',
        ]}
      />

      {/* Two critical distinctions */}
      <section className="mb-10 space-y-4">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-gray-900 mb-1">Critical #1: Printing an e-Apostille invalidates it</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              An e-Apostille is a <strong>digital document</strong> and should be submitted electronically in its original form. If a physical document is needed, obtain the PSA SECPA copy separately and confirm the authentication route with the receiving authority.
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-gray-900 mb-1">Critical #2: PSA e-Certificate ≠ scan of physical PSA</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              A PSA e-Certificate is a digital document, while a SECPA copy is a separately issued physical document. The receiving authority decides which format is acceptable. Check its current document checklist rather than assuming one format works everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Decision guide */}
      <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <h2 className="text-lg font-bold text-secondary mb-4">Which route do you need?</h2>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <span className="font-bold text-gray-500 flex-shrink-0 w-6">1.</span>
            <p className="text-gray-700">Is the destination country a <strong>Hague Apostille Convention member</strong>?<br />
              <span className="text-red-600">If No (UAE, etc.)</span> → Obtain physical PSA on SECPA + DFA Certificate of Authentication + embassy/MOFA attestation chain.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-gray-500 flex-shrink-0 w-6">2.</span>
            <p className="text-gray-700">If Yes — will the authority <strong>accept e-Apostille electronically</strong> (confirmed in advance)?<br />
              <span className="text-green-600">If confirmed Yes</span> → Order PSA e-Certificate + DFA e-Apostille; submit as PDF with the online registry verification link.<br />
              <span className="text-amber-600">If No or Uncertain</span> → Confirm whether the authority needs a physical PSA SECPA copy, digital e-Apostille, or another authentication route before ordering.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-bold text-gray-500 flex-shrink-0 w-6">3.</span>
            <p className="text-gray-700 text-amber-700 font-medium">Never print an e-Apostille — a printed copy has no legal validity and must be submitted as a PDF.</p>
          </div>
        </div>
      </section>

      {/* Country breakdown */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">Acceptance by Country (2026)</h2>
        </div>
        <div className="space-y-4">
          {countries.map(({ flag, name, authority, status, label, detail }) => (
            <div key={name} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                {statusIcon(status)}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-lg">{flag}</span>
                    <span className="font-bold text-gray-900">{name}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      status === 'ok' ? 'bg-green-100 text-green-700' :
                      status === 'mixed' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>{label}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">{authority}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">Summary Table</h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Authority</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-500">e-Apostille PDF upload</th>
                <th className="text-center px-4 py-3 font-semibold text-red-500">Printed e-Apostille</th>
                <th className="text-center px-4 py-3 font-semibold text-primary">Physical SECPA required</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['🇺🇸 USA (USCIS)', '△ Scan OK for filing', '✗ Invalid', '✓ Required at interview'],
                ['🇺🇸 USA (NVC/Embassy)', '△ Upload allowed', '✗ Invalid', '✓ Required at interview'],
                ['🇨🇦 Canada (IRCC)', 'Check current checklist', 'Check current checklist', 'Varies by application'],
                ['🇦🇺 Australia (DHA)', '△ Scan upload OK', '✗ Invalid', '✓ Safer with SECPA'],
                ['🇬🇧 UK (UKVI)', '△ Upload permitted', '✗ Invalid', '✓ Safer with SECPA'],
                ['🇦🇪 UAE (ICP/MOFA)', '✗ Apostille not recognized', '✗ N/A', '✓ + Embassy attestation chain'],
              ].map(([authority, digital, printed, physical]) => (
                <tr key={authority} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-medium text-gray-800">{authority}</td>
                  <td className="px-4 py-3 text-center text-gray-600">{digital}</td>
                  <td className="px-4 py-3 text-center text-red-600 font-medium">{printed}</td>
                  <td className="px-4 py-3 text-center text-gray-800">{physical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">Always use the latest official checklist from the receiving authority. Requirements can change and may differ by application stage.</p>
      </section>

      {/* Recommended approach */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">Recommended Approach</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-5">
            <p className="font-bold text-green-800 mb-2">If authority confirms e-Apostille electronically</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Order PSA e-Certificate + DFA e-Apostille (PDF). Submit the PDF file electronically via the immigration portal. Provide the online registry verification link. Never print.
            </p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-bold text-amber-800 mb-2">Canada · Australia · UK · US (USCIS filing)</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Use the document format listed in the current official checklist. Do not substitute a printed e-Apostille for the original digital file.
            </p>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <p className="font-bold text-red-800 mb-2">US NVC / US Embassy Manila</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              The physical PSA on SECPA is required at the interview. Prepare physical originals regardless of what was uploaded digitally at the NVC stage — but note DFA now authenticates PSA documents with an electronic e-Apostille (no paper sticker), so confirm how the Embassy wants authentication presented.
            </p>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <p className="font-bold text-red-800 mb-2">UAE</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Physical PSA on SECPA → DFA Certificate of Authentication → UAE Embassy attestation in Philippines → UAE MoFA attestation. Apostille (any format) is not applicable.
            </p>
          </div>
        </div>
      </section>

      <CtaBox
        title="Not sure which route applies to your case?"
        description="We confirm the exact document format required by your immigration authority before you order. We handle the PSA online application and DFA e-Apostille (electronic) on your behalf, and advise on obtaining the physical PSA on SECPA where an authority expects the paper document."
        buttonText="Free Consultation"
        href="/en/contact/"
        trustNote="Free cancellation before start · Progress updates at every stage"
        service="PSA document retrieval"
      />

      <RelatedLinks
        links={[
          { label: 'DFA Apostille Guide', path: '/en/apostille/' },
          { label: 'PSA Birth Certificate Service', path: '/en/psa-birth-certificate/' },
          { label: 'CENOMAR with Apostille', path: '/en/cenomar-apostille/' },
          { label: 'DFA Apostille Fee Breakdown', path: '/en/apostille-fee/' },
        ]}
      />
    </PageLayout>
  );
}
