"use client";
import React, { useState } from "react";

export default function FinalizarPedido() {
  const [formaPagamento, setFormaPagamento] = useState("pix");

  const pedido = [
    { nome: "Bolo de Morango", quantidade: 1, preco: 45 },
    { nome: "Bolo de Chocolate", quantidade: 2, preco: 50 },
  ];

  const total = pedido.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <div className="min-h-screen  flex justify-center items-center  py-10">
      <div className=" shadow-lg rounded-2xl  bg-blue-50 max-w-max p-8">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Finalizar Pedido
        </h1>

        {/* Endereço */}
        <div className="space-y-3 mb-6">
          <h2 className="font-semibold text-lg">Endereço de Entrega</h2>
          <input
            type="text"
            placeholder="Rua, número e complemento"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="text"
            placeholder="Bairro"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="text"
            placeholder="Cidade"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="text"
            placeholder="CEP"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Pagamento */}
        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Forma de Pagamento</h2>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="pagamento"
                value="pix"
                checked={formaPagamento === "pix"}
                onChange={() => setFormaPagamento("pix")}
              />
              Pix
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="pagamento"
                value="entrega"
                checked={formaPagamento === "entrega"}
                onChange={() => setFormaPagamento("entrega")}
              />
              Pagar na Entrega
            </label>
          </div>
        </div>

        {/* Resumo */}
        <div className="border-t border-gray-200 pt-4">
          <h2 className="font-semibold text-lg mb-2">Resumo do Pedido</h2>
          <ul className="space-y-1 mb-3">
            {pedido.map((item, i) => (
              <li key={i} className="flex justify-between text-gray-700">
                <span>
                  {item.nome} x {item.quantidade}
                </span>
                <span>R$ {item.preco * item.quantidade}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span className="text-pink-600">R$ {total}</span>
          </div>
        </div>

        {/* Botão */}
        <button className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transition duration-200">
          Confirmar Pedido
        </button>
      </div>
    </div>
  );
}
