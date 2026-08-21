import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import RelatedArticles from '../components/RelatedArticles';
import { useMeta } from '../lib/useMeta';
import { CheckCircle, XCircle } from 'lucide-react';

export default function CenomarCostComparisonEn() {
  useMeta(
    'CENOMAR Cost Comparison [2026]: PSA Direct vs Agent vs Walk-in',
    'Compare all options for getting CENOMAR: PSA official online, walk-in at PSA branch, hiring a representative, or using a document service. Costs, timelines, and risks explained.',
  );

  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'CENOMAR Cost Comparison' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'CENOMAR Cost Comparison [2026]: PSA Direct vs Agent vs Walk-in',
          description: 'Compare all options for getting CENOMAR from abroad: PSA online, walk-in, representative, or document service. Full cost and timeline breakdown.',
          url: 'https://ph-document.com/en/cenomar-cost-comparison/',
          datePublished: '2026-05-01',
          dateModified: '2026-05-01',
          author: { '@type': 'Organization', name: 'IGRS Inc.' },
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How much does CENOMAR cost from PSA?',
              acceptedAnswer: { '@type': 'Answer', text: 'A CENOMAR costs PHP 210 at a PSA outlet. PSAHelpline lists PHP 420 for domestic online delivery. International formats, delivery, and authentication depend on the route and receiving authority.' },
            },
            {
              '@type': 'Question',
              name: 'Can I order CENOMAR online from abroad?',
              acceptedAnswer: { '@type': 'Answer', text: 'PSA provides online ordering options, including routes for applicants abroad. Availability, identity verification, document format, and courier arrangements depend on the current PSA portal and destination.' },
            },
            {
              '@type': 'Question',
              name: 'How long does it take to get CENOMAR with Apostille from abroad?',
              acceptedAnswer: { '@type': 'Answer', text: 'Approximately 4–6 weeks total: PSA issuance takes 2–3 weeks, DFA Apostille takes 1–2 weeks, and DHL international shipping takes 3–5 business days.' },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="CENOMAR Cost Comparison: All Options Explained [2026]"
        badges={['PSA Direct vs Agent vs Walk-in', 'Full Cost Breakdown', 'Updated May 2026']}
        ctaText="Get All-Inclusive Quote"
        ctaHref="#contact"
        lastUpdated="May 1, 2026"
      />

      <div className="max-w-2xl mx-auto px-4 mb-8">
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          Getting CENOMAR from outside the Philippines requires choosing the correct PSA route. PSA provides online ordering options, but international delivery, identity verification, document format, and courier arrangements vary. Here is a practical comparison of the main options.
        </p>
      </div>

      <SummaryBlock
        conclusion="For OFWs and Filipinos abroad, a document service (PSA + Apostille + DHL, all-inclusive) is typically the fastest and most reliable option — no need to coordinate multiple parties."
        points={[
          'PSA direct: ₱210 walk-in; PSAHelpline lists ₱420 for domestic online delivery',
          'PSA online international options require checking the current route, identity verification, and courier arrangements',
          'Representative: variable cost, coordination risk, no accountability',
          'Document service: US$349 all-inclusive — PSA + Apostille + DHL worldwide',
        ]}
        ctaText="Get All-Inclusive Quote"
      />

      {/* Comparison Table */}
      <div className="max-w-4xl mx-auto px-4 mb-10 overflow-x-auto">
        <h2 className="text-lg font-bold text-gray-800 mb-5">Side-by-Side Comparison</h2>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-3 border border-gray-200 font-semibold">Option</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Cost (est.)</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Timeline</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Apostille</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Ships abroad?</th>
              <th className="text-left p-3 border border-gray-200 font-semibold">Best for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border border-gray-200 font-medium">PSA Online (PSAHelpline.ph)</td>
              <td className="p-3 border border-gray-200">₱420 domestic online delivery; international route varies</td>
              <td className="p-3 border border-gray-200">Depends on the selected route</td>
              <td className="p-3 border border-gray-200"><XCircle className="w-4 h-4 text-red-400 inline" /> Not included</td>
              <td className="p-3 border border-gray-200">Check current international availability</td>
              <td className="p-3 border border-gray-200">Applicants who can meet the portal's current requirements</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-medium">Walk-in at PSA Branch</td>
              <td className="p-3 border border-gray-200">₱210/copy</td>
              <td className="p-3 border border-gray-200">Same day or next day</td>
              <td className="p-3 border border-gray-200"><XCircle className="w-4 h-4 text-red-400 inline" /> Not included</td>
              <td className="p-3 border border-gray-200"><XCircle className="w-4 h-4 text-red-400 inline" /> You must be in PH</td>
              <td className="p-3 border border-gray-200">People currently in the Philippines</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-200 font-medium">Hire a Representative</td>
              <td className="p-3 border border-gray-200">PHP 500–5,000+ (varies)</td>
              <td className="p-3 border border-gray-200">1–4 weeks (unpredictable)</td>
              <td className="p-3 border border-gray-200">Separate arrangement needed</td>
              <td className="p-3 border border-gray-200">Depends on arrangement</td>
              <td className="p-3 border border-gray-200">If you have a trusted contact in PH</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="p-3 border border-gray-200 font-bold text-primary">Document Service (IGRS)</td>
              <td className="p-3 border border-gray-200 font-bold">US$349 all-inclusive</td>
              <td className="p-3 border border-gray-200">4–6 weeks total</td>
              <td className="p-3 border border-gray-200"><CheckCircle className="w-4 h-4 text-green-500 inline" /> Required DFA route confirmed</td>
              <td className="p-3 border border-gray-200"><CheckCircle className="w-4 h-4 text-green-500 inline" /> DHL to 15+ countries</td>
              <td className="p-3 border border-gray-200">OFWs and Filipinos abroad</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 mt-2">PSA fees and delivery options can change. We confirm the current document format, authentication route, and delivery scope before quoting.</p>
      </div>

      {/* Option Details */}
      <div className="max-w-3xl mx-auto px-4 mb-10 space-y-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Each Option in Detail</h2>

        <div className="border border-gray-200 rounded-lg p-5">
          <h3 className="font-bold text-gray-900 mb-2">Option 1: PSA Online (PSAHelpline.ph)</h3>
          <p className="text-sm text-gray-600 mb-3">PSA provides online ordering channels. Availability for applicants abroad, identity verification, document format, and courier arrangements depend on the current PSA route and destination.</p>
          <ul className="text-sm space-y-1">
            <li><span className="text-green-600 font-medium">✓</span> Official PSA document, guaranteed authentic</li>
            <li><span className="text-green-600 font-medium">✓</span> PSAHelpline lists ₱420 for domestic online delivery</li>
            <li><span className="text-red-500 font-medium">✗</span> International availability and courier arrangements must be checked for the selected route</li>
            <li><span className="text-red-500 font-medium">✗</span> No Apostille — you need to arrange DFA separately</li>
            <li><span className="text-red-500 font-medium">✗</span> The correct authentication route still depends on the receiving authority</li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg p-5">
          <h3 className="font-bold text-gray-900 mb-2">Option 2: Walk-in at PSA Branch</h3>
          <p className="text-sm text-gray-600 mb-3">Visit a PSA branch in the Philippines in person. Fastest option for getting the raw document, but requires physical presence in the Philippines.</p>
          <ul className="text-sm space-y-1">
            <li><span className="text-green-600 font-medium">✓</span> Same-day or next-day issuance</li>
            <li><span className="text-green-600 font-medium">✓</span> PSA outlet fee: ₱210/copy</li>
            <li><span className="text-red-500 font-medium">✗</span> Must be physically present in the Philippines</li>
            <li><span className="text-red-500 font-medium">✗</span> No Apostille — must queue again at DFA</li>
            <li><span className="text-red-500 font-medium">✗</span> Not realistic for OFWs abroad</li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg p-5">
          <h3 className="font-bold text-gray-900 mb-2">Option 3: Hire a Representative</h3>
          <p className="text-sm text-gray-600 mb-3">Ask a family member, friend, or paid fixer to handle the PSA and DFA process on your behalf. Common but risky.</p>
          <ul className="text-sm space-y-1">
            <li><span className="text-green-600 font-medium">✓</span> Flexible if you have a trusted contact</li>
            <li><span className="text-red-500 font-medium">✗</span> No accountability — delays and errors are common</li>
            <li><span className="text-red-500 font-medium">✗</span> Coordinating PSA + DFA Apostille + international courier is complex</li>
            <li><span className="text-red-500 font-medium">✗</span> Variable cost and timeline — hard to predict</li>
            <li><span className="text-red-500 font-medium">✗</span> Risk of receiving wrong document or incorrect apostille format</li>
          </ul>
        </div>

        <div className="border-2 border-primary rounded-lg p-5 bg-blue-50">
          <h3 className="font-bold text-primary mb-2">Option 4: Document Retrieval Service (IGRS) — Recommended for OFWs</h3>
          <p className="text-sm text-gray-600 mb-3">We handle the process end-to-end: PSA retrieval, the required DFA authentication route, and DHL international shipping when a physical document is needed. One fixed price, no surprises.</p>
          <ul className="text-sm space-y-1">
            <li><span className="text-green-600 font-medium">✓</span> All-inclusive: PSA + required authentication route + DHL shipping when needed (US$349)</li>
            <li><span className="text-green-600 font-medium">✓</span> Authentication route matched to the receiving authority</li>
            <li><span className="text-green-600 font-medium">✓</span> Ships to USA, Canada, Australia, UK, UAE, Korea, Japan and more</li>
            <li><span className="text-green-600 font-medium">✓</span> Progress updates at every stage</li>
            <li><span className="text-green-600 font-medium">✓</span> Free consultation — no commitment until you approve</li>
            <li><span className="text-gray-500">~</span> Takes 4–6 weeks (PSA 2–3 wks + DFA 1–2 wks + DHL 3–5 days)</li>
          </ul>
        </div>
      </div>

      <CtaBox
        title="Ready to Get Started?"
        description="All-inclusive from US$349. PSA retrieval, the required authentication route, and DHL shipping when needed. Free consultation — no commitment until you approve the quote."
        buttonText="Free Consultation"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Pay balance only after confirming document copies"
        whatsappHref="https://wa.me/639452833727"
      />

      <FaqSection
        items={[
          { q: 'How much does CENOMAR cost from PSA?', a: 'A CENOMAR costs ₱210 at a PSA outlet. PSAHelpline lists ₱420 for domestic online delivery. International formats, delivery, and authentication depend on the route and receiving authority.' },
          { q: 'Can I order CENOMAR online from abroad?', a: 'PSA provides online ordering options for applicants abroad. Check the current route for identity verification, document format, courier arrangements, and destination availability before paying.' },
          { q: 'How long does it take to get CENOMAR with Apostille from abroad?', a: 'Approximately 4–6 weeks total: PSA issuance (2–3 weeks) + DFA Apostille (1–2 weeks) + DHL international shipping (3–5 business days).' },
          { q: 'Is US$349 really all-inclusive?', a: 'Yes. The US$349 covers PSA retrieval, DFA Apostille, and DHL international shipping to your address. There are no hidden fees. We confirm the full quote before you commit.' },
          { q: 'What if I only need the PSA document without authentication?', a: "We can arrange PSA-only retrieval. Confirm the receiving authority's current requirement before deciding whether any DFA authentication is needed." },
        ]}
        ctaTitle="Have Questions?"
        ctaButton="Ask Us for Free"
      />

      <RelatedArticles
        items={[
          { href: '/en/cenomar/', title: 'CENOMAR Service', description: 'All-inclusive CENOMAR retrieval + Apostille + DHL shipping worldwide.' },
          { href: '/en/cenomar-requirements-by-country/', title: 'CENOMAR Requirements by Country', description: 'What each country requires: apostille, authentication, validity period.' },
          { href: '/en/cenomar-apostille/', title: 'Does CENOMAR Need Apostille?', description: 'When DFA Apostille is required and when it is not.' },
          { href: '/en/cenomar-validity/', title: 'CENOMAR Validity & Timing', description: 'CENOMAR is valid for 6 months. We time retrieval to meet your deadline.' },
        ]}
      />
    </PageLayout>
  );
}
