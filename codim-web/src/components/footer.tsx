import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-codim-gray/30">
      <div className="mx-auto max-w-[1200px] px-4 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-codim-gray">
        <p>© {new Date().getFullYear()} Codim. Todos os direitos reservados.</p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/lino167" target="_blank" rel="noopener noreferrer" className="hover:text-codim-red transition-colors">GitHub</Link>
          <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-codim-red transition-colors">LinkedIn</Link>
          <Link href="/contato" className="hover:text-codim-red transition-colors">Contato</Link>
        </div>
      </div>
    </footer>
  );
}