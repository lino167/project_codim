export const codimIdentity = {
  slogan: 'Codigo com proposito.',
  tagline:
    'Transformamos ideias em software funcional, escalavel e inteligente.',
}

export const codimHero = {
  title: 'Codim - Tecnologia com proposito.',
  subtitle:
    'Desenvolvimento de sistemas, sites e automacoes inteligentes que unem design, performance e proposito.',
  description:
    'Criamos solucoes digitais sob medida para startups, profissionais e empresas que buscam escalar com tecnologia solida e interfaces que encantam.',
  ctas: [
    { label: 'Solicitar proposta', href: '/contato', variant: 'primary' },
    {
      label: 'Ver portfolio completo',
      href: '/portfolio',
      variant: 'secondary',
    },
    { label: 'Conheca o fundador', href: '/sobre', variant: 'tertiary' },
  ],
}

export const codimFounderSection = {
  title: 'Por tras da Codim existe proposito - e codigo.',
  description:
    'Sou Zacarias Lino Ramos Filho, desenvolvedor full stack e fundador da Codim. Minha missao e criar software com proposito: solucoes que combinam engenharia, design e experiencia do usuario. Trabalho com stacks modernas como React, Next.js, TailwindCSS, Node.js e Supabase para entregar SaaS completos, automacoes e plataformas robustas.',
  values: [
    {
      title: 'Engenharia solida',
      description: 'Performance e escalabilidade desde o primeiro commit.',
    },
    {
      title: 'Design funcional',
      description: 'Interfaces pensadas para pessoas, nao apenas pixels.',
    },
    {
      title: 'Proposito real',
      description:
        'Tecnologia que simplifica processos e gera impacto verdadeiro.',
    },
  ],
  ctas: [
    {
      label: 'Conectar no LinkedIn',
      href: 'https://www.linkedin.com/in/zacariaslino',
      variant: 'primary',
    },
    {
      label: 'Ler minha historia completa',
      href: '/sobre',
      variant: 'secondary',
    },
  ],
}

export const codimServices = {
  title: 'Do conceito ao deploy - tudo em um so lugar.',
  subtitle:
    'A Codim entrega produtos digitais completos, com tecnologia moderna, foco em UX e manutencao continua.',
  categories: [
    {
      title: 'Sistemas Web e SaaS',
      description:
        'Desenvolvimento full stack escalavel com React, Node.js e bancos relacionais.',
    },
    {
      title: 'Aplicacoes e PWA',
      description:
        'Apps performaticos e responsivos que funcionam em qualquer dispositivo.',
    },
    {
      title: 'APIs e Automacoes',
      description:
        'Integracoes com ERPs, CRMs, bots e fluxos automatizados de dados.',
    },
    {
      title: 'Design e Prototipagem',
      description:
        'Interfaces modernas no Figma, com design system proprio e foco em UX.',
    },
  ],
  ctas: [
    { label: 'Explorar servicos', href: '/servicos', variant: 'primary' },
    {
      label: 'Solicitar proposta personalizada',
      href: '/contato',
      variant: 'secondary',
    },
  ],
}

export const codimPortfolio = {
  title: 'Projetos que contam historias atraves do codigo.',
  description:
    'Cada projeto desenvolvido pela Codim reflete a nossa filosofia: unir design, engenharia e proposito.',
  items: [
    {
      name: 'Kairos',
      tag: 'Inteligencia artificial',
      description:
        'IA para apostas esportivas com pipelines de dados em tempo real.',
    },
    {
      name: 'Kraflo',
      tag: 'Analytics',
      description: 'Plataforma de analise estatistica para trading esportivo.',
    },
    {
      name: 'OS Manager',
      tag: 'Automacao',
      description: 'Sistema de ordens de servico com Supabase e modo offline.',
    },
  ],
  ctas: [
    { label: 'Ver todos os projetos', href: '/portfolio', variant: 'primary' },
    { label: 'Agendar demonstracao', href: '/contato', variant: 'secondary' },
  ],
}

export const codimBlog = {
  title: 'Insights sobre tecnologia, design e o futuro digital.',
  description:
    'Compartilho aprendizagens sobre desenvolvimento moderno, UI/UX e engenharia de software para inspirar devs, criadores e empreendedores.',
  ctas: [
    { label: 'Ler artigos recentes', href: '/blog', variant: 'primary' },
    {
      label: 'Assinar newsletter Codim',
      href: '/newsletter',
      variant: 'secondary',
    },
  ],
}

