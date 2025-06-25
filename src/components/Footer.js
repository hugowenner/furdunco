// src/components/Footer.js

import React from 'react';
import { MapPin } from 'lucide-react';
import { footerData } from '../data';

export default function Footer() {
  return (
    <footer id="contato" className="bg-gradient-to-t from-brown-900 to-brown-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          
          {/* Nome "Furdunço" alterado para branco sólido */}
          <div className="text-2xl font-bold text-white mb-4 font-slab">
            {footerData.brandName}
          </div>

          {/* Endereço alterado para branco com 80% de opacidade */}
          <div className="flex items-center justify-center text-white/80 mb-4 font-lora">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{footerData.address}</span>
          </div>
        </div>

        <div className="border-t border-brown-700 pt-6">
          {/* Copyright alterado para branco com 60% de opacidade */}
          <p className="text-white/60 text-sm font-lora">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}