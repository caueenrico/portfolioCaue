import { styled } from "@/styles";

export const Container = styled("div", {
  position: 'fixed',
  inset: 0,
  zIndex: 99,
  background: '#000000',
  display: 'flex',
  flexDirection: 'column',
  padding: '0 28px',
  transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',

  '.menuHeader': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 72,
    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
  },

  '.logo': {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800,
    fontSize: '1.35rem',
    color: '#E8A838',
    letterSpacing: '-0.5px',
  },

  '.closeBtn': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    background: 'transparent',
    cursor: 'pointer',
    transition: 'border-color 0.2s ease',

    '&:hover': {
      borderColor: 'rgba(232, 168, 56, 0.4)',
    },
  },

  nav: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 40,
    gap: 0,
  },

  'nav a': {
    fontFamily: "'Syne', sans-serif",
    textDecoration: 'none',
    fontSize: '1.75rem',
    fontWeight: 700,
    color: 'rgba(240, 240, 245, 0.6)',
    padding: '14px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'color 0.2s ease',
    letterSpacing: '-0.5px',
  },

  'nav a:hover': {
    color: '#E8A838',
  },

  variants: {
    isOpen: {
      true: {
        transform: 'translateX(0)',
        opacity: 1,
        pointerEvents: 'all',
      },
      false: {
        transform: 'translateX(100%)',
        opacity: 0,
        pointerEvents: 'none',
      },
    },
  },

  defaultVariants: {
    isOpen: false,
  },
});
