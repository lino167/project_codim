export type NavLink = {
  href: string
  label: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicos', href: '/servicos' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]
