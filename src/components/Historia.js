// src/components/Historia.js

import React from 'react';
import { historiaData } from '../data';

export default function Historia() {
  return (
    <section id="historia" className="py-20 relative overflow-hidden">

      {/* Imagem de Fundo SEM margens laterais */}
      <div
        className="absolute inset-0 bg-cover bg-center shadow-xl" // Changed: removed left/right margin classes and rounded-2xl
        style={{ backgroundImage: `url('/assets/furduncio.avif')` }}
      ></div>

      {/* Overlay de Cor SEM margens laterais */}
      <div className="absolute inset-0 bg-brown-800 opacity-50"></div> {/* Changed: removed left/right margin classes and rounded-2xl */}

      {/* Conteúdo principal com posicionamento relativo */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-brown-900/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-6 text-white font-slab">{historiaData.title}</h2>
            <p className="text-lg text-brown-100 leading-relaxed font-lora">
              {historiaData.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}