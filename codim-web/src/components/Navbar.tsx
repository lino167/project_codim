// components/Navbar.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detecta scroll para ajustar opacidade
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Verifica posição inicial

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  // Trava o scroll quando o drawer está aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const nav = [
    { href: '/#servicos', label: 'Serviços' },
    { href: '/portfolio', label: 'Portfólio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contato', label: 'Contato' },
  ]

  return (
    <header
      className={`
        sticky top-0 z-50
        ${scrolled ? 'bg-[#0A0A0A]/95' : 'bg-[#0A0A0A]/85'} 
        backdrop-blur transition-colors duration-200
        border-b border-white/10
      `}
      role="banner"
    >
      <div className="mx-auto max-w-[1280px] h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Marca */}
        <Link
          href="/"
          aria-label="Codim — Início"
          className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D90429] rounded-md"
        >
          <LogoCodim className="h-7 w-auto" />
        </Link>

        {/* Navegação desktop */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D90429] rounded-md px-2 py-1"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="
              inline-flex items-center gap-2
              rounded-xl bg-[#D90429] px-4 py-2 text-sm font-medium text-white
              hover:bg-white hover:text-black transition-colors
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D90429]
            "
            aria-label="Contratar nossos serviços"
          >
            Contratar
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>

        {/* Botão mobile */}
        <button
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="
            md:hidden inline-flex items-center justify-center
            p-2 rounded-md text-white/85 hover:text-white hover:bg-white/5
            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D90429]
            transition-colors
          "
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Drawer mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* backdrop */}
        <div
          className={`
            fixed inset-0 bg-black/60 transition-opacity duration-200
            ${open ? 'opacity-100' : 'opacity-0'}
          `}
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
        {/* painel */}
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`
            fixed top-0 right-0 bottom-0 w-[84%] max-w-sm
            bg-[#0A0A0A] border-l border-white/10
            transition-transform duration-200 ease-out
            ${open ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="h-16 px-4 flex items-center justify-between border-b border-white/10">
            <LogoCodim className="h-6 w-auto" />
            <button
              aria-label="Fechar menu"
              className="
                p-2 rounded-md text-white/85 hover:text-white hover:bg-white/5
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D90429]
                transition-colors
              "
              onClick={() => setOpen(false)}
            >
              <IconClose />
            </button>
          </div>

          <nav className="px-3 py-3" aria-label="Principal (mobile)">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="
                      block rounded-lg px-3 py-3
                      text-white/90 hover:text-white hover:bg-white/5
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D90429]
                      transition-colors
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contato"
              onClick={() => setOpen(false)}
              className="
                mt-4 inline-flex items-center gap-2
                rounded-xl bg-[#D90429] px-4 py-2 text-sm font-medium text-white
                hover:bg-white hover:text-black transition-colors
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D90429]
              "
              aria-label="Contratar nossos serviços"
            >
              Contratar <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </aside>
      </div>
    </header>
  )
}

/* ====== Logo (branca com “O” vermelho) — SVG inline para LCP baixo ====== */
function LogoCodim({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 120"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="CODIM — Código com propósito"
    >
      {/* C */}
      <path
        d="M90 25 H60 C45 25 35 35 35 50 v20 c0 15 10 25 25 25 h30 v-18 H62 c-7 0-12-5-12-12 V60 c0-7 5-12 12-12 h28 V25 Z"
        fill="#FFFFFF"
      />
      {/* O (anel) */}
      <circle cx="160" cy="67" r="36" fill="#FFFFFF" />
      <circle cx="160" cy="67" r="22" fill="#0A0A0A" />
      {/* corte/energia do O */}
      <path d="M138 86 L182 42 L192 52 L148 96 Z" fill="#D90429" />
      {/* D */}
      <path
        d="M210 25 H240 c24 0 44 18 44 42 s-20 43-44 43 h-30 V25 Z M240 92 c16 0 28-12 28-25 s-12-24-28-24 h-16 v49 h16 Z"
        fill="#FFFFFF"
      />
      {/* I */}
      <rect x="305" y="25" width="20" height="85" rx="8" fill="#FFFFFF" />
      {/* M */}
      <path
        d="M350 110 V25 h20 l28 40 28-40 h20 v85 h-18 V57 l-30 41 -30-41 v53 h-18 Z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

/* ====== Ícones (sem dependências) ====== */
function IconMenu({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
    </svg>
  )
}
function IconClose({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M6.4 4.9 4.9 6.4 10.5 12l-5.6 5.6 1.5 1.5L12 13.5l5.6 5.6 1.5-1.5L13.5 12l5.6-5.6-1.5-1.5L12 10.5 6.4 4.9z" />
    </svg>
  )
}
function ArrowRight({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
    </svg>
  )
}
