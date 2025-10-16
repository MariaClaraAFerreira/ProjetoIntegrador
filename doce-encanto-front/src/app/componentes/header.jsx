"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet"; // componente do shadcn

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 transition-all bg-white duration-500 shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative group">
          <div className="relative bg-gradient-to-r from-pink-400 to-rose-500 rounded-2xl p-3 shadow-2xl transform group-hover:scale-105 transition-all duration-300 flex items-center gap-3">
            <Image
              src="/logo_amor1.png"
              alt="Logo"
              width={50}
              height={50}
              className="p-1 rounded-full"
            />
            <span className="text-white font-bold text-xl tracking-wide drop-shadow-lg">
              Doce Encanto
            </span>
          </div>
        </Link>

        {/* Botão sanduíche (mobile) */}
        <button
          className="md:hidden text-pink-600 hover:text-pink-700 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-2 bg-transparent backdrop-blur-md rounded-full px-3 py-2 shadow-lg">
          <Link
            href="/"
            className="px-4 py-2 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-200 font-medium"
          >
            Início
          </Link>
          <Link
            href="/"
            className="px-4 py-2 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-200 font-medium"
          >
            Sobre
          </Link>
          <Link
            href="/"
            className="px-4 py-2 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-200 font-medium"
          >
            Produtos
          </Link>
          <Link
            href="/monte-seu-bolo"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-300 to-blue-800 text-white hover:from-blue-100 hover:to-blue-200 transition-all duration-200 font-medium shadow-lg"
          >
            Monte seu Bolo
          </Link>
          <Link
            href="/"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium shadow-lg"
          >
            Contato
          </Link>

          {/* Carrinho com Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="relative p-2 rounded-full hover:bg-pink-100 transition-all ml-2">
                <ShoppingCart className="w-6 h-6 text-pink-600" />
                <span className="absolute top-1 right-1 w-3 h-3 bg-rose-500 rounded-full"></span>
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[90vw] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-pink-600">Seu Carrinho</SheetTitle>
                <SheetDescription>
                  Itens adicionados ao seu pedido
                </SheetDescription>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-4">
                {/* Exemplo de item */}
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/bolo1.jpeg"
                      alt="Bolo"
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">
                        Bolo de Morango
                      </p>
                      <p className="text-sm text-gray-500">R$ 45,00</p>
                    </div>
                  </div>
                  <span className="font-bold text-pink-600">1x</span>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mt-4">
                  <span className="font-semibold text-gray-700">Total:</span>
                  <span className="font-bold text-pink-600 text-lg">
                    R$ 45,00
                  </span>
                </div>

                {/* Botão Finalizar */}
                <button className="mt-4 w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg">
                  Finalizar Pedido
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <nav className="flex flex-col items-center gap-3 py-4">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-pink-600 transition-all font-medium"
            >
              Início
            </Link>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-pink-600 transition-all font-medium"
            >
              Sobre
            </Link>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-pink-600 transition-all font-medium"
            >
              Produtos
            </Link>
            <Link
              href="/monte-seu-bolo"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-300 to-blue-800 text-white hover:from-blue-100 hover:to-blue-200 transition-all font-medium shadow-lg"
            >
              Monte seu Bolo
            </Link>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 transition-all font-medium shadow-lg"
            >
              Contato
            </Link>

            {/* Carrinho no mobile também */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="relative p-2 rounded-full hover:bg-pink-100 transition-all">
                  <ShoppingCart className="w-6 h-6 text-pink-600" />
                  <span className="absolute top-1 right-1 w-3 h-3 bg-rose-500 rounded-full"></span>
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[90vw] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-pink-600">
                    Seu Carrinho
                  </SheetTitle>
                  <SheetDescription>
                    Itens adicionados ao seu pedido
                  </SheetDescription>
                </SheetHeader>

                {/* Conteúdo igual ao do desktop */}
                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/bolo1.jpeg"
                        alt="Bolo"
                        width={60}
                        height={60}
                        className="rounded-lg"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">
                          Bolo de Morango
                        </p>
                        <p className="text-sm text-gray-500">R$ 45,00</p>
                      </div>
                    </div>
                    <span className="font-bold text-pink-600">1x</span>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="font-semibold text-gray-700">Total:</span>
                    <span className="font-bold text-pink-600 text-lg">
                      R$ 45,00
                    </span>
                  </div>

                  <button className="mt-4 w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg">
                    Finalizar Pedido
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      )}
    </header>
  );
}
