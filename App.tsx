import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JpHomePage from './pages/JpHomePage';
import CenomarGuideJa from './pages/CenomarGuideJa';
import CenomarGuideEn from './pages/CenomarGuideEn';
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

        {/* ── EN canonical routes (/en/*) ───────────────────────── */}
        <Route path="/en" element={<Navigate to="/en/" replace />} />
        <Route path="/en/" element={<HomePage />} />
        <Route path="/en/cenomar" element={<CenomarGuideEn />} />
        <Route path="/en/cenomar-apostille" element={<CenomarApostillePage />} />
        <Route path="/en/cenomar-validity" element={<CenomarValidityPage />} />
        <Route path="/en/psa-birth-certificate" element={<PsaPage />} />
        <Route path="/en/nbi-clearance" element={<NbiPage />} />
        <Route path="/en/nbi-hit" element={<NbiHitPage />} />
        <Route path="/en/apostille" element={<ApostillePage />} />
        <Route path="/en/apostille-processing-time" element={<DfaProcessingTimePage />} />
        <Route path="/en/international-marriage-guide" element={<KokusaiKekkonGuidePage />} />
        <Route path="/en/spouse-visa-documents" element={<HaigushaVisaPage />} />
        <Route path="/en/psa-marriage-certificate" element={<KekkonShomeishoPage />} />
        <Route path="/en/drivers-license-conversion" element={<GaimenKirikaeGuidePage />} />
        <Route path="/en/naturalization-guide" element={<KikaShinseiGuidePage />} />
        <Route path="/en/guides" element={<GuidesPage />} />
        <Route path="/en/psa-birth-certificate-cost" element={<PsaBirthCertificateCostPage />} />
        <Route path="/en/apostille-fee" element={<ApostilleFeePage />} />
        <Route path="/en/nbi-validity" element={<NbiValidityPage />} />
        <Route path="/en/driver-record" element={<DriverRecordPage />} />
        <Route path="/en/pricing" element={<PricingPage />} />
        <Route path="/en/us-visa-documents" element={<UsVisaDocumentsPage />} />
        <Route path="/en/k1-visa-documents" element={<K1VisaDocumentsPage />} />
        <Route path="/en/cr1-visa-documents" element={<Cr1VisaDocumentsPage />} />
        <Route path="/en/company" element={<CompanyPage />} />
        <Route path="/en/contact" element={<ContactPage />} />
        <Route path="/en/privacy" element={<PrivacyPolicyPage />} />

        {/* ── JA canonical routes (/ja/*) ───────────────────────── */}
        <Route path="/ja" element={<Navigate to="/ja/" replace />} />
        <Route path="/ja/" element={<JpHomePage />} />
        <Route path="/ja/cenomar" element={<CenomarGuideJa />} />
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

        {/* ── 旧 EN canonical (/ 系) → /en/* へ 301 ────────────── */}
        <Route path="/" element={<Navigate to="/en/" replace />} />
        <Route path="/cenomar" element={<Navigate to="/en/cenomar" replace />} />
        <Route path="/cenomar-apostille" element={<Navigate to="/en/cenomar-apostille" replace />} />
        <Route path="/cenomar-validity" element={<Navigate to="/en/cenomar-validity" replace />} />
        <Route path="/psa-birth-certificate" element={<Navigate to="/en/psa-birth-certificate" replace />} />
        <Route path="/nbi-clearance" element={<Navigate to="/en/nbi-clearance" replace />} />
        <Route path="/nbi-hit" element={<Navigate to="/en/nbi-hit" replace />} />
        <Route path="/apostille" element={<Navigate to="/en/apostille" replace />} />
        <Route path="/apostille-processing-time" element={<Navigate to="/en/apostille-processing-time" replace />} />
        <Route path="/international-marriage-guide" element={<Navigate to="/en/international-marriage-guide" replace />} />
        <Route path="/spouse-visa-documents" element={<Navigate to="/en/spouse-visa-documents" replace />} />
        <Route path="/psa-marriage-certificate" element={<Navigate to="/en/psa-marriage-certificate" replace />} />
        <Route path="/drivers-license-conversion" element={<Navigate to="/en/drivers-license-conversion" replace />} />
        <Route path="/naturalization-guide" element={<Navigate to="/en/naturalization-guide" replace />} />
        <Route path="/guides" element={<Navigate to="/en/guides" replace />} />
        <Route path="/psa-birth-certificate-cost" element={<Navigate to="/en/psa-birth-certificate-cost" replace />} />
        <Route path="/apostille-fee" element={<Navigate to="/en/apostille-fee" replace />} />
        <Route path="/nbi-validity" element={<Navigate to="/en/nbi-validity" replace />} />
        <Route path="/driver-record" element={<Navigate to="/en/driver-record" replace />} />
        <Route path="/pricing" element={<Navigate to="/en/pricing" replace />} />
        <Route path="/us-visa-documents" element={<Navigate to="/en/us-visa-documents" replace />} />
        <Route path="/k1-visa-documents" element={<Navigate to="/en/k1-visa-documents" replace />} />
        <Route path="/cr1-visa-documents" element={<Navigate to="/en/cr1-visa-documents" replace />} />
        <Route path="/company" element={<Navigate to="/en/company" replace />} />
        <Route path="/contact" element={<Navigate to="/en/contact" replace />} />
        <Route path="/privacy" element={<Navigate to="/en/privacy" replace />} />

        {/* ── 旧 URL → JA canonical へ 301 ─────────────────────── */}
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
