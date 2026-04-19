import { styled } from "@/styles";

export const Container = styled('footer', {
  width: '100%',
  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
  padding: '40px 80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 24,
  flexWrap: 'wrap',

  '@bp3': {
    padding: '36px 28px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 20,
  },

  '.footerLeft': {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },

  '.footerLogo': {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800,
    fontSize: '1.2rem',
    color: '#E8A838',
    letterSpacing: '-0.5px',
  },

  '.footerTagline': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.7rem',
    color: '#5C5C70',
    letterSpacing: '0.08em',
  },

  '.footerRight': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 12,

    '@bp3': {
      alignItems: 'flex-start',
    },
  },

  '.socialLinks': {
    display: 'flex',
    gap: 18,
    alignItems: 'center',

    a: {
      color: '#5C5C70',
      textDecoration: 'none',
      fontSize: '0.8rem',
      fontFamily: "'DM Sans', sans-serif",
      transition: 'color 0.2s ease',

      '&:hover': {
        color: '#E8A838',
      },
    },
  },

  '.copyright': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.65rem',
    color: '#3A3A50',
    letterSpacing: '0.05em',
  },
});
