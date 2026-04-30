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
    label: '△ Depends on stage',
    detail:
      'USCIS may accept readable copies for initial filings. However, the US National Visa Center (NVC) and US Embassy Manila require original PSA documents on Security Paper (SECPA) at the interview stage — along with paper Apostille. Plan for physical originals if your case involves a US Embassy interview.',
  },
  {
    flag: '🇨🇦',
    name: 'Canada',
    authority: 'IRCC (Immigration, Refugees and Citizenship Canada)',
    status: 'ok' as const,
    label: '○ PDF accepted',
    detail:
      'Canada joined the Hague Apostille Convention in January 2024. IRCC applications are highly digitized — submitting the PSA e-Certificate PDF with e-Apostille directly via the online portal is the standard approach. No physical SECPA is required.',
  },
  {
    flag: '🇦🇺',
    name: 'Australia',
    authority: 'Department of Home Affairs',
    status: 'ok' as const,
    label: '○〜△ PDF accepted',
    detail:
      'ImmiAccount-based applications require high-resolution color scans of official documents. The e-Apostille PDF file is treated as an electronic original and can be uploaded directly — preferable to printing and re-scanning. Physical originals may be requested in some cases; confirm before proceeding.',
  },
  {
    flag: '🇬🇧',
    name: 'United Kingdom',
    authority: 'UKVI (UK Visas and Immigration)',
    status: 'ok' as const,
    label: '○〜△ Digital upload accepted',
    detail:
      'UKVI applications via VFS Global or TLScontact accept document uploads as scans or photos. The e-Apostille PDF can be uploaded directly. Note that UKVI does not always require an Apostille on Philippine documents, but the e-Certificate itself is accepted as a valid official document.',
  },
  {
    flag: '🇦🇪',
    name: 'United Arab Emirates',
    authority: 'ICP (Federal Authority for Identity, Citizenship, Customs & Port Security)',
    status: 'no' as const,
    label: '× Not applicable — paper route required',
    detail:
      'UAE is NOT a member of the Hague Apostille Convention. Apostille (whether e-Apostille or paper) has no legal force in UAE. The required process is: (1) Obtain physical PSA on SECPA, (2) DFA issues a Certificate of Authentication (not Apostille) via the "paper route" for non-Hague countries, (3) UAE Embassy/Consulate attestation in the Philippines, (4) UAE Ministry of Foreign Affairs (MoFA) attestation in UAE. Do not use e-Apostille for UAE.',
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
    'PSA e-Certificate and DFA e-Apostille acceptance by country: Canada, Australia, UK accept PDF. US NVC and UAE require physical paper. Check before ordering.',
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
                text: 'It depends on the country and authority. Canada (IRCC), Australia (Home Affairs), and UK (UKVI) accept PSA e-Certificate PDF with e-Apostille submitted digitally. US NVC and US Embassy Manila require physical PSA on Security Paper (SECPA). UAE does not recognize Apostille at all — a separate paper attestation process is required.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I print an e-Apostille and submit it as a hard copy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. DFA officially states that printing an e-Apostille invalidates it. An e-Apostille must be submitted as a PDF file electronically. If your authority requires a physical document, you need to order the paper route (PSA on SECPA + physical Apostille sticker).',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the difference between e-Apostille and paper Apostille?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'DFA issues two separate formats. (1) e-Apostille: a digital PDF attached to a PSA e-Certificate. Must be submitted electronically — printing it loses its legal validity. Accepted by Canada, Australia, and UK. (2) Paper Apostille: a physical sticker applied to a PSA document on Security Paper (SECPA). Required by US NVC, US Embassy Manila, and UAE (UAE also needs additional attestation steps beyond Apostille).',
              },
            },
            {
              '@type': 'Question',
              name: 'Does USCIS accept PSA e-Certificate?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'USCIS may accept legible copies for initial filings. However, the US National Visa Center (NVC) and US Embassy Manila require original physical PSA documents on Security Paper (SECPA) with a paper Apostille at the interview and document submission stage. If you have a US Embassy interview, prepare physical originals.',
              },
            },
          ],
        },
      ]}
    >
      <SummaryBlock
        conclusion="PSA e-Certificates and DFA e-Apostilles are legally valid under the Hague Convention. However, whether your immigration authority accepts them digitally varies by country. Printing an e-Apostille does NOT make it valid — it must be submitted as a PDF."
        points={[
          'Since March 16, 2026, DFA issues e-Apostille (PDF only) for Hague Convention countries. Physical paper Apostille requires a separate paper route using PSA SECPA documents.',
          'Canada (IRCC), Australia (Home Affairs), and UK (UKVI) accept e-Apostille PDFs submitted digitally.',
          'US NVC, US Embassy Manila, and UAE require physical PSA on Security Paper — not e-Apostille.',
          'UAE is not a Hague Convention member. Apostille has no legal force there; a separate attestation process is required.',
        ]}
      />

      {/* Key distinction */}
      <section className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-gray-900 mb-2">Critical: e-Apostille is not a printed document</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              DFA officially states that printing an e-Apostille invalidates it. The question is not whether your authority accepts a "printed e-Apostille" — that is never valid. The correct question is: <strong>does your authority accept the e-Apostille PDF submitted electronically?</strong> If not, you need a physical paper Apostille, which requires obtaining the original PSA document on Security Paper (SECPA) via a separate process.
            </p>
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
          <h2 className="text-xl md:text-2xl font-bold text-secondary">e-Apostille vs Paper Apostille</h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 w-1/3"></th>
                <th className="text-center px-4 py-3 font-semibold text-gray-500">e-Apostille (PDF)</th>
                <th className="text-center px-4 py-3 font-semibold text-primary">Paper Apostille (SECPA)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Format', 'Digital PDF only', 'Physical sticker on SECPA'],
                ['Submission method', 'Electronic upload only', 'Physical or scanned original'],
                ['Printing valid?', '✗ Printing invalidates it', '✓ Physical document'],
                ['Canada (IRCC)', '✓ Accepted', '✓ Accepted'],
                ['Australia (Home Affairs)', '✓ Accepted', '✓ Accepted'],
                ['UK (UKVI)', '✓ Accepted', '✓ Accepted'],
                ['US USCIS', '△ May accept copies', '✓ Accepted'],
                ['US NVC / Embassy Manila', '✗ Requires physical SECPA', '✓ Required'],
                ['UAE (ICP)', '✗ Apostille not recognized', '✗ Needs attestation, not Apostille'],
              ].map(([item, digital, paper]) => (
                <tr key={item} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-medium text-gray-800">{item}</td>
                  <td className="px-4 py-3 text-center text-gray-600">{digital}</td>
                  <td className="px-4 py-3 text-center text-gray-800">{paper}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recommended approach */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">Recommended Approach by Destination</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-5">
            <p className="font-bold text-green-800 mb-2">Canada · Australia · UK</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Request PSA e-Certificate + DFA e-Apostille (PDF). Submit the PDF file electronically via the immigration portal. No physical shipping required. Confirm with your specific authority before ordering.
            </p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-bold text-amber-800 mb-2">United States (USCIS)</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              USCIS filings may accept copies. However, if your case involves NVC or a US Embassy interview, prepare physical PSA on SECPA with paper Apostille. When in doubt, use the paper route.
            </p>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <p className="font-bold text-red-800 mb-2">US NVC / US Embassy Manila</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Physical PSA on Security Paper (SECPA) with paper Apostille is required. e-Apostille is not accepted at this stage. Order the physical document route.
            </p>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <p className="font-bold text-red-800 mb-2">UAE</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              UAE does not recognize Apostille. Required: physical PSA on SECPA → DFA Certificate of Authentication (paper route) → UAE Embassy attestation in Philippines → UAE MoFA attestation. Contact us for UAE-specific document handling.
            </p>
          </div>
        </div>
      </section>

      <CtaBox
        title="Not sure which route applies to your case?"
        description="We confirm the exact document format required by your immigration authority before you order — no unnecessary costs. We handle both e-Certificate delivery and physical SECPA + paper Apostille shipped via DHL."
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
