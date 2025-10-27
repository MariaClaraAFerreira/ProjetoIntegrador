import "./globals.css";

export const metadata = {
  title: "Barkery",
  description: "Pablynne",
  icons: {
    icon: "/logo_amor1.png", // caminho da imagem dentro de public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="h-screen w-screen bg-white">
      <body className="h-full w-full font-sans text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
