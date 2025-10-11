"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DetalhesProduto({ id }) {
  const router = useRouter();
  const [produto, setProduto] = useState(null);

  // Simula busca de produto (poderia vir de API)
  useEffect(() => {
    const produtos = [
      {
        id: 1,
        nome: "Bolo de Chocolate",
        preco: 45.9,
        descricao: "Bolo fofinho com cobertura de ganache artesanal.",
        imagem: "https://images.unsplash.com/photo-1601972599720-b7a56f56af6b",
      },
      {
        id: 2,
        nome: "Torta de Limão",
        preco: 39.9,
        descricao: "Torta cremosa com raspas de limão e base crocante.",
        imagem: "https://images.unsplash.com/photo-1612197527762-9435f54d0da1",
      },
      {
        id: 3,
        nome: "Brigadeiro Gourmet",
        preco: 2.5,
        descricao: "Feito com chocolate belga e leite condensado premium.",
        imagem: "https://images.unsplash.com/photo-1612201081670-4439dcd54a8d",
      },
    ];

    const encontrado = produtos.find((p) => p.id === Number(id));
    setProduto(encontrado);
  }, [id]);

  if (!produto)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500">
        Carregando produto...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 flex flex-col items-center justify-center px-6 py-10">
      <div className="max-w-md bg-white rounded-3xl shadow-lg overflow-hidden">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold text-pink-700 mb-2">
            {produto.nome}
          </h1>
          <p className="text-gray-600 mb-4">{produto.descricao}</p>
          <p className="text-pink-600 font-bold text-xl mb-6">
            R$ {produto.preco.toFixed(2)}
          </p>
          <button
            onClick={() => router.back()}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full hover:scale-105 transition-all"
          >
            ← Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
