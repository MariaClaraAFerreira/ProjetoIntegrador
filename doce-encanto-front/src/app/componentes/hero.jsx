import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 transition-all duration-500">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="relative group">
              <Link href="/">
                <div className="relative bg-gradient-to-r from-pink-400 to-rose-500 rounded-2xl p-4 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3">
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
              </Link>
            </div>

            {/* Menu */}
            <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-md rounded-full px-2 py-2 shadow-lg">
              <Link
                href="/"
                className="px-6 py-2 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-200 font-medium"
              >
                Início
              </Link>
              <Link
                href="/"
                className="px-6 py-2 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-200 font-medium"
              >
                Sobre
              </Link>
              <Link
                href="/"
                className="px-6 py-2 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-200 font-medium"
              >
                Produtos
              </Link>
              <Link
                href="/monte-seu-bolo"
                className="px-6 py-2 rounded-full  bg-gradient-to-r from-blue-300 to-blue-200 text-white 
           hover:from-blue-100 hover:to-blue-200 transition-all duration-200 font-medium shadow-lg"
              >
                Monte seu Bolo
              </Link>
              <Link
                href="/"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium shadow-lg"
              >
                Contato
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="pt-32">
        <section className="relative h-80 flex items-center justify-center overflow-hidden border border-gray-100 rounded-3xl group-hover:opacity-100 transition duration-300">
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
      </main>

      {/* FOOTER */}
      <footer className="bg-pink-500 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-xl font-bold">Obrigada por nos visitar!</p>
          <p>
            &copy; {new Date().getFullYear()} Doce Encanto. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
