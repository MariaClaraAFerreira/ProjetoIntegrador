import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request) {
  try {
    const { nome_completo, email, senha } = await request.json();

    // Verifica se já existe
    const existing = await prisma.cliente.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { message: "Email já está em uso" },
        { status: 400 }
      );
    }

    // Cria cliente
    const newCliente = await prisma.cliente.create({
      data: {
        nome: nome_completo,
        email,
        senha, // depois você pode colocar hash (bcrypt)
      },
    });

    return NextResponse.json(
      { message: "Conta criada com sucesso", cliente: newCliente },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro no registro:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
