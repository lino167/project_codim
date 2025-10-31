'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type Theme = 'dark' | 'light'

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

type ProviderProps = {
  children: ReactNode
}

export default function ThemeProvider({ children }: ProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof document === 'undefined') {
      return 'dark'
    }

    const attr = document.documentElement.getAttribute('data-theme')
    return attr === 'light' || attr === 'dark' ? attr : 'dark'
  })

  useEffect(() => {
    applyTheme(theme)

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, theme)
    }
  }, [theme])

  const setTheme = useCallback((value: Theme) => {
    setThemeState(value)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((previous) => (previous === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme, setTheme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

const STORAGE_KEY = 'codim:theme'

function applyTheme(value: Theme) {
  if (typeof document === 'undefined') {
    return
  }

  document.documentElement.setAttribute('data-theme', value)
}

function useThemeContext() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('Theme components must be used within ThemeProvider')
  }

  return context
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <button
      className="rounded-md px-3 py-2 border border-white/10 text-sm"
      onClick={toggleTheme}
      type="button"
    >
      {theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
    </button>
  )
}
