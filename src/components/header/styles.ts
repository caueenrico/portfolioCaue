import { styled } from "@/styles";

export const ContHeader = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,

  '.inner': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 80px',
    height: 72,
    background: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(16px)',
    '-webkit-backdrop-filter': 'blur(16px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',

    '@bp3': {
      padding: '0 28px',
    },
  },

  '&.scrolled .inner': {
    background: 'rgba(0, 0, 0, 0.95)',
    borderBottomColor: 'rgba(232, 168, 56, 0.12)',
    boxShadow: '0 4px 32px rgba(0, 0, 0, 0.5)',
  },

  '.logo': {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800,
    fontSize: '1.35rem',
    color: '#E8A838',
    textDecoration: 'none',
    letterSpacing: '-0.5px',
    transition: 'opacity 0.2s ease',

    '&:hover': {
      opacity: 0.8,
    },
  },

  nav: {
    display: 'flex',
    gap: 36,
    alignItems: 'center',

    '@bp3': {
      display: 'none',
    },
  },

  'nav a': {
    fontFamily: "'DM Sans', sans-serif",
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: 'rgba(240, 240, 245, 0.55)',
    transition: 'color 0.2s ease',
    letterSpacing: '0.01em',
  },

  'nav a:hover': {
    color: '#E8A838',
  },

  '.menuBtn': {
    display: 'none',
    alignItems: 'center',
    padding: '6px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',

    '@bp3': {
      display: 'flex',
    },
  },
});
