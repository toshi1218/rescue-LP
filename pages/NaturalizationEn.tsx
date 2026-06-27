import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { FileCheck, Globe, Users, AlertCircle } from 'lucide-react';
import RelatedArticles from '../components/RelatedArticles';
import { useMeta } from '../lib/useMeta';
import { SEO_TITLE_BADGE_EN } from '../lib/seoDate';

export default function NaturalizationEn() {
  useMeta(
    `Philippine Documents for Naturalization ${SEO_TITLE_BADGE_EN} — PSA Birth Certificate + NBI + Apostille`,
    'Applying for citizenship? We retrieve PSA Birth Certificate, NBI Clearance + DFA Apostille and ship worldwide. No trip to the Philippines needed. Free quote.',
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
        areaServed: ['US', 'CA', 'AU', 'GB', 'AE', 'KR'],
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
              name: 'What Philippine documents are required for naturalization or citizenship?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'It depends on the path. For US N-400 (naturalization): typically PSA Birth Certificate and possibly PSA Marriage Certificate if your green card was based on a spousal petition. For CRBA (child born abroad to a Filipino parent): PSA Birth Certificate of the child and the Filipino parent, plus PSA Marriage Certificate or CENOMAR. For citizenship by descent (Australia, UK): PSA Birth Certificate of the Filipino ancestor with DFA Apostille. We confirm the exact requirements for your specific case.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does USCIS require Philippine documents for US naturalization (N-400)?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'USCIS may request supporting documents at the N-400 interview, particularly if your permanent residence was based on a family petition. A PSA Birth Certificate may be needed to verify identity, and a PSA Marriage Certificate may be required if your green card came through a spouse. For children claiming citizenship through a US citizen parent, USCIS or the embassy requires the PSA Birth Certificate of the Filipino parent.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is a CRBA and why does it need Philippine documents?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A Consular Report of Birth Abroad (CRBA) registers a US citizenship claim for a child born outside the US to a US citizen parent. If one parent is Filipino, the US Embassy in Manila requires: PSA Birth Certificate of the child, PSA Birth Certificate of the Filipino parent, and PSA Marriage Certificate of the parents (or CENOMAR if unmarried). DFA Apostille may be required depending on the embassy officer. We handle all of these.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do I need an NBI Clearance for naturalization?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Australia (citizenship application) and some other countries require an NBI Clearance as the Philippine police certificate. Japan requires it for 帰化申請 (naturalization). For US N-400, USCIS does not typically require NBI Clearance at the naturalization stage (it was required earlier, at the immigrant visa stage). We confirm whether your specific country requires it before ordering.',
              },
            },
            {
              '@type': 'Question',
              name: 'I am applying for citizenship by descent in Australia or the UK. Do I need Philippine documents?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. If you are claiming Australian or UK citizenship through a Filipino parent or grandparent, you need the PSA Birth Certificate of the Filipino ancestor with DFA Apostille. Australia Home Affairs and UKVI both accept DFA Apostille. We confirm the exact documents and authentication format before ordering.',
              },
            },
            {
              '@type': 'Question',
              name: 'My parent was previously married before marrying my other parent. Does that affect the documents needed?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'It can. If the citizenship claim depends on proving a legitimate marriage, you may need to provide documentation of the dissolution of any prior marriage — a PSA-annotated annulment decree or PSA Death Certificate of the former spouse. We can retrieve these alongside the main documents.',
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
        title="Philippine Documents for Citizenship & Naturalization — Retrieved and Shipped Worldwide"
        badges={['USA · Canada · Australia · UK', 'Apostille Included', 'Ships via DHL']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="June 27, 2026"
      />

      <SummaryBlock
        conclusion="Applying for citizenship or naturalization? We retrieve all Philippine civil documents your authority requires — PSA Birth Certificate, NBI Clearance, and DFA Apostille."
        points={[
          'US N-400, CRBA, Australian citizenship, UK citizenship by descent — we handle all paths',
          'NBI Clearance + DFA Apostille included where required; we confirm before ordering',
          'We verify exact requirements for your specific citizenship application before starting',
          'All-inclusive pricing with DHL Express shipping worldwide',
        ]}
        ctaText="Free Consultation"
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-lg font-bold text-secondary mb-4">Which Documents You Need Depends on Your Path</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          "Naturalization" and "citizenship" applications each have their own document requirements based on the country and the basis of your claim. The Philippine documents needed vary significantly by scenario.
        </p>
        <div className="space-y-4">
          {[
            {
              path: 'US Naturalization — N-400',
              docs: 'PSA Birth Certificate (identity). PSA Marriage Certificate if your green card was based on a spousal petition and USCIS requests supporting evidence at interview.',
              note: 'NBI Clearance was required at the immigrant visa stage, not typically at N-400. Confirm with your immigration attorney whether additional Philippine documents are needed for your specific interview.',
            },
            {
              path: 'CRBA — Child Born Abroad to a Filipino and US Citizen Parent',
              docs: 'PSA Birth Certificate of the child + PSA Birth Certificate of the Filipino parent + PSA Marriage Certificate (or CENOMAR if parents were unmarried)',
              note: 'The US Embassy in Manila uses these to verify the US citizen parent\'s transmission of citizenship. DFA Apostille may be required. We retrieve and authenticate all three documents.',
            },
            {
              path: 'Australia — Citizenship by Descent or Application',
              docs: 'PSA Birth Certificate of the Filipino ancestor (with DFA Apostille). NBI Clearance as the Philippine police certificate for citizenship applications.',
              note: 'Home Affairs requires character documents from each country of residence. NBI Clearance covers the Philippines. Citizenship by descent requires the Filipino parent\'s PSA Birth Certificate.',
            },
            {
              path: 'UK — Citizenship by Descent (British Overseas)',
              docs: 'PSA Birth Certificate of the Filipino parent (with DFA Apostille). PSA Marriage Certificate if relevant to the descent claim.',
              note: 'UKVI accepts DFA Apostille. Requirements vary by the specific British Nationality Act category. We confirm before ordering.',
            },
            {
              path: 'Canada — Citizenship Certificate or Proof of Citizenship',
              docs: 'PSA Birth Certificate for minor children included in a parent\'s citizenship grant, or for citizenship proof for Canadians of Filipino descent.',
              note: 'IRCC requirements depend on the specific application type. We confirm the exact documents needed before retrieving anything.',
            },
          ].map(({ path: p, docs, note }) => (
            <div key={p} className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="font-bold text-sm text-secondary mb-1">{p}</p>
              <p className="text-xs text-gray-700 mb-1"><span className="font-medium">Documents:</span> {docs}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-700 leading-relaxed">
            <strong className="text-amber-800">Don't order until we confirm.</strong> Citizenship and naturalization document requirements vary more than visa requirements — the wrong document or format can cause delays. Contact us first and we will confirm exactly what your authority needs before anything is ordered.
          </p>
        </div>
      </div>

      <FeatureList
        heading="Who This Is For"
        items={[
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Filipino applying for naturalization in the US, Canada, Australia, or UK',
            description: 'Your citizenship authority may require PSA Birth Certificate, NBI Clearance, or Marriage Certificate with DFA Apostille. We handle everything from the Philippines.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Claiming citizenship by descent through a Filipino parent or grandparent',
            description: 'Australia, UK, and other countries require PSA Birth Certificate of the Filipino ancestor with DFA Apostille. We retrieve and authenticate.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Registering a child born abroad (CRBA) at the US Embassy',
            description: "If one parent is Filipino, the US Embassy Manila requires PSA documents for both the child and the Filipino parent. We coordinate all of them.",
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Immigration attorney or paralegal',
            description: 'We support legal professionals handling naturalization and citizenship cases. We confirm required documents and format for each authority before retrieving anything.',
          },
        ]}
      />

      <CtaBox
        title="Tell us your citizenship path — we confirm what you need"
        description="N-400, CRBA, citizenship by descent, or other — we verify the exact Philippine documents your authority requires before you pay anything."
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
            title: 'PSA document retrieval (Birth Certificate, Marriage Certificate, CENOMAR)',
            description: 'We retrieve PSA-printed originals on Security Paper (SECPA) — not photocopies. The exact format immigration authorities require.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBI Clearance + DFA Apostille',
            description: 'We retrieve NBI Clearance where required and arrange DFA Apostille for all documents that need it. HIT cases handled.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'DHL shipping worldwide',
            description: 'All documents shipped together with tracking to your address. Estimated 4–6 weeks from order.',
          },
        ]}
      />

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Submit your inquiry', description: 'Tell us your citizenship path (N-400, CRBA, descent, etc.), destination country, and your submission deadline.' },
          { title: 'We confirm scope and quote', description: 'We verify which documents your specific case requires and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team handles all PSA retrieval, NBI Clearance, and DFA Apostille in one coordinated flow.' },
          { title: 'DHL delivery worldwide', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks from order.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What Philippine documents are required for naturalization or citizenship?', a: 'It depends on the path. For US N-400: PSA Birth Certificate and possibly PSA Marriage Certificate. For CRBA (child born abroad): PSA Birth Certificate of the child and Filipino parent, plus Marriage Certificate or CENOMAR. For citizenship by descent (Australia, UK): PSA Birth Certificate of the Filipino ancestor with DFA Apostille. We confirm the exact requirements for your specific case.' },
          { q: 'Does USCIS require Philippine documents for US naturalization (N-400)?', a: 'USCIS may request supporting documents at the N-400 interview, particularly if your permanent residence was based on a family petition. A PSA Birth Certificate may be needed to verify identity. For children claiming citizenship through a US citizen parent, the US Embassy requires the PSA Birth Certificate of the Filipino parent.' },
          { q: 'What is a CRBA and why does it need Philippine documents?', a: 'A Consular Report of Birth Abroad (CRBA) registers a US citizenship claim for a child born outside the US to a US citizen parent. If one parent is Filipino, the US Embassy in Manila requires PSA Birth Certificate of the child, PSA Birth Certificate of the Filipino parent, and PSA Marriage Certificate of the parents (or CENOMAR if unmarried).' },
          { q: 'Do I need an NBI Clearance for naturalization?', a: 'Australia (citizenship application) requires NBI Clearance as the Philippine police certificate. For US N-400, NBI Clearance is not typically required at the naturalization stage — it was required earlier at the immigrant visa stage. We confirm whether your specific country and case require it before ordering.' },
          { q: 'I am applying for citizenship by descent in Australia or the UK. Do I need Philippine documents?', a: 'Yes. If you are claiming Australian or UK citizenship through a Filipino parent or grandparent, you need the PSA Birth Certificate of the Filipino ancestor with DFA Apostille. We confirm the exact documents and authentication format for your specific claim.' },
          { q: 'My parent was previously married before marrying my other parent. Does that affect documents needed?', a: 'It can. If the citizenship claim depends on proving a legitimate marriage, you may need documentation of the dissolution of any prior marriage — a PSA-annotated annulment decree or PSA Death Certificate of the former spouse. We can retrieve these alongside the main documents.' },
          { q: 'How much does it cost?', a: 'We provide all-inclusive pricing after reviewing your case. All PSA documents, DFA Apostille, and DHL shipping are included. Contact us for a free quote.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks from order to delivery. We coordinate all documents in one flow to minimize total time.' },
        ]}
        ctaTitle="Share your citizenship path and we will guide your next step"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/psa-birth-certificate/', title: 'PSA Birth Certificate Service', description: 'PSA Birth Certificate + DFA Apostille + DHL worldwide.' },
          { href: '/en/nbi-clearance/', title: 'NBI Clearance Service', description: 'NBI Clearance + DFA Apostille + DHL worldwide. HIT cases handled.' },
          { href: '/en/cr1-visa-documents/', title: 'CR-1 / IR-1 Spouse Visa Documents', description: 'Already a permanent resident? This page covers spouse visa documents for the green card stage.' },
          { href: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', description: 'Full checklist of Philippine documents needed per visa or immigration type.' },
        ]}
      />
    </PageLayout>
  );
}
