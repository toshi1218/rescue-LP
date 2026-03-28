import React from 'react';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function MarriageOrderEn() {
  useMeta(
    'Japan-First vs Philippines-First Marriage [2026] — Which Should You Choose?',
    'Comparing Japan-first and Philippines-first marriage for Filipino-Japanese couples. Understand the steps, required documents, timelines, pros and cons of each approach before deciding.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'International Marriage Guide', href: '/en/international-marriage-guide/' }, { label: 'Japan-First vs Philippines-First Marriage' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Japan-First vs Philippines-First Marriage — Steps and Documents Compared [2026]',
          description: 'Which country should you register your marriage in first? Compare procedures, documents, timelines, and pros/cons for Filipino-Japanese couples.',
          url: 'https://ph-document.com/en/japan-first-vs-philippines-first-marriage/',
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'If my Filipino partner is already in Japan, which approach is more common?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'When the Filipino partner is already in Japan, most couples choose Japan-first marriage since no travel to the Philippines is needed. However, after the marriage is registered, a spouse visa change-of-status application will be required, so plan the overall timeline accordingly.',
              },
            },
            {
              '@type': 'Question',
              name: 'With Philippines-first marriage, can we get the PSA marriage certificate right away?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. Even after the marriage is registered in the Philippines, it takes time for the record to be reflected in PSA. This is typically 2–4 months in Metro Manila and 6+ months in provincial areas. This affects the timeline for reporting the marriage to Japan and applying for the spouse visa.',
              },
            },
            {
              '@type': 'Question',
              name: 'What Philippine documents are needed for Japan-first marriage?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Generally, a CENOMAR (Certificate of No Marriage) and a PSA Birth Certificate from PSA, each with DFA Apostille. The exact requirements may vary by municipal office — confirm in advance.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Japan-First or Philippines-First Marriage — Which to Choose?"
        badges={['Compare Both Approaches', 'Required Documents Listed', 'Decide by Your Situation']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="March 1, 2026"
      />

      <article className="space-y-10">

        {/* Introduction */}
        <section className="rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-3">The order you register your marriage changes everything</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            When a Filipino and Japanese couple decides to marry, the first major question is: register in Japan first (Japan-first marriage) or in the Philippines first (Philippines-first marriage)?
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Both result in a legally valid marriage, but the required documents, sequence of steps, and overall timeline differ significantly. The right choice also depends on where your partner is currently living.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            This page compares the steps, required documents, pros and cons of both approaches.
          </p>
        </section>

        {/* Japan-first */}
        <section className="rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-4">Japan-First Marriage: Register at a Japanese Municipal Office First</h2>

          <h3 className="text-sm font-bold text-gray-800 mb-3">Steps</h3>
          <ol className="space-y-3 mb-6">
            {[
              { step: '1', title: 'Obtain Philippine documents', detail: 'Get a CENOMAR (Certificate of No Marriage) and PSA Birth Certificate from PSA, each with DFA Apostille. A document service can handle this without you traveling to the Philippines.' },
              { step: '2', title: 'Submit the marriage registration at a Japanese municipal office', detail: 'Submit the marriage registration form, family register extract (koseki), and Philippine documents (CENOMAR, PSA Birth Certificate + DFA Apostille). Translation requirements may vary by office.' },
              { step: '3', title: 'Report the marriage to the Philippine Embassy or Consulate', detail: 'After the marriage is registered in Japan, submit a "Report of Marriage" to the Philippine Embassy or Consulate in Japan. This records the marriage on the Philippine side as well.' },
              { step: '4', title: 'Proceed with spouse visa application', detail: 'If your partner entered Japan on a short-stay or tourist visa, a change-of-status application is required to convert to a spouse visa.' },
            ].map(({ step, title, detail }) => (
              <li key={step} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 text-primary font-bold text-xs flex items-center justify-center mt-0.5">{step}</span>
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-1">{title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="text-sm font-bold text-gray-800 mb-3">Required Philippine Documents</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">Document</th>
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">Issuer</th>
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">Apostille</th>
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { doc: 'CENOMAR (Certificate of No Marriage)', issuer: 'PSA', apo: 'Generally required', note: 'Many offices require within 6 months of issue' },
                  { doc: 'PSA Birth Certificate', issuer: 'PSA', apo: 'Generally required', note: 'Certificate of Live Birth' },
                  { doc: 'Passport copy', issuer: 'Filipino applicant', apo: 'Not required', note: 'Must be valid' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-2 border border-gray-200 text-gray-700 font-medium">{row.doc}</td>
                    <td className="p-2 border border-gray-200 text-gray-600">{row.issuer}</td>
                    <td className="p-2 border border-gray-200 text-gray-600">{row.apo}</td>
                    <td className="p-2 border border-gray-200 text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-200">
            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-green-800 mb-1">Advantages of Japan-First</p>
              <ul className="text-sm text-green-700 space-y-1">
                <li>· No travel to the Philippines required (a document service can handle the Philippine documents)</li>
                <li>· No waiting for PSA marriage certificate to be reflected</li>
                <li>· Marriage is recorded in the Japanese family register</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 mt-3">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-800 mb-1">Points to Note</p>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>· After registering in Japan, a separate Report of Marriage to the Philippine Embassy is required</li>
                <li>· Translation format requirements may vary by municipal office</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Philippines-first */}
        <section className="rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-4">Philippines-First Marriage: Register the Marriage in the Philippines First</h2>

          <h3 className="text-sm font-bold text-gray-800 mb-3">Steps</h3>
          <ol className="space-y-3 mb-6">
            {[
              { step: '1', title: 'Japanese partner obtains LCCM (Certificate of Legal Capacity to Contract Marriage)', detail: 'Issued by the Legal Affairs Bureau in Japan → apostille at the Ministry of Foreign Affairs → authentication at the Philippine Embassy in Japan. This certificate proves the Japanese national is legally eligible to marry.' },
              { step: '2', title: 'Apply for Marriage License in the Philippines', detail: 'Apply at the Local Civil Registrar in the Philippines. After filing, there is a mandatory 10-day public posting period before the marriage can proceed.' },
              { step: '3', title: 'Wedding ceremony (solemnization)', detail: 'A person with solemnizing authority (priest, judge, or mayor) officiates the marriage ceremony and vows.' },
              { step: '4', title: 'Obtain PSA Marriage Certificate', detail: 'After the marriage is registered, it takes time to be reflected in PSA records. Typically 2–4 months in Metro Manila, 6+ months in provincial areas.' },
              { step: '5', title: 'Report the marriage to a Japanese municipal office', detail: 'Within 3 months of returning to Japan, submit a reportive marriage registration with the PSA Marriage Certificate attached at your local municipal office.' },
            ].map(({ step, title, detail }) => (
              <li key={step} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/15 text-secondary font-bold text-xs flex items-center justify-center mt-0.5">{step}</span>
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-1">{title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-200">
            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-green-800 mb-1">Advantages of Philippines-First</p>
              <ul className="text-sm text-green-700 space-y-1">
                <li>· Can invite Philippine family and relatives to the wedding ceremony</li>
                <li>· After registering in the Philippines, the Japan registration is only a reportive filing</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 mt-3">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-800 mb-1">Points to Note</p>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>· LCCM takes time to obtain (Legal Affairs Bureau → Ministry of Foreign Affairs → Embassy authentication)</li>
                <li>· Marriage License requires a 10-day public posting period</li>
                <li>· <strong>PSA Marriage Certificate may take 2–6+ months to be reflected</strong>, delaying the spouse visa application</li>
                <li>· Travel to the Philippines is required</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-4">Which to Choose — Decision Guide by Situation</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-white">
                  <th className="text-left p-3 border border-gray-200 font-bold text-gray-700">Situation</th>
                  <th className="text-center p-3 border border-gray-200 font-bold text-primary">Japan-First</th>
                  <th className="text-center p-3 border border-gray-200 font-bold text-secondary">Philippines-First</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { situation: 'Partner is in Japan', japan: '◎ No travel needed', ph: '△ Philippines trip required' },
                  { situation: 'Partner is in the Philippines', japan: '○ Documents can be retrieved remotely', ph: '○ Can complete procedures together in person' },
                  { situation: 'Want spouse visa as soon as possible', japan: '◎ No PSA reflection wait — easier to move faster', ph: '△ PSA marriage cert may take months' },
                  { situation: 'Want a ceremony with family in the Philippines', japan: '△ Japan registration only', ph: '◎ Full wedding with Philippine family' },
                  { situation: 'Schedule is tight', japan: '◎ No travel or 10-day posting required', ph: '✕ Marriage License posting + PSA wait' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 border border-gray-200 text-gray-700 font-medium">{row.situation}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-center">{row.japan}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-center">{row.ph}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ The above is a general guide. Additional documents may be required if there is a history of divorce or remarriage.</p>
        </section>

        {/* Common requirements */}
        <section className="rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-3">Required for Both Approaches</h2>
          <ul className="space-y-2">
            {[
              'Retrieve and verify Philippine PSA documents (CENOMAR, PSA Birth Certificate)',
              'Confirm that names and dates of birth match your Japanese passport exactly',
              'DFA Apostille (generally required for Japanese submission destinations)',
              'Proceed with spouse visa (residence status) application after marriage is registered',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                <strong>Document retrieval typically takes 1–2 months.</strong> Start early and work backwards from your target marriage registration date.
              </p>
            </div>
          </div>
        </section>

        <CtaBox
          title="Not sure which approach fits your situation? Let's talk."
          description="Share your partner's current location, visa status, and schedule — we'll help you map out the right steps and documents."
          buttonText="Free Consultation"
          href="#contact"
          variant="primary"
          trustNote="Reply within 24 hours · Anonymous consultation OK · Cancel before start at no charge"
        />

        <FaqSection
          items={[
            { q: 'If my Filipino partner is already in Japan, which approach is more common?', a: 'When the Filipino partner is already in Japan, most couples choose Japan-first marriage since no travel is needed. However, after registration, a change-of-status application to spouse visa is required — factor this into your overall plan.' },
            { q: 'With Philippines-first, can we get the PSA marriage certificate right away?', a: 'No. Even after the marriage is registered in the Philippines, it takes time to be reflected in PSA records — typically 2–4 months in Metro Manila, 6+ months in provincial areas. This can delay the spouse visa application.' },
            { q: 'What Philippine documents are needed for Japan-first marriage?', a: 'Generally a CENOMAR and PSA Birth Certificate from PSA, each with DFA Apostille. Exact requirements may vary by municipal office — confirm in advance.' },
          ]}
          ctaTitle="Let us help you figure out what's needed for your situation."
          ctaButton="Contact Us"
        />

        <RelatedLinks links={[
          { path: '/en/international-marriage-guide/', label: 'International Marriage Document Service (CENOMAR, PSA, NBI)' },
          { path: '/en/getting-married-in-philippines/', label: 'Getting Married in the Philippines — Complete Guide' },
          { path: '/en/cenomar/', label: 'CENOMAR (Certificate of No Marriage) Service' },
          { path: '/en/spouse-visa-documents/', label: 'Spouse Visa Document Service' },
        ]} />
      </article>
    </PageLayout>
  );
}
