import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // AGORA COOKIES É ASSÍNCRONO
    const cookieStore = await cookies();
    const session = cookieStore.get("session");

    if (!session) {
      return NextResponse.json(
        { message: "Não autenticado" },
        { status: 401 }
      );
    }

    const cliente = await prisma.cliente.findUnique({
      where: { id: Number(session.value) },
      select: { id: true, nome: true, email: true },
    });

    if (!cliente) {
      return NextResponse.json(
        { message: "Cliente não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { cliente },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro em /api/auth/me:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
