import { css, keyframes, styled } from "@/styles";

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeUp = keyframes({
  from: { opacity: 0, transform: 'translateY(24px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const pulseGlow = keyframes({
  '0%, 100%': { boxShadow: '0 0 0 0 rgba(232, 168, 56, 0)' },
  '50%': { boxShadow: '0 0 24px 4px rgba(232, 168, 56, 0.15)' },
});

// Orb flutuante do background do hero
const orbFloat1 = keyframes({
  '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
  '33%': { transform: 'translate(40px, -30px) scale(1.08)' },
  '66%': { transform: 'translate(-25px, 20px) scale(0.94)' },
});

const orbFloat2 = keyframes({
  '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
  '40%': { transform: 'translate(-50px, 35px) scale(1.12)' },
  '75%': { transform: 'translate(30px, -15px) scale(0.9)' },
});

// Linha de scan que desce no load
const scanDown = keyframes({
  '0%': { top: '0%', opacity: 0 },
  '5%': { opacity: 0.6 },
  '85%': { top: '100%', opacity: 0.4 },
  '100%': { top: '100%', opacity: 0 },
});

// Anel pulsando para fora do retrato
const ringPulse = keyframes({
  '0%': { transform: 'scale(1)', opacity: 0.5 },
  '100%': { transform: 'scale(1.18)', opacity: 0 },
});

// Shimmer nos tech badges
const shimmer = keyframes({
  '0%': { backgroundPosition: '-200% center' },
  '100%': { backgroundPosition: '200% center' },
});

// Stagger para linhas do hero
const revealLine = keyframes({
  from: { opacity: 0, transform: 'translateY(20px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
});

// ─── Page wrapper ─────────────────────────────────────────────────────────────

export const PageWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: '#000000',
  overflowX: 'hidden',
});

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HeroSection = styled('section', {
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: 72,

  // Dot grid
  backgroundImage: `radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)`,
  backgroundSize: '40px 40px',

  // Orb 1 — esquerda superior
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '10%',
    left: '5%',
    width: 600,
    height: 600,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(232, 168, 56, 0.05) 0%, transparent 70%)',
    animation: `${orbFloat1} 14s ease-in-out infinite`,
    pointerEvents: 'none',
    zIndex: 0,
  },

  // Orb 2 — direita inferior
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '5%',
    right: '0%',
    width: 500,
    height: 500,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(232, 168, 56, 0.04) 0%, transparent 70%)',
    animation: `${orbFloat2} 18s ease-in-out infinite`,
    pointerEvents: 'none',
    zIndex: 0,
  },

  // Linha de scan (one-shot no load)
  '.scanLine': {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    background: 'linear-gradient(to right, transparent, rgba(232,168,56,0.4), transparent)',
    animation: `${scanDown} 2.2s ease-out 0.3s forwards`,
    opacity: 0,
    zIndex: 1,
    pointerEvents: 'none',
  },

  '.heroInner': {
    width: '100%',
    maxWidth: 1200,
    margin: '0 auto',
    padding: '80px 80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 60,

    '@bp3': {
      flexDirection: 'column-reverse',
      padding: '60px 28px 80px',
      gap: 40,
    },

    '@cel1': {
      padding: '48px 20px 72px',
    },
  },

  '.heroLeft': {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    maxWidth: 600,
    position: 'relative',
    zIndex: 2,

    // Cada filho anima em sequência
    '& > *': {
      opacity: 0,
      animation: `${revealLine} 0.7s ease forwards`,
    },
    '& > *:nth-child(1)': { animationDelay: '0.1s' },
    '& > *:nth-child(2)': { animationDelay: '0.25s' },
    '& > *:nth-child(3)': { animationDelay: '0.4s' },
    '& > *:nth-child(4)': { animationDelay: '0.55s' },
    '& > *:nth-child(5)': { animationDelay: '0.7s' },
    '& > *:nth-child(6)': { animationDelay: '0.85s' },
  },

  '.availabilityBadge': {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.7rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#9090A8',
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '7px 14px',
    borderRadius: 100,
    marginBottom: 28,
    width: 'fit-content',

    '&::before': {
      content: '""',
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: '#E8A838',
      flexShrink: 0,
      animation: `${pulseGlow} 2.5s ease-in-out infinite`,
    },
  },

  '.heroTitle': {
    fontFamily: "'Syne', sans-serif",
    fontSize: 'clamp(2.6rem, 6vw, 5rem)',
    fontWeight: 800,
    lineHeight: 1.0,
    letterSpacing: '-1.5px',
    color: '#F0F0F5',
    marginBottom: 8,

    '.accent': {
      background: 'linear-gradient(100deg, #E8A838 0%, #F0C060 40%, #E8A838 60%, #C08020 100%)',
      backgroundSize: '200% auto',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: `${shimmer} 4s linear infinite`,
    },
  },

  '.heroRole': {
    fontFamily: "'DM Mono', monospace",
    fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
    color: '#5C5C70',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    marginBottom: 28,
    display: 'flex',
    alignItems: 'center',
    gap: 8,

    // Dot de status pulsante
    '&::before': {
      content: '""',
      display: 'inline-block',
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: '#E8A838',
      boxShadow: '0 0 8px rgba(232, 168, 56, 0.8)',
      animation: `${pulseGlow} 2s ease-in-out infinite`,
      flexShrink: 0,
    },
  },

  '.heroDesc': {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 'clamp(1rem, 1.8vw, 1.1rem)',
    color: '#9090A8',
    lineHeight: 1.75,
    marginBottom: 36,
    maxWidth: 480,
  },

  '.techBadgeRow': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 40,
  },

  '.techBadge': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.68rem',
    color: '#6C6C80',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.07)',
    padding: '4px 10px',
    borderRadius: 6,
    transition: 'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
    position: 'relative',
    overflow: 'hidden',

    // Shimmer sweep ao hover
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(105deg, transparent 40%, rgba(232,168,56,0.12) 50%, transparent 60%)',
      backgroundSize: '200% 100%',
      backgroundPosition: '-200% center',
      transition: 'none',
    },

    '&:hover': {
      color: '#E8A838',
      borderColor: 'rgba(232, 168, 56, 0.3)',
      background: 'rgba(232, 168, 56, 0.06)',

      '&::after': {
        animation: `${shimmer} 0.5s ease forwards`,
      },
    },
  },

  '.heroRight': {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 2,
    animation: `${fadeIn} 1s ease 0.4s both`,

    '@bp3': {
      width: '100%',
      justifyContent: 'center',
    },
  },

  // Anel pulsante ao redor do retrato
  '.portraitRing': {
    position: 'absolute',
    inset: -16,
    borderRadius: 28,
    border: '1px solid rgba(232, 168, 56, 0.25)',
    animation: `${ringPulse} 3s ease-out infinite`,
    pointerEvents: 'none',
  },

  '.portraitRing2': {
    position: 'absolute',
    inset: -8,
    borderRadius: 24,
    border: '1px solid rgba(232, 168, 56, 0.12)',
    animation: `${ringPulse} 3s ease-out 1.5s infinite`,
    pointerEvents: 'none',
  },

  '.portraitFrame': {
    position: 'relative',
    width: 360,
    height: 440,
    borderRadius: 20,
    overflow: 'hidden',
    border: '1px solid rgba(232, 168, 56, 0.2)',
    boxShadow: '0 0 60px rgba(232, 168, 56, 0.1), 0 32px 64px rgba(0, 0, 0, 0.7)',

    '@bp3': {
      width: 280,
      height: 340,
      borderRadius: 16,
    },

    '@cel1': {
      width: 240,
      height: 290,
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(8,9,14,0.5) 0%, transparent 50%)',
      pointerEvents: 'none',
    },
  },
});

