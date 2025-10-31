import Link from 'next/link'
import { codimIdentity, codimHero, codimFounderSection, codimServices, codimPortfolio, codimBlog, codimTestimonials, codimFinalCta } from '@/content/codim'

const CTA_VARIANT_CLASSES: Record<string, string> = {
  primary: 'btn-primary',
  secondary: 'btn-outline',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
  tertiary: 'btn-link',
}

type Cta = {
  label: string
  href: string
  variant?: string
}

function CtaButton({ label, href, variant = 'primary' }: Cta) {
  const className = CTA_VARIANT_CLASSES[variant] ?? 'btn-outline'
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  )
}

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="hero-eyebrow">{codimIdentity.slogan}</span>
            <h1 id="hero-heading">{codimHero.title}</h1>
            <h2 className="hero-subtitle">{codimHero.subtitle}</h2>
            <p className="hero-lead">{codimHero.description}</p>
            <div className="hero-actions">
              {codimHero.ctas
                .filter((cta) => cta.variant !== 'tertiary')
                .map((cta) => (
                  <CtaButton key={cta.href} {...cta} />
                ))}
            </div>
            <div className="hero-tertiary">
              {codimHero.ctas
                .filter((cta) => cta.variant === 'tertiary')
                .map((cta) => (
                  <Link key={cta.href} href={cta.href} className="hero-link">
                    {cta.label}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" aria-labelledby="about-heading">
        <div className="about-content">
          <h2 id="about-heading">{codimFounderSection.title}</h2>
          <p>{codimFounderSection.description}</p>
          <div className="about-values">
            {codimFounderSection.values.map((value) => (
              <article key={value.title} className="about-value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
          <div className="about-actions">
            {codimFounderSection.ctas.map((cta) => (
              <CtaButton key={cta.href} {...cta} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section" aria-labelledby="services-heading">
        <header className="services-header">
          <span className="section-pill">Servicos</span>
          <h2 id="services-heading">{codimServices.title}</h2>
          <p>{codimServices.subtitle}</p>
        </header>
        <div className="services-grid">
          {codimServices.categories.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
        <div className="services-actions">
          {codimServices.ctas.map((cta) => (
            <CtaButton key={cta.href} {...cta} />
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        className="portfolio-section"
        aria-labelledby="portfolio-heading"
      >
        <header className="portfolio-header">
          <span className="section-pill">Portfolio</span>
          <h2 id="portfolio-heading">{codimPortfolio.title}</h2>
          <p>{codimPortfolio.description}</p>
        </header>
        <div className="portfolio-grid">
          {codimPortfolio.items.map((item) => (
            <article key={item.name} className="portfolio-card">
              <div className="portfolio-card-tag">{item.tag}</div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <div className="portfolio-actions">
          {codimPortfolio.ctas.map((cta) => (
            <CtaButton key={cta.href} {...cta} />
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section className="blog-section" aria-labelledby="blog-heading">
        <div className="blog-content">
          <span className="section-pill">Conteudo</span>
          <h2 id="blog-heading">{codimBlog.title}</h2>
          <p>{codimBlog.description}</p>
          <div className="blog-actions">
            {codimBlog.ctas.map((cta) => (
              <CtaButton key={cta.href} {...cta} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="testimonials-section"
        aria-labelledby="testimonials-heading"
      >
        <header className="testimonials-header">
          <span className="section-pill">Resultados</span>
          <h2 id="testimonials-heading">{codimTestimonials.title}</h2>
        </header>
        <div className="testimonials-grid">
          {codimTestimonials.items.map((item, index) => (
            <article
              key={`${item.author}-${index}`}
              className="testimonial-card"
            >
              <p className="testimonial-quote">“{item.quote}”</p>
              <p className="testimonial-author">— {item.author}</p>
            </article>
          ))}
        </div>
        <div className="testimonials-action">
          <CtaButton {...codimTestimonials.cta} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-final" aria-labelledby="cta-heading">
        <h2 id="cta-heading">{codimFinalCta.title}</h2>
        <p>{codimFinalCta.subtitle}</p>
        <div className="cta-final-actions">
          {codimFinalCta.ctas.map((cta) => (
            <CtaButton key={cta.href} {...cta} />
          ))}
        </div>
      </section>

    </main>
  )
}