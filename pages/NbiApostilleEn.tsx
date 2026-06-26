import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SectionDivider from '../components/SectionDivider';
import RelatedArticles from '../components/RelatedArticles';
import { FileCheck, Globe, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function NbiApostilleEn() {
  useMeta(
    `NBI Clearance Apostille [${new Date().getFullYear()}] — DFA Authentication for Use Abroad`,
    'Need NBI Clearance apostilled for a US visa, Canada PR, or Australian immigration? Learn which countries require DFA apostille, the 4-step process, fees, and common mistakes to avoid.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'NBI Clearance Apostille' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ph-document.com/en/' },
            { '@type': 'ListItem', position: 2, name: 'NBI Clearance Apostille', item: 'https://ph-document.com/en/nbi-apostille/' },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How to Get DFA Apostille on NBI Clearance',
          description: 'Step-by-step guide to getting DFA Apostille authentication on your NBI Clearance for use in visa and immigration applications abroad.',
          step: [
            { '@type': 'HowToStep', position: 1, name: 'Obtain NBI Clearance', text: 'Get your NBI Clearance issued by the National Bureau of Investigation in the Philippines.' },
            { '@type': 'HowToStep', position: 2, name: 'Submit to DFA Authentication Division', text: 'Bring or send your NBI Clearance to the DFA Authentication Division in Manila, Cebu, or another DFA office.' },
            { '@type': 'HowToStep', position: 3, name: 'Choose processing speed', text: 'Select Regular (10 working days) or Expedited (5 working days) processing.' },
            { '@type': 'HowToStep', position: 4, name: 'Receive apostilled document', text: 'DFA attaches the apostille certificate to your NBI Clearance. The document is now valid for use in Hague Convention member countries.' },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is DFA Apostille for NBI Clearance?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'DFA Apostille is an authentication certificate attached to your NBI Clearance by the Philippine Department of Foreign Affairs (DFA). It certifies that the NBI Clearance is a genuine document issued by a legitimate Philippine government agency. Countries that signed the 1961 Hague Convention accept apostilled documents without additional Embassy legalization.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does NBI Clearance always need apostille for use abroad?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For most immigration and visa applications in Hague Convention countries (US, Canada, Australia, UK, Japan, UAE, etc.), yes. Some authorities may accept NBI Clearance without apostille, but it is safer to include it. For non-Hague countries (Saudi Arabia, Kuwait, China, etc.), you need Embassy legalization instead of apostille.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does DFA Apostille take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Regular processing: 10 working days (approximately 2 weeks). Expedited processing: 5 working days (approximately 1 week). Processing starts from the date of submission to DFA, not from when your NBI Clearance was issued.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I get DFA Apostille from abroad without going to the Philippines?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. A document service or representative in the Philippines can submit your NBI Clearance to the DFA Authentication Division on your behalf. We handle DFA Apostille submission and retrieval as part of our NBI service. The apostilled document is then shipped to you via DHL.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the difference between apostille and Embassy legalization?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Apostille: used for countries that signed the 1961 Hague Apostille Convention. A single apostille stamp from the DFA is sufficient — no Embassy involvement needed. Embassy legalization: used for non-Hague countries. Requires authentication by both the DFA AND the destination country\'s Embassy in Manila.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does DFA Apostille cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'DFA government fees: PHP 100 per document for Regular processing, PHP 200 for Expedited. Our all-inclusive service (NBI retrieval + DFA Apostille + DHL shipping) starts from USD 399.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does DFA Apostille expire?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The DFA Apostille itself does not expire. However, your NBI Clearance is only valid for 1 year from the issue date. Most immigration authorities also require the NBI Clearance to have been issued within 6 months of your application. Time the retrieval and apostille process to meet your specific deadline.',
              },
            },
            {
              '@type': 'Question',
              name: 'What are the most common mistakes with NBI Apostille?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Common mistakes: (1) Getting apostille on a photocopy instead of the original NBI Clearance — DFA only apostilles originals. (2) Requesting apostille for a non-Hague country — those countries require Embassy legalization. (3) Apostilling before the NBI Clearance is fully processed — DFA requires a completed, clean clearance.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can a HIT NBI Clearance be apostilled?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. The DFA will not apostille an NBI Clearance that shows a HIT (MATCH FOUND). The HIT must be resolved first and a clean clearance issued before apostille can be obtained. We handle HIT resolution as part of our service.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="NBI Clearance Apostille — DFA Authentication for Use Abroad"
        badges={['Hague Convention Countries', '4-Step Process Explained', 'We Handle Everything from Abroad']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="June 1, 2026"
      />

      <SummaryBlock
        conclusion="DFA Apostille authenticates your NBI Clearance for use in visa and immigration applications worldwide. Required for most Hague Convention countries including the US, Canada, Australia, UK, and Japan."
        points={[
          'DFA Apostille certifies that your NBI Clearance is a genuine Philippine government document',
          'Required for immigration in US, Canada, Australia, UK, Japan, and 100+ other Hague countries',
          'Non-Hague countries (Saudi Arabia, China, Kuwait) need Embassy legalization instead',
          'Regular processing: 10 working days · Expedited: 5 working days',
        ]}
        ctaText="Get NBI Clearance + Apostille — Free Consultation"
      />

      <SectionDivider variant="beige">
        <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-3">What Is DFA Apostille?</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            DFA Apostille is a certification issued by the Philippine{' '}
            <strong>Department of Foreign Affairs (DFA)</strong> under the{' '}
            <strong>1961 Hague Apostille Convention</strong>. It authenticates that your NBI Clearance
            is a genuine document issued by a legitimate Philippine government agency.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Countries that are party to the Hague Convention accept apostilled Philippine documents
            without needing further authentication by their own embassy. This makes the apostille the
            standard authentication method for immigration documents used internationally.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            The apostille is a physical certificate attached to (or printed on the back of) your NBI
            Clearance. <strong>It must be obtained on the original document</strong> — photocopies
            cannot be apostilled.
          </p>
        </section>
      </SectionDivider>

      <section className="max-w-2xl mx-auto px-4 mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight mb-4">Which Countries Require DFA Apostille?</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="px-4 py-3 text-left font-bold">Country / Authority</th>
                <th className="px-4 py-3 text-center font-medium">Apostille</th>
                <th className="px-4 py-3 text-center font-medium">Embassy Legalization</th>
                <th className="px-4 py-3 text-left font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                { country: 'United States (USCIS)', apostille: true, embassy: false, note: 'K-1, CR-1, IR-1, I-130' },
                { country: 'Canada (IRCC)', apostille: true, embassy: false, note: 'Spousal PR, Express Entry' },
                { country: 'Australia (Home Affairs)', apostille: true, embassy: false, note: 'Partner visa, PR' },
                { country: 'United Kingdom (UKVI)', apostille: true, embassy: false, note: 'Spouse / partner visa' },
                { country: 'Japan (Immigration)', apostille: true, embassy: false, note: 'Spouse visa, naturalization' },
                { country: 'UAE (GDRFA)', apostille: true, embassy: false, note: 'Work permit, residence' },
                { country: 'Saudi Arabia', apostille: false, embassy: true, note: 'Non-Hague — Embassy legalization required' },
                { country: 'Kuwait', apostille: false, embassy: true, note: 'Non-Hague — Embassy legalization required' },
                { country: 'China', apostille: false, embassy: true, note: 'Non-Hague — Embassy legalization required' },
              ].map((row, i) => (
                <tr key={row.country} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium text-gray-800">{row.country}</td>
                  <td className="px-4 py-3 text-center">
                    {row.apostille
                      ? <CheckCircle className="w-4 h-4 text-emerald-500 inline" />
                      : <XCircle className="w-4 h-4 text-red-400 inline" />}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {row.embassy
                      ? <CheckCircle className="w-4 h-4 text-emerald-500 inline" />
                      : <XCircle className="w-4 h-4 text-red-400 inline" />}
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">Always confirm the exact requirement with your immigration authority before submitting.</p>
      </section>

      <StepList
        heading="4 Steps to Get DFA Apostille on Your NBI Clearance"
        variant="visual"
        steps={[
          { title: 'Obtain NBI Clearance (original)', description: 'Your NBI Clearance must be issued as an original paper document by the NBI. If you have a HIT result, it must be resolved and a clean clearance issued first. Photocopies and e-certificates cannot be apostilled.' },
          { title: 'Submit to DFA Authentication Division', description: 'Bring or send the original NBI Clearance to the DFA Authentication Division. Offices are in Manila (DFA Aseana, DFA Pasay), Cebu, Davao, and other regional offices. Walk-in or by appointment depending on the office.' },
          { title: 'Choose processing speed and pay the fee', description: 'Regular processing: 10 working days (PHP 100). Expedited processing: 5 working days (PHP 200). Pay at the DFA cashier or through authorized online payment channels.' },
          { title: 'Receive apostilled NBI Clearance', description: 'DFA attaches the apostille certificate to your NBI Clearance. The document is now certified for international use in all Hague Convention countries. If using our service, we ship it to you via DHL Express.' },
        ]}
      />

      <CtaBox
        title="We handle DFA Apostille from the Philippines on your behalf"
        description="Living abroad? Our Cebu team submits, tracks, and retrieves your apostille. Ships directly to you via DHL."
        buttonText="Free Consultation"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Pay balance only after confirming document copies"
      />

      <SectionDivider variant="blue">
        <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-4">Arranging Apostille from Abroad</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            If you are outside the Philippines, you cannot visit the DFA yourself. Your options are:
          </p>
          <div className="space-y-4">
            {[
              {
                title: 'Option A: Authorized Representative (SPA)',
                body: 'Someone in the Philippines with a valid SPA can submit and retrieve your apostille. The SPA must specifically authorize this action. If you do not have a trusted contact in the Philippines, a document service can act as your representative.',
              },
              {
                title: 'Option B: Document Service (Recommended)',
                body: 'A Philippine document service handles NBI retrieval, DFA Apostille submission and retrieval, and international DHL shipping — all in one. No Philippines contacts needed. We provide progress updates at each stage.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-1">{title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-4">DFA Apostille Fees</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Processing Type</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">DFA Gov. Fee</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-600">Turnaround</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-800">Regular</td>
                  <td className="px-4 py-3 text-gray-600">PHP 100 / document</td>
                  <td className="px-4 py-3 text-gray-600">10 working days</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">Expedited</td>
                  <td className="px-4 py-3 text-gray-600">PHP 200 / document</td>
                  <td className="px-4 py-3 text-gray-600">5 working days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">Our all-inclusive service (NBI + DFA Apostille + DHL shipping) from USD 399. Contact us for exact pricing.</p>
        </section>
      </SectionDivider>

      <FeatureList
        heading="Common Mistakes to Avoid"
        items={[
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Apostilling a photocopy instead of the original',
            description: 'DFA only apostilles original documents. A photocopy, scan, or printed PDF of your NBI Clearance cannot receive apostille. Always work with the original paper document.',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Requesting apostille for a non-Hague country',
            description: 'Saudi Arabia, Kuwait, China, and other non-Hague countries do not recognize apostille. For those destinations, you need Embassy legalization (DFA authentication + destination Embassy stamp in Manila).',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Apostilling before the NBI HIT is resolved',
            description: 'If your NBI result shows a HIT, the DFA will not apostille the document. The HIT must be resolved first and a clean clearance issued. Attempting to apostille a HIT clearance wastes time and money.',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Not timing the apostille to your visa deadline',
            description: 'Your NBI Clearance is valid for 1 year, but immigration authorities typically require it issued within 6 months. If you apostille too early and your application is delayed, you may need to get a new NBI and apostille.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Confusing apostille with Embassy authentication',
            description: 'These are two different processes. Apostille is for Hague countries and is handled entirely by the DFA. Embassy authentication is for non-Hague countries and requires both DFA and the destination Embassy in Manila.',
          },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What is DFA Apostille for NBI Clearance?', a: 'DFA Apostille is a certificate issued by the Philippine Department of Foreign Affairs that authenticates your NBI Clearance as a genuine government document. It is accepted by all 1961 Hague Convention member countries without additional Embassy verification.' },
          { q: 'Does NBI Clearance always need apostille for use abroad?', a: 'For most immigration and visa applications in Hague countries (US, Canada, Australia, UK, Japan, UAE), yes. For non-Hague countries (Saudi Arabia, Kuwait, China), you need Embassy legalization instead.' },
          { q: 'How long does DFA Apostille take?', a: 'Regular processing: 10 working days (≈ 2 weeks). Expedited: 5 working days (≈ 1 week). Processing starts from the date of DFA submission.' },
          { q: 'Can I get DFA Apostille from abroad without going to the Philippines?', a: 'Yes. A document service or authorized representative in the Philippines can submit and retrieve the apostille on your behalf. We include DFA Apostille as standard in our NBI service and ship the original to you via DHL.' },
          { q: 'What is the difference between apostille and Embassy legalization?', a: 'Apostille (Hague countries): DFA issues a single authentication certificate, accepted worldwide in 120+ countries. Embassy legalization (non-Hague countries): requires both DFA authentication AND the destination country\'s Embassy stamp in Manila — a two-step process.' },
          { q: 'How much does DFA Apostille cost?', a: 'DFA government fee: PHP 100 (Regular) or PHP 200 (Expedited) per document. Our all-inclusive service (NBI + DFA Apostille + DHL shipping) starts from USD 399.' },
          { q: 'Does DFA Apostille expire?', a: 'The apostille itself does not expire, but your NBI Clearance is valid for 1 year. Immigration authorities typically require NBI issued within 6 months of your application. Time the process carefully.' },
          { q: 'What are the most common mistakes with NBI Apostille?', a: '(1) Apostilling a photocopy — DFA only apostilles originals. (2) Using apostille for a non-Hague country — those need Embassy legalization. (3) Apostilling before a HIT is resolved — DFA will reject HIT documents.' },
          { q: 'Can a HIT NBI Clearance be apostilled?', a: 'No. A HIT (MATCH FOUND) result means the clearance is not clean. DFA will not apostille it. The HIT must be resolved and a clean NBI Clearance issued before apostille can be obtained.' },
        ]}
        ctaTitle="Questions about your specific case? We are happy to help."
        ctaButton="Free Consultation"
      />

      <RelatedArticles
        items={[
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: 'Full-service NBI retrieval with DFA Apostille and DHL shipping worldwide.' },
          { href: '/en/nbi-clearance-from-abroad/', title: 'NBI Clearance from Abroad', description: '3 methods OFWs use to get NBI without flying home — online, SPA agent, Embassy.' },
          { href: '/en/nbi-renewal/', title: 'NBI Clearance Renewal Guide', description: 'Renewal vs. new application — who qualifies and how to renew from outside the Philippines.' },
          { href: '/en/nbi-hit/', title: 'NBI HIT Resolution', description: 'MATCH FOUND on your NBI? We verify and resolve HIT cases through our Philippine team.' },
          { href: '/en/nbi-validity/', title: 'NBI Clearance Validity & Timing', description: 'How long NBI is valid and when to get it to meet your visa deadline.' },
        ]}
      />
    </PageLayout>
  );
}
