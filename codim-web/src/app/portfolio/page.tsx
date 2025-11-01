import Link from 'next/link'

import { codimPortfolioPage } from '@/content/codim'

export const metadata = {
  title: 'Portfolio - Codim',
  description:
    'Projetos criados pela Codim - software e design em harmonia. Veja estudos de caso, aplicacoes e SaaS construidos com proposito.',
}

export default function PortfolioPage() {
  return (
    <main className='portfolio-page'>
      <section className='portfolio-section' aria-labelledby='portfolio-title'>
        <div className='portfolio-header'>
          <span className='section-pill'>Portfolio</span>
          <h1 id='portfolio-title'>{codimPortfolioPage.hero.title}</h1>
          <p>{codimPortfolioPage.hero.description}</p>
        </div>

        <div className='portfolio-grid'>
          {codimPortfolioPage.projects.map((project) => (
            <article key={project.name} className='portfolio-card'>
              {project.tag ? (
                <span className='portfolio-card-tag'>{project.tag}</span>
              ) : null}
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <Link href='/contato' className='portfolio-card-link'>
                Discutir case
              </Link>
            </article>
          ))}
        </div>

        <div className='portfolio-actions'>
          <h2>{codimPortfolioPage.finalCta.title}</h2>
          <p>{codimPortfolioPage.finalCta.description}</p>
          <Link
            href={codimPortfolioPage.finalCta.cta.href}
            className='btn-primary'
          >
            {codimPortfolioPage.finalCta.cta.label}
          </Link>
        </div>
      </section>
    </main>
  )
}
