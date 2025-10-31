import Link from 'next/link'

import { codimAboutPage, codimIdentity } from '@/content/codim'
type Cta = {
  label: string
  href: string
}

function CtaButton({ label, href }: Cta) {
  return (
    <Link href={href} className="btn-primary">
      {label}
    </Link>
  )
}

export const metadata = {
  title: 'Sobre - Codim',
  description:
    'Conheca Zacarias Lino Ramos Filho, fundador da Codim, e os pilares que guiam o estúdio.',
}

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-hero-title">
        <span className="section-pill">{codimIdentity.slogan}</span>
        <h1 id="about-hero-title">{codimAboutPage.heroTitle}</h1>
        <p>{codimAboutPage.heroSubtitle}</p>
        <CtaButton {...codimAboutPage.heroCta} />
      </section>

      <section className="about-bio" aria-labelledby="bio-heading">
        <div className="about-bio-avatar" aria-hidden="true">
          <span>ZL</span>
        </div>
        <div className="about-bio-content">
          <h2 id="bio-heading">Biografia</h2>
          {codimAboutPage.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="about-stack" aria-labelledby="stack-heading">
        <h2 id="stack-heading">Stack tecnica</h2>
        <div className="about-stack-grid">
          {codimAboutPage.stack.map((group) => (
            <article key={group.title} className="about-stack-card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="about-values" aria-labelledby="values-heading">
        <h2 id="values-heading">Valores fundamentais</h2>
        <div className="about-values-grid">
          {codimAboutPage.values.map((value) => (
            <article key={value.title} className="about-value-tile">
              <span className="about-value-icon" aria-hidden="true">
                {value.icon}
              </span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-mission" aria-labelledby="mission-heading">
        <div>
          <h2 id="mission-heading">Missao</h2>
          <p>{codimAboutPage.mission}</p>
        </div>
        <div>
          <h2>Visao</h2>
          <p>{codimAboutPage.vision}</p>
        </div>
      </section>

      <section className="about-final-cta" aria-labelledby="about-cta-heading">
        <h2 id="about-cta-heading">{codimAboutPage.finalCta.label}</h2>
        <Link href={codimAboutPage.finalCta.href} className="btn-primary">
          {codimAboutPage.finalCta.label}
        </Link>
      </section>

    </main>
  )
}
