import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import GuideLinks from '../components/GuideLinks';
import QuickFacts from '../components/QuickFacts';
import PainPoints from '../components/PainPoints';
import TrustTransparency from '../components/TrustTransparency';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import CaseStudies from '../components/CaseStudies';
import SocialProof from '../components/SocialProof';
import Process from '../components/Process';
import DiyRisks from '../components/DiyRisks';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { trackLandingView } from '../lib/analytics';
import { useMeta } from '../lib/useMeta';

export default function HomeJa() {
  useMeta(
    'フィリピン書類取得代行｜CENOMAR・PSA・LTO 日本語だけで確実に取り寄せ',
    'フィリピン書類の取得を日本語だけで安心おまかせ。CENOMAR（独身証明書）・PSA出生証明書・LTO・DFAアポスティーユを現地スタッフが完全代行。進捗は随時ご報告。国際結婚・外免切替・配偶者ビザに対応。無料相談受付中。',
    'https://ph-document.com/ja/',
  );

  useEffect(() => {
    trackLandingView();
  }, []);

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <Navbar />
      <main>
        <Hero />
        <GuideLinks />
        <QuickFacts />
        <PainPoints />
        <TrustTransparency />
        <Services />
        <WhyUs />
        <CaseStudies />
        <SocialProof />
        <Process />
        <DiyRisks />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

