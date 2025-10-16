"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // ícones do shadcn/lucide-react

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
          </nav>
        </div>
      )}
    </header>
  );
}
