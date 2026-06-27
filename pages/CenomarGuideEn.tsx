import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { Heart, FileCheck, Globe, Users } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import RelatedArticles from '../components/RelatedArticles';

export default function CenomarGuideEn() {
  useMeta(
    'Get CENOMAR from Abroad [2026] — PSA + Apostille + DHL, All-Inclusive',
    'We retrieve CENOMAR from PSA, get DFA Apostille, and ship worldwide via DHL — from US$349 all-in. No trip to the Philippines needed. Free consultation.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'CENOMAR Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CENOMAR Retrieval Service (PSA + DFA Apostille)',
        description: 'We retrieve CENOMAR from PSA with DFA Apostille and ship worldwide via DHL. Required for immigration and visa applications in the US, Canada, Australia, UK, UAE and more.',
        url: 'https://ph-document.com/en/cenomar/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: ['US', 'CA', 'AU', 'GB', 'AE', 'KR'],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '349',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '349',
            priceCurrency: 'USD',
            description: 'PSA retrieval + DFA Apostille + DHL shipping worldwide (all-inclusive)',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What does CENOMAR mean?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMAR stands for Certificate of No Marriage Record. It is an official document issued by the Philippine Statistics Authority (PSA) that certifies a Filipino citizen has no marriage record on file — proof that the person has never been married in the Philippines.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is CENOMAR used for?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMAR is required for K-1 fiancé visa applications, CR-1/IR-1 spouse visas, Canada spousal sponsorship, Australia partner visa, UK spouse visa, and most immigration applications involving a Filipino national. It proves you are legally single in the Philippines.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'All-inclusive from US$349 (PSA retrieval + DHL shipping). DFA Apostille is an additional ~US$100. See our Pricing page for the full breakdown.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks. PSA issuance takes 2–3 weeks, DFA Apostille takes 1–2 weeks, and DHL international shipping takes 3–5 business days.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can you handle rush orders?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Let us know your deadline and we will check if expedited processing is available.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do I need a physical Apostille or is e-Apostille OK?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Most USCIS offices require a physical Apostille original. We will confirm the requirement for your specific case before processing.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Get Your PSA CENOMAR From Abroad — No Trip to the Philippines"
        badges={['Ships Worldwide via DHL', 'DFA Apostille Included', 'For OFWs & Filipinos Abroad']}
        ctaText="Get a Free Quote"
        ctaHref="#contact"
        lastUpdated="June 27, 2026"
      />

      <div className="max-w-2xl mx-auto px-4 mb-6">
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          <strong>Already living abroad and need a PSA CENOMAR for your visa or marriage application?</strong>{' '}
          You don't have to fly back to the Philippines. Our Cebu-based team retrieves your{' '}
          <a href="https://psa.gov.ph" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Philippine Statistics Authority (PSA)</a>{' '}
          CENOMAR, handles the DFA Apostille, and ships the original document directly to your address worldwide via DHL.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          A CENOMAR (Certificate of No Marriage Record) proves you are legally single in the Philippines, and is required for K-1 fiancé visas, CR-1/IR-1 spouse visas, Canada spousal sponsorship, Australia partner visa, UK spouse visa, and marriage registration in the UAE and Gulf countries. It must usually be issued within 6 months of submission and apostilled depending on the destination — we confirm the exact requirement for your case before you pay.
        </p>
      </div>

      <SummaryBlock
        conclusion="We retrieve your CENOMAR from PSA, get DFA Apostille, and ship it to your address worldwide. No trip to the Philippines needed."
        points={[
          'All-inclusive service: PSA retrieval + DFA Apostille + DHL Express shipping',
          'Required for visa and immigration applications in the US, Canada, Australia, UK & more',
          'You consult in English; our Cebu team handles all Philippine government offices',
          'Transparent pricing with no hidden fees or surprise add-ons',
        ]}
        ctaText="Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Applying for a K-1 Fiancé Visa (USA)',
            description: 'USCIS requires a CENOMAR with DFA Apostille as proof of your Filipino partner\'s single status.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Filing for a CR-1 or IR-1 Spouse Visa (USA)',
            description: 'We handle the full document chain — PSA issuance, DFA Apostille, and international shipping.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Canada Spousal Sponsorship (IRCC)',
            description: 'IRCC requires CENOMAR with authentication. We verify the correct format for your specific province and stream before starting.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Australia Partner Visa / UK Spouse Visa',
            description: 'Home Affairs (Australia) and UKVI (UK) each have specific authentication requirements. We confirm before ordering.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Marriage Registration in UAE, Qatar & Gulf Countries',
            description: 'OFWs in the Gulf region often need CENOMAR for marriage registration at Philippine embassies or local civil authorities. Requirements vary by country — we verify before starting.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what you need?',
            description: 'Requirements vary by visa type and destination country. Consult us first and we will confirm exactly what to order.',
          },
        ]}
      />

      <CtaBox
        title="Not Sure If You Need an Apostille?"
        description="Some USCIS offices accept e-Apostille; others require a physical original. We will confirm for your specific case before you pay. All-inclusive from US$349."
        buttonText="Ask Us for Free"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage · Pay balance only after confirming document copies"
        whatsappHref="https://wa.me/639452833727"
      />

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA CENOMAR Retrieval',
            description: 'We order the official CENOMAR directly from the Philippine Statistics Authority (PSA) on your behalf.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille Authentication',
            description: 'We submit the document to the Department of Foreign Affairs (DFA) for physical Apostille certification.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL International Shipping Worldwide',
            description: 'Your documents are shipped directly to your address worldwide with full tracking.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit the Consultation Form', description: 'Share your visa type, the full name on the Philippine ID, and your target deadline. We confirm eligibility before anything starts.' },
          { title: 'Receive Your All-Inclusive Quote', description: 'We send a fixed quote covering PSA retrieval, DFA Apostille (if needed), and DHL shipping — no surprise costs.' },
          { title: 'We Request CENOMAR from PSA, Then Queue DFA Apostille', description: 'Our Cebu team submits the PSA application, receives the CENOMAR, and handles DFA Apostille authentication on-site in the Philippines.' },
          { title: 'Original Document Delivered to You via DHL', description: 'The physical CENOMAR (with Apostille) is shipped directly to your address. Tracking number provided. Estimated 4–6 weeks from start.' },
        ]}
      />

      <FeatureList
        heading="CENOMAR Requirements by Country"
        items={[
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'USA (K-1 & CR-1 visa) — Physical Apostille required',
            description: 'USCIS and NVC require a CENOMAR issued within 6 months with a physical DFA Apostille. e-Apostille is not always accepted. We confirm the specific requirement before processing.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Canada, Australia, UK — Apostille or authentication required',
            description: 'IRCC (Canada), Home Affairs (Australia), and UKVI (UK) each have specific authentication requirements. We verify the correct format for your destination country before starting.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'UAE, Qatar, Bahrain and Gulf countries — Apostille accepted',
            description: 'Philippine nationals residing or working in the Gulf region may need CENOMAR for marriage registration at Philippine embassies or local civil authorities. Requirements vary by emirate or country — we confirm before starting.',
          },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What does CENOMAR mean?', a: 'CENOMAR stands for Certificate of No Marriage Record. It is issued by the Philippine Statistics Authority (PSA) and certifies that a Filipino citizen has no marriage record on file in the Philippines — essentially proof of single status.' },
          { q: 'What is a CENOMAR used for?', a: 'CENOMAR is required for K-1 fiancé visa applications, CR-1/IR-1 spouse visas, Canada spousal sponsorship, Australia partner visa, UK spouse visa, and most other immigration applications involving a Filipino national.' },
          { q: 'How much does it cost?', a: 'All-inclusive from US$349 (PSA retrieval + DHL shipping). DFA Apostille is an additional ~US$100. See our Pricing page for the full breakdown.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks. PSA issuance takes 2–3 weeks, DFA Apostille takes 1–2 weeks, and DHL international shipping takes 3–5 business days.' },
          { q: 'Can you handle rush orders?', a: 'Yes. Let us know your deadline and we will check if expedited processing is available.' },
          { q: 'Do I need a physical Apostille or is e-Apostille OK?', a: 'Most USCIS offices require a physical Apostille original. We will confirm the requirement for your specific case before processing.' },
          { q: 'I was previously married. Do I still need a CENOMAR?', a: 'If your previous marriage was annulled or dissolved, CENOMAR may still be required but will reflect your current civil status. For previously married applicants, additional documents proving dissolution of prior marriage may also be needed. Consult us for your specific case.' },
          { q: 'I am a dual citizen (Filipino and another nationality). Can I get CENOMAR?', a: 'Yes. CENOMAR is based on your records in the PSA database, tied to your Philippine civil registration. Dual citizenship status does not prevent you from obtaining CENOMAR. We will confirm the correct name to use based on your PSA records.' },
        ]}
        ctaTitle="Ready to Get Started?"
        ctaButton="Free Consultation"
      />

      <RelatedArticles
        items={[
          { href: '/en/cenomar-vs-marriage-certificate/', title: 'CENOMAR vs. PSA Marriage Certificate', description: 'K-1, CR-1, Canada, or Australia? Find out which document your visa type actually requires.' },
          { href: '/en/cenomar-validity/', title: 'CENOMAR Validity & Timing', description: 'CENOMAR is valid for 6 months. We time retrieval to meet your deadline.' },
          { href: '/en/cenomar-apostille/', title: 'Does CENOMAR Need Apostille?', description: 'When DFA Apostille is required and when it is not.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Full checklist of Philippine documents needed per visa type.' },
        ]}
      />
    </PageLayout>
  );
}
