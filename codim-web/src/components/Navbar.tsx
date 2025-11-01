'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { Home, Wrench, Briefcase, FileText, Mail } from 'lucide-react'

import { NAV_LINKS } from '@/data/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // shrink/blur no scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // trava scroll quando drawer abre
  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    if (!open) {
      document.body.style.overflow = ''
      return
    }

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  const closeMenu = useCallback(() => setOpen(false), [])

  return (
    <header
      className={`header-codim ${scrolled ? 'is-scrolled' : ''}`}
      role="banner"
    >
      <div className="navbar-container">
        {/* LOGO (usa arquivo da pasta /public) */}
        <Link href="/" aria-label="Codim — Inicio" className="navbar-logo">
          <span className="navbar-logo-desktop">
            <Image
              src="/Codim_Branco_vermelho.png"
              alt="Codim — Codigo com proposito"
              width={144}
              height={28}
              priority
              style={{ height: 28, width: 'auto' }}
            />
          </span>
          <span className="navbar-logo-mobile">
            <Image
              src="/Icone_Codim_Branco_vermelho.png"
              alt="Codim — Icone"
              width={42}
              height={42}
              priority
              style={{ height: 42, width: 'auto' }}
            />
          </span>
        </Link>

        {/* MENU DESKTOP (central) */}
        <nav className="navbar-menu" aria-label="Principal">
          {NAV_LINKS.slice(0, 4).map((link) => {
            const Icon =
              link.label === 'Inicio'
                ? Home
                : link.label === 'Servicos'
                  ? Wrench
                  : link.label === 'Portfolio'
                    ? Briefcase
                    : FileText
            return (
              <Link key={link.href} href={link.href} className="navbar-link">
                <Icon aria-hidden="true" />
                <span>{link.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* CTA (desktop) + Burger (mobile) */}
        <div className="navbar-cta">
          <Link href="/contato" className="btn-primary navbar-cta-btn">
            Contratar
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className="navbar-burger"
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`drawer-overlay ${open ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* DRAWER MOBILE */}
      <aside
        className={`mobile-drawer ${open ? 'open' : ''}`}
        aria-label="Menu Mobile"
      >
        {/* Logo no topo do drawer */}
        <div className="drawer-header">
          <Image
            src="/Icone_Codim_Branco_vermelho.png"
            alt="Codim"
            width={42}
            height={42}
            style={{ height: 42, width: 'auto' }}
          />
          <button
            onClick={closeMenu}
            aria-label="Fechar menu"
            className="navbar-burger"
          >
            <IconClose />
          </button>
        </div>

        {/* Links empilhados */}
        <div className="drawer-links">
          {NAV_LINKS.map((link) => {
            const Icon =
              link.label === 'Inicio'
                ? Home
                : link.label === 'Servicos'
                  ? Wrench
                  : link.label === 'Portfolio'
                    ? Briefcase
                    : link.label === 'Blog'
                      ? FileText
                      : Mail
            return (
              <Link
                key={link.href}
                href={link.href}
                className="drawer-link"
                onClick={closeMenu}
              >
                <Icon aria-hidden="true" />
                <span>{link.label}</span>
              </Link>
            )
          })}
        </div>

        {/* CTA mobile */}
        <Link href="/contato" className="btn-primary" onClick={closeMenu}>
          Contratar
        </Link>
      </aside>
    </header>
  )
}

function IconMenu() {
  return (
    <svg width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
    </svg>
  )
}
function IconClose() {
  return (
    <svg width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M6.4 4.9 4.9 6.4 10.5 12l-5.6 5.6 1.5 1.5L12 13.5l5.6 5.6 1.5-1.5L13.5 12l5.6-5.6-1.5-1.5L12 10.5 6.4 4.9z" />
    </svg>
  )
}


