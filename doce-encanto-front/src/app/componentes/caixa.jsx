import React from 'react'

export default function Caixa() {
  return (
    <section className="relative w-[1475px] h-[400px] flex   items-center justify-center overflow-hidden border border-gray-100  group-hover:opacity-100 transition duration-300">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(226,115,141,1) 20%, rgba(249,201,215,1) 50%,rgba(249,201,215,1) 100%),  url('https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=1200&h=600&fit=crop')",
            }}
          />
          <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
              Bem-vindos ao Doce Encanto
            </h1>
            <p className="text-xl mb-6 drop-shadow-md leading-relaxed">
              Deliciosos doces artesanais feitos com amor e ingredientes
              especiais
            </p>
            <button className="bg-white text-pink-600 hover:bg-pink-50 shadow-xl text-lg px-8 py-3 rounded-3xl">
              Ver Produtos
            </button>
          </div>
        </section>
  )
}
