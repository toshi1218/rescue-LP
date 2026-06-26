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
import { Globe, FileCheck, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function NbiRenewalEn() {
  useMeta(
    `NBI Clearance Renewal [${new Date().getFullYear()}] — How to Renew from Outside the Philippines`,
    'Renewing NBI Clearance while abroad? Learn who qualifies for renewal vs. new application, the 5-step process, 3 options from overseas, and timing for K-1, CR-1, spouse visa, and PR applications.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'NBI Clearance Renewal' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ph-document.com/en/' },
            { '@type': 'ListItem', position: 2, name: 'NBI Clearance Renewal', item: 'https://ph-document.com/en/nbi-renewal/' },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How to Renew NBI Clearance from Outside the Philippines',
          description: 'Step-by-step guide for OFWs and Filipinos abroad to renew their NBI Clearance without returning to the Philippines.',
          step: [
            { '@type': 'HowToStep', position: 1, name: 'Confirm you qualify for renewal', text: 'Check that you have a previous NBI Clearance from 2014 or later, no changes to personal information, and no HIT on your prior clearance.' },
            { '@type': 'HowToStep', position: 2, name: 'Choose your renewal method', text: 'Select from online renewal (nbi.gov.ph), SPA agent in the Philippines, or Embassy-assisted Form No. 5.' },
            { '@type': 'HowToStep', position: 3, name: 'Prepare required documents', text: 'Gather your valid Philippine passport, previous NBI reference number, and any SPA documents if using an agent.' },
            { '@type': 'HowToStep', position: 4, name: 'Submit application and pay', text: 'Submit your renewal application online or through your representative. Pay the NBI fee via online banking or at the NBI office.' },
            { '@type': 'HowToStep', position: 5, name: 'Receive and apostille', text: 'Once issued, arrange DFA Apostille (if required) and have the original shipped to your address via DHL or your preferred courier.' },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Can I renew my NBI Clearance from abroad?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. If you have a previous NBI Clearance issued after 2014, no changes to your personal information (name, date of birth, place of birth), and no HIT on your prior clearance, you can renew without returning to the Philippines. Options include online renewal through nbi.gov.ph, an SPA (authorized) agent in the Philippines, or Embassy-assisted Form No. 5.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the difference between NBI Clearance renewal and a new application?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Renewal: applies if you have a prior NBI Clearance from 2014 or later with no personal info changes and no HIT. The NBI can verify your identity from the existing biometric record without new fingerprinting. New application: required for first-time applicants, those with name changes (marriage, correction), or those with a prior HIT. Requires biometric enrollment (fingerprinting) in person at an NBI office or Philippine Embassy.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long is NBI Clearance valid?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'NBI Clearance is valid for 1 year from the issue date. However, many immigration authorities (USCIS, IRCC, Home Affairs, UKVI, Japan Immigration) require it to have been issued within the 6 months before your application submission. Plan your renewal timing carefully.',
              },
            },
            {
              '@type': 'Question',
              name: 'What happens if my NBI Clearance expired before my visa was approved?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'You will need to get a new NBI Clearance and apostille. Most authorities will not accept an expired clearance even if your visa application was already pending. Start the renewal process as soon as possible and inform your immigration case worker about the updated document.',
              },
            },
            {
              '@type': 'Question',
              name: 'I got a HIT on my NBI renewal — what do I do?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A HIT on renewal means someone with the same name has a record in the NBI database. You need to appear in person at an NBI office in the Philippines to verify your identity and differentiate your record from the person with the matching name. We handle this on your behalf through our Philippine team.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I renew NBI Clearance online from abroad?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The NBI online renewal system (nbi.gov.ph) technically allows online payment and scheduling, but delivery is to a Philippine address only. If you have no Philippine address, you need a trusted contact to receive and forward the document, or use a document service. First-time applicants cannot use the online system.',
              },
            },
            {
              '@type': 'Question',
              name: 'When should I renew NBI Clearance for a K-1 or CR-1 visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'USCIS and the US Embassy typically require NBI Clearance issued within 1 year, but at the interview stage they prefer it issued within 6 months. For K-1: renew 2–3 months before your expected interview date. For CR-1: renew after receiving the NVC case number and scheduling your interview. Start the process at least 8 weeks before you need the document to account for NBI processing, DFA Apostille, and shipping time.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does renewing NBI Clearance require DFA Apostille?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For most immigration applications in Hague Convention countries (US, Canada, Australia, UK, Japan), yes. DFA Apostille is required regardless of whether it is a renewal or new application. We include apostille as standard in our service.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="NBI Clearance Renewal — How to Renew from Outside the Philippines"
        badges={['Renewal vs. New Application Explained', '3 Options from Abroad', 'Timing Guide by Visa Type']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="June 1, 2026"
      />

      <SummaryBlock
        conclusion="If you have a prior NBI Clearance from 2014 or later with no personal info changes, you can renew from abroad — no return trip to the Philippines needed."
        points={[
          'Renewal qualifies if your prior NBI is from 2014+, no name/info changes, and no HIT result',
          'First-time applicants, name changes, and HIT cases require in-person biometric enrollment',
          '3 options from abroad: online renewal, SPA agent, or Embassy Form No. 5',
          'Most immigration authorities require NBI issued within 6 months — time your renewal carefully',
        ]}
        ctaText="Check If You Qualify — Free Consultation"
      />

      <section className="max-w-2xl mx-auto px-4 mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight mb-4">Renewal vs. New Application</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="px-4 py-3 text-left font-bold">Criteria</th>
                <th className="px-4 py-3 text-center font-medium">Renewal</th>
                <th className="px-4 py-3 text-center font-medium">New Application</th>
              </tr>
            </thead>
            <tbody>
              {[
                { item: 'Prior NBI Clearance from 2014+', renewal: true, newApp: false },
                { item: 'No changes to name / DOB / birthplace', renewal: true, newApp: false },
                { item: 'No HIT on prior clearance', renewal: true, newApp: false },
                { item: 'In-person fingerprinting required', renewal: false, newApp: true },
                { item: 'Can be done fully online (nbi.gov.ph)', renewal: true, newApp: false },
                { item: 'Philippine Embassy fingerprint option', renewal: false, newApp: true },
                { item: 'Estimated processing time', renewal: '1–3 weeks', newApp: '4–8 weeks' },
              ].map((row, i) => (
                <tr key={row.item} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 text-gray-700 font-medium text-sm">{row.item}</td>
                  <td className="px-4 py-3 text-center">
                    {typeof row.renewal === 'boolean'
                      ? (row.renewal
                          ? <CheckCircle className="w-4 h-4 text-emerald-500 inline" />
                          : <XCircle className="w-4 h-4 text-red-400 inline" />)
                      : <span className="text-sm text-gray-600">{row.renewal}</span>}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {typeof row.newApp === 'boolean'
                      ? (row.newApp
                          ? <CheckCircle className="w-4 h-4 text-emerald-500 inline" />
                          : <XCircle className="w-4 h-4 text-red-400 inline" />)
                      : <span className="text-sm text-gray-600">{row.newApp}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <SectionDivider variant="beige">
        <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-3">Who Qualifies for Renewal?</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            You can renew your NBI Clearance (instead of applying as a first-timer) if <strong>all</strong> of the following apply:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              'You have a previous NBI Clearance issued after 2014 (when biometric enrollment began)',
              'Your legal name has not changed (no marriage, no correction, no alias)',
              'Your date of birth and place of birth on record are still correct',
              'Your previous NBI Clearance did not produce a HIT (MATCH FOUND) result',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed">
            If any of the above does not apply, you need a <strong>new application</strong> — which
            requires biometric fingerprinting in person at an NBI office or Philippine Embassy.
          </p>
        </section>
      </SectionDivider>

      <StepList
        heading="5 Steps to Renew NBI Clearance from Abroad"
        variant="visual"
        steps={[
          { title: 'Confirm you qualify for renewal', description: 'Verify that you have a prior NBI from 2014+, no personal info changes, and no HIT. If you are unsure, contact us and we will check your eligibility before you commit.' },
          { title: 'Choose your renewal method', description: 'Online renewal (nbi.gov.ph): you apply yourself but need a Philippine delivery address. SPA agent: authorize a representative in the Philippines. Embassy Form No. 5: fingerprinting at your local Philippine Embassy (for first-time, not renewal).' },
          { title: 'Prepare required documents', description: 'Renewal: valid Philippine passport and prior NBI reference number. SPA route: notarized and embassy-authenticated SPA plus passport copy.' },
          { title: 'Submit application and pay', description: 'Online: pay via GCash, Maya, or online banking and designate a Philippine delivery address. SPA agent route: your representative handles the submission at the NBI office on your behalf.' },
          { title: 'Receive NBI + arrange apostille + DHL shipping', description: 'Once your NBI Clearance is issued, arrange DFA Apostille (1–2 weeks) if required by your destination country. The original is then shipped to your overseas address via DHL Express with tracking.' },
        ]}
      />

      <FeatureList
        heading="3 Options for Renewal from Abroad"
        items={[
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Option 1: Online Renewal via nbi.gov.ph',
            description: 'Create or log in to your NBI account, complete the renewal form, pay online, and choose a Philippine delivery address. You (or a trusted contact) can then receive and forward the document. Fastest option — typically 1–2 weeks. Requires no SPA or embassy visit.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Option 2: SPA Agent in the Philippines',
            description: 'Sign a notarized Special Power of Attorney authorizing someone in the Philippines (family, friend, or our service) to appear at the NBI office on your behalf. Best if you have no Philippine address for online delivery, or if your case needs personal handling.',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Option 3: Philippine Consulate Assistance',
            description: 'Some Philippine Consulates and Embassies offer NBI assistance programs for OFWs. Availability and processing time vary significantly by location — wait times can be 3–6 months. Not recommended for urgent visa deadlines.',
          },
        ]}
      />

      <CtaBox
        title="We handle your NBI renewal entirely from the Philippines"
        description="No Philippines trip, no SPA paperwork on your end. We manage everything — NBI, Apostille, DHL shipping."
        buttonText="Free Consultation"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Pay balance only after confirming document copies · Progress updates included"
      />

      <section className="max-w-2xl mx-auto px-4 mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight mb-4">Timing Guide by Visa Type</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="px-4 py-3 text-left font-bold">Visa / Application</th>
                <th className="px-4 py-3 text-left font-medium">When to Renew</th>
                <th className="px-4 py-3 text-left font-medium">Authority Requirement</th>
              </tr>
            </thead>
            <tbody>
              {[
                { visa: 'US K-1 (fiancé/e) visa', timing: '2–3 months before interview', req: 'Within 1 year; 6 months preferred' },
                { visa: 'US CR-1 / IR-1 (spousal)', timing: 'After NVC scheduling', req: 'Within 1 year; current at interview' },
                { visa: 'Canada spousal PR', timing: 'When submitting PR application', req: 'Within 6 months of submission' },
                { visa: 'Australia partner visa', timing: 'At time of visa application', req: 'Within 12 months; often 6 months' },
                { visa: 'UK spouse / partner visa', timing: 'At time of application', req: 'Issued within 6 months' },
                { visa: 'Japan spouse visa', timing: 'Before submitting to Immigration', req: 'Within 1 year; recent preferred' },
                { visa: 'UAE work / residence permit', timing: 'When employer requests', req: 'Within 6 months' },
              ].map((row, i) => (
                <tr key={row.visa} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium text-gray-800">{row.visa}</td>
                  <td className="px-4 py-3 text-gray-600">{row.timing}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{row.req}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">Requirements may change. Always confirm with your specific immigration authority before submitting.</p>
      </section>

      <SectionDivider variant="blue">
        <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-3">What Happens If My NBI Shows a HIT?</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            A HIT (labeled "MATCH FOUND") on your NBI renewal means someone with the same name has a
            record in the NBI database. <strong>It does not necessarily mean you have a criminal
            record</strong> — it is common when you share a name with another Filipino.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            To clear a HIT, you must appear in person at an NBI office in the Philippines to provide
            additional biometrics and documentation proving your identity is separate from the person
            with the matching name.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            We handle HIT resolution on your behalf through our Philippine team. Once resolved, your
            clean NBI Clearance is issued and processed for apostille and shipping. HIT resolution
            typically adds 2–4 weeks to the total process.
          </p>
        </section>

        <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-3">Apostille and Authentication for Renewed NBI</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Whether your NBI is a renewal or a new application, the apostille requirement is the same:
          </p>
          <ul className="space-y-2">
            {[
              'Hague Convention countries (US, Canada, Australia, UK, Japan, UAE, etc.): DFA Apostille required',
              'Non-Hague countries (Saudi Arabia, Kuwait, China, etc.): Embassy legalization required instead',
              'DFA Apostille adds 1–2 weeks after NBI issuance (Regular: 10 working days, Expedited: 5 working days)',
              'The apostille must be on the original paper NBI Clearance — photocopies cannot be apostilled',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </SectionDivider>

      <FaqSection
        items={[
          { q: 'Can I renew my NBI Clearance from abroad?', a: 'Yes, if you have a prior NBI from 2014+, no changes to your name, DOB, or birthplace, and no HIT on your prior clearance. Options: online renewal (nbi.gov.ph), SPA agent in the Philippines, or Philippine Consulate assistance.' },
          { q: 'What is the difference between NBI renewal and a new application?', a: 'Renewal: prior NBI from 2014+, no info changes, no HIT. Takes 1–3 weeks. New application: first-time, name changed, or prior HIT. Requires biometric fingerprinting in person at NBI or Embassy. Takes 4–8 weeks.' },
          { q: 'How long is NBI Clearance valid?', a: 'NBI Clearance is valid for 1 year. Most immigration authorities require it issued within 6 months of your application or interview date. Plan your renewal timing accordingly.' },
          { q: 'What happens if my NBI Clearance expired before my visa was approved?', a: 'You will need a new NBI Clearance. Immigration authorities will not accept an expired one even if your application was already pending. Renew as soon as possible and inform your case worker.' },
          { q: 'I got a HIT on my NBI renewal — what do I do?', a: 'A HIT requires in-person verification at an NBI office in the Philippines to confirm your identity. We handle HIT resolution through our Philippine team without you returning home. This adds approximately 2–4 weeks.' },
          { q: 'Can I renew NBI Clearance online from abroad?', a: 'The nbi.gov.ph system allows online payment and scheduling, but delivery is to a Philippine address only. You need a trusted contact in the Philippines to receive and forward the document, or use a document service.' },
          { q: 'When should I renew NBI Clearance for a K-1 or CR-1 visa?', a: 'For K-1: renew 2–3 months before your expected interview. For CR-1: renew after receiving NVC case number when scheduling the interview. Allow 8 weeks total for NBI processing, Apostille, and DHL shipping.' },
          { q: 'Does renewing NBI Clearance require DFA Apostille?', a: 'For most immigration applications in Hague countries (US, Canada, Australia, UK, Japan), yes — whether renewal or new application. We include DFA Apostille as standard in our service.' },
        ]}
        ctaTitle="Not sure if you qualify for renewal? Tell us your case."
        ctaButton="Free Consultation"
      />

      <RelatedArticles
        items={[
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: 'Full-service NBI retrieval with DFA Apostille and DHL shipping worldwide.' },
          { href: '/en/nbi-clearance-from-abroad/', title: 'NBI Clearance from Abroad', description: '3 methods OFWs use to get NBI without flying home — online, SPA agent, Embassy.' },
          { href: '/en/nbi-apostille/', title: 'NBI Clearance Apostille Guide', description: 'When apostille is required, which countries need it, and how to get it from abroad.' },
          { href: '/en/nbi-hit/', title: 'NBI HIT Resolution', description: 'MATCH FOUND? We handle HIT verification and resolution through our Philippine team.' },
          { href: '/en/nbi-validity/', title: 'NBI Clearance Validity & Timing', description: 'Validity period and when to renew to meet your visa or immigration deadline.' },
        ]}
      />
    </PageLayout>
  );
}
