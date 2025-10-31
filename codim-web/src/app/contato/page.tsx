import Link from 'next/link'

import { codimContactPage } from '@/content/codim'

export const metadata = {
  title: 'Contato - Codim',
  description: codimContactPage.subtitle,
}

export default function ContactPage() {
  return (
    <main className='contact-page'>
      <section className='contact-hero' aria-labelledby='contact-title'>
        <span className='section-pill'>Contato</span>
        <h1 id='contact-title'>{codimContactPage.title}</h1>
        <p>{codimContactPage.subtitle}</p>
        <Link href={codimContactPage.cta.href} className='btn-primary'>
          {codimContactPage.cta.label}
        </Link>
      </section>

      <section className='contact-grid' aria-labelledby='contact-channels'>
        <div>
          <h2 id='contact-channels'>Canais diretos</h2>
          <ul className='contact-channels'>
            {codimContactPage.channels.map((channel) => (
              <li key={channel.href}>
                <span>{channel.label}</span>
                <Link href={channel.href}>{channel.value}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Como trabalhamos</h2>
          <div className='contact-steps'>
            {codimContactPage.steps.map((step) => (
              <article key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
