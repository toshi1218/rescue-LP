import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import RelatedArticles from '../components/RelatedArticles';
import { FileCheck, Globe, AlertTriangle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function CenomarMeaningEn() {
  useMeta(
    'CENOMAR Meaning: What Is It & Why You Need It [2026]',
    'CENOMAR stands for Certificate of No Marriage Record — an official PSA document proving a Filipino is legally single. Required for K-1 fiancé visa, CR-1, and marriage abroad.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'What Is CENOMAR?' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'CENOMAR Meaning: What Is It and Why Do You Need It?',
          description: 'CENOMAR stands for Certificate of No Marriage Record. Issued by the Philippine Statistics Authority (PSA), it officially certifies that a Filipino citizen has no marriage record on file — proof of being legally single.',
          url: 'https://ph-document.com/en/cenomar-meaning/',
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
              name: 'What does CENOMAR stand for?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMAR stands for Certificate of No Marriage Record. It is an official document issued by the Philippine Statistics Authority (PSA) that certifies a Filipino citizen has no marriage record registered in the Philippines.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is CENOMAR used for?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMAR is used as proof of single status for immigration applications (K-1 fiancé visa, spouse visa), marriage abroad, and legal proceedings that require proof the person has never been married. It is the Philippine equivalent of a Certificate of No Impediment to Marriage.',
              },
            },
            {
              '@type': 'Question',
              name: 'Who issues CENOMAR?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMAR is issued exclusively by the Philippine Statistics Authority (PSA), formerly the National Statistics Office (NSO). It cannot be obtained from any other government office.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long is CENOMAR valid?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For most immigration purposes, CENOMAR must be issued within 6 months of your visa application or submission date. Check with your specific authority before ordering.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the difference between CENOMAR and PSA Marriage Certificate?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMAR proves someone has never been married (no record on file). PSA Marriage Certificate proves someone is legally married. K-1 visa applicants need CENOMAR; CR-1/IR-1 applicants need a PSA Marriage Certificate.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I get CENOMAR from outside the Philippines?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. CENOMAR can be retrieved by an authorized representative or document service in the Philippines and shipped to you worldwide. You do not need to travel to the Philippines.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="CENOMAR: What It Means and Why You Need It"
        badges={['Issued by PSA Philippines', 'Required for K-1 & Spouse Visa', 'We Retrieve & Ship Worldwide']}
        ctaText="Get Your CENOMAR"
        ctaHref="/en/cenomar/"
        lastUpdated="April 2026"
      />

      <SummaryBlock
        conclusion="CENOMAR (Certificate of No Marriage Record) is official PSA proof that a Filipino citizen has never been married in the Philippines."
        points={[
          'Stands for Certificate of No Marriage Record — issued only by PSA Philippines',
          'Required for K-1 fiancé visa, spouse visa pre-registration, and marriage abroad',
          'Must have DFA Apostille to be accepted by foreign immigration authorities',
          'Valid for 6 months for most immigration purposes — order at the right time',
        ]}
        ctaText="Order CENOMAR Now"
      />

      <div className="max-w-2xl mx-auto px-4 my-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Does CENOMAR Mean?</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          <strong>CENOMAR</strong> is an acronym used in the Philippines for <strong>Certificate of No Marriage Record</strong>.
          It is an official civil registry document issued by the{' '}
          <a href="https://psaserbilis.com.ph" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
            Philippine Statistics Authority (PSA)
          </a>{' '}
          that certifies a Filipino citizen has no marriage record on file — in other words, that the person has never been legally married in the Philippines.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          If PSA finds a marriage record when processing the request, they issue an <strong>Advisory on Marriages</strong> instead,
          which lists the marriage details. A true CENOMAR (with "no record found") is only issued to individuals with no registered marriage.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          CENOMAR is the Philippine equivalent of what some countries call a Certificate of No Impediment to Marriage (CNI),
          Certificate of Single Status, or Affidavit of Single Status — though the PSA CENOMAR carries more legal weight as an official government record.
        </p>
      </div>

      <FeatureList
        heading="When Is CENOMAR Required?"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'K-1 Fiancé Visa (USA)',
            description: 'A CENOMAR may be requested as evidence of civil status. Authentication and document-age requirements depend on the authority and application stage.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Marriage registration abroad',
            description: 'Many countries require proof of single status before registering a marriage with a Filipino national. CENOMAR with DFA Apostille fulfills this requirement.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Spouse visa pre-registration stage',
            description: 'For Japan COE and some other countries, CENOMAR is required at the pre-marriage registration stage. The specific timing depends on the destination country.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'CR-1 / IR-1 (if previously unmarried)',
            description: 'For CR-1 and IR-1 spouse visas, CENOMAR may be required depending on the case — particularly if the Filipino spouse\'s prior marital history needs to be established.',
          },
        ]}
      />

      <div className="max-w-2xl mx-auto px-4 my-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">CENOMAR vs. Advisory on Marriages</h2>
        <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm text-sm">
          <div className="grid grid-cols-[1fr_1fr] bg-secondary text-white">
            <div className="px-4 py-3 font-bold">CENOMAR</div>
            <div className="px-4 py-3 font-bold">Advisory on Marriages</div>
          </div>
          {[
            ['No marriage record found in PSA', 'One or more marriage records found'],
            ['Proves legally single status', 'Lists marriage details on file'],
            ['Required for K-1 and most pre-marriage applications', 'Used to confirm existing marriage records'],
            ['Cannot be issued if a marriage record exists', 'Issued instead of CENOMAR when married'],
          ].map(([left, right], i) => (
            <div key={i} className={`grid grid-cols-[1fr_1fr] border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}`}>
              <div className="px-4 py-3 text-gray-700">{left}</div>
              <div className="px-4 py-3 text-gray-700">{right}</div>
            </div>
          ))}
        </div>
      </div>

      <FeatureList
        heading="Common Mistakes to Avoid"
        items={[
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Ordering CENOMAR when you need a PSA Marriage Certificate',
            description: 'CENOMAR is for people who have never been married. If your Filipino partner is already married to you, you need a PSA Marriage Certificate — not CENOMAR.',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Forgetting DFA Apostille',
            description: 'A PSA CENOMAR without DFA Apostille is not accepted by most foreign immigration authorities. The Apostille must be a physical paper original attached to the document.',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Ordering too early',
            description: 'CENOMAR is valid for 6 months for most immigration purposes. If you order it before you are ready to submit, it may expire before your interview. Time it carefully.',
          },
        ]}
      />

      <CtaBox
        title="Need CENOMAR with DFA Apostille?"
        description="We retrieve CENOMAR from PSA, arrange DFA Apostille, and ship it directly to you worldwide. No trip to the Philippines required."
        buttonText="Free Consultation"
        href="/en/cenomar/"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage · Ships via DHL Express"
      />

      <FaqSection
        items={[
          { q: 'What does CENOMAR stand for?', a: 'CENOMAR stands for Certificate of No Marriage Record. It is an official PSA Philippines document certifying a Filipino citizen has no registered marriage on file.' },
          { q: 'What is CENOMAR used for?', a: 'CENOMAR is used as proof of single status for K-1 fiancé visa applications, marriage registration abroad, and other legal proceedings requiring proof of unmarried status.' },
          { q: 'Who issues CENOMAR?', a: 'CENOMAR is issued exclusively by the Philippine Statistics Authority (PSA). It cannot be obtained from any other office.' },
          { q: 'How long is CENOMAR valid?', a: 'For most immigration purposes, CENOMAR must be issued within 6 months of your submission date. Confirm the validity requirement with your specific authority.' },
          { q: 'What is the difference between CENOMAR and PSA Marriage Certificate?', a: 'CENOMAR proves the person has never been married (no record found). PSA Marriage Certificate proves an existing registered marriage. K-1 applicants need CENOMAR; CR-1 applicants need a Marriage Certificate.' },
          { q: 'Can I get CENOMAR from outside the Philippines?', a: 'Yes. We retrieve CENOMAR on your behalf from PSA in the Philippines and ship it to you worldwide with DFA Apostille. No travel required.' },
        ]}
        ctaTitle="Questions about your case? Ask us."
        ctaButton="Free Consultation"
      />

      <RelatedArticles
        items={[
          { href: '/en/cenomar/', title: 'CENOMAR Retrieval Service', description: 'Order CENOMAR with DFA Apostille — retrieved from PSA and shipped worldwide.' },
          { href: '/en/cenomar-validity/', title: 'How Long Is CENOMAR Valid?', description: 'Validity periods for K-1, CR-1, and other immigration purposes.' },
          { href: '/en/cenomar-vs-marriage-certificate/', title: 'CENOMAR vs. PSA Marriage Certificate', description: 'Which document proves what — and which one you actually need.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Full list of Philippine documents required for each visa type.' },
        ]}
      />
    </PageLayout>
  );
}
