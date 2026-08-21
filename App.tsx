import React, { lazy, Suspense, useEffect, useRef, useState, Component, ErrorInfo, ReactNode } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { getLangSwitchUrl } from './lib/urlMap';
import { COUNTRY_CONFIGS } from './lib/countryConfig';

interface ErrorBoundaryState { hasError: boolean; }
class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };
  static getDerivedStateFromError(): ErrorBoundaryState { return { hasError: true }; }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
          <p className="text-lg font-bold text-secondary">ページの読み込みに失敗しました</p>
          <p className="text-sm text-gray-500">Something went wrong. Please reload the page.</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-6 py-2 bg-primary text-secondary font-bold rounded-lg shadow hover:bg-primary-hover transition-all"
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const HomeEn = lazy(() => import('./pages/HomeEn'));
const HomeJa = lazy(() => import('./pages/HomeJa'));
const CenomarGuideEn = lazy(() => import('./pages/CenomarGuideEn'));
const CenomarMeaningEn = lazy(() => import('./pages/CenomarMeaningEn'));
const CenomarAbroadEn = lazy(() => import('./pages/CenomarAbroadEn'));
const CenomarTohaJa = lazy(() => import('./pages/CenomarTohaJa'));
const PsaSerbilisEn = lazy(() => import('./pages/PsaSerbilisEn'));
const CenomarGuideJa = lazy(() => import('./pages/CenomarGuideJa'));
const CenomarApostilleEn = lazy(() => import('./pages/CenomarApostilleEn'));
const CenomarApostilleJa = lazy(() => import('./pages/CenomarApostilleJa'));
const CenomarValidityEn = lazy(() => import('./pages/CenomarValidityEn'));
const CenomarValidityJa = lazy(() => import('./pages/CenomarValidityJa'));
const PsaOnlineEn = lazy(() => import('./pages/PsaOnlineEn'));
const PhilippineStatisticsAuthorityEn = lazy(() => import('./pages/PhilippineStatisticsAuthorityEn'));
const PsaEcertificateAbroadEn = lazy(() => import('./pages/PsaEcertificateAbroadEn'));
const PsaBirthCertEn = lazy(() => import('./pages/PsaBirthCertEn'));
const PsaBirthCertJa = lazy(() => import('./pages/PsaBirthCertJa'));
const NbiGuideEn = lazy(() => import('./pages/NbiGuideEn'));
const NbiClearanceOnlineEn = lazy(() => import('./pages/NbiClearanceOnlineEn'));
const NbiGuideJa = lazy(() => import('./pages/NbiGuideJa'));
const NbiHitEn = lazy(() => import('./pages/NbiHitEn'));
const NbiHitJa = lazy(() => import('./pages/NbiHitJa'));
const ApostilleGuideEn = lazy(() => import('./pages/ApostilleGuideEn'));
const ApostilleGuideJa = lazy(() => import('./pages/ApostilleGuideJa'));
const DfaProcessingTimeEn = lazy(() => import('./pages/DfaProcessingTimeEn'));
const DfaProcessingTimeJa = lazy(() => import('./pages/DfaProcessingTimeJa'));
const MarriageGuideEn = lazy(() => import('./pages/MarriageGuideEn'));
const MarriageGuideJa = lazy(() => import('./pages/MarriageGuideJa'));
const SpouseVisaEn = lazy(() => import('./pages/SpouseVisaEn'));
const SpouseVisaJa = lazy(() => import('./pages/SpouseVisaJa'));
const PsaMarriageCertEn = lazy(() => import('./pages/PsaMarriageCertEn'));
const PsaMarriageCertJa = lazy(() => import('./pages/PsaMarriageCertJa'));
const LicenseConversionEn = lazy(() => import('./pages/LicenseConversionEn'));
const LicenseConversionJa = lazy(() => import('./pages/LicenseConversionJa'));
const NaturalizationEn = lazy(() => import('./pages/NaturalizationEn'));
const NaturalizationJa = lazy(() => import('./pages/NaturalizationJa'));
const EApostilleFukaJa = lazy(() => import('./pages/EApostilleFukaJa'));
const DataSecurityJa = lazy(() => import('./pages/DataSecurityJa'));
const DataSecurityEn = lazy(() => import('./pages/DataSecurityEn'));
const DataSecurityKo = lazy(() => import('./pages/DataSecurityKo'));
const GuidesEn = lazy(() => import('./pages/GuidesEn'));
const GuidesJa = lazy(() => import('./pages/GuidesJa'));
const PsaCostEn = lazy(() => import('./pages/PsaCostEn'));
const PsaCostJa = lazy(() => import('./pages/PsaCostJa'));
const ApostilleFeeEn = lazy(() => import('./pages/ApostilleFeeEn'));
const ApostilleFeeJa = lazy(() => import('./pages/ApostilleFeeJa'));
const NbiValidityEn = lazy(() => import('./pages/NbiValidityEn'));
const NbiValidityJa = lazy(() => import('./pages/NbiValidityJa'));
const DriverRecordEn = lazy(() => import('./pages/DriverRecordEn'));
const DriverRecordJa = lazy(() => import('./pages/DriverRecordJa'));
const PricingEn = lazy(() => import('./pages/PricingEn'));
const PricingJa = lazy(() => import('./pages/PricingJa'));
const UsVisaDocsEn = lazy(() => import('./pages/UsVisaDocsEn'));
const UsVisaDocsJa = lazy(() => import('./pages/UsVisaDocsJa'));
const K1VisaDocsEn = lazy(() => import('./pages/K1VisaDocsEn'));
const Cr1VisaDocsEn = lazy(() => import('./pages/Cr1VisaDocsEn'));
const CanadaDocsEn = lazy(() => import('./pages/CanadaDocsEn'));
const CanadaDocsJa = lazy(() => import('./pages/CanadaDocsJa'));
const AustraliaDocsEn = lazy(() => import('./pages/AustraliaDocsEn'));
const AustraliaDocsJa = lazy(() => import('./pages/AustraliaDocsJa'));
const UkDocsEn = lazy(() => import('./pages/UkDocsEn'));
const UkDocsJa = lazy(() => import('./pages/UkDocsJa'));
const NewZealandDocsEn = lazy(() => import('./pages/NewZealandDocsEn'));
const GermanyDocsEn = lazy(() => import('./pages/GermanyDocsEn'));
const CenomarByCountryEn = lazy(() => import('./pages/CenomarByCountryEn'));
const CenomarCostComparisonEn = lazy(() => import('./pages/CenomarCostComparisonEn'));
const CompanyEn = lazy(() => import('./pages/CompanyEn'));
const CompanyJa = lazy(() => import('./pages/CompanyJa'));
const ContactEn = lazy(() => import('./pages/ContactEn'));
const ContactJa = lazy(() => import('./pages/ContactJa'));
const TrackingEn = lazy(() => import('./pages/TrackingEn'));
const TrackingJa = lazy(() => import('./pages/TrackingJa'));
const PrivacyEn = lazy(() => import('./pages/PrivacyEn'));
const PrivacyJa = lazy(() => import('./pages/PrivacyJa'));
const TermsEn = lazy(() => import('./pages/TermsEn'));
const TermsJa = lazy(() => import('./pages/TermsJa'));
const TokushoJa = lazy(() => import('./pages/TokushoJa'));
const RoadmapJa = lazy(() => import('./pages/RoadmapJa'));
const MarriageOrderJa = lazy(() => import('./pages/MarriageOrderJa'));
const GyoseishoshiVsDocServiceJa = lazy(() => import('./pages/GyoseishoshiVsDocServiceJa'));
const PhilippinesWeddingGuideJa = lazy(() => import('./pages/PhilippinesWeddingGuideJa'));
const TbCertJa = lazy(() => import('./pages/TbCertJa'));
const SpouseVisaShoryuJa = lazy(() => import('./pages/SpouseVisaShoryuJa'));
const BusinessMenkyoKirikaeKigyouJa = lazy(() => import('./pages/BusinessMenkyoKirikaeKigyouJa'));
const CenomarVsMarriageCertEn = lazy(() => import('./pages/CenomarVsMarriageCertEn'));
const DocumentChecklistByVisaEn = lazy(() => import('./pages/DocumentChecklistByVisaEn'));
const NbiClearanceOverseasEn = lazy(() => import('./pages/NbiClearanceOverseasEn'));
const PsaLateRegistrationEn = lazy(() => import('./pages/PsaLateRegistrationEn'));
const CenomarVsMarriageCertJa = lazy(() => import('./pages/CenomarVsMarriageCertJa'));
const DocumentChecklistByVisaJa = lazy(() => import('./pages/DocumentChecklistByVisaJa'));
const NbiClearanceOverseasJa = lazy(() => import('./pages/NbiClearanceOverseasJa'));
const PsaLateRegistrationJa = lazy(() => import('./pages/PsaLateRegistrationJa'));
const PsaEcertificateNihonJa = lazy(() => import('./pages/PsaEcertificateNihonJa'));
const InputSupportJa = lazy(() => import('./pages/InputSupportJa'));
const HonyakuJa = lazy(() => import('./pages/HonyakuJa'));
const BusinessHomeJa = lazy(() => import('./pages/BusinessHomeJa'));
const BusinessTourokushienJa = lazy(() => import('./pages/BusinessTourokushienJa'));
const BusinessGyoseishoshiJa = lazy(() => import('./pages/BusinessGyoseishoshiJa'));
const BusinessKigyouJa = lazy(() => import('./pages/BusinessKigyouJa'));
const BusinessMenkyoKirikaeJa = lazy(() => import('./pages/BusinessMenkyoKirikaeJa'));
const LtoKoyoKakuninJa = lazy(() => import('./pages/LtoKoyoKakuninJa'));
const DfaGalleriaCebuJa = lazy(() => import('./pages/DfaGalleriaCebuJa'));
const PsaCrsCebuJa = lazy(() => import('./pages/PsaCrsCebuJa'));
const LtoSmSeasideJa = lazy(() => import('./pages/LtoSmSeasideJa'));
const KojinJohoHogoJa = lazy(() => import('./pages/KojinJohoHogoJa'));
const TbCertEn = lazy(() => import('./pages/TbCertEn'));
const SpouseVisaDocChecklistEn = lazy(() => import('./pages/SpouseVisaDocChecklistEn'));
const MarriageOrderEn = lazy(() => import('./pages/MarriageOrderEn'));
const PhilippinesWeddingGuideEn = lazy(() => import('./pages/PhilippinesWeddingGuideEn'));
const DfaGalleriaCebuEn = lazy(() => import('./pages/DfaGalleriaCebuEn'));
const PsaCrsCebuEn = lazy(() => import('./pages/PsaCrsCebuEn'));
const LtoSmSeasideEn = lazy(() => import('./pages/LtoSmSeasideEn'));
const RoadmapEn = lazy(() => import('./pages/RoadmapEn'));
const GyoseishoshiVsDocServiceEn = lazy(() => import('./pages/GyoseishoshiVsDocServiceEn'));
const KojinJohoHogoEn = lazy(() => import('./pages/KojinJohoHogoEn'));
const F6DocsEn = lazy(() => import('./pages/F6DocsEn'));
const CountryDocsEnTemplate = lazy(() => import('./pages/CountryDocsEnTemplate'));
const HomeKo = lazy(() => import('./pages/HomeKo'));
const PricingKo = lazy(() => import('./pages/PricingKo'));
const F6DocsKo = lazy(() => import('./pages/F6DocsKo'));
const NbiKo = lazy(() => import('./pages/NbiKo'));
const PsaEcertificateHangukKo = lazy(() => import('./pages/PsaEcertificateHangukKo'));
const ContactKo = lazy(() => import('./pages/ContactKo'));
const TrackingKo = lazy(() => import('./pages/TrackingKo'));
const NotFound = lazy(() => import('./pages/NotFound'));
const FloatingChatWidget = lazy(() => import('./components/FloatingChatWidget'));

