// src/components/Footer.js

import React from 'react';
import { MapPin } from 'lucide-react';
import { footerData } from '../data';

export default function Footer() {
  return (
    <footer className="bg-brown-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-brown-400 to-brown-500 bg-clip-text text-transparent mb-4">
            {footerData.brandName}
          </div>
          <div className="flex items-center justify-center text-brown-300 mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{footerData.address}</span>
          </div>
        </div>
        <div className="border-t border-brown-700 pt-6">
          <p className="text-brown-400 text-sm">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}