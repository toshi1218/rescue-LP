import React from 'react';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import { FileCheck, ListOrdered, Map, CheckCircle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function RoadmapEn() {
  useMeta(
    'Personalized Document Roadmap for Filipino-Japanese Couples [2026]',
    'Custom roadmap service for Filipino-Japanese couples navigating international marriage and Japan spouse visa. We clarify the required documents, correct order, and full timeline for your specific situation.',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Personalized Document Roadmap' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Personalized Document Roadmap',
        description: 'Custom roadmap for Filipino-Japanese couples who need to clarify the required documents, order of procedures, and full process for international marriage and Japan spouse visa.',
        url: 'https://ph-document.com/en/personalized-roadmap/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/en/',
        },
        areaServed: [{ '@type': 'Country', name: 'JP' }, { '@type': 'Country', name: 'PH' }],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'JPY',
          price: '54780',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '54780',
            priceCurrency: 'JPY',
            description: 'Personalized Document Roadmap (tax included)',
          },
        },
      }]}
    >
      <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">
        Clarity service for international marriage and Japan spouse visa
      </p>

      <HeroBanner
        title="Personalized Document Roadmap"
        badges={['Tailored to Your Situation', 'Custom Roadmap Delivered', '7-Day Email Follow-up']}
        ctaText="Order Your Roadmap"
        ctaHref="#contact"
        lastUpdated="March 1, 2026"
      />

      {/* Lead text */}
      <section className="mb-12 space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
        <p>
          You want to marry your Filipino partner and build a life together in Japan.<br />
          This service creates a <strong className="text-secondary">personalized document roadmap</strong> — clarifying exactly which documents you need, in what order, and submitted where, based on your specific situation.
        </p>
        <p>
          International marriage involves two countries' bureaucracies. What documents are needed? In what order? Where do they go? Even after researching online, most couples find it hard to map generic information to their own circumstances.
        </p>
        <p>
          Starting without a clear picture means risk of wrong sequencing, missing documents, and avoidable delays.
        </p>
        <p className="font-semibold text-secondary">
          This service is about making the map first — so you know where you are, what comes next, and what's ahead.
        </p>
      </section>

      {/* Pricing and CTA */}
      <section className="mb-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 via-white to-primary/5 px-6 py-8 text-center">
        <p className="text-sm text-gray-500 mb-1">Personalized Document Roadmap</p>
        <p className="text-4xl font-bold text-secondary mb-1">
          ¥49,800<span className="text-xl font-semibold ml-0.5"></span>
        </p>
        <p className="text-xs text-gray-400 mb-6">¥54,780 including tax</p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-primary text-secondary font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-hover transition-all duration-200"
        >
          Order Your Roadmap
        </a>
        <p className="mt-3 text-xs text-gray-400">
          After ordering, you'll complete a pre-screening form. We'll build your custom roadmap from there.
        </p>
      </section>

      {/* Why this service exists */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">Why This Service Exists</h2>
        </div>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Most questions we receive are not simple "which documents do I need?" questions. The most common ones are:</p>
          <ul className="space-y-2 pl-4 border-l-2 border-primary/30">
            {[
              '"We don\'t know where to start for our situation."',
              '"We don\'t know where to submit what."',
              '"We don\'t know how to get the documents we need."',
              '"We\'re not sure when we\'d need an administrative scrivener or immigration lawyer."',
            ].map((item) => (
              <li key={item} className="text-gray-600">{item}</li>
            ))}
          </ul>
          <p>The underlying problem is that the overall picture is unclear.</p>
          <p className="font-semibold text-secondary">
            This service addresses that first — making the full picture visible, so you can then move forward with fewer wrong turns.
          </p>
        </div>
      </section>

      {/* Common concerns */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">Does This Sound Familiar?</h2>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 space-y-3 mb-4">
          {[
            "We're not sure if the order we're planning is correct.",
            "Should we do Japan-first or Philippines-first for the marriage? We can't decide.",
            'We researched online but the information is scattered and hard to apply to our case.',
            "We don't know where to submit each document.",
            "We're not sure how to get the Philippine documents we need.",
            "My partner is still in the Philippines — we don't know what they can do from there vs. what needs outside help.",
            'We feel we might need a scrivener or lawyer at some point but don\'t know when.',
            'We don\'t see the full path from marriage to actually living together in Japan.',
            'We\'re afraid of starting and then realizing we did things in the wrong order.',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0 mt-2" />
              <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-secondary/[0.04] border border-secondary/10 px-5 py-4">
          <p className="text-sm font-semibold text-secondary leading-relaxed">
            If these concerns apply to you, getting clarity on the full picture first will save time and effort.<br />
            Build the map before collecting documents. That's the purpose of this service.
          </p>
        </div>
      </section>

      {/* What you get */}
      <FeatureList
        heading="What You Get"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Required Documents',
            description: 'Based on your situation (countries of residence, marital history, visa status, etc.) we clarify exactly which documents are needed.',
          },
          {
            icon: <ListOrdered className="w-4 h-4" />,
            title: 'Correct Order of Procedures',
            description: 'What to do first, what comes after. Including the Japan-first vs. Philippines-first marriage question.',
          },
          {
            icon: <Map className="w-4 h-4" />,
            title: 'Submission Targets and Full Timeline',
            description: 'Which institution receives what. The full path from current status to living together in Japan, with estimated timeframes.',
          },
        ]}
      />
      <div className="mb-12 -mt-6 rounded-xl bg-secondary/[0.03] border border-secondary/10 px-5 py-4">
        <p className="text-sm text-gray-600 leading-relaxed">
          We also indicate at which stage you are likely to need an administrative scrivener or immigration attorney.<br />
          The goal is understanding the flow, not just isolated facts.<br />
          <strong className="text-secondary">"Where you are now. What's next. What comes after that."</strong> — that becomes clear.
        </p>
      </div>

      {/* Steps */}
      <StepList
        heading="How It Works"
        steps={[
          {
            title: 'Step 1 — Complete the Pre-Screening Form',
            description: 'After ordering, you fill out a form about your current situation. This is how we understand your specific circumstances.',
          },
          {
            title: 'Step 2 — We Review and Build Your Roadmap',
            description: 'We analyze your answers and organize the required documents, order of procedures, submission targets, and estimated timeline. We may follow up with questions if needed.',
          },
          {
            title: 'Step 3 — Roadmap Delivered',
            description: 'Your completed roadmap is delivered as a procedure map and schedule — a practical guide you can act on.',
          },
          {
            title: 'Step 4 — 7-Day Email Follow-up',
            description: 'For 7 days after delivery, you can email us questions about the roadmap contents. We reply within 2 business days.',
          },
        ]}
      />

      {/* What is delivered */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">What We Deliver</h2>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>We deliver a <strong className="text-secondary">procedure map and schedule</strong> tailored to your situation.</p>
          <p>
            Not just a document checklist. The order of procedures, where to submit each item, the overall flow, and estimated timeframes — organized in a format you can follow without confusion.
          </p>
          <p>Not a compilation of information — an actionable map.</p>
          <p className="font-semibold text-secondary">
            What to do now. What's next. What you'll need later. All in one organized view.
          </p>
        </div>
      </section>

      {/* Who this is for */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">Who This Is For</h2>
        </div>
        <div className="space-y-2 mb-4">
          {[
            'Filipino-Japanese couples where the Filipino partner is abroad and you want to get married in Japan.',
            'Couples planning not just the marriage but the full path to living together in Japan.',
            'People who have researched online but can\'t apply the information to their own case.',
            'Couples who want to avoid detours and do-overs.',
            'Those who want to understand the full picture first, then proceed step by step.',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-card px-5 py-4">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-100 px-5 py-4">
          <p className="text-sm text-gray-500 leading-relaxed">
            If you already know exactly what you need and just want to order specific documents, our document retrieval service may be a better fit.
          </p>
        </div>
      </section>

      {/* Pricing detail */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">Pricing</h2>
        </div>
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/5 via-white to-primary/5 p-6 md:p-8">
          <p className="text-sm text-gray-500 mb-1">Personalized Document Roadmap</p>
          <p className="text-4xl font-bold text-secondary mb-1">
            ¥49,800
          </p>
          <p className="text-sm text-gray-400 mb-5">¥54,780 including tax</p>
          <div className="text-sm text-gray-600 leading-relaxed space-y-2 mb-6">
            <p>
              This includes: your situation review, custom roadmap creation, and 7-day email follow-up after delivery (replies within 2 business days).
            </p>
            <p>
              If you then proceed to our <strong className="text-secondary">document retrieval service</strong>, roadmap clients receive a <strong className="text-secondary">¥20,000 discount</strong> on the document retrieval package.
            </p>
          </div>
          <div className="rounded-xl bg-primary/10 border border-primary/20 px-5 py-4">
            <p className="text-xs font-bold text-primary mb-1 tracking-wide">Roadmap Client Benefit</p>
            <p className="text-sm text-secondary leading-relaxed">
              If you proceed to a document retrieval package, <strong>¥20,000 is deducted</strong> from the document retrieval fee.
            </p>
          </div>
        </div>
      </section>

      <CtaBox
        title="Build Your Roadmap Before You Start Collecting Documents"
        description="Know exactly what you need, in what order, submitted where — before making a single move. Order your personalized roadmap and we'll map it all out for your specific situation."
        buttonText="Order Your Roadmap"
        href="#contact"
        variant="primary"
        trustNote="Service begins after payment. No refunds after work starts. Not legal advice — see important notes below."
      />

      {/* Important notes */}
      <section className="mb-8 mt-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">Important Notes</h2>
        </div>
        <div className="rounded-xl bg-secondary/[0.03] border border-secondary/10 px-5 py-5">
          <ul className="space-y-3 text-xs text-gray-500 leading-relaxed">
            {[
              'This service organizes the general flow of procedures, required documents, and submission targets based on your situation. It is an information-organizing and guidance service.',
              'We do not provide individual legal advice, legal representation, document submission on your behalf in Japan, or any services requiring a licensed attorney or administrative scrivener.',
              'For Japan-side marriage registration, visa applications, or any matter requiring licensed legal work, please consult an administrative scrivener or attorney at the appropriate stage.',
              'Procedures and document requirements can change. Always confirm final requirements with the relevant government office or a licensed professional.',
              'No refunds after work has begun. Please review these terms before ordering.',
              'This service does not guarantee outcomes and does not substitute for the judgment of government offices or other institutions.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="flex-shrink-0 text-gray-300 mt-0.5">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RelatedLinks links={[
        { path: '/en/japan-first-vs-philippines-first-marriage/', label: 'Japan-First vs Philippines-First Marriage' },
        { path: '/en/getting-married-in-philippines/', label: 'Getting Married in the Philippines — Complete Guide' },
        { path: '/en/spouse-visa-document-checklist/', label: 'Spouse Visa Document Checklist' },
        { path: '/en/apostille/', label: 'DFA Apostille Service' },
      ]} />
    </PageLayout>
  );
}
