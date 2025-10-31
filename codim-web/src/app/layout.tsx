import "./globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#0A0A0A] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
