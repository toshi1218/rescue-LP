import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { Heart, FileCheck, Globe, Users, AlertTriangle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR } from '../lib/seoDate';
import RelatedArticles from '../components/RelatedArticles';
import PaymentTrust from '../components/PaymentTrust';

export default function NbiGuideEn() {
  useMeta(
    `NBI Clearance Philippines ${SEO_YEAR}: From Abroad + Apostille`,
    'Get Philippine NBI Clearance from abroad. First-time fingerprint and renewal support, paper originals via DHL, and eGovPH e-Apostille guidance when required.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'NBI Clearance Support' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'NBI Clearance Application Support (+ DFA Apostille)',
        description: 'Support for first-time and renewal NBI applications, paper clearance delivery via DHL, and eGovPH e-Apostille applications when required and eligible.',
        url: 'https://ph-document.com/en/nbi-clearance/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'KR'],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '399',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '399',
            priceCurrency: 'USD',
            description: 'NBI retrieval and DHL shipping, with e-Apostille application support when required and eligible',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Packages start at US$399. We quote the first-stage fee and confirm which authentication and shipping services are required before work begins.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A typical case takes about 4–6 weeks. Fingerprint delivery, record checks, identity verification, and shipping can extend that estimate.',
              },
            },
            {
              '@type': 'Question',
              name: 'What if the NBI result shows a HIT?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A HIT means a record was found in the NBI database. This requires separate handling. Share your situation and we will advise on next steps.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can you handle urgent cases?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Share your deadline and we will confirm whether priority processing is feasible before you commit.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="NBI Clearance — Application Support & Shipping Worldwide"
        badges={['First-Time and Renewal Support', 'Paper Clearance via DHL', 'eGovPH Guidance']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="November 22, 2026"
      />

      <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto text-center px-4">
        NBI Clearance is a criminal background check issued by the{' '}
        <a href="http://nbi.gov.ph" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Philippine National Bureau of Investigation (NBI)</a>.
        {' '}Required for most visa and immigration applications in the US, Canada, Australia, UK, and Japan.
      </p>

      <section className="mb-8 space-y-3 rounded-xl border border-gray-200 p-5 text-sm leading-relaxed text-gray-700">
        <h2 className="text-xl font-bold text-gray-900">Choose an NBI Clearance route from abroad</h2>
        <p><strong>First-time applications</strong> — First-time applicants have their fingerprints taken on Form No. 5. We help submit the original fingerprint card and required documents to NBI headquarters in Manila. We confirm the first-stage fee before starting. <a href="https://nbi.gov.ph/mailed-clearance-abroad/" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">Official NBI guidance for overseas applicants</a></p>
        <p><strong>Online renewal</strong> — If you still have your previous clearance, check the <a href="https://clearance.nbi.gov.ph/" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">official NBI renewal portal</a> for eligibility and delivery options before paying. If you need a paper clearance overseas, the NBI also allows many certificates issued from 2014 onward to be renewed by mail or through an authorized representative, subject to its requirements. Tell us your last issue year and whether your personal details changed so we can check the right route.</p>
        <p><strong>If the portal cannot verify your record</strong> — Tell us whether the portal shows an error, asks you to appear, or reports a <a href="/en/nbi-hit/" className="font-semibold underline underline-offset-2">HIT</a>. We can help check what the NBI requires before you pay or book an appointment.</p>
        <p><strong>When an Apostille is required</strong> — Since October 23, 2026, DFA issues only e-Apostilles for NBI eClearances obtained through eGovPH for destinations where the Apostille Convention applies. A paper NBI Clearance cannot be submitted for Apostille through the former counter process. We check eGovPH eligibility and help with application preparation, entry, and payment where available. Applicants complete any required identity verification themselves. We check verification options for foreign passport holders individually. <a href="https://www.apostille.gov.ph/documentary-requirements/" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">Official DFA requirements</a></p>
        <p><strong>Canada Working Holiday</strong> — IRCC does not accept the digital or online version of Philippine NBI Clearance as a police certificate. For International Experience Canada (IEC), including Working Holiday, obtain the paper-issued clearance unless your individual instructions specify otherwise. The standard IRCC guidance does not list an Apostille. <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/police-certificates/how/philippines.html" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">Official IRCC guidance</a></p>
      </section>

      <SummaryBlock
        conclusion="You can obtain Philippine NBI Clearance while abroad. The required route depends on whether this is a renewal or a first-time application."
        points={[
          'Eligible renewals can often be handled remotely. First-time applicants use Form No. 5 and consular fingerprinting.',
          'Packages from US$399, with the first-stage fee confirmed before work begins',
          'Timeline: approximately 4–6 weeks; HIT cases may take longer',
          'Prepare: passport or ID, current address, purpose of use, and prior NBI details if available',
        ]}
        ctaText="Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Filing a visa or immigration application',
            description: 'Many procedures request NBI Clearance, but authentication requirements vary. We confirm the current receiving-authority checklist before processing.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'No contacts in the Philippines',
            description: 'Our Cebu-based team handles everything locally. You just need to provide the applicant information.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what format is required',
            description: 'We confirm whether Apostille is needed for your specific submission authority before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm requirements before we start"
        description="Apostille required or not? We verify for your specific case so you do not pay for the wrong document."
        buttonText="Talk to Us"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage · Pay balance only after confirming document copies"
      />


      <CtaBox
        title="Three family members applying together?"
        description="Our US$1,249 family package includes three PSA Birth Certificates, three first-time NBI Clearances, the applicable DFA Apostilles, case coordination, and one consolidated DHL shipment."
        buttonText="View the 3-Applicant Package"
        href="/en/family-psa-nbi-package/"
        variant="primary"
        trustNote="US$1,249 total · Two payments of US$624.50"
      />

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBI application support',
            description: 'Renewal cases: our Cebu team handles the NBI process remotely. First-time applicants: we guide you through embassy fingerprint registration and online application steps.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille authentication',
            description: 'We check eGovPH eligibility and help with application preparation, entry, and payment where available. Applicants complete any required identity verification themselves. We check verification options for foreign passport holders individually.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping worldwide',
            description: 'Tracked international delivery directly to your door anywhere in the world. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry with NBI status', description: 'Tell us your use case (K-1, CR-1, Canada PR, etc.), your last NBI issuance year, whether any personal info has changed, and any known HIT issues.' },
          { title: 'We confirm your case type and provide a quote', description: 'We check whether remote renewal is available or a new fingerprint submission is required, and quote the scope before work starts.' },
          { title: 'Processing begins based on your case type', description: 'For renewals, we check your previous record. For first-time cases, we guide you through fingerprinting and handle the local submission to NBI headquarters.' },
          { title: 'Receive the agreed documents', description: 'We send the paper clearance by tracked DHL when required. If an e-Apostille is issued, we deliver the electronic document separately.' },
        ]}
      />

      <FeatureList
        heading="Common Issues We Help Resolve"
        items={[
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'NBI HIT (MATCH FOUND)',
            description: 'A HIT does not always mean a criminal record — it often means someone with the same name has a record. We handle HIT verification and resolution so your clearance can be issued.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBI expired before your visa deadline',
            description: 'NBI Clearance is valid for 1 year, but many immigration authorities require it within 6 months. If your NBI is expiring, we handle re-retrieval and time it for your submission date.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Getting NBI while living overseas',
            description: 'OFWs and Filipinos abroad can get NBI Clearance without returning to the Philippines. Our Cebu team acts as your authorized representative at the NBI office.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Name discrepancy between NBI and passport',
            description: 'A name mismatch between your NBI document and passport can cause immigration problems. We advise on how to address discrepancies before they become issues at the interview.',
          },
        ]}
      />

      <PaymentTrust />

      <FaqSection
        items={[
          { q: 'How much does it cost?', a: 'Packages start at US$399. We quote the first-stage fee and confirm which authentication and shipping services are required before work begins.' },
          { q: 'How long does it take?', a: 'A typical case takes about 4–6 weeks. Fingerprint delivery, record checks, identity verification, and shipping can extend that estimate.' },
          { q: 'What if the NBI result shows a HIT?', a: 'A HIT means a record was found in the NBI database. This requires separate handling. Share your situation and we will advise on next steps.' },
          { q: 'Can you handle urgent cases?', a: 'Yes. Share your deadline and we will confirm whether priority processing is feasible before you commit.' },
          { q: 'Can I get NBI Clearance without going back to the Philippines?', a: 'First-time applicants can have fingerprints taken through a Philippine embassy or consulate and submit Form No. 5 to NBI in Manila. For online renewal, check your eligibility in the NBI portal. The NBI also accepts eligible clearances issued from 2014 onward for renewal by mail or through an authorized representative. If your details have changed or NBI requests additional checks, we review the requirements for your case.' },
          { q: 'What if my name on the NBI does not match my passport?', a: 'Name discrepancies can cause problems at immigration interviews. The NBI document must match your passport exactly. Share the discrepancy details and we will advise on the appropriate correction step.' },
          { q: 'Is NBI Clearance the same as a police clearance?', a: 'No. NBI Clearance is a national-level criminal background check from the National Bureau of Investigation. Police clearance is a local-level document from your local police station. Immigration authorities typically require NBI Clearance, not local police clearance.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/nbi-clearance-overseas/', title: 'NBI Clearance from Overseas', description: 'OFWs and Filipinos abroad: get NBI without returning to the Philippines.' },
          { href: '/en/nbi-hit/', title: 'NBI HIT Resolution', description: 'MATCH FOUND result? We handle verification and resolution.' },
          { href: '/en/nbi-validity/', title: 'NBI Validity & Timing', description: 'How long is NBI Clearance valid and when to request it.' },
          { href: '/en/psa-crs-cebu-report/', title: 'PSA Birth Certificate at Cebu — Field Report', description: 'Step-by-step guide for obtaining PSA documents at the Cebu office.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Which documents you need for K-1, CR-1, spouse visa, and more.' },
        ]}
      />
    </PageLayout>
  );
}
