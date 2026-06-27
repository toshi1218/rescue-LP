import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { Heart, FileCheck, Globe, AlertCircle, Calendar } from 'lucide-react';
import RelatedArticles from '../components/RelatedArticles';
import { useMeta } from '../lib/useMeta';
import { SEO_TITLE_BADGE_EN } from '../lib/seoDate';

export default function MarriageGuideEn() {
  useMeta(
    `Philippine Documents for International Marriage ${SEO_TITLE_BADGE_EN} — Complete Guide`,
    'Getting married to a Filipino? CENOMAR, PSA Birth Certificate, NBI Clearance + DFA Apostille — we retrieve and ship worldwide. No trip needed. Free quote.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'International Marriage Documents Service' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Philippine Documents for International Marriage (CENOMAR + PSA + Apostille)',
        description: 'We retrieve all Philippine documents needed to marry a Filipino/Filipina — CENOMAR, PSA Birth Certificate, NBI Clearance with DFA Apostille. Ships worldwide via DHL.',
        url: 'https://ph-document.com/en/international-marriage-guide/',
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
              name: 'What Philippine documents does a Filipino need to get married internationally?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Before the marriage, a Filipino needs CENOMAR (Certificate of No Marriage Record) — proof of single status — and PSA Birth Certificate. Whether you marry in the Philippines or abroad, these documents are required at the marriage registration stage. Both should ideally have DFA Apostille if submitted to a foreign authority.',
              },
            },
            {
              '@type': 'Question',
              name: 'Should we marry in the Philippines or abroad?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Both paths are valid and lead to the same endpoint — a legally recognized marriage and a PSA Marriage Certificate. Marrying in the Philippines: the foreign partner needs a Certificate of Legal Capacity from their country\'s embassy, and the couple applies for a marriage license at the local civil registrar (10-day waiting period). Marrying abroad: your Filipino partner uses CENOMAR and PSA Birth Certificate to register as legally single in your country; after the wedding, you report the marriage to the Philippine Embassy to get the PSA-recognized foreign marriage on record. We handle the Philippine documents for either path.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is CENOMAR and why is it needed for marriage?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMAR (Certificate of No Marriage Record) is issued by the Philippine Statistics Authority (PSA) and certifies that your Filipino partner has no existing marriage on file in the Philippines. It is required at the marriage license application stage — whether you marry in the Philippines or use it to register your Filipino partner as legally single in another country. CENOMAR is valid for 6 months from the date of issuance.',
              },
            },
            {
              '@type': 'Question',
              name: 'After we marry, what PSA documents do we need for a spouse visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Once married, the PSA Marriage Certificate becomes the key document for any spouse visa — CR-1/IR-1 (USA), Canada spousal sponsorship, Australia partner visa, or UK spouse visa. If you married in the Philippines, PSA issues the Marriage Certificate from the local civil registry records. If you married abroad, you register at the Philippine Embassy first; the Report of Marriage then becomes part of the PSA record, and PSA issues the Marriage Certificate from that. We retrieve both types.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the difference between filing K-1 and CR-1 for a Filipino partner?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'K-1 (fiancé visa): you are not yet married. Your Filipino partner enters the US on a K-1 visa and you must marry within 90 days, then file I-485 for a green card. Documents needed before the K-1 interview: CENOMAR, PSA Birth Certificate, NBI Clearance. CR-1/IR-1 (spouse visa): you are already married. Documents needed at the NVC stage: PSA Marriage Certificate, PSA Birth Certificate, NBI Clearance. Both require DFA Apostille.',
              },
            },
            {
              '@type': 'Question',
              name: 'My Filipino partner was previously married. What additional documents are needed?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'You must prove the prior marriage legally ended before the new marriage can be registered. For a Philippine annulment: the PSA-annotated annulment decree (confirming the court order is in the civil registry). If the former spouse passed away: the PSA Death Certificate. These are needed both for the marriage license (if marrying in the Philippines) and for the subsequent visa application. We retrieve these alongside the main documents.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does CENOMAR need DFA Apostille for marriage registration abroad?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'It depends on the country. Australia, UK, Canada, and the UAE typically require DFA Apostille on Philippine civil documents submitted to their authorities. The USA does not always require Apostille for marriage registration (marriage laws are state law), but USCIS and NVC require DFA Apostille on documents submitted for the subsequent visa application. We confirm the requirement for your specific country before ordering.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does it take to get these documents?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Approximately 4–6 weeks from order to delivery. PSA issuance takes 2–3 weeks, DFA Apostille takes 1–2 weeks, and DHL shipping takes 3–5 business days. We coordinate all documents in one flow to minimize total time.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Getting Married to a Filipino? Philippine Documents Handled — Shipped Worldwide"
        badges={['Before Marriage + After Marriage', 'Apostille Included', 'Ships via DHL']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="June 27, 2026"
      />

      <SummaryBlock
        conclusion="Marrying a Filipino means navigating PSA documents at every stage — before the wedding, at registration, and again for the spouse visa. We handle all of it from the Philippines."
        points={[
          'Before the wedding: CENOMAR + PSA Birth Certificate to prove single status',
          'After the wedding: PSA Marriage Certificate for the spouse visa (CR-1/IR-1, Canada, Australia, UK)',
          'NBI Clearance + DFA Apostille for visa applications worldwide',
          'We handle either path: marry in the Philippines or marry abroad',
        ]}
        ctaText="Free Consultation"
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-lg font-bold text-secondary mb-3">Two Paths: Marry in the Philippines or Marry Abroad</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          You have two main options. Both lead to the same legal result — a recognized marriage and a PSA Marriage Certificate — but the sequence of documents is different.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-primary-dark" />
              <span className="font-bold text-sm text-secondary">Marry in the Philippines</span>
            </div>
            <ol className="text-xs text-gray-600 space-y-1.5 leading-relaxed list-none">
              <li><span className="font-medium">1.</span> Filipino partner provides <strong>CENOMAR + PSA Birth Certificate</strong> to the local civil registrar</li>
              <li><span className="font-medium">2.</span> Foreign partner provides a <strong>Certificate of Legal Capacity</strong> from their country's embassy in Manila</li>
              <li><span className="font-medium">3.</span> Apply for marriage license — 10-day mandatory waiting period</li>
              <li><span className="font-medium">4.</span> Ceremony held; marriage is registered</li>
              <li><span className="font-medium">5.</span> <strong>PSA Marriage Certificate</strong> issued — ready for the spouse visa</li>
            </ol>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-emerald-600" />
              <span className="font-bold text-sm text-secondary">Marry Abroad (USA, Canada, Australia…)</span>
            </div>
            <ol className="text-xs text-gray-600 space-y-1.5 leading-relaxed list-none">
              <li><span className="font-medium">1.</span> Filipino partner uses <strong>CENOMAR + PSA Birth Certificate</strong> to register as single at the foreign authority</li>
              <li><span className="font-medium">2.</span> Wedding takes place under local law</li>
              <li><span className="font-medium">3.</span> Report the marriage to the <strong>Philippine Embassy</strong> (Report of Marriage)</li>
              <li><span className="font-medium">4.</span> PSA records the marriage; issues the <strong>PSA Marriage Certificate</strong></li>
              <li><span className="font-medium">5.</span> PSA Marriage Certificate + NBI Clearance for the spouse visa</li>
            </ol>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-700 leading-relaxed">
            <strong className="text-amber-800">K-1 or CR-1?</strong> If you plan to marry in the US after your Filipino partner arrives, file <strong>K-1 (fiancé visa)</strong> — CENOMAR is the key document. If you are already married, file <strong>CR-1/IR-1 (spouse visa)</strong> — PSA Marriage Certificate is the key document. Choosing the right visa path first saves months.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-lg font-bold text-secondary mb-4">Documents You Need at Each Stage</h2>
        <div className="space-y-4">
          {[
            {
              stage: 'Before the wedding — proving single status',
              docs: 'CENOMAR (valid 6 months from issuance), PSA Birth Certificate',
              note: 'Required for the marriage license application in the Philippines, or for marriage registration in Australia, UK, Canada, and Gulf countries. DFA Apostille required if submitting to a foreign authority.',
            },
            {
              stage: 'After the wedding — the marriage record',
              docs: 'PSA Marriage Certificate (Philippines-registered marriage) or Report of Marriage (married abroad)',
              note: 'If married abroad, file a Report of Marriage at the Philippine Embassy. PSA then issues a Marriage Certificate reflecting the foreign marriage. This is the document NVC and other immigration authorities require.',
            },
            {
              stage: 'Spouse visa application (CR-1/IR-1, Canada, Australia, UK)',
              docs: 'PSA Marriage Certificate + PSA Birth Certificate + NBI Clearance — all with DFA Apostille',
              note: 'For US CR-1/IR-1: submitted at the NVC stage (DS-260). For Canada IRCC, Australia Home Affairs, UK UKVI: check specific authentication requirements. We confirm before ordering.',
            },
            {
              stage: 'Fiancé visa application (K-1)',
              docs: 'CENOMAR + PSA Birth Certificate + NBI Clearance — all with DFA Apostille',
              note: 'CENOMAR must be issued within 6 months of the US Embassy Manila interview. Order it closer to your interview date — not months in advance.',
            },
          ].map(({ stage, docs, note }) => (
            <div key={stage} className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="font-bold text-sm text-secondary mb-1">{stage}</p>
              <p className="text-xs text-gray-700 mb-1"><span className="font-medium">Documents:</span> {docs}</p>
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
            title: 'Planning to marry a Filipino and need to sort the documents',
            description: 'CENOMAR, PSA Birth Certificate, NBI Clearance — we retrieve and authenticate everything from the Philippines. No trip required.',
          },
          {
            icon: <Calendar className="w-4 h-4" />,
            title: 'Already married and now applying for a spouse visa',
            description: 'PSA Marriage Certificate + NBI Clearance with DFA Apostille for CR-1/IR-1, Canada spousal, Australia partner, or UK spouse visa. We coordinate the full set.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Married abroad and need to register the marriage in the Philippines',
            description: 'We guide you through the Report of Marriage process at the Philippine Embassy and retrieve the resulting PSA Marriage Certificate.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Filipino partner was previously married',
            description: 'We retrieve the PSA-annotated annulment decree or Death Certificate of the former spouse — required before a new marriage can be registered.',
          },
        ]}
      />

      <CtaBox
        title="Tell us where you are in the process — we confirm what you need"
        description="Before the wedding or after? Marrying in the Philippines or abroad? K-1 or CR-1? We map the exact documents for your situation and quote everything together."
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
            title: 'CENOMAR, PSA Birth Certificate, PSA Marriage Certificate retrieval',
            description: 'We retrieve PSA-printed originals on Security Paper (SECPA) — the exact format immigration authorities accept.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBI Clearance + DFA Apostille',
            description: 'We retrieve NBI Clearance and arrange DFA Apostille for all documents that require it. HIT cases handled.',
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
          { title: 'Submit your inquiry', description: 'Tell us where you are: planning to marry, recently married, or already in the visa process. Share your target wedding or submission date.' },
          { title: 'We confirm what you need and quote', description: 'We map the exact documents for your stage (pre-wedding, post-wedding, visa application) and provide all-inclusive pricing.' },
          { title: 'Local processing in the Philippines', description: 'Our Cebu team retrieves CENOMAR, PSA Birth Certificate, Marriage Certificate, NBI Clearance, and arranges DFA Apostille — coordinated in one flow.' },
          { title: 'DHL delivery worldwide', description: 'All documents shipped together with tracking. Estimated total: 4–6 weeks from order.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What Philippine documents does a Filipino need to get married internationally?', a: 'Before the marriage, a Filipino needs CENOMAR (Certificate of No Marriage Record) and PSA Birth Certificate. Whether marrying in the Philippines or abroad, these documents prove single status at the registration stage. DFA Apostille is required if submitting to a foreign authority.' },
          { q: 'Should we marry in the Philippines or abroad?', a: "Both paths are valid. In the Philippines: the foreign partner needs a Certificate of Legal Capacity from their embassy; apply for a marriage license (10-day wait). Abroad: Filipino partner uses CENOMAR + Birth Certificate to register as single; report the marriage to the Philippine Embassy afterward so PSA can issue a Marriage Certificate. We handle the Philippine documents for either path." },
          { q: 'What is CENOMAR and why is it needed for marriage?', a: 'CENOMAR (Certificate of No Marriage Record) is issued by PSA and certifies your Filipino partner has no existing marriage on file in the Philippines. Required for the marriage license application or for registering as legally single abroad. Valid for 6 months from issuance.' },
          { q: 'After we marry, what PSA documents do we need for a spouse visa?', a: 'The PSA Marriage Certificate is the key document for any spouse visa (CR-1/IR-1 USA, Canada spousal, Australia partner, UK spouse visa). If married in the Philippines, PSA issues it from the local civil registry. If married abroad, file a Report of Marriage at the Philippine Embassy first; PSA then issues the certificate from that record.' },
          { q: 'What is the difference between filing K-1 and CR-1?', a: 'K-1 (fiancé visa): not yet married — partner enters the US on K-1, you marry within 90 days, then file I-485. Documents before K-1 interview: CENOMAR, PSA Birth Certificate, NBI Clearance. CR-1/IR-1 (spouse visa): already married — documents at NVC stage: PSA Marriage Certificate, PSA Birth Certificate, NBI Clearance. Both require DFA Apostille.' },
          { q: 'My Filipino partner was previously married. What extra documents are needed?', a: "You must prove the prior marriage legally ended before a new marriage can be registered. For a Philippine annulment: PSA-annotated annulment decree. If the former spouse passed away: PSA Death Certificate. These are required both for the marriage license and the subsequent visa application." },
          { q: 'Does CENOMAR need DFA Apostille for marriage registration abroad?', a: 'It depends on the country. Australia, UK, Canada, and UAE typically require DFA Apostille on Philippine documents. The USA does not always require Apostille for the marriage itself, but USCIS/NVC require it for the visa application. We confirm for your specific country before ordering.' },
          { q: 'How long does it take?', a: 'Approximately 4–6 weeks from order to delivery. PSA issuance takes 2–3 weeks, DFA Apostille takes 1–2 weeks, DHL shipping takes 3–5 business days.' },
        ]}
        ctaTitle="Tell us your situation and we will map out exactly what you need"
        ctaButton="Go to Contact Form"
      />

      <RelatedArticles
        items={[
          { href: '/en/cenomar/', title: 'CENOMAR Service', description: 'PSA CENOMAR + DFA Apostille + DHL worldwide. For K-1, marriage abroad, and visa applications.' },
          { href: '/en/k1-visa-documents/', title: 'K-1 Fiancé Visa Documents', description: 'Not yet married? K-1 requires CENOMAR, not a Marriage Certificate. See the full K-1 checklist.' },
          { href: '/en/cr1-visa-documents/', title: 'CR-1 / IR-1 Spouse Visa Documents', description: 'Already married? CR-1/IR-1 requires PSA Marriage Certificate + NBI Clearance for NVC.' },
          { href: '/en/cenomar-vs-marriage-certificate/', title: 'CENOMAR vs. PSA Marriage Certificate', description: 'Which document does your stage of the marriage process actually require?' },
        ]}
      />
    </PageLayout>
  );
}
