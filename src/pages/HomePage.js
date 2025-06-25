// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { navigationLinks } from '../data';

// Importe todos os seus componentes de seção
import Header from '../components/Header';
import Hero from '../components/Hero';
import Historia from '../components/Historia';
import Servicos from '../components/Servicos';
import Nichos from '../components/Nichos';
import Inscricao from '../components/Inscricao';
import InstagramSection from '../components/InstagramSection';
import Footer from '../components/Footer';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    const sections = ['hero', ...navigationLinks.map(link => link.id)];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <Hero />
        {/* O DIV DE ESPAÇAMENTO FOI REMOVIDO DESTA LINHA */}
        <Historia />
        <Servicos />
        <Nichos />
        <Inscricao />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
}