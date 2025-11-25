import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { fullName, email, password } = await request.json();

    // Aqui você deve implementar a lógica de registro com seu backend
    const response = await fetch('https://sua-api.com/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullName, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: data.message || 'Erro ao criar conta' },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: 'Conta criada com sucesso' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro no registro:', error);
    return NextResponse.json(
      { message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}