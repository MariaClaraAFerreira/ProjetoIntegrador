import "./globals.css";

export const metadata = {
  title: "Barkery",
  description: "Pablynne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="h-full bg-gray-50">
      <body className="h-full font-sans text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
