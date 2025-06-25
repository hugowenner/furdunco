// src/data.js

import React from 'react';
import { ExternalLink, MapPin, Clock, DollarSign, Ruler, Users, ShoppingBag, BookOpen, Zap } from 'lucide-react';

export const navigationLinks = [
  { id: 'historia', label: 'História' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'nichos', label: 'Alugue um Nicho' },
  { id: 'inscricao', label: 'Inscrição' }
];

export const heroData = {
  title: "Bem-vindo ao nosso Furdunço",
  subtitle: "Loja Colaborativa de pequenos produtores",
  location: "Mercado Novo, BH",
  type: "Espaço Colaborativo",
};

export const historiaData = {
  title: "QUEM SOMOS",
  content: (
    <>
      No epicentro do agito cultural do Mercado Novo, o Furdunço <strong>impulsiona</strong>. Somos o ponto de encontro que aproxima a <strong>alma criativa</strong> de pequenos produtores do público de BH.
      <br /><br />
      Oferecemos nichos acessíveis para transformar sua <strong>paixão em negócio</strong>. Um lugar para expor, vender e crescer, de forma <em>descomplicada</em>. É simples, colaborativo e feito para quem cria.
    </>
  )
};

export const servicosData = {
  title: "Serviços",
  items: [
    {
      title: "Gestão de Vendas Online",
      description: "Sistema online para cadastro de produtos, gestão de estoque e análise de vendas.",
      icon: <Zap className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Vendedores",
      description: "Profissionais engajados e qualificados, atendimento presencial e virtual ao cliente e também ao empreendedor.",
      icon: <Users className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Exposição e Vendas",
      description: "Espaço de destaque no Mercado Novo, parcelamento de vendas e fornecimento de embalagem para os produtos.",
      icon: <ShoppingBag className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Oficinas",
      description: "Única loja colaborativa com disponibilidade de aluguel de espaço exclusivo para workshops.",
      icon: <BookOpen className="w-8 h-8 text-orange-500" />
    }
  ]
};

export const nichosData = {
  title: "Alugue um Nicho",
  items: [
    {
      numero: "01",
      valor: "R$180",
      largura: "60 cm",
      altura: "35 cm",
      profundidade: "50 cm"
    },
    {
      numero: "02",
      valor: "R$280",
      largura: "60 cm",
      altura: "70 cm",
      profundidade: "50 cm"
    },
    {
      numero: "03",
      valor: "R$200",
      largura: "60 cm",
      altura: "90 cm",
      profundidade: "50 cm"
    },
    {
      numero: "04",
      valor: "R$320",
      largura: "60 cm",
      altura: "130 cm",
      profundidade: "50 cm"
    },
    {
      numero: "05",
      valor: "R$380",
      largura: "125 cm",
      altura: "90 cm",
      profundidade: "50 cm"
    }
  ],
  rentalInfo: {
    period: "Período: 28 dias",
    salesFee: "Taxa sobre vendas: 23%"
  }
};

export const inscricaoData = {
    title: "INSCRIÇÃO",
    description: "Se inscreva na lista de espera para participar do nosso Furdunço:",
    buttonText: "PREENCHER FORMULÁRIO"
};

export const footerData = {
  brandName: "Furdunço",
  address: "Av. Olegário Maciel, 742 - Loja 2010 - Centro, Belo Horizonte - MG, 30180-110",
  copyright: "© 2025 Furdunço Loja Colaborativa. Todos os direitos reservados."
};