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
      'USCIS allows scanned copies for initial filing. However, U.S. visa guidelines explicitly require an "original birth certificate or certified copy" — meaning the physical PSA on Security Paper (SECPA). The NVC and US Embassy Manila mandate bringing the physical PSA certificate to the interview stage. A PSA e-Certificate can be scanned for initial upload, but the physical SECPA must also be on hand. Note: as of March 2026, DFA issues only an electronic e-Apostille for PSA civil documents — there is no paper Apostille sticker — and a printed e-Apostille is invalid (DFA rule). Safe option: Obtain the physical PSA on SECPA and confirm with USCIS/NVC how they want the document authenticated (e-Apostille acceptance).',
  },
  {
    flag: '🇨🇦',
    name: 'Canada',
    authority: 'IRCC (Immigration, Refugees and Citizenship Canada)',
    status: 'mixed' as const,
    label: '△ Upload accepted, but physical PSA recommended',
    detail:
      'IRCC online applications accept scanned document uploads. However, official guidance and immigration law practice indicate IRCC requires "the official printed copy on PSA Security Paper" — even if submitted as a scan. Canada joined the Hague Apostille Convention in January 2024, making e-Apostille legally valid by treaty. But in practice, the document being scanned should be the physical PSA on SECPA, not a PSA e-certificate (which has no physical form). IRCC will not treat a printed e-Apostille as valid. Note: since March 2026 DFA issues only an electronic e-Apostille for PSA civil documents — no paper Apostille sticker. Safe option: Obtain the physical PSA on SECPA, pair it with the DFA e-Apostille, and confirm IRCC acceptance before submitting.',
  },
  {
    flag: '🇦🇺',
    name: 'Australia',
    authority: 'Department of Home Affairs',
    status: 'mixed' as const,
    label: '△ Color scan upload accepted — physical PSA safer',
    detail:
      'ImmiAccount applications require clear color scans of identity and civil documents. Online submissions do not require certified copies, so uploading a color scan of the physical PSA is standard. There is no official mention of e-Apostilles on Home Affairs guidance. In practice, a color scan of the PSA certificate on Security Paper is the accepted approach. Since March 2026 the DFA authentication for PSA civil documents is an electronic e-Apostille (no paper sticker); an e-Apostille PDF is valid by treaty, but printing it is invalid. Safe option: Provide the physical PSA on SECPA (color scan for upload, original on hand for possible verification) with its DFA e-Apostille.',
  },
  {
    flag: '🇬🇧',
    name: 'United Kingdom',
    authority: 'UKVI (UK Visas and Immigration)',
    status: 'mixed' as const,
    label: '△ PDF upload accepted — printed e-Apostille invalid',
    detail:
      'UKVI\'s online visa system allows applicants to upload scans or photos of supporting documents. UKVI does not specifically mention e-Apostilles. If an Apostille is needed, note that since March 2026 DFA issues the PSA Apostille electronically (e-Apostille) only — there is no paper sticker on the PSA original; scans of the physical PSA document can be uploaded. Uploading a PSA e-Certificate PDF is also permitted by the system, but the underlying document integrity is what matters. Any attempt to print an e-Apostille would invalidate it. Safe option: Use scans of the physical PSA certificate with its DFA e-Apostille, or upload the e-Certificate PDF directly for digital submissions only.',
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
                text: 'It depends on the country and the specific authority. Most immigration systems (USCIS, IRCC, Home Affairs, UKVI) allow document uploads as scans, but in practice they expect scans of the physical PSA on Security Paper (SECPA), not a PSA e-certificate (which exists only digitally). US NVC and US Embassy Manila require the physical SECPA at the interview. Canada (IRCC) also expects the official printed copy on Security Paper. UAE does not recognize Apostille at all — embassy attestation is required. Always verify with your specific authority before ordering.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I print an e-Apostille and submit it as a hard copy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. DFA officially states that printing an e-Apostille invalidates it. An e-Apostille must be submitted as a PDF file electronically. If your authority requires a physical document, order the physical PSA on Security Paper (SECPA). Note: as of March 2026, DFA no longer issues a paper Apostille sticker for PSA civil documents — the Apostille is issued electronically (e-Apostille) only.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the difference between PSA e-Certificate and physical PSA on Security Paper?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A physical PSA certificate is printed on special Security Paper (SECPA) with embedded security features. It can be scanned and uploaded, or submitted as an original. A PSA e-Certificate is a digital-only PDF that was never in physical form. Most overseas authorities expect scans of the physical SECPA — not the e-Certificate PDF. The e-Certificate exists solely as a digital file, while the physical PSA has both a paper original and a scannable form.',
              },
            },
            {
              '@type': 'Question',
              name: 'What happened to the paper Apostille for PSA documents?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Since March 2026, DFA no longer issues a paper Apostille sticker for PSA civil documents (birth, marriage, CENOMAR). The only Apostille format for these documents is now the e-Apostille — a digital PDF that must be submitted electronically (printing it voids it). The underlying document can still be a physical PSA on Security Paper (SECPA) or a PSA e-Certificate, but its DFA authentication is electronic in both cases. Paper Apostille stickers remain available only for non-PSA documents such as NBI Clearance.',
              },
            },
          ],
        },
      ]}
    >
      <SummaryBlock
        conclusion="PSA e-Certificates and DFA e-Apostilles are legally valid under the Hague Convention. However, most overseas immigration authorities still expect scans of the physical PSA on Security Paper (SECPA) — not a PSA e-certificate. Printing an e-Apostille is invalid. When in doubt, obtain the physical PSA on SECPA and confirm how your authority accepts its DFA authentication."
        points={[
          'Since March 2026, DFA no longer issues a paper Apostille for PSA civil documents — the Apostille is electronic (e-Apostille) whether the document is a physical SECPA or a PSA e-Certificate. Paper Apostille stickers remain only for non-PSA documents (e.g. NBI).',
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
              DFA officially states that an e-Apostille <strong>loses its validity if printed</strong>. It must be submitted as a PDF file electronically. If a physical document is needed, obtain the physical PSA on SECPA — but note DFA no longer issues a paper Apostille sticker for PSA civil documents, so its authentication remains the electronic e-Apostille.
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-gray-900 mb-1">Critical #2: PSA e-Certificate ≠ scan of physical PSA</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Most overseas authorities permit document <em>uploads as scans</em> — but they expect scans of the <strong>physical PSA on Security Paper (SECPA)</strong>. A PSA e-Certificate is a digital-only PDF that never existed in physical form. IRCC and other agencies have stated in practice that the <strong>official printed copy on PSA Security Paper</strong> is required, even if submitted as a scan.
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
              <span className="text-amber-600">If No or Uncertain</span> → Obtain the physical PSA on SECPA (its DFA authentication is the electronic e-Apostille — DFA no longer issues a paper Apostille for PSA documents) and confirm acceptance with the authority.
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
                ['🇨🇦 Canada (IRCC)', '△ Scan of SECPA OK', '✗ Invalid', '✓ Practical requirement'],
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
        <p className="text-xs text-gray-400 mt-2">Sources: DFA/PSA official advisories; U.S. State Dept. visa guidance; IRCC immigration law practice; Australian DHA certified copy rules; UKVI evidence upload instructions; UAE/MOFA legalization requirements.</p>
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
              Upload a color scan of the physical PSA on Security Paper (SECPA) together with its DFA e-Apostille (DFA no longer issues a paper Apostille for PSA documents). Do not rely on PSA e-certificate for upload — obtain the physical SECPA.
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
