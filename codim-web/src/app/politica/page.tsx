import { codimPrivacy } from '@/content/codim'

export const metadata = {
  title: 'Politica de Privacidade - Codim',
  description: 'Entenda como a Codim coleta, armazena e protege dados de usuarios.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className='policy-page'>
      <section className='policy-hero' aria-labelledby='policy-title'>
        <span className='section-pill'>Transparencia</span>
        <h1 id='policy-title'>{codimPrivacy.title}</h1>
        <p>{codimPrivacy.intro}</p>
      </section>

      <section className='policy-content' aria-labelledby='policy-sections'>
        <h2 id='policy-sections' className='visually-hidden'>
          Secoes da politica de privacidade
        </h2>
        <div className='policy-grid'>
          {codimPrivacy.sections.map((section) => (
            <article key={section.title} className='policy-card'>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </article>
          ))}
        </div>

        <footer className='policy-footer'>
          <p>
            Em caso de duvidas ou solicitacoes, escreva para{' '}
            <a href={`mailto:${codimPrivacy.contact}`}>{codimPrivacy.contact}</a>.
          </p>
        </footer>
      </section>
    </main>
  )
}

