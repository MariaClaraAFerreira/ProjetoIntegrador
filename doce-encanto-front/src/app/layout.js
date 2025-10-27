"use client"

import "./globals.css";
import { AuthProvider } from "./context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="h-screen w-screen bg-[#CDECF9]">
      <body className="h-full w-full font-sans text-gray-900 antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
