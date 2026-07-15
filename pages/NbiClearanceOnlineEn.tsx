import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import RelatedArticles from '../components/RelatedArticles';
import { FileCheck, Globe, AlertTriangle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function NbiClearanceOnlineEn() {
  useMeta(
    'NBI Clearance Online: How to Get It from Abroad [2026]',
    'NBI online renewal is available for Filipinos abroad — but only for those with a clean record and an existing NBI account. First-timers and HIT cases still need in-person processing or a document service.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'NBI Clearance Online' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'NBI Clearance Online: How to Get It from Abroad',
          description: 'The NBI online renewal system allows returning OFWs to renew their NBI Clearance without visiting an NBI office — but with important limitations. This guide explains who qualifies, how to apply, and when to use a document service instead.',
          url: 'https://ph-document.com/en/nbi-clearance-online/',
          publisher: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/en/',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Can I get NBI Clearance online from abroad?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Partial yes. NBI online renewal is available if you already have an NBI account with a clean record. However, first-time applicants and those with a HIT (matching court record) must appear in person for fingerprints — at a Philippine Embassy/Consulate in your country, or at an NBI office in the Philippines. A document service can handle renewal cases remotely and guide first-time applicants through embassy fingerprinting, then add the DFA Apostille and ship the original worldwide.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is NBI online renewal?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'NBI online renewal is an online system at clearance.nbi.gov.ph that allows Filipinos with an existing NBI account and a clean record to renew their NBI Clearance without visiting an NBI office. The renewed clearance is mailed to a Philippine address.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does NBI Clearance take to process?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Online renewal for clean records: approximately 7–10 business days for delivery within the Philippines. For HIT cases requiring in-person appearance: 15–30 business days or more depending on the NBI office. Including DFA Apostille and international shipping, plan 4–6 weeks total.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long is NBI Clearance valid?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'NBI Clearance is valid for 1 year from the date of issue. For immigration purposes, most authorities require it to be issued within 6 months of your application or submission date.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does NBI Clearance need DFA Apostille?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For most immigration purposes outside the Philippines, yes. DFA Apostille authenticates NBI Clearance for use in Hague Convention member countries. We confirm the exact requirement for your destination country before starting.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is an NBI HIT?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'An NBI HIT occurs when your name matches a record in the NBI database — court cases, criminal records, or even name matches with other individuals. A HIT requires the applicant to appear at an NBI office in person; this cannot be done by a representative. We advise on the resolution process and handle the DFA Apostille and shipping once the clearance is issued.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="NBI Clearance Online: What You Can and Can't Do from Abroad"
        badges={['OFW-Friendly Guide', 'HIT Cases Handled', 'Ships Worldwide via DHL']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 2026"
      />

      <SummaryBlock
        conclusion="NBI online renewal works for Filipinos with an existing account and a clean record. First-timers and HIT cases still need in-person processing — or a document service."
        points={[
          'NBI online at clearance.nbi.gov.ph — renewal only, for clean records',
          'First-time applicants must appear in person at an NBI office',
          'HIT cases require in-person appearance regardless of renewal status',
          'Renewal cases handled remotely; first-time applicants guided through embassy fingerprinting',
        ]}
        ctaText="Let Us Handle Your NBI Clearance"
      />

      <div className="max-w-2xl mx-auto px-4 my-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">How NBI Online Works</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          The NBI online system at{' '}
          <strong>clearance.nbi.gov.ph</strong>{' '}
          allows Filipinos with an existing NBI account to renew their clearance without visiting an NBI office.
          After completing the online form and paying the fee, the clearance is mailed to a Philippine address.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          <strong>Who can use NBI online renewal:</strong>
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4 pl-2">
          <li>Filipinos who have applied for NBI Clearance before (existing account)</li>
          <li>Those whose previous clearance came back with no HIT (clean record)</li>
          <li>Those with a Philippine mailing address to receive the document</li>
        </ul>
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Who cannot use NBI online renewal:</strong>
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-2 pl-2">
          <li>First-time applicants — must appear in person</li>
          <li>Those with a previous HIT — must appear in person regardless</li>
          <li>Those without a Philippine mailing address for delivery</li>
        </ul>
      </div>

      <FeatureList
        heading="NBI Online vs. In-Person: Which Applies to You?"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Online renewal (clean record, existing account)',
            description: 'Apply at clearance.nbi.gov.ph, pay online, and wait for delivery to a Philippine address. Approximately 7–10 business days. You still need someone to receive and forward it internationally.',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'In-person required (first-time or HIT)',
            description: 'First-time applicants and those with a HIT must appear in person for fingerprints — at a Philippine Embassy/Consulate in your country, or at an NBI office in the Philippines. This step must be done by the applicant; a representative cannot do biometric enrollment for you.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Document service (renewal remote / first-time guided)',
            description: 'For renewal cases we process the NBI remotely. For first-time applicants we guide you through embassy fingerprinting. Either way, once the clearance is issued we arrange DFA Apostille and ship directly to your international address via DHL.',
          },
        ]}
      />

      <CtaBox
        title="Renewal remote · First-time guided · Apostille + DHL included"
        description="For renewal cases we handle the NBI remotely; for first-time applicants we guide you through Philippine Embassy fingerprinting. Once issued, we arrange DFA Apostille and ship directly to your door worldwide."
        buttonText="Free Consultation"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · HIT cases handled · Ships via DHL Express"
      />

      <FeatureList
        heading="What's Included in Our NBI Service"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBI application support',
            description: 'Renewal cases: handled remotely by our Cebu team. First-time applicants: we guide you through embassy fingerprinting. In-person fingerprints are completed by the applicant.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille authentication',
            description: 'We arrange DFA Apostille for immigration use. Paper original with Apostille stamp returned.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL international shipping',
            description: 'Tracked delivery directly to your address worldwide. No forwarding or Philippine address needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your use case (visa, immigration, work permit) and whether this is your first NBI or a renewal.' },
          { title: 'We confirm scope and quote', description: 'We verify HIT status if applicable and provide all-inclusive pricing including Apostille and shipping.' },
          { title: 'NBI processing based on your case', description: 'Renewal cases are processed remotely by our Cebu team. First-time applicants complete embassy fingerprinting with our step-by-step guidance.' },
          { title: 'DFA Apostille', description: 'After receiving the clearance, we arrange DFA Apostille if required for your destination authority.' },
          { title: 'DHL delivery worldwide', description: 'Shipped with tracking to your international address. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Can I get NBI Clearance online from abroad?', a: 'For renewals with a clean record, yes via clearance.nbi.gov.ph — but delivery is within the Philippines only. First-timers and HIT cases must appear in person for fingerprints. Renewal cases we handle remotely; first-time applicants we guide through embassy fingerprinting, then add the Apostille and ship worldwide.' },
          { q: 'How long does NBI Clearance take?', a: 'Online renewal: 7–10 business days within the Philippines. HIT cases: 15–30 business days. Including DFA Apostille and international shipping, plan 4–6 weeks total.' },
          { q: 'How long is NBI Clearance valid?', a: 'NBI Clearance is valid for 1 year. For most immigration purposes, it must be issued within 6 months of your submission date.' },
          { q: 'Does NBI Clearance need DFA Apostille?', a: 'For most immigration purposes outside the Philippines, yes. We confirm the exact requirement for your destination country before starting.' },
          { q: 'What is an NBI HIT?', a: 'A HIT means your name matched a record in the NBI database. It requires the applicant to appear in person at an NBI office; this cannot be done by a representative. We advise on resolution and handle the Apostille and shipping once the clearance is issued.' },
          { q: 'Can you handle NBI for someone currently outside the Philippines?', a: 'Yes — with limits. Renewal cases (prior NBI issued 2014 or later) we handle remotely. First-time applicants must complete fingerprinting in person at a Philippine Embassy/Consulate; we guide you and then handle the Apostille and shipping once the clearance is issued.' },
        ]}
        ctaTitle="HIT case or not sure what applies to you? Ask us."
        ctaButton="Free Consultation"
      />

      <RelatedArticles
        items={[
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Support Service', description: 'Full NBI Clearance support — renewal handling, embassy guidance for first-timers, Apostille, and worldwide shipping.' },
          { href: '/en/nbi-hit/', title: 'NBI HIT Resolution', description: 'What to do when your NBI Clearance comes back with a HIT.' },
          { href: '/en/nbi-validity/', title: 'How Long Is NBI Clearance Valid?', description: 'NBI validity periods for different immigration purposes.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Which documents you need for K-1, CR-1, Canada, Australia, UK, and more.' },
        ]}
      />
    </PageLayout>
  );
}
