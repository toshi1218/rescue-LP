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

export default function DfaProcessingTimeEn() {
  useMeta(
    'DFA Apostille Processing Time [April 2026]',
    'DFA Apostille takes 5–10 business days. Worried about your visa deadline? Our express proxy service can help you meet it. Free consultation to check your timeline.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'DFA Apostille Processing Time' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'DFA Apostille Service — Timed for Your Visa Deadline',
          description: 'DFA Apostille takes 4 business days (Regular) or next business day (Express). We schedule processing to meet your immigration submission deadline worldwide. Free consultation to check your timeline.',
          url: 'https://ph-document.com/en/apostille-processing-time/',
          provider: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/en/',
          },
          areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'KR'],
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: '349',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '349',
              priceCurrency: 'USD',
              description: 'DFA Apostille authentication + DHL shipping worldwide (all-inclusive)',
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How long does DFA Apostille take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'DFA Apostille can be processed Regular (4 business days) or Express (next business day). Total time including the PSA online application and DHL shipping (for physical documents) is approximately 4–6 weeks.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I request Express DFA Apostille processing?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. If your deadline requires it, we will arrange Express DFA Apostille. Share your deadline and we will confirm what is needed.',
              },
            },
            {
              '@type': 'Question',
              name: 'I am worried about missing my visa deadline',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Share your deadline and we will confirm whether it is feasible. Starting early is the best way to stay on track.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="DFA Apostille Processing Time: We Plan Around Your Deadline"
        badges={['Deadline-Aware Scheduling', 'Ships via DHL', 'All-Inclusive Pricing']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="DFA Apostille takes 5-10 business days. We help you meet your visa deadline with express options."
        points={[
          'Regular processing: 4-5 business days at DFA',
          'Express processing available for urgent cases',
          'Total timeline includes the PSA online application / NBI retrieval + DFA Apostille application + shipping (for physical documents)',
          'Share your deadline and we will confirm if we can meet it',
        ]}
        ctaText="Check Your Deadline"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Clock className="w-4 h-4" />,
            title: 'Want to know how long DFA Apostille takes',
            description: 'DFA Apostille can be processed Regular (4 business days) or Express (next business day). Total time including PSA and DHL shipping is approximately 4–6 weeks.',
          },
          {
            icon: <Calendar className="w-4 h-4" />,
            title: 'Have a K-1 or CR-1 interview date coming up',
            description: 'We work backward from your target date to determine when to start — and whether Express processing is needed.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Want to bundle document retrieval and Apostille',
            description: 'We handle the PSA online application, DFA Apostille application, and DHL shipping for physical documents together in one flow.',
          },
        ]}
      />

      <CtaBox
        title="Tell us your deadline — we will plan the timeline"
        description="We calculate the optimal start date and confirm whether Express processing is needed for your case."
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
            title: 'DFA Apostille authentication',
            description: 'We arrange DFA Apostille (Regular or Express based on your timeline). Paper original provided.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA online application (when needed)',
            description: 'We can bundle the PSA online application with the DFA e-Apostille application for a single all-inclusive price.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your address worldwide',
            description: 'Tracked delivery directly to your door. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Share your target date', description: 'Tell us your visa interview, immigration submission, or other deadline.' },
          { title: 'We plan the timeline and quote', description: 'We confirm whether Express is needed and provide all-inclusive pricing.' },
          { title: 'We handle the applications', description: 'We complete PSA online applications and DFA e-Apostille applications; our Cebu team handles physical retrieval and Apostille for non-PSA documents (Regular or Express).' },
          { title: 'DHL delivery worldwide', description: 'Tracked shipment to your address. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'How long does DFA Apostille take?', a: 'DFA Apostille can be processed Regular (4 business days) or Express (next business day). Total time including the PSA online application and DHL shipping (for physical documents) is approximately 4–6 weeks.' },
          { q: 'Can I request Express processing?', a: 'Yes. If your deadline requires it, we will arrange Express DFA Apostille. Share your deadline and we will confirm what is needed.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. The DFA Apostille application, PSA online application (when needed), and DHL shipping for physical documents are all included.' },
          { q: 'I am worried about missing my deadline', a: 'Share your deadline and we will confirm whether it is feasible. Starting early is the best way to stay on track.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
