import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { Clock, Calendar, FileCheck, Globe } from 'lucide-react';

export default function DfaProcessingTimeEn() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'DFA Apostille Processing Time' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'DFA Apostille Service — Timed for Your Visa Deadline',
          description: 'DFA Apostille takes 4 business days (Regular) or next business day (Express). We schedule processing to meet your immigration submission deadline worldwide. Free consultation to check your timeline.',
          url: 'https://ph-document.com/en/apostille-processing-time',
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
                text: 'DFA Apostille can be processed Regular (4 business days) or Express (next business day). Total time including PSA retrieval and DHL shipping is approximately 4–6 weeks.',
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
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="DFA Apostille takes 5-10 business days. We help you meet your visa deadline with express options."
        points={[
          'Regular processing: 4-5 business days at DFA',
          'Express processing available for urgent cases',
          'Total timeline includes PSA/NBI retrieval + DFA + shipping',
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
            description: 'We handle PSA retrieval, DFA Apostille, and DHL shipping together in one flow.',
          },
        ]}
      />

      <CtaBox
        title="Tell us your deadline — we will plan the timeline"
        description="We calculate the optimal start date and confirm whether Express processing is needed for your case."
        buttonText="Talk to Us"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start ﾂｷ Progress updates at every stage ﾂｷ Pay balance only after confirming document copies"
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
            title: 'PSA document retrieval (when needed)',
            description: 'We can bundle PSA retrieval with Apostille for a single all-inclusive price.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your address worldwide',
            description: 'Tracked delivery directly to your door. No forwarding needed.',
          },
        ]}
      />

      <CtaBox
        title="The earlier you start, the more options you have"
        description="The full process takes approximately 4–6 weeks. Starting early gives you buffer time and avoids the need for Express processing."
        buttonText="Check My Timeline"
        href="#contact"
        variant="secondary"
        trustNote="English only ﾂｷ Anonymous inquiries welcome ﾂｷ Reply within 24 hours"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Share your target date', description: 'Tell us your visa interview, immigration submission, or other deadline.' },
          { title: 'We plan the timeline and quote', description: 'We confirm whether Express is needed and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles PSA retrieval and DFA Apostille (Regular or Express).' },
          { title: 'DHL delivery worldwide', description: 'Tracked shipment to your address. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'How long does DFA Apostille take?', a: 'DFA Apostille can be processed Regular (4 business days) or Express (next business day). Total time including PSA retrieval and DHL shipping is approximately 4–6 weeks.' },
          { q: 'Can I request Express processing?', a: 'Yes. If your deadline requires it, we will arrange Express DFA Apostille. Share your deadline and we will confirm what is needed.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. DFA Apostille, PSA retrieval (when needed), and DHL shipping are all included.' },
          { q: 'I am worried about missing my deadline', a: 'Share your deadline and we will confirm whether it is feasible. Starting early is the best way to stay on track.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
