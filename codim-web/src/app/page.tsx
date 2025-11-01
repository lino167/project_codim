import Link from 'next/link'

import { codimHome, codimIdentity } from '@/content/codim'

const CTA_VARIANT_CLASSES: Record<string, string> = {
  primary: 'btn-primary',
  secondary: 'btn-outline',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
  link: 'btn-link',
}

type Cta = {
  label: string
  href: string
  variant?: keyof typeof CTA_VARIANT_CLASSES
}

function CtaButton({ label, href, variant = 'primary' }: Cta) {
  const className = CTA_VARIANT_CLASSES[variant] ?? CTA_VARIANT_CLASSES.primary
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  )
}

export default function HomePage() {
  return (
    <main className='home-page'>
      <section className='hero' aria-labelledby='hero-heading'>
        <div className='hero-grid'>
          <div className='hero-content'>
            <span className='hero-eyebrow'>{codimIdentity.slogan}</span>
            <h1 id='hero-heading'>{codimHome.hero.title}</h1>
            <p className='hero-lead'>{codimHome.hero.description}</p>
            <div className='hero-actions'>
              {codimHome.hero.ctas.map((cta) => (
                <CtaButton key={cta.href} {...cta} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='page-section home-about' aria-labelledby='home-about-title'>
        <div className='section-intro'>
          <h2 id='home-about-title'>{codimHome.aboutPreview.title}</h2>
          {codimHome.aboutPreview.text.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className='cta-group'>
          <CtaButton {...codimHome.aboutPreview.cta} variant='link' />
        </div>
      </section>

      <section
        id='servicos'
        className='page-section services-overview'
        aria-labelledby='services-title'
      >
        <div className='section-intro'>
          <span className='section-pill'>Servicos</span>
          <h2 id='services-title'>{codimHome.servicesOverview.title}</h2>
          <p>{codimHome.servicesOverview.description}</p>
        </div>
        <div className='grid-cards'>
          {codimHome.servicesOverview.items.map((item) => (
            <article key={item.title} className='card'>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <div className='cta-group'>
          <CtaButton {...codimHome.servicesOverview.cta} />
        </div>
      </section>

      <section className='page-section portfolio-highlight' aria-labelledby='portfolio-title'>
        <div className='section-intro'>
          <span className='section-pill'>Portfolio</span>
          <h2 id='portfolio-title'>{codimHome.portfolioHighlight.title}</h2>
          <p>{codimHome.portfolioHighlight.description}</p>
        </div>
        <div className='cta-group'>
          <CtaButton {...codimHome.portfolioHighlight.cta} />
        </div>
      </section>

      <section className='page-section home-testimonials' aria-labelledby='testimonials-title'>
        <div className='section-intro'>
          <span className='section-pill'>Depoimentos</span>
          <h2 id='testimonials-title'>{codimHome.testimonials.title}</h2>
        </div>
        <div className='testimonials-grid simple'>
          {codimHome.testimonials.quotes.map((quote) => (
            <blockquote key={quote} className='testimonial-card subtle'>
              {quote}
            </blockquote>
          ))}
        </div>
      </section>

      <section className='cta-final' aria-labelledby='home-cta-title'>
        <h2 id='home-cta-title'>{codimHome.finalCta.title}</h2>
        <p>{codimHome.finalCta.description}</p>
        <div className='cta-final-actions'>
          {codimHome.finalCta.ctas.map((cta) => (
            <CtaButton key={cta.href} {...cta} />
          ))}
        </div>
      </section>
    </main>
  )
}
