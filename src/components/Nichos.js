// src/components/Nichos.js

import React from 'react';
import { Clock, DollarSign, Ruler } from 'lucide-react';
import { nichosData } from '../data';

export default function Nichos() {
  return (
    // 1. Adicionar posicionamento relativo para conter o fundo
    <section id="nichos" className="py-20 relative overflow-hidden">
      
      {/* 2. Camada da imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/furduncio.avif')` }}
      ></div>

      {/* 3. Camada de overlay para criar a alta transparência */}
      {/* Usamos uma opacidade alta no overlay (95%) para que a imagem de fundo fique bem sutil */}
      <div className="absolute inset-0 bg-brown-50 opacity-95"></div>

      {/* 4. Conteúdo principal da seção, com posicionamento relativo para ficar na frente */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-brown-800">{nichosData.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {nichosData.items.map((nicho, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-brown-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-brown-200">
              <div className="text-center mb-4">
                <div className="inline-block bg-gradient-to-r from-brown-500 to-brown-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                  Nicho {nicho.numero}
                </div>
                <div className="text-3xl font-bold text-brown-700 mb-2">{nicho.valor}</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-brown-700">
                  <Ruler className="w-4 h-4 mr-2 text-brown-500" />
                  <span>L: {nicho.largura}</span>
                </div>
                <div className="flex items-center text-sm text-brown-700">
                  <Ruler className="w-4 h-4 mr-2 text-brown-500" />
                  <span>A: {nicho.altura}</span>
                </div>
                <div className="flex items-center text-sm text-brown-700">
                  <Ruler className="w-4 h-4 mr-2 text-brown-500" />
                  <span>P: {nicho.profundidade}</span>
                </div>
                <div className="border-t border-brown-200 pt-3 mt-4">
                  <div className="flex items-center text-xs text-brown-600 mb-1">
                    <Clock className="w-3 h-3 mr-1 text-brown-500" />
                    <span>{nichosData.rentalInfo.period}</span>
                  </div>
                  <div className="flex items-center text-xs text-brown-600">
                    <DollarSign className="w-3 h-3 mr-1 text-brown-500" />
                    <span>{nichosData.rentalInfo.salesFee}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}