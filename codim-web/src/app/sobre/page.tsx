import Link from 'next/link'

import { codimAbout, codimIdentity } from '@/content/codim'

export const metadata = {
  title: 'Sobre - Codim',
  description:
    'Conheca Zacarias Lino, fundador da Codim. Desenvolvedor full stack e criador de solucoes digitais com foco em design e performance.',
}

export default function AboutPage() {
  return (
    <main className='about-page'>
      <section className='about-hero' aria-labelledby='about-hero-title'>
        <span className='section-pill'>{codimIdentity.slogan}</span>
        <h1 id='about-hero-title'>{codimAbout.hero.title}</h1>
        <p>{codimAbout.hero.subtitle}</p>
      </section>

      <section className='page-section about-bio-block' aria-labelledby='bio-title'>
        <div className='about-bio-avatar' aria-hidden='true'>
          <span>ZR</span>
        </div>
        <div className='about-bio-content'>
          <h2 id='bio-title'>{codimAbout.bio.title}</h2>
          <span className='about-bio-role'>{codimAbout.bio.subtitle}</span>
          {codimAbout.bio.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className='page-section about-stack-block' aria-labelledby='stack-title'>
        <h2 id='stack-title'>Stacks principais</h2>
        <div className='grid-cards four-columns'>
          {codimAbout.stacks.map((stack) => (
            <article key={stack.title} className='card'>
              <h3>{stack.title}</h3>
              <ul>
                {stack.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className='page-section about-mission-block' aria-labelledby='mission-title'>
        <div className='mission-card'>
          <h2 id='mission-title'>Missao</h2>
          <p>{codimAbout.mission}</p>
        </div>
        <div className='mission-card'>
          <h2>Visao</h2>
          <p>{codimAbout.vision}</p>
        </div>
      </section>

      <section className='page-section about-values-block' aria-labelledby='values-title'>
        <h2 id='values-title'>Valores</h2>
        <div className='grid-cards'>
          {codimAbout.values.map((value) => (
            <article key={value} className='card'>
              <p>{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='about-final-cta' aria-labelledby='final-quote'>
        <h2 id='final-quote'>{codimAbout.finalQuote}</h2>
        <Link href={codimAbout.finalCta.href} className='btn-primary'>
          {codimAbout.finalCta.label}
        </Link>
      </section>
    </main>
  )
}
