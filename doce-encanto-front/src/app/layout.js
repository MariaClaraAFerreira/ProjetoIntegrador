import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext"; // ⬅ AQUI!

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
          <CartProvider>
            {" "}
            {/* ⬅ ENVOLVE TUDO */}
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
