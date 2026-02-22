import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CenomarGuidePage from './pages/CenomarGuidePage';
import PsaPage from './pages/PsaPage';
import NbiPage from './pages/NbiPage';
import KokusaiKekkonGuidePage from './pages/KokusaiKekkonGuidePage';
import HaigushaVisaPage from './pages/HaigushaVisaPage';
import ApostillePage from './pages/ApostillePage';
import GaimenKirikaeGuidePage from './pages/GaimenKirikaeGuidePage';
import KekkonShomeishoPage from './pages/KekkonShomeishoPage';
import CompanyPage from './pages/CompanyPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cenomar-guide" element={<CenomarGuidePage />} />
        <Route path="/psa-shussei-shomeisho" element={<PsaPage />} />
        <Route path="/nbi-clearance-guide" element={<NbiPage />} />
        <Route path="/kokusai-kekkon-guide" element={<KokusaiKekkonGuidePage />} />
        <Route path="/haigusha-visa-shorui" element={<HaigushaVisaPage />} />
        <Route path="/apostille-guide" element={<ApostillePage />} />
        <Route path="/gaimen-kirikae-guide" element={<GaimenKirikaeGuidePage />} />
        <Route path="/kekkon-shomeisho" element={<KekkonShomeishoPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </>
  );
}
