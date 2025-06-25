// src/components/Nichos.js

import React from 'react';
import { Clock, DollarSign, Ruler } from 'lucide-react';
import { nichosData } from '../data';

export default function Nichos() {
  return (
    <section id="nichos" className="py-20 relative overflow-hidden">
      
      {/* Camada da imagem de fundo da seção (se desejar) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/furduncio.avif')` }}
      ></div>
      <div className="absolute inset-0 bg-brown-50 opacity-95"></div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-brown-800">{nichosData.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {nichosData.items.map((nicho, index) => (
            // O card foi reestruturado para ter a imagem no topo
            <div key={index} className="bg-gradient-to-br from-white to-brown-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-brown-200 overflow-hidden flex flex-col">
              
              {/* ESTA É A PARTE QUE ESTAVA FALTANDO NO SEU ARQUIVO */}
              <img 
                src={nicho.imgSrc} 
                alt={`Imagem do Nicho ${nicho.numero}`} 
                className="w-full h-100 object-cover"
              />

              {/* Div para o conteúdo de texto com espaçamento interno */}
              <div className="p-6 flex flex-col flex-grow">
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
                </div>

                <div className="border-t border-brown-200 pt-3 mt-auto mt-6">
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