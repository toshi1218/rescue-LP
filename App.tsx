import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JpHomePage from './pages/JpHomePage';
import CenomarGuidePage from './pages/CenomarGuidePage';
import CenomarApostillePage from './pages/CenomarApostillePage';
import CenomarValidityPage from './pages/CenomarValidityPage';
import PsaPage from './pages/PsaPage';
import NbiPage from './pages/NbiPage';
import NbiHitPage from './pages/NbiHitPage';
import KokusaiKekkonGuidePage from './pages/KokusaiKekkonGuidePage';
import HaigushaVisaPage from './pages/HaigushaVisaPage';
import ApostillePage from './pages/ApostillePage';
import DfaProcessingTimePage from './pages/DfaProcessingTimePage';
import GaimenKirikaeGuidePage from './pages/GaimenKirikaeGuidePage';
import KekkonShomeishoPage from './pages/KekkonShomeishoPage';
import CompanyPage from './pages/CompanyPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import KikaShinseiGuidePage from './pages/KikaShinseiGuidePage';
import GuidesPage from './pages/GuidesPage';
import PsaBirthCertificateCostPage from './pages/PsaBirthCertificateCostPage';
import ApostilleFeePage from './pages/ApostilleFeePage';
import NbiValidityPage from './pages/NbiValidityPage';
import DriverRecordPage from './pages/DriverRecordPage';
import UsVisaDocumentsPage from './pages/UsVisaDocumentsPage';
import K1VisaDocumentsPage from './pages/K1VisaDocumentsPage';
import Cr1VisaDocumentsPage from './pages/Cr1VisaDocumentsPage';


