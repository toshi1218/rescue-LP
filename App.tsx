import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body pb-20 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <WhyUs />
        <Process />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
      <MobileStickyCTA />
    </div>
  );
}