function NavigationProgress() {
  const { pathname } = useLocation();
  const [key, setKey] = useState(0);
  const prevPathname = useRef<string | null>(null);

  useEffect(() => {
    if (prevPathname.current !== null && prevPathname.current !== pathname) {
      setKey((k) => k + 1);
    }
    prevPathname.current = pathname;
  }, [pathname]);

  if (key === 0) return null;
  return <div key={key} className="nav-progress-bar" aria-hidden="true" />;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathname = useRef<string | null>(null);

  useEffect(() => {
    const prev = prevPathname.current;
    prevPathname.current = pathname;

    // If navigating to the language-equivalent of the current page, preserve scroll
    if (prev !== null) {
      const langEquivalent = getLangSwitchUrl(prev);
      const normalize = (p: string) => p.replace(/\/$/, '') || '/';
      if (normalize(langEquivalent) === normalize(pathname)) return;
    }

    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <NavigationProgress />
      <ErrorBoundary>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-primary border-b-transparent animate-spin" role="status" aria-label="Loading" /></div>}>
      <Routes>
        <Route path="/en" element={<Navigate to="/en/" replace />} />
        <Route path="/en/" element={<HomeEn />} />
        <Route path="/ja" element={<Navigate to="/ja/" replace />} />
        <Route path="/ja/" element={<HomeJa />} />

        <Route path="/en/cenomar" element={<Navigate to="/en/cenomar/" replace />} />
        <Route path="/en/cenomar/" element={<CenomarGuideEn />} />
        <Route path="/en/cenomar-meaning" element={<Navigate to="/en/cenomar-meaning/" replace />} />
        <Route path="/en/cenomar-meaning/" element={<CenomarMeaningEn />} />
        <Route path="/en/how-to-get-cenomar-abroad" element={<Navigate to="/en/how-to-get-cenomar-abroad/" replace />} />
        <Route path="/en/how-to-get-cenomar-abroad/" element={<CenomarAbroadEn />} />
        <Route path="/en/psa-serbilis" element={<Navigate to="/en/psa-serbilis/" replace />} />
        <Route path="/en/psa-serbilis/" element={<PsaSerbilisEn />} />
        <Route path="/ja/cenomar" element={<Navigate to="/ja/cenomar/" replace />} />
        <Route path="/ja/cenomar/" element={<CenomarGuideJa />} />
        <Route path="/ja/cenomar-toha" element={<Navigate to="/ja/cenomar-toha/" replace />} />
        <Route path="/ja/cenomar-toha/" element={<CenomarTohaJa />} />
        <Route path="/en/cenomar-apostille" element={<Navigate to="/en/cenomar-apostille/" replace />} />
        <Route path="/en/cenomar-apostille/" element={<CenomarApostilleEn />} />
        <Route path="/ja/cenomar-apostille" element={<Navigate to="/ja/cenomar-apostille/" replace />} />
        <Route path="/ja/cenomar-apostille/" element={<CenomarApostilleJa />} />
        <Route path="/en/cenomar-validity" element={<Navigate to="/en/cenomar-validity/" replace />} />
        <Route path="/en/cenomar-validity/" element={<CenomarValidityEn />} />
        <Route path="/ja/cenomar-koyukigen" element={<Navigate to="/ja/cenomar-koyukigen/" replace />} />
        <Route path="/ja/cenomar-koyukigen/" element={<CenomarValidityJa />} />
        <Route path="/en/psa-online" element={<Navigate to="/en/psa-online/" replace />} />
        <Route path="/en/psa-online/" element={<PsaOnlineEn />} />
        <Route path="/en/psa-ecertificate-abroad" element={<Navigate to="/en/psa-ecertificate-abroad/" replace />} />
        <Route path="/en/psa-ecertificate-abroad/" element={<PsaEcertificateAbroadEn />} />
        <Route path="/en/philippine-statistics-authority" element={<Navigate to="/en/philippine-statistics-authority/" replace />} />
        <Route path="/en/philippine-statistics-authority/" element={<PhilippineStatisticsAuthorityEn />} />
        <Route path="/en/psa-birth-certificate" element={<Navigate to="/en/psa-birth-certificate/" replace />} />
        <Route path="/en/psa-birth-certificate/" element={<PsaBirthCertEn />} />
        <Route path="/ja/psa-shussei-shomeisho" element={<Navigate to="/ja/psa-shussei-shomeisho/" replace />} />
        <Route path="/ja/psa-shussei-shomeisho/" element={<PsaBirthCertJa />} />
        <Route path="/en/nbi-clearance-online" element={<Navigate to="/en/nbi-clearance-online/" replace />} />
        <Route path="/en/nbi-clearance-online/" element={<NbiClearanceOnlineEn />} />
        <Route path="/en/nbi-clearance" element={<Navigate to="/en/nbi-clearance/" replace />} />
        <Route path="/en/nbi-clearance/" element={<NbiGuideEn />} />
        <Route path="/ja/nbi-clearance" element={<Navigate to="/ja/nbi-clearance/" replace />} />
        <Route path="/ja/nbi-clearance/" element={<NbiGuideJa />} />
        <Route path="/en/nbi-hit" element={<Navigate to="/en/nbi-hit/" replace />} />
        <Route path="/en/nbi-hit/" element={<NbiHitEn />} />
        <Route path="/ja/nbi-hit" element={<Navigate to="/ja/nbi-hit/" replace />} />
        <Route path="/ja/nbi-hit/" element={<NbiHitJa />} />
        <Route path="/en/apostille" element={<Navigate to="/en/apostille/" replace />} />
        <Route path="/en/apostille/" element={<ApostilleGuideEn />} />
        <Route path="/ja/apostille" element={<Navigate to="/ja/apostille/" replace />} />
        <Route path="/ja/apostille/" element={<ApostilleGuideJa />} />
        <Route path="/en/apostille-processing-time" element={<Navigate to="/en/apostille-processing-time/" replace />} />
        <Route path="/en/apostille-processing-time/" element={<DfaProcessingTimeEn />} />
        <Route path="/ja/apostille-shori-kikan" element={<Navigate to="/ja/apostille-shori-kikan/" replace />} />
        <Route path="/ja/apostille-shori-kikan/" element={<DfaProcessingTimeJa />} />
        <Route path="/en/international-marriage-guide" element={<Navigate to="/en/international-marriage-guide/" replace />} />
        <Route path="/en/international-marriage-guide/" element={<MarriageGuideEn />} />
        <Route path="/ja/kokusai-kekkon-guide" element={<Navigate to="/ja/kokusai-kekkon-guide/" replace />} />
        <Route path="/ja/kokusai-kekkon-guide/" element={<MarriageGuideJa />} />
        <Route path="/en/spouse-visa-documents" element={<Navigate to="/en/spouse-visa-documents/" replace />} />
        <Route path="/en/spouse-visa-documents/" element={<SpouseVisaEn />} />
        <Route path="/ja/haigusha-visa" element={<Navigate to="/ja/haigusha-visa/" replace />} />
        <Route path="/ja/haigusha-visa/" element={<SpouseVisaJa />} />
        <Route path="/en/psa-marriage-certificate" element={<Navigate to="/en/psa-marriage-certificate/" replace />} />
        <Route path="/en/psa-marriage-certificate/" element={<PsaMarriageCertEn />} />
        <Route path="/ja/psa-kekkon-shomeisho" element={<Navigate to="/ja/psa-kekkon-shomeisho/" replace />} />
        <Route path="/ja/psa-kekkon-shomeisho/" element={<PsaMarriageCertJa />} />
        <Route path="/en/drivers-license-conversion" element={<Navigate to="/en/drivers-license-conversion/" replace />} />
        <Route path="/en/drivers-license-conversion/" element={<LicenseConversionEn />} />
        <Route path="/ja/gaimen-kirikae-guide" element={<Navigate to="/ja/gaimen-kirikae-guide/" replace />} />
        <Route path="/ja/gaimen-kirikae-guide/" element={<LicenseConversionJa />} />
        <Route path="/en/naturalization-guide" element={<Navigate to="/en/naturalization-guide/" replace />} />
        <Route path="/en/naturalization-guide/" element={<NaturalizationEn />} />
        <Route path="/ja/kika-shinsei-guide" element={<Navigate to="/ja/kika-shinsei-guide/" replace />} />
        <Route path="/ja/kika-shinsei-guide/" element={<NaturalizationJa />} />
        <Route path="/ja/e-apostille-fuka" element={<Navigate to="/ja/e-apostille-fuka/" replace />} />
        <Route path="/ja/e-apostille-fuka/" element={<EApostilleFukaJa />} />
        <Route path="/ja/data-security" element={<Navigate to="/ja/data-security/" replace />} />
        <Route path="/ja/data-security/" element={<DataSecurityJa />} />
        <Route path="/en/data-security" element={<Navigate to="/en/data-security/" replace />} />
        <Route path="/en/data-security/" element={<DataSecurityEn />} />
        <Route path="/ko/data-security" element={<Navigate to="/ko/data-security/" replace />} />
        <Route path="/ko/data-security/" element={<DataSecurityKo />} />
        <Route path="/en/guides" element={<Navigate to="/en/guides/" replace />} />
        <Route path="/en/guides/" element={<GuidesEn />} />
        <Route path="/ja/guides" element={<Navigate to="/ja/guides/" replace />} />
        <Route path="/ja/guides/" element={<GuidesJa />} />
        <Route path="/en/psa-birth-certificate-cost" element={<Navigate to="/en/psa-birth-certificate-cost/" replace />} />
        <Route path="/en/psa-birth-certificate-cost/" element={<PsaCostEn />} />
        <Route path="/ja/psa-shussei-cost" element={<Navigate to="/ja/psa-shussei-cost/" replace />} />
        <Route path="/ja/psa-shussei-cost/" element={<PsaCostJa />} />
        <Route path="/en/apostille-fee" element={<Navigate to="/en/apostille-fee/" replace />} />
        <Route path="/en/apostille-fee/" element={<ApostilleFeeEn />} />
        <Route path="/ja/apostille-ryokin" element={<Navigate to="/ja/apostille-ryokin/" replace />} />
        <Route path="/ja/apostille-ryokin/" element={<ApostilleFeeJa />} />
        <Route path="/en/nbi-validity" element={<Navigate to="/en/nbi-validity/" replace />} />
        <Route path="/en/nbi-validity/" element={<NbiValidityEn />} />
        <Route path="/ja/nbi-koyukigen" element={<Navigate to="/ja/nbi-koyukigen/" replace />} />
        <Route path="/ja/nbi-koyukigen/" element={<NbiValidityJa />} />
        <Route path="/en/driver-record" element={<Navigate to="/en/driver-record/" replace />} />
        <Route path="/en/driver-record/" element={<DriverRecordEn />} />
        <Route path="/ja/driver-record" element={<Navigate to="/ja/driver-record/" replace />} />
        <Route path="/ja/driver-record/" element={<DriverRecordJa />} />
        <Route path="/en/pricing" element={<Navigate to="/en/pricing/" replace />} />
        <Route path="/en/pricing/" element={<PricingEn />} />
        <Route path="/ja/ryokin" element={<Navigate to="/ja/ryokin/" replace />} />
        <Route path="/ja/ryokin/" element={<PricingJa />} />
        <Route path="/en/us-visa-documents" element={<Navigate to="/en/us-visa-documents/" replace />} />
        <Route path="/en/us-visa-documents/" element={<UsVisaDocsEn />} />
        <Route path="/ja/us-visa-documents" element={<Navigate to="/ja/us-visa-documents/" replace />} />
        <Route path="/ja/us-visa-documents/" element={<UsVisaDocsJa />} />
        <Route path="/en/k1-visa-documents" element={<Navigate to="/en/k1-visa-documents/" replace />} />
        <Route path="/en/k1-visa-documents/" element={<K1VisaDocsEn />} />
        <Route path="/en/cr1-visa-documents" element={<Navigate to="/en/cr1-visa-documents/" replace />} />
        <Route path="/en/cr1-visa-documents/" element={<Cr1VisaDocsEn />} />
        <Route path="/en/canada" element={<Navigate to="/en/canada/" replace />} />
        <Route path="/en/canada/" element={<CanadaDocsEn />} />
        <Route path="/ja/canada" element={<Navigate to="/ja/canada/" replace />} />
        <Route path="/ja/canada/" element={<CanadaDocsJa />} />
        <Route path="/en/australia" element={<Navigate to="/en/australia/" replace />} />
        <Route path="/en/australia/" element={<AustraliaDocsEn />} />
        <Route path="/ja/australia" element={<Navigate to="/ja/australia/" replace />} />
        <Route path="/ja/australia/" element={<AustraliaDocsJa />} />
        <Route path="/en/uk" element={<Navigate to="/en/uk/" replace />} />
        <Route path="/en/uk/" element={<UkDocsEn />} />
        <Route path="/ja/uk" element={<Navigate to="/ja/uk/" replace />} />
        <Route path="/ja/uk/" element={<UkDocsJa />} />
        <Route path="/en/new-zealand" element={<Navigate to="/en/new-zealand/" replace />} />
        <Route path="/en/new-zealand/" element={<NewZealandDocsEn />} />
        <Route path="/en/germany" element={<Navigate to="/en/germany/" replace />} />
        <Route path="/en/germany/" element={<GermanyDocsEn />} />
        <Route path="/en/cenomar-requirements-by-country" element={<Navigate to="/en/cenomar-requirements-by-country/" replace />} />
        <Route path="/en/cenomar-requirements-by-country/" element={<CenomarByCountryEn />} />
        <Route path="/en/cenomar-cost-comparison" element={<Navigate to="/en/cenomar-cost-comparison/" replace />} />
        <Route path="/en/cenomar-cost-comparison/" element={<CenomarCostComparisonEn />} />
        <Route path="/en/company" element={<Navigate to="/en/company/" replace />} />
        <Route path="/en/company/" element={<CompanyEn />} />
        <Route path="/ja/company" element={<Navigate to="/ja/company/" replace />} />
        <Route path="/ja/company/" element={<CompanyJa />} />
        <Route path="/en/contact" element={<Navigate to="/en/contact/" replace />} />
        <Route path="/en/contact/" element={<ContactEn />} />
        <Route path="/ja/contact" element={<Navigate to="/ja/contact/" replace />} />
        <Route path="/ja/contact/" element={<ContactJa />} />
        <Route path="/en/tracking" element={<Navigate to="/en/tracking/" replace />} />
        <Route path="/en/tracking/" element={<TrackingEn />} />
        <Route path="/ja/tracking" element={<Navigate to="/ja/tracking/" replace />} />
        <Route path="/ja/tracking/" element={<TrackingJa />} />
        <Route path="/en/privacy" element={<Navigate to="/en/privacy/" replace />} />
        <Route path="/en/privacy/" element={<PrivacyEn />} />
        <Route path="/ja/privacy" element={<Navigate to="/ja/privacy/" replace />} />
        <Route path="/ja/privacy/" element={<PrivacyJa />} />
        <Route path="/en/terms" element={<Navigate to="/en/terms/" replace />} />
        <Route path="/en/terms/" element={<TermsEn />} />
        <Route path="/ja/terms" element={<Navigate to="/ja/terms/" replace />} />
        <Route path="/ja/terms/" element={<TermsJa />} />
        <Route path="/ja/tokusho" element={<Navigate to="/ja/tokusho/" replace />} />
        <Route path="/ja/tokusho/" element={<TokushoJa />} />
        <Route path="/ja/kokusai-kekkon-roadmap" element={<Navigate to="/ja/kokusai-kekkon-roadmap/" replace />} />
        <Route path="/ja/kokusai-kekkon-roadmap/" element={<RoadmapJa />} />
        <Route path="/ja/nihon-senko-ph-senko" element={<Navigate to="/ja/nihon-senko-ph-senko/" replace />} />
        <Route path="/ja/nihon-senko-ph-senko/" element={<MarriageOrderJa />} />
        <Route path="/ja/gyouseishoshi-to-shorui-shuttoku" element={<Navigate to="/ja/gyouseishoshi-to-shorui-shuttoku/" replace />} />
        <Route path="/ja/gyouseishoshi-to-shorui-shuttoku/" element={<GyoseishoshiVsDocServiceJa />} />
        <Route path="/ja/philippines-de-kekkon" element={<Navigate to="/ja/philippines-de-kekkon/" replace />} />
        <Route path="/ja/philippines-de-kekkon/" element={<PhilippinesWeddingGuideJa />} />
        <Route path="/ja/kekkaku-shomeisho" element={<Navigate to="/ja/kekkaku-shomeisho/" replace />} />
        <Route path="/ja/kekkaku-shomeisho/" element={<TbCertJa />} />
        <Route path="/ja/haigusha-visa-shorui" element={<Navigate to="/ja/haigusha-visa-shorui/" replace />} />
        <Route path="/ja/haigusha-visa-shorui/" element={<SpouseVisaShoryuJa />} />
        <Route path="/en/cenomar-vs-marriage-certificate" element={<Navigate to="/en/cenomar-vs-marriage-certificate/" replace />} />
        <Route path="/en/cenomar-vs-marriage-certificate/" element={<CenomarVsMarriageCertEn />} />
        <Route path="/en/document-checklist-by-visa" element={<Navigate to="/en/document-checklist-by-visa/" replace />} />
        <Route path="/en/document-checklist-by-visa/" element={<DocumentChecklistByVisaEn />} />
        <Route path="/en/nbi-clearance-overseas" element={<Navigate to="/en/nbi-clearance-overseas/" replace />} />
        <Route path="/en/nbi-clearance-overseas/" element={<NbiClearanceOverseasEn />} />
        <Route path="/en/psa-late-registration" element={<Navigate to="/en/psa-late-registration/" replace />} />
        <Route path="/en/psa-late-registration/" element={<PsaLateRegistrationEn />} />
        <Route path="/ja/cenomar-vs-marriage-certificate" element={<Navigate to="/ja/cenomar-vs-marriage-certificate/" replace />} />
        <Route path="/ja/cenomar-vs-marriage-certificate/" element={<CenomarVsMarriageCertJa />} />
        <Route path="/ja/document-checklist-by-visa" element={<Navigate to="/ja/document-checklist-by-visa/" replace />} />
        <Route path="/ja/document-checklist-by-visa/" element={<DocumentChecklistByVisaJa />} />
        <Route path="/ja/nbi-clearance-overseas" element={<Navigate to="/ja/nbi-clearance-overseas/" replace />} />
        <Route path="/ja/nbi-clearance-overseas/" element={<NbiClearanceOverseasJa />} />
        <Route path="/ja/psa-late-registration" element={<Navigate to="/ja/psa-late-registration/" replace />} />
        <Route path="/ja/psa-late-registration/" element={<PsaLateRegistrationJa />} />
        <Route path="/ja/psa-ecertificate-nihon" element={<Navigate to="/ja/psa-ecertificate-nihon/" replace />} />
        <Route path="/ja/psa-ecertificate-nihon/" element={<PsaEcertificateNihonJa />} />
        <Route path="/ja/psa-input-support" element={<Navigate to="/ja/psa-input-support/" replace />} />
        <Route path="/ja/psa-input-support/" element={<InputSupportJa />} />
        <Route path="/ja/honyaku" element={<Navigate to="/ja/honyaku/" replace />} />
        <Route path="/ja/honyaku/" element={<HonyakuJa />} />
        <Route path="/ja/business" element={<Navigate to="/ja/business/" replace />} />
        <Route path="/ja/business/" element={<BusinessHomeJa />} />
        <Route path="/ja/business/touroku-shien-kikan" element={<Navigate to="/ja/business/touroku-shien-kikan/" replace />} />
        <Route path="/ja/business/touroku-shien-kikan/" element={<BusinessTourokushienJa />} />
        <Route path="/ja/business/gyoseishoshi" element={<Navigate to="/ja/business/gyoseishoshi/" replace />} />
        <Route path="/ja/business/gyoseishoshi/" element={<BusinessGyoseishoshiJa />} />
        <Route path="/ja/business/kigyou" element={<Navigate to="/ja/business/kigyou/" replace />} />
        <Route path="/ja/business/kigyou/" element={<BusinessKigyouJa />} />
        <Route path="/ja/business/menkyo-kirikae" element={<Navigate to="/ja/business/menkyo-kirikae/" replace />} />
        <Route path="/ja/business/menkyo-kirikae/" element={<BusinessMenkyoKirikaeJa />} />
        <Route path="/ja/business/menkyo-kirikae-kigyou" element={<Navigate to="/ja/business/menkyo-kirikae-kigyou/" replace />} />
        <Route path="/ja/business/menkyo-kirikae-kigyou/" element={<BusinessMenkyoKirikaeKigyouJa />} />
        <Route path="/ja/lto-koyo-kakunin" element={<Navigate to="/ja/lto-koyo-kakunin/" replace />} />
        <Route path="/ja/lto-koyo-kakunin/" element={<LtoKoyoKakuninJa />} />
        <Route path="/ja/dfa-apostille-genchi-report" element={<Navigate to="/ja/dfa-apostille-genchi-report/" replace />} />
        <Route path="/ja/dfa-apostille-genchi-report/" element={<DfaGalleriaCebuJa />} />
        <Route path="/ja/psa-crs-cebu-genchi-report" element={<Navigate to="/ja/psa-crs-cebu-genchi-report/" replace />} />
        <Route path="/ja/psa-crs-cebu-genchi-report/" element={<PsaCrsCebuJa />} />
        <Route path="/ja/lto-sm-seaside-genchi-report" element={<Navigate to="/ja/lto-sm-seaside-genchi-report/" replace />} />
        <Route path="/ja/lto-sm-seaside-genchi-report/" element={<LtoSmSeasideJa />} />
        <Route path="/ja/kojin-joho-hogo" element={<Navigate to="/ja/kojin-joho-hogo/" replace />} />
        <Route path="/ja/kojin-joho-hogo/" element={<KojinJohoHogoJa />} />
        <Route path="/en/tb-certificate" element={<Navigate to="/en/tb-certificate/" replace />} />
        <Route path="/en/tb-certificate/" element={<TbCertEn />} />
        <Route path="/en/spouse-visa-document-checklist" element={<Navigate to="/en/spouse-visa-document-checklist/" replace />} />
        <Route path="/en/spouse-visa-document-checklist/" element={<SpouseVisaDocChecklistEn />} />
        <Route path="/en/japan-first-vs-philippines-first-marriage" element={<Navigate to="/en/japan-first-vs-philippines-first-marriage/" replace />} />
        <Route path="/en/japan-first-vs-philippines-first-marriage/" element={<MarriageOrderEn />} />
        <Route path="/en/getting-married-in-philippines" element={<Navigate to="/en/getting-married-in-philippines/" replace />} />
        <Route path="/en/getting-married-in-philippines/" element={<PhilippinesWeddingGuideEn />} />
        <Route path="/en/dfa-apostille-cebu-report" element={<Navigate to="/en/dfa-apostille-cebu-report/" replace />} />
        <Route path="/en/dfa-apostille-cebu-report/" element={<DfaGalleriaCebuEn />} />
        <Route path="/en/psa-crs-cebu-report" element={<Navigate to="/en/psa-crs-cebu-report/" replace />} />
        <Route path="/en/psa-crs-cebu-report/" element={<PsaCrsCebuEn />} />
        <Route path="/en/lto-sm-seaside-cebu-report" element={<Navigate to="/en/lto-sm-seaside-cebu-report/" replace />} />
        <Route path="/en/lto-sm-seaside-cebu-report/" element={<LtoSmSeasideEn />} />
        <Route path="/en/personalized-roadmap" element={<Navigate to="/en/personalized-roadmap/" replace />} />
        <Route path="/en/personalized-roadmap/" element={<RoadmapEn />} />
        <Route path="/en/immigration-lawyer-vs-document-service" element={<Navigate to="/en/immigration-lawyer-vs-document-service/" replace />} />
        <Route path="/en/immigration-lawyer-vs-document-service/" element={<GyoseishoshiVsDocServiceEn />} />
        <Route path="/en/personal-information-protection" element={<Navigate to="/en/personal-information-protection/" replace />} />
        <Route path="/en/personal-information-protection/" element={<KojinJohoHogoEn />} />
        <Route path="/en/f-6-philippines-documents" element={<Navigate to="/en/f-6-philippines-documents/" replace />} />
        <Route path="/en/f-6-philippines-documents/" element={<F6DocsEn />} />

        {/* Korean routes */}
        <Route path="/ko" element={<Navigate to="/ko/" replace />} />
        <Route path="/ko/" element={<HomeKo />} />
        <Route path="/ko/pricing" element={<Navigate to="/ko/pricing/" replace />} />
        <Route path="/ko/pricing/" element={<PricingKo />} />
        <Route path="/ko/f-6-philippines-documents" element={<Navigate to="/ko/f-6-philippines-documents/" replace />} />
        <Route path="/ko/f-6-philippines-documents/" element={<F6DocsKo />} />
        <Route path="/ko/nbi-clearance" element={<Navigate to="/ko/nbi-clearance/" replace />} />
        <Route path="/ko/nbi-clearance/" element={<NbiKo />} />
        <Route path="/ko/psa-ecertificate-hanguk" element={<Navigate to="/ko/psa-ecertificate-hanguk/" replace />} />
        <Route path="/ko/psa-ecertificate-hanguk/" element={<PsaEcertificateHangukKo />} />
        <Route path="/ko/contact" element={<Navigate to="/ko/contact/" replace />} />
        <Route path="/ko/contact/" element={<ContactKo />} />
        <Route path="/ko/tracking" element={<Navigate to="/ko/tracking/" replace />} />
        <Route path="/ko/tracking/" element={<TrackingKo />} />

        <Route path="/" element={<Navigate to="/en/" replace />} />
        <Route path="/cenomar" element={<Navigate to="/en/cenomar/" replace />} />
        <Route path="/cenomar-apostille" element={<Navigate to="/en/cenomar-apostille/" replace />} />
        <Route path="/cenomar-validity" element={<Navigate to="/en/cenomar-validity/" replace />} />
        <Route path="/psa-birth-certificate" element={<Navigate to="/en/psa-birth-certificate/" replace />} />
        <Route path="/nbi-clearance" element={<Navigate to="/en/nbi-clearance/" replace />} />
        <Route path="/nbi-hit" element={<Navigate to="/en/nbi-hit/" replace />} />
        <Route path="/apostille" element={<Navigate to="/en/apostille/" replace />} />
        <Route path="/apostille-processing-time" element={<Navigate to="/en/apostille-processing-time/" replace />} />
        <Route path="/international-marriage-guide" element={<Navigate to="/en/international-marriage-guide/" replace />} />
        <Route path="/spouse-visa-documents" element={<Navigate to="/en/spouse-visa-documents/" replace />} />
        <Route path="/psa-marriage-certificate" element={<Navigate to="/en/psa-marriage-certificate/" replace />} />
        <Route path="/drivers-license-conversion" element={<Navigate to="/en/drivers-license-conversion/" replace />} />
        <Route path="/naturalization-guide" element={<Navigate to="/en/naturalization-guide/" replace />} />
        <Route path="/guides" element={<Navigate to="/en/guides/" replace />} />
        <Route path="/psa-birth-certificate-cost" element={<Navigate to="/en/psa-birth-certificate-cost/" replace />} />
        <Route path="/apostille-fee" element={<Navigate to="/en/apostille-fee/" replace />} />
        <Route path="/nbi-validity" element={<Navigate to="/en/nbi-validity/" replace />} />
        <Route path="/driver-record" element={<Navigate to="/en/driver-record/" replace />} />
        <Route path="/pricing" element={<Navigate to="/en/pricing/" replace />} />
        <Route path="/us-visa-documents" element={<Navigate to="/en/us-visa-documents/" replace />} />
        <Route path="/k1-visa-documents" element={<Navigate to="/en/k1-visa-documents/" replace />} />
        <Route path="/cr1-visa-documents" element={<Navigate to="/en/cr1-visa-documents/" replace />} />
        <Route path="/company" element={<Navigate to="/en/company/" replace />} />
        <Route path="/contact" element={<Navigate to="/en/contact/" replace />} />
        <Route path="/privacy" element={<Navigate to="/en/privacy/" replace />} />
        <Route path="/terms" element={<Navigate to="/en/terms/" replace />} />
        {COUNTRY_CONFIGS.map(config => (
          <React.Fragment key={config.slug}>
            <Route path={`/en/${config.slug}`} element={<Navigate to={`/en/${config.slug}/`} replace />} />
            <Route path={`/en/${config.slug}/`} element={<CountryDocsEnTemplate config={config} />} />
          </React.Fragment>
        ))}

        <Route path="/canada" element={<Navigate to="/en/canada/" replace />} />
        <Route path="/australia" element={<Navigate to="/en/australia/" replace />} />
        <Route path="/uk" element={<Navigate to="/en/uk/" replace />} />
        <Route path="/cenomar-vs-marriage-certificate" element={<Navigate to="/en/cenomar-vs-marriage-certificate/" replace />} />
        <Route path="/document-checklist-by-visa" element={<Navigate to="/en/document-checklist-by-visa/" replace />} />
        <Route path="/nbi-clearance-overseas" element={<Navigate to="/en/nbi-clearance-overseas/" replace />} />
        <Route path="/psa-late-registration" element={<Navigate to="/en/psa-late-registration/" replace />} />
        <Route path="/cenomar-vs-marriage-certificate/" element={<Navigate to="/en/cenomar-vs-marriage-certificate/" replace />} />
        <Route path="/document-checklist-by-visa/" element={<Navigate to="/en/document-checklist-by-visa/" replace />} />
        <Route path="/nbi-clearance-overseas/" element={<Navigate to="/en/nbi-clearance-overseas/" replace />} />
        <Route path="/psa-late-registration/" element={<Navigate to="/en/psa-late-registration/" replace />} />

        <Route path="/jp" element={<Navigate to="/ja/" replace />} />
        <Route path="/cenomar-guide" element={<Navigate to="/ja/cenomar/" replace />} />
        <Route path="/cenomar-guide/" element={<Navigate to="/ja/cenomar/" replace />} />
        <Route path="/psa-shussei-shomeisho" element={<Navigate to="/ja/psa-shussei-shomeisho/" replace />} />
        <Route path="/psa-shussei-shomeisho/" element={<Navigate to="/ja/psa-shussei-shomeisho/" replace />} />
        <Route path="/nbi-clearance-guide" element={<Navigate to="/ja/nbi-clearance/" replace />} />
        <Route path="/nbi-clearance-guide/" element={<Navigate to="/ja/nbi-clearance/" replace />} />
        <Route path="/apostille-guide" element={<Navigate to="/ja/apostille/" replace />} />
        <Route path="/apostille-guide/" element={<Navigate to="/ja/apostille/" replace />} />
        <Route path="/kokusai-kekkon-guide" element={<Navigate to="/ja/kokusai-kekkon-guide/" replace />} />
        <Route path="/kokusai-kekkon-guide/" element={<Navigate to="/ja/kokusai-kekkon-guide/" replace />} />
        <Route path="/haigusha-visa-shorui" element={<Navigate to="/ja/haigusha-visa/" replace />} />
        <Route path="/haigusha-visa-shorui/" element={<Navigate to="/ja/haigusha-visa/" replace />} />
        <Route path="/kekkon-shomeisho" element={<Navigate to="/ja/psa-kekkon-shomeisho/" replace />} />
        <Route path="/kekkon-shomeisho/" element={<Navigate to="/ja/psa-kekkon-shomeisho/" replace />} />
        <Route path="/gaimen-kirikae-guide" element={<Navigate to="/ja/gaimen-kirikae-guide/" replace />} />
        <Route path="/gaimen-kirikae-guide/" element={<Navigate to="/ja/gaimen-kirikae-guide/" replace />} />
        <Route path="/kika-shinsei-guide" element={<Navigate to="/ja/kika-shinsei-guide/" replace />} />
        <Route path="/kika-shinsei-guide/" element={<Navigate to="/ja/kika-shinsei-guide/" replace />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
      {/* <Suspense fallback={null}>
        <FloatingChatWidget />
      </Suspense> */}
      </ErrorBoundary>
    </>
  );
}
