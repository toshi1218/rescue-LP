import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomeEn from './pages/HomeEn';
import HomeJa from './pages/HomeJa';
import CenomarGuideEn from './pages/CenomarGuideEn';
import CenomarGuideJa from './pages/CenomarGuideJa';
import CenomarApostilleEn from './pages/CenomarApostilleEn';
import CenomarApostilleJa from './pages/CenomarApostilleJa';
import CenomarValidityEn from './pages/CenomarValidityEn';
import CenomarValidityJa from './pages/CenomarValidityJa';
import PsaBirthCertEn from './pages/PsaBirthCertEn';
import PsaBirthCertJa from './pages/PsaBirthCertJa';
import NbiGuideEn from './pages/NbiGuideEn';
import NbiGuideJa from './pages/NbiGuideJa';
import NbiHitEn from './pages/NbiHitEn';
import NbiHitJa from './pages/NbiHitJa';
import ApostilleGuideEn from './pages/ApostilleGuideEn';
import ApostilleGuideJa from './pages/ApostilleGuideJa';
import DfaProcessingTimeEn from './pages/DfaProcessingTimeEn';
import DfaProcessingTimeJa from './pages/DfaProcessingTimeJa';
import MarriageGuideEn from './pages/MarriageGuideEn';
import MarriageGuideJa from './pages/MarriageGuideJa';
import SpouseVisaEn from './pages/SpouseVisaEn';
import SpouseVisaJa from './pages/SpouseVisaJa';
import PsaMarriageCertEn from './pages/PsaMarriageCertEn';
import PsaMarriageCertJa from './pages/PsaMarriageCertJa';
import LicenseConversionEn from './pages/LicenseConversionEn';
import LicenseConversionJa from './pages/LicenseConversionJa';
import NaturalizationEn from './pages/NaturalizationEn';
import NaturalizationJa from './pages/NaturalizationJa';
import GuidesEn from './pages/GuidesEn';
import GuidesJa from './pages/GuidesJa';
import PsaCostEn from './pages/PsaCostEn';
import PsaCostJa from './pages/PsaCostJa';
import ApostilleFeeEn from './pages/ApostilleFeeEn';
import ApostilleFeeJa from './pages/ApostilleFeeJa';
import NbiValidityEn from './pages/NbiValidityEn';
import NbiValidityJa from './pages/NbiValidityJa';
import DriverRecordEn from './pages/DriverRecordEn';
import DriverRecordJa from './pages/DriverRecordJa';
import PricingEn from './pages/PricingEn';
import PricingJa from './pages/PricingJa';
import UsVisaDocsEn from './pages/UsVisaDocsEn';
import UsVisaDocsJa from './pages/UsVisaDocsJa';
import K1VisaDocsEn from './pages/K1VisaDocsEn';
import Cr1VisaDocsEn from './pages/Cr1VisaDocsEn';
import CanadaDocsEn from './pages/CanadaDocsEn';
import CanadaDocsJa from './pages/CanadaDocsJa';
import AustraliaDocsEn from './pages/AustraliaDocsEn';
import AustraliaDocsJa from './pages/AustraliaDocsJa';
import UkDocsEn from './pages/UkDocsEn';
import UkDocsJa from './pages/UkDocsJa';
import CompanyEn from './pages/CompanyEn';
import CompanyJa from './pages/CompanyJa';
import ContactEn from './pages/ContactEn';
import ContactJa from './pages/ContactJa';
import PrivacyEn from './pages/PrivacyEn';
import PrivacyJa from './pages/PrivacyJa';
import TermsEn from './pages/TermsEn';
import TermsJa from './pages/TermsJa';
import RoadmapJa from './pages/RoadmapJa';
import MarriageOrderJa from './pages/MarriageOrderJa';
import GyoseishoshiVsDocServiceJa from './pages/GyoseishoshiVsDocServiceJa';
import PhilippinesWeddingGuideJa from './pages/PhilippinesWeddingGuideJa';
import TbCertJa from './pages/TbCertJa';
import SpouseVisaShoryuJa from './pages/SpouseVisaShoryuJa';
import CenomarVsMarriageCertEn from './pages/CenomarVsMarriageCertEn';
import DocumentChecklistByVisaEn from './pages/DocumentChecklistByVisaEn';
import NbiClearanceOverseasEn from './pages/NbiClearanceOverseasEn';
import PsaLateRegistrationEn from './pages/PsaLateRegistrationEn';

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
        <Route path="/en" element={<Navigate to="/en/" replace />} />
        <Route path="/en/" element={<HomeEn />} />
        <Route path="/ja" element={<Navigate to="/ja/" replace />} />
        <Route path="/ja/" element={<HomeJa />} />

        <Route path="/en/cenomar" element={<CenomarGuideEn />} />
        <Route path="/ja/cenomar" element={<CenomarGuideJa />} />
        <Route path="/en/cenomar-apostille" element={<CenomarApostilleEn />} />
        <Route path="/ja/cenomar-apostille" element={<CenomarApostilleJa />} />
        <Route path="/en/cenomar-validity" element={<CenomarValidityEn />} />
        <Route path="/ja/cenomar-koyukigen" element={<CenomarValidityJa />} />
        <Route path="/en/psa-birth-certificate" element={<PsaBirthCertEn />} />
        <Route path="/ja/psa-shussei-shomeisho" element={<PsaBirthCertJa />} />
        <Route path="/en/nbi-clearance" element={<NbiGuideEn />} />
        <Route path="/ja/nbi-clearance" element={<NbiGuideJa />} />
        <Route path="/en/nbi-hit" element={<NbiHitEn />} />
        <Route path="/ja/nbi-hit" element={<NbiHitJa />} />
        <Route path="/en/apostille" element={<ApostilleGuideEn />} />
        <Route path="/ja/apostille" element={<ApostilleGuideJa />} />
        <Route path="/en/apostille-processing-time" element={<DfaProcessingTimeEn />} />
        <Route path="/ja/apostille-shori-kikan" element={<DfaProcessingTimeJa />} />
        <Route path="/en/international-marriage-guide" element={<MarriageGuideEn />} />
        <Route path="/ja/kokusai-kekkon-guide" element={<MarriageGuideJa />} />
        <Route path="/en/spouse-visa-documents" element={<SpouseVisaEn />} />
        <Route path="/ja/haigusha-visa" element={<SpouseVisaJa />} />
        <Route path="/en/psa-marriage-certificate" element={<PsaMarriageCertEn />} />
        <Route path="/ja/psa-kekkon-shomeisho" element={<PsaMarriageCertJa />} />
        <Route path="/en/drivers-license-conversion" element={<LicenseConversionEn />} />
        <Route path="/ja/gaimen-kirikae-guide" element={<LicenseConversionJa />} />
        <Route path="/en/naturalization-guide" element={<NaturalizationEn />} />
        <Route path="/ja/kika-shinsei-guide" element={<NaturalizationJa />} />
        <Route path="/en/guides" element={<GuidesEn />} />
        <Route path="/ja/guides" element={<GuidesJa />} />
        <Route path="/en/psa-birth-certificate-cost" element={<PsaCostEn />} />
        <Route path="/ja/psa-shussei-cost" element={<PsaCostJa />} />
        <Route path="/en/apostille-fee" element={<ApostilleFeeEn />} />
        <Route path="/ja/apostille-ryokin" element={<ApostilleFeeJa />} />
        <Route path="/en/nbi-validity" element={<NbiValidityEn />} />
        <Route path="/ja/nbi-koyukigen" element={<NbiValidityJa />} />
        <Route path="/en/driver-record" element={<DriverRecordEn />} />
        <Route path="/ja/driver-record" element={<DriverRecordJa />} />
        <Route path="/en/pricing" element={<PricingEn />} />
        <Route path="/ja/ryokin" element={<PricingJa />} />
        <Route path="/en/us-visa-documents" element={<UsVisaDocsEn />} />
        <Route path="/ja/us-visa-documents" element={<UsVisaDocsJa />} />
        <Route path="/en/k1-visa-documents" element={<K1VisaDocsEn />} />
        <Route path="/en/cr1-visa-documents" element={<Cr1VisaDocsEn />} />
        <Route path="/en/canada" element={<CanadaDocsEn />} />
        <Route path="/ja/canada" element={<CanadaDocsJa />} />
        <Route path="/en/australia" element={<AustraliaDocsEn />} />
        <Route path="/ja/australia" element={<AustraliaDocsJa />} />
        <Route path="/en/uk" element={<UkDocsEn />} />
        <Route path="/ja/uk" element={<UkDocsJa />} />
        <Route path="/en/company" element={<CompanyEn />} />
        <Route path="/ja/company" element={<CompanyJa />} />
        <Route path="/en/contact" element={<ContactEn />} />
        <Route path="/ja/contact" element={<ContactJa />} />
        <Route path="/en/privacy" element={<PrivacyEn />} />
        <Route path="/ja/privacy" element={<PrivacyJa />} />
        <Route path="/en/terms" element={<TermsEn />} />
        <Route path="/ja/terms" element={<TermsJa />} />
        <Route path="/ja/kokusai-kekkon-roadmap" element={<RoadmapJa />} />
        <Route path="/ja/nihon-senko-ph-senko" element={<MarriageOrderJa />} />
        <Route path="/ja/gyouseishoshi-to-shorui-shuttoku" element={<GyoseishoshiVsDocServiceJa />} />
        <Route path="/ja/philippines-de-kekkon" element={<PhilippinesWeddingGuideJa />} />
        <Route path="/ja/kekkaku-shomeisho" element={<TbCertJa />} />
        <Route path="/ja/haigusha-visa-shorui" element={<SpouseVisaShoryuJa />} />
        <Route path="/en/cenomar-vs-marriage-certificate" element={<CenomarVsMarriageCertEn />} />
        <Route path="/en/document-checklist-by-visa" element={<DocumentChecklistByVisaEn />} />
        <Route path="/en/nbi-clearance-overseas" element={<NbiClearanceOverseasEn />} />
        <Route path="/en/psa-late-registration" element={<PsaLateRegistrationEn />} />

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
        <Route path="/cenomar-vs-marriage-certificate" element={<Navigate to="/en/cenomar-vs-marriage-certificate" replace />} />
        <Route path="/document-checklist-by-visa" element={<Navigate to="/en/document-checklist-by-visa" replace />} />
        <Route path="/nbi-clearance-overseas" element={<Navigate to="/en/nbi-clearance-overseas" replace />} />
        <Route path="/psa-late-registration" element={<Navigate to="/en/psa-late-registration" replace />} />

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
