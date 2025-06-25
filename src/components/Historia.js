// src/components/Historia.js

import React from 'react';
import { historiaData } from '../data';

export default function Historia() {
  return (
    <section id="historia" className="py-20 relative overflow-hidden">
      
      {/* Imagem de Fundo com margens laterais */}
      <div
        className="absolute inset-y-0 left-4 right-4 md:left-8 md:right-8 bg-cover bg-center rounded-2xl shadow-xl"
        style={{ backgroundImage: `url('/assets/furduncio.avif')` }}
      ></div>

      {/* Overlay de Cor, também com margens laterais para alinhar com a imagem */}
      <div className="absolute inset-y-0 left-4 right-4 md:left-8 md:right-8 bg-brown-800 opacity-50 rounded-2xl"></div>

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

