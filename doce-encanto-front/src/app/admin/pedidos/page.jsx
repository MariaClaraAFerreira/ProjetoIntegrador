"use client";

import { useEffect, useState } from "react";
import Header from "@/app/componentes/header";
import Footer from "@/app/componentes/footer";

export default function AdminPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [filtroStatus, setFiltroStatus] = useState("todos");
  const [buscaCliente, setBuscaCliente] = useState("");

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);
  const [novoStatus, setNovoStatus] = useState("");

  async function loadPedidos() {
    try {
      const res = await fetch("/api/pedidos");
      const data = await res.json();
      setPedidos(data);
    } catch (error) {
      console.error("Erro ao carregar pedidos:", error);
    }
  }

  useEffect(() => {
    loadPedidos();
  }, []);

  // Filtro lógico
  const pedidosFiltrados = pedidos.filter((pedido) => {
    const matchStatus =
      filtroStatus === "todos" || pedido.status === filtroStatus;

    const matchCliente =
      buscaCliente.trim() === "" ||
      pedido.cliente.nome.toLowerCase().includes(buscaCliente.toLowerCase());

    return matchStatus && matchCliente;
  });

  function abrirModal(pedido) {
    setPedidoSelecionado(pedido);
    setNovoStatus(pedido.status);
    setModalOpen(true);
  }

  function fecharModal() {
    setModalOpen(false);
    setPedidoSelecionado(null);
  }

  async function salvarStatus() {
    if (!pedidoSelecionado) return;

    try {
      const res = await fetch(`/api/pedidos/${pedidoSelecionado.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: novoStatus }),
      });

      if (!res.ok) {
        alert("Erro ao atualizar status");
        return;
      }

      await loadPedidos();
      fecharModal();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Header />
      <div className="p-6 max-w-6xl mx-auto mt-30 h-full">
        <h1 className="text-3xl font-bold mb-6">Admin - Pedidos</h1>

        {/* Filtros */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Buscar por cliente..."
            className="border p-2 rounded w-full"
            value={buscaCliente}
            onChange={(e) => setBuscaCliente(e.target.value)}
          />

          <select
            className="border p-2 rounded"
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
          >
            <option value="todos">Todos os status</option>
            <option value="pendente">Pendente</option>
            <option value="pago">Pago</option>
            <option value="cancelado">Cancelado</option>
          </select>
        </div>

        {/* Tabela */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse shadow rounded-lg">
            <thead className="bg-gray-200 text-left">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Cliente</th>
                <th className="p-3">Status</th>
                <th className="p-3">Total</th>
                <th className="p-3">Ações</th>
              </tr>
            </thead>

            <tbody>
              {pedidosFiltrados.map((pedido) => (
                <tr
                  key={pedido.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">{pedido.id}</td>
                  <td className="p-3">{pedido.cliente.nome}</td>
                  <td className="p-3 capitalize">{pedido.status}</td>
                  <td className="p-3">R$ {pedido.valorTotal.toFixed(2)}</td>

                  <td className="p-3 flex gap-3">
                    <button
                      className="px-3 py-1 bg-blue-500 text-white rounded"
                      onClick={() => abrirModal(pedido)}
                    >
                      Ver detalhes
                    </button>

                    <button
                      className="px-3 py-1 bg-yellow-500 text-white rounded"
                      onClick={() => abrirModal(pedido)}
                    >
                      Alterar status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {modalOpen && pedidoSelecionado && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
              <h2 className="text-xl font-bold mb-4">
                Pedido #{pedidoSelecionado.id}
              </h2>

              <p className="mb-2">
                Cliente: <strong>{pedidoSelecionado.cliente.nome}</strong>
              </p>

              <p className="mb-4">
                Total:{" "}
                <strong>R$ {pedidoSelecionado.valorTotal.toFixed(2)}</strong>
              </p>

              <h3 className="font-semibold mb-1">Itens:</h3>
              <ul className="mb-4 list-disc ml-6">
                {pedidoSelecionado.itens.map((item) => (
                  <li key={item.id}>
                    Produto #{item.produtoId} — {item.quantidade} un
                  </li>
                ))}
              </ul>

              <label className="block mb-2">Status:</label>
              <select
                className="border p-2 rounded w-full mb-4"
                value={novoStatus}
                onChange={(e) => setNovoStatus(e.target.value)}
              >
                <option value="pendente">Pendente</option>
                <option value="pago">Pago</option>
                <option value="cancelado">Cancelado</option>
              </select>

              <div className="flex justify-end gap-3">
                <button
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={fecharModal}
                >
                  Fechar
                </button>

                <button
                  className="px-4 py-2 bg-green-600 text-white rounded"
                  onClick={salvarStatus}
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
