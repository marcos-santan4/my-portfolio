// src/app/layout.js
// Altere Inter para Poppins e adicione as configurações necessárias:
import { Poppins } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({
  // Você DEVE especificar os pesos que irá usar.
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"], // Pesos comuns para corpo, menu e títulos
  variable: "--font-poppins", // Adiciona uma variável CSS para a fonte (opcional, mas bom para Tailwind)
});

export const metadata = {
  title: "Verdant Visions Portfolio | Marcos Santana",
  description: "Portfólio de desenvolvimento e design por Marcos Santana",
};

export default function RootLayout({ children }) {
  return (
    // Aplique a classe da fonte ao <html>
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <body
        className={`theme-transition bg-gray-50 text-gray-800 dark:bg-dark dark:text-gray-200 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
