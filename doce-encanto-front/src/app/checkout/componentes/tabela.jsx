"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

export default function FinalizarPedido() {
  const { cart, total, clearCart } = useCart();
  const router = useRouter();

  const [formaPagamento, setFormaPagamento] = useState("pix");

  // Endereço
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  // 🆕 PARA PEGAR O PEDIDO PERSONALIZADO DO LOCALSTORAGE
  const [pedidoPersonalizado, setPedidoPersonalizado] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("pedido-personalizado");
    if (data) {
      setPedidoPersonalizado(JSON.parse(data));
    }
  }, []);

  // 👉 Máscara + busca automática
  const handleCep = (e) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 8) value = value.substring(0, 8);

    value = value.replace(/(\d{5})(\d)/, "$1-$2");

    setCep(value);

    if (value.length === 9) {
      buscarCEP(value);
    }
  };

  // 🔍 ViaCEP
  const buscarCEP = async (cepFormatado) => {
    const cepLimpo = cepFormatado.replace(/\D/g, "");

    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${cepLimpo}/json/`
      );
      const data = await response.json();

      if (data.erro) {
        alert("CEP não encontrado!");
        return;
      }

      setRua(data.logradouro || "");
      setBairro(data.bairro || "");
      setCidade(data.localidade || "");
      setUf(data.uf || "");
    } catch (error) {
      alert("Erro ao buscar CEP!");
    }
  };

  // 🧾 FINALIZAR PEDIDO
  const finalizarPedido = async () => {
    // Escolhe de onde vem o pedido
    const itensFinal =
      pedidoPersonalizado?.itens && pedidoPersonalizado.itens.length > 0
        ? pedidoPersonalizado.itens
        : cart.map((item) => ({
            produtoId: item.id,
            quantidade: item.quantity,
            precoUnitario: item.price,
          }));

    const totalFinal = pedidoPersonalizado?.valorTotal ?? total;

    if (!itensFinal || itensFinal.length === 0) {
      alert("Carrinho vazio ou pedido inválido!");
      return;
    }

    if (!cep || !rua || !bairro || !cidade || !uf) {
      alert("Preencha o endereço completo!");
      return;
    }

    // 🔥 payload final enviado ao backend
    const pedidoPayload = {
      clienteId: 1,
      valorTotal: totalFinal,
      status: "pendente",
      itens: itensFinal,
      cep,
      rua,
      bairro,
      cidade,
      uf,
    };

    try {
      const response = await fetch("/api/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pedidoPayload),
      });

      if (!response.ok) {
        console.error("ERRO DO BACKEND:", await response.text());
        alert("Erro ao criar pedido!");
        return;
      }

      const pedidoCriado = await response.json();

      // limpa carrinho e bolo personalizado
      clearCart();
      localStorage.removeItem("pedido-personalizado");

      router.push(`/pedido-confirmado?id=${pedidoCriado.id}`);
    } catch (error) {
      console.error(error);
      alert("Erro inesperado ao finalizar o pedido.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-10">
      <div className="shadow-lg rounded-2xl bg-blue-50 max-w-max p-8">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Finalizar Pedido
        </h1>

        {/* Endereço */}
        <div className="space-y-3 mb-6">
          <h2 className="font-semibold text-lg">Endereço de Entrega</h2>

          <input
            type="text"
            placeholder="CEP"
            value={cep}
            onChange={handleCep}
            maxLength={9}
            className="w-full border border-gray-300 rounded-lg p-2"
          />

          <input
            type="text"
            placeholder="Rua"
            value={rua}
            onChange={(e) => setRua(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          />

          <input
            type="text"
            placeholder="Bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          />

          <input
            type="text"
            placeholder="Cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          />

          <input
            type="text"
            placeholder="UF"
            value={uf}
            maxLength={2}
            onChange={(e) => setUf(e.target.value.toUpperCase())}
            className="w-full border border-gray-300 rounded-lg p-2"
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
                checked={formaPagamento === "pix"}
                onChange={() => setFormaPagamento("pix")}
              />
              Pix
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="pagamento"
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

          {pedidoPersonalizado ? (
            <ul className="space-y-1 mb-3">
              <li>Sabor: {pedidoPersonalizado?.itens[0]?.produtoId}</li>
              <li>Recheio: {pedidoPersonalizado?.itens[1]?.produtoId}</li>
              <li>Cobertura: {pedidoPersonalizado?.itens[2]?.produtoId}</li>
            </ul>
          ) : cart.length === 0 ? (
            <p className="text-gray-500">Seu carrinho está vazio.</p>
          ) : (
            <ul className="space-y-1 mb-3">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span className="text-pink-600">
              R$ {(pedidoPersonalizado?.valorTotal ?? total).toFixed(2)}
            </span>
          </div>
        </div>

        <button
          onClick={finalizarPedido}
          className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transition duration-200"
        >
          Confirmar Pedido
        </button>
      </div>
    </div>
  );
}
