import { orbitron } from "../../styles/fonts";

export default function BlogPage() {
  const posts = [
    { title: "Como melhorar a performance no Next.js", date: "2025-10-29", excerpt: "Dicas práticas de otimização de render e imagens." },
    { title: "Design System: por que investir?", date: "2025-10-20", excerpt: "Consistência, reuso e velocidade no desenvolvimento." },
    { title: "Acessibilidade sem complicação", date: "2025-10-10", excerpt: "Pequenos ajustes que fazem grande diferença." },
  ];

  return (
    <main className="mx-auto max-w-[1200px] px-4 md:px-16">
      <section className="py-16">
        <h1 className={`${orbitron.className} text-3xl md:text-4xl font-bold`}>Blog</h1>
        <p className="mt-2 text-codim-gray">Artigos e notas sobre desenvolvimento e design.</p>

        <div className="mt-8 space-y-6">
          {posts.map((post, idx) => (
            <article key={idx} className="rounded-xl shadow-soft border border-codim-gray/30 p-6 bg-codim-black/40">
              <h3 className={`${orbitron.className} text-lg font-semibold`}>{post.title}</h3>
              <p className="mt-1 text-xs text-codim-gray">{new Date(post.date).toLocaleDateString("pt-BR")}</p>
              <p className="mt-3 text-codim-gray">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}