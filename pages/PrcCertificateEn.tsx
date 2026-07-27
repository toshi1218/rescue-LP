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
import { FileCheck, ShieldCheck, AlertTriangle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

const TITLE = 'PRC Certificate Retrieval + Apostille Service [2026] — Passing, Rating & Good Standing';
const DESCRIPTION =
  'We retrieve PRC Certificate of Passing, Board Rating, or Good Standing for licensed Filipino professionals abroad, using PRC\'s scanned-authorization process. DFA Apostille and DHL shipping included. From US$249.';

export default function PrcCertificateEn() {
  useMeta(TITLE, DESCRIPTION);
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PRC Certificate Retrieval' }]}
      description={DESCRIPTION}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'PRC Certificate Retrieval and Apostille',
          name: 'PRC Certificate Retrieval + Apostille Service',
          url: 'https://ph-document.com/en/prc-certificate/',
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
              name: 'What PRC documents can you retrieve?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We handle standard PRC certificates: Certificate of Passing, Certificate / Official Report of Rating, and Certificate of Good Standing. Stateboard Verification and other foreign regulatory board submissions are quoted separately.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do I need to send original documents to the Philippines?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Under PRC\'s July 2026 policy update, overseas registered professionals can submit their Authorization Letter and supporting documents as scanned PDFs instead of mailing physical originals, which significantly shortens the process.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does PRC certificate retrieval cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Standard PRC document procurement starts at US$249. Adding DFA physical Apostille and DHL worldwide shipping starts at US$399. Stateboard Verification and other foreign regulatory board submissions are quoted individually.',
              },
            },
            {
              '@type': 'Question',
              name: 'Why does PRC still require a physical Apostille?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PRC documents are not yet part of the Philippines\' fully digital Apostille program, which currently covers PSA eCertificates and CHED eCAVs. PRC certificates still require the traditional route: PRC retrieval, then a paper DFA Apostille, then international shipping.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="PRC Certificate Retrieval for Filipino Professionals Abroad"
        badges={['LERIS-Based Application', 'Scanned Authorization (July 2026 Update)', 'DFA Apostille + DHL Worldwide']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="July 2026"
      />

      <SummaryBlock
        conclusion="We retrieve standard PRC certificates for licensed Filipino professionals abroad and arrange DFA Apostille + DHL delivery worldwide. A July 2026 PRC policy update now allows scanned authorization instead of mailed originals, making overseas cases significantly easier."
        points={[
          'Covers Certificate of Passing, Certificate / Official Report of Rating, and Certificate of Good Standing',
          'You apply and book through LERIS; we handle the in-person PRC office visit, DFA Apostille, and shipping',
          'Since July 2026, your Authorization Letter and supporting documents can be submitted as scanned PDFs — no mailed originals required in most cases',
          'Stateboard Verification for specific foreign regulatory bodies (UK NMC, CGFNS, NNAS, NCNZ, and others) is a separate service, quoted per receiving body',
        ]}
        ctaText="Ask About My PRC Case"
      />

      <SectionDivider variant="beige">
        <h2 className="text-base font-bold text-gray-900 mb-4">What Changed in July 2026</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Under PRC's updated overseas procedure, registered professionals living abroad no longer always need to mail original authorization
          documents to the Philippines. You can now send scanned PDFs directly from your LERIS-registered email to the PRC office handling your
          request.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl bg-white border border-gray-200 p-5">
            <p className="text-sm font-bold text-gray-800 mb-2">You prepare and send (as PDF)</p>
            <ul className="text-xs text-gray-600 space-y-1.5">
              <li>Signed Authorization Letter</li>
              <li>Waiver / Verification / Accountability form</li>
              <li>Proof of overseas residence</li>
              <li>Sent from your LERIS-registered email to the PRC office</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white border border-gray-200 p-5">
            <p className="text-sm font-bold text-gray-800 mb-2">Our agent handles in the Philippines</p>
            <ul className="text-xs text-gray-600 space-y-1.5">
              <li>Valid government ID</li>
              <li>Deed of Undertaking</li>
              <li>Video confirmation with you, if PRC requests it</li>
              <li>In-person retrieval at the PRC regional office</li>
            </ul>
          </div>
        </div>
      </SectionDivider>

      <FeatureList
        heading="Documents We Retrieve"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Certificate of Passing',
            description: 'Confirms you passed a specific PRC licensure examination — commonly requested by foreign employers and licensing boards.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Certificate / Official Report of Rating',
            description: 'States your exact examination score. Some receiving institutions require this instead of, or in addition to, the Certificate of Passing.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Certificate of Good Standing',
            description: 'Confirms your license is currently valid and free of disciplinary action — often required for license transfer or renewal abroad.',
          },
        ]}
      />

      <CtaBox
        title="Already booked your LERIS appointment?"
        description="Send us your Action Sheet details and we take it from there — PRC office visit, DFA Apostille, and DHL shipping to your address."
        buttonText="Get a Free Quote"
        href="#contact"
        service="PRC Certificate"
        variant="primary"
        trustNote="50% deposit on order · Balance due after document retrieval is confirmed · Free cancellation before start"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'You apply and book via LERIS', description: 'You create or use your LERIS account to apply for the certificate and schedule the PRC transaction. We advise on which certificate type to request.' },
          { title: 'Send authorization documents as PDF', description: 'You send your signed Authorization Letter, Waiver / Verification / Accountability form, and proof of overseas residence from your LERIS-registered email to the relevant PRC office.' },
          { title: 'Our agent visits the PRC office', description: 'With valid ID and a Deed of Undertaking (plus video confirmation if PRC requests it), our agent completes the in-person transaction and retrieves your certificate.' },
          { title: 'DFA physical Apostille', description: 'PRC certificates require a paper DFA Apostille — we book and complete this authentication step in Manila or the appropriate DFA branch.' },
          { title: 'DHL delivery worldwide', description: 'Your Apostilled original is shipped with tracking to your international address. Estimated total: 5–7 weeks depending on PRC office processing time.' },
        ]}
      />

      <SectionDivider variant="blue">
        <h2 className="text-base font-bold text-gray-900 mb-4">Pricing</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          PRC retrieval requires an in-person office visit plus a paper DFA Apostille and international courier — more steps than a
          fully-electronic document, which is reflected in the pricing below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl bg-white border border-gray-200 p-5 flex flex-col">
            <p className="text-sm font-bold text-gray-800 mb-1">PRC Document Procurement</p>
            <p className="text-xs text-gray-500 mb-3">Certificate retrieval only, no Apostille</p>
            <p className="text-3xl font-extrabold text-primary mb-1">from US$249</p>
            <p className="text-xs text-gray-400 mb-4">DHL domestic-to-you shipping included</p>
            <ul className="text-xs text-gray-600 space-y-1.5 mt-auto">
              <li>LERIS coordination support</li>
              <li>In-person PRC office retrieval</li>
              <li>Shipped to your address</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white border-2 border-primary/40 shadow-md p-5 flex flex-col relative">
            <span className="absolute -top-2.5 left-5 bg-primary text-secondary text-xs font-bold px-2 py-0.5 rounded-full">Most requested</span>
            <p className="text-sm font-bold text-gray-800 mb-1 mt-1">PRC Document + DFA Apostille</p>
            <p className="text-xs text-gray-500 mb-3">Ready for foreign employer / licensing board submission</p>
            <p className="text-3xl font-extrabold text-primary mb-1">from US$399</p>
            <p className="text-xs text-gray-400 mb-4">DHL Express worldwide shipping included</p>
            <ul className="text-xs text-gray-600 space-y-1.5 mt-auto">
              <li>Everything in Document Procurement</li>
              <li>DFA physical Apostille authentication</li>
              <li>DHL Express to your international address</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white border border-gray-200 p-5 flex flex-col">
            <p className="text-sm font-bold text-gray-800 mb-1">Stateboard / Foreign Regulatory Verification</p>
            <p className="text-xs text-gray-500 mb-3">UK NMC, CGFNS, NNAS, NCNZ, and other board-specific submissions</p>
            <p className="text-3xl font-extrabold text-primary mb-1">Custom quote</p>
            <p className="text-xs text-gray-400 mb-4">Forms and process vary by receiving body</p>
            <ul className="text-xs text-gray-600 space-y-1.5 mt-auto">
              <li>Receiving-body-specific forms</li>
              <li>Office-to-office submission where required</li>
              <li>Quoted after we confirm your board's requirements</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-4">Final pricing depends on which PRC regional office holds your record, how many certificate types you need, and case complexity (e.g. name discrepancies or record corrections, which are quoted separately).</p>
      </SectionDivider>

      <div className="mb-10 rounded-xl border border-gray-100 bg-gray-50/50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck className="w-4 h-4 text-gray-400" />
          <h3 className="text-sm font-bold text-secondary">Not included — quoted separately</h3>
        </div>
        <ul className="text-xs text-gray-500 space-y-1.5 list-disc list-inside">
          <li>Stateboard Verification / Validation submitted to a specific foreign regulatory body (UK NMC, CGFNS, NNAS, NCNZ, etc.)</li>
          <li>Record correction, annotation, or re-issuance of a Certificate of Registration</li>
          <li>PRC ID renewal or replacement</li>
          <li>Cases where your PRC registration record itself has an issue (name mismatch, missing record, disciplinary flag)</li>
        </ul>
      </div>

      <div className="mb-10 rounded-xl border border-amber-200 bg-amber-50 p-5 flex items-start gap-3">
        <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800">
          PRC documents are not yet covered by the Philippines' fully digital Apostille program (currently PSA eCertificates and CHED eCAVs
          only, since March 2026). PRC certificates still require a paper DFA Apostille and physical international shipping — plan for a
          longer timeline than CHED eCAV.
        </p>
      </div>

      <FaqSection
        items={[
          { q: 'What PRC documents can you retrieve?', a: 'Standard certificates: Certificate of Passing, Certificate / Official Report of Rating, and Certificate of Good Standing. Stateboard Verification and other foreign regulatory board submissions are quoted separately.' },
          { q: 'Do I need to mail original documents to the Philippines?', a: 'Usually no. Since PRC\'s July 2026 policy update, your signed Authorization Letter and supporting documents can be sent as scanned PDFs from your LERIS-registered email. Your agent in the Philippines handles the in-person PRC office visit.' },
          { q: 'How much does this cost?', a: 'PRC document procurement starts at US$249. Adding DFA physical Apostille and DHL worldwide shipping starts at US$399. Stateboard Verification is quoted per receiving body.' },
          { q: 'How long does it take?', a: 'Plan for approximately 5–7 weeks total, depending on the PRC office handling your record and DFA Apostille scheduling. We confirm a case-specific timeline before starting.' },
          { q: 'Can my wife, relative, or a friend in the Philippines do this instead of hiring a service?', a: 'Yes, if they can complete a Deed of Undertaking and, if requested, a video confirmation with PRC. We are useful when you need a dedicated agent, DFA Apostille coordination, and international shipping handled end-to-end.' },
          { q: 'Is this the same as CHED eCAV?', a: 'No. CHED eCAV authenticates your academic degree (TOR, diploma). PRC certificates verify your professional license and exam results. Many overseas applications, especially for licensed professionals like nurses, need both.' },
          { q: 'What if PRC asks for Stateboard Verification specifically?', a: 'Stateboard Verification (e.g. UK NMC, CGFNS, NNAS, NCNZ) uses receiving-body-specific forms and sometimes an office-to-office submission process. We quote this separately once we know which board is involved.' },
        ]}
      />

      <RelatedArticles
        items={[
          { href: '/en/ched-ecav/', title: 'CHED eCAV Processing Service', description: 'Diploma & TOR authentication, fully electronic since March 2026.' },
          { href: '/en/apostille/', title: 'DFA Apostille Authentication', description: 'Which documents are eligible, processing time, and cost.' },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Retrieval', description: 'Police clearance retrieval with DFA Apostille for immigration and employment abroad.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Which Philippine documents you need for K-1, CR-1, Canada, Australia, UK, and more.' },
        ]}
      />
    </PageLayout>
  );
}
