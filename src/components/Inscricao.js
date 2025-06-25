// src/components/Inscricao.js

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { inscricaoData } from '../data';

export default function Inscricao() {
  return (
    <section id="inscricao" className="py-20 bg-gradient-to-r from-brown-500 to-brown-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">{inscricaoData.title}</h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          {inscricaoData.description}
        </p>
        <button className="bg-brown-200 text-brown-700 font-bold py-4 px-12 rounded-full text-lg hover:bg-brown-300 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center mx-auto">
          <ExternalLink className="w-5 h-5 mr-2" />
          {inscricaoData.buttonText}
        </button>
      </div>
    </section>
  );
}