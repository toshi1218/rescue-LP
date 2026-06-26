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
import { Globe, FileCheck, Users, AlertTriangle, CheckCircle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function NbiClearanceFromAbroadEn() {
  useMeta(
    `NBI Clearance from Abroad [${new Date().getFullYear()}] — 3 Ways OFWs Get It Without Flying Home`,
    'Need NBI Clearance while living abroad? OFWs have 3 options: online renewal, SPA agent, or Embassy Form No. 5. Learn requirements, steps, and processing time — or let us handle everything.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'NBI Clearance from Abroad' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ph-document.com/en/' },
            { '@type': 'ListItem', position: 2, name: 'NBI Clearance from Abroad', item: 'https://ph-document.com/en/nbi-clearance-from-abroad/' },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'NBI Clearance Retrieval from Abroad (OFW Service)',
          description: 'We obtain NBI Clearance for OFWs and Filipinos living abroad without them needing to return to the Philippines. Includes DFA Apostille and DHL worldwide shipping.',
          url: 'https://ph-document.com/en/nbi-clearance-from-abroad/',
          provider: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/en/',
          },
          areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'AE', 'MY', 'KR'],
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: '399',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '399',
              priceCurrency: 'USD',
              description: 'NBI retrieval + DFA Apostille + DHL shipping worldwide (renewal cases)',
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Can I get NBI Clearance without going back to the Philippines?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. There are three ways: (1) Online renewal through nbi.gov.ph if you have a previous clearance and no HIT, (2) SPA (Special Power of Attorney) agent who can appear at the NBI office on your behalf, (3) Philippine Embassy fingerprint via Form No. 5 for first-time applicants. A document service like ours handles the SPA agent route remotely.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is Form No. 5 at the Philippine Embassy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Form No. 5 is a fingerprint form issued by Philippine Embassies and Consulates for first-time NBI applicants abroad. After fingerprinting at the embassy, the form is sent to the NBI in Manila for processing. This option is available at most Philippine diplomatic posts worldwide.',
              },
            },
            {
              '@type': 'Question',
              name: 'Who qualifies for online NBI renewal?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'You qualify for online renewal if: you have a previous NBI Clearance issued after 2014 with no changes to personal information (name, date of birth, place of birth), and your previous clearance did not produce a HIT result. If any of these conditions apply, you will need to go through the biometric enrollment process.',
              },
            },
            {
              '@type': 'Question',
              name: 'What does SPA mean for NBI Clearance?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'SPA stands for Special Power of Attorney — a legal document that authorizes another person (your agent) to act on your behalf at the NBI. The SPA must be notarized and, if signed abroad, authenticated at the Philippine Embassy before it can be used in the Philippines.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does NBI Clearance take from abroad?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Processing time depends on the route: Online renewal takes 1–2 weeks plus shipping. SPA agent route takes 2–4 weeks plus shipping. Embassy Form No. 5 (first-time) takes 4–8 weeks due to the additional SPA authentication step. DFA Apostille adds 1–2 weeks. DHL shipping worldwide takes 3–5 business days.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does NBI Clearance need apostille for use abroad?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For most immigration and visa applications outside the Philippines, yes. Countries that have signed the Hague Apostille Convention (US, Canada, Australia, UK, Japan, UAE, etc.) accept NBI Clearance with DFA Apostille. Non-Hague countries require Embassy legalization instead.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="NBI Clearance from Abroad — How OFWs Get It Without Flying Home"
        badges={['3 Methods Explained', 'Online Renewal · SPA Agent · Embassy Form No. 5', 'Apostille + DHL Shipping Included']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="June 1, 2026"
      />

      <SummaryBlock
        conclusion="OFWs and Filipinos abroad have three ways to get NBI Clearance without returning to the Philippines — online renewal, SPA agent, or Embassy fingerprint."
        points={[
          'NBI Clearance is required for spouse visas, immigration, employment, and residency applications worldwide',
          'Online renewal is available if you have a prior NBI issued after 2014 with no personal info changes',
          'SPA (Special Power of Attorney) agent: someone in the Philippines handles it on your behalf',
          'Embassy Form No. 5: first-time applicants get fingerprinted at a Philippine Embassy in your country',
        ]}
        ctaText="Get Help — Free Consultation"
      />

      <SectionDivider variant="beige">
        <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-3">What Is NBI Clearance?</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            NBI Clearance is a criminal background check certificate issued by the Philippine{' '}
            <strong>National Bureau of Investigation (NBI)</strong>. It confirms whether the applicant
            has a pending criminal case or record in the Philippines.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            It is the Philippine equivalent of a police clearance or FBI background check — and is one
            of the most commonly required documents for immigration, visa, and employment applications
            worldwide.
          </p>
          <h3 className="text-sm font-bold text-gray-800 mb-2">Who Needs NBI Clearance?</h3>
          <ul className="space-y-1.5 mb-2">
            {[
              'K-1 (fiancé/e) visa applicants for the US',
              'CR-1 / IR-1 (spousal immigrant visa) applicants for the US',
              'Spouse visa / partner visa applicants for Canada, Australia, UK',
              'Japan spouse visa (在留資格「日本人の配偶者等」) applicants',
              'UAE, Qatar, Saudi Arabia work permit applicants',
              'Permanent residency and naturalization applicants worldwide',
              'OFWs applying for POLO OEC or overseas employment',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </SectionDivider>

      <FeatureList
        heading="3 Ways to Get NBI Clearance from Abroad"
        items={[
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Route 1: Online Renewal (nbi.gov.ph)',
            description: 'Available if you have a previous NBI Clearance issued after 2014 with no changes to your name, date of birth, or place of birth — and no HIT on your prior clearance. You apply online, pay via online banking or remittance, and designate a Philippine address for delivery.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Route 2: SPA Agent (Special Power of Attorney)',
            description: 'You authorize a trusted person in the Philippines (family, friend, or a document service like ours) to appear at the NBI office on your behalf. The SPA must be notarized abroad and authenticated at the Philippine Embassy before it can be used. This is the most flexible option for renewal and some first-time cases.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Route 3: Embassy Form No. 5 (First-Time Applicants)',
            description: 'First-time NBI applicants who have never been fingerprinted can go to the nearest Philippine Embassy or Consulate in their country for fingerprinting. The embassy submits Form No. 5 to NBI Manila. Processing takes 4–8 weeks from fingerprint submission.',
          },
        ]}
      />

      <CtaBox
        title="Not sure which route applies to you?"
        description="Tell us your situation — renewal or first-time, HIT or clean record — and we will confirm the fastest option before you commit."
        buttonText="Free Consultation"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Pay balance only after confirming document copies"
      />

      <SectionDivider variant="blue">
        <section className="mb-8 rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-4">Requirements by Route</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-primary mb-2">Online Renewal</h3>
              <ul className="space-y-1">
                {[
                  'Valid Philippine passport',
                  'Previous NBI Clearance number / year of issuance',
                  'Online payment method (GCash, Maya, bank transfer, or remittance)',
                  'Philippine delivery address (family member or forwarding service)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-primary mb-2">SPA Agent Route</h3>
              <ul className="space-y-1">
                {[
                  'Notarized SPA (Special Power of Attorney) naming your representative',
                  'Authentication of SPA at Philippine Embassy/Consulate in your country',
                  'Photocopy of your valid Philippine passport',
                  'Your representative\'s valid government-issued ID',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-primary mb-2">Embassy Form No. 5</h3>
              <ul className="space-y-1">
                {[
                  'Appointment at your nearest Philippine Embassy or Consulate',
                  'Valid Philippine passport (original + photocopy)',
                  'Completed NBI application form',
                  'Fingerprinting at the embassy (done during appointment)',
                  'Processing fee paid at the embassy',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </SectionDivider>

      <StepList
        heading="How the SPA Agent Process Works (Step by Step)"
        variant="visual"
        steps={[
          { title: 'Prepare and notarize the SPA', description: 'Draft a Special Power of Attorney naming your representative (or our team). Have it notarized by a notary public in your country.' },
          { title: 'Authenticate SPA at Philippine Embassy', description: 'Bring the notarized SPA to the nearest Philippine Embassy or Consulate for authentication (red ribbon). This confirms the notarization is valid for use in the Philippines.' },
          { title: 'Send SPA and documents to your representative', description: 'Ship or scan the authenticated SPA plus a copy of your passport to your representative in the Philippines. If using our service, we provide a secure receiving address.' },
          { title: 'NBI appointment and retrieval', description: 'Your representative attends the NBI appointment, submits biometrics on your behalf, and retrieves the clearance once issued (typically 1–3 weeks).' },
          { title: 'DFA Apostille + DHL shipping', description: 'Once issued, your NBI Clearance is authenticated at the DFA (if required) and shipped directly to your address via DHL Express with full tracking.' },
        ]}
      />

      <section className="max-w-2xl mx-auto px-4 mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight mb-4">Processing Time by Route</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="px-4 py-3 text-left font-bold">Route</th>
                <th className="px-4 py-3 text-left font-medium">NBI Processing</th>
                <th className="px-4 py-3 text-left font-medium">+ Apostille</th>
                <th className="px-4 py-3 text-left font-medium">+ DHL</th>
              </tr>
            </thead>
            <tbody>
              {[
                { route: 'Online Renewal', nbi: '1–2 weeks', apostille: '+1–2 weeks', dhl: '+3–5 days' },
                { route: 'SPA Agent', nbi: '2–4 weeks', apostille: '+1–2 weeks', dhl: '+3–5 days' },
                { route: 'Embassy Form No. 5', nbi: '4–8 weeks', apostille: '+1–2 weeks', dhl: '+3–5 days' },
              ].map((row, i) => (
                <tr key={row.route} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium text-gray-800">{row.route}</td>
                  <td className="px-4 py-3 text-gray-600">{row.nbi}</td>
                  <td className="px-4 py-3 text-gray-600">{row.apostille}</td>
                  <td className="px-4 py-3 text-gray-600">{row.dhl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">Times are estimates. HIT cases may add 2–4 weeks for resolution.</p>
      </section>

      <div className="max-w-2xl mx-auto px-4 mb-10">
        <div className="rounded-xl border-2 border-amber-400 bg-amber-50 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-900 text-sm mb-2">What Is a HIT?</p>
              <p className="text-sm text-amber-800 leading-relaxed">
                A HIT (labeled "MATCH FOUND" on NBI results) means someone with the same name has a
                record in the NBI database — it does <strong>not</strong> necessarily mean you have a
                criminal record. HIT cases require in-person verification at an NBI office to confirm
                identity and clear the record. This process adds 2–4 weeks. We handle HIT resolution
                on your behalf through our Philippine team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FaqSection
        items={[
          { q: 'Can I get NBI Clearance without going back to the Philippines?', a: 'Yes. You have three options: online renewal (if you have a prior clearance from 2014+ with no personal info changes and no HIT), SPA agent (authorized representative in the Philippines), or Embassy Form No. 5 (fingerprinting at your local Philippine Embassy for first-time applicants).' },
          { q: 'What is Form No. 5 at the Philippine Embassy?', a: 'Form No. 5 is a fingerprint form for first-time NBI applicants issued by Philippine Embassies abroad. After fingerprinting at the embassy, the form is forwarded to NBI Manila for processing. It is available at most Philippine diplomatic posts worldwide.' },
          { q: 'Who qualifies for online NBI renewal?', a: 'You qualify if you have a previous NBI Clearance issued after 2014, no changes to your name, date of birth, or place of birth, and your prior clearance had no HIT result.' },
          { q: 'What does SPA mean for NBI Clearance?', a: 'SPA stands for Special Power of Attorney — a legal document authorizing another person to act on your behalf at the NBI. It must be notarized in your country and authenticated at the Philippine Embassy before it can be used in the Philippines.' },
          { q: 'How long does NBI Clearance take from abroad?', a: 'Online renewal: 1–2 weeks. SPA agent route: 2–4 weeks. Embassy Form No. 5: 4–8 weeks. Add 1–2 weeks for DFA Apostille and 3–5 business days for DHL shipping worldwide.' },
          { q: 'Does NBI Clearance need apostille for use abroad?', a: 'For most immigration and visa applications, yes. Countries party to the Hague Apostille Convention (US, Canada, Australia, UK, Japan, UAE, etc.) accept NBI Clearance with DFA Apostille. Non-Hague countries require Embassy legalization instead.' },
        ]}
        ctaTitle="Tell us your situation and we will find the fastest path"
        ctaButton="Free Consultation"
      />

      <RelatedArticles
        items={[
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: 'Full-service NBI retrieval with DFA Apostille and DHL shipping worldwide.' },
          { href: '/en/nbi-apostille/', title: 'NBI Clearance Apostille Guide', description: 'When apostille is required, which countries need it, and how to get it.' },
          { href: '/en/nbi-renewal/', title: 'NBI Clearance Renewal Guide', description: 'Renewal vs. new application — who qualifies and how to renew from abroad.' },
          { href: '/en/nbi-hit/', title: 'NBI HIT Resolution', description: 'MATCH FOUND? We verify and resolve HIT cases through our Philippine team.' },
          { href: '/en/nbi-validity/', title: 'NBI Clearance Validity & Timing', description: 'How long NBI Clearance is valid and when to get it for your visa deadline.' },
        ]}
      />
    </PageLayout>
  );
}
