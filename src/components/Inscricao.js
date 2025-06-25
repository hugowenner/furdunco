// src/components/Inscricao.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Edit } from 'lucide-react';

export default function Inscricao() {
  return (
    // GRADIENTE ATUALIZADO AQUI
    <section id="inscricao" className="py-20 bg-gradient-to-br from-brown-500 via-brown-700 to-brown-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white font-slab">QUER FAZER PARTE?</h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-lora">
          Clique no botão abaixo e preencha nosso formulário para entrar na lista de espera!
        </p>

        <Link 
          to="/inscricao"
          className="bg-white text-brown-800 font-bold py-3 px-8 rounded-md text-base hover:bg-brown-100 transition-all duration-200 transform hover:scale-105 shadow-md flex items-center justify-center mx-auto"
        >
          <Edit className="w-4 h-4 mr-2" />
          FAZER INSCRIÇÃO
        </Link>
      </div>
    </section>
  );
}