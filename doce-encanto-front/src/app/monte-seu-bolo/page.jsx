"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MonteSeuBolo() {
  const router = useRouter();

  const [sabores, setSabores] = useState([]);
  const [recheios, setRecheios] = useState([]);
  const [coberturas, setCoberturas] = useState([]);

  const [saborSelecionado, setSaborSelecionado] = useState(null);
  const [recheioSelecionado, setRecheioSelecionado] = useState(null);
  const [coberturaSelecionada, setCoberturaSelecionada] = useState(null);

  const [preco, setPreco] = useState(0);

  // Carrega produtos da API
  useEffect(() => {
    async function loadProdutos() {
      try {
        const res = await fetch("/api/produtos");
        const data = await res.json();

        setSabores(data.filter((p) => p.categoria === "sabor"));
        setRecheios(data.filter((p) => p.categoria === "recheio"));
        setCoberturas(data.filter((p) => p.categoria === "cobertura"));
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
      }
    }

    loadProdutos();
  }, []);

  // Atualiza preço total
  useEffect(() => {
    let total = 0;
    if (saborSelecionado) total += saborSelecionado.preco;
    if (recheioSelecionado) total += recheioSelecionado.preco;
    if (coberturaSelecionada) total += coberturaSelecionada.preco;
    setPreco(total);
  }, [saborSelecionado, recheioSelecionado, coberturaSelecionada]);

  // Salvar e ir para checkout
  function finalizarBolo() {
    if (!saborSelecionado || !recheioSelecionado || !coberturaSelecionada) {
      alert("Escolha sabor, recheio e cobertura.");
      return;
    }

    const bolo = {
      clienteId: 1, // pode trocar pelo cliente logado
      valorTotal: preco,
      itens: [
        {
          produtoId: saborSelecionado.id,
          quantidade: 1,
          precoUnitario: saborSelecionado.preco,
        },
        {
          produtoId: recheioSelecionado.id,
          quantidade: 1,
          precoUnitario: recheioSelecionado.preco,
        },
        {
          produtoId: coberturaSelecionada.id,
          quantidade: 1,
          precoUnitario: coberturaSelecionada.preco,
        },
      ],
    };

    localStorage.setItem("pedido-personalizado", JSON.stringify(bolo));

    router.push("/checkout");
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Monte Seu Bolo</h1>

      {/* SABOR */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Sabor</h2>
        <div className="grid grid-cols-2 gap-3">
          {sabores.map((s) => (
            <button
              key={s.id}
              onClick={() => setSaborSelecionado(s)}
              className={`p-3 rounded border ${
                saborSelecionado?.id === s.id
                  ? "bg-pink-300 border-pink-500"
                  : "bg-white"
              }`}
            >
              {s.nome} — R$ {s.preco.toFixed(2)}
            </button>
          ))}
        </div>
      </div>

      {/* RECHEIO */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Recheio</h2>
        <div className="grid grid-cols-2 gap-3">
          {recheios.map((r) => (
            <button
              key={r.id}
              onClick={() => setRecheioSelecionado(r)}
              className={`p-3 rounded border ${
                recheioSelecionado?.id === r.id
                  ? "bg-pink-300 border-pink-500"
                  : "bg-white"
              }`}
            >
              {r.nome} — R$ {r.preco.toFixed(2)}
            </button>
          ))}
        </div>
      </div>

      {/* COBERTURA */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Cobertura</h2>
        <div className="grid grid-cols-2 gap-3">
          {coberturas.map((c) => (
            <button
              key={c.id}
              onClick={() => setCoberturaSelecionada(c)}
              className={`p-3 rounded border ${
                coberturaSelecionada?.id === c.id
                  ? "bg-pink-300 border-pink-500"
                  : "bg-white"
              }`}
            >
              {c.nome} — R$ {c.preco.toFixed(2)}
            </button>
          ))}
        </div>
      </div>

      {/* TOTAL */}
      <div className="text-center text-xl font-bold mb-6">
        Total: R$ {preco.toFixed(2)}
      </div>

      {/* BOTÃO FINALIZAR */}
      <button
        onClick={finalizarBolo}
        className="w-full bg-pink-600 text-white p-4 rounded-lg text-lg font-semibold"
      >
        Finalizar Pedido
      </button>
    </div>
  );
}
