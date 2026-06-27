import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { FileCheck, Globe, Users, Shield, AlertCircle } from 'lucide-react';
import RelatedArticles from '../components/RelatedArticles';
import { useMeta } from '../lib/useMeta';

export default function CfoEn() {
  useMeta(
    'CFO Certificate — PSA Documents Required to Apply [2026]',
    'Getting a CFO Certificate? We retrieve the PSA Birth Certificate and CENOMAR required for CFO registration — DFA Apostille included, shipped worldwide via DHL. Free consultation.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'CFO Certificate' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'PSA Document Retrieval for CFO Certificate Registration',
          description: 'We retrieve PSA Birth Certificate and CENOMAR required for CFO (Commission on Filipinos Overseas) certificate registration. DFA Apostille included. Ships worldwide via DHL.',
          url: 'https://ph-document.com/en/cfo-certificate/',
          provider: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/en/',
          },
          areaServed: [
            { '@type': 'Country', name: 'US' },
            { '@type': 'Country', name: 'CA' },
            { '@type': 'Country', name: 'AU' },
            { '@type': 'Country', name: 'GB' },
            { '@type': 'Country', name: 'AE' },
            { '@type': 'Country', name: 'JP' },
          ],
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: '349',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '349',
              priceCurrency: 'USD',
              description: 'PSA Birth Certificate or CENOMAR + DFA Apostille + DHL shipping worldwide (per document)',
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is a CFO Certificate?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The CFO Certificate (also called Guidance and Counseling Certificate or CFO Sticker) is issued by the Commission on Filipinos Overseas. It is required for Filipino nationals who are marrying a foreign national and intend to leave the Philippines, or who are emigrating abroad on an immigrant visa based on marriage to a foreigner.',
              },
            },
            {
              '@type': 'Question',
              name: 'What PSA documents do I need for CFO registration?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For CFO registration, you typically need: (1) PSA Birth Certificate (original), and (2) CENOMAR / Certificate of No Marriage Record if you are single, or PSA Marriage Certificate if you are already married. Additional documents such as a valid passport and visa approval are also required by CFO directly.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do PSA documents for CFO need Apostille?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CFO itself does not require DFA Apostille on the PSA documents you submit to them. However, the same PSA documents you prepare for CFO are also required (with Apostille) by most foreign embassies for your visa application. We recommend getting Apostille at the same time so you have them ready for both purposes.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I get PSA documents from abroad for CFO registration?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes — if you are already abroad, you can still prepare your PSA documents using our service. We retrieve them locally in the Philippines, authenticate with DFA Apostille if needed, and ship them worldwide via DHL Express.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA retrieval + DFA Apostille typically takes 3–5 weeks. DHL Express delivery adds 3–5 business days depending on your location. We recommend starting as early as possible before your scheduled CFO appointment.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Our all-inclusive pricing starts at USD 349 per document, which includes PSA retrieval, DFA Apostille authentication, and DHL Express shipping to your address. Most CFO applicants need PSA Birth Certificate + CENOMAR — we quote both together.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Getting a CFO Certificate? You'll Need These PSA Documents First"
        badges={['PSA Birth Certificate', 'CENOMAR / Marriage Cert', 'DFA Apostille + DHL Worldwide']}
        ctaText="Check What You Need"
        ctaHref="#contact"
        lastUpdated="June 27, 2026"
      />

      <SummaryBlock
        conclusion="The CFO Certificate (Guidance and Counseling Certificate) requires a PSA Birth Certificate and CENOMAR as part of the registration process. We retrieve and ship these documents from the Philippines — no trip needed."
        points={[
          'CFO registration requires PSA Birth Certificate (original) and CENOMAR or PSA Marriage Certificate',
          'The same documents also need DFA Apostille for your visa application to the foreign embassy',
          'We retrieve, authenticate, and ship everything together — saving you time and multiple trips',
          'Already abroad? We handle the full process locally in the Philippines and ship to you',
        ]}
        ctaText="Free Consultation"
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-800 text-sm mb-1">Important: CFO registration timeline</p>
            <p className="text-xs text-amber-700 leading-relaxed">
              CFO appointments in the Philippines often have waiting times of several weeks. PSA document retrieval + DFA Apostille takes an additional 3–5 weeks. Start collecting your PSA documents <strong>at least 2–3 months before</strong> your planned CFO appointment.
            </p>
          </div>
        </div>
      </div>

      <FeatureList
        heading="Who Needs a CFO Certificate"
        items={[
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Filipino marrying a foreign national',
            description: 'If you are a Filipino citizen marrying a foreigner and planning to leave the Philippines, CFO attendance is mandatory before you can depart.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Filipino emigrating on an immigrant visa based on marriage',
            description: 'If you received an immigrant visa (such as a US green card, Canada PR, or Australian partner visa) through marriage to a foreigner, CFO registration is required before departure.',
          },
          {
            icon: <Shield className="w-4 h-4" />,
            title: 'Filipino applying for a K-1 fiancé(e) visa or CR-1 visa',
            description: 'US visa applicants — both K-1 and CR-1/IR-1 routes — need CFO attendance before leaving the Philippines. Your PSA documents are needed at this stage and for the USCIS/NVC application.',
          },
        ]}
      />

      <FeatureList
        heading="PSA Documents Required for CFO Registration"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA Birth Certificate (original)',
            description: 'CFO requires an original PSA-issued Birth Certificate. We retrieve it directly from PSA in the Philippines. Apostille is recommended if you also need it for your visa application.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'CENOMAR — if you have never been married',
            description: 'Single applicants need a CENOMAR (Certificate of No Marriage Record) from PSA. This proves you have no existing marriage on record in the Philippines.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA Marriage Certificate — if you are already married',
            description: 'If you are already legally married to the foreign national, CFO requires a PSA Marriage Certificate instead of CENOMAR.',
          },
        ]}
      />

      <CtaBox
        title="Get your PSA documents ready before your CFO appointment"
        description="Most CFO applicants also need these same PSA documents — with DFA Apostille — for their embassy visa application. We handle both requirements in one flow so you don't have to order twice."
        buttonText="Start Free Consultation"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage · Pay balance only after confirming document copies"
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Tell us your case', description: 'Let us know your marital status, your destination country, and your planned CFO appointment date.' },
          { title: 'We confirm what you need', description: 'We check whether you need CENOMAR or Marriage Certificate, and whether DFA Apostille is needed for your visa application.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu-based team retrieves your documents from PSA and handles DFA Apostille authentication.' },
          { title: 'DHL delivery to your address', description: 'All documents shipped together with tracking. Estimated total timeline: 3–5 weeks.' },
        ]}
      />

      <div className="max-w-3xl mx-auto px-4 pb-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-secondary mb-4">Pricing Guide</h2>
          <div className="space-y-3">
            {[
              { doc: 'PSA Birth Certificate + DFA Apostille + DHL', price: 'from USD 349' },
              { doc: 'CENOMAR + DFA Apostille + DHL', price: 'from USD 349' },
              { doc: 'PSA Marriage Certificate + DFA Apostille + DHL', price: 'from USD 349' },
              { doc: 'CFO Preparation Package (Birth Cert + CENOMAR + DFA Apostille + DHL)', price: 'from USD 549' },
            ].map(({ doc, price }) => (
              <div key={doc} className="flex items-start justify-between gap-4 py-2.5 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-700">{doc}</span>
                <span className="text-sm font-bold text-secondary whitespace-nowrap">{price}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">All-inclusive: PSA retrieval fee + DFA Apostille fee + DHL Express shipping. Final quote provided after case review. Free consultation.</p>
        </div>
      </div>

      <FaqSection
        items={[
          { q: 'What is a CFO Certificate?', a: 'The CFO Certificate (Guidance and Counseling Certificate) is issued by the Commission on Filipinos Overseas. It is required for Filipino nationals marrying a foreign national who intend to leave the Philippines, or for Filipinos emigrating on an immigrant visa through marriage to a foreigner.' },
          { q: 'What PSA documents do I need for CFO registration?', a: 'PSA Birth Certificate (original) and either CENOMAR (if single) or PSA Marriage Certificate (if already married). Additional documents like passport and visa approval are submitted directly to CFO.' },
          { q: 'Do PSA documents for CFO need Apostille?', a: 'CFO itself may not require Apostille, but your embassy will. Since the PSA documents you prepare for CFO are the same ones needed (with Apostille) for your visa application, we recommend getting Apostille at the same time to avoid ordering twice.' },
          { q: 'Can I get PSA documents from abroad?', a: 'Yes. If you are already living abroad, we retrieve your documents locally in the Philippines and ship them to you anywhere in the world via DHL Express.' },
          { q: 'How long does it take?', a: 'PSA retrieval + DFA Apostille takes approximately 3–5 weeks. DHL Express adds 3–5 business days. We recommend starting at least 2–3 months before your CFO appointment.' },
          { q: 'How much does it cost?', a: 'All-inclusive pricing from USD 349 per document (PSA retrieval + DFA Apostille + DHL shipping). A package covering both Birth Certificate and CENOMAR starts from USD 549. Free consultation and quote available.' },
        ]}
        ctaTitle="Tell us your CFO timeline and we'll confirm what you need"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/cenomar/', title: 'CENOMAR Retrieval Service', description: 'CENOMAR + DFA Apostille + DHL — required for CFO registration and K-1/spouse visa applications.' },
          { href: '/en/psa-birth-certificate/', title: 'PSA Birth Certificate Service', description: 'Original PSA Birth Certificate + DFA Apostille + DHL. Required for CFO and visa applications.' },
          { href: '/en/apostille/', title: 'DFA Apostille Service', description: 'How DFA Apostille works and why it is required alongside PSA documents for international use.' },
        ]}
      />
    </PageLayout>
  );
}
