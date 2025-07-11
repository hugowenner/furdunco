// src/components/Hero.js

import React from 'react';
import { MapPin, Users } from 'lucide-react';
import { heroData } from '../data';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-20 min-h-screen flex items-center justify-center overflow-hidden">

      {/* Imagem de Fundo SEM margens laterais */}
      <div
        className="absolute inset-0 bg-cover bg-center shadow-xl"
        style={{
          backgroundImage: `url('/assets/mercadonovo03.png')`,}}
      ></div>

      {/* Overlay de Cor SEM margens laterais */}
      <div className="absolute inset-0 bg-brown-800 opacity-60"></div> {/* Changed: removed left/right margin classes and rounded-2xl */}

      {/* Conteúdo da Seção Hero (não precisa de alteração) */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto bg-brown-900/70 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight font-slab">
            {heroData.title}
          </h1>
          <h2 className="text-xl md:text-3xl text-brown-100 mb-8 font-light font-lora">
            {heroData.subtitle}
          </h2>
          <div className="flex justify-center space-x-4 text-sm text-brown-200 font-lora">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {heroData.location}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {heroData.type}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}