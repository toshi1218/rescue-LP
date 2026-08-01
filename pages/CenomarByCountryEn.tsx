import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import RelatedArticles from '../components/RelatedArticles';
import { useMeta } from '../lib/useMeta';

export default function CenomarByCountryEn() {
  useMeta(
    'CENOMAR Requirements by Country [2026] — Complete List',
    'CENOMAR apostille and authentication requirements for every country: USA, Canada, Australia, UK, UAE, Germany, New Zealand, Korea, Japan and more. Updated 2026.',
  );

  const countries = [
    {
      region: 'North America',
      items: [
        {
          country: '🇺🇸 United States',
          visaTypes: 'K-1 Fiancé Visa, CR-1/IR-1 Spouse Visa, IR-2',
          apostille: 'Physical DFA Apostille required',
          validity: '6 months from issuance',
          notes: 'Requirements differ by visa stage. Confirm the current USCIS, NVC, or embassy checklist before ordering; do not assume an Apostille is required.',
          authority: 'USCIS / National Visa Center (NVC)',
        },
        {
          country: '🇨🇦 Canada',
          visaTypes: 'Spousal Sponsorship (IRCC), Common-law Partner',
          apostille: 'Authentication required (Apostille or DFA certification)',
          validity: '6 months from issuance',
          notes: 'IRCC accepts DFA Apostille. Requirements may vary slightly by province stream. We verify the correct format before starting.',
          authority: 'Immigration, Refugees and Citizenship Canada (IRCC)',
        },
      ],
    },
    {
      region: 'Oceania',
      items: [
        {
          country: '🇦🇺 Australia',
          visaTypes: 'Partner Visa (subclass 309/100, 820/801)',
          apostille: 'DFA Apostille required',
          validity: '6 months from issuance',
          notes: 'Authentication requirements vary by visa subclass and document. Confirm the current Home Affairs checklist before ordering.',
          authority: 'Department of Home Affairs',
        },
        {
          country: '🇳🇿 New Zealand',
          visaTypes: 'Partner of a New Zealander Visa, Resident Visa',
          apostille: 'DFA Apostille required',
          validity: '6 months from issuance',
          notes: 'Immigration New Zealand follows Hague Convention — Apostille is accepted as the standard authentication.',
          authority: 'Immigration New Zealand',
        },
      ],
    },
    {
      region: 'Europe',
      items: [
        {
          country: '🇬🇧 United Kingdom',
          visaTypes: 'UK Spouse Visa, Fiancé(e) Visa',
          apostille: 'DFA Apostille required',
          validity: '6 months from issuance',
          notes: 'Authentication requirements vary by route and document. For PSA e-Certificates used in Apostille Convention countries, DFA issues an electronic e-Apostille.',
          authority: 'UK Visas and Immigration (UKVI)',
        },
        {
          country: '🇩🇪 Germany',
          visaTypes: 'Ehegattennachzug (Spouse Visa), National Visa',
          apostille: 'DFA Apostille required',
          validity: '6 months from issuance',
          notes: 'German consulates and the Ausländerbehörde require apostilled Philippine documents. Some offices may also require a certified German translation.',
          authority: 'German Consulate / Ausländerbehörde',
        },
        {
          country: '🇮🇹 Italy',
          visaTypes: 'Family Reunification Visa, Spouse Visa',
          apostille: 'DFA Apostille + Italian translation required',
          validity: '6 months from issuance',
          notes: 'Italian authorities require both apostille and a certified Italian translation. We handle the apostille; translation is arranged separately.',
          authority: 'Italian Consulate / Questura',
        },
        {
          country: '🇳🇴🇸🇪🇩🇰 Scandinavia (Norway, Sweden, Denmark)',
          visaTypes: 'Family Immigration, Spouse/Partner Visa',
          apostille: 'DFA Apostille required',
          validity: '6 months from issuance',
          notes: 'All Schengen/EEA countries follow Hague Convention. Apostille is universally accepted. Confirm specific requirements with the consulate.',
          authority: 'Respective national immigration authority',
        },
      ],
    },
    {
      region: 'Middle East & Gulf',
      items: [
        {
          country: '🇦🇪 UAE (United Arab Emirates)',
          visaTypes: 'Marriage Registration, Residency, OFW documentation',
          apostille: 'DFA Apostille accepted',
          validity: 'Varies by emirate',
          notes: 'Filipino nationals residing or working in the UAE often need CENOMAR for marriage registration at the Philippine consulate or local civil authorities. Requirements vary by emirate.',
          authority: 'Philippine Consulate General / UAE local authority',
        },
        {
          country: '🇶🇦 Qatar',
          visaTypes: 'Marriage Registration, OFW documentation',
          apostille: 'DFA Apostille accepted',
          validity: 'Varies',
          notes: 'OFWs in Qatar may need CENOMAR for marriage registration or employer documentation. Confirm current requirements with the Philippine Embassy in Doha.',
          authority: 'Philippine Embassy in Qatar',
        },
        {
          country: '🇸🇦 Saudi Arabia',
          visaTypes: 'Marriage Registration, OFW documentation',
          apostille: 'DFA Apostille accepted',
          validity: 'Varies',
          notes: 'Requirements vary by region. Philippine Overseas Labor Office (POLO) may also require CENOMAR for certain processes.',
          authority: 'Philippine Embassy / POLO',
        },
        {
          country: '🇧🇭 Bahrain, 🇰🇼 Kuwait, 🇴🇲 Oman',
          visaTypes: 'Marriage Registration, OFW documentation',
          apostille: 'DFA Apostille accepted',
          validity: 'Varies',
          notes: 'Gulf countries generally accept DFA Apostille for Philippine documents. Always confirm with the Philippine consulate in-country before submitting.',
          authority: 'Philippine Consulate / Embassy',
        },
      ],
    },
    {
      region: 'Asia',
      items: [
        {
          country: '🇰🇷 South Korea',
          visaTypes: 'F-6 Marriage Migrant Visa',
          apostille: 'DFA Apostille required',
          validity: '6 months from issuance',
          notes: 'Korean Immigration Service requires apostilled CENOMAR for F-6 visa applications. Korea is a member of the Hague Apostille Convention.',
          authority: 'Korea Immigration Service (HiKorea)',
        },
        {
          country: '🇯🇵 Japan',
          visaTypes: 'Spouse or Child of Japanese National (配偶者等), Certificate of Eligibility',
          apostille: 'Authentication required (Apostille or DFA certification)',
          validity: '6 months from issuance',
          notes: 'Japan Immigration Services Agency requires authenticated Philippine documents. Japan joined the Hague Apostille Convention — apostilled documents are now accepted as of 2024.',
          authority: 'Japan Immigration Services Agency / Japanese Consulate',
        },
      ],
    },
  ];

  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'CENOMAR Requirements by Country' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'CENOMAR Requirements by Country [2026] — Complete List',
          description: 'CENOMAR apostille and authentication requirements for every country: USA, Canada, Australia, UK, UAE, Germany, New Zealand, Korea, Japan and more.',
          url: 'https://ph-document.com/en/cenomar-requirements-by-country/',
          datePublished: '2026-05-01',
          dateModified: '2026-05-01',
          author: { '@type': 'Organization', name: 'IGRS Inc.' },
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Does CENOMAR need an apostille for US visa applications?',
              acceptedAnswer: { '@type': 'Answer', text: 'Not necessarily. Requirements differ by visa type and stage. Confirm the current USCIS, NVC, or embassy checklist before ordering.' },
            },
            {
              '@type': 'Question',
              name: 'Is apostille required for CENOMAR in Canada?',
              acceptedAnswer: { '@type': 'Answer', text: 'Not in every case. IRCC requirements vary by application and document. Confirm the current checklist before ordering.' },
            },
            {
              '@type': 'Question',
              name: 'Does Japan accept apostilled CENOMAR?',
              acceptedAnswer: { '@type': 'Answer', text: 'Yes, as of 2024 Japan joined the Hague Apostille Convention. Apostilled Philippine documents are now accepted for spouse visa (配偶者等) applications at Japanese consulates.' },
            },
            {
              '@type': 'Question',
              name: 'How long is CENOMAR valid for visa applications?',
              acceptedAnswer: { '@type': 'Answer', text: 'Most countries require CENOMAR issued within 6 months of the visa application submission date. Some countries have stricter requirements — always confirm with the receiving authority.' },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="CENOMAR Requirements by Country — Complete 2026 Guide"
        badges={['15+ Countries Covered', 'Updated May 2026', 'Apostille & Authentication']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="May 1, 2026"
      />

      <div className="max-w-2xl mx-auto px-4 mb-8">
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          A CENOMAR (Certificate of No Marriage Record) may be requested in spouse, partner, or marriage procedures. <strong>Each authority has different document and authentication requirements</strong>, and requirements can vary even within the same country.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          This guide covers the CENOMAR requirements for all major destination countries. We verify the specific requirements for your case before starting — free consultation.
        </p>
      </div>

      <SummaryBlock
        conclusion="We retrieve CENOMAR from PSA, get DFA Apostille, and ship to your address worldwide. We confirm the exact requirement for your country before starting."
        points={[
          'Physical DFA Apostille included — required by most countries',
          'We verify country-specific requirements before ordering',
          'DHL international shipping to 15+ countries',
          'Free consultation — no commitment until you approve the quote',
        ]}
        ctaText="Free Consultation"
      />

      <div className="max-w-3xl mx-auto px-4 mb-10">
        {countries.map((region) => (
          <div key={region.region} className="mb-10">
            <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">{region.region}</h2>
            <div className="space-y-6">
              {region.items.map((item) => (
                <div key={item.country} className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-3">{item.country}</h3>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div><span className="text-gray-500">Visa type:</span> <span className="text-gray-800">{item.visaTypes}</span></div>
                    <div><span className="text-gray-500">Authentication:</span> <span className="font-medium text-primary">{item.apostille}</span></div>
                    <div><span className="text-gray-500">Validity:</span> <span className="text-gray-800">{item.validity}</span></div>
                    <div><span className="text-gray-500">Authority:</span> <span className="text-gray-800">{item.authority}</span></div>
                    <div className="mt-2 text-gray-600 bg-gray-50 rounded p-3">{item.notes}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <CtaBox
        title="Not Sure What Your Country Requires?"
        description="Requirements change. We verify the current requirement for your specific case — country, visa type, and receiving authority — before you pay anything."
        buttonText="Ask Us for Free"
        href="#contact"
        variant="primary"
        trustNote="Free consultation · No commitment · We confirm before you pay"
        whatsappHref="https://wa.me/639452833727"
      />

      <FaqSection
        items={[
          { q: 'Does CENOMAR need an apostille for US visa applications?', a: 'Not necessarily. Requirements differ by visa type and stage. Confirm the current USCIS, NVC, or embassy checklist before ordering.' },
          { q: 'Is apostille required for CENOMAR in Canada?', a: 'Not in every case. IRCC requirements vary by application and document. Confirm the current checklist before ordering.' },
          { q: 'Does Japan accept apostilled CENOMAR?', a: 'Yes, as of 2024 Japan joined the Hague Apostille Convention. Apostilled Philippine documents are now accepted for spouse visa (配偶者等) applications.' },
          { q: 'How long is CENOMAR valid for visa applications?', a: 'Most countries require CENOMAR issued within 6 months of submission. Some authorities have stricter requirements — always confirm before ordering.' },
          { q: 'Is CENOMAR authenticated with an e-Apostille or a physical apostille?', a: 'Since March 2026, DFA issues only an electronic e-Apostille for PSA documents like CENOMAR — a physical apostille sticker is no longer available. Whether a given authority accepts the e-Apostille varies, so we confirm the specific requirement for your case before processing.' },
          { q: 'What if my country is not on this list?', a: 'Contact us. We handle CENOMAR retrieval and shipping to any country worldwide. Requirements vary — we research and confirm before starting.' },
        ]}
        ctaTitle="Ready to Get Started?"
        ctaButton="Free Consultation"
      />

      <RelatedArticles
        items={[
          { href: '/en/cenomar/', title: 'CENOMAR Service', description: 'All-inclusive CENOMAR retrieval + Apostille + DHL shipping worldwide.' },
          { href: '/en/cenomar-apostille/', title: 'Does CENOMAR Need Apostille?', description: 'When DFA Apostille is required and when it is not.' },
          { href: '/en/cenomar-validity/', title: 'CENOMAR Validity & Timing', description: 'CENOMAR is valid for 6 months. We time retrieval to meet your deadline.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Full checklist of Philippine documents needed per visa type.' },
        ]}
      />
    </PageLayout>
  );
}
