import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('session');

    if (!token) {
      return NextResponse.json(
        { message: 'Não autorizado' },
        { status: 401 }
      );
    }

    // Aqui você deve validar o token com seu backend
    const response = await fetch('https://sua-api.com/auth/me', {
      headers: {
        'Authorization': `Bearer ${token.value}`,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: 'Sessão inválida' },
        { status: 401 }
      );
    }

    const data = await response.json();
    return NextResponse.json({ user: data.user });
    
  } catch (error) {
    console.error('Erro ao verificar usuário:', error);
    return NextResponse.json(
      { message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}