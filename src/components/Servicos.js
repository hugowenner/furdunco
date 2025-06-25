// src/components/Servicos.js

import React from 'react';
import { servicosData } from '../data';

export default function Servicos() {
  return (
    <section id="servicos" className="py-20 bg-brown-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-brown-800">{servicosData.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicosData.items.map((servico, index) => (
            <div key={index} className="bg-brown-100/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-brown-200">
              <div className="mb-4">{React.cloneElement(servico.icon, { className: 'w-8 h-8 text-brown-500' })}</div>
              <h3 className="text-xl font-bold mb-4 text-brown-800">{servico.title}</h3>
              <p className="text-brown-600 leading-relaxed">{servico.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}