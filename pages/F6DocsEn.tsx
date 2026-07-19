import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import PageLayout from '../components/PageLayout';

export default function F6DocsEn() {
  const faqs = [
    {
      q: "Is CENOMAR enough on its own?",
      a: "No. For the F-6 visa, CENOMAR alone is not sufficient. You also need an LCCM (Certificate of Legal Capacity to Marry) from the Philippine Embassy in Seoul, plus a PSA Birth Certificate and NBI Clearance.",
    },
    {
      q: "Do we need to apply for the LCCM ourselves?",
      a: "Yes. The LCCM (Certificate of Legal Capacity to Marry) must be applied for in person at the Philippine Embassy in Seoul. Both partners are often required to attend. We provide guidance on the appointment process and document flow (+₩390,000~).",
    },
    {
      q: "Is NBI Clearance always required?",
      a: "Yes, in most cases. Korean immigration authorities typically require NBI Clearance (Philippine criminal record certificate) with DFA Apostille for F-6 applications. We provide application guidance, embassy appointment support, and Apostille arrangement. Note: first-time applicants or those who do not meet renewal criteria must visit the Philippine Embassy in Seoul in person for fingerprint registration.",
    },
    {
      q: "Does every document need Apostille?",
      a: "Yes. Philippine documents submitted to Korean authorities generally require DFA Apostille authentication. This applies to PSA Birth Certificate, CENOMAR, and NBI Clearance.",
    },
    {
      q: "What happens if the F-6 application is rejected?",
      a: "An F-6 visa rejection results in a 6-month ban on reapplication. Ensuring your documents are complete and correctly authenticated is critical. We help you organize the full document set before submission.",
    },
  ];

  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'F-6 Visa Philippine Documents' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Philippine Documents for Korean F-6 Spouse Visa',
          description: 'We handle your PSA Birth Certificate and CENOMAR online applications with DFA e-Apostille for the Korean F-6 spousal immigration visa. NBI Clearance application support included. LCCM guidance available.',
          url: 'https://ph-document.com/en/f-6-philippines-documents/',
          provider: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/en/' },
          areaServed: { '@type': 'Country', name: 'KR' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        },
      ]}
    >
      {/* HeroBanner */}
      <section className="relative mb-10 overflow-hidden rounded-2xl bg-secondary px-6 py-10 md:px-10 md:py-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: 'radial-gradient(circle, #d69e2e 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />
        </div>
        <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-primary via-primary/60 to-transparent" />
        <div className="relative">
          <div className="flex flex-wrap gap-2 mb-4">
            {['F-6 Visa Documents', 'LCCM Guidance Available', 'Philippine-Side Documents'].map((b) => (
              <span key={b} className="inline-flex items-center gap-1 text-xs font-semibold bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full">
                <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                {b}
              </span>
            ))}
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-3">
            F-6 Spouse Visa:<br />Philippine Documents Sorted
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            PSA Birth Certificate, CENOMAR, DFA Apostille — retrieved without a trip to the Philippines.
            We also provide guidance on NBI Clearance and LCCM. Ask us even if you are unsure what you need.
          </p>
        </div>
      </section>

      {/* Common pain points */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-5">Common Problems at This Stage</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Not sure which Philippine documents are needed",
              desc: "What exactly is required, which documents need Apostille, and where to get the LCCM — these are common points of confusion at the start.",
            },
            {
              title: "Finding out too late that CENOMAR is not enough",
              desc: "In addition to CENOMAR, a PSA Birth Certificate, NBI Clearance, and LCCM are typically all required.",
            },
            {
              title: "F-6 rejection means a 6-month reapplication ban",
              desc: "A rejected F-6 application cannot be resubmitted for six months. Getting the documents right the first time matters.",
            },
            {
              title: "Not knowing how to apply for the LCCM",
              desc: "The LCCM is issued by the Philippine Embassy in Seoul on an appointment basis, often requiring both partners to attend.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-3 p-4 rounded-xl border border-amber-100 bg-amber-50">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-gray-800 mb-1">{item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documents */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-5">Philippine Documents Commonly Required</h2>

        {[
          {
            title: 'PSA Birth Certificate',
            en: 'PSA Birth Certificate',
            org: 'PSA (Philippine Statistics Authority)',
            desc: 'The official document certifying birth in the Philippines. Required as a base document for the F-6 application. DFA Apostille authentication is required for Korean submission.',
            note: null,
          },
          {
            title: 'CENOMAR',
            en: 'Certificate of No Marriage Record',
            org: 'PSA (Philippine Statistics Authority)',
            desc: 'Certifies that no marriage record exists. Valid for approximately one year from issuance. DFA Apostille required for Korean submission.',
            note: 'For the F-6 visa, CENOMAR alone is not sufficient — you also need an LCCM from the Philippine Embassy in Seoul.',
          },
          {
            title: 'NBI Clearance',
            en: 'NBI Clearance',
            org: 'NBI (National Bureau of Investigation)',
            desc: 'Certifies no criminal record in the Philippines. Generally required for F-6 applications and must be within the 6-month validity window. DFA Apostille required.',
            note: 'NBI Clearance is issued by NBI Manila. For first-time applicants or those not meeting renewal criteria, in-person fingerprint registration at the Philippine Embassy in Seoul is required. We provide application guidance, embassy appointment support, and Apostille arrangement.',
          },
          {
            title: 'DFA Apostille',
            en: 'DFA Apostille Authentication',
            org: 'DFA (Department of Foreign Affairs)',
            desc: 'All Philippine documents submitted to Korean authorities require DFA Apostille authentication. We handle Apostille for all documents above.',
            note: null,
          },
        ].map((doc) => (
          <div key={doc.title} className="mb-6 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-secondary text-sm">{doc.title}</h3>
              <span className="text-xs text-gray-400 shrink-0">{doc.org}</span>
            </div>
            <p className="text-xs text-gray-400 mb-2">{doc.en}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{doc.desc}</p>
            {doc.note && (
              <p className="mt-3 text-xs text-amber-600 bg-amber-50 rounded-lg px-3 py-2">
                ⚠ {doc.note}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* How it works */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-5">How It Works</h2>
        <ol className="space-y-4">
          {[
            { n: '1', title: 'Free consultation', desc: 'Tell us what documents you need and your purpose. You do not need to know the document names.' },
            { n: '2', title: 'Confirm scope and quote', desc: 'We clarify the document set, cost, and expected timeline upfront.' },
            { n: '3', title: 'Pay 50% to start', desc: 'Once payment is confirmed, we begin the Philippine-side process.' },
            { n: '4', title: 'PSA & CENOMAR online application + DFA e-Apostille', desc: 'We complete the PSA and CENOMAR online applications and payment on your behalf, and handle the DFA e-Apostille application. For NBI Clearance, we provide application guidance and physical Apostille support (fingerprint registration must be done in person at the Philippine Embassy in Seoul).' },
            { n: '5', title: 'Confirm document copies, pay balance, DHL shipping', desc: 'After you confirm the document copies, pay the remaining 50% and we ship to Korea via DHL.' },
          ].map((step) => (
            <li key={step.n} className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
              <span className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0 text-xs font-bold text-primary">
                {step.n}
              </span>
              <div>
                <p className="font-bold text-sm text-secondary mb-1">{step.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Who this is for */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-5">Who This Is For</h2>
        <ul className="space-y-3">
          {[
            'Currently preparing for a Korean F-6 spousal immigration visa',
            'Not sure which documents are required',
            'Cannot travel to the Philippines to collect documents',
            'Need documents ready quickly',
            'Unsure how to apply for the LCCM',
            'Had a previous attempt where document preparation did not go smoothly',
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-5">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
              <summary className="flex items-center justify-between gap-3 p-4 cursor-pointer list-none font-bold text-sm text-secondary">
                {faq.q}
                <span className="shrink-0 text-primary group-open:rotate-45 transition-transform text-lg leading-none">+</span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Internal links */}
      <nav className="mb-8 flex flex-wrap gap-3" aria-label="Related pages">
        <Link to="/en/pricing/" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors">
          Pricing
          <ArrowRight className="w-3 h-3" />
        </Link>
        <Link to="/en/nbi-clearance/" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors">
          NBI Clearance Support
          <ArrowRight className="w-3 h-3" />
        </Link>
        <Link to="/en/contact/" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors">
          Contact
          <ArrowRight className="w-3 h-3" />
        </Link>
      </nav>
    </PageLayout>
  );
}
