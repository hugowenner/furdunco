// src/index.js (ou src/main.jsx)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // <-- CORRIGIDO AQUI
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// As linhas abaixo sobre reportWebVitals foram REMOVIDAS para corrigir o segundo erro.