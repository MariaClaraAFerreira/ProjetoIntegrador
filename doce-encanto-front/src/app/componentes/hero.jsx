import Image from "next/image";

import React from "react";

 
export default function Hero() {
  return (
     <header className={`fixed top-0 w-full z-50 transition-all duration-500`}
      
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo animado com partículas */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-pink-400 to-rose-500 rounded-2xl p-4 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="relative">
                  
                 
                </div>

                 <div className="flex justify-center items-center space-x-4">
          <Image
            src="/logo_amor1.png"
            alt="Logo"
            width={70}
            height={70}
            className="p-1 rounded-full"
          />
        
                <span className="text-white font-bold text-2xl tracking-wide drop-shadow-lg">
                  Doce Encanto
                </span>
        </div>
              </div>
            </div>
          </div>

          {/* Menu flutuante */}
          <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-md rounded-full px-2 py-2 shadow-lg">
          
            <a href="#inicio" className="px-6 py-2 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-200 font-medium">
              Início
            </a>
            <a href="#sobre" className="px-6 py-2 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-200 font-medium">
              Sobre
            </a>
            <a href="#produtos" className="px-6 py-2 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-200 font-medium">
              Produtos
            </a>
            <a href="#contato" className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium shadow-lg">
              Monte seu Bolo
            </a>
            <a href="#contato" className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium shadow-lg">
              Contato
            </a>
          </nav>
        </div>
      </div>




      <section className="relative h-80 flex items-center justify-center overflow-hidden  border border-gray-100  rounded-3xl   group-hover:opacity-100 transition duration-300 ">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(135deg,  rgba(226,115,141,1) 20%, rgba(249,201,215,1) 50%,rgba(249,201,215,1) 100%),  url('https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=1200&h=600&fit=crop')"
          }}
        />
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
            Bem-vindos ao Doce Encanto
          </h1>
          <p className="text-xl mb-6 drop-shadow-md leading-relaxed">
            Deliciosos doces artesanais feitos com amor e ingredientes especiais
          </p>
          
          <button 
            size="lg"
            className="bg-white text-pink-600 hover:bg-pink-50 shadow-xl text-lg px-8 py-3 rounded-3xl"
           
          >
            Ver Produtos
          </button>
        </div>
      </section>
    </header> 

    
  );
}