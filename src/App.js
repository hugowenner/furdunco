// src/App.js

import React, { useState, useEffect } from 'react';
import { navigationLinks } from './data';

import Header from './components/Header';
import Hero from './components/Hero';
import Historia from './components/Historia';
import Servicos from './components/Servicos';
import Nichos from './components/Nichos';
import Inscricao from './components/Inscricao';
import Footer from './components/Footer';

export default function FurduncoLanding() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['hero', ...navigationLinks.map(link => link.id)];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
    }
  };

   return (
    <div className="min-h-screen bg-brown-50">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <Hero />

        {/* LINHA ADICIONADA: Este é o espaçador */}
        <div className="h-00 md:h-10" />

        <Historia />
        <Servicos />
        <Nichos />
        <Inscricao />
      </main>

      <Footer />
    </div>
  );
}