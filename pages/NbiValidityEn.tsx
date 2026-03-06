import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Clock, Calendar, FileCheck, Globe } from 'lucide-react';

export default function NbiValidityEn() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'NBI Clearance Validity' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'NBI Clearance Retrieval — Timed for Your Visa Deadline',
          description: 'NBI Clearance is valid for 1 year, but USCIS and NVC often require it within 6 months of submission. We time the retrieval to match your specific deadline.',
          url: 'https://ph-document.com/en/nbi-validity',
          provider: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/en/',
          },
          areaServed: { '@type': 'Country', name: 'US' },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: '329',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '329',
              priceCurrency: 'USD',
              description: 'NBI Clearance retrieval + DFA Apostille + DHL shipping to USA (all-inclusive)',
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How long is NBI Clearance valid?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'NBI Clearance is valid for 1 year from issuance. However, some submission authorities require a document issued within 6 months. We time retrieval to match your schedule.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does the full NBI Clearance retrieval process take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks: NBI takes 2–3 weeks, DFA Apostille 1–2 weeks, and DHL shipping 3–5 business days.',
              },
            },
            {
              '@type': 'Question',
              name: 'My NBI Clearance expired — can I get a new one quickly?',
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
        title="NBI Clearance Timing: Get It Right for Your Visa Interview"
        badges={['Ships via DHL', 'Deadline-Aware Scheduling', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Clock className="w-4 h-4" />,
            title: 'Worried about the validity window',
            description: 'NBI Clearance is valid for 1 year, but some submission authorities require a document issued within 6 months. We time retrieval to match your schedule.',
          },
          {
            icon: <Calendar className="w-4 h-4" />,
            title: 'Have a K-1 or CR-1 interview date coming up',
            description: 'We work backward from your target date to determine when to start — so the document arrives valid and on time.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Your NBI Clearance expired before you could use it',
            description: 'We handle re-retrieval quickly. Share your situation and we will get you back on track.',
          },
        ]}
      />

      <CtaBox
        title="Tell us your K-1 interview or CR-1 submission date"
        description="NBI Clearance is valid for 1 year, but USCIS and NVC often require it within 6 months. We calculate the optimal retrieval start date — and flag if a MATCH FOUND (HIT) could delay things."
        buttonText="Talk to Us"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBI Clearance retrieval',
            description: 'We handle the NBI application and retrieval on your behalf from our Cebu office.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille (when required)',
            description: 'We arrange DFA Apostille authentication based on your submission requirements.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to the USA',
            description: 'Tracked delivery directly to your US address. No forwarding needed.',
          },
        ]}
      />

      <CtaBox
        title="NBI Clearance has one hidden risk: MATCH FOUND"
        description="If a MATCH FOUND (HIT) appears during NBI processing, resolution can add 2–4 extra weeks. Starting early is the only way to protect your visa timeline."
        buttonText="Check My Timeline"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Share your K-1 or CR-1 deadline', description: 'Tell us your interview date or NVC submission deadline. We factor in the 1-year validity and any MATCH FOUND risk to set a safe start date.' },
          { title: 'We confirm the timeline and quote', description: 'We provide the optimal start date and all-inclusive pricing (NBI retrieval + DFA Apostille + DHL shipping).' },
          { title: 'NBI retrieval and DFA Apostille in the Philippines', description: 'Our Cebu team handles the NBI application and DFA Apostille. If a MATCH FOUND occurs, we manage the resolution process.' },
          { title: 'DHL delivery to your US address', description: 'Tracked shipment directly to your door. Estimated total: 4–6 weeks (longer if MATCH FOUND resolution is needed).' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'How long is NBI Clearance valid?', a: 'NBI Clearance is valid for 1 year from issuance. However, some submission authorities require a document issued within 6 months. We time retrieval to match your schedule.' },
          { q: 'How long does the full process take?', a: 'Approximately 4–6 weeks: NBI takes 2–3 weeks, DFA Apostille 1–2 weeks, and DHL shipping 3–5 business days.' },
          { q: 'My NBI Clearance expired — can I get a new one quickly?', a: 'Yes. Share your new deadline and we will confirm priority options. Re-retrieval follows the same process.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. NBI retrieval, DFA Apostille, and DHL shipping are all included.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
