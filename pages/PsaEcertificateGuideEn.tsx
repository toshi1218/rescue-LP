import React from 'react';
import PageLayout from '../components/PageLayout';
import SummaryBlock from '../components/SummaryBlock';
import CtaBox from '../components/CtaBox';
import RelatedLinks from '../components/RelatedLinks';
import { useMeta } from '../lib/useMeta';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function PsaEcertificateGuideEn() {
  useMeta(
    'PSA eCertificate & eApostille: What You Need to Know Before Submitting [2026]',
    'Since March 2026, PSA Helpline only issues electronic documents (eApostille) to Hague member countries. Immigration and embassies still require paper originals. Learn how to get one.',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Home', href: '/en/' },
        { label: 'Guides', href: '/en/guides/' },
        { label: 'PSA eCertificate & eApostille Guide' },
      ]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'PSA eCertificate & eApostille: What You Need to Know Before Submitting [2026]',
          description:
            'Since March 2026, PSA Helpline only issues electronic documents (eApostille) to Hague member countries. Immigration and embassies still require paper originals. Learn how to get one.',
          datePublished: '2026-04-26',
          author: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
        },
      ]}
    >
      <SummaryBlock
        conclusion="Since March 16, 2026, PSA Helpline only delivers electronic documents (eCertificate + eApostille) to applicants in Hague Convention member countries. However, immigration agencies, local civil registries, and embassies in many countries still require paper originals (SECPA). If you need a paper original, self-application through PSA Helpline is no longer an option — you need an authorized local agent in the Philippines."
        points={[
          'DFA eApostille launched March 16, 2026. PSA Helpline now defaults to electronic delivery for Hague member countries — paper SECPA is no longer available through online application.',
          'USCIS, IRCC, UKVI, and many immigration bodies have not updated their guidelines to accept digital PSA documents. Submitting an eCertificate risks rejection or a request to resubmit.',
          'Paper originals (SECPA + physical apostille) still require in-person filing at PSA / DFA in the Philippines. Our local staff handle this on your behalf.',
        ]}
      />

      {/* Key Change */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">The Big Change: PSA Helpline Now Issues Electronic Only</h2>
        </div>
        <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="font-bold text-red-800 text-base">
              You can no longer get a paper PSA document by applying online.
            </p>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Before March 2026, you could apply through PSA Helpline and receive a physical SECPA document by international mail. That option is gone for applicants in Hague member countries.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Now when you apply online, you receive a <strong>PDF eCertificate with a digital eApostille</strong>. While this is legally valid under HCCH standards, many immigration offices and embassies abroad have <strong>not yet updated their internal procedures</strong> to accept it.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 w-1/3">Application Route</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-500">What You Get</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700">Acceptance Abroad</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr className="hover:bg-gray-50/50">
                <td className="px-4 py-3 font-medium text-gray-800">PSA Helpline (online)</td>
                <td className="px-4 py-3 text-center text-gray-600">PDF eCertificate + eApostille only</td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-flex items-center gap-1 text-amber-600 font-medium">
                    <AlertTriangle className="w-4 h-4" />Varies by office
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 bg-blue-50/30">
                <td className="px-4 py-3 font-medium text-gray-800">Our service (in-person PSA filing)</td>
                <td className="px-4 py-3 text-center text-gray-800 font-medium">Paper SECPA + physical apostille</td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-flex items-center gap-1 text-green-700 font-medium">
                    <CheckCircle className="w-4 h-4" />Accepted (established standard)
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Acceptance by Country */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">Acceptance Status by Country (as of April 2026)</h2>
        </div>
        <div className="space-y-3">
          {[
            {
              level: 'danger',
              country: 'United States (USCIS)',
              body: 'USCIS has not issued updated guidance explicitly accepting PSA eApostille. Spousal visa (IR-1/CR-1) and naturalization petitions continue to list PSA-issued civil documents — but digital-only delivery is untested in practice. Cases submitted with eCertificates have been flagged with RFEs (Requests for Evidence) asking for traditionally issued originals.',
            },
            {
              level: 'danger',
              country: 'Canada (IRCC)',
              body: 'IRCC spousal sponsorship and permanent residence applications require PSA-issued documents. No official update has been released accepting eApostille in place of physical apostille. Our clients have reported being asked to resubmit with paper originals.',
            },
            {
              level: 'warning',
              country: 'United Kingdom (UKVI)',
              body: 'UK Visas and Immigration guidance references PSA civil documents but has not explicitly addressed eApostille acceptance. Given the strict documentary requirements for UK settlement visas, submitting a paper original is the safer choice.',
            },
            {
              level: 'warning',
              country: 'Australia (Home Affairs)',
              body: 'Department of Home Affairs partner visa and citizenship applications specify PSA-authenticated documents. No official announcement has been made regarding eCertificate/eApostille. Pre-submission confirmation with the case officer is strongly advised.',
            },
            {
              level: 'warning',
              country: 'UAE, Malaysia, Middle East & Southeast Asia',
              body: 'Many labor-sending country requirements and residency permit processes still reference paper-based PSA documents. Embassy and consular acceptance of eApostille varies by post and has not been centrally updated.',
            },
          ].map(({ level, country, body }) => (
            <div
              key={country}
              className={`flex items-start gap-3 p-4 rounded-xl border ${
                level === 'danger' ? 'border-red-200 bg-red-50' : 'border-amber-100 bg-amber-50'
              }`}
            >
              {level === 'danger' ? (
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-bold text-gray-900 mb-1">{country}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Real Cases */}
      <section className="mb-10 rounded-2xl overflow-hidden border border-gray-200 border-l-4 border-l-red-700 bg-white shadow-sm">
        <div className="p-6 md:p-8">
          <div className="inline-block mb-3 px-3 py-1 bg-red-700 text-white text-xs font-bold rounded tracking-wide">
            Real Client Cases
          </div>
          <p className="text-base font-bold text-secondary mb-4">
            Since March 2026, we have received inquiries matching these patterns:
          </p>
          <ul className="space-y-4">
            {[
              {
                situation: 'Applied through PSA Helpline, received a PDF eCertificate. USCIS issued an RFE asking for a "PSA-issued original document."',
                outcome: 'Client engaged us to obtain a paper SECPA + physical apostille for resubmission.',
              },
              {
                situation: 'Used another service that delivered an eCertificate PDF. IRCC officer requested paper originals during spousal sponsorship review.',
                outcome: 'Client re-engaged our service for paper originals. Total processing time extended by 6 weeks.',
              },
              {
                situation: 'Attempted to print the eApostille PDF and submit it. The Philippine Embassy in their country refused it — printed eApostille is invalid.',
                outcome: 'Paper SECPA obtained through our local filing service.',
              },
            ].map((item, i) => (
              <li key={i} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-sm text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-gray-900">Situation: </span>
                  {item.situation}
                </p>
                <p className="text-sm text-green-700 leading-relaxed">
                  <span className="font-semibold">Outcome: </span>
                  {item.outcome}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-400">* Cases are anonymized and based on actual inquiries received.</p>
        </div>
      </section>

      <CtaBox
        title="Need a Paper PSA Document? We Handle It."
        description="Our local staff in the Philippines file directly at PSA and DFA counters to obtain paper SECPA originals with physical apostille — documents your immigration office will accept. Birth certificate, marriage certificate, CENOMAR, and apostille all handled."
        buttonText="Get a Free Quote"
        href="/en/contact/"
        trustNote="No upfront payment · Progress updates included · Cancel before we start"
        service="PSA Document Retrieval"
      />

      {/* Why Electronic Causes Problems */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">Why eCertificates Get Rejected</h2>
        </div>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            The DFA eApostille is <strong>legally valid under HCCH standards</strong> — the same treaty framework as physical apostilles. The problem is not legality. The problem is <strong>operational readiness</strong>.
          </p>
          <p>
            Immigration offices, embassies, and civil registrars in most countries built their checklists and staff training around <strong>physical documents</strong>. When an officer receives a QR code on a PDF instead of a stamped paper document, there is no standard procedure to verify and accept it. The path of least resistance is to ask for a resubmission.
          </p>
          <p>
            There is also a critical technical constraint: <strong>printing an eApostille invalidates it</strong>. The DFA eApostille is designed for digital transmission only. A printed copy is neither a valid electronic document nor a paper original — it falls into a gap that no office is equipped to accept.
          </p>
          <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800 mb-1">Bottom Line</p>
            <p className="text-sm text-gray-700">
              For immigration petitions, visa applications, and civil registration abroad, use a <strong>paper SECPA + physical apostille</strong> until the destination country explicitly confirms eCertificate acceptance. Do not gamble on a "maybe" during a critical application.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">eCertificate vs. Paper Original — At a Glance</h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 w-1/3">Factor</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-500">eCertificate + eApostille</th>
                <th className="text-center px-4 py-3 font-semibold text-primary">Paper SECPA + Physical Apostille</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Legal validity', 'Valid (HCCH standards)', 'Valid'],
                ['Self-service availability', 'Yes (PSA Helpline)', 'No — requires local filing in PH'],
                ['USCIS / IRCC acceptance', 'Unconfirmed — RFE risk', 'Accepted (established standard)'],
                ['Can you print and submit?', 'No — printing invalidates it', 'Yes'],
                ['Rejection / resubmission risk', 'High during transition period', 'Low'],
                ['Processing time if rejected', '+4–8 weeks to resubmit', 'N/A'],
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

      {/* FAQ */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: 'I already received a PDF eCertificate from PSA Helpline. Can I convert it to a paper original?',
              a: 'No. An eCertificate cannot be converted. A separate application must be filed in person at PSA in the Philippines to obtain a paper SECPA. Our local staff can do this on your behalf.',
            },
            {
              q: 'Can I just print the eCertificate PDF and submit that?',
              a: 'No. DFA eApostilles are designed for digital submission only. Printing one invalidates the apostille. A printed copy is not accepted as either an electronic document or a paper original by any office we are aware of.',
            },
            {
              q: 'My immigration office said they accept PSA documents. Does that mean eCertificate is fine?',
              a: 'Not necessarily. Most guidance referencing "PSA documents" was written before eApostille existed and assumes physical SECPA. Always confirm specifically: "Do you accept PSA eCertificate delivered as a PDF with DFA eApostille?" Get the answer in writing if possible.',
            },
            {
              q: 'Another service delivered an eCertificate PDF. Can I still get a paper original?',
              a: 'Yes. Contact us. We can obtain a paper SECPA + physical apostille independently of what another service delivered. The two documents are separate and can both exist.',
            },
            {
              q: 'How long does it take to get a paper SECPA through your service?',
              a: 'Standard processing is 3–5 weeks from the time we receive your request and documents. We provide regular progress updates throughout.',
            },
          ].map(({ q, a }, i) => (
            <div key={i} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <p className="font-bold text-gray-900 mb-2">Q. {q}</p>
              <p className="text-sm text-gray-700 leading-relaxed">A. {a}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBox
        title="Get Your Paper PSA Document — We File for You"
        description="Birth certificate, marriage certificate, CENOMAR, or death certificate — we obtain paper SECPA originals and apostille directly from PSA and DFA in the Philippines. Shipped internationally."
        buttonText="Contact Us Now"
        href="/en/contact/"
        trustNote="No upfront payment · English support · Progress updates"
        service="PSA Document Retrieval"
      />

      <RelatedLinks
        links={[
          { label: 'PSA Birth Certificate', path: '/en/psa-birth-certificate-cost/' },
          { label: 'DFA Apostille Guide', path: '/en/apostille/' },
          { label: 'PSA Marriage Certificate', path: '/en/psa-marriage-certificate/' },
          { label: 'CENOMAR (Certificate of No Marriage)', path: '/en/cenomar/' },
        ]}
      />
    </PageLayout>
  );
}
