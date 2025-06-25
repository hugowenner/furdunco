// src/pages/InscricaoPage.js

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InscricaoPage() {
  const [formData, setFormData] = useState({
    nome: '', telefone: '', cpf: '', endereco: '', tipo_produto: '', nome_loja: ''
  });
  const [status, setStatus] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('enviando');
    setMensagem('');

    try {
      const response = await fetch('/processa-inscricao.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.status === 'sucesso') {
        setStatus('sucesso');
      } else {
        setStatus('erro');
      }
      setMensagem(result.mensagem || 'Ocorreu um erro.');
    } catch (error) {
      setStatus('erro');
      setMensagem('Falha na comunicação com o servidor.');
    }
  };

  if (status === 'sucesso') {
    return (
        // CLASSE 'bg-brown-50' REMOVIDA DAQUI
        <div className="min-h-screen flex flex-col">
            <header className="bg-white shadow-md">
                <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link to="/" className="flex items-center">
                      <img src="/assets/logo.png" alt="Logo Furdunço" className="h-8 mr-2" />
                      <span className="text-2xl font-bold bg-gradient-to-r from-brown-600 to-brown-800 bg-clip-text text-transparent">Furdunço</span>
                    </Link>
                    <Link to="/" className="font-medium text-gray-700 hover:text-brown-600">&larr; Voltar para a Home</Link>
                </nav>
            </header>
            <main className="flex-grow flex items-center justify-center">
                <div className="text-center p-4">
                    <h2 className="text-4xl font-bold mb-4 text-brown-800 font-slab">Obrigado!</h2>
                    <p className="text-xl text-brown-600 font-lora">{mensagem}</p>
                </div>
            </main>
        </div>
    );
  }

  return (
    // CLASSE 'bg-brown-50' REMOVIDA DAQUI
    <div className="min-h-screen">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/assets/logo.png" 
                alt="Logo Furdunço" 
                className="h-8 mr-2" 
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-brown-600 to-brown-800 bg-clip-text text-transparent">
                Furdunço
              </span>
            </Link>
            <Link to="/" className="font-medium text-gray-700 hover:text-brown-600">
              &larr; Voltar para a Home
            </Link>
        </nav>
      </header>
      
      <main>
        <section id="inscricao-form" className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                  <h2 className="text-4xl font-bold mb-4 text-brown-800 font-slab">Formulário de Inscrição</h2>
                  <p className="text-lg text-brown-600 mb-12 font-lora">Todos os campos são obrigatórios.</p>
                </div>
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-brown-200">
                  <div className="mb-4"><input type="text" name="nome" placeholder="Nome completo" value={formData.nome} onChange={handleChange} required className="w-full p-3 rounded-md border border-brown-200 focus:outline-none focus:ring-2 focus:ring-brown-500 font-lora" /></div>
                  <div className="mb-4"><input type="tel" name="telefone" placeholder="Telefone com DDD" value={formData.telefone} onChange={handleChange} required className="w-full p-3 rounded-md border border-brown-200 focus:outline-none focus:ring-2 focus:ring-brown-500 font-lora" /></div>
                  <div className="mb-4"><input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} required className="w-full p-3 rounded-md border border-brown-200 focus:outline-none focus:ring-2 focus:ring-brown-500 font-lora" /></div>
                  <div className="mb-4"><input type="text" name="endereco" placeholder="Endereço completo" value={formData.endereco} onChange={handleChange} required className="w-full p-3 rounded-md border border-brown-200 focus:outline-none focus:ring-2 focus:ring-brown-500 font-lora" /></div>
                  <div className="mb-4"><input type="text" name="tipo_produto" placeholder="Qual seu tipo de produto?" value={formData.tipo_produto} onChange={handleChange} required className="w-full p-3 rounded-md border border-brown-200 focus:outline-none focus:ring-2 focus:ring-brown-500 font-lora" /></div>
                  <div className="mb-8"><input type="text" name="nome_loja" placeholder="Nome da sua loja ou marca" value={formData.nome_loja} onChange={handleChange} required className="w-full p-3 rounded-md border border-brown-200 focus:outline-none focus:ring-2 focus:ring-brown-500 font-lora" /></div>

                  <div className="text-center mt-8">
                    <button type="submit" disabled={status === 'enviando'} className="bg-brown-600 text-white font-bold py-3 px-10 rounded-md text-base hover:bg-brown-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center">
                      <Send className="w-5 h-5 mr-3" />
                      {status === 'enviando' ? 'Enviando...' : 'Enviar Inscrição'}
                    </button>
                  </div>
                  {status === 'erro' && <p className="text-red-500 text-center mt-4 font-lora">{mensagem}</p>}
                </form>
            </div>
        </section>
      </main>
    </div>
  );
}