// ─── CTA Buttons ──────────────────────────────────────────────────────────────

export const CTARow = styled('div', {
  display: 'flex',
  gap: 14,
  flexWrap: 'wrap',

  '.ctaPrimary': {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: '0.875rem',
    letterSpacing: '0.02em',
    textDecoration: 'none',
    borderRadius: 10,
    padding: '12px 24px',
    background: '#E8A838',
    color: '#08090E',
    border: '1px solid #E8A838',
    transition: 'all 0.25s ease',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 0 20px rgba(232, 168, 56, 0.2)',

    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
      backgroundSize: '200% 100%',
      backgroundPosition: '-200% center',
      transition: 'none',
    },

    '&:hover': {
      background: 'transparent',
      color: '#E8A838',
      boxShadow: '0 0 30px rgba(232, 168, 56, 0.25)',

      '&::before': {
        animation: `${shimmer} 0.5s ease forwards`,
      },
    },
  },

  '.ctaSecondary': {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    fontSize: '0.875rem',
    letterSpacing: '0.02em',
    textDecoration: 'none',
    borderRadius: 10,
    padding: '12px 24px',
    background: 'transparent',
    color: 'rgba(240, 240, 245, 0.7)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    transition: 'all 0.25s ease',
    cursor: 'pointer',

    '&:hover': {
      borderColor: 'rgba(232, 168, 56, 0.4)',
      color: '#E8A838',
    },
  },
});

