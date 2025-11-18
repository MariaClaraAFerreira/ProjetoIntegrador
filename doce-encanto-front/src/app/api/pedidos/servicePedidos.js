import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getPedidos() {
  return prisma.pedido.findMany({ include: { cliente: true, itens: true } });
}

export async function getPedidoById(id) {
  return prisma.pedido.findUnique({
    where: { id: Number(id) },
    include: { cliente: true, itens: true },
  });
}

export async function createPedido(data) {
  return prisma.pedido.create({
    data: {
      clienteId: data.clienteId,
      valorTotal: data.valorTotal,
      status: data.status ?? "pendente",
      itens: {
        create: data.itens.map((item) => ({
          produtoId: item.produtoId,
          quantidade: item.quantidade,
          precoUnitario: item.precoUnitario,
        })),
      },
    },
    include: {
      itens: true,
    },
  });
}

export async function updatePedido(id, data) {
  return prisma.pedido.update({
    where: { id: Number(id) },
    data,
  });
}

export async function deletePedido(id) {
  return prisma.pedido.delete({ where: { id: Number(id) } });
}
