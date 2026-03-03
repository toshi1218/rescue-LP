import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QuickFacts from '../components/QuickFacts';
import GuideLinks from '../components/GuideLinks';
import PainPoints from '../components/PainPoints';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import CaseStudies from '../components/CaseStudies';
import SocialProof from '../components/SocialProof';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { trackLandingView } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA, SEO_YEAR_MONTH_EN, SEO_DATE_ISO } from '../lib/seoDate';

export default function HomePage() {
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;
  useMeta(
    t(`フィリピン書類取得代行センター｜CENOMAR・PSA・NBI代行【${SEO_YEAR_MONTH_JA}対応】`, `PSA, CENOMAR & NBI Apostille for K-1 / CR-1 Visa [${SEO_YEAR_MONTH_EN}]`),
    t('CENOMAR・PSA・NBI・LTO・DFAアポスティーユ等フィリピン書類取得を日本法人が完全代行。渡航不要・最短納期。国際結婚・配偶者ビザ・外免切替・帰化申請に対応。日本語サポートあり。無料相談受付中。', 'Get PSA Birth Certificate, CENOMAR, NBI Clearance with DFA Apostille for K-1 / CR-1 visa (USCIS, NVC & US Embassy). Ships to your US address via DHL. Free consultation.')
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://ph-document.com/',
        name: `PSA, CENOMAR & NBI Apostille for K-1 / CR-1 Visa [${SEO_YEAR_MONTH_EN}]`,
        description: 'We retrieve PSA Birth Certificates, CENOMAR, NBI Clearance with DFA Apostille for USCIS, NVC & US Embassy requirements. Ships to your US address via DHL. Trusted by US visa applicants. Free consultation.',
        url: 'https://ph-document.com/',
        inLanguage: 'en',
        dateModified: SEO_DATE_ISO,
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', 'h2'],
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ph-document.com/' },
        ],
      },
    ],
  };

  useEffect(() => {
    trackLandingView();
  }, []);

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] bg-white text-secondary text-sm font-bold px-3 py-2 rounded shadow">
        {t('メインコンテンツへスキップ', 'Skip to main content')}
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <GuideLinks />
        <QuickFacts />
        <PainPoints />
        <Services />
        <WhyUs />
        <CaseStudies />
        <SocialProof />
        <Process />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
