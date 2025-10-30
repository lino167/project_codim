'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 border-b border-codim-gray/30 backdrop-blur ${scrolled ? 'bg-codim-black/90' : 'bg-codim-black/80'}`}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-16 py-3 flex items-center justify-between">
        <Link href="/" aria-label="Ir para Home" className="flex items-center gap-2">
          <Image
            src="/Codim_Branco_vermelho.png"
            alt="Logo Codim branca e vermelha"
            width={140}
            height={32}
            priority
            sizes="(max-width: 768px) 120px, 140px"
          />
          <span className="text-lg font-semibold">Codim</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-codim-red transition-colors">
            Home
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-codim-red transition-colors"
          >
            Portfólio
          </Link>
          <Link href="/blog" className="hover:text-codim-red transition-colors">
            Blog
          </Link>
          <Link
            href="/contato"
            className="hover:text-codim-red transition-colors"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}
