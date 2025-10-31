import Link from 'next/link'

import {
  Linkedin,
  Github,
  MessageCircle,
  Briefcase,
  Wrench,
  FileText,
  Mail,
  ShieldCheck,
  Home,
} from 'lucide-react'

import { codimFooter, codimHero, codimIdentity } from '@/content/codim'
import { NAV_LINKS } from '@/data/navigation'

const quickLinkIcons = {
  Portfolio: Briefcase,
  Servicos: Wrench,
  Blog: FileText,
  Contato: Mail,
  'Politica de Privacidade': ShieldCheck,
} as const

const pageLinkIcons = {
  Inicio: Home,
  Servicos: Wrench,
  Portfolio: Briefcase,
  Blog: FileText,
  Contato: Mail,
} as const

const socialIcons = {
  LinkedIn: Linkedin,
  GitHub: Github,
  WhatsApp: MessageCircle,
} as const

export default function Footer() {
  const year = String(new Date().getFullYear())

  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div>
          <span className='footer-pill'>{codimIdentity.slogan}</span>
          <h3>{codimFooter.tagline}</h3>
          <p className='footer-summary'>{codimHero.description}</p>
        </div>
        <div className='footer-cta'>
          <Link href='/contato' className='btn-primary'>
            Iniciar projeto
          </Link>
          <Link href='/portfolio' className='btn-outline'>
            Ver portfolio
          </Link>
        </div>
      </div>

      <div className='footer-columns'>
        <div className='footer-column'>
          <span className='footer-label'>Explore</span>
          <ul>
            {codimFooter.quickLinks.map((link) => {
              const Icon = quickLinkIcons[link.label as keyof typeof quickLinkIcons] ?? ShieldCheck
              return (
                <li key={link.href}>
                  <Link href={link.href} className='footer-link-with-icon'>
                    <Icon aria-hidden='true' />
                    <span>{link.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className='footer-column'>
          <span className='footer-label'>Paginas</span>
          <ul>
            {NAV_LINKS.map((link) => {
              const Icon = pageLinkIcons[link.label as keyof typeof pageLinkIcons] ?? FileText
              return (
                <li key={link.href}>
                  <Link href={link.href} className='footer-link-with-icon'>
                    <Icon aria-hidden='true' />
                    <span>{link.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className='footer-column'>
          <span className='footer-label'>Conectar</span>
          <ul className='footer-social'>
            {codimFooter.social.map((link) => {
              const Icon = socialIcons[link.label as keyof typeof socialIcons] ?? MessageCircle
              return (
                <li key={link.href}>
                  <Link href={link.href} className='footer-social-link'>
                    <Icon aria-hidden='true' />
                    <span>{link.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className='footer-meta'>
        <span>{codimFooter.credit}</span>
        <span>{codimFooter.legal.replace('{{year}}', year)}</span>
      </div>
    </footer>
  )
}
