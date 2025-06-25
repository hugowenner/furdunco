// src/components/Servicos.js

import React from 'react';
import { servicosData } from '../data';

export default function Servicos() {
  return (
    // Mantivemos o fundo marrom claro e semitransparente
    <section id="servicos" className="py-20 bg-brown-100/80">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-brown-800 font-slab">
            {servicosData.title}
          </h2>
          {/* 1. TEXTO INTRODUTÓRIO ADICIONADO */}
          <p className="text-lg text-brown-600 max-w-2xl mx-auto mb-16 font-lora">
            Oferecemos todo o suporte para que você, pequeno produtor, possa focar no que faz de melhor: criar. Conheça os benefícios de fazer parte do nosso coletivo.
          </p>
        </div>
        
        {/* 2. CARDS REDESENHADOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicosData.items.map((servico, index) => (
            <div 
              key={index} 
              // Card com fundo branco, centralizado e com novos efeitos
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Ícone dentro de um círculo para dar destaque */}
              <div className="w-20 h-20 rounded-full bg-brown-100 flex items-center justify-center mb-6">
                {React.cloneElement(servico.icon, { className: 'w-10 h-10 text-brown-600' })}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-brown-800 font-slab">{servico.title}</h3>
              <p className="text-brown-700 leading-relaxed font-lora flex-grow">{servico.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}