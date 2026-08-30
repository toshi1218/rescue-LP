import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import RelatedArticles from '../components/RelatedArticles';
import { FileCheck, Heart, Globe, Users } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR } from '../lib/seoDate';

export default function CenomarVsMarriageCertEn() {
  useMeta(
    `CENOMAR vs PSA Marriage Certificate [${SEO_YEAR}] — Which Do You Need?`,
    `CENOMAR = proof you've never been married. PSA Marriage Certificate = proof you are married. Wrong document = visa rejection. We explain and retrieve both.`,
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'CENOMAR vs. Marriage Certificate' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'CENOMAR vs. PSA Marriage Certificate — Which Do You Need?',
          description: 'CENOMAR and PSA Marriage Certificate are two different Philippine documents. CENOMAR proves single status; Marriage Certificate proves marriage. Learn when each is required for visa and immigration.',
          url: 'https://ph-document.com/en/cenomar-vs-marriage-certificate/',
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
              name: 'What is the difference between CENOMAR and PSA Marriage Certificate?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMAR (Certificate of No Marriage Record) proves that a Filipino has no record of marriage in the PSA database — i.e., they are legally single. PSA Marriage Certificate proves that a marriage was registered with PSA. They serve opposite purposes.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do I need CENOMAR or PSA Marriage Certificate for a K-1 visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For a K-1 fiancé visa, you typically need CENOMAR — proof that your Filipino fiancé(e) is single and legally eligible to marry. PSA Marriage Certificate would only be needed if they were previously married and need to show proof of annulment or dissolution.',
              },
            },
            {
              '@type': 'Question',
              name: 'Do I need both CENOMAR and PSA Marriage Certificate for a CR-1 visa?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'For a CR-1 visa (already married), you typically need the PSA Marriage Certificate proving your marriage, plus any CENOMAR or prior marriage documents if your spouse was previously married. Requirements vary by case — consult us for your exact situation.',
              },
            },
            {
              '@type': 'Question',
              name: 'What if my Filipino spouse was previously married?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'If they were previously married and the marriage was annulled or they are widowed, you may need both the PSA Marriage Certificate (for the current marriage) AND documentation of the previous marriage dissolution. We can advise on your specific case.',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="CENOMAR or PSA Marriage Certificate — Which Do You Need?"
        badges={['Common Confusion Explained', 'Visa-Specific Guidance', 'Free Consultation']}
        ctaText="Ask Which One You Need"
        ctaHref="#contact"
        lastUpdated="April 1, 2026"
      />

      <SummaryBlock
        conclusion="These are two completely different documents. Getting the wrong one means delays and extra cost."
        points={[
          'CENOMAR = proof your Filipino partner has never been married (single status)',
          'PSA Marriage Certificate = proof that a marriage was legally registered in the Philippines',
          'K-1 visa applicants usually need CENOMAR; CR-1/IR-1 applicants usually need PSA Marriage Certificate',
          'Some cases require both — especially if your partner was previously married',
        ]}
        ctaText="Tell Us Your Situation"
      />

      <FeatureList
        heading="CENOMAR — When You Need This"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'K-1 Fiancé Visa applications',
            description: 'A CENOMAR may be requested as evidence of civil status. Check the current K-1 petition and interview-stage instructions for the specific case.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Before an overseas wedding ceremony or civil registration abroad',
            description: 'Most civil registry offices worldwide require CENOMAR before they register a marriage involving a Filipino national.',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'CFO (Commission on Filipinos Overseas) seminars',
            description: 'CENOMAR is one of the documents required for CFO guidance counseling before a Filipino spouse can depart the Philippines.',
          },
        ]}
      />

      <FeatureList
        heading="PSA Marriage Certificate — When You Need This"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'CR-1 / IR-1 Spouse Visa applications',
            description: 'After your marriage is registered, a CR-1 or IR-1 spouse visa requires a PSA Marriage Certificate proving the legal marriage — not CENOMAR.',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Canada, Australia, UK, Japan and other immigration',
            description: 'A PSA Marriage Certificate is commonly used as proof of marriage, but format and authentication requirements vary by authority and procedure.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Naturalization and permanent residency applications',
            description: 'Citizenship and PR applications typically require your PSA Marriage Certificate to establish family relationships.',
          },
        ]}
      />

      {/* Comparison table */}
      <div className="my-8 overflow-x-auto">
        <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-secondary text-white">
              <th className="px-4 py-3 text-left font-semibold"></th>
              <th className="px-4 py-3 text-left font-semibold">CENOMAR</th>
              <th className="px-4 py-3 text-left font-semibold">PSA Marriage Certificate</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['What it proves', 'You have never been married (single status)', 'A specific marriage was legally registered'],
              ['Issued by', 'PSA (Philippine Statistics Authority)', 'PSA (Philippine Statistics Authority)'],
              ['When needed', 'Before marriage / K-1 visa stage', 'After marriage / CR-1, spouse visa stage'],
              ['Validity', '6 months from issue (most authorities)', 'No expiry — permanent record'],
              ['Apostille required?', 'Only if the receiving authority requests it', 'Only if the receiving authority requests it'],
              ['Price (our service)', 'From $349 (incl. Apostille + DHL)', 'From $349 (incl. Apostille + DHL)'],
            ].map(([label, cenomar, marriage], i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 font-medium text-gray-700 border-t border-gray-100">{label}</td>
                <td className="px-4 py-3 text-gray-600 border-t border-gray-100">{cenomar}</td>
                <td className="px-4 py-3 text-gray-600 border-t border-gray-100">{marriage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CtaBox
        title="Not Sure Which One Your Visa Requires?"
        description="Requirements vary by visa type, country, and whether your partner was previously married. Tell us your situation and we will confirm exactly what to order — before you pay for the wrong document."
        buttonText="Ask Us for Free"
        href="#contact"
        variant="primary"
        trustNote="Free cancellation before start · Progress updates at every stage · Reply within 24 hours"
      />

      <FeatureList
        heading="Country-Specific Notes"
        items={[
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'USA (K-1 visa → CENOMAR; CR-1/IR-1 → PSA Marriage Certificate)',
            description: 'The document checklist differs between K-1 and CR-1/IR-1 cases and by stage. Authentication is arranged only when the current official instructions require it.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Canada, Australia, UK (both may be required)',
            description: 'Spousal sponsorship and partner visa applications often require both CENOMAR (proof of single status at time of application) and PSA Marriage Certificate. We advise per case.',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'Japan (spouse visa → PSA Marriage Certificate required)',
            description: 'Japanese Immigration Bureau requires PSA Marriage Certificate with DFA Apostille + certified Japanese translation. CENOMAR is needed at the pre-marriage stage only.',
          },
        ]}
      />

      <FaqSection
        items={[
          { q: 'What is the difference between CENOMAR and PSA Marriage Certificate?', a: 'CENOMAR proves that a Filipino has no record of marriage in the PSA database — i.e., they are legally single. PSA Marriage Certificate proves that a specific marriage was registered with PSA. They serve opposite purposes.' },
          { q: 'Do I need CENOMAR or PSA Marriage Certificate for a K-1 visa?', a: 'For a K-1 fiancé visa, you typically need CENOMAR — proof that your Filipino fiancé(e) is single and legally eligible to marry. PSA Marriage Certificate would only be needed if they were previously married.' },
          { q: 'Do I need both for a CR-1 visa?', a: 'For a CR-1 visa (already married), you typically need the PSA Marriage Certificate. CENOMAR may also be required in some cases, especially if your spouse was previously married. Consult us for your exact situation.' },
          { q: 'What if my Filipino spouse was previously married?', a: 'If they were previously married and the marriage was annulled or they are widowed, you may need both the PSA Marriage Certificate (for the current marriage) AND documentation of the previous marriage dissolution.' },
          { q: 'How long does each document take to retrieve?', a: 'Both take approximately 4–6 weeks through our service: PSA issuance 2–3 weeks, DFA Apostille 1–2 weeks, DHL shipping 3–5 business days.' },
        ]}
        ctaTitle="Still unsure which document you need?"
        ctaButton="Ask Us — Free Consultation"
      />

      <RelatedArticles
        items={[
          { href: '/en/cenomar/', title: 'CENOMAR Retrieval Service', description: 'PSA + DFA Apostille + DHL worldwide. Complete guide.' },
          { href: '/en/psa-marriage-certificate/', title: 'PSA Marriage Certificate', description: 'Retrieve your marriage certificate with Apostille for visa applications.' },
          { href: '/en/k1-visa-documents/', title: 'K-1 Visa Document Guide', description: 'Complete Philippine document checklist for K-1 fiancé visa.' },
          { href: '/en/cr1-visa-documents/', title: 'CR-1 Visa Document Guide', description: 'Philippine documents needed for CR-1/IR-1 spouse visa applications.' },
        ]}
      />
    </PageLayout>
  );
}
