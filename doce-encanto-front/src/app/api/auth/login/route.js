import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, senha } = await request.json();

    const cliente = await prisma.cliente.findUnique({
      where: { email },
    });

    if (!cliente || cliente.senha !== senha) {
      return NextResponse.json(
        { message: "Credenciais inválidas" },
        { status: 401 }
      );
    }

    // Salva ID do cliente no cookie
    const cookieStore = cookies();
    cookieStore.set("session", String(cliente.id), {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json(
      { message: "Login realizado", cliente },
      { status: 200 }
    );

  } catch (error) {
    console.error("Erro no login:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