// ─── Section Wrapper (Experiência, Capacidades) ───────────────────────────────

export const SectionWrapper = styled('div', {
  width: '100%',
  padding: '100px 0',

  variants: {
    tone: {
      alt: {
        background: '#050508',
      },
      base: {
        background: 'transparent',
      },
    },
  },

  defaultVariants: {
    tone: 'base',
  },
});

// ─── About / Value Section ────────────────────────────────────────────────────

export const AboutSection = styled('section', {
  width: '100%',
  background: '#050508',
  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  padding: '90px 80px',

  '@bp3': {
    padding: '72px 28px',
  },

  '.aboutInner': {
    maxWidth: 1100,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 72,
    alignItems: 'start',

    '@bp3': {
      gridTemplateColumns: '1fr',
      gap: 48,
    },
  },

  '.aboutLeft': {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },

  '.sectionLabel': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.72rem',
    fontWeight: 400,
    letterSpacing: '0.2em',
    color: '$gold',
    textTransform: 'uppercase',
    marginBottom: 16,
    display: 'flex',
    alignItems: 'center',
    gap: 10,

    '&::before': {
      content: '""',
      display: 'inline-block',
      width: 20,
      height: 1,
      background: 'rgba(232, 168, 56, 0.6)',
      flexShrink: 0,
    },
  },

  h2: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
    fontWeight: 800,
    color: '#F0F0F5',
    marginBottom: 20,
    lineHeight: 1.1,
    letterSpacing: '-0.5px',
  },

  '.aboutDesc': {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '1rem',
    color: '#9090A8',
    lineHeight: 1.8,
    marginBottom: 32,
  },

  '.highlight': {
    color: '#F0F0F5',
    fontWeight: 500,
  },

  '.recognitionBadge': {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '12px 18px',
    background: 'rgba(232, 168, 56, 0.08)',
    border: '1px solid rgba(232, 168, 56, 0.25)',
    borderRadius: 12,
    marginBottom: 0,

    '.badgeIcon': {
      fontSize: '1.1rem',
    },

    '.badgeText': {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    },

    '.badgeTitle': {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 600,
      fontSize: '0.85rem',
      color: '#E8A838',
    },

    '.badgeSub': {
      fontFamily: "'DM Mono', monospace",
      fontSize: '0.65rem',
      color: '#9090A8',
      letterSpacing: '0.06em',
    },
  },

  '.aboutRight': {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    paddingTop: 6,
  },
});

export const ValueCard = styled('div', {
  padding: '22px 24px',
  background: '#10111E',
  borderRadius: 12,
  border: '1px solid rgba(255, 255, 255, 0.06)',
  transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
  position: 'relative',
  overflow: 'hidden',

  // Linha de acento lateral
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '20%',
    bottom: '20%',
    width: 2,
    background: 'rgba(232, 168, 56, 0)',
    borderRadius: 2,
    transition: 'background 0.3s ease, top 0.3s ease, bottom 0.3s ease',
  },

  '&:hover': {
    borderColor: 'rgba(232, 168, 56, 0.22)',
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(232, 168, 56, 0.08)',

    '&::before': {
      background: 'rgba(232, 168, 56, 0.6)',
      top: '10%',
      bottom: '10%',
    },
  },

  '.cardTop': {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },

  '.cardIcon': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.85rem',
    color: '#E8A838',
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(232, 168, 56, 0.08)',
    border: '1px solid rgba(232, 168, 56, 0.15)',
    borderRadius: 8,
    flexShrink: 0,
  },

  '.cardTitle': {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 700,
    fontSize: '0.9rem',
    color: '#F0F0F5',
  },

  '.cardDesc': {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.85rem',
    color: '#9090A8',
    lineHeight: 1.7,
  },
});

