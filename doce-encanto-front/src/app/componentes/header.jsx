"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ShoppingCart,
  Home,
  ClipboardList,
  Cake,
  LogIn,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CartSheet from "../componentes/carrinhoSheet"; // ✅ importando o novo componente de carrinho

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-xl">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center justify-between w-full bg-[#CDECF9] shadow-xl px-6 py-3 ml-6 rounded-xl">
          {/* Logo e título */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo_amor1.png"
              alt="Logo Doce Encanto"
              width={60}
              height={60}
              className="rounded-4xl"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-lg text-pink-600 font-[cursive]">
                Doce Encanto
              </span>
              <span className="text-xs text-gray-500 font-medium">
                Confeitaria Artesanal
              </span>
            </div>
          </div>

          {/* Navegação */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-1 text-gray-700 hover:text-pink-600 transition"
            >
              <Home className="w-4 h-4" />
              Início
            </Link>

            <Link
              href="/monte-seu-bolo"
              className="flex items-center gap-1 text-gray-700 hover:text-pink-600 transition"
            >
              <Cake className="w-4 h-4" />
              Monte seu Bolo
            </Link>

            <div className="h-6 w-px bg-gray-300 mx-2"></div>

            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="border-purple-300 text-pink-500 hover:bg-purple-50 hover:border-purple-400 flex items-center gap-2"
              >
                <LogIn className="w-4 h-4 text-pink-500" />
                Login
              </Button>
            </Link>

            <Link href="/registro">
              <Button
                size="sm"
                className="bg-gradient-to-r bg-pink-500 text-white shadow-md flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                Cadastro
              </Button>
            </Link>

            {/* ✅ Carrinho substituído pelo CartSheet */}
            <CartSheet />
          </div>
        </nav>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-pink-600"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* ✅ Carrinho mobile também usa CartSheet */}
          <CartSheet />
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
