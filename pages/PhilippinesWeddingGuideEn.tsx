import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { AlertTriangle, Clock } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR } from '../lib/seoDate';

export default function PhilippinesWeddingGuideEn() {
  useMeta(
    `Getting Married in the Philippines — Complete ${SEO_YEAR} Guide`,
    `Philippines-first marriage guide for Filipino-Japanese couples: LCCM, Marriage License, ceremony, PSA marriage certificate, and reporting to Japan.`,
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'International Marriage Guide', href: '/en/international-marriage-guide/' }, { label: 'Getting Married in the Philippines' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Getting Married in the Philippines — Complete Guide [2026]',
          description: 'Full procedure for Philippines-first marriage between a Filipino and Japanese national. LCCM, Marriage License, ceremony, PSA marriage certificate, and Japan reportive registration — step by step.',
          url: 'https://ph-document.com/en/getting-married-in-philippines/',
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Does the Japanese partner need to travel to the Philippines?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. In Philippines-first marriage, both parties must be present at the ceremony, so the Japanese partner must travel to the Philippines. If you want to avoid travel, consider Japan-first marriage instead.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take to get the PSA marriage certificate?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA registration time varies. It can affect later procedures, but the Embassy of Japan accepts an LCR Certified True Copy for the reportive marriage filing, so PSA reflection is not always a prerequisite for reporting the marriage to Japan.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can the Marriage License 10-day posting period be skipped?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. The Marriage License cannot be issued until 10 days after the application is filed. This posting period is required by Philippine law to allow any objections to the marriage. Factor this into your travel schedule.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Getting Married in the Philippines — Complete 2026 Guide"
        badges={['Step-by-Step Procedures', 'Required Documents Listed', 'Common Pitfalls Covered']}
        ctaText="Ask About Documents"
        ctaHref="#contact"
        lastUpdated="August 30, 2026"
      />

      <article className="space-y-10">

        {/* Introduction */}
        <section className="rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-3">What does Philippines-first marriage mean?</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            When a Filipino and Japanese couple decides to marry, the key question is which country to register the marriage in first. This page explains <strong>Philippines-first marriage</strong> — registering the marriage in the Philippines before reporting it to Japan.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            In Philippines-first marriage, the couple obtains a Marriage License under Philippine law, solemnizes the marriage before an authorized officiant, and registers it with the Local Civil Registrar. The marriage is then reported to Japan through a "reportive marriage registration."
          </p>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>Note:</strong> Philippines-first marriage requires both partners to travel to the Philippines for the ceremony. If you want to marry without traveling, see the <Link to="/en/japan-first-vs-philippines-first-marriage/" className="underline">Japan-first vs Philippines-first comparison page</Link>.
            </p>
          </div>
        </section>

        {/* Steps */}
        <StepList
          heading="Philippines-First Marriage — 4 Main Steps"
          steps={[
            {
              title: 'Japanese partner obtains LCCM (Certificate of Legal Capacity to Contract Marriage)',
              description: 'Apply in person at the Embassy of Japan in Manila or the Japanese Consular Offices in Cebu or Davao. Bring the application form, a recent family register extract (or Digital Family Register Pass), passport, and the Filipino partner\'s PSA- or local-civil-registrar-issued birth certificate. Issuance is normally on the next opening day.',
            },
            {
              title: 'Apply for Marriage License at the Local Civil Registrar in the Philippines',
              description: 'Apply at the Local Civil Registrar (LCR) in the Philippine municipality where the wedding will be held. After filing, there is a mandatory 10-day public posting period before the Marriage License is issued. Bring both partners\' passports, birth certificates, and other required documents.',
            },
            {
              title: 'Hold the wedding ceremony (solemnization)',
              description: 'After the Marriage License is issued, solemnize the marriage before an authorized officiant (priest, judge, mayor, or imam for Muslims) with two witnesses. The parties sign the Certificate of Marriage, and the solemnizing officer submits it to the Local Civil Registrar. PSA registration can follow later.',
            },
            {
              title: 'Report the marriage to a Japanese municipal office (reportive registration)',
              description: 'Report the marriage within 3 months of the date of marriage. At the Embassy or Consular Office of Japan in the Philippines, either a Local Civil Registrar Certified True Copy or a PSA Marriage Certificate is accepted, together with the required Japanese translations and supporting documents. A DFA Apostille is not listed as a universal requirement.',
            },
          ]}
        />

        {/* Required documents */}
        <section className="rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-4">Required Documents</h2>

          <h3 className="text-sm font-bold text-gray-800 mb-3">[Japanese Partner] Documents for LCCM</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">Document</th>
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">Where to Get</th>
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { doc: 'LCCM (Certificate of Legal Capacity to Contract Marriage)', from: 'Embassy of Japan in Manila / Consular Offices in Cebu or Davao', note: 'The Japanese applicant must apply and receive it in person' },
                  { doc: 'Passport (valid)', from: 'Own possession', note: '' },
                  { doc: 'Family register extract (koseki tohon) or Digital Family Register Pass', from: 'Municipal office or My Number Portal', note: 'Issued within 3 months' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-2 border border-gray-200 text-gray-700 font-medium">{row.doc}</td>
                    <td className="p-2 border border-gray-200 text-gray-600">{row.from}</td>
                    <td className="p-2 border border-gray-200 text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-sm font-bold text-gray-800 mb-3">[Filipino Partner] Documents for Marriage License Application</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">Document</th>
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">Where to Get</th>
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { doc: 'PSA Birth Certificate', from: 'PSA (Philippine Statistics Authority)', note: 'Certificate of Live Birth' },
                  { doc: 'CENOMAR (Certificate of No Marriage)', from: 'PSA', note: 'Confirms no existing marriage record' },
                  { doc: 'Passport', from: 'Own possession', note: '' },
                  { doc: 'Pre-marriage counseling certificate', from: 'Local government office', note: 'Required by some municipalities' },
                  { doc: "Parental consent / advice", from: 'Parents', note: 'Consent if under 21; advice if aged 21–25' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-2 border border-gray-200 text-gray-700 font-medium">{row.doc}</td>
                    <td className="p-2 border border-gray-200 text-gray-600">{row.from}</td>
                    <td className="p-2 border border-gray-200 text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-sm font-bold text-gray-800 mb-3">Documents for Japan Reportive Marriage Registration</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">Document</th>
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { doc: 'Marriage Certificate', note: 'At Japanese missions in the Philippines, either an LCR Certified True Copy or PSA-issued certificate is accepted' },
                  { doc: 'Marriage registration form (Japanese)', note: 'Available at your local municipal office' },
                  { doc: 'Japanese partner\'s family register extract', note: '' },
                  { doc: 'Japanese translation of the marriage certificate', note: 'Must include translator\'s signature (self-translation acceptable)' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-2 border border-gray-200 text-gray-700 font-medium">{row.doc}</td>
                    <td className="p-2 border border-gray-200 text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Common pitfalls */}
        <section className="rounded-2xl bg-amber-50 border border-amber-200 p-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <h2 className="text-base font-bold text-amber-900">Common Pitfalls</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                title: 'Applying for the LCCM at the wrong office',
                detail: 'For a Philippines-first marriage, the Japanese applicant applies in person at the Embassy of Japan in Manila or the Japanese Consular Offices in Cebu or Davao. A Japanese Legal Affairs Bureau, MOFA Apostille, and Philippine Embassy authentication are not part of this route.',
              },
              {
                title: 'Forgetting the 10-day Marriage License posting period',
                detail: 'The Marriage License cannot be issued until 10 days after filing. This is mandatory under Philippine law. Build it into your travel schedule.',
              },
              {
                title: 'PSA marriage certificate takes a long time to appear',
                detail: 'PSA registration can take time. However, the Embassy of Japan accepts an LCR Certified True Copy for the reportive marriage registration, so do not automatically postpone the Japan filing while waiting for PSA.',
              },
              {
                title: 'Name mismatch between PSA documents and Japanese passport',
                detail: 'The spelling of names in PSA documents may differ from the Japanese passport. Check carefully — discrepancies need to be resolved before submission.',
              },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-sm font-bold text-amber-800 mb-1">⚠ {item.title}</p>
                <p className="text-sm text-amber-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-4">Overall Timeline Estimate</h2>
          <div className="space-y-2">
            {[
              { phase: 'Obtain LCCM', duration: 'Normally 2 opening days', note: 'Apply in person at a Japanese mission in the Philippines' },
              { phase: 'Travel to Philippines / Apply for Marriage License', duration: '10-day posting period after application', note: '' },
              { phase: 'Ceremony and registration', duration: 'During Philippines stay', note: '' },
              { phase: 'Report to Japan (reportive registration)', duration: 'Within 3 months of marriage', note: 'An LCR Certified True Copy or PSA Marriage Certificate may be used at Japanese missions in the Philippines' },
              { phase: 'PSA registration / spouse visa preparation', duration: 'Varies by case', note: 'Confirm the document checklist with the receiving authority' },
            ].map((row, i) => (
              <div key={i} className="flex gap-3 items-start text-sm">
                <Clock className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="font-bold text-gray-800">{row.phase}</span>
                  <span className="text-gray-500 ml-2">— {row.duration}</span>
                  {row.note && <p className="text-xs text-gray-500 mt-0.5">{row.note}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/15">
            <p className="text-sm text-gray-700">
              <strong>Build the mandatory 10-day Marriage License posting period into your stay.</strong> PSA registration and immigration timelines vary, but the Japan reportive filing should not automatically be delayed while waiting for PSA.
            </p>
          </div>
        </section>

        <CtaBox
          title="We Retrieve Your Philippine Documents (PSA, CENOMAR, Apostille)"
          description="Whether you choose Japan-first or Philippines-first marriage, we can retrieve PSA documents and arrange DFA e-Apostille only when your receiving authority requires it."
          buttonText="Free Consultation"
          href="#contact"
          variant="primary"
          trustNote="Reply within 24 hours · Anonymous consultation OK · Cancel before start at no charge"
        />

        <FaqSection
          items={[
            { q: 'Does the Japanese partner need to travel to the Philippines?', a: 'Yes. Philippines-first marriage requires both parties to attend the ceremony in person, so the Japanese partner must travel to the Philippines. If you want to avoid traveling, consider Japan-first marriage.' },
            { q: 'How long does it take to get the PSA marriage certificate?', a: 'PSA registration time varies. It can affect later procedures, but the Embassy of Japan accepts an LCR Certified True Copy for the reportive marriage filing, so PSA reflection is not always a prerequisite for reporting the marriage to Japan.' },
            { q: 'Can the Marriage License 10-day posting period be skipped?', a: 'No. It is required by Philippine law and cannot be waived. Build it into your travel plans.' },
          ]}
          ctaTitle="Questions about the process? Let's talk."
          ctaButton="Contact Us"
        />

        <RelatedLinks links={[
          { path: '/en/japan-first-vs-philippines-first-marriage/', label: 'Japan-First vs Philippines-First Marriage — Comparison' },
          { path: '/en/international-marriage-guide/', label: 'International Marriage Document Service (CENOMAR, PSA, NBI)' },
          { path: '/en/psa-marriage-certificate/', label: 'PSA Marriage Certificate Retrieval' },
          { path: '/en/cenomar/', label: 'CENOMAR (Certificate of No Marriage) Service' },
          { path: '/en/spouse-visa-documents/', label: 'Spouse Visa Document Service' },
        ]} />
      </article>
    </PageLayout>
  );
}
