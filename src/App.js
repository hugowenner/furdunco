// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InscricaoPage from './pages/InscricaoPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/inscricao" element={<InscricaoPage />} />
    </Routes>
  );
}