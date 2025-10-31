import Link from 'next/link'

import { codimPortfolio } from '@/content/codim'

export const metadata = {
  title: 'Portfolio - Codim',
  description: codimPortfolio.description,
}

export default function PortfolioPage() {
  return (
    <main className='portfolio-page'>
      <section className='portfolio-section' aria-labelledby='portfolio-hero-title'>
        <div className='portfolio-header'>
          <span className='section-pill'>Portfolio</span>
          <h1 id='portfolio-hero-title'>{codimPortfolio.title}</h1>
          <p>{codimPortfolio.description}</p>
        </div>
        <div className='portfolio-grid'>
          {codimPortfolio.items.map((item) => (
            <article key={item.name} className='portfolio-card'>
              <div className='portfolio-card-tag'>{item.tag}</div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <Link href='/contato' className='portfolio-card-link'>
                Discutir case
              </Link>
            </article>
          ))}
        </div>
        <div className='portfolio-actions'>
          {codimPortfolio.ctas.map((cta) => (
            <Link key={cta.href} href={cta.href} className='btn-outline'>
              {cta.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
