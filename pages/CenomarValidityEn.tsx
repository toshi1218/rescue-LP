import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Clock, Calendar, FileCheck, Globe } from 'lucide-react';

export default function CenomarValidityEn() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'CENOMAR Validity & Timing' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CENOMAR Validity and Timing Service',
        url: 'https://ph-document.com/en/cenomar-validity',
        provider: { '@type': 'Organization', name: 'IGRS Inc.' },
      }}
    >
      <HeroBanner
        title="CENOMAR Timing: We Help You Get It Right the First Time"
        badges={['Ships via DHL', 'Deadline-Aware Scheduling', 'All-Inclusive Pricing']}
        ctaText="Start Free Consultation"
        ctaHref="#contact"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Clock className="w-4 h-4" />,
            title: 'Worried about the 6-month validity window',
            description: 'Most submission authorities (USCIS, NVC, embassies) require a CENOMAR issued within 6 months. We time the retrieval to match your schedule.',
          },
          {
            icon: <Calendar className="w-4 h-4" />,
            title: 'Have a K-1 or CR-1 interview date coming up',
            description: 'We work backward from your target date to determine when to start — so the document arrives valid and on time.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Your CENOMAR expired before you could use it',
            description: 'We handle re-retrieval quickly. Share your situation and we will get you back on track.',
          },
        ]}
      />

      <CtaBox
        title="Tell us your target date — we will plan the rest"
        description="We calculate the optimal start date based on your submission deadline. Consulting on timing alone is welcome."
        buttonText="Talk to Us"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA CENOMAR retrieval',
            description: 'We apply to PSA and obtain the CENOMAR on your behalf from our Cebu office.',
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
        title="The earlier you start, the more options you have"
        description="The full process takes approximately 4–6 weeks. Starting early gives you buffer time if anything needs to be re-done."
        buttonText="Check My Timeline"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Share your target date', description: 'Tell us your K-1 interview, NVC submission, or other deadline.' },
          { title: 'We plan the timeline and quote', description: 'We confirm the optimal start date and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles PSA retrieval and DFA Apostille.' },
          { title: 'DHL delivery to the USA', description: 'Tracked shipment to your address. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'How long is CENOMAR valid?', a: 'There is no legal expiration, but most submission authorities (USCIS, NVC, embassies) require a document issued within 6 months. We time retrieval to match your schedule.' },
          { q: 'How long does the full process take?', a: 'Approximately 4–6 weeks: PSA takes 2–3 weeks, DFA Apostille 1–2 weeks, and DHL shipping 3–5 business days.' },
          { q: 'My CENOMAR expired — can I get a new one quickly?', a: 'Yes. Share your new deadline and we will confirm priority options. Re-retrieval follows the same process.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. PSA retrieval, DFA Apostille, and DHL shipping are all included.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
