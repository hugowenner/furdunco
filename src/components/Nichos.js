// src/components/Nichos.js

import React from 'react';
import { Clock, DollarSign, Ruler } from 'lucide-react';
import { nichosData } from '../data';

export default function Nichos() {
  return (
    <section id="nichos" className="py-20 relative overflow-hidden">
      
      {/* Fundo da seção (mantido como está) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/furduncio.avif')` }}
      ></div>
      <div className="absolute inset-0 bg-brown-800 opacity-60"></div>

      {/* Conteúdo principal da seção */}
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Título principal com fundo branco, sombra e centralizado */}
        <div className="max-w-fit mx-auto bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-2xl mb-16">
          <h2 className="text-4xl font-bold text-center text-brown-800 font-slab">
            {nichosData.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {nichosData.items.map((nicho, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col">
              
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src={nicho.imgSrc} 
                  alt={`Imagem do Nicho ${nicho.numero}`} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="text-center mb-4">
                  <div className="inline-block bg-gradient-to-r from-brown-500 to-brown-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3 font-slab">
                    Nicho {nicho.numero}
                  </div>
                  <div className="text-3xl font-bold text-brown-800 mb-2 font-slab">{nicho.valor}</div>
                </div>
                
                <div className="space-y-3 font-lora">
                  <div className="flex items-center text-sm text-brown-700">
                    <Ruler className="w-4 h-4 mr-2 text-brown-600" />
                    <span>L: {nicho.largura}</span>
                  </div>
                  <div className="flex items-center text-sm text-brown-700">
                    <Ruler className="w-4 h-4 mr-2 text-brown-600" />
                    <span>A: {nicho.altura}</span>
                  </div>
                  <div className="flex items-center text-sm text-brown-700">
                    <Ruler className="w-4 h-4 mr-2 text-brown-600" />
                    <span>P: {nicho.profundidade}</span>
                  </div>
                </div>

                <div className="border-t border-brown-200 pt-3 mt-auto mt-6 font-lora">
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