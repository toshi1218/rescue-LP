import React from 'react';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR } from '../lib/seoDate';

export default function GyoseishoshiVsDocServiceEn() {
  useMeta(
    `Administrative Scrivener vs Document Service [${SEO_YEAR}]`,
    `What does a Japanese 行政書士 handle vs. a Philippine document service? Find out when you need both — a guide for Filipino-Japanese couples.`,
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Administrative Scrivener vs Document Service' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Administrative Scrivener vs Document Acquisition Service — What\'s the Difference?',
          description: 'A guide explaining the different roles of Japanese administrative scriveners (gyoseishoshi) and Philippine document acquisition services for Filipino-Japanese international marriage and spouse visa.',
          url: 'https://ph-document.com/en/immigration-lawyer-vs-document-service/',
          dateModified: '2026-03-01',
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What does a Japanese administrative scrivener handle?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Administrative scriveners (行政書士, gyoseishoshi) are licensed to handle Japan-side filings: spouse visa applications (COE applications), preparing and submitting documents to Japanese immigration (入国管理局), and advising on Japan-side marriage registration procedures.',
              },
            },
            {
              '@type': 'Question',
              name: 'What does an administrative scrivener NOT handle?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Most administrative scriveners do not retrieve Philippine documents (PSA birth certificates, marriage certificates, CENOMAR) or handle DFA Apostille authentication. These are tasks for a Philippines-based document acquisition service.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do I need both a scrivener and a document service?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For the Japan spouse visa (COE) application, many couples use both: a document service to retrieve PSA documents and DFA Apostille from the Philippines, and an administrative scrivener to prepare and file the Japan-side COE application.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Administrative Scrivener vs Document Acquisition Service"
        badges={['Role Comparison', 'International Marriage', '2026 Guide']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="For Filipino-Japanese couples, two different types of service providers handle different parts of the process. Understanding which handles what prevents confusion and delays."
        points={[
          'Administrative scriveners (行政書士) are licensed for Japan-side filings — visa applications, COE applications, Japan immigration procedures',
          'Document acquisition services handle Philippine-side documents — PSA retrieval, DFA Apostille, Philippine document logistics',
          'Most scriveners do not retrieve Philippine documents; most document services do not handle Japan-side filings',
          'Many couples need both services at different stages of the process',
        ]}
        ctaText="Free Consultation"
      />

      {/* What scriveners handle */}
      <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-4">What an Administrative Scrivener (行政書士) Handles</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Administrative scriveners (gyoseishoshi, 行政書士) are a licensed professional category in Japan. They are authorized to prepare and submit applications to government offices on clients' behalf — including immigration authorities.
        </p>
        <div className="space-y-3">
          {[
            { title: 'Japan Spouse Visa — COE Application', detail: 'Preparing and filing the Certificate of Eligibility (在留資格認定証明書) application with Japanese immigration. This is the core step for bringing a Filipino spouse to Japan.' },
            { title: 'Japan-Side Marriage Registration Guidance', detail: 'Advising on submitting a marriage registration (婚姻届) at a Japanese city hall, including document requirements for the Japanese side.' },
            { title: 'Status of Residence Changes', detail: 'Applications to change or renew status of residence (在留資格変更・更新) once the foreign spouse is in Japan.' },
            { title: 'Other Japan Immigration Filings', detail: 'Re-entry permits, permanent residence applications, and other Japan immigration-related submissions requiring a licensed filing agent.' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl bg-blue-50 border border-blue-100 p-4">
              <p className="text-sm font-bold text-blue-900 mb-1">{item.title}</p>
              <p className="text-sm text-blue-800 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What scriveners do NOT handle */}
      <section className="mb-10 rounded-2xl bg-amber-50 border border-amber-200 p-6">
        <h2 className="text-base font-bold text-amber-900 mb-4">What Administrative Scriveners Typically Do NOT Handle</h2>
        <p className="text-sm text-amber-800 leading-relaxed mb-4">
          Most administrative scriveners focus on Japan-side procedures. The following tasks fall outside their typical scope:
        </p>
        <div className="space-y-3">
          {[
            { title: 'PSA Document Retrieval (Philippines)', detail: 'Obtaining PSA birth certificates, marriage certificates, CENOMAR, or other Philippine civil registry documents from Philippine government offices (PSA CRS outlets). This requires a local presence in the Philippines.' },
            { title: 'DFA Apostille Authentication (Philippines)', detail: 'Getting DFA Apostille stamps on PSA or other Philippine documents at the Department of Foreign Affairs. This also requires local coordination in the Philippines.' },
            { title: 'Philippine Document Logistics', detail: 'Coordinating pickup, packaging, and international shipping (DHL, etc.) of Philippine documents to Japan.' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl bg-white border border-amber-200 p-4">
              <p className="text-sm font-bold text-amber-900 mb-1">{item.title}</p>
              <p className="text-sm text-amber-800 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What document services handle */}
      <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-4">What a Philippine Document Acquisition Service Handles</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          A Philippine document service has local staff in the Philippines who can handle the Philippine side of the process on your behalf.
        </p>
        <div className="space-y-3">
          {[
            { title: 'PSA Document Retrieval', detail: 'Retrieving PSA birth certificates, marriage certificates, CENOMAR, and other documents from PSA CRS outlets in the Philippines (including Cebu and Manila). Handles appointments, counter submissions, and pickup.' },
            { title: 'DFA Apostille Authentication', detail: 'Obtaining DFA Apostille stamps on PSA documents and other Philippine public documents — required for submitting Philippine documents to Japanese institutions.' },
            { title: 'International Shipping', detail: 'Packing and shipping authenticated documents via DHL or similar carriers to your address in Japan.' },
            { title: 'LTO Driver\'s Record', detail: 'Retrieving the LTO Driver\'s Record (required for Japan license conversion) and obtaining DFA Apostille authentication.' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl bg-green-50 border border-green-100 p-4">
              <p className="text-sm font-bold text-green-900 mb-1">{item.title}</p>
              <p className="text-sm text-green-800 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* When to use both */}
      <section className="mb-10 rounded-2xl bg-gray-50 border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-4">When Do You Need Both?</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          For a complete Japan spouse visa process, most couples need both services at different stages:
        </p>
        <div className="space-y-4">
          <div className="rounded-xl bg-white border border-gray-100 p-4">
            <p className="text-sm font-bold text-gray-800 mb-2">Stage 1 — Philippine Documents (Document Service)</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>· Retrieve PSA marriage certificate and PSA birth certificate</li>
              <li>· Get DFA Apostille on both documents</li>
              <li>· Obtain CENOMAR if needed</li>
              <li>· Ship authenticated documents to Japan</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white border border-gray-100 p-4">
            <p className="text-sm font-bold text-gray-800 mb-2">Stage 2 — Japan Visa Application (Administrative Scrivener)</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>· Prepare COE (Certificate of Eligibility) application package</li>
              <li>· Compile Japan-side documents (guarantor documents, income proof, etc.)</li>
              <li>· Submit COE application to Japanese immigration</li>
              <li>· Advise on visa interview and subsequent steps</li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl bg-blue-50 border border-blue-100 p-3 mt-4">
          <p className="text-sm text-blue-800 leading-relaxed">
            <strong>Note:</strong> Some scriveners have referral relationships with Philippine document services, or vice versa. It is also common to use each service independently. What matters is understanding which role covers which task.
          </p>
        </div>
      </section>

      {/* Summary table */}
      <section className="mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-4">Quick Reference</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Task</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700">Scrivener</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700">Document Service</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { task: 'PSA birth/marriage certificate retrieval', scrivener: '✗', doc: '✓' },
                { task: 'DFA Apostille authentication', scrivener: '✗', doc: '✓' },
                { task: 'CENOMAR retrieval', scrivener: '✗', doc: '✓' },
                { task: 'LTO Driver\'s Record retrieval', scrivener: '✗', doc: '✓' },
                { task: 'International DHL shipping to Japan', scrivener: '✗', doc: '✓' },
                { task: 'Japan COE application filing', scrivener: '✓', doc: '✗' },
                { task: 'Spouse visa application guidance', scrivener: '✓', doc: '✗' },
                { task: 'Japan marriage registration guidance', scrivener: '✓', doc: '✗' },
                { task: 'Status of residence changes in Japan', scrivener: '✓', doc: '✗' },
              ].map((row, i) => (
                <tr key={i} className="bg-white">
                  <td className="px-4 py-3 text-gray-700">{row.task}</td>
                  <td className="px-4 py-3 text-center text-gray-500">{row.scrivener}</td>
                  <td className="px-4 py-3 text-center text-green-600 font-semibold">{row.doc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <CtaBox
        title="We Handle the Philippine Document Side"
        description="PSA documents, DFA Apostille, CENOMAR, LTO Driver's Records — our Cebu-based staff retrieves and authenticates Philippine documents on your behalf, then ships to Japan via DHL."
        buttonText="Free Consultation"
        href="#contact"
        variant="primary"
        trustNote="50% on start / 50% after documents ready for DHL — cancel before start at no charge"
      />

      <FaqSection
        items={[
          { q: 'What does a Japanese administrative scrivener handle?', a: "Administrative scriveners (行政書士) are licensed for Japan-side filings: spouse visa COE applications, Japan immigration submissions, and advising on Japan-side marriage registration. They handle the Japanese government side of the process." },
          { q: 'What do administrative scriveners NOT handle?', a: 'Most do not retrieve Philippine documents (PSA certificates, CENOMAR) or handle DFA Apostille authentication — these require local staff in the Philippines.' },
          { q: 'What does your document service cover?', a: 'We handle the Philippine side: PSA document retrieval (birth certificates, marriage certificates, CENOMAR), DFA Apostille authentication, and international shipping to Japan via DHL. We do not handle Japan-side visa applications.' },
          { q: 'Do I need both a scrivener and your service?', a: 'For a complete spouse visa process, many couples use both: our service for Philippine documents, and an administrative scrivener for the Japan COE application. They cover different parts of the same process.' },
          { q: 'Can you recommend an administrative scrivener?', a: 'We can discuss your situation and provide guidance on what type of professional you may need at each stage. Contact us for a free consultation.' },
        ]}
        ctaTitle="Questions about Philippine Document Retrieval? Let's talk."
        ctaButton="Contact Us"
      />

      <RelatedLinks links={[
        { path: '/en/apostille/', label: 'DFA Apostille Service' },
        { path: '/en/spouse-visa-document-checklist/', label: 'Spouse Visa Document Checklist' },
        { path: '/en/japan-first-vs-philippines-first-marriage/', label: 'Japan-First vs Philippines-First Marriage' },
        { path: '/en/personalized-roadmap/', label: 'Personalized Document Roadmap Service' },
        { path: '/en/psa-birth-certificate/', label: 'PSA Birth Certificate Retrieval' },
      ]} />
    </PageLayout>
  );
}
