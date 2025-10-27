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
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet"; // shadcn

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-pink-400 to-rose-500 rounded-2xl p-3 shadow-md flex items-center gap-3">
            <Image
              src="/logo_amor1.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-white font-bold text-xl">Doce Encanto</span>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="/"
            className="px-3 py-2 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition"
          >
            Início
          </Link>
          <Link
            href="/sobre"
            className="px-3 py-2 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition"
          >
            Sobre
          </Link>
          <Link
            href="/produtos"
            className="px-3 py-2 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition"
          >
            Produtos
          </Link>
          <Link
            href="/monte-seu-bolo"
            className="px-3 py-2 rounded-full bg-gradient-to-r from-blue-300 to-blue-800 text-white hover:from-blue-400 hover:to-blue-900 transition"
          >
            Monte seu Bolo
          </Link>
          <Link
            href="/contato"
            className="px-3 py-2 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition"
          >
            Contato
          </Link>
          <Link
            href="/login"
            className="px-3 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 transition"
          >
            Login
          </Link>

          {/* Carrinho Desktop */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="relative p-2 rounded-full hover:bg-pink-100 ml-2">
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

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-pink-600"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <Sheet>
            <SheetTrigger asChild>
              <button className="relative p-2 rounded-full hover:bg-pink-100">
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
              {/* Conteúdo igual ao desktop */}
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <nav className="flex flex-col items-center gap-3 py-4">
            <Link href="/" className="text-gray-700 hover:text-pink-600">
              Início
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-pink-600">
              Sobre
            </Link>
            <Link
              href="/produtos"
              className="text-gray-700 hover:text-pink-600"
            >
              Produtos
            </Link>
            <Link
              href="/monte-seu-bolo"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-300 to-blue-800 text-white hover:from-blue-400 hover:to-blue-900 transition"
            >
              Monte seu Bolo
            </Link>
            <Link
              href="/contato"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 transition"
            >
              Contato
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-pink-600">
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