function EnPrefixRedirect() {
  const { pathname } = useLocation();
  const target = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return <Navigate to={target} replace />;
}

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
        {/* ── Legacy /en prefixed URLs → EN canonical ─────────── */}
        <Route path="/en" element={<EnPrefixRedirect />} />
        <Route path="/en/*" element={<EnPrefixRedirect />} />

        {/* ── EN canonical routes ──────────────────────────────── */}
        <Route path="/" element={<HomePage />} />
        <Route path="/cenomar" element={<CenomarGuidePage />} />
        <Route path="/cenomar-apostille" element={<CenomarApostillePage />} />
        <Route path="/cenomar-validity" element={<CenomarValidityPage />} />
        <Route path="/psa-birth-certificate" element={<PsaPage />} />
        <Route path="/nbi-clearance" element={<NbiPage />} />
        <Route path="/nbi-hit" element={<NbiHitPage />} />
        <Route path="/apostille" element={<ApostillePage />} />
        <Route path="/apostille-processing-time" element={<DfaProcessingTimePage />} />
        <Route path="/international-marriage-guide" element={<Navigate to="/ja/kokusai-kekkon-guide" replace />} />
        <Route path="/spouse-visa-documents" element={<Navigate to="/ja/haigusha-visa" replace />} />
        <Route path="/psa-marriage-certificate" element={<KekkonShomeishoPage />} />
        <Route path="/drivers-license-conversion" element={<Navigate to="/ja/gaimen-kirikae-guide" replace />} />
        <Route path="/naturalization-guide" element={<Navigate to="/ja/kika-shinsei-guide" replace />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/psa-birth-certificate-cost" element={<PsaBirthCertificateCostPage />} />
        <Route path="/apostille-fee" element={<ApostilleFeePage />} />
        <Route path="/nbi-validity" element={<NbiValidityPage />} />
        <Route path="/driver-record" element={<Navigate to="/ja/driver-record" replace />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/us-visa-documents" element={<UsVisaDocumentsPage />} />
        <Route path="/k1-visa-documents" element={<K1VisaDocumentsPage />} />
        <Route path="/cr1-visa-documents" element={<Cr1VisaDocumentsPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />

        {/* ── JA canonical routes ──────────────────────────────── */}
        <Route path="/ja" element={<Navigate to="/ja/" replace />} />
        <Route path="/ja/" element={<JpHomePage />} />
        <Route path="/ja/cenomar" element={<CenomarGuidePage />} />
        <Route path="/ja/cenomar-apostille" element={<CenomarApostillePage />} />
        <Route path="/ja/cenomar-koyukigen" element={<CenomarValidityPage />} />
        <Route path="/ja/psa-shussei-shomeisho" element={<PsaPage />} />
        <Route path="/ja/nbi-clearance" element={<NbiPage />} />
        <Route path="/ja/nbi-hit" element={<NbiHitPage />} />
        <Route path="/ja/apostille" element={<ApostillePage />} />
        <Route path="/ja/apostille-shori-kikan" element={<DfaProcessingTimePage />} />
        <Route path="/ja/kokusai-kekkon-guide" element={<KokusaiKekkonGuidePage />} />
        <Route path="/ja/haigusha-visa" element={<HaigushaVisaPage />} />
        <Route path="/ja/psa-kekkon-shomeisho" element={<KekkonShomeishoPage />} />
        <Route path="/ja/gaimen-kirikae-guide" element={<GaimenKirikaeGuidePage />} />
        <Route path="/ja/kika-shinsei-guide" element={<KikaShinseiGuidePage />} />
        <Route path="/ja/guides" element={<GuidesPage />} />
        <Route path="/ja/psa-shussei-cost" element={<PsaBirthCertificateCostPage />} />
        <Route path="/ja/apostille-ryokin" element={<ApostilleFeePage />} />
        <Route path="/ja/nbi-koyukigen" element={<NbiValidityPage />} />
        <Route path="/ja/us-visa-documents" element={<UsVisaDocumentsPage />} />
        <Route path="/ja/driver-record" element={<DriverRecordPage />} />
        <Route path="/ja/ryokin" element={<PricingPage />} />
        <Route path="/ja/company" element={<CompanyPage />} />
        <Route path="/ja/contact" element={<ContactPage />} />
        <Route path="/ja/privacy" element={<PrivacyPolicyPage />} />

        {/* ── Old URL redirects → JA canonical ────────────────── */}
        <Route path="/jp" element={<Navigate to="/ja/" replace />} />
        <Route path="/cenomar-guide" element={<Navigate to="/ja/cenomar" replace />} />
        <Route path="/cenomar-guide/" element={<Navigate to="/ja/cenomar" replace />} />
        <Route path="/psa-shussei-shomeisho" element={<Navigate to="/ja/psa-shussei-shomeisho" replace />} />
        <Route path="/psa-shussei-shomeisho/" element={<Navigate to="/ja/psa-shussei-shomeisho" replace />} />
        <Route path="/nbi-clearance-guide" element={<Navigate to="/ja/nbi-clearance" replace />} />
        <Route path="/nbi-clearance-guide/" element={<Navigate to="/ja/nbi-clearance" replace />} />
        <Route path="/apostille-guide" element={<Navigate to="/ja/apostille" replace />} />
        <Route path="/apostille-guide/" element={<Navigate to="/ja/apostille" replace />} />
        <Route path="/kokusai-kekkon-guide" element={<Navigate to="/ja/kokusai-kekkon-guide" replace />} />
        <Route path="/kokusai-kekkon-guide/" element={<Navigate to="/ja/kokusai-kekkon-guide" replace />} />
        <Route path="/haigusha-visa-shorui" element={<Navigate to="/ja/haigusha-visa" replace />} />
        <Route path="/haigusha-visa-shorui/" element={<Navigate to="/ja/haigusha-visa" replace />} />
        <Route path="/kekkon-shomeisho" element={<Navigate to="/ja/psa-kekkon-shomeisho" replace />} />
        <Route path="/kekkon-shomeisho/" element={<Navigate to="/ja/psa-kekkon-shomeisho" replace />} />
        <Route path="/gaimen-kirikae-guide" element={<Navigate to="/ja/gaimen-kirikae-guide" replace />} />
        <Route path="/gaimen-kirikae-guide/" element={<Navigate to="/ja/gaimen-kirikae-guide" replace />} />
        <Route path="/kika-shinsei-guide" element={<Navigate to="/ja/kika-shinsei-guide" replace />} />
        <Route path="/kika-shinsei-guide/" element={<Navigate to="/ja/kika-shinsei-guide" replace />} />
      </Routes>
    </>
  );
}