// ─── Projects Section ─────────────────────────────────────────────────────────

export const ProjectsSection = styled('section', {
  width: '100%',
  padding: '100px 80px',
  background: '#050508',

  '@bp3': {
    padding: '80px 28px',
  },

  '.projectsInner': {
    maxWidth: 1100,
    margin: '0 auto',
  },

  '.sectionLabel': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.72rem',
    fontWeight: 400,
    letterSpacing: '0.2em',
    color: '$gold',
    textTransform: 'uppercase',
    marginBottom: 16,
    display: 'flex',
    alignItems: 'center',
    gap: 10,

    '&::before': {
      content: '""',
      display: 'inline-block',
      width: 20,
      height: 1,
      background: 'rgba(232, 168, 56, 0.6)',
      flexShrink: 0,
    },
  },

  h2: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
    fontWeight: 800,
    color: '#F0F0F5',
    marginBottom: 14,
    lineHeight: 1.1,
    letterSpacing: '-0.5px',
  },

  '.sectionDesc': {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '1rem',
    color: '#9090A8',
    maxWidth: 540,
    lineHeight: 1.75,
    marginBottom: 56,
  },

  '.projectsGrid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 20,

    '@bp3': {
      gridTemplateColumns: '1fr',
    },
  },
});

// ─── Education & Contact Section ──────────────────────────────────────────────

export const EducationContactSection = styled('section', {
  width: '100%',
  padding: '100px 80px',

  '@bp3': {
    padding: '80px 28px',
  },

  '.eduContactInner': {
    maxWidth: 1100,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 72,
    alignItems: 'start',

    // Garante que os filhos não expandam além do espaço da coluna (necessário com overflow interno)
    '& > div': {
      minWidth: 0,
      overflow: 'hidden',
    },

    '@bp3': {
      gridTemplateColumns: '1fr',
      gap: 64,
    },
  },

  '.sectionLabel': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.72rem',
    fontWeight: 400,
    letterSpacing: '0.2em',
    color: '$gold',
    textTransform: 'uppercase',
    marginBottom: 16,
    display: 'flex',
    alignItems: 'center',
    gap: 10,

    '&::before': {
      content: '""',
      display: 'inline-block',
      width: 20,
      height: 1,
      background: 'rgba(232, 168, 56, 0.6)',
      flexShrink: 0,
    },
  },

  h2: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
    fontWeight: 800,
    color: '#F0F0F5',
    marginBottom: 32,
    lineHeight: 1.1,
    letterSpacing: '-0.5px',
  },

  '.eduList': {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,

    li: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      padding: '18px 20px',
      background: '#10111E',
      borderRadius: 12,
      border: '1px solid rgba(255, 255, 255, 0.06)',
    },

    '.eduDegree': {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 600,
      fontSize: '0.9rem',
      color: '#F0F0F5',
    },

    '.eduInst': {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '0.82rem',
      color: '#9090A8',
    },

    '.eduYear': {
      fontFamily: "'DM Mono', monospace",
      fontSize: '0.65rem',
      color: '#5C5C70',
      letterSpacing: '0.06em',
      marginTop: 2,
    },
  },

  '.contactBlock': {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },

  '.contactDesc': {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '1rem',
    color: '#9090A8',
    lineHeight: 1.75,
  },

  '.contactLinks': {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },

  '.contactItem': {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '14px 18px',
    background: '#10111E',
    borderRadius: 10,
    border: '1px solid rgba(255, 255, 255, 0.06)',
    textDecoration: 'none',
    transition: 'border-color 0.25s ease',

    '&:hover': {
      borderColor: 'rgba(232, 168, 56, 0.25)',
    },

    '.itemIcon': {
      width: 34,
      height: 34,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(232, 168, 56, 0.08)',
      border: '1px solid rgba(232, 168, 56, 0.15)',
      borderRadius: 8,
      flexShrink: 0,
    },

    '.itemText': {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    },

    '.itemLabel': {
      fontFamily: "'DM Mono', monospace",
      fontSize: '0.65rem',
      color: '#5C5C70',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },

    '.itemValue': {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '0.875rem',
      color: '#C8C8D4',
      fontWeight: 500,
    },
  },
});

// Keep legacy exports for backward-compat in case anything still references them
export const ContainerGeral = PageWrapper;
export const LinkButtons = CTARow;
