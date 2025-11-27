"use client";

import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Meu App PWA",
  description: "Aplicativo PWA com Next.js App Router",
  manifest: "/manifest.json",
  icons: {
    icon: "/senac-192x192.png",
    apple: "/senac-512x512.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="bg-[#CDECF9]">
      <body className="h-full w-full font-sans text-gray-900 antialiased">
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>

        {/* 🩷 AQUI: TOASTER GLOBAL ROSA */}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#ffe4f2",
              color: "#b3006b",
              border: "1px solid #ff99cc",
              padding: "12px 16px",
              borderRadius: "12px",
            },
            iconTheme: {
              primary: "#ff1493",
              secondary: "#ffe4f2",
            },
          }}
        />
      </body>
    </html>
  );
}
