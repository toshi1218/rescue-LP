import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import SectionDivider from '../components/SectionDivider';
import RelatedArticles from '../components/RelatedArticles';
import { AlertTriangle, FileCheck, Globe } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function PsaEcertificateGuideEn() {
  useMeta(
    'PSA eCertificate & DFA eApostille: Will Immigration Accept It? [2026 Guide]',
    'PSA Helpline now issues eCertificate + eApostille only for Hague countries. But USCIS, IRCC, UKVI, and embassies often require physical paper. We retrieve the physical original.',
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
          headline: 'PSA eCertificate & DFA eApostille: Will Immigration Accept It? [2026 Guide]',
          description: 'PSA Helpline now issues eCertificate + eApostille only for Hague Convention countries. Many immigration offices and embassies still require physical paper originals. We explain the situation and retrieve physical documents.',
          datePublished: '2026-04-26',
          author: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Will USCIS accept a PSA eCertificate with eApostille?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'USCIS has not issued official guidance confirming acceptance of PSA eCertificate with DFA eApostille as of 2026. Most field offices continue to expect physical PSA originals (SECPA paper) with a physical DFA Apostille. Confirm with your specific USCIS office before submitting.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is a PSA eCertificate?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA eCertificate is a PDF digital version of a PSA civil registry document (birth certificate, marriage certificate, CENOMAR). It is issued by the Philippine Statistics Authority and can be verified via QR code.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is DFA eApostille?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'DFA eApostille is a fully digital Apostille attached to a PSA eCertificate, launched in March 2026. It meets HCCH eAPP standards and has the same legal validity as a physical Apostille. Printing it may render it invalid — it must be submitted digitally.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I get a physical PSA paper original if PSA Helpline only issues eCertificate?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Physical PSA originals (SECPA security paper) with a physical DFA Apostille are still available. However, PSA Helpline for Hague Convention countries now defaults to eCertificate + eApostille. We retrieve physical paper originals directly in the Philippines through our Cebu team.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="PSA eCertificate & eApostille — Will Your Authority Accept It?"
        badges={['Updated April 2026', 'Physical Paper Available', 'Ships via DHL']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 26, 2026"
      />

      <SummaryBlock
        conclusion="DFA eApostille is legally valid under HCCH standards. However, as of April 2026, many immigration offices, embassies, and civil registration authorities worldwide have not officially confirmed acceptance — and re-submission cases are being reported. Confirm with your specific authority before submitting an eCertificate."
        points={[
          'DFA eApostille launched March 16, 2026. Legal validity is equivalent to a physical Apostille under HCCH eAPP standards.',
          'PSA Helpline now defaults to eCertificate + eApostille for Hague Convention countries — physical paper is harder to obtain through standard online channels.',
          'USCIS, IRCC, UKVI, Australian Home Affairs, and most embassies have not updated official guidance to confirm eApostille acceptance.',
          'We retrieve physical PSA originals (SECPA) + physical DFA Apostille in the Philippines — the safe option for high-stakes submissions.',
        ]}
        ctaText="Ask Us Which Format You Need"
      />

      <div className="max-w-2xl mx-auto px-4 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl font-bold text-secondary">What Is PSA eCertificate and DFA eApostille?</h2>
        </div>
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
          <p>
            <strong className="text-gray-900">PSA eCertificate</strong> is the PDF digital version of a PSA civil registry document — birth certificate, marriage certificate, or CENOMAR. Issued by the Philippine Statistics Authority, it contains a QR code for authenticity verification and is available through PSA Helpline's online portal.
          </p>
          <p>
            <strong className="text-gray-900">DFA eApostille (launched March 16, 2026)</strong> is a fully digital Apostille attached to a PSA eCertificate. The first of its kind in ASEAN, it meets the Hague Conference on Private International Law (HCCH) eAPP standards. Its legal validity is equivalent to a physical Apostille. <strong>Printing the eApostille PDF may render it invalid</strong> — digital submission is required.
          </p>
          <p>
            Physical PSA originals (Security Paper / SECPA) combined with a physical DFA Apostille remain available but are no longer the default output from PSA Helpline for countries in the Hague Apostille Convention.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl font-bold text-secondary">The 2026 PSA Helpline Policy Change</h2>
        </div>
        <div className="rounded-xl border border-amber-100 bg-amber-50 p-5 text-sm text-gray-700 leading-relaxed">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900 mb-2">PSA Helpline now issues eCertificate + eApostille only for Hague countries</p>
              <p>
                As of 2026, PSA Helpline — the primary online channel for overseas Filipinos — defaults to issuing <strong>eCertificate + eApostille</strong> for requests destined for Hague Apostille Convention member countries. This means Filipinos in the US, Canada, Australia, UK, UAE, Japan, Korea, and most of Europe will receive digital documents by default when ordering through PSA Helpline.
              </p>
              <p className="mt-2">
                Obtaining a physical SECPA paper original now requires either a walk-in appointment at a PSA Serbilis outlet in the Philippines or working with an agency that has on-the-ground presence in the Philippines.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl font-bold text-secondary">Acceptance Status by Authority (April 2026)</h2>
        </div>
        <div className="space-y-3">
          {[
            {
              title: 'USCIS — K-1, CR-1/IR-1, I-130 petitions',
              body: 'No official guidance confirming eApostille acceptance has been issued as of April 2026. Most USCIS field offices and NVC continue to reference physical PSA originals with physical DFA Apostille in their instructions. Confirm with your specific office before submitting.',
            },
            {
              title: 'IRCC Canada — Spousal sponsorship, PR applications',
              body: 'IRCC has not updated its document checklist to explicitly accept PSA eCertificate with eApostille. Physical originals remain the conventional standard. Pre-submission confirmation is strongly recommended.',
            },
            {
              title: 'Australian Home Affairs — Partner visa (subclass 309, 820)',
              body: 'Home Affairs document requirements reference certified copies of original documents. Acceptance of eApostille has not been officially confirmed. Contact your migration agent or Home Affairs directly before submitting.',
            },
            {
              title: 'UK Visas and Immigration (UKVI) — Spouse, fiancé visa',
              body: 'UKVI has not issued specific guidance on PSA eApostille acceptance as of April 2026. Physical originals are the established norm for Philippine civil registry documents in UK visa applications.',
            },
            {
              title: 'UAE, Qatar, Bahrain — Work permits, residency, marriage',
              body: 'Gulf country authorities and Philippine embassies in the region vary in their acceptance practices. Requirements differ by emirate and by the submitting institution. Verify directly with the relevant authority.',
            },
            {
              title: 'Philippine Embassies and Consulates',
              body: 'Acceptance of eApostille at Philippine consular offices varies by post. Some posts have confirmed digital acceptance; others continue to require physical originals. Contact the specific post before your appointment.',
            },
          ].map(({ title, body }) => (
            <div key={title} className="flex items-start gap-3 p-4 rounded-xl border border-amber-100 bg-amber-50">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 mb-10 rounded-2xl overflow-hidden border border-gray-200 border-l-4 border-l-red-700 bg-white shadow-sm">
        <div className="p-6">
          <div className="inline-block mb-3 px-3 py-1 bg-red-700 text-white text-xs font-bold rounded tracking-wide">
            Cases Reported to Us
          </div>
          <p className="text-base font-bold text-secondary mb-4">
            Since March 2026, we have received the following types of inquiries:
          </p>
          <ul className="space-y-3">
            {[
              'Ordered eCertificate through PSA Helpline and submitted to immigration — was told to resubmit with physical paper original.',
              'Another agency delivered eCertificate + eApostille. Submission authority (embassy) required physical Apostille. Had to start the process again.',
              'Was told eApostille is legally valid — but the specific office reviewing the application asked for the traditional paper format.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-700 leading-relaxed">"{item}"</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-400">※ Edited to remove identifying details. Based on actual consultations received.</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 mb-10">
        <SectionDivider variant="beige">
          <h2 className="text-xl font-bold text-gray-900 mb-4">eCertificate + eApostille vs. Physical Paper</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 w-1/3">Factor</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-500">eCertificate + eApostille</th>
                  <th className="text-center px-4 py-3 font-semibold text-primary">Physical Paper + Apostille</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ['Legal validity', 'Valid (HCCH eAPP standard)', 'Valid'],
                  ['Immigration acceptance (2026)', 'Unconfirmed at most offices', 'Established standard'],
                  ['Can be printed for submission', 'No — printing may invalidate it', 'Yes'],
                  ['Re-submission risk', 'Higher during transition period', 'Low'],
                  ['How to obtain from abroad', 'PSA Helpline online (Hague countries default)', 'Requires local agent in Philippines'],
                  ['Processing time', 'Faster (digital delivery)', '4–6 weeks with DHL shipping'],
                ].map(([factor, digital, paper]) => (
                  <tr key={factor} className="hover:bg-gray-50/50">
                    <td className="px-4 py-3 font-medium text-gray-800">{factor}</td>
                    <td className="px-4 py-3 text-center text-gray-500">{digital}</td>
                    <td className="px-4 py-3 text-center text-gray-800 font-medium">{paper}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionDivider>
      </div>

      <FeatureList
        heading="Recommended Steps"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '1. Confirm with your submission authority first',
            description: 'Contact your specific USCIS office, immigration office, embassy, or civil registration authority directly. Ask whether PSA eCertificate with DFA eApostille is accepted. If possible, provide a sample PDF when asking.',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: '2. For high-stakes submissions, choose physical paper',
            description: 'For visa petitions, immigration applications, and civil registration (marriage), choose a physical PSA original (SECPA) with a physical DFA Apostille. The re-submission cost — in time and fees — exceeds the cost of doing it right the first time.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: '3. If using eApostille, submit digitally — never print',
            description: 'DFA eApostille is tied to the digital file and includes a verification QR code. Printing and submitting a printed copy may render the Apostille invalid. Always submit the PDF file directly.',
          },
        ]}
      />

      <CtaBox
        title="Need a physical PSA paper original?"
        description="Our Cebu team obtains physical PSA originals (SECPA) with physical DFA Apostille directly in the Philippines. We ship via DHL worldwide. Tell us your submission authority and we will confirm the right format before you start."
        buttonText="Start Free Consultation"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage · Pay balance only after confirming document copies"
        whatsappHref="https://wa.me/639452833727"
      />

      <FaqSection
        items={[
          { q: 'Will USCIS accept PSA eCertificate with eApostille?', a: 'USCIS has not issued official guidance confirming acceptance as of April 2026. Most field offices continue to expect physical PSA originals with a physical DFA Apostille. Confirm with your specific USCIS office before submitting. We recommend physical paper for US immigration petitions.' },
          { q: 'What is the difference between PSA eCertificate and SECPA?', a: 'PSA eCertificate is a PDF digital document delivered electronically. SECPA (Security Paper) is the physical printed version on PSA security paper — the traditional format used for decades. Both are official PSA documents, but submission authorities are more consistently familiar with SECPA.' },
          { q: 'Can I print the eApostille and submit it?', a: 'No. DFA eApostille is designed for digital submission only. Printing it may render the Apostille invalid because the verification mechanism relies on the digital file and QR code. If your authority requires a printed document, you need a physical PSA original with a physical DFA Apostille.' },
          { q: 'PSA Helpline is only sending eCertificate. How do I get physical paper?', a: 'Physical PSA originals (SECPA) are still available but require either a walk-in visit to a PSA Serbilis outlet in the Philippines or working with an agency that has local staff. Our Cebu team handles PSA walk-in retrieval and DFA Apostille authentication on your behalf.' },
          { q: 'Is eApostille legally valid?', a: 'Yes. DFA eApostille meets HCCH eAPP (e-Apostille Pilot Program) standards and has the same legal validity as a physical Apostille. The issue is not legal validity — it is practical acceptance by individual offices that have not yet updated their procedures.' },
          { q: 'How long does it take to get a physical PSA original?', a: 'Approximately 4–6 weeks: PSA retrieval 2–3 weeks, DFA Apostille 1–2 weeks, DHL international shipping 3–5 business days. We confirm the timeline for your specific case before you start.' },
        ]}
        ctaTitle="Not sure which format your authority requires?"
        ctaButton="Ask Us for Free"
      />

      <RelatedArticles
        items={[
          { href: '/en/cenomar/', title: 'CENOMAR Service', description: 'Certificate of No Marriage Record — required for K-1, CR-1, and spouse visa applications.' },
          { href: '/en/psa-birth-certificate-cost/', title: 'PSA Birth Certificate Cost', description: 'Full cost breakdown: PSA fee + DFA Apostille + DHL shipping.' },
          { href: '/en/cenomar-apostille/', title: 'Does CENOMAR Need Apostille?', description: 'When DFA Apostille is required and when it is not.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Full checklist of Philippine documents per visa type.' },
        ]}
      />
    </PageLayout>
  );
}
