import { codimContactPage } from '@/content/codim'

export const metadata = {
  title: 'Contato - Codim',
  description:
    'Entre em contato com a Codim e transforme sua ideia em um projeto digital de alto impacto.',
}

export default function ContactPage() {
  const { hero, form, direct, finalCall } = codimContactPage

  return (
    <main className='contact-page'>
      <section className='contact-hero' aria-labelledby='contact-title'>
        <span className='section-pill'>Contato</span>
        <h1 id='contact-title'>{hero.title}</h1>
        <p>{hero.subtitle}</p>
      </section>

      <section className='contact-grid' aria-labelledby='contact-form-title'>
        <form
          className='contact-form'
          id='contact-form'
          action={form.action}
          method='post'
          encType='multipart/form-data'
        >
          <h2 id='contact-form-title'>Briefing rapido</h2>
          <div className='contact-form-fields'>
            {form.fields.map((field) => {
              if (field.type === 'textarea') {
                return (
                  <label key={field.name} className='contact-form-field'>
                    <span>{field.label}</span>
                    <textarea
                      name={field.name}
                      required={Boolean(field.required)}
                      rows={4}
                    />
                  </label>
                )
              }

              if (field.type === 'select') {
                return (
                  <label key={field.name} className='contact-form-field'>
                    <span>{field.label}</span>
                    <select
                      name={field.name}
                      required={Boolean(field.required)}
                      defaultValue=''
                    >
                      {field.options?.map((option, index) => (
                        <option
                          key={option}
                          value={index === 0 ? '' : option}
                          disabled={index === 0}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                )
              }

              return (
                <label key={field.name} className='contact-form-field'>
                  <span>{field.label}</span>
                  <input
                    type={field.type}
                    name={field.name}
                    required={Boolean(field.required)}
                  />
                </label>
              )
            })}
          </div>
          <button type='submit' className='btn-primary contact-submit'>
            {form.submitLabel}
          </button>
        </form>

        <aside className='contact-sidebar'>
          <div className='contact-direct'>
            <h2>Canais diretos</h2>
            <ul>
              {direct.map((item) => (
                <li key={item.href}>
                  <span>{item.label}</span>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='contact-final'>
            <h3>{finalCall.title}</h3>
            <p>{finalCall.description}</p>
            <a
              href={finalCall.cta.href}
              className='btn-outline'
              target={finalCall.cta.href.startsWith('http') ? '_blank' : undefined}
              rel={finalCall.cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {finalCall.cta.label}
            </a>
          </div>
        </aside>
      </section>
    </main>
  )
}
