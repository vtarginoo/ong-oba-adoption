"use client";


import Image from "next/image";
import React from "react";

export default function DonationLanding() {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('09.454.046/0001-55');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      {/* Header com logo */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <img 
            src="/logo.jpeg" 
            alt="Logo OBA" 
            className="h-12 w-auto"
          />
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Imagem da campanha */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <img 
            src="/landing.jpeg" 
            alt="Campanha de Natal OBA" 
            className="w-full h-auto"
          />
        </div>

        {/* Seção de doação */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Faça sua Doação
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ajude os pets que precisam de você neste Natal! Sua contribuição faz toda a diferença na vida de animais que esperam por um lar cheio de amor.
          </p>

          {/* QR Code */}
          <div className="bg-gray-50 rounded-xl p-6 inline-block mb-6">
            <img 
              src="/qr.jpeg" 
              alt="QR Code para doação" 
              className="w-64 h-64 mx-auto"
            />
          </div>

          {/* Informações PIX */}
          <div className="bg-orange-50 rounded-xl p-6 mb-6">
            <p className="text-sm text-gray-600 mb-2">Chave PIX - CNPJ</p>
            <p className="text-2xl font-bold text-orange-600 break-all mb-4">
              09.454.046/0001-55
            </p>
            <button
              onClick={copyToClipboard}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              {copied ? '✓ Copiado!' : 'Copiar Chave PIX'}
            </button>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Escaneie o QR Code ou copie a chave PIX para fazer sua doação
          </p>

          {/* Botão de compartilhar */}
          {/* <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Campanha de Natal OBA',
                  text: 'Ajude os pets neste Natal! Doe via PIX: 09.454.046/0001-55',
                  url: window.location.href
                });
              }
            }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Compartilhar Campanha
          </button> */}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-600">
          <p className="text-sm">
            Campanha de Natal 2024 - OBA!
          </p>
          <p className="text-xs mt-2">
            Obrigado por fazer a diferença! 🐾❤️
          </p>
        </div>
      </main>
    </div>
  );
}