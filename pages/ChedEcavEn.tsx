import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import FeatureList from '../components/FeatureList';
import SectionDivider from '../components/SectionDivider';
import StepList from '../components/StepList';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import RelatedArticles from '../components/RelatedArticles';
import { FileCheck, Globe, Zap, GraduationCap, ShieldCheck, AlertTriangle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

const TITLE = 'CHED eCAV Processing Service — Diploma & TOR Authentication for OFWs [2026]';
const DESCRIPTION =
  'CHED eCAV + e-Apostille for Filipino professionals abroad. Fully electronic since March 2026 — no international shipping needed. From US$99. We handle CHED submission, e-Apostille filing, and university document retrieval.';

export default function ChedEcavEn() {
  useMeta(TITLE, DESCRIPTION);
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'CHED eCAV Processing' }]}
      description={DESCRIPTION}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'CHED eCAV Processing and e-Apostille',
          name: 'CHED eCAV Processing Service',
          url: 'https://ph-document.com/en/ched-ecav/',
          provider: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
          areaServed: ['US', 'CA', 'AU', 'GB', 'AE', 'MY', 'SG'],
          description: DESCRIPTION,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is CHED eCAV?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CHED eCAV (Electronic Certificate of Authentication and Verification) is the Commission on Higher Education\'s electronic authentication of Philippine college transcripts, diplomas, and related academic records for use abroad.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do I need to ship my documents internationally?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. Since March 16, 2026, CHED eCAV and its DFA Apostille are issued fully electronically for Apostille Convention member countries. No paper original is mailed, and no international courier fee applies.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does CHED eCAV processing cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'If you already hold certified true copies of your TOR and diploma, CHED eCAV processing alone starts at US$99, or US$129 including the DFA e-Apostille. If we also need to retrieve the certified documents from your university, pricing starts at US$199.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is CHED eCAV enough, or do I also need PRC verification?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CHED eCAV authenticates your academic records (TOR, diploma). If your destination requires proof of your professional license or board exam results, that is a separate PRC document, and in some cases a Stateboard Verification specific to the receiving country\'s regulatory body.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="CHED eCAV: Get Your Diploma Authenticated for Use Abroad"
        badges={['Fully Electronic', 'No International Shipping', 'e-Apostille Since March 2026']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="July 2026"
      />

      <SummaryBlock
        conclusion="CHED eCAV authenticates your Philippine college diploma and transcript for use abroad — and since March 2026 the whole process, including Apostille, is fully electronic. No courier needed."
        points={[
          'CHED eCAV covers TOR, diploma, Certificate of Graduation, and Related Learning Experience records for medical-allied graduates',
          'Since March 16, 2026, DFA issues e-Apostille only for CHED eCAVs — no paper original, no shipping cost',
          'Official government fees total just ₱280 (₱80 CHED + ₱200 DFA); our service fee covers submission, tracking, and delivery of the completed files',
          'The hardest part is usually getting the correctly formatted certified documents from your university — we can handle that step too',
        ]}
        ctaText="Start My CHED eCAV"
      />

      <SectionDivider variant="beige">
        <h2 className="text-base font-bold text-gray-900 mb-4">What CHED eCAV Covers</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          CHED eCAV is the Commission on Higher Education's electronic authentication of your academic records. It is commonly required by
          foreign employers, immigration authorities, and professional regulatory bodies as proof that your Philippine degree is genuine.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <FileCheck className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>Transcript of Records (TOR)</span>
          </li>
          <li className="flex items-start gap-2">
            <FileCheck className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>Diploma / Certificate of Graduation</span>
          </li>
          <li className="flex items-start gap-2">
            <FileCheck className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>Certificate of Units Earned</span>
          </li>
          <li className="flex items-start gap-2">
            <FileCheck className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>Related Learning Experience (RLE) Record — for nursing, physical therapy, and other medical-allied graduates</span>
          </li>
          <li className="flex items-start gap-2">
            <FileCheck className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>Special Order, when applicable to your program</span>
          </li>
        </ul>
        <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 p-3 flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            Maritime graduates (BSMT / BSMarE): as of January 1, 2026, CAV and Special Order processing for these programs moved from CHED to MARINA. Contact us to confirm the correct process for your degree.
          </p>
        </div>
      </SectionDivider>

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <GraduationCap className="w-4 h-4" />,
            title: 'Nurses, therapists, engineers, and other Philippine-degree holders applying to work abroad',
            description: 'Foreign employers and licensing boards frequently require CHED eCAV as proof your degree is genuine and CHED-recognized.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'OFWs already overseas who cannot visit CHED or their university in person',
            description: 'We handle the CHED eCAV account, upload, and e-Apostille application from the Philippines on your behalf.',
          },
          {
            icon: <Zap className="w-4 h-4" />,
            title: 'Applicants who need it delivered electronically, fast',
            description: 'No printing, no courier — the completed CHED eCAV and e-Apostille arrive as verifiable digital files you can forward directly.',
          },
        ]}
      />

      <CtaBox
        title="Have your certified TOR and diploma already? Start today."
        description="We create your CHED eCAV account, submit your documents, and file the DFA e-Apostille application on your behalf."
        buttonText="Get a Free Quote"
        href="#contact"
        service="CHED eCAV"
        variant="primary"
        trustNote="50% deposit on order · Balance due after CHED confirms receipt · Free cancellation before start"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Certified documents from your university', description: 'You provide Registrar-certified copies of your TOR and diploma (RLE record too, for medical-allied programs). If you don\'t have these yet, we can request them from your school.' },
          { title: 'CHED eCAV account & submission', description: 'We create your profile on the CHED eCAV portal, upload clear PDF copies, and complete the application on your behalf.' },
          { title: 'CHED review', description: 'CHED verifies your records against school submissions. We track the status and follow up if anything is queried.' },
          { title: 'DFA e-Apostille via PARS', description: 'Once CHED releases the eCAV, we file the e-Apostille request with DFA. Apostille Convention member countries receive the electronic version only.' },
          { title: 'Electronic delivery to you', description: 'You receive the CHED eCAV, source documents, and DFA e-Apostille as verifiable digital files — ready to forward to your employer or licensing board.' },
        ]}
      />

      <SectionDivider variant="blue">
        <h2 className="text-base font-bold text-gray-900 mb-4">Pricing</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          Official government fees are only ₱80 (CHED) + ₱200 (DFA e-Apostille) — about ₱280 total. Our service fee below covers account setup, document
          submission, status tracking, and verified electronic delivery.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl bg-white border border-gray-200 p-5 flex flex-col">
            <p className="text-sm font-bold text-gray-800 mb-1">CHED eCAV Processing Only</p>
            <p className="text-xs text-gray-500 mb-3">You already have certified TOR &amp; diploma</p>
            <p className="text-3xl font-extrabold text-primary mb-1">US$99</p>
            <p className="text-xs text-gray-400 mb-4">Electronic delivery only, no shipping</p>
            <ul className="text-xs text-gray-600 space-y-1.5 mt-auto">
              <li>Account setup &amp; submission</li>
              <li>Status tracking</li>
              <li>Digital delivery of eCAV</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white border-2 border-primary/40 shadow-md p-5 flex flex-col relative">
            <span className="absolute -top-2.5 left-5 bg-primary text-secondary text-xs font-bold px-2 py-0.5 rounded-full">Most requested</span>
            <p className="text-sm font-bold text-gray-800 mb-1 mt-1">CHED eCAV + e-Apostille</p>
            <p className="text-xs text-gray-500 mb-3">Full authentication, ready to submit abroad</p>
            <p className="text-3xl font-extrabold text-primary mb-1">US$129</p>
            <p className="text-xs text-gray-400 mb-4">Electronic delivery only, no shipping</p>
            <ul className="text-xs text-gray-600 space-y-1.5 mt-auto">
              <li>Everything in Processing Only</li>
              <li>DFA e-Apostille filing via PARS</li>
              <li>Verifiable digital Apostille file</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white border border-gray-200 p-5 flex flex-col">
            <p className="text-sm font-bold text-gray-800 mb-1">University Docs + eCAV + e-Apostille</p>
            <p className="text-xs text-gray-500 mb-3">We also retrieve your certified TOR &amp; diploma</p>
            <p className="text-3xl font-extrabold text-primary mb-1">from US$199</p>
            <p className="text-xs text-gray-400 mb-4">Varies by school requirements &amp; clearance</p>
            <ul className="text-xs text-gray-600 space-y-1.5 mt-auto">
              <li>University document retrieval</li>
              <li>Everything in the e-Apostille package</li>
              <li>Final quote confirmed after school requirements check</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-4">University document retrieval requirements vary by school (some require the graduate's own request, an Authorization Letter, or clearance) — final pricing is confirmed after we review your school's specific process.</p>
      </SectionDivider>

      <div className="mb-10 rounded-xl border border-gray-100 bg-gray-50/50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck className="w-4 h-4 text-gray-400" />
          <h3 className="text-sm font-bold text-secondary">Not included</h3>
        </div>
        <ul className="text-xs text-gray-500 space-y-1.5 list-disc list-inside">
          <li>Printed copies — CHED e-Apostille recipients must accept the electronic file; we do not produce a printed "original"</li>
          <li>PRC license or board-rating verification (a separate service — see our PRC Certificate Retrieval page)</li>
          <li>Stateboard or foreign regulatory board submission (e.g. UK NMC, CGFNS, NNAS) — quoted separately per receiving body</li>
          <li>Guarantee of your receiving institution's acceptance — we confirm requirements with you before starting, but final acceptance is decided by that institution</li>
        </ul>
      </div>

      <FaqSection
        items={[
          { q: 'What is CHED eCAV?', a: 'CHED eCAV (Electronic Certificate of Authentication and Verification) is the Commission on Higher Education\'s electronic authentication of your Philippine transcript, diploma, and related academic records for use abroad.' },
          { q: 'Do I need to ship anything internationally?', a: 'No. Since March 16, 2026, CHED eCAV and its DFA Apostille are issued fully electronically for Apostille Convention member countries. No paper original is mailed and no courier fee applies.' },
          { q: 'How much does it cost?', a: 'From US$99 for processing only (if you already have certified TOR and diploma), US$129 including the DFA e-Apostille, or from US$199 if we also need to retrieve the certified university documents on your behalf.' },
          { q: 'What if my university documents are incomplete or my school is difficult to reach?', a: 'This is the most variable part of the process — requirements differ by school (Registrar rules, clearance, graduation year). We confirm your school\'s specific requirements and quote before starting.' },
          { q: 'Is CHED eCAV the same as PRC verification?', a: 'No. CHED eCAV authenticates your academic degree. PRC documents (Certificate of Passing, Board Rating, Good Standing) verify your professional license separately. Many overseas applications need both.' },
          { q: 'Can e-Apostille be printed and used as a paper document?', a: 'A printed copy is not treated as a valid original by DFA. The verifiable electronic file (or DFA\'s verification email) is what should be forwarded to the receiving institution. We confirm acceptance requirements with you before starting.' },
        ]}
      />

      <RelatedArticles
        items={[
          { href: '/en/prc-certificate/', title: 'PRC Certificate Retrieval + Apostille', description: 'Certificate of Passing, Board Rating, and Good Standing for licensed Filipino professionals abroad.' },
          { href: '/en/apostille/', title: 'DFA Apostille Authentication', description: 'Which documents are eligible, processing time, and cost.' },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Retrieval', description: 'Police clearance retrieval with DFA Apostille for immigration and employment abroad.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Which Philippine documents you need for K-1, CR-1, Canada, Australia, UK, and more.' },
        ]}
      />
    </PageLayout>
  );
}
