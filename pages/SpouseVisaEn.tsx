import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { Heart, FileCheck, Globe, AlertCircle } from 'lucide-react';
import RelatedArticles from '../components/RelatedArticles';
import { useMeta } from '../lib/useMeta';
import { SEO_TITLE_BADGE_EN } from '../lib/seoDate';

export default function SpouseVisaEn() {
  useMeta(
    `Philippine Documents for Spouse Visa ${SEO_TITLE_BADGE_EN} — PSA, CENOMAR, NBI + Apostille`,
    'Which Philippine documents do you need for a spouse visa? PSA Marriage Certificate, CENOMAR, NBI Clearance + DFA Apostille. We retrieve and ship worldwide. Free quote.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Spouse Visa Documents Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Spouse Visa Philippine Documents Retrieval Service',
        description: 'We retrieve all Philippine documents required for spouse visa applications worldwide — PSA Marriage Certificate, Birth Certificate, CENOMAR, NBI Clearance with DFA Apostille. Ships via DHL.',
        url: 'https://ph-document.com/en/spouse-visa-documents/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: ['US', 'CA', 'AU', 'GB', 'AE', 'KR'],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '899',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '899',
            priceCurrency: 'USD',
            description: 'Immigration Document Package — all documents + DFA Apostille + DHL worldwide (all-inclusive)',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What Philippine documents are required for a spouse visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'It depends on the visa type. For CR-1/IR-1 (already married): PSA Marriage Certificate, PSA Birth Certificate, and NBI Clearance — all with DFA Apostille. For K-1 (not yet married): CENOMAR instead of Marriage Certificate, plus PSA Birth Certificate and NBI Clearance. For Canada, Australia, and UK spousal visas, the core set is similar but authentication requirements vary by country. We confirm for your specific case.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do I need CENOMAR or a Marriage Certificate for a spouse visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "CENOMAR if you are not yet married (K-1 fiancé visa). PSA Marriage Certificate if you are already married (CR-1/IR-1, Canada spousal, Australia partner visa, UK spouse visa). CENOMAR proves your Filipino partner is legally single; the Marriage Certificate proves you are already legally married. Using the wrong document is a common mistake that causes delays.",
              },
            },
            {
              '@type': 'Question',
              name: 'Does my Filipino spouse need an NBI Clearance for a spouse visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes for most countries. The US (CR-1/IR-1), Canada (IRCC spousal), and Australia (partner visa) all require a Philippine police certificate, which is the NBI Clearance. The UK also typically requires it. We retrieve NBI Clearance with DFA Apostille and can help resolve HIT cases.',
              },
            },
            {
              '@type': 'Question',
              name: 'My spouse was previously married in the Philippines. What extra documents are needed?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "You must prove the prior marriage legally ended. For a Philippines annulment, you need the PSA-annotated annulment decree (PSA annotation confirms the court order is recognized in the civil registry). If the former spouse passed away, you need the PSA Death Certificate. Most immigration authorities require this alongside the standard Marriage Certificate and Birth Certificate.",
              },
            },
            {
              '@type': 'Question',
              name: 'What is the difference between CR-1 and K-1 document requirements?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CR-1/IR-1 (spouse visa — already married): PSA Marriage Certificate + Birth Certificate + NBI Clearance. K-1 (fiancé visa — not yet married): CENOMAR + PSA Birth Certificate + NBI Clearance. Both require DFA Apostille. We have dedicated pages for each: see our K-1 Documents page and CR-1 Documents page.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do PSA documents need to be on Security Paper (SECPA)?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Immigration authorities worldwide require the official PSA-printed copy on PSA Security Paper (SECPA) — not a plain photocopy or scanned image. We retrieve the correct PSA originals directly from the Philippine Statistics Authority.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping are included. Contact us for a free quote.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks from order to delivery. We coordinate all documents in one flow to minimize total time.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Philippine Documents for Your Spouse Visa — Apostille-Ready, Shipped Worldwide"
        badges={['USA · Canada · Australia · UK', 'Apostille Included', 'Ships via DHL']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="June 27, 2026"
      />

      <SummaryBlock
        conclusion="We retrieve all Philippine documents needed for your spouse or partner visa and ship them Apostille-ready worldwide."
        points={[
          'CR-1/IR-1: PSA Marriage Certificate + Birth Certificate + NBI Clearance + DFA Apostille',
          'K-1: CENOMAR replaces the Marriage Certificate — we confirm which one you need',
          'Canada, Australia, UK: similar core documents; we verify country-specific authentication',
          'All-inclusive pricing with DHL Express shipping worldwide',
        ]}
        ctaText="Free Consultation"
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-lg font-bold text-secondary mb-3">CENOMAR or Marriage Certificate? The Most Common Mistake</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          The single most common document error in spouse visa applications is ordering the <strong>wrong PSA document</strong>. Which one you need depends entirely on whether you are already married.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="font-bold text-sm text-secondary mb-2">Not yet married → CENOMAR</p>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              If you are filing a <strong>K-1 fiancé visa</strong>, your Filipino partner needs a <strong>CENOMAR (Certificate of No Marriage Record)</strong> — proof they are legally single in the Philippines. No Marriage Certificate exists yet.
            </p>
            <p className="text-xs text-gray-500">After you marry in the US: file I-485. At that point you will need the PSA Marriage Certificate.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="font-bold text-sm text-secondary mb-2">Already married → Marriage Certificate</p>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              If you are filing a <strong>CR-1/IR-1, Canada spousal, Australia partner visa, or UK spouse visa</strong>, your Filipino spouse needs the <strong>PSA Marriage Certificate</strong> — proof your marriage is registered in the Philippine civil registry.
            </p>
            <p className="text-xs text-gray-500">The Marriage Certificate must be the PSA-printed copy on Security Paper (SECPA) — not a local civil registry photocopy.</p>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-700 leading-relaxed">
            <strong className="text-amber-800">Submitting the wrong document causes delays.</strong> Contact us before ordering — we confirm which PSA documents your specific visa type requires before anything is paid.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-lg font-bold text-secondary mb-4">Documents Required by Country</h2>
        <div className="space-y-4">
          {[
            {
              country: 'USA — CR-1 / IR-1 (already married)',
              docs: 'PSA Marriage Certificate + PSA Birth Certificate + NBI Clearance',
              auth: 'DFA Apostille required for all documents',
              note: 'Submitted at the NVC stage (DS-260). Original documents brought to US Embassy Manila interview.',
            },
            {
              country: 'USA — K-1 (not yet married)',
              docs: 'CENOMAR + PSA Birth Certificate + NBI Clearance',
              auth: 'DFA Apostille required for all documents',
              note: 'CENOMAR must be issued within 6 months of the embassy interview. See our K-1 Documents page.',
            },
            {
              country: 'Canada — Spousal Sponsorship (IRCC)',
              docs: 'PSA Marriage Certificate + PSA Birth Certificate + NBI Clearance',
              auth: 'DFA Apostille accepted; some streams may require additional authentication',
              note: 'IRCC requirements can vary by stream (inland vs. outland). We confirm before ordering.',
            },
            {
              country: 'Australia — Partner Visa (subclass 309/100 or 820/801)',
              docs: 'PSA Marriage Certificate + PSA Birth Certificate + NBI Clearance (AFP check may also be required)',
              auth: 'DFA Apostille accepted',
              note: 'Home Affairs may require character documents spanning all countries of residence. NBI covers the Philippines.',
            },
            {
              country: 'UK — Spouse / Partner Visa',
              docs: 'PSA Marriage Certificate + PSA Birth Certificate + NBI Clearance',
              auth: 'DFA Apostille accepted by UKVI',
              note: 'UKVI also requires an English language requirement and financial requirement from the UK sponsor.',
            },
          ].map(({ country, docs, auth, note }) => (
            <div key={country} className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="font-bold text-sm text-secondary mb-1">{country}</p>
              <p className="text-xs text-gray-700 mb-0.5"><span className="font-medium">Documents:</span> {docs}</p>
              <p className="text-xs text-gray-700 mb-0.5"><span className="font-medium">Authentication:</span> {auth}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
      </div>

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Petitioner filing a CR-1/IR-1, K-1, or international spouse visa',
            description: 'Your Filipino spouse or fiancé needs PSA documents with DFA Apostille. We handle the entire Philippine side from our Cebu office.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Filing for Canada, Australia, or UK',
            description: 'We verify authentication requirements for your specific destination country before retrieving anything. Requirements vary — no guesswork.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Previous marriage involved',
            description: 'If your spouse was previously married in the Philippines, we retrieve the PSA-annotated annulment decree or Death Certificate alongside the main documents.',
          },
        ]}
      />

      <CtaBox
        title="Tell us your visa type — we confirm what you need"
        description="CENOMAR vs. Marriage Certificate, which countries need Apostille, whether your case needs extra documents — we verify before you pay anything."
        buttonText="Talk to Us"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage · Pay balance only after confirming document copies"
      />

      <FeatureList
        heading="What's Included"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA document retrieval (Marriage Cert, Birth Cert, CENOMAR)',
            description: 'We retrieve PSA-printed originals on Security Paper (SECPA). Not photocopies — the actual PSA-issued documents immigration requires.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBI Clearance + DFA Apostille',
            description: 'We retrieve NBI Clearance and arrange DFA Apostille for all documents that require it. HIT cases handled.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping to your address worldwide',
            description: 'All documents shipped together with tracking. No forwarding needed.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your visa type (CR-1, K-1, Canada, Australia, UK, etc.) and your submission or interview deadline.' },
          { title: 'We confirm scope and quote', description: 'We verify which documents your specific case requires, confirm authentication format, and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles all PSA retrieval, NBI Clearance, and DFA Apostille in one coordinated flow.' },
          { title: 'DHL delivery worldwide', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks from order.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What Philippine documents are required for a spouse visa?', a: 'It depends on the visa type. For CR-1/IR-1 (already married): PSA Marriage Certificate, PSA Birth Certificate, and NBI Clearance — all with DFA Apostille. For K-1 (not yet married): CENOMAR instead of Marriage Certificate, plus PSA Birth Certificate and NBI Clearance. For Canada, Australia, and UK, the core set is similar but authentication requirements vary. We confirm for your specific case.' },
          { q: 'Do I need CENOMAR or a Marriage Certificate for a spouse visa?', a: 'CENOMAR if you are not yet married (K-1 fiancé visa). PSA Marriage Certificate if you are already married (CR-1/IR-1, Canada spousal, Australia partner visa, UK spouse visa). Using the wrong document is a common mistake that causes delays — contact us before ordering.' },
          { q: 'Does my Filipino spouse need an NBI Clearance for a spouse visa?', a: 'Yes for most countries. The US (CR-1/IR-1), Canada (IRCC), and Australia all require a Philippine police certificate, which is the NBI Clearance. The UK also typically requires it. We retrieve NBI Clearance with DFA Apostille and can help resolve HIT cases.' },
          { q: 'My spouse was previously married in the Philippines. What extra documents are needed?', a: "You must prove the prior marriage legally ended. For a Philippines annulment, you need the PSA-annotated annulment decree. If the former spouse passed away, you need the PSA Death Certificate. We can retrieve these alongside the standard documents." },
          { q: 'What is the difference between CR-1 and K-1 document requirements?', a: 'CR-1/IR-1 (already married): PSA Marriage Certificate + Birth Certificate + NBI Clearance. K-1 (not yet married): CENOMAR + PSA Birth Certificate + NBI Clearance. Both require DFA Apostille.' },
          { q: 'Do PSA documents need to be on Security Paper (SECPA)?', a: 'Yes. Immigration authorities worldwide require the official PSA-printed copy on PSA Security Paper (SECPA) — not a plain photocopy. We retrieve the correct PSA originals directly from the Philippine Statistics Authority.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping are included. Contact us for a free quote.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks from order to delivery. We coordinate all documents in one flow to minimize total time.' },
        ]}
        ctaTitle="Share your visa type and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/cr1-visa-documents/', title: 'CR-1 / IR-1 Spouse Visa Documents', description: 'Full checklist for CR-1/IR-1: PSA Marriage Certificate, Birth Certificate, NBI Clearance + Apostille for NVC.' },
          { href: '/en/k1-visa-documents/', title: 'K-1 Fiancé Visa Documents', description: 'CENOMAR, PSA Birth Certificate, NBI Clearance + Apostille. I-129F and CFO counseling explained.' },
          { href: '/en/cenomar-vs-marriage-certificate/', title: 'CENOMAR vs. PSA Marriage Certificate', description: 'Which document does your visa type actually require? Find out here.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Full checklist for K-1, CR-1, Canada, Australia, UK and more.' },
        ]}
      />
    </PageLayout>
  );
}
