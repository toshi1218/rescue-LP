import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CenomarGuidePage from './pages/CenomarGuidePage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cenomar-guide" element={<CenomarGuidePage />} />
    </Routes>
  );
}
