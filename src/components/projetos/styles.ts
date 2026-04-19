import { styled } from "@/styles";

export const ProjetoCont = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: '#10111E',
  borderRadius: 14,
  border: '1px solid rgba(255, 255, 255, 0.06)',
  overflow: 'hidden',
  transition: 'border-color 0.3s ease, transform 0.25s ease',

  '&:hover': {
    borderColor: 'rgba(232, 168, 56, 0.2)',
    transform: 'translateY(-3px)',
  },

  '.imageWrap': {
    position: 'relative',
    overflow: 'hidden',
    height: 200,
    background: '#0A0B14',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',

    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease, opacity 0.3s ease',
      opacity: 0.85,
    },

    '&:hover img': {
      transform: 'scale(1.05)',
      opacity: 1,
    },
  },

  '.cardBody': {
    padding: '24px 28px 28px',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    flex: 1,

    '@cel1': {
      padding: '20px 20px 24px',
    },
  },

  '.projectLabel': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.65rem',
    color: '#E8A838',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
  },

  h2: {
    fontFamily: "'Syne', sans-serif",
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#F0F0F5',
    lineHeight: 1.2,
    letterSpacing: '-0.2px',
  },

  p: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.875rem',
    color: '#9090A8',
    lineHeight: 1.75,
    flex: 1,
  },

  '.techRow': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
  },

  '.tech': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.65rem',
    color: '#6C6C80',
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.07)',
    padding: '3px 8px',
    borderRadius: 5,
  },

  '.projectLink': {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: '0.82rem',
    textDecoration: 'none',
    color: '#E8A838',
    marginTop: 8,
    transition: 'gap 0.2s ease',
    width: 'fit-content',

    '&:hover': {
      gap: 12,
    },
  },
});
