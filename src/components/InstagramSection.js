// src/components/InstagramSection.js

import React from 'react';
import { Instagram } from 'lucide-react';

const instagramPosts = [
  { img: '/assets/post1.jpg', url: 'https://www.instagram.com/p/C6grQ2LxiqN/' },
  { img: '/assets/post2.jpg', url: 'https://www.instagram.com/p/Cz89tp-qvGC/?igsh=dXVyZTFpc29pcHRo' },
  { img: '/assets/post3.jpg', url: 'https://www.instagram.com/p/C8sdV12x47j/?igsh=MWRwd3BwZzlyN2U1eg==' },
  ];

export default function InstagramSection() {
  return (
    // ID ADICIONADO AQUI
    <section id="instagram" className="py-20 bg-brown-100/80">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-brown-800">Siga nosso Furdunço</h2>
        <p className="mb-12 text-brown-600 max-w-2xl mx-auto">
          Acompanhe nossas novidades, os bastidores da loja e os produtos incríveis dos nossos parceiros!
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {instagramPosts.map((post, index) => (
            <a key={index} href={post.url} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-lg shadow-lg">
              <img 
                src={post.img} 
                alt={`Post do Instagram ${index + 1}`} 
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          ))}
        </div>

        <a 
          href="https://www.instagram.com/furdunco.colaborativa?igsh=emxlOG1uamtqaHI5"
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-brown-500 to-brown-600 text-white font-bold py-4 px-12 rounded-full text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center mx-auto"
        >
          <Instagram className="w-5 h-5 mr-2" />
          Ver no Instagram
        </a>
      </div>
    </section>
  );
}