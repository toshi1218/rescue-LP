import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import RelatedArticles from '../components/RelatedArticles';
import { AlertTriangle, FileCheck, Globe, Clock } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR } from '../lib/seoDate';

export default function PsaLateRegistrationEn() {
  useMeta(
    `PSA No Record Found? [${SEO_YEAR}] — Late Registration & Name Correction`,
    `PSA says "no record found" or has a name error? This blocks K-1, CR-1, and spouse visa. We explain the late registration process and can assist. Free consultation.`,
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PSA Late Registration & Record Issues' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'PSA No Record Found or Name Error — Late Registration & Correction Guide',
          description: 'What to do when PSA returns no record, or your birth certificate has a name or date error. These issues block visa applications. We explain the options and help you navigate them.',
          url: 'https://ph-document.com/en/psa-late-registration/',
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
              name: 'What happens if PSA says there is no birth certificate on record?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'If PSA returns a "No Record" result, it means either the birth was never registered with the civil registry, or the record exists but the information provided does not match. A late registration process is required if the birth was genuinely never recorded.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I still get a K-1 or CR-1 visa if there is no PSA record?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Not directly — USCIS and most immigration authorities require a PSA-issued birth certificate. If no record exists, a late registration must be completed first. This is a separate process from document retrieval and requires civil registry involvement in the Philippines.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the difference between late registration and annotation/correction?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Late registration is for births that were never recorded in the civil registry. Annotation or administrative correction is for existing records that contain errors (wrong name spelling, wrong date, wrong parents\' names). These are two different legal processes.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does late registration or correction take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Late registration or correction timelines vary significantly — typically 3–12 months depending on the type of correction, the local civil registry, and whether a court petition is required. Start as early as possible.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="PSA Record Missing or Has Errors? Here Is What to Do"
        badges={['No Record Scenarios', 'Name & Date Errors', 'Visa Timeline Impact']}
        ctaText="Ask About Your Situation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="A PSA record problem can block your entire visa application. The fix depends on the type of problem — and how early you start."
        points={[
          '"No Record" from PSA means the birth may not have been registered — late registration is needed',
          'Name or date errors require administrative correction or judicial petition',
          'These processes are handled in the Philippines and take months — start immediately',
          'Once corrected, we retrieve the corrected PSA document with DFA Apostille and ship it to you',
        ]}
        ctaText="Tell Us Your Situation"
      />

      <FeatureList
        heading="Common PSA Record Issues That Block Visa Applications"
        items={[
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'No Record Found — Birth Never Registered',
            description: 'PSA returns no result because the birth was never recorded with the Local Civil Registry. This is more common than many people expect, especially for older Filipinos or those born in remote areas. A late registration is required — this is a legal process at the Local Civil Registry.',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Wrong Name Spelling on the Birth Certificate',
            description: 'The name on the PSA document does not match the passport or other IDs. Even a minor spelling difference (one letter) can cause USCIS, NVC, or embassy to flag the application. An administrative correction (RA 9048) or court petition may be required.',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Wrong Date of Birth or Other Information',
            description: 'Date of birth errors require a court petition (judicial correction) under RA 9048 / RA 10172, which is a longer process. These errors are flagged immediately by biometric checks at visa interviews.',
          },
        ]}
      />

      <CtaBox
        title="First: understand what type of problem you have"
        description="Late registration, administrative correction, and judicial petition are three different processes with very different timelines. Tell us what PSA returned and we will advise on the appropriate next step."
        buttonText="Describe Your Situation"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage · Reply within 24 hours"
      />

      <FeatureList
        heading="Resolution Approaches by Issue Type"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Late Registration (No Record)',
            description: 'Filed at the Local Civil Registry where the birth occurred. Requires supporting documents (hospital records, school records, voter ID, witnesses). Takes 3–6 months typically before the record appears in PSA.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Administrative Correction (RA 9048) — for clerical errors',
            description: 'For minor name spelling errors or similar clerical mistakes. Filed at the Local Civil Registry. Faster than judicial correction — typically 3–6 months.',
          },
          {
            icon: <Clock className="w-4 h-4" />,
            title: 'Judicial Petition — for substantial corrections',
            description: 'Required for date of birth changes or changes in civil status. Requires filing a case in Philippine courts through a lawyer. This process takes 6–18 months and requires a court decision before the record is updated.',
          },
        ]}
      />

      <StepList
        heading="What Happens After the Correction Is Complete"
        steps={[
          { title: 'Local Civil Registry transmits the corrected record to PSA', description: 'After court order or civil registry approval, the corrected record is transmitted to PSA. This transmission process alone can take 3–6 months.' },
          { title: 'PSA issues the corrected document', description: 'Once the record appears in the PSA database, we retrieve the corrected birth certificate — official PSA security paper copy.' },
          { title: 'DFA Apostille authentication', description: 'We submit the document to the DFA for physical Apostille certification for international immigration use.' },
          { title: 'DHL delivery worldwide', description: 'The corrected document with Apostille is shipped to your address with full tracking. Once the PSA record is available, our part takes 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What happens if PSA says there is no birth certificate on record?', a: 'A "No Record" result means either the birth was never registered or the information provided does not match the record. Late registration may be needed — a process at the Local Civil Registry where the birth occurred.' },
          { q: 'Can I still get a K-1 or CR-1 visa if there is no PSA record?', a: 'Not directly — USCIS and most immigration authorities require a PSA-issued birth certificate. If no record exists, a late registration must be completed first.' },
          { q: 'What is the difference between late registration and annotation/correction?', a: 'Late registration is for births never recorded. Annotation or administrative correction is for existing records with errors (wrong name, wrong date). These are different legal processes.' },
          { q: 'How long does late registration or correction take?', a: 'Typically 3–12 months depending on the type of correction and whether a court petition is required. Start as early as possible.' },
          { q: 'Can you handle the late registration or correction process for me?', a: 'The correction process requires direct participation in the Philippine civil registry or court system. We can advise on the process and refer you to appropriate local resources. Once the corrected record is available in PSA, we handle retrieval, Apostille, and shipping.' },
          { q: 'My name on the PSA document differs from my passport by one letter — is that a problem?', a: 'Yes, even minor discrepancies can cause issues at USCIS, NVC, or embassy reviews. Immigration authorities perform name-matching checks. We recommend correcting the record before proceeding with your visa application.' },
        ]}
        ctaTitle="Not sure how serious your PSA issue is? Ask us."
        ctaButton="Get Free Advice"
      />

      <RelatedArticles
        items={[
          { href: '/en/psa-birth-certificate/', title: 'PSA Birth Certificate Service', description: 'Retrieval, DFA Apostille, and DHL shipping worldwide for standard PSA requests.' },
          { href: '/en/psa-birth-certificate-cost/', title: 'PSA Birth Certificate Cost', description: 'Full pricing breakdown including Apostille and international shipping.' },
          { href: '/en/k1-visa-documents/', title: 'K-1 Visa Document Guide', description: 'Complete Philippine document checklist for K-1 fiancé visa applications.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Which documents you need for K-1, CR-1, spouse visa, and more.' },
        ]}
      />
    </PageLayout>
  );
}
