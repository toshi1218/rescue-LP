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
                text: 'Partial yes. NBI online renewal is available if you already have an NBI account with a clean record. However, first-time applicants and those with a HIT (matching court record) must appear in person at an NBI office in the Philippines. For overseas Filipinos who cannot travel, a document retrieval service can handle the process on their behalf.',
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
                text: 'An NBI HIT occurs when your name matches a record in the NBI database — court cases, criminal records, or even name matches with other individuals. A HIT requires you to appear at an NBI office in person. We handle HIT cases and coordinate the resolution process on your behalf.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="NBI Clearance Online: What You Can and Can't Do from Abroad"
        badges={['OFW-Friendly Guide', 'HIT Cases Handled', 'Ships Worldwide via DHL']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 2026"
      />

      <SummaryBlock
        conclusion="NBI online renewal works for Filipinos with an existing account and a clean record. First-timers and HIT cases still need in-person processing — or a document service."
        points={[
          'NBI online at clearance.nbi.gov.ph — renewal only, for clean records',
          'First-time applicants must appear in person at an NBI office',
          'HIT cases require in-person appearance regardless of renewal status',
          'For overseas Filipinos who cannot travel, we handle everything locally',
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
            description: 'First-time applicants and those with a HIT must appear at an NBI office in the Philippines. If you cannot travel, a document service can coordinate this on your behalf.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Document service (overseas Filipinos who cannot travel)',
            description: 'We apply on your behalf, handle HIT resolution if needed, arrange DFA Apostille, and ship directly to your international address via DHL. No Philippines trip required.',
          },
        ]}
      />

      <CtaBox
        title="Can't travel to the Philippines? We handle NBI for you."
        description="We coordinate NBI Clearance retrieval — including HIT cases — arrange DFA Apostille, and ship directly to your door worldwide."
        buttonText="Start Free Consultation"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · HIT cases handled · Ships via DHL Express"
      />

      <FeatureList
        heading="What's Included in Our NBI Service"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBI Clearance retrieval',
            description: 'We coordinate with NBI on your behalf — including scheduling, in-person processing if needed, and HIT resolution.',
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
          { title: 'NBI processing in the Philippines', description: 'Our Cebu team coordinates with NBI — online renewal or in-person depending on your case.' },
          { title: 'DFA Apostille', description: 'After receiving the clearance, we arrange DFA Apostille if required for your destination authority.' },
          { title: 'DHL delivery worldwide', description: 'Shipped with tracking to your international address. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Can I get NBI Clearance online from abroad?', a: 'For renewals with a clean record, yes via clearance.nbi.gov.ph — but delivery is within the Philippines only. First-timers and HIT cases must appear in person. We handle everything on your behalf if you cannot travel.' },
          { q: 'How long does NBI Clearance take?', a: 'Online renewal: 7–10 business days within the Philippines. HIT cases: 15–30 business days. Including DFA Apostille and international shipping, plan 4–6 weeks total.' },
          { q: 'How long is NBI Clearance valid?', a: 'NBI Clearance is valid for 1 year. For most immigration purposes, it must be issued within 6 months of your submission date.' },
          { q: 'Does NBI Clearance need DFA Apostille?', a: 'For most immigration purposes outside the Philippines, yes. We confirm the exact requirement for your destination country before starting.' },
          { q: 'What is an NBI HIT?', a: 'A HIT means your name matched a record in the NBI database. It requires in-person appearance at an NBI office. We handle HIT cases and coordinate the resolution process.' },
          { q: 'Can you handle NBI for someone currently outside the Philippines?', a: 'Yes. That is our primary use case. We coordinate everything locally so you do not need to travel or have a Philippines contact.' },
        ]}
        ctaTitle="HIT case or not sure what applies to you? Ask us."
        ctaButton="Start Free Consultation"
      />

      <RelatedArticles
        items={[
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Retrieval Service', description: 'Full NBI Clearance service — retrieval, HIT handling, Apostille, and worldwide shipping.' },
          { href: '/en/nbi-hit/', title: 'NBI HIT Resolution', description: 'What to do when your NBI Clearance comes back with a HIT.' },
          { href: '/en/nbi-validity/', title: 'How Long Is NBI Clearance Valid?', description: 'NBI validity periods for different immigration purposes.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Which documents you need for K-1, CR-1, Canada, Australia, UK, and more.' },
        ]}
      />
    </PageLayout>
  );
}
