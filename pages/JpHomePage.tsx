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

export default function JpHomePage() {
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    'フィリピン書類取得代行センター｜CENOMAR・PSA・NBI代行【2026年対応】',
    'CENOMAR・PSA・NBI・DFAアポスティーユ等フィリピン書類取得を日本法人が完全代行。国際結婚・配偶者ビザに対応。日本語サポートあり。無料相談受付中。'
  );

  useEffect(() => {
    trackLandingView();
  }, []);

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
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
