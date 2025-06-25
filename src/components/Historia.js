// src/components/Historia.js

import React from 'react';
import { historiaData } from '../data';

export default function Historia() {
  return (
    <section id="historia" className="py-20 relative overflow-hidden">
      
      {/* Camada da imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/furduncio.avif')` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-brown-200 opacity-90"></div>

      {/* Conteúdo principal com posicionamento relativo */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* A linha duplicada do título foi REMOVIDA DAQUI */}
          
          {/* Painel de texto com o título dentro (versão correta) */}
          <div className="bg-brown-900/70 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-6 text-white">{historiaData.title}</h2>
            
            <p className="text-lg text-brown-100 leading-relaxed">
              {historiaData.content}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}