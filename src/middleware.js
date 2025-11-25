import { NextResponse } from 'next/server';
 
// Configurar as rotas que requerem autenticação
const protectedRoutes = [
  '/perfil',
  '/pedidos',
];

// Configurar as rotas públicas (acessíveis mesmo sem login)
const publicRoutes = [
  '/login',
  '/registro',
  '/',
  '/produtos',
  '/monte-seu-bolo',
];
 
export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route));
  const token = request.cookies.get('session');

  // Se é uma rota protegida e não tem token, redireciona para login
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Se está logado e tenta acessar login/registro, redireciona para home
  if (token && (pathname.startsWith('/login') || pathname.startsWith('/registro'))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Para todas as outras rotas, permite o acesso
  return NextResponse.next();
}