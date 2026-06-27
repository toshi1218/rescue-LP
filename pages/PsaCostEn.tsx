import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import SectionDivider from '../components/SectionDivider';
import RelatedArticles from '../components/RelatedArticles';
import { FileCheck, Globe, AlertTriangle, AlertCircle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR } from '../lib/seoDate';

export default function PsaCostEn() {
  useMeta(
    `PSA Birth Certificate Cost [${SEO_YEAR}]: PHP 365 + US$349 All-In`,
    `Official PSA fee: PHP 365/copy. Full price — retrieval, DFA Apostille & DHL Express: US$349 all-in, 4–6 weeks. No hidden fees. USA, UAE, Canada, UK & more.`,
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PSA Birth Certificate Cost' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PSA Birth Certificate Retrieval — All-Inclusive Pricing',
        description: 'Full cost breakdown for PSA Birth Certificate retrieval: PSA fee (PHP 365) + DFA Apostille + DHL shipping worldwide. All-inclusive pricing with no hidden fees. Ships to USA, Canada, Australia, UK, UAE and more.',
        url: 'https://ph-document.com/en/psa-birth-certificate-cost/',
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
              name: `How much does a PSA Birth Certificate cost in ${SEO_YEAR}?`,
              acceptedAnswer: {
                '@type': 'Answer',
                text: `The official PSA government fee is PHP 365 per copy. To use it abroad, you also need DFA Apostille authentication and international shipping. Our all-inclusive service — PSA retrieval + DFA Apostille + DHL Express worldwide — starts at USD $349 with no hidden fees.`,
              },
            },
            {
              '@type': 'Question',
              name: 'Why is the total cost so much higher than PHP 365?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PHP 365 is only the government fee to print the PSA certificate. To use it abroad for immigration, citizenship, or marriage, you also need DFA Apostille authentication (PHP 200 government fee + handling time) and international DHL Express shipping (typically USD $50–80 standalone). When combined with our retrieval service, the total all-inclusive cost starts at USD $349.',
              },
            },
            {
              '@type': 'Question',
              name: 'Why is your price higher than some agencies?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Some agencies quote only the PSA retrieval base fee and add DFA Apostille, international shipping, and handling charges separately — often totaling more than our all-inclusive price. We quote everything upfront in one price. Compare total costs before committing to any service.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do I need multiple copies of my PSA Birth Certificate?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'It depends on your use case. US CR-1/IR-1 immigration typically requires one copy. Some attorneys request a second copy as backup. If you need multiple copies, we can include them in the same order — contact us for pricing on additional copies. Ordering together saves on shipping.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does the PSA Birth Certificate expire?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. Unlike CENOMAR (which is valid for 6 months) or NBI Clearance (valid for 1 year), the PSA Birth Certificate has no expiration date. However, some immigration authorities require it to be issued within a certain window — for example, USCIS and NVC may ask for a recently issued copy during the CR-1/IR-1 process. We confirm the specific requirement for your case.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I order directly from PSA online and save money?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA offers an online ordering service (PSAHelpline / eGov PH) that ships within the Philippines. However, for international delivery, PSA online does not ship abroad — you would need a separate international forwarding service plus DFA Apostille arranged locally. Our service handles PSA retrieval, DFA Apostille, and DHL Express international shipping together, which is typically cheaper and faster than DIY when you are outside the Philippines.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is DFA Apostille always required?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'It depends on your submission authority. US NVC and most immigration authorities require DFA Apostille on PSA documents. Some domestic purposes (e.g., employment, school enrollment) do not require Apostille. We confirm this before quoting so you do not pay for authentication you do not need.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks total: PSA issuance takes 2–3 weeks, DFA Apostille takes 1–2 weeks, and DHL Express international shipping takes 3–5 business days. Priority processing may be available — share your deadline and we will confirm feasibility.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="PSA Birth Certificate: Know the Real Total Cost Before You Start"
        badges={['PHP 365 Gov Fee + Apostille + DHL', 'All-Inclusive US$349', 'No Hidden Fees']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="June 27, 2026"
      />

      <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto text-center px-4">
        The official PSA certificate fee is <strong>₱365 per copy</strong>. But using a PSA Birth Certificate abroad — for immigration, citizenship, or marriage registration — requires DFA Apostille authentication and international shipping on top. Here is the full cost breakdown.
      </p>

      <div className="max-w-2xl mx-auto px-4">
        <SectionDivider variant="beige">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Full Cost Breakdown</h2>
          <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm text-sm">
            <div className="grid grid-cols-[2fr_1fr] bg-secondary text-white">
              <div className="px-4 py-3 font-bold">Item</div>
              <div className="px-4 py-3 font-bold text-center">Cost</div>
            </div>
            {[
              { label: 'Official PSA government fee', price: '₱365 / copy' },
              { label: 'DFA Apostille authentication', price: 'included' },
              { label: 'DHL Express international shipping (tracked)', price: 'included' },
              { label: 'Our all-inclusive service price', price: 'USD $349', bold: true },
            ].map((row, i) => (
              <div key={row.label} className={`grid grid-cols-[2fr_1fr] border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}`}>
                <div className={`px-4 py-3 text-gray-700 ${row.bold ? 'font-bold' : ''}`}>{row.label}</div>
                <div className={`px-4 py-3 text-center ${row.bold ? 'font-bold text-primary' : 'text-gray-600'}`}>{row.price}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">Urgent cases may incur an additional fee. Apostille is included by default — if not needed for your case, we confirm before charging.</p>
        </SectionDivider>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-lg font-bold text-secondary mb-3">Why Is the Total Cost Higher Than PHP 365?</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          PHP 365 is only the <strong>government printing fee</strong> — what PSA charges to generate the Security Paper (SECPA) copy. To use the document abroad, two additional steps are required:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="font-bold text-sm text-secondary mb-1">Step 1: PSA Retrieval</p>
            <p className="text-xs text-gray-600 leading-relaxed">Government fee ₱365/copy. Must be the PSA-printed Security Paper original — plain photocopies are not accepted by immigration or marriage authorities.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="font-bold text-sm text-secondary mb-1">Step 2: DFA Apostille</p>
            <p className="text-xs text-gray-600 leading-relaxed">Required for most immigration and marriage registration abroad (US, Canada, Australia, UK, UAE, etc.). DFA government fee is ₱200 per document plus handling time (1–2 weeks).</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="font-bold text-sm text-secondary mb-1">Step 3: International Shipping</p>
            <p className="text-xs text-gray-600 leading-relaxed">DHL Express from the Philippines to the USA, Canada, Australia, or UK is typically USD $50–80 per standalone shipment. We combine all documents in one shipment to minimize shipping cost.</p>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-700 leading-relaxed">
            <strong className="text-amber-800">Watch out for low advertised base fees.</strong> Some services quote only the PSA retrieval fee (as low as ₱1,000–1,500) and add DFA Apostille, international shipping, and handling separately. Always ask for a total all-in price before committing. Our USD $349 includes everything.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-lg font-bold text-secondary mb-4">PSA Birth Certificate Cost by Use Case</h2>
        <div className="space-y-3">
          {[
            {
              use: 'US CR-1 / IR-1 Spouse Visa (NVC)',
              copies: '1 copy (a second copy as backup is recommended)',
              apostille: 'DFA Apostille required',
              note: 'Submitted at the NVC stage alongside PSA Marriage Certificate and NBI Clearance. We bundle all three documents in one order.',
            },
            {
              use: 'US K-1 Fiancé Visa',
              copies: '1 copy',
              apostille: 'DFA Apostille required',
              note: 'Brought to the US Embassy Manila interview. We coordinate timing with your CENOMAR and NBI Clearance retrieval.',
            },
            {
              use: 'Australia Partner / Citizenship Visa',
              copies: '1 copy',
              apostille: 'DFA Apostille accepted by Home Affairs',
              note: 'Home Affairs also requires NBI Clearance as the Philippine police certificate. We retrieve both in one order.',
            },
            {
              use: 'Canada Spousal Sponsorship (IRCC)',
              copies: '1 copy',
              apostille: 'DFA Apostille accepted',
              note: 'Requirements vary by stream (inland vs. outland). We confirm authentication format before ordering.',
            },
            {
              use: 'UAE / Gulf Countries — Marriage Registration',
              copies: '1–2 copies',
              apostille: 'DFA Apostille required',
              note: 'UAE and Gulf embassies accept DFA Apostille. Requirements may vary by emirate. We confirm before ordering.',
            },
            {
              use: 'CRBA / Naturalization (USA)',
              copies: '1 copy of the Filipino parent\'s Birth Certificate',
              apostille: 'DFA Apostille may be required',
              note: 'For registering a child born abroad to a Filipino and US citizen parent. We retrieve the Filipino parent\'s Birth Certificate.',
            },
          ].map(({ use, copies, apostille, note }) => (
            <div key={use} className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="font-bold text-sm text-secondary mb-1">{use}</p>
              <p className="text-xs text-gray-700 mb-0.5"><span className="font-medium">Copies needed:</span> {copies}</p>
              <p className="text-xs text-gray-700 mb-1"><span className="font-medium">Apostille:</span> {apostille}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-lg font-bold text-secondary mb-3">PSA Online vs. Using a Retrieval Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="font-bold text-sm text-secondary mb-2">PSA Online / PSAHelpline</p>
            <ul className="text-xs text-gray-600 space-y-1.5 leading-relaxed">
              <li>✅ Lower base fee (₱365 government rate)</li>
              <li>✅ Direct from PSA</li>
              <li>❌ Delivers within Philippines only — no international shipping</li>
              <li>❌ DFA Apostille not arranged — you handle it separately</li>
              <li>❌ You need someone in the Philippines to forward and apostille</li>
              <li>❌ Coordination overhead if you are abroad</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="font-bold text-sm text-secondary mb-2">Our Retrieval Service</p>
            <ul className="text-xs text-gray-600 space-y-1.5 leading-relaxed">
              <li>✅ PSA retrieval + DFA Apostille + DHL Express in one flow</li>
              <li>✅ Ships to your door internationally</li>
              <li>✅ All-inclusive pricing — no hidden add-ons</li>
              <li>✅ No one in the Philippines needed</li>
              <li>✅ We confirm required format before ordering</li>
              <li>✅ Coordinates with CENOMAR/NBI/Marriage Cert if needed together</li>
            </ul>
          </div>
        </div>
      </div>

      <SummaryBlock
        conclusion="The real cost of a PSA Birth Certificate abroad is more than PHP 365. We quote PSA + Apostille + DHL together upfront — no surprises."
        points={[
          'PHP 365 is the PSA printing fee only — Apostille and international shipping add to the total',
          'Our all-inclusive price is USD $349 — PSA retrieval + DFA Apostille + DHL Express',
          'PSA Birth Certificate does not expire — unlike CENOMAR (6 months) or NBI (1 year)',
          'Compare total all-in costs, not base fees, when choosing a service',
        ]}
        ctaText="Get Your Total Quote"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'Comparing agencies and want the real total cost',
            description: 'Some agencies advertise low base fees but add Apostille, shipping, and handling separately. We quote everything upfront in one all-inclusive price.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Applying for a spouse visa, citizenship, or marriage abroad',
            description: 'PSA Birth Certificate + DFA Apostille is required for US, Canada, Australia, UK, UAE and most immigration authorities. We bundle it with CENOMAR or NBI Clearance if needed.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Outside the Philippines and need the document shipped internationally',
            description: 'PSA online only delivers within the Philippines. We retrieve, authenticate, and ship internationally in one flow.',
          },
        ]}
      />

      <CtaBox
        title="Get the real total — not just the base fee"
        description="PSA retrieval + DFA Apostille + DHL shipping quoted together. No surprise add-ons after you start. USD $349 all-in."
        buttonText="Talk to Us"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage · Pay balance only after confirming document copies"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your use case (visa type, country, deadline) and how many copies you need.' },
          { title: 'We provide all-inclusive pricing', description: 'PSA retrieval, DFA Apostille, and DHL shipping quoted together upfront — one total price.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team retrieves the PSA Birth Certificate on Security Paper (SECPA) and arranges DFA Apostille.' },
          { title: 'DHL delivery worldwide', description: 'Tracked shipment to your address. Estimated total: 4–6 weeks from order.' },
        ]}
      />

      <FaqSection
        items={[
          { q: `How much does a PSA Birth Certificate cost in ${SEO_YEAR}?`, a: `PHP 365 is the official PSA government fee per copy. To use it abroad, you also need DFA Apostille and international shipping. Our all-inclusive service — PSA retrieval + DFA Apostille + DHL Express — starts at USD $349 with no hidden fees.` },
          { q: 'Why is the total cost so much higher than PHP 365?', a: 'PHP 365 is only the government printing fee. To use the document abroad for immigration, citizenship, or marriage, you also need DFA Apostille authentication (₱200 government fee + handling time) and international DHL Express shipping (typically USD $50–80 standalone). Combined, our all-inclusive service starts at USD $349.' },
          { q: 'Why is your price higher than some agencies?', a: 'Some agencies quote only the PSA retrieval base fee and add DFA Apostille, international shipping, and handling charges separately — often totaling more than our price. We quote everything upfront in one price. Always ask for a total all-in price before committing.' },
          { q: 'Do I need multiple copies?', a: 'US CR-1/IR-1 typically requires one copy. Some attorneys request a second as backup. If you need multiple copies, we can include them in the same order — contact us for pricing. Ordering together saves on shipping.' },
          { q: 'Does the PSA Birth Certificate expire?', a: 'No. Unlike CENOMAR (valid 6 months) or NBI Clearance (valid 1 year), the PSA Birth Certificate has no expiration date. However, some immigration authorities may request a recently issued copy during the process. We confirm for your specific case.' },
          { q: 'Can I order directly from PSA online and save money?', a: 'PSA online (PSAHelpline / eGov PH) ships within the Philippines only — no international delivery. You would also need to arrange DFA Apostille separately. Our service handles all three steps together, which is typically faster and simpler if you are outside the Philippines.' },
          { q: 'Is DFA Apostille always required?', a: 'It depends on your submission authority. US NVC, IRCC, Home Affairs, and most immigration authorities require DFA Apostille. Some domestic purposes (employment, school enrollment within the Philippines) do not. We confirm before quoting.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total: PSA issuance (2–3 weeks) + DFA Apostille (1–2 weeks) + DHL Express shipping (3–5 business days). Priority processing may be available — share your deadline and we confirm feasibility.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/psa-birth-certificate/', title: 'PSA Birth Certificate Service', description: 'Order your PSA Birth Certificate + DFA Apostille + DHL worldwide. All-inclusive.' },
          { href: '/en/cenomar/', title: 'CENOMAR Service', description: 'Certificate of No Marriage Record + Apostille + DHL. From US$349.' },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: 'NBI Clearance + DFA Apostille + DHL worldwide. HIT cases handled.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Which documents does your visa type require? Full checklist.' },
        ]}
      />
    </PageLayout>
  );
}
