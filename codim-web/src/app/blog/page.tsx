import Link from 'next/link'

import { codimBlogPage } from '@/content/codim'

export const metadata = {
  title: 'Blog - Codim',
  description:
    'Artigos, tutoriais e reflexoes sobre tecnologia, design e o futuro do desenvolvimento.',
}

export default function BlogPage() {
  const { hero, featuredPost, posts, newsletter } = codimBlogPage

  return (
    <main className='blog-page'>
      <section className='blog-section' aria-labelledby='blog-hero'>
        <span className='section-pill'>Conteudo</span>
        <div className='blog-content'>
          <h1 id='blog-hero'>{hero.title}</h1>
          <p>{hero.description}</p>
        </div>
        <article className='blog-featured-card'>
          <span className='blog-post-date'>Em destaque</span>
          <h2>{featuredPost.title}</h2>
          <p>{featuredPost.summary}</p>
          <Link href={featuredPost.href} className='blog-post-link'>
            Ler artigo completo
          </Link>
        </article>
      </section>

      <section className='blog-posts' aria-labelledby='blog-posts-title'>
        <h2 id='blog-posts-title'>Artigos recentes</h2>
        <div className='blog-posts-grid'>
          {posts.map((post) => (
            <article key={post.title} className='blog-post-card'>
              <span className='blog-post-date'>{post.date}</span>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <Link href={post.href} className='blog-post-link'>
                Ler artigo
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className='blog-newsletter' aria-labelledby='newsletter-title'>
        <div className='blog-newsletter-card'>
          <h2 id='newsletter-title'>Newsletter Codim</h2>
          <p>{newsletter.description}</p>
          <Link href={newsletter.cta.href} className='btn-primary'>
            {newsletter.cta.label}
          </Link>
        </div>
      </section>
    </main>
  )
}
