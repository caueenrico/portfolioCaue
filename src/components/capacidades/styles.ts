import { styled } from "@/styles";

export const Container = styled('section', {
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto',
  padding: '0 80px',

  '@bp3': {
    padding: '0 28px',
  },

  '.sectionLabel': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.72rem',
    fontWeight: 400,
    letterSpacing: '0.2em',
    color: '$gold',
    textTransform: 'uppercase',
    marginBottom: 16,
    display: 'block',
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
    maxWidth: 560,
    lineHeight: 1.75,
    marginBottom: 56,
  },

  '.grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 18,

    '@bp3': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },

    '@cel1': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const SkillGroup = styled('div', {
  padding: '26px 28px',
  background: '#10111E',
  borderRadius: 14,
  border: '1px solid rgba(255, 255, 255, 0.06)',
  transition: 'border-color 0.3s ease, transform 0.2s ease',

  '&:hover': {
    borderColor: 'rgba(232, 168, 56, 0.2)',
    transform: 'translateY(-2px)',
  },

  '.groupHeader': {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },

  '.icon': {
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(232, 168, 56, 0.08)',
    border: '1px solid rgba(232, 168, 56, 0.15)',
    borderRadius: 8,
    color: '#E8A838',
    fontSize: '0.85rem',
    fontFamily: "'DM Mono', monospace",
    flexShrink: 0,
  },

  '.groupLabel': {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 700,
    fontSize: '0.875rem',
    color: '#F0F0F5',
    letterSpacing: '0.01em',
    lineHeight: 1.2,
  },

  '.skills': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 7,
  },

  '.skill': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.68rem',
    color: '#7070A0',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.07)',
    padding: '4px 10px',
    borderRadius: 6,
    transition: 'all 0.2s ease',
    cursor: 'default',

    '&:hover': {
      color: '#E8A838',
      background: 'rgba(232, 168, 56, 0.06)',
      borderColor: 'rgba(232, 168, 56, 0.22)',
    },
  },
});
