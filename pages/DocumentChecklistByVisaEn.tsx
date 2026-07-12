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
import { SEO_YEAR_MONTH_EN } from '../lib/seoDate';

export default function DocumentChecklistByVisaEn() {
  useMeta(
    `Philippine Document Checklist by Visa Type [${SEO_YEAR_MONTH_EN}] | K-1, CR-1, Spouse Visa`,
    `Which Philippine documents do you need? Complete checklist by visa type: K-1, CR-1/IR-1, Canada spousal sponsorship, Australia partner visa, UK spouse visa. CENOMAR, PSA, NBI — all explained.`,
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
                text: 'For a K-1 fiancé visa, your Filipino partner typically needs: CENOMAR with DFA Apostille (proof of single status), PSA Birth Certificate with DFA Apostille, and NBI Clearance with DFA Apostille. All documents must be originals with physical Apostille.',
              },
            },
            {
              '@type': 'Question',
              name: 'What Philippine documents do I need for a CR-1 visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For a CR-1/IR-1 spouse visa, you typically need: PSA Marriage Certificate with DFA Apostille, PSA Birth Certificate with DFA Apostille, NBI Clearance with DFA Apostille. If your spouse was previously married, additional documents may be required.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do all Philippine documents need DFA Apostille?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For most immigration purposes outside the Philippines, yes. DFA Apostille authenticates Philippine-issued documents for use in Hague Convention member countries. We verify the exact requirement for your destination country before we start.',
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
          'K-1 fiancé visa: CENOMAR + PSA Birth Certificate + NBI Clearance (all with DFA Apostille)',
          'CR-1/IR-1 spouse visa: PSA Marriage Certificate + PSA Birth Certificate + NBI Clearance',
          'All documents need DFA Apostille for immigration use',
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
              ['DFA Apostille', '✓', '✓', '✓', '✓', '✓', '✓'],
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
            title: 'CENOMAR with DFA Apostille',
            description: 'Proof your Filipino fiancé(e) is legally single. USCIS requires this with a physical DFA Apostille. Valid within 6 months of submission.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA Birth Certificate with DFA Apostille',
            description: 'Required for all Philippine-born applicants. Must be an original PSA security paper copy with DFA Apostille.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBI Clearance with DFA Apostille',
            description: 'Criminal background check from the Philippine National Bureau of Investigation. Required for all K-1 applicants over 16.',
          },
        ]}
      />

      <FeatureList
        heading="CR-1 / IR-1 Spouse Visa (USA) — Philippine Documents Needed"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA Marriage Certificate with DFA Apostille',
            description: 'Proof of your legal marriage registered in the Philippines. Required for NVC submission with DFA Apostille.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA Birth Certificate with DFA Apostille',
            description: 'Required for the immigrant visa application. Must be a recent PSA-issued copy with DFA Apostille.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBI Clearance with DFA Apostille',
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
            description: 'Typically requires PSA Birth Certificate, PSA Marriage Certificate, and NBI Clearance — all with DFA Apostille. CENOMAR may be needed if your partner was previously unmarried at time of sponsorship.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Australia (Department of Home Affairs partner visa)',
            description: 'Requires NBI Clearance, PSA Birth Certificate, and PSA Marriage Certificate with DFA Apostille. CENOMAR may be required for some partner visa categories.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'UK (UKVI spouse visa)',
            description: 'Requires PSA Marriage Certificate, PSA Birth Certificate, and NBI Clearance with DFA Apostille. Documents must comply with UKVI requirements.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'UAE (residence visa / family sponsorship)',
            description: 'Requires NBI Clearance with DFA Apostille for most visa categories. PSA Birth Certificate and PSA Marriage Certificate may also be required depending on your emirate and employer.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Japan (spouse visa)',
            description: 'Requires PSA Marriage Certificate and PSA Birth Certificate with DFA Apostille plus certified Japanese translation. CENOMAR is needed for the pre-marriage registration stage.',
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
            title: 'Forgetting DFA Apostille',
            description: 'PSA documents without DFA Apostille are not accepted by most immigration authorities outside the Philippines. Apostille must be the physical paper original.',
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
          { q: 'What Philippine documents do I need for a K-1 visa?', a: 'For a K-1 fiancé visa, your Filipino partner typically needs: CENOMAR with DFA Apostille (proof of single status), PSA Birth Certificate with DFA Apostille, and NBI Clearance with DFA Apostille.' },
          { q: 'What Philippine documents do I need for a CR-1 visa?', a: 'For a CR-1/IR-1 spouse visa, you typically need: PSA Marriage Certificate with DFA Apostille, PSA Birth Certificate with DFA Apostille, NBI Clearance with DFA Apostille.' },
          { q: 'Do all Philippine documents need DFA Apostille?', a: 'For most immigration purposes outside the Philippines, yes. DFA Apostille authenticates Philippine-issued documents for use in Hague Convention member countries.' },
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
