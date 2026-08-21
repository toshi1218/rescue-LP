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
            price: '219',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '219',
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
        conclusion="Processing time depends on the document type and authentication route. Confirm the current DFA process before planning around a deadline."
        points={[
          'Physical-document processing times may differ from PSA e-Apostille processing',
          'Priority options depend on the document type and current DFA availability',
          'Total timeline includes source-document issuance, the applicable authentication route, and shipping only when a physical document is required',
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
            description: 'Physical-document and PSA e-Apostille routes follow different processes. We confirm the current route and work backward from your deadline before quoting.',
          },
          {
            icon: <Calendar className="w-4 h-4" />,
            title: 'Have a K-1 or CR-1 interview date coming up',
            description: 'We work backward from your target date to determine when to start — and whether Express processing is needed.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Want to bundle document retrieval and Apostille',
            description: 'We handle the PSA application, the applicable DFA authentication route, and DHL shipping when a physical document is required.',
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
            description: 'For PSA e-Certificates, the DFA e-Apostille is delivered electronically. Non-PSA documents may follow a physical route when applicable.',
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
          { q: 'How long does DFA Apostille take?', a: 'Timing depends on the document and authentication route. PSA e-Apostille processing is electronic, while physical-document routes can have different schedules. Share your deadline and we will confirm the current process.' },
          { q: 'Can I request priority handling?', a: 'Share your deadline and document type. We will confirm whether any priority option is available for the applicable route before you commit.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. The DFA Apostille application, PSA online application (when needed), and DHL shipping for physical documents are all included.' },
          { q: 'I am worried about missing my deadline', a: 'Share your deadline and we will confirm whether it is feasible. Starting early is the best way to stay on track.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
