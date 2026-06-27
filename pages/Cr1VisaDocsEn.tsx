import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { Heart, FileCheck, Globe, Clock, Calendar, AlertCircle } from 'lucide-react';
import RelatedArticles from '../components/RelatedArticles';
import { useMeta } from '../lib/useMeta';

export default function Cr1VisaDocsEn() {
  useMeta(
    'CR-1 / IR-1 Visa: Philippine Documents Checklist + Apostille [2026]',
    'Complete checklist of Philippine documents for a CR-1/IR-1 spouse visa: PSA Marriage & Birth Certificate, NBI Clearance + DFA Apostille for NVC. We retrieve and ship from the Philippines via DHL. Free quote.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'CR-1/IR-1 Spouse Visa Documents Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CR-1/IR-1 Spouse Visa Philippine Documents Retrieval Service',
        description: 'We retrieve all Philippine documents required for a CR-1/IR-1 spouse visa — PSA Marriage Certificate, Birth Certificate, NBI Clearance with DFA Apostille. NVC-ready. Ships to USA via DHL.',
        url: 'https://ph-document.com/en/cr1-visa-documents/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: { '@type': 'Country', name: 'US' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '899',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '899',
            priceCurrency: 'USD',
            description: 'CR-1/IR-1 Document Package — all documents + DFA Apostille + DHL to USA (all-inclusive)',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is the difference between CR-1 and IR-1?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'It depends on how long you have been married when the visa is issued: less than 2 years is CR-1 (your spouse gets a 2-year conditional green card and files Form I-751 later); 2 years or more is IR-1 (a 10-year green card with no conditions). USCIS assigns this automatically — and the Philippine documents required are the same for both.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does my Filipino spouse need an NBI Clearance for the CR-1/IR-1 visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. US immigrant visa applicants must provide a police certificate, and for the Philippines that is the NBI Clearance. We retrieve it and arrange DFA Apostille where required. If the NBI returns a "HIT", we can help resolve it.',
              },
            },
            {
              '@type': 'Question',
              name: 'My spouse was previously married. What extra documents are needed?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'You must prove the prior marriage legally ended — typically the annulment/divorce decree with the PSA annotation, or the former spouse\'s PSA Death Certificate. We can retrieve these alongside the main documents.',
              },
            },
            {
              '@type': 'Question',
              name: 'Where will the CR-1/IR-1 interview take place?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'At the US Embassy in Manila, which processes all immigrant visa cases for the Philippines. We make sure your PSA documents and DFA Apostille are ready before your interview date.',
              },
            },
            {
              '@type': 'Question',
              name: 'What Philippine documents does NVC require for CR-1/IR-1?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Typically PSA Marriage Certificate, Birth Certificate, and NBI Clearance with DFA Apostille. Requirements may vary. We confirm for your specific case.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case. All documents, DFA Apostille, and DHL shipping are included.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks total. We coordinate all documents together to minimize total time.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can you handle urgent cases?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Share your NVC deadline and we will confirm whether priority processing is feasible.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="CR-1/IR-1 Spouse Visa: Philippine Documents Retrieved and Shipped to the USA"
        badges={['Ships via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="June 27, 2026"
      />

      <SummaryBlock
        conclusion="Filing a CR-1 or IR-1 spouse visa? We retrieve all Philippine documents NVC-ready and ship to your door."
        points={[
          'PSA Marriage Certificate, Birth Certificate, NBI Clearance with DFA Apostille',
          'Documents formatted for NVC submission requirements',
          'We verify what your specific case needs before starting',
          'All-inclusive pricing with DHL Express shipping to USA',
        ]}
        ctaText="Free Consultation"
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-lg font-bold text-secondary mb-2">CR-1 vs IR-1: Which One Are You Filing?</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          Both are immigrant (spouse) visas that lead to a green card — the only difference is how long you have been married when the visa is issued. You do not choose between them: USCIS assigns CR-1 or IR-1 automatically. <strong>The Philippine documents required from your spouse are exactly the same for both.</strong>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-primary-dark" />
              <span className="font-bold text-sm text-secondary">CR-1 — Conditional Resident</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Married <strong>less than 2 years</strong> when the visa is issued. Your spouse enters the US on a <strong>2-year conditional green card</strong> and must later file Form I-751 to remove conditions and get the 10-year card.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span className="font-bold text-sm text-secondary">IR-1 — Immediate Relative</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Married <strong>2 years or more</strong> when the visa is issued. Your spouse receives a <strong>10-year green card</strong> with no conditions — no I-751 step required later.
            </p>
          </div>
        </div>
      </div>

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'US citizen or LPR filing a CR-1 or IR-1 petition',
            description: 'NVC requires PSA Marriage Certificate, Birth Certificate, and NBI Clearance with DFA Apostille from your Filipino spouse. We handle all of it.',
          },
          {
            icon: <Clock className="w-4 h-4" />,
            title: 'Have an NVC submission or embassy interview date',
            description: 'We work backward from your target date to ensure all documents arrive valid and on time.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure exactly what NVC requires',
            description: 'We confirm the required documents and format for your specific CR-1/IR-1 case before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm NVC requirements before we start"
        description="Marriage Certificate, Birth Certificate, NBI Clearance — we verify what your specific NVC case needs and quote everything together."
        buttonText="Talk to Us"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage · Pay balance only after confirming document copies"
      />

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA Marriage Certificate, Birth Certificate, NBI Clearance retrieval',
            description: 'We retrieve all required CR-1/IR-1 documents in one coordinated flow from our Cebu office.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille authentication',
            description: 'We arrange DFA Apostille for all documents that require it. Paper originals provided.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your US address',
            description: 'All documents shipped together with tracking. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your CR-1/IR-1 case status and your NVC submission or interview deadline.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles Marriage Certificate, Birth Certificate, NBI Clearance, and DFA Apostille.' },
          { title: 'DHL delivery to the USA', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-lg font-bold text-secondary mb-4">Where Your Philippine Documents Fit in the CR-1/IR-1 Process</h2>
        <ol className="space-y-4">
          {[
            { n: '1', t: 'I-130 approved by USCIS', d: 'The US petitioner files Form I-130. Once approved, the case is forwarded to the National Visa Center (NVC).' },
            { n: '2', t: 'NVC stage — civil documents submitted', d: 'You pay fees and submit Form DS-260 and civil documents. This is the stage where your spouse\'s PSA Birth Certificate, PSA Marriage Certificate, and NBI Clearance (the Philippine police certificate) are required.' },
            { n: '3', t: 'Documentarily complete → US Embassy Manila', d: 'After NVC confirms the case is complete, it is sent to the US Embassy in Manila, which handles all immigrant visa interviews for the Philippines.' },
            { n: '4', t: 'Medical exam + interview', d: 'Your spouse completes a medical exam at an embassy-accredited clinic (such as St. Luke\'s) and attends the interview in Manila with the original documents on hand.' },
          ].map(({ n, t, d }) => (
            <li key={n} className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-secondary text-white font-bold text-sm flex items-center justify-center">{n}</div>
              <div>
                <p className="font-bold text-sm text-secondary leading-snug">{t}</p>
                <p className="text-xs text-gray-600 leading-relaxed mt-0.5">{d}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-700 leading-relaxed">
            <strong className="text-amber-800">Important:</strong> PSA documents must be the official copy printed on PSA Security Paper (SECPA) — not a plain photocopy. We retrieve the correct PSA originals and arrange DFA Apostille where your submission requires it. Documents also have validity windows, so we time retrieval to your NVC submission or interview date.
          </p>
        </div>
      </div>

      <FaqSection
        items={[
          { q: 'What is the difference between CR-1 and IR-1?', a: 'It depends on how long you have been married when the visa is issued: less than 2 years is CR-1 (your spouse gets a 2-year conditional green card and files Form I-751 later); 2 years or more is IR-1 (a 10-year green card with no conditions). USCIS assigns this automatically — and the Philippine documents required are the same for both.' },
          { q: 'Does my Filipino spouse need an NBI Clearance for the CR-1/IR-1 visa?', a: 'Yes. US immigrant visa applicants must provide a police certificate, and for the Philippines that is the NBI Clearance. We retrieve it and arrange DFA Apostille where required. If the NBI returns a "HIT", we can help resolve it.' },
          { q: 'My spouse was previously married. What extra documents are needed?', a: 'You must prove the prior marriage legally ended — typically the annulment/divorce decree with the PSA annotation, or the former spouse\'s PSA Death Certificate. We can retrieve these alongside the main documents.' },
          { q: 'Where will the CR-1/IR-1 interview take place?', a: 'At the US Embassy in Manila, which processes all immigrant visa cases for the Philippines. We make sure your PSA documents and DFA Apostille are ready before your interview date.' },
          { q: 'What Philippine documents does NVC require for CR-1/IR-1?', a: 'Typically PSA Marriage Certificate, Birth Certificate, and NBI Clearance with DFA Apostille. Requirements may vary. We confirm for your specific case.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. All documents, DFA Apostille, and DHL shipping are included.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total. We coordinate all documents together to minimize total time.' },
          { q: 'Can you handle urgent cases?', a: 'Yes. Share your NVC deadline and we will confirm whether priority processing is feasible.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Complete checklist for CR-1, K-1, and all other visa types.' },
          { href: '/en/psa-marriage-certificate/', title: 'PSA Marriage Certificate Service', description: 'PSA Marriage Certificate + DFA Apostille + DHL worldwide.' },
          { href: '/en/cenomar-vs-marriage-certificate/', title: 'CENOMAR vs. Marriage Certificate', description: 'CR-1 needs the Marriage Certificate — not CENOMAR. Find out why.' },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: 'NBI Clearance + DFA Apostille + DHL worldwide. HIT cases handled.' },
        ]}
      />
    </PageLayout>
  );
}
