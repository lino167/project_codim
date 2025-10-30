import "./globals.css";
import { Orbitron, Inter } from "next/font/google";

export const orbitron = Orbitron({ subsets: ["latin"], weight: ["500", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-codim-black text-codim-white`}>
        {children}
      </body>
    </html>
  );
}
