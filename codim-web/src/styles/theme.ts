export const tokens = {
  colors: {
    black: 'var(--codim-black)', // #0A0A0A
    gray: 'var(--codim-gray)', // #1E1E1E
    white: 'var(--codim-white)', // #FFFFFF
    red: 'var(--codim-red)', // #D90429
  },
  radii: {
    sm: '8px',
    md: '12px', // padrão da marca
    lg: '20px',
    xl: '24px',
  },
  shadows: {
    soft: '0 6px 18px rgba(0,0,0,0.25)',
    card: '0 10px 30px rgba(0,0,0,0.25)',
    focusRed: '0 0 0 2px var(--codim-red)',
  },
  fonts: {
    heading: 'Orbitron, ui-sans-serif, system-ui, sans-serif',
    body: 'Inter, ui-sans-serif, system-ui, sans-serif',
  },
  spacing: {
    containerX: '1.5rem',
    sectionY: '5rem',
    heroY: '6rem',
  },
  z: {
    navbar: 50,
    drawer: 100,
    modal: 120,
  },
  // breakpoints espelhando Tailwind (opcional para JS)
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
}

// helper: gera cores que respeitam opacidade do tailwind (text-red/50 etc.)
export function withOpacity(varName: string) {
  return ({ opacityValue }: { opacityValue?: string }) =>
    opacityValue
      ? `rgb(from ${varName} r g b / ${opacityValue})`
      : `rgb(${varName})`
}
