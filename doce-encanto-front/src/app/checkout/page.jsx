"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  const [payment, setPayment] = useState("pix");

  const cartItems = [
    { id: 1, name: "Bolo de Morango", price: 45, quantity: 1 },
    { id: 2, name: "Bolo de Chocolate", price: 50, quantity: 2 },
  ];

  const getCartTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Finalizar Pedido</h1>

      {/* Endereço */}
      <div className="space-y-3 mb-6">
        <h2 className="font-semibold text-lg border-b pb-2">
          Endereço de Entrega
        </h2>
        <input
          type="text"
          placeholder="Rua, número e complemento"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Bairro"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Cidade"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="CEP"
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Forma de pagamento */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg border-b pb-2">
          Forma de Pagamento
        </h2>
        <div className="flex gap-4 mt-3">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="pix"
              checked={payment === "pix"}
              onChange={() => setPayment("pix")}
            />
            Pix
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="entrega"
              checked={payment === "entrega"}
              onChange={() => setPayment("entrega")}
            />
            Pagar na Entrega
          </label>
        </div>
      </div>

      {/* Produtos */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg border-b pb-2">
          Resumo do Pedido
        </h2>
        <div className="space-y-2 mt-3">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center text-sm border-b pb-2"
            >
              <span>
                {item.name} x {item.quantity}
              </span>
              <span className="font-semibold">
                R$ {item.price * item.quantity}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-4 font-bold text-lg">
          <span>Total:</span>
          <span>R$ {getCartTotal()}</span>
        </div>
      </div>

      {/* Botão de confirmar */}
      <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
        Confirmar Pedido
      </Button>
    </div>
  );
}
