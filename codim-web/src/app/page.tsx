import Link from "next/link";
import { orbitron } from "../styles/fonts";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[1280px] px-6 lg:px-10">
      {/* Hero */}
      <section className="relative grid items-center py-16 md:py-20 lg:py-24 min-h-[65vh] md:min-h-[75vh] lg:min-h-[80vh] md:grid-cols-2 gap-10">
        {/* Gradiente/halo decorativo */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(600px 400px at 0% 0%, rgba(217,4,41,0.15), rgba(217,4,41,0.0) 60%), radial-gradient(500px 350px at 80% 10%, rgba(217,4,41,0.08), rgba(217,4,41,0.0) 60%)",
          }}
        />

        {/* Coluna de texto */}
        <div className="text-center md:text-left">
          <h1 className={`${orbitron.className} fade-up text-4xl md:text-5xl font-bold`}>
            Tecnologia com propósito. Resultados de verdade.
          </h1>
          <p className="fade-up mt-4 md:mt-5 text-codim-gray max-w-2xl md:max-w-xl mx-auto md:mx-0">
            Desenvolvo sites, sistemas, apps, APIs e automações com design minimalista, performance e segurança.
          </p>
          <div className="fade-up mt-7 flex flex-col sm:flex-row items-center md:items-start gap-4">
            <Link
              href="/contato"
              aria-label="Solicitar orçamento"
              className="inline-flex h-11 items-center justify-center rounded-xl px-6 bg-codim-red text-codim-white transition will-change-transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(217,4,41,0.4)] focus:outline-none focus:ring-2 focus:ring-codim-red focus:ring-offset-2 focus:ring-offset-codim-black"
            >
              Solicitar orçamento
            </Link>
            <Link
              href="/portfolio"
              aria-label="Ver portfólio"
              className="inline-flex h-11 items-center justify-center rounded-xl px-6 border border-white text-white transition hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-codim-black"
            >
              Ver portfólio
            </Link>
          </div>
          <p className="fade-up mt-4 text-xs text-codim-gray">
            SSR/SSG · PWA · Integrações · Dashboards · UX/SEO
          </p>
        </div>

        {/* Coluna decorativa (placeholder visual) */}
        <div className="hidden md:block">
          <div className="h-64 lg:h-80 rounded-xl bg-gradient-to-br from-codim-red/20 via-codim-red/10 to-transparent border border-codim-gray/30 shadow-soft" />
        </div>
      </section>

      {/* Sobre */}
      <section className="py-20 lg:py-24">
        <h2 className={`${orbitron.className} text-2xl md:text-3xl font-semibold`}>Sobre</h2>
        <p className="mt-3 text-codim-gray max-w-3xl">
          Somos uma equipe focada em engenharia de software, design e performance. Entregamos produtos
          com código limpo, acessibilidade e atenção ao detalhe.
        </p>
      </section>

      {/* Serviços */}
      <section className="py-20 lg:py-24">
        <h2 className={`${orbitron.className} text-2xl md:text-3xl font-semibold`}>Serviços</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl shadow-soft border border-codim-gray/30 p-6 bg-codim-black/40">
            <h3 className="text-lg font-semibold">Sites e Landing Pages</h3>
            <p className="mt-2 text-codim-gray">Páginas rápidas, responsivas e otimizadas para conversão.</p>
          </div>
          <div className="rounded-xl shadow-soft border border-codim-gray/30 p-6 bg-codim-black/40">
            <h3 className="text-lg font-semibold">Aplicações Web</h3>
            <p className="mt-2 text-codim-gray">SPA/SSR com arquitetura moderna e escalável.</p>
          </div>
          <div className="rounded-xl shadow-soft border border-codim-gray/30 p-6 bg-codim-black/40">
            <h3 className="text-lg font-semibold">Consultoria Técnica</h3>
            <p className="mt-2 text-codim-gray">Apoio em performance, acessibilidade e melhores práticas.</p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 lg:py-24 text-center">
        <h2 className={`${orbitron.className} text-2xl md:text-3xl font-semibold`}>Pronto para começar?</h2>
        <p className="mt-3 text-codim-gray">Conte sua ideia e vamos construir juntos.</p>
        <div className="mt-6">
          <Link
            href="/contato"
            className="inline-flex h-11 items-center justify-center rounded-xl px-6 bg-codim-red text-codim-white transition will-change-transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(217,4,41,0.4)] focus:outline-none focus:ring-2 focus:ring-codim-red focus:ring-offset-2 focus:ring-offset-codim-black"
            aria-label="Abrir página de contato"
          >
            Entre em contato
          </Link>
        </div>
      </section>
    </main>
  );
}
