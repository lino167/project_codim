import { orbitron } from "../../styles/fonts";

export default function PortfolioPage() {
  const projects = [
    { title: "Site Institucional", description: "Landing page moderna com foco em conversão." },
    { title: "Dashboard Analytics", description: "Aplicação SPA para visualização de métricas." },
    { title: "E-commerce Minimal", description: "Catálogo e carrinho com design clean." },
  ];

  return (
    <main className="mx-auto max-w-[1200px] px-4 md:px-16">
      <section className="py-16">
        <h1 className={`${orbitron.className} text-3xl md:text-4xl font-bold`}>Portfólio</h1>
        <p className="mt-2 text-codim-gray">Alguns projetos e experimentos recentes.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <div key={idx} className="rounded-xl shadow-soft border border-codim-gray/30 p-6 bg-codim-black/40">
              <div className="h-28 w-full rounded-md bg-codim-gray/20" />
              <h3 className={`${orbitron.className} mt-4 text-lg font-semibold`}>{p.title}</h3>
              <p className="mt-2 text-codim-gray">{p.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}