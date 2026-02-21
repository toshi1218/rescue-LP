import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CenomarGuidePage from './pages/CenomarGuidePage';
import PsaPage from './pages/PsaPage';
import NbiPage from './pages/NbiPage';
import KokusaiKekkonGuidePage from './pages/KokusaiKekkonGuidePage';
import HaigushaVisaPage from './pages/HaigushaVisaPage';
import ApostillePage from './pages/ApostillePage';
import GaimenKirikaeGuidePage from './pages/GaimenKirikaeGuidePage';
import KekkonShomeishoPage from './pages/KekkonShomeishoPage';

export default function App() {
  return (
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
    </Routes>
  );
}
