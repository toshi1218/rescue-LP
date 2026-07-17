import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import FeatureList from '../components/FeatureList';
import IconCardGrid from '../components/IconCardGrid';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import RelatedArticles from '../components/RelatedArticles';
import { Smartphone, IdCard, ScanFace, Globe, Users, RefreshCw, CheckCircle, Truck } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

const TITLE = 'PSA e-Apostille Service — Apply Online From Abroad [2026]';
const DESCRIPTION = 'Since March 2026, PSA documents (birth certificate, marriage certificate, CENOMAR) are apostilled only through the online e-Apostille system. OTP, ID verification, and liveness checks can be difficult from abroad — especially when family members have naturalized to a foreign citizenship. We file on your behalf and resubmit until approved.';

export default function PsaEApostilleServiceEn() {
  useMeta(TITLE, DESCRIPTION);

  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'PSA e-Apostille Service' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'PSA e-Apostille Online Application Service',
          description: 'Assisted online e-Apostille filing for PSA documents after the March 2026 DFA full digitization. We handle OTP, ID, and liveness verification, review authorization letter signatures for dual-citizen family members, and resubmit if rejected.',
          url: 'https://ph-document.com/en/psa-e-apostille-service/',
          provider: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
          areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'KR', 'AE'],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Can I print an e-Apostille and use the paper copy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. An e-Apostille is a digital certificate that becomes invalid once printed. It must be submitted as the original PDF, or verified online, depending on what the receiving authority requires. If your authority requires a physical paper original instead, let us know and we can advise on that separately.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can this be done if my family lives outside the Philippines?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. However, identity verification (OTP, ID, and liveness/facial verification) still needs to be completed, which can be difficult to arrange from abroad — for example, keeping a Philippine mobile number active. We can file on your behalf.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can you still get documents for family members who no longer hold a Philippine ID?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'It depends on the case. Family members who have naturalized as citizens of another country are usually verified using their foreign passport, and the authorization letter signature needs to match that passport signature. Share your situation with us and we will confirm whether we can assist.',
              },
            },
            {
              '@type': 'Question',
              name: 'My application was rejected. Is that the end of it?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No — a rejection can be resubmitted. In most cases the rejection is due to a signature or ID mismatch, and once that is corrected, the next submission goes through. We resubmit on your behalf until it is approved.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="Since March 2026, PSA document Apostille is issued only through the online e-Apostille system"
        subtitle="If applying yourself is difficult, we can file on your behalf. It's not simple, but it is possible — and we keep resubmitting until it is approved."
        badges={['Updated for the March 2026 rule change', 'Family abroad? Still possible', 'We resubmit if rejected']}
        ctaText="Free Consultation"
        ctaHref="#contact"
        lastUpdated="July 1, 2026"
      />

      <SummaryBlock
        conclusion="PSA documents (birth certificate, marriage certificate, CENOMAR) are now apostilled through an online e-Apostille filing as the standard method."
        points={[
          'On March 16, 2026, the DFA fully digitized Apostille for PSA-issued civil registry documents',
          'The online filing requires OTP, ID verification, and liveness (facial) verification, all at once',
          'If a family member has naturalized to a foreign citizenship, the authorization letter signature match becomes especially important',
          'We can file on your behalf and resubmit if the application is rejected',
        ]}
      />

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">What changed</h2>
        </div>
        <div className="space-y-4">
          <p className="text-base text-gray-700 leading-relaxed">
            On March 16, 2026, the Philippine Department of Foreign Affairs (DFA) fully digitized Apostille authentication for PSA-issued civil registry documents (birth certificate, marriage certificate, CENOMAR, and others). The previous method — bringing a paper certificate to a DFA window for a physical Apostille sticker — is generally no longer available now that the transition period following this change has ended.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            For Hague Convention member countries (including Japan), only the <strong>e-Apostille</strong> (a digital PDF certificate) is now issued. It is tied to the DFA's online verification system and must reach the receiving authority in its original digital format.
          </p>
        </div>
      </section>

      <IconCardGrid
        heading="What you need to apply yourself"
        subheading="These are all required, as a matter of fact"
        columns={3}
        cards={[
          { icon: Smartphone, title: 'An active Philippine mobile number', description: 'Required to receive a one-time password (OTP). If you live abroad, arranging this in advance can be a real hurdle.', accent: 'blue' },
          { icon: IdCard, title: "A valid ID for the person the document is for", description: 'A Philippine ID, or — if naturalized abroad — a foreign passport, as valid proof of identity.', accent: 'gold' },
          { icon: ScanFace, title: 'Liveness (facial) verification', description: 'Confirms the applicant is present in real time. This, the OTP, and the ID check all need to succeed in the same session.', accent: 'green' },
        ]}
      />

      <FeatureList
        heading="Where people commonly get stuck"
        items={[
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Living abroad means preparing for OTP receipt in advance',
            description: "If you no longer keep an active Philippine SIM, you'll need to arrange another way to receive the OTP before starting.",
          },
          {
            icon: <IdCard className="w-4 h-4" />,
            title: 'If a family member holds foreign citizenship, the signature match matters',
            description: "If a family member has already naturalized and only holds a foreign passport, the application can be rejected if the authorization letter signature doesn't match the passport signature. That said, a rejection can be resubmitted — it's not the end of the road.",
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'Family scattered across different countries makes coordination harder',
            description: 'Some documents require identity verification from more than one family member. Coordinating this across different countries and time zones takes time.',
          },
        ]}
      />

      <CtaBox
        title="If this feels difficult, consider having us file on your behalf"
        description="Whether you got stuck applying yourself or haven't started yet, we're happy to help. Tell us your situation first."
        buttonText="Free Consultation"
        href="#contact"
        variant="primary"
        trustNote="Reply within 24 hours · Anonymous inquiries OK · Free cancellation before we start"
      />

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">What we handle for you</h2>
        </div>
        <ul className="space-y-3">
          {[
            { icon: CheckCircle, title: 'Filing and identity verification on your behalf', description: 'From arranging OTP receipt to getting through ID and liveness checks, our team follows a process it already understands.' },
            { icon: CheckCircle, title: 'Signature review before you sign, to prevent rejection', description: "Before you sign the authorization letter, we check it against the passport signature to reduce the chance of rejection." },
            { icon: RefreshCw, title: 'Resubmission until approved, even after a rejection', description: 'If rejected, we review the reason and file again. Any additional cost, if applicable, is explained to you in advance.' },
            { icon: Truck, title: 'Consolidated delivery to Japan or your address', description: 'We deliver the retrieved certificate data and any related guidance together.' },
          ].map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <item.icon className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-bold text-gray-800 mb-0.5">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <StepList
        heading="How It Works"
        steps={[
          { title: 'Free consultation', description: 'Tell us whose document you need, which certificate, and the citizenship status of the people involved.' },
          { title: 'Situation review & quote', description: 'Based on how ready you are for identity verification, we outline the process and cost.' },
          { title: 'Authorization letter & ID preparation', description: 'We review signatures in advance to reduce the risk of rejection.' },
          { title: 'Filing & result report', description: 'We keep you updated on the application status. If rejected, we confirm the reason and refile.' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'Can I print an e-Apostille and use the paper copy?', a: 'No. An e-Apostille becomes invalid once printed. It must be submitted as the original PDF. If your authority requires a physical paper original instead, let us know and we can advise separately.' },
          { q: 'Can this be done if my family lives outside the Philippines?', a: 'Yes. Identity verification (OTP, ID, liveness) still needs to be completed, which can be difficult to arrange from abroad. We can file on your behalf.' },
          { q: 'Can you get documents for family members who no longer hold a Philippine ID?', a: 'It depends on the case. Family members naturalized abroad are usually verified via foreign passport. Share your situation and we will confirm.' },
          { q: 'My application was rejected. Is that the end of it?', a: 'No — a rejection can be resubmitted. Most rejections are due to a signature or ID mismatch. We resubmit on your behalf until it is approved.' },
        ]}
      />

      <RelatedArticles
        heading="Related Guides"
        items={[
          { href: '/en/apostille/', title: 'DFA Apostille Service', description: 'PSA, NBI, and CENOMAR authentication — request together.' },
          { href: '/en/cenomar-apostille/', title: 'CENOMAR Apostille Service', description: 'Details on CENOMAR-specific Apostille retrieval.' },
          { href: '/en/psa-ecertificate-abroad/', title: 'PSA e-Certificate & e-Apostille Abroad', description: 'Country-by-country acceptance of the digital format.' },
          { href: '/en/naturalization-guide/', title: 'Naturalization Documents Service', description: 'PSA, NBI, and Apostille retrieval for citizenship applications.' },
        ]}
      />
    </PageLayout>
  );
}
