import React from 'react';
import { CheckCircle, Package, Shield, Clock } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_EN } from '../lib/seoDate';

export default function CenomarGuideEn() {
  useMeta(
    `CENOMAR Retrieval + DFA Apostille | Shipped to USA [${SEO_YEAR_MONTH_EN}]`,
    'We retrieve CENOMAR from PSA with DFA Apostille and ship it to your US address via DHL. For K-1 and CR-1 visa petitioners. Free consultation.'
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ph-document.com/en/' },
          { '@type': 'ListItem', position: 2, name: 'CENOMAR Retrieval', item: 'https://ph-document.com/en/cenomar/' },
        ],
      },
      {
        '@type': 'Service',
        name: 'CENOMAR Retrieval Service',
        provider: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/' },
        areaServed: 'US',
        description: 'We retrieve PSA CENOMAR with DFA Apostille for K-1 and CR-1 visa applications. Ships to USA via DHL.',
      },
    ],
  };

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Home', href: '/en/' },
        { label: 'CENOMAR Retrieval' },
      ]}
      jsonLd={jsonLd}
    >
      <HeroBanner
        title={<>CENOMAR Retrieval<br className="hidden md:block" />+ DFA Apostille</>}
        badges={['All-Inclusive Pricing', 'Ships to USA via DHL', 'Apostille Included', 'Approx. 4–6 Weeks']}
        ctaText="Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <CheckCircle className="w-5 h-5 text-primary" />,
            title: 'K-1 Fiancé Visa Petitioners',
            description: 'CENOMAR is required to prove your Filipino fiancé(e) has no prior marriage on record.',
          },
          {
            icon: <CheckCircle className="w-5 h-5 text-primary" />,
            title: 'CR-1/IR-1 Spouse Visa Applicants',
            description: 'USCIS and NVC require CENOMAR as part of the immigrant visa petition.',
          },
          {
            icon: <CheckCircle className="w-5 h-5 text-primary" />,
            title: "Can't Travel to the Philippines",
            description: 'We handle everything on the ground — no trip to the Philippines needed.',
          },
          {
            icon: <CheckCircle className="w-5 h-5 text-primary" />,
            title: 'Facing a USCIS Deadline',
            description: "We prioritize your timeline so you don't miss your filing window.",
          },
        ]}
      />

      <CtaBox
        title="Not sure what documents you need?"
        description="Tell us your visa type and we'll tell you exactly what's required."
        buttonText="Get Free Advice"
      />

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <Package className="w-5 h-5 text-primary" />,
            title: 'PSA CENOMAR Retrieval',
            description: 'Original CENOMAR on PSA security paper from the Philippine Statistics Authority.',
          },
          {
            icon: <Shield className="w-5 h-5 text-primary" />,
            title: 'DFA Apostille',
            description: 'Authentication by the Philippine Department of Foreign Affairs for use in the US.',
          },
          {
            icon: <Clock className="w-5 h-5 text-primary" />,
            title: 'DHL Shipping to USA',
            description: 'Tracked delivery straight to your US address.',
          },
        ]}
      />

      <CtaBox
        title="One price. No hidden fees."
        buttonText="Request a Quote"
        variant="secondary"
      />

      <StepList
        heading="How It Works"
        steps={[
          {
            title: 'Contact Us',
            description: 'Send us a message with your visa type and timeline. We reply within 24 hours.',
          },
          {
            title: 'Get a Quote',
            description: 'We send you an all-inclusive quote. No surprise charges.',
          },
          {
            title: 'We Handle Everything',
            description: 'Our team in the Philippines retrieves your CENOMAR, gets the DFA Apostille, and ships it.',
          },
          {
            title: 'Receive Your Documents',
            description: 'Tracked DHL delivery to your US address. Verify and submit to USCIS/NVC.',
          },
        ]}
      />

      <FaqSection
        items={[
          {
            q: 'How much does it cost?',
            a: 'Pricing depends on the document type and quantity. Contact us for an all-inclusive quote — no hidden fees.',
          },
          {
            q: 'How long does it take?',
            a: 'Approximately 4–6 weeks total: PSA retrieval (2–3 weeks), DFA Apostille (1–2 weeks), DHL shipping (3–5 business days). Let us know your USCIS deadline and we will plan accordingly.',
          },
          {
            q: 'What do I need to provide?',
            a: "A copy of your Filipino fiancé(e)/spouse's passport (for name verification) and your visa type. That's it.",
          },
          {
            q: 'Is Apostille included?',
            a: 'Yes, DFA Apostille is included in all our plans by default. USCIS and NVC require it.',
          },
          {
            q: 'Can you rush it?',
            a: 'We do our best to accommodate tight deadlines. Share your filing date and we will advise on what is possible.',
          },
        ]}
        ctaTitle="Still have questions?"
        ctaButton="Get Free Consultation"
      />
    </PageLayout>
  );
}
