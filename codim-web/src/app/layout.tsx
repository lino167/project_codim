import type { ReactNode } from 'react'

import BackgroundParticles from '@/components/BackgroundParticles'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ThemeProvider from '@/components/ThemeProvider'

import './globals.css'
import '@/styles/theme.css'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning data-theme="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var key='codim:theme';var stored=localStorage.getItem(key);var theme=stored===null?null:stored.trim();if(theme!=='light'&&theme!=='dark'){theme=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}if(!theme){theme='dark';}document.documentElement.setAttribute('data-theme',theme);localStorage.setItem(key,theme);}catch(error){document.documentElement.setAttribute('data-theme','dark');}})();",
          }}
        />
      </head>
      <body className="bg-black text-white antialiased">
        <ThemeProvider>
          <BackgroundParticles />
          <div className="app-shell">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
