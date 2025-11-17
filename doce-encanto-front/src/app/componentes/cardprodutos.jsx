"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

export default function CardProdutos() {
  const router = useRouter();
  const { addToCart } = useCart(); // PEGANDO O CONTEXTO

  const categorias = [
    { key: "todas", nome: "Todas" },
    { key: "bolos", nome: "Bolos" },
    { key: "tortas", nome: "Tortas" },
    { key: "doces", nome: "Doces" },
    { key: "cupcakes", nome: "Cupcakes" },
  ];

  const produtos = [
    {
      id: 1,
      nome: "Bolo de Chocolate",
      preco: 45.9,
      imagem: "bolo1.jpeg",
      categoria: "bolos",
    },
    {
      id: 2,
      nome: "Torta de Limão",
      preco: 39.9,
      imagem: "bolo1.jpeg",
      categoria: "tortas",
    },
    {
      id: 3,
      nome: "Brigadeiro Gourmet",
      preco: 2.5,
      imagem: "bombom.jpeg",
      categoria: "doces",
    },
    {
      id: 4,
      nome: "Cupcake de Baunilha",
      preco: 7.9,
      imagem: "cupcake.jpeg",
      categoria: "cupcakes",
    },
    {
      id: 5,
      nome: "Bolo Red Velvet",
      preco: 55.9,
      imagem: "bolo1.jpeg",
      categoria: "bolos",
    },
  ];

  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todas");

  const produtosFiltrados =
    categoriaSelecionada === "todas"
      ? produtos
      : produtos.filter((p) => p.categoria === categoriaSelecionada);

  return (
    <div className="w-full py-8 px-6 relative">
      <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">
        🍰 Nossos Produtos
      </h1>

      {/* Categorias */}
      <div className="flex overflow-x-auto gap-3 mb-8 pb-2 justify-center">
        {categorias.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setCategoriaSelecionada(cat.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
              categoriaSelecionada === cat.key
                ? "bg-[#6B3F2A] text-white"
                : "bg-white border border-pink-200 text-pink-700 hover:bg-pink-100"
            }`}
          >
            {cat.nome}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {produtosFiltrados.map((produto) => (
          <div
            key={produto.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-[0_5px_20px_rgba(0,0,0,0.4)] transition-all overflow-hidden group cursor-pointer"
          >
            <div
              onClick={() => router.push(`/produtos/${produto.id}`)}
              className="relative"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-48 object-cover group-hover:opacity-90 transition"
              />
            </div>

            <div className="p-4 text-center border border-[#D59050] bg-pink-100 rounded-b-2xl">
              <h2 className="text-lg font-bold text-gray-800">
                {produto.nome}
              </h2>

              <p className="text-pink-600 font-bold mt-2">
                R$ {produto.preco.toFixed(2)}
              </p>

              {/* ADICIONANDO AO CARRINHO PELO CONTEXTO */}
              <button
                onClick={() =>
                  addToCart({
                    id: produto.id,
                    name: produto.nome,
                    price: produto.preco,
                    image: produto.imagem,
                  })
                }
                className="mt-3 px-4 py-2 bg-[#6B3F2A] text-white rounded-full hover:scale-105 transition-all"
              >
                + Adicionar
              </button>
            </div>
          </div>
        ))}
      </div>

      {produtosFiltrados.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          Nenhum produto encontrado nessa categoria 🍭
        </p>
      )}
    </div>
  );
}
