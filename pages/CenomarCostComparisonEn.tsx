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
              acceptedAnswer: { '@type': 'Answer', text: 'PSA charges PHP 365 per copy of CENOMAR. This is the base document cost. If you need DFA Apostille, add approximately PHP 200 per document. International shipping via courier is additional and can cost PHP 2,000–5,000+ depending on destination.' },
            },
            {
              '@type': 'Question',
              name: 'Can I order CENOMAR online from abroad?',
              acceptedAnswer: { '@type': 'Answer', text: 'Yes, via PSAHelpline.ph\'s International Service, which delivers a digital PSA E-Certificate electronically to your address abroad (identity verification required). If you need the physical SECPA original, PSAHelpline requires you to arrange and pay for your own international courier pickup. An application proxy service can complete the ordering, payment, and DFA e-Apostille application on your behalf if navigating this yourself is a barrier.' },
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
          Getting CENOMAR from outside the Philippines involves a few choices. PSA's official online service (PSAHelpline.ph) delivers a digital e-Certificate electronically to overseas applicants, but a physical original requires you to arrange your own international courier — which is where many OFWs and Filipinos abroad prefer help. Here is a full breakdown of every option, including real costs and timelines.
        </p>
      </div>

      <SummaryBlock
        conclusion="For OFWs and Filipinos abroad who want the application handled for them, an application proxy service (PSA online application + DFA e-Apostille application, all-inclusive) removes the English-language forms, payment, and courier-arrangement hassle."
        points={[
          'PSA direct (PSAHelpline.ph International Service): PHP 365/copy — digital e-Cert delivered electronically; physical original needs self-arranged international courier',
          'Walk-in PSA branch: same-day but requires someone physically in the Philippines',
          'Representative: variable cost, coordination risk, no accountability',
          'Application proxy service: all-inclusive — PSA online application + DFA e-Apostille application handled for you',
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
              <td className="p-3 border border-gray-200">PHP 365/copy (International Service)</td>
              <td className="p-3 border border-gray-200">Digital e-Cert: a few days; physical original: add courier time</td>
              <td className="p-3 border border-gray-200"><XCircle className="w-4 h-4 text-red-400 inline" /> Not included (e-Apostille separate)</td>
              <td className="p-3 border border-gray-200"><CheckCircle className="w-4 h-4 text-green-500 inline" /> Digital e-Cert only — physical original needs self-arranged courier</td>
              <td className="p-3 border border-gray-200">Comfortable with English forms and self-arranging courier pickup</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200 font-medium">Walk-in at PSA Branch</td>
              <td className="p-3 border border-gray-200">PHP 365/copy</td>
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
              <td className="p-3 border border-gray-200 font-bold text-primary">Application Proxy Service (IGRS)</td>
              <td className="p-3 border border-gray-200 font-bold">All-inclusive (confirmed at consultation)</td>
              <td className="p-3 border border-gray-200">Depends on PSA/DFA processing</td>
              <td className="p-3 border border-gray-200"><CheckCircle className="w-4 h-4 text-green-500 inline" /> DFA e-Apostille application included</td>
              <td className="p-3 border border-gray-200"><CheckCircle className="w-4 h-4 text-green-500 inline" /> Online application + payment handled in English</td>
              <td className="p-3 border border-gray-200">OFWs and Filipinos abroad who want the application handled for them</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 mt-2">PSA fees as of 2026. Costs subject to change. The application proxy service fee includes the PSA online application and DFA e-Apostille application.</p>
      </div>

      {/* Option Details */}
      <div className="max-w-3xl mx-auto px-4 mb-10 space-y-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Each Option in Detail</h2>

        <div className="border border-gray-200 rounded-lg p-5">
          <h3 className="font-bold text-gray-900 mb-2">Option 1: PSA Online (PSAHelpline.ph)</h3>
          <p className="text-sm text-gray-600 mb-3">The official PSA online ordering service. Its International Service (identity-verified) delivers a digital PSA E-Certificate electronically to your address abroad. If you need the physical SECPA original, PSAHelpline requires you to arrange and pay for your own international courier pickup once the document is ready.</p>
          <ul className="text-sm space-y-1">
            <li><span className="text-green-600 font-medium">✓</span> Official PSA document, guaranteed authentic</li>
            <li><span className="text-green-600 font-medium">✓</span> Lowest base cost (PHP 365/copy)</li>
            <li><span className="text-green-600 font-medium">✓</span> Digital e-Certificate delivered electronically to any country</li>
            <li><span className="text-red-500 font-medium">✗</span> No Apostille — you need to arrange DFA e-Apostille separately</li>
            <li><span className="text-red-500 font-medium">✗</span> Physical original requires you to book and pay for your own international courier</li>
            <li><span className="text-red-500 font-medium">✗</span> Forms and payment are in English/Filipino with no local-language support</li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg p-5">
          <h3 className="font-bold text-gray-900 mb-2">Option 2: Walk-in at PSA Branch</h3>
          <p className="text-sm text-gray-600 mb-3">Visit a PSA branch in the Philippines in person. Fastest option for getting the raw document, but requires physical presence in the Philippines.</p>
          <ul className="text-sm space-y-1">
            <li><span className="text-green-600 font-medium">✓</span> Same-day or next-day issuance</li>
            <li><span className="text-green-600 font-medium">✓</span> Lowest cost (PHP 365/copy)</li>
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
          <h3 className="font-bold text-primary mb-2">Option 4: Application Proxy Service (IGRS) — Recommended for OFWs</h3>
          <p className="text-sm text-gray-600 mb-3">We complete the PSA online application and payment on your behalf, and handle the DFA e-Apostille application. One fixed price, no surprises.</p>
          <ul className="text-sm space-y-1">
            <li><span className="text-green-600 font-medium">✓</span> All-inclusive: PSA online application + DFA e-Apostille application</li>
            <li><span className="text-green-600 font-medium">✓</span> DFA e-Apostille — since March 2026 the only format DFA issues for PSA documents; we confirm your authority accepts it</li>
            <li><span className="text-green-600 font-medium">✓</span> Handled in English/Filipino on your behalf, regardless of your country</li>
            <li><span className="text-green-600 font-medium">✓</span> Progress updates at every stage</li>
            <li><span className="text-green-600 font-medium">✓</span> Free consultation — no commitment until you approve</li>
            <li><span className="text-gray-500">~</span> Timing depends on PSA/DFA processing queues</li>
          </ul>
        </div>
      </div>

      <CtaBox
        title="Ready to Get Started?"
        description="All-inclusive pricing confirmed at consultation. PSA online application + DFA e-Apostille application handled for you. Free consultation — no commitment until you approve the quote."
        buttonText="Free Consultation"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Pay balance only after confirming document copies"
        whatsappHref="https://wa.me/639452833727"
      />

      <FaqSection
        items={[
          { q: 'How much does CENOMAR cost from PSA?', a: 'PSA charges PHP 365 per copy (International Service, for a digital e-Certificate). This is the base document fee only. DFA e-Apostille is additional (approx. PHP 200/document), and a physical original requires a separately arranged international courier.' },
          { q: 'Can I order CENOMAR online from abroad?', a: 'Yes, via PSAHelpline.ph\'s International Service, which delivers a digital e-Certificate electronically. If you need the physical SECPA original, PSAHelpline requires you to arrange your own international courier pickup — or an application proxy service can handle the online application, payment, and DFA e-Apostille application on your behalf.' },
          { q: 'How long does it take to get CENOMAR with e-Apostille from abroad?', a: 'Timing depends on PSA and DFA processing queues. We confirm a current estimate for your case before you commit.' },
          { q: 'Is the pricing really all-inclusive?', a: 'Yes. Our quote covers the PSA online application and DFA e-Apostille application. There are no hidden fees. We confirm the full quote before you commit.' },
          { q: 'What if I only need the PSA document without apostille?', a: 'We can complete the PSA-only application. However, most visa and immigration applications require DFA Apostille (issued as an e-Apostille for PSA documents). We recommend confirming with your receiving authority before deciding.' },
        ]}
        ctaTitle="Have Questions?"
        ctaButton="Ask Us for Free"
      />

      <RelatedArticles
        items={[
          { href: '/en/cenomar/', title: 'CENOMAR Service', description: 'All-inclusive CENOMAR online application + DFA e-Apostille application, handled for you.' },
          { href: '/en/cenomar-requirements-by-country/', title: 'CENOMAR Requirements by Country', description: 'What each country requires: apostille, authentication, validity period.' },
          { href: '/en/cenomar-apostille/', title: 'Does CENOMAR Need Apostille?', description: 'When DFA Apostille is required and when it is not.' },
          { href: '/en/cenomar-validity/', title: 'CENOMAR Validity & Timing', description: 'CENOMAR is valid for 6 months. We time retrieval to meet your deadline.' },
        ]}
      />
    </PageLayout>
  );
}
