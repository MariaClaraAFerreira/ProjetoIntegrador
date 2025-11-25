"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PedidoConfirmado() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [pedido, setPedido] = useState(null);

  useEffect(() => {
    async function loadPedido() {
      const res = await fetch(`/api/pedidos/${id}`);
      const data = await res.json();
      setPedido(data);
    }
    if (id) loadPedido();
  }, [id]);

  if (!pedido) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Pedido Confirmado!</h1>
      <p>ID do Pedido: {pedido.id}</p>

      <h2>Itens:</h2>
      <ul>
        {pedido.itens.map((item) => (
          <li key={item.id}>
            {item.produto.nome} — {item.quantidade} un — R$ {item.precoUnitario}
          </li>
        ))}
      </ul>

      <h3>Total: R$ {pedido.valorTotal}</h3>
    </div>
  );
}
