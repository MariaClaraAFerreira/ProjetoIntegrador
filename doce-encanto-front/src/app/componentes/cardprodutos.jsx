"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CardProdutos() {
  const router = useRouter();

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
  const [carrinho, setCarrinho] = useState(0);

  const produtosFiltrados =
    categoriaSelecionada === "todas"
      ? produtos
      : produtos.filter((p) => p.categoria === categoriaSelecionada);

  const adicionarAoCarrinho = () => {
    setCarrinho((prev) => prev + 1);
  };

  return (
    <div className="w-full py-8 px-6 bg-[#CDECF9] from-pink-50 via-white to-pink-100 relative">
      {/* contador do carrinho */}

      <h1 className="text-3xl font-bold text-pink-700 mb-6 text-center">
        🍰 Nossos Produtos
      </h1>

      {/* Categorias */}
      <div className="flex overflow-x-auto gap-3 mb-8 pb-2 justify-center scrollbar-thin scrollbar-thumb-pink-300 scrollbar-track-transparent">
        {categorias.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setCategoriaSelecionada(cat.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm 
              ${
                categoriaSelecionada === cat.key
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
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
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
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
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {produto.nome}
              </h2>
              <p className="text-pink-600 font-bold mt-2">
                R$ {produto.preco.toFixed(2)}
              </p>
              <button
                onClick={adicionarAoCarrinho}
                className="mt-3 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:scale-105 transition-all duration-200"
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
