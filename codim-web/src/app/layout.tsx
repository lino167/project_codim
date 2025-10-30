import "./globals.css";
import { inter } from "../styles/fonts";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "Codim — Engenharia de Software e Web",
  description:
    "Soluções web modernas, performance, acessibilidade e design de qualidade pela Codim.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Codim",
    description:
      "Soluções web modernas, performance, acessibilidade e design de qualidade.",
    url: "http://localhost:3000/",
    siteName: "Codim",
    images: [
      { url: "/Codim_Branco_vermelho.png", width: 1200, height: 630, alt: "Logo Codim" },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

// Fontes configuradas em src/styles/fonts.ts

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-codim-black text-codim-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
