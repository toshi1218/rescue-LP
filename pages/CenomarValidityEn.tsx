import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { Clock, Calendar, FileCheck, Globe } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import RelatedArticles from '../components/RelatedArticles';

export default function CenomarValidityEn() {
  useMeta(
    'CENOMAR Validity Period — How Long Is It Valid? | Philippine Document Service',
    'CENOMAR is valid for 6 months from issue date. Timing your request correctly is critical for visa and marriage applications. We help you get it at the right time.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'CENOMAR Validity & Timing' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'CENOMAR Retrieval — Timed for Your Visa Deadline',
          description: 'CENOMAR is typically valid for 6 months. We time your PSA online application and DFA e-Apostille application to match your immigration submission deadline worldwide, so it does not expire before you can use it.',
          url: 'https://ph-document.com/en/cenomar-validity/',
          provider: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/en/',
          },
          areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'KR'],
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: '219',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '219',
              priceCurrency: 'USD',
              description: 'PSA CENOMAR online application + DFA e-Apostille application (all-inclusive) — pricing under review following DFA\'s March 2026 e-Apostille policy change',
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How long is CENOMAR valid?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'There is no legal expiration, but most submission authorities (USCIS, NVC, embassies) require a document issued within 6 months. We time retrieval to match your schedule.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does the full CENOMAR retrieval process take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Timing depends on PSA and DFA processing queues. We confirm a current estimate for your case before you commit.',
              },
            },
            {
              '@type': 'Question',
              name: 'My CENOMAR expired — can I get a new one quickly?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Share your new deadline and we will confirm priority options. Re-retrieval follows the same process.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="CENOMAR Timing: We Help You Get It Right the First Time"
        badges={['Online Application Handled', 'Deadline-Aware Scheduling', 'All-Inclusive Pricing']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="CENOMAR validity matters for your visa timeline. We time your online application so it does not expire before submission."
        points={[
          'Most authorities require CENOMAR issued within 6 months',
          'We calculate the optimal application start date based on your submission deadline',
          'If your CENOMAR expires, you will need to re-apply and pay again',
          'Free consultation to map out your document timeline',
        ]}
        ctaText="Check Your Timeline"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Clock className="w-4 h-4" />,
            title: 'Worried about the 6-month validity window',
            description: 'Most submission authorities (USCIS, NVC, embassies) require a CENOMAR issued within 6 months. We time your online application to match your schedule.',
          },
          {
            icon: <Calendar className="w-4 h-4" />,
            title: 'Have a K-1 or CR-1 interview date coming up',
            description: 'We work backward from your target date to determine when to start the online application — so the document arrives valid and on time.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Your CENOMAR expired before you could use it',
            description: 'We handle re-application quickly. Share your situation and we will get you back on track.',
          },
        ]}
      />

      <CtaBox
        title="Tell us your visa interview or submission date"
        description="CENOMAR is typically required within 6 months of issuance. We calculate the optimal retrieval start date so it arrives valid — not expired."
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
            title: 'PSA CENOMAR online application',
            description: 'We complete the PSA online application and payment on your behalf, in English.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA e-Apostille (when required)',
            description: 'We handle the applicable DFA e-Apostille application and confirm your receiving authority’s current format requirements before filing.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Format guidance for your authority',
            description: 'We confirm what your specific submission authority accepts before you order.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Share your visa deadline', description: 'Tell us your interview date or submission deadline. We calculate when the online application must start so CENOMAR arrives within the 6-month validity window.' },
          { title: 'We confirm the timeline and quote', description: 'We provide the optimal start date and all-inclusive pricing (PSA online application + DFA e-Apostille application).' },
          { title: 'We complete the PSA and DFA online applications', description: 'We handle the PSA application, payment, and DFA e-Apostille application on your behalf, in English. We update you on progress.' },
          { title: 'Document delivered', description: 'PSA delivers your document; the DFA e-Apostille is delivered electronically for submission. Estimated total depends on PSA/DFA processing.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'How long is CENOMAR valid?', a: 'There is no legal expiration, but most submission authorities (USCIS, NVC, embassies) require a document issued within 6 months. We time retrieval to match your schedule.' },
          { q: 'How long does the full process take?', a: 'Timing depends on PSA and DFA processing queues. We confirm a current estimate for your case before you commit.' },
          { q: 'My CENOMAR expired — can I get a new one quickly?', a: 'Yes. Share your new deadline and we will confirm priority options. Re-application follows the same process.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case, covering the PSA online application and DFA e-Apostille application.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/cenomar/', title: 'CENOMAR Complete Guide', description: 'Everything about CENOMAR: what it is, how to get it, what is included.' },
          { href: '/en/cenomar-vs-marriage-certificate/', title: 'CENOMAR vs. Marriage Certificate', description: 'Which document does your visa actually require?' },
          { href: '/en/cenomar-apostille/', title: 'Does CENOMAR Need Apostille?', description: 'When DFA Apostille is required and when it is not.' },
        ]}
      />
    </PageLayout>
  );
}
