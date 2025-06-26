// src/pages/InscricaoPage.js

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InscricaoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    faixa_etaria: '',
    telefone: '',
    nome_marca: '',
    instagram_marca: '',
    descricao_marca: '',
    produz_em_bh: '',
    preco_medio: '',
    preco_medio_outro: '',
    frequencia_entrega: '',
    frequencia_entrega_outro: '',
    caixinhas_interesse: [],
    caixinhas_interesse_outro: '',
    segmento_marca: '',
    segmento_marca_outro: '',
    porque_vender: '',
  });
  const [status, setStatus] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [errosCampos, setErrosCampos] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData(prev => {
        const newCaixinhas = checked
          ? [...prev.caixinhas_interesse, value]
          : prev.caixinhas_interesse.filter(item => item !== value);
        return { ...prev, [name]: newCaixinhas };
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    setErrosCampos(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('enviando');
    setMensagem('');
    setErrosCampos({});

    const dataToSend = {
      ...formData,
      caixinhas_interesse: formData.caixinhas_interesse.includes('Outro') ? `${formData.caixinhas_interesse.filter(c => c !== 'Outro').join(', ')}${formData.caixinhas_interesse.length > 1 ? ', ' : ''}${formData.caixinhas_interesse_outro}` : formData.caixinhas_interesse.join(', '),
      preco_medio: formData.preco_medio === 'Outro:' ? formData.preco_medio_outro : formData.preco_medio,
      frequencia_entrega: formData.frequencia_entrega === 'Outro:' ? formData.frequencia_entrega_outro : formData.frequencia_entrega,
      segmento_marca: formData.segmento_marca === 'Outro:' ? formData.segmento_marca_outro : formData.segmento_marca,
    };

    delete dataToSend.preco_medio_outro;
    delete dataToSend.frequencia_entrega_outro;
    delete dataToSend.segmento_marca_outro;
    delete dataToSend.caixinhas_interesse_outro;


    try {
      const response = await fetch('http://localhost/furdunco-backend/processa-inscricao.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });
      const result = await response.json();

      if (result.status === 'sucesso') {
        setStatus('sucesso');
        setMensagem(result.mensagem);
        setFormData({
          nome: '', email: '', faixa_etaria: '', telefone: '', nome_marca: '', instagram_marca: '',
          descricao_marca: '', produz_em_bh: '', preco_medio: '', preco_medio_outro: '',
          frequencia_entrega: '', frequencia_entrega_outro: '', caixinhas_interesse: [], caixinhas_interesse_outro: '',
          segmento_marca: '', segmento_marca_outro: '', porque_vender: '',
        });
      } else {
        setStatus('erro');
        setMensagem(result.mensagem || 'Ocorreu um erro.');
        if (result.erros_campos) {
          setErrosCampos(result.erros_campos);
        }
      }
    } catch (error) {
      setStatus('erro');
      setMensagem('Falha na comunicação com o servidor.');
      setErrosCampos({});
    }
  };

  return (
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
        <section id="inscricao-form" className="py-12 md:py-20 bg-gray-50"> {/* Fundo mais claro para contraste */}
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-4xl font-bold mb-4 text-brown-800 font-slab">Ficha de Inscrição - Furdunço</h2>

                  {/* Bloco de texto 1 com sombra */}
                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <p className="text-lg text-brown-600 mb-4 font-lora">
                      No Furdunço Loja Colaborativa, oferecemos um espaço que permite que pequenos produtores locais aluguem nichos para exporem, venderem e promoverem suas criações, sem que, para isso, eles precisem investir muitos recursos financeiros.
                    </p>
                    <p className="text-lg text-brown-600 font-lora">
                      Localizada no segundo piso do Mercado Novo, o Furdunço, surgiu da vontade de aproximar o pequeno produtor local do mais novo polo cultural, turístico e gastronômico de Belo Horizonte.
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-brown-800 font-slab">Como vai funcionar?</h3>

                  {/* Bloco de texto 2 com sombra */}
                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <p className="text-lg text-brown-600 font-lora">
                      Você escolhe a caixa com tamanho e formato que melhor te atende e paga um aluguel (a cada 4 semanas) bem camarada para expor e vender seus produtos no nosso espaço. Para arcar com despesas de taxas de cartão de crédito e débito, impostos, limpeza, energia, embalagens e funcionários, uma taxa de 28% sobre as vendas será cobrada no final de cada período.
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-brown-800 font-slab">O que oferecemos?</h3>

                  {/* Bloco de texto 3 com sombra */}
                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <ul className="text-lg text-brown-600 list-disc list-inside font-lora text-left inline-block">
                      <li>Acompanhamento em tempo real das vendas e controle de estoque via app.</li>
                      <li>Oportunidade de expor e vender no maior polo cultural de BH com circulação cotidiana de milhares de pessoas.</li>
                    </ul>
                  </div>

                  <p className="text-xl text-brown-800 mb-4 font-slab">
                    Preencha as informações abaixo para entrar na fila de seleção das marcas que vão ter um lugar especial com a gente.
                  </p>
                  
                  {/* Bloco de texto 4 (Fila de Espera) com sombra */}
                  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <p className="text-md text-red-600 font-lora font-bold">
                      FILA DE ESPERA - Você será notificado via Whatsapp assim que sua marca for chamada, o que pode demorar semanas ou meses, de acordo com o segmento e a rotatividade da loja.
                    </p>
                  </div>

                  {/* Mensagem geral de sucesso/erro */}
                  {mensagem && (
                      <div className={`p-3 mb-4 rounded-md text-center font-bold ${status === 'sucesso' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {mensagem}
                      </div>
                  )}
                </div>
                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-brown-200">

                  {/* E-mail */}
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail *</label>
                    <input type="email" name="email" id="email" placeholder="Seu e-mail" value={formData.email} onChange={handleChange} required className={`w-full p-3 rounded-md border ${errosCampos.email ? 'border-red-500 focus:ring-red-500' : 'border-brown-200 focus:ring-brown-500'} focus:outline-none focus:ring-2 font-lora`} />
                    {errosCampos.email && <p className="text-red-500 text-sm mt-1 font-lora">{errosCampos.email}</p>}
                  </div>

                  {/* Nome */}
                  <div className="mb-4">
                    <label htmlFor="nome" className="block text-gray-700 text-sm font-bold mb-2">Seu nome *</label>
                    <input type="text" name="nome" id="nome" placeholder="Sua resposta" value={formData.nome} onChange={handleChange} required className={`w-full p-3 rounded-md border ${errosCampos.nome ? 'border-red-500 focus:ring-red-500' : 'border-brown-200 focus:ring-brown-500'} focus:outline-none focus:ring-2 font-lora`} />
                    {errosCampos.nome && <p className="text-red-500 text-sm mt-1 font-lora">{errosCampos.nome}</p>}
                  </div>

                  {/* Faixa Etária */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Faixa Etária *</label>
                    {['18 a 24', '25 a 34', '35 a 44', '45 a 54', '55+'].map(age => (
                      <div key={age} className="mb-2">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="faixa_etaria"
                            value={age}
                            checked={formData.faixa_etaria === age}
                            onChange={handleChange}
                            required
                            className="form-radio text-brown-600"
                          />
                          <span className="ml-2 text-gray-700 font-lora">{age}</span>
                        </label>
                      </div>
                    ))}
                    {errosCampos.faixa_etaria && <p className="text-red-500 text-sm mt-1 font-lora">{errosCampos.faixa_etaria}</p>}
                  </div>

                  {/* Telefone de contato */}
                  <div className="mb-4">
                    <label htmlFor="telefone" className="block text-gray-700 text-sm font-bold mb-2">Telefone de contato (atenção pois a comunicação será feita pelo whatsapp) *</label>
                    <input type="tel" name="telefone" id="telefone" placeholder="Sua resposta" value={formData.telefone} onChange={handleChange} required className={`w-full p-3 rounded-md border ${errosCampos.telefone ? 'border-red-500 focus:ring-red-500' : 'border-brown-200 focus:ring-brown-500'} focus:outline-none focus:ring-2 font-lora`} />
                    {errosCampos.telefone && <p className="text-red-500 text-sm mt-1 font-lora">{errosCampos.telefone}</p>}
                  </div>

                  {/* Nome da sua Marca */}
                  <div className="mb-4">
                    <label htmlFor="nome_marca" className="block text-gray-700 text-sm font-bold mb-2">Nome da sua Marca *</label>
                    <input type="text" name="nome_marca" id="nome_marca" placeholder="Sua resposta" value={formData.nome_marca} onChange={handleChange} required className={`w-full p-3 rounded-md border ${errosCampos.nome_marca ? 'border-red-500 focus:ring-red-500' : 'border-brown-200 focus:ring-brown-500'} focus:outline-none focus:ring-2 font-lora`} />
                    {errosCampos.nome_marca && <p className="text-red-500 text-sm mt-1 font-lora">{errosCampos.nome_marca}</p>}
                  </div>

                  {/* Instagram da sua marca */}
                  <div className="mb-4">
                    <label htmlFor="instagram_marca" className="block text-gray-700 text-sm font-bold mb-2">Instagram da sua marca (digite o link) *</label>
                    <input type="url" name="instagram_marca" id="instagram_marca" placeholder="Sua resposta" value={formData.instagram_marca} onChange={handleChange} required className={`w-full p-3 rounded-md border ${errosCampos.instagram_marca ? 'border-red-500 focus:ring-red-500' : 'border-brown-200 focus:ring-brown-500'} focus:outline-none focus:ring-2 font-lora`} />
                    {errosCampos.instagram_marca && <p className="text-red-500 text-sm mt-1 font-lora">{errosCampos.instagram_marca}</p>}
                  </div>

                  {/* Descrição da marca e principais produtos */}
                  <div className="mb-4">
                    <label htmlFor="descricao_marca" className="block text-gray-700 text-sm font-bold mb-2">Descrição da marca e principais produtos *</label>
                    <textarea name="descricao_marca" id="descricao_marca" placeholder="Sua resposta" value={formData.descricao_marca} onChange={handleChange} required rows="4" className={`w-full p-3 rounded-md border ${errosCampos.descricao_marca ? 'border-red-500 focus:ring-red-500' : 'border-brown-200 focus:ring-brown-500'} focus:outline-none focus:ring-2 font-lora`} />
                    {errosCampos.descricao_marca && <p className="text-red-500 text-sm mt-1 font-lora">{errosCampos.descricao_marca}</p>}
                  </div>

                  {/* Você produz em BH? */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Você produz em BH? *</label>
                    {['Sim', 'Não'].map(option => (
                      <div key={option} className="mb-2">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="produz_em_bh"
                            value={option}
                            checked={formData.produz_em_bh === option}
                            onChange={handleChange}
                            required
                            className="form-radio text-brown-600"
                          />
                          <span className="ml-2 text-gray-700 font-lora">{option}</span>
                        </label>
                      </div>
                    ))}
                    {errosCampos.produz_em_bh && <p className="text-red-500 text-sm mt-1 font-lora">{errosCampos.produz_em_bh}</p>}
                  </div>

                  {/* Qual o preço médio dos seus produtos? */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Qual o preço médio dos seus produtos? se tiver particularidades escrever na aba "outros". *</label>
                    {['menos de R$30,00', 'de R$30,00 a R$60', 'de R$60,00 R$100,00', 'de R$100,00 a R$150,00', 'mais de R$150,00', 'Outro:'].map(price => (
                      <div key={price} className="mb-2">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="preco_medio"
                            value={price}
                            checked={formData.preco_medio === price}
                            onChange={handleChange}
                            required
                            className="form-radio text-brown-600"
                          />
                          <span className="ml-2 text-gray-700 font-lora">{price}</span>
                        </label>
                        {price === 'Outro:' && formData.preco_medio === 'Outro:' && (
                          <input
                            type="text"
                            name="preco_medio_outro"
                            placeholder="Especificar preço"
                            value={formData.preco_medio_outro}
                            onChange={handleChange}
                            className="ml-6 mt-1 p-2 rounded-md border border-brown-200 focus:ring-brown-500 focus:outline-none focus:ring-2 font-lora w-full sm:w-1/2"
                          />
                        )}
                      </div>
                    ))}
                    {errosCampos.preco_medio && <p className="text-red-500 text-sm mt-1 font-lora">{errosCampos.preco_medio}</p>}
                    {errosCampos.preco_medio_outro && <p className="text-red-500 text-sm mt-1 font-lora">{errosCampos.preco_medio_outro}</p>}
                  </div>

                  {/* Se não é de BH, consegue trazer seus produtos para a cidade com qual frequência? */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Se não é de BH, consegue trazer seus produtos para a cidade com qual frequência? *</label>
                    {['Sou de BH', 'Semanal', 'Mensal', 'Outro:'].map(freq => (
                      <div key={freq} className="mb-2">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="frequencia_entrega"
                            value={freq}
                            checked={formData.frequencia_entrega === freq}
                            onChange={handleChange}
                            required
                            className="form-radio text-brown-600"
                          />
                          <span className="ml-2 text-gray-700 font-lora">{freq}</span>
                        </label>
                        {freq === 'Outro:' && formData.frequencia_entrega === 'Outro:' && (
                          <input
                            type="text"
                            name="frequencia_entrega_outro"
                            placeholder="Especificar frequência"
                            value={formData.frequencia_entrega_outro}
                            onChange={handleChange}
                            className="ml-6 mt-1 p-2 rounded-md border border-brown-200 focus:ring-brown-500 focus:outline-none focus:ring-2 font-lora w-full sm:w-1/2"
                          />
                        )}
                      </div>
                    ))}
                    {errosCampos.frequencia_entrega && <p className="text-red-500 text-sm mt-1 font-lora">{errosCampos.frequencia_entrega}</p>}
                    {errosCampos.frequencia_entrega_outro && <p className="text-red-500 text-sm mt-1 font-lora">{errosCampos.frequencia_entrega_outro}</p>}
                  </div>

                  {/* Quais caixinhas te interessam? */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Quais caixinhas te interessam? (pode marcar mais de uma e sua chance de conseguir uma vaga é maior - digite a ordem de preferência na opção "outros") *</label>
                    {['1', '2', '3', '4', '5', 'Outro'].map(box => (
                      <div key={box} className="mb-2">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            name="caixinhas_interesse"
                            value={box}
                            checked={formData.caixinhas_interesse.includes(box)}
                            onChange={handleChange}
                            className="form-checkbox text-brown-600"
                          />
                          <span className="ml-2 text-gray-700 font-lora">{box}</span>
                        </label>
                        {box === 'Outro' && formData.caixinhas_interesse.includes('Outro') && (
                          <input
                            type="text"
                            name="caixinhas_interesse_outro"
                            placeholder="Ex: 6, 7, 8 (nesta ordem)"
                            value={formData.caixinhas_interesse_outro}
                            onChange={handleChange}
                            className="ml-6 mt-1 p-2 rounded-md border border-brown-200 focus:ring-brown-500 focus:outline-none focus:ring-2 font-lora w-full sm:w-1/2"
                          />
                        )}
                      </div>
                    ))}
                    {errosCampos.caixinhas_interesse && <p className="text-red-500 text-sm mt-1 font-lora">{errosCampos.caixinhas_interesse}</p>}
                    {errosCampos.caixinhas_interesse_outro && <p className="text-red-500 text-sm mt-1 font-lora">{errosCampos.caixinhas_interesse_outro}</p>}
                  </div>

                  {/* Qual é o segmento da sua marca? */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Qual é o segmento da sua marca? *</label>
                    {['Roupas', 'Acessórios - Joias, semi joias, bijuterias', 'Sapatos', 'Bolsas', 'Cama e mesa - Bordados, mantas, mesa posta', 'Cosméticos', 'Decoração', 'Pintura', 'Utilitários', 'Outro:'].map(segment => (
                      <div key={segment} className="mb-2">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="segmento_marca"
                            value={segment}
                            checked={formData.segmento_marca === segment}
                            onChange={handleChange}
                            required
                            className="form-radio text-brown-600"
                          />
                          <span className="ml-2 text-gray-700 font-lora">{segment}</span>
                        </label>
                        {segment === 'Outro:' && formData.segmento_marca === 'Outro:' && (
                          <input
                            type="text"
                            name="segmento_marca_outro"
                            placeholder="Especificar segmento"
                            value={formData.segmento_marca_outro}
                            onChange={handleChange}
                            className="ml-6 mt-1 p-2 rounded-md border border-brown-200 focus:ring-brown-500 focus:outline-none focus:ring-2 font-lora w-full sm:w-1/2"
                          />
                        )}
                      </div>
                    ))}
                    {errosCampos.segmento_marca && <p className="text-red-500 text-sm mt-1 font-lora">{errosCampos.segmento_marca}</p>}
                    {errosCampos.segmento_marca_outro && <p className="text-red-500 text-sm mt-1 font-lora">{errosCampos.segmento_marca_outro}</p>}
                  </div>

                  {/* Diga em poucas palavras porquê você quer vender com a gente no Furdunço? */}
                  <div className="mb-8">
                    <label htmlFor="porque_vender" className="block text-gray-700 text-sm font-bold mb-2">Diga em poucas palavras porquê você quer vender com a gente no Furdunço? *</label>
                    <textarea name="porque_vender" id="porque_vender" placeholder="Sua resposta" value={formData.porque_vender} onChange={handleChange} required rows="4" className={`w-full p-3 rounded-md border ${errosCampos.porque_vender ? 'border-red-500 focus:ring-red-500' : 'border-brown-200 focus:ring-brown-500'} focus:outline-none focus:ring-2 font-lora`} />
                    {errosCampos.porque_vender && <p className="text-red-500 text-sm mt-1 font-lora">{errosCampos.porque_vender}</p>}
                  </div>

                  <div className="text-center mt-8">
                    <button type="submit" disabled={status === 'enviando'} className="bg-brown-600 text-white font-bold py-3 px-10 rounded-md text-base hover:bg-brown-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center">
                      <Send className="w-5 h-5 mr-3" />
                      {status === 'enviando' ? 'Enviando...' : 'Enviar Inscrição'}

                      {/* Mensagem geral de sucesso/erro - MOVIDA PARA AQUI */}
                {mensagem && (
                    <div className={`max-w-3xl mx-auto p-3 mt-8 rounded-md text-center font-bold ${status === 'sucesso' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {mensagem}
                    </div>
                )}
                    </button>
                  </div>
                </form>
            </div>
        </section>
      </main>
    </div>
  );
}