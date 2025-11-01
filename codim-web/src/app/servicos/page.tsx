import Link from 'next/link'

import { codimServicesPage } from '@/content/codim'

const CTA_VARIANTS: Record<string, string> = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
  link: 'btn-link',
}

type Cta = {
  label: string
  href: string
  variant?: keyof typeof CTA_VARIANTS
}

export const metadata = {
  title: 'Servicos - Codim',
  description:
    'Solucoes digitais completas em desenvolvimento web, design e automacao para impulsionar o seu produto.',
}

function CtaButton({ label, href, variant = 'primary' }: Cta) {
  const className = CTA_VARIANTS[variant] ?? CTA_VARIANTS.primary
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  )
}

export default function ServicesPage() {
  return (
    <main className='services-page'>
      <section className='services-section' aria-labelledby='services-hero'>
        <div className='services-header'>
          <span className='section-pill'>Servicos</span>
          <h1 id='services-hero'>{codimServicesPage.hero.title}</h1>
          <p>{codimServicesPage.hero.subtitle}</p>
        </div>

        <div className='services-grid'>
          {codimServicesPage.services.map((service) => (
            <article key={service.title} className='service-card'>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className='services-actions'>
          {codimServicesPage.finalCta.ctas.map((cta) => (
            <CtaButton key={cta.href} {...cta} />
          ))}
        </div>
      </section>
    </main>
  )
}