export const codimAboutPage = {
  heroTitle: 'Por tras da Codim existe proposito - e codigo.',
  heroSubtitle: 'Conheca quem lidera a Codim e o que nos move.',
  heroCta: { label: 'Entrar em contato', href: '/contato' },
  bio: [
    'Sou Zacarias Lino Ramos Filho, fundador e desenvolvedor full stack da Codim.',
    'Minha missao e transformar ideias em software solido, visualmente elegante e orientado a resultados.',
    'Acredito que cada linha de codigo deve carregar proposito e que tecnologia pode ser arte aplicada a resolver problemas reais.',
  ],
  stack: [
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express', 'NestJS', 'Supabase', 'PostgreSQL'],
    },
    {
      title: 'Infraestrutura',
      items: ['Docker', 'CI/CD', 'Vercel'],
    },
    {
      title: 'Design',
      items: ['Figma', 'UI Systems', 'Prototipagem'],
    },
  ],
  values: [
    { icon: '[T]', title: 'Transparencia', description: 'Codigo e processos claros.' },
    { icon: '[P]', title: 'Performance real', description: 'Software rapido e seguro.' },
    { icon: '[D]', title: 'Design funcional', description: 'Estetica a servico da experiencia.' },
    { icon: '[E]', title: 'Evolucao continua', description: 'Aprendizado e inovacao constante.' },
  ],
  mission: 'Construir software com proposito, transformando complexidade em simplicidade funcional.',
  vision:
    'Ser referencia em solucoes digitais inteligentes no Brasil, unindo design e engenharia.',
  finalCta: { label: 'Vamos conversar sobre seu projeto', href: '/contato' },
}

export const codimTestimonials = {
  title: 'Resultados reais, confianca construida.',
  items: [
    {
      quote:
        'Excelente experiencia! Entregou o projeto com alta performance e visual impecavel.',
      author: 'Cliente StartupTech',
    },
    {
      quote:
        'Automatizamos processos internos em 3 dias com a Codim. Mudou nossa rotina.',
      author: 'Empresa do setor textil',
    },
    {
      quote: 'A Codim conseguiu unir performance e estetica de forma rara.',
      author: 'Agencia parceira',
    },
  ],
  cta: { label: 'Ver mais avaliacoes', href: '/depoimentos' },
}

export const codimFinalCta = {
  title: 'Pronto para transformar sua ideia em software real?',
  subtitle:
    'Vamos desenvolver juntos um projeto que una tecnologia, design e proposito.',
  ctas: [
    { label: 'Comecar projeto agora', href: '/contato', variant: 'primary' },
    {
      label: 'Falar no WhatsApp',
      href: 'https://wa.me/5599999999999',
      variant: 'outline',
    },
    { label: 'Responder briefing rapido', href: '/briefing', variant: 'ghost' },
  ],
}

export const codimFooter = {
  legal: '(c) {{year}} Codim - Codigo com proposito.',
  credit: 'Desenvolvido por Zacarias Lino Ramos Filho.',
  tagline: 'Solucoes digitais com design, engenharia e proposito.',
  quickLinks: [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Servicos', href: '/servicos' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contato', href: '/contato' },
    { label: 'Politica de Privacidade', href: '/privacidade' },
  ],
  social: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/zacarias-lino-ramos-filho-5203b61a2/',
    },
    { label: 'GitHub', href: 'https://github.com/lino167' },
    { label: 'WhatsApp', href: 'https://wa.me/5547996496281' },
  ],
}


export const codimBlogPosts = [
  {
    title: 'Como construir SaaS com proposito',
    summary: 'Processo de discovery ate deploy com stacks modernas.',
    href: '#',
    date: '2024'
  },
  {
    title: 'Design systems praticos para equipes pequenas',
    summary: 'Estruturando componentes e tokens em projetos enxutos.',
    href: '#',
    date: '2024'
  },
  {
    title: 'Automacoes que economizam tempo',
    summary: 'Integre ERPs, CRMs e bots para eliminar tarefas repetitivas.',
    href: '#',
    date: '2024'
  }
]

export const codimContactPage = {
  title: 'Vamos conversar sobre seu projeto',
  subtitle: 'Preencha o briefing ou fale diretamente comigo para entender o escopo e o investimento ideal.',
  channels: [
    { label: 'E-mail', value: 'hello@codim.dev', href: 'mailto:hello@codim.dev' },
    { label: 'WhatsApp', value: '+55 47 99649-6281', href: 'https://wa.me/5547996496281' },
    { label: 'LinkedIn', value: '/in/zacariaslino', href: 'https://www.linkedin.com/in/zacarias-lino-ramos-filho-5203b61a2/' }
  ],
  steps: [
    { title: '1. Briefing', description: 'Entendemos o contexto do negocio e requisitos tecnicos.' },
    { title: '2. Proposta', description: 'Entrega de escopo, cronograma e investimento.' },
    { title: '3. Execucao', description: 'Squad enxuto desenvolvendo com entregas iterativas.' }
  ],
  cta: { label: 'Iniciar conversa', href: '/contato#form' }
}

export const codimMetaDescriptions = {
  home: 'Codim - estudio de tecnologia e design. Desenvolvimento de sistemas, sites e aplicacoes com proposito, performance e estilo.',
  about:
    'Conheca Zacarias Lino, fundador da Codim. Desenvolvedor full stack e criador de solucoes digitais com foco em design e performance.',
  portfolio:
    'Projetos criados pela Codim - software e design em harmonia. Veja estudos de caso, aplicacoes e SaaS construidos com proposito.',
  blog: 'Artigos, tutoriais e reflexoes sobre tecnologia, design e o futuro do desenvolvimento.',
  contact:
    'Entre em contato com a Codim e transforme sua ideia em um projeto digital de alto impacto.',
}
