"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Categoria({ selectedCategory, onCategoryChange, productCounts }) {
  const categorias = [
    { key: "todas", nome: "Todas", icon: "🍰" },
    { key: "bolos", nome: "Bolos", icon: "🎂" },
    { key: "tortas", nome: "Tortas", icon: "🥧" },
    { key: "doces_finos", nome: "Doces Finos", icon: "🍬" },
    { key: "brigadeiros", nome: "Brigadeiros", icon: "🍫" },
    { key: "cupcakes", nome: "Cupcakes", icon: "🧁" },
    { key: "cookies", nome: "Cookies", icon: "🍪" },
    { key: "trufas", nome: "Trufas", icon: "🍫" },
    { key: "chocolates", nome: "Chocolates", icon: "🍫" },
  ];

  // soma total dos produtos
  const totalProducts = Object.values(productCounts || {}).reduce(
    (sum, c) => sum + c,
    0
  );

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Categorias</h1>

      {/* container com rolagem horizontal */}
      <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-thin scrollbar-thumb-pink-300 scrollbar-track-transparent">
        {categorias.map((categoria) => {
          const count =
            categoria.key === "todas"
              ? totalProducts
              : productCounts?.[categoria.key] || 0;

          const isSelected = selectedCategory === categoria.key;

          return (
            <Button
              key={categoria.key}
              variant={isSelected ? "default" : "outline"}
              onClick={() => onCategoryChange(categoria.key)}
              className={`relative flex items-center whitespace-nowrap ${
                isSelected
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0"
                  : "bg-white/80 border-pink-200 text-gray-700 hover:bg-pink-50"
              } transition-all duration-300 shadow-sm hover:shadow-md rounded-full px-4 py-2`}
            >
              <span className="mr-2 text-lg">{categoria.icon}</span>
              {categoria.nome}
              {count > 0 && (
                <Badge
                  variant="secondary"
                  className={`ml-2 border-0 text-xs font-medium ${
                    isSelected
                      ? "bg-white/30 text-white"
                      : "bg-pink-100 text-pink-700"
                  }`}
                >
                  {count}
                </Badge>
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
