import Link from 'next/link'

import { codimBlog, codimBlogPosts } from '@/content/codim'

export const metadata = {
  title: 'Blog - Codim',
  description: codimBlog.description,
}

export default function BlogPage() {
  return (
    <main className='blog-page'>
      <section className='blog-section' aria-labelledby='blog-hero-title'>
        <span className='section-pill'>Conteudo</span>
        <h1 id='blog-hero-title'>{codimBlog.title}</h1>
        <p>{codimBlog.description}</p>
        <div className='blog-actions'>
          {codimBlog.ctas.map((cta) => (
            <Link key={cta.href} href={cta.href} className='btn-primary'>
              {cta.label}
            </Link>
          ))}
        </div>
      </section>

      <section className='blog-posts' aria-labelledby='blog-posts-title'>
        <h2 id='blog-posts-title'>Artigos em destaque</h2>
        <div className='blog-posts-grid'>
          {codimBlogPosts.map((post) => (
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
    </main>
  )
}
