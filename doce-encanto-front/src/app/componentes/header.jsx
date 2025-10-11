import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'


export default function Header() {
  return (
          
        <header className="fixed top-0 w-full z-50 transition-all duration-500">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="relative group">
              <Link href="">
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
            <nav className="hidden md:flex items-center gap-1 bg-tranparent backdrop-blur-md rounded-full px-2 py-2 shadow-lg">
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
                className="px-6 py-2 rounded-full  bg-gradient-to-r from-blue-300 to-blue-800 text-white 
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

               <Link
              
                href="/Carinho"
                
                className=" flex  px-6 py-2 rounded-full  bg-gradient-to-r from-blue-300 to-blue-800 text-white 
           hover:from-blue-100 hover:to-blue-200 transition-all duration-200 font-medium shadow-lg"
              >
                <ShoppingCart className='mr-2' />
                Carrinho
              </Link>

              
            </nav>
          </div>
        </div>
      </header>
    
  )
}
