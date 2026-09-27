import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import RelatedArticles from '../components/RelatedArticles';
import { FileCheck, Globe, AlertTriangle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function DocumentChecklistByVisaEn() {
  useMeta(
    'Philippine Document Checklist by Visa Type — K-1, CR-1, Spouse Visa | Philippine Document Service',
    'Which Philippine documents do you need? Complete checklist by visa type: K-1 fiancé visa, CR-1/IR-1 spouse visa, Canada spousal sponsorship, Australia partner visa, UK spouse visa, UAE, and Japan. CENOMAR, PSA, NBI — all explained.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Document Checklist by Visa Type' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Philippine Document Checklist by Visa Type',
          description: 'Complete checklist of Philippine documents required for K-1, CR-1/IR-1, Canada, Australia, UK, and Japan visa and immigration applications.',
          url: 'https://ph-document.com/en/document-checklist-by-visa/',
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
              name: 'What Philippine documents do I need for a K-1 visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For a K-1 fiancé visa, document requirements differ between petition and interview stages. PSA civil records and NBI Clearance may be requested. If authentication is required for a PSA e-Certificate used in an Apostille Convention country, DFA issues a digital e-Apostille. Confirm the current USCIS, NVC, and embassy instructions before ordering.',
              },
            },
            {
              '@type': 'Question',
              name: 'What Philippine documents do I need for a CR-1 visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For a CR-1/IR-1 spouse visa, the applicable original PSA Marriage and Birth Certificates and NBI Clearance may be required. The U.S. Embassy Manila checklist does not impose a universal DFA Apostille requirement.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do all Philippine documents need DFA Apostille?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. Hague Convention membership explains how an Apostille is recognized when one is required; it does not make authentication mandatory for every immigration document. Check the current authority- and visa-specific instructions.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take to get all Philippine documents ready?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Each document takes approximately 4–6 weeks (PSA 2–3 weeks + DFA Apostille 1–2 weeks + DHL 3–5 business days). If you need multiple documents, we can process them simultaneously. Plan at least 6–8 weeks before your visa interview.',
              },
            },
          ],
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['#faqsection-heading', "[id^='faqsec-panel-']"],
          },
        },
      ]}
    >
      <HeroBanner
        title="Philippine Document Checklist by Visa Type"
        badges={['K-1 · CR-1 · Canada · Australia · UK · UAE · Japan', 'All-Inclusive Service', 'Free Consultation']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="The documents you need depend on your visa type. Use this checklist to identify exactly what to order — then let us retrieve everything."
        points={[
          'K-1 fiancé visa: requirements differ between petition and interview stages',
          'CR-1/IR-1 spouse visa: PSA Marriage Certificate + PSA Birth Certificate + NBI Clearance',
          'Apostille is arranged only when the receiving authority specifically requires it',
          'We can retrieve multiple documents simultaneously to save time',
        ]}
        ctaText="Get All Documents in One Order"
      />

      {/* Quick Reference Table */}
      <div className="my-8 overflow-x-auto">
        <h2 className="text-base font-bold text-secondary mb-3">Quick Reference: Documents by Visa Type</h2>
        <table className="w-full text-xs border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-secondary text-white">
              <th className="px-3 py-2.5 text-left font-semibold">Document</th>
              <th className="px-3 py-2.5 text-center font-semibold">K-1</th>
              <th className="px-3 py-2.5 text-center font-semibold">CR-1/IR-1</th>
              <th className="px-3 py-2.5 text-center font-semibold">Canada</th>
              <th className="px-3 py-2.5 text-center font-semibold">Australia</th>
              <th className="px-3 py-2.5 text-center font-semibold">UK</th>
              <th className="px-3 py-2.5 text-center font-semibold">Japan</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['CENOMAR', '✓', '△*', '△*', '△*', '△*', '✓†'],
              ['PSA Birth Certificate', '✓', '✓', '✓', '✓', '✓', '✓'],
              ['PSA Marriage Certificate', '—', '✓', '✓', '✓', '✓', '✓'],
              ['NBI Clearance', '✓', '✓', '✓', '✓', '✓', '✓'],
              ['DFA Apostille', '△', '△', '△', '△', '△', '△'],
            ].map(([doc, ...checks], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-3 py-2.5 font-medium text-gray-700 border-t border-gray-100">{doc}</td>
                {checks.map((c, j) => (
                  <td key={j} className={`px-3 py-2.5 text-center border-t border-gray-100 font-medium ${c === '✓' ? 'text-green-600' : c === '—' ? 'text-gray-300' : 'text-yellow-600'}`}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-gray-400 mt-2">✓ = typically required · △ = may be required (case-dependent) · — = not required · * = required if previously married · † = required for pre-marriage registration</p>
      </div>

      <FeatureList
        heading="K-1 Fiancé Visa (USA) — Philippine Documents Needed"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'CENOMAR, if requested',
            description: 'May be requested as evidence of civil status. Document age and authentication requirements depend on the current application-stage checklist.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA Birth Certificate',
            description: 'The U.S. Embassy Manila checklist calls for the applicable original birth certificate. DFA Apostille is not listed as a universal requirement.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBI Clearance',
            description: 'The current Embassy checklist requires a valid NBI Clearance for applicants over 16. DFA Apostille is not listed as a universal requirement.',
          },
        ]}
      />

      <FeatureList
        heading="CR-1 / IR-1 Spouse Visa (USA) — Philippine Documents Needed"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA Marriage Certificate',
            description: 'Proof of a Philippine marriage. The applicable original is required; DFA Apostille is not listed as a universal U.S. requirement.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA Birth Certificate',
            description: 'The applicable original birth certificate is required for the immigrant visa application. Follow the current Embassy checklist.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBI Clearance',
            description: 'Required for visa applicants 16 and older. Must be issued within 6 months. HIT cases require additional handling.',
          },
        ]}
      />

      <CtaBox
        title="We retrieve all documents in one order"
        description="CENOMAR, PSA Birth Certificate, PSA Marriage Certificate, NBI Clearance — we can process everything simultaneously. One point of contact, one quote, one shipment."
        buttonText="Get a Combined Quote"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage · Pay balance only after confirming document copies"
      />

      <FeatureList
        heading="Canada, Australia, UK, UAE & Japan — Key Requirements"
        items={[
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Canada (IRCC spousal sponsorship)',
            description: 'PSA civil records and NBI Clearance may be requested depending on the application. IRCC does not impose a universal DFA Apostille requirement; confirm the current checklist.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Australia (Department of Home Affairs partner visa)',
            description: 'PSA civil records and police certificates may be requested depending on the visa subclass and circumstances. Confirm the current Home Affairs checklist before ordering authentication.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'UK (UKVI spouse visa)',
            description: 'PSA civil records and NBI Clearance may be requested. Confirm the current UKVI route-specific checklist and authentication requirements.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'UAE (residence visa / family sponsorship)',
            description: 'Requirements vary by emirate, employer, and visa category. Confirm the exact legalization chain before ordering PSA records or NBI Clearance.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Japan (spouse visa)',
            description: 'The required foreign marriage certificate and Japanese translation depend on the procedure. PSA Birth Certificate, CENOMAR, and Apostille are not universally required; confirm with the municipal office or immigration authority.',
          },
        ]}
      />

      <FeatureList
        heading="Common Mistakes to Avoid"
        items={[
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Ordering CENOMAR instead of PSA Marriage Certificate (or vice versa)',
            description: 'These documents prove opposite things. K-1 needs CENOMAR; CR-1 needs PSA Marriage Certificate. Getting the wrong one means waiting another 4–6 weeks.',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Ordering authentication without checking the destination',
            description: 'Apostille is not universally required. Since 16 March 2026, PSA Apostilles for Convention countries are issued electronically and must be submitted as digital files, not paper Apostilles.',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Starting too late',
            description: 'CENOMAR and NBI Clearance both have 6-month validity windows for most immigration purposes. If you start too late and the document expires before your interview, you have to start over.',
          },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What Philippine documents do I need for a K-1 visa?', a: 'Requirements differ between petition and interview stages. PSA civil records and NBI Clearance may be requested. Confirm the current USCIS and Embassy instructions before ordering.' },
          { q: 'What Philippine documents do I need for a CR-1 visa?', a: 'The applicable original PSA Marriage and Birth Certificates and NBI Clearance may be required. The U.S. Embassy Manila checklist does not impose a universal DFA Apostille requirement.' },
          { q: 'Do all Philippine documents need DFA Apostille?', a: 'No. Hague Convention membership explains how an Apostille is recognized when required; it does not make authentication mandatory for every immigration document.' },
          { q: 'How long does it take to get all documents ready?', a: 'Each document takes approximately 4–6 weeks. We can process multiple documents simultaneously. Plan at least 6–8 weeks before your visa interview.' },
          { q: 'Can you retrieve multiple documents at the same time?', a: 'Yes. We can process CENOMAR, PSA Birth Certificate, PSA Marriage Certificate, and NBI Clearance simultaneously. This saves significant time compared to ordering one by one.' },
        ]}
        ctaTitle="Not sure what your visa requires? Ask us."
        ctaButton="Free Consultation"
      />

      <RelatedArticles
        items={[
          { href: '/en/cenomar-vs-marriage-certificate/', title: 'CENOMAR vs. Marriage Certificate', description: 'Still confused about which one you need? Read this first.' },
          { href: '/en/k1-visa-documents/', title: 'K-1 Visa Document Guide', description: 'Detailed guide for K-1 fiancé visa Philippine document requirements.' },
          { href: '/en/cr1-visa-documents/', title: 'CR-1 Visa Document Guide', description: 'Philippine documents for CR-1/IR-1 spouse visa applicants.' },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Retrieval', description: 'Everything about NBI Clearance: retrieval, HIT cases, validity.' },
        ]}
      />
    </PageLayout>
  );
}
