import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { FileCheck, Globe, Users, Heart } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function NaturalizationEn() {
  useMeta(
    'Naturalization Document Service [April 2026] | PSA & NBI',
    'Applying for citizenship or naturalization and need Philippine civil documents? We retrieve PSA Birth Certificate, NBI Clearance + DFA Apostille and ship to your address worldwide via DHL. Free consultation.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Naturalization Documents Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Philippine Documents for Citizenship & Naturalization (PSA + NBI + Apostille)',
        description: 'We retrieve PSA Birth Certificate, NBI Clearance, and other Philippine civil documents with DFA Apostille for citizenship and naturalization applications worldwide. Ships via DHL.',
        url: 'https://ph-document.com/en/naturalization-guide/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'KR'],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '899',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '899',
            priceCurrency: 'USD',
            description: 'Immigration Document Package — PSA + NBI + DFA Apostille + DHL worldwide (all-inclusive)',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What Philippine documents does USCIS require for naturalization?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Requirements vary by case. Typically Birth Certificate and/or Marriage Certificate with DFA Apostille. We confirm for your specific application.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does it cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping are included. For Japan naturalization cases, the Naturalization Documents Package (your own and your parents\' birth certificates plus your parents\' marriage certificate — 4 certificates with apostille and shipping, tax included) is JPY 132,500, and each additional certificate such as a sibling\'s birth certificate adds JPY 13,250. A real example with 6 certificates totals JPY 159,000.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I use a PSA e-Certificate or e-Apostille for naturalization in Japan?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Japan accepts electronic apostilles in principle under the Hague Convention, and PSA launched e-Certificate / e-Apostille issuance on March 16, 2026. However, receiving offices such as the Legal Affairs Bureau have not yet established procedures to accept them, so in practice paper originals with a physical apostille are requested. We provide paper originals as standard.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can you retrieve certificates for my family members as well?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. We can retrieve birth certificates of your parents and siblings and your parents\' marriage certificate together with your own documents. PSA requires a handwritten authorization letter from you — we prepare the wording for you to copy and sign. All documents ship together in one DHL package, so shipping is charged only once.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks total for standard cases, and 6–10 weeks when multiple family certificates are involved. We coordinate all documents together to minimize total time.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can you handle urgent cases?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Share your USCIS deadline and we will confirm whether priority processing is feasible.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Philippine Documents for Citizenship & Naturalization — Retrieved and Shipped Worldwide"
        badges={['Ships Worldwide via DHL', 'Apostille Included', 'All-Inclusive Pricing']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="Applying for citizenship or naturalization? We retrieve all Philippine civil documents your authority requires."
        points={[
          'PSA Birth Certificate, NBI Clearance, and other documents with DFA Apostille',
          'Ready for USCIS, IRCC, Home Affairs, UKVI and other authorities',
          'We confirm exact requirements for your citizenship application',
          'All-inclusive pricing with DHL Express shipping worldwide',
        ]}
        ctaText="Free Consultation"
      />

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'Applying for citizenship or naturalization',
            description: 'Immigration authorities may require Philippine civil documents with DFA Apostille as part of your citizenship application. We handle retrieval and authentication.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Immigration attorney or paralegal',
            description: 'We support legal professionals handling naturalization cases. We confirm required documents and coordinate retrieval.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Not sure what your authority requires',
            description: 'Requirements vary by country and case. We confirm what your specific citizenship application needs before we start.',
          },
        ]}
      />

      <CtaBox
        title="We confirm USCIS requirements before we start"
        description="Birth Certificate, Marriage Certificate, NBI Clearance — we verify what your specific citizenship case needs and quote everything together."
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
            title: 'PSA document retrieval',
            description: 'We retrieve all required PSA documents in one coordinated flow from our Cebu office.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFA Apostille authentication',
            description: 'We arrange DFA Apostille for all documents that require it. Paper originals provided.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping worldwide',
            description: 'All documents shipped together with tracking to your address. No forwarding needed.',
          },
        ]}
      />

      {/* Japan-specific guidance (Legal Affairs Bureau) */}
      <section className="mt-10 mb-10">
        <h2 className="text-lg font-bold text-secondary mb-3">Naturalizing in Japan? What the Legal Affairs Bureau Actually Requires</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          If you are applying for naturalization (帰化) in Japan, your documents go to the Legal Affairs
          Bureau (法務局). Their requirements differ from other countries in a few important ways.
        </p>

        <div className="space-y-3 mb-6">
          <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-4">
            <p className="font-bold text-sm text-gray-800 mb-1">Paper originals with physical apostille — not e-Apostille</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Japan does accept electronic apostilles in principle under the Hague Convention, and PSA
              launched e-Certificate / e-Apostille issuance on March 16, 2026. However, because this
              operation is so new, receiving offices such as the Legal Affairs Bureau have not yet
              established procedures to accept them — in practice, they request paper originals with a
              physical apostille attached. Even if an embassy tells you "electronic is fine," confirm with
              your case worker first. We provide paper originals as standard, so your application is safe
              either way.
            </p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-4">
            <p className="font-bold text-sm text-gray-800 mb-1">Family certificates are usually required too</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              The Legal Affairs Bureau typically asks for birth certificates of your parents and siblings
              and your parents' marriage certificate, in addition to your own documents. We can retrieve
              all of them together. PSA requires a handwritten authorization letter from you for family
              requests — we prepare the wording, and you simply copy it by hand and sign. Everything ships
              in one consolidated DHL package, so the international shipping fee is charged only once.
            </p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-4">
            <p className="font-bold text-sm text-gray-800 mb-1">Japanese translations must be attached</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Every foreign-language document needs a Japanese translation showing the translation date and
              the translator's name and address. You may translate the documents yourself — self-translation
              is accepted. If you prefer, we also offer professional translation as an optional service
              (JPY 7,700 for the first certificate, JPY 3,850 for each additional one, tax included).
            </p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-4">
            <p className="font-bold text-sm text-gray-800 mb-1">Documents must be recent</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              As a rule of thumb, foreign documents should be no older than 6 months at the time your
              application is accepted. Tell us your planned submission timing and we will schedule the
              retrieval so the issue dates work in your favor.
            </p>
          </div>
        </div>

        <h3 className="text-sm font-bold text-gray-800 mb-2">Package pricing for Japan naturalization cases</h3>
        <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm text-sm mb-3">
          <div className="grid grid-cols-[2fr_1fr] bg-secondary text-white">
            <div className="px-4 py-3 font-bold">Scope</div>
            <div className="px-4 py-3 font-bold text-center">Estimated price</div>
          </div>
          {[
            { label: 'Naturalization Documents Package: your own + your parents\' birth certificates + your parents\' marriage certificate (4 certificates) with apostille + DHL to Japan, tax included', price: 'JPY 132,500', bold: true },
            { label: 'Each additional certificate (e.g., a sibling\'s birth certificate)', price: '+ JPY 13,250' },
            { label: 'Real example: 6 certificates (base package + 2 siblings\' birth certificates)', price: 'JPY 159,000 all-inclusive' },
          ].map((row, i) => (
            <div key={row.label} className={`grid grid-cols-[2fr_1fr] border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}`}>
              <div className={`px-4 py-3 text-gray-700 ${row.bold ? 'font-bold' : ''}`}>{row.label}</div>
              <div className={`px-4 py-3 text-center ${row.bold ? 'font-bold text-primary' : 'text-gray-600'}`}>{row.price}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">
          Important: the package price is <strong>not multiplied per certificate</strong> — each additional
          family certificate adds JPY 13,250 (less than half the per-certificate rate of the base package),
          and shipping is charged only once for the whole consolidated package.
          Payment is 50% to start and 50% after you review scanned copies of the completed documents.
          NBI Clearance, translations, and rush handling are quoted separately as needed.
        </p>
      </section>

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your citizenship application status and your submission deadline.' },
          { title: 'We confirm scope and quote', description: 'We verify required documents and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles all PSA retrieval and DFA Apostille.' },
          { title: 'DHL delivery worldwide', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What Philippine documents are required for citizenship or naturalization?', a: 'Requirements vary by country and case. Typically PSA Birth Certificate and/or NBI Clearance with DFA Apostille. For naturalization in Japan, birth certificates of your parents and siblings and your parents\' marriage certificate are usually required as well. We confirm for your specific application.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping are included. For Japan naturalization cases, the Naturalization Documents Package (your own and your parents\' birth certificates plus your parents\' marriage certificate — 4 certificates with apostille and shipping, tax included) is JPY 132,500, and each additional certificate such as a sibling\'s birth certificate adds JPY 13,250. A real example with 6 certificates totals JPY 159,000.' },
          { q: 'Can I use a PSA e-Certificate or e-Apostille for naturalization in Japan?', a: 'Japan accepts electronic apostilles in principle under the Hague Convention, and PSA launched e-Certificate / e-Apostille issuance on March 16, 2026. However, receiving offices such as the Legal Affairs Bureau have not yet established procedures to accept them, so in practice paper originals with a physical apostille are requested. We provide paper originals as standard.' },
          { q: 'Can you retrieve certificates for my family members as well?', a: 'Yes. We can retrieve birth certificates of your parents and siblings and your parents\' marriage certificate together with your own documents. PSA requires a handwritten authorization letter from you — we prepare the wording for you to copy and sign. All documents ship together in one DHL package, so shipping is charged only once.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks total for standard cases, and 6–10 weeks when multiple family certificates are involved. We coordinate all documents together to minimize total time, and schedule issue dates so they stay within the validity window your authority requires.' },
          { q: 'Can you handle urgent cases?', a: 'Yes. Share your submission deadline and we will confirm whether priority processing is feasible.' },
        ]}
        ctaTitle="Share your case and we will guide your next step"
        ctaButton="Go to Contact Form"
      />
    </PageLayout>
  );
}
