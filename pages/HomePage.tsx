import React, { useEffect, lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QuickFacts from '../components/QuickFacts';
import PainPoints from '../components/PainPoints';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import { trackLandingView } from '../lib/analytics';

const CaseStudies = lazy(() => import('../components/CaseStudies'));
const SocialProof = lazy(() => import('../components/SocialProof'));
const Process = lazy(() => import('../components/Process'));
const Pricing = lazy(() => import('../components/Pricing'));
const FAQ = lazy(() => import('../components/FAQ'));
const Footer = lazy(() => import('../components/Footer'));

export default function HomePage() {
  useEffect(() => {
    trackLandingView();
  }, []);

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] bg-white text-secondary text-sm font-bold px-3 py-2 rounded shadow">
        メインコンテンツへスキップ
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <QuickFacts />
        <PainPoints />
        <Services />
        <WhyUs />
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <CaseStudies />
          <SocialProof />
          <Process />
          <Pricing />
          <FAQ />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}
