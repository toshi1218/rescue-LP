import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CenomarGuidePage from './pages/CenomarGuidePage';
import PsaPage from './pages/PsaPage';
import NbiPage from './pages/NbiPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cenomar-guide" element={<CenomarGuidePage />} />
      <Route path="/psa-shussei-shomeisho" element={<PsaPage />} />
      <Route path="/nbi-clearance-guide" element={<NbiPage />} />
    </Routes>
  );
}
