// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { navigationLinks } from '../data';

export default function Header({ activeSection, scrollToSection }) {

  // 1. ADICIONE ESTA FUNÇÃO que rola a tela para o topo
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-brown-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          
          {/* 2. ADICIONE o onClick no Link da logo */}
          <Link to="/" className="flex items-center" onClick={handleBackToTop}>
            <img 
              src="/assets/logo.png" 
              alt="Logo Furdunço" 
              className="h-8 mr-2" 
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-brown-600 to-brown-800 bg-clip-text text-transparent">
              Furdunço
            </div>
          </Link>

          {/* Links de Navegação para Desktop */}
          <div className="hidden md:flex space-x-8">
            {navigationLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 hover:text-brown-600 ${
                  activeSection === item.id 
                    ? 'text-brown-600 border-b-2 border-brown-600' 
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Ícone de Menu para Mobile */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-brown-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}