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
    marginBottom: 64,
  },
});

export const Timeline = styled('div', {
  position: 'relative',
  paddingLeft: 28,

  '&::before': {
    content: '""',
    position: 'absolute',
    left: 4,
    top: 8,
    bottom: 8,
    width: 1,
    background: 'linear-gradient(to bottom, rgba(232, 168, 56, 0.4), rgba(232, 168, 56, 0.05))',
  },
});

export const TimelineItem = styled('div', {
  position: 'relative',
  marginBottom: 40,

  '&:last-child': {
    marginBottom: 0,
  },

  '.dot': {
    position: 'absolute',
    left: -29,
    top: 28,
    width: 10,
    height: 10,
    borderRadius: '50%',
    background: 'rgba(232, 168, 56, 0.25)',
    border: '1px solid rgba(232, 168, 56, 0.4)',
    transition: 'background 0.2s ease',
  },

  '&:hover .dot': {
    background: 'rgba(232, 168, 56, 0.5)',
  },

  '.content': {
    padding: '28px 32px',
    background: '#10111E',
    borderRadius: 14,
    border: '1px solid rgba(255, 255, 255, 0.06)',
    transition: 'border-color 0.3s ease',

    '&:hover': {
      borderColor: 'rgba(232, 168, 56, 0.18)',
    },

    '@cel1': {
      padding: '22px 20px',
    },
  },

  '.meta': {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
  },

  '.period': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.72rem',
    color: '#5C5C70',
    letterSpacing: '0.05em',
  },

  '.badge': {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.65rem',
    fontWeight: 600,
    padding: '3px 10px',
    borderRadius: 100,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5,
  },

  '.badge.gold': {
    background: 'rgba(232, 168, 56, 0.12)',
    color: '#E8A838',
    border: '1px solid rgba(232, 168, 56, 0.3)',
  },

  h3: {
    fontFamily: "'Syne', sans-serif",
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#F0F0F5',
    marginBottom: 4,
    lineHeight: 1.2,
    letterSpacing: '-0.2px',
  },

  '.company': {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.875rem',
    color: '#E8A838',
    fontWeight: 500,
    display: 'block',
    marginBottom: 16,
    opacity: 0.9,
  },

  p: {
    fontFamily: "'DM Sans', sans-serif",
    color: '#9090A8',
    lineHeight: 1.75,
    fontSize: '0.9rem',
    marginBottom: 16,
  },

  '.achievements': {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 20px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,

    li: {
      fontFamily: "'DM Sans', sans-serif",
      color: '#C8C8D4',
      fontSize: '0.875rem',
      paddingLeft: 20,
      position: 'relative',
      lineHeight: 1.6,

      '&::before': {
        content: '"→"',
        position: 'absolute',
        left: 0,
        color: '#E8A838',
        fontSize: '0.75rem',
        top: 2,
      },
    },
  },

  '.techRow': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 7,
    marginTop: 16,
  },

  '.tech': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.68rem',
    color: '#6C6C80',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.07)',
    padding: '3px 9px',
    borderRadius: 5,
    transition: 'all 0.2s ease',

    '&:hover': {
      color: '#E8A838',
      borderColor: 'rgba(232, 168, 56, 0.25)',
      background: 'rgba(232, 168, 56, 0.05)',
    },
  },

  '.photoGrid': {
    display: 'flex',
    gap: 16,
    marginTop: 24,
    flexWrap: 'wrap',

    figure: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      overflow: 'hidden',
      borderRadius: 10,
      border: '1px solid rgba(255, 255, 255, 0.07)',
    },

    figcaption: {
      fontFamily: "'DM Mono', monospace",
      fontSize: '0.65rem',
      color: '#5C5C70',
      letterSpacing: '0.04em',
      padding: '0 4px 6px',
    },
  },

  variants: {
    featured: {
      true: {
        '.dot': {
          background: '#E8A838',
          border: '2px solid rgba(232, 168, 56, 0.7)',
          width: 12,
          height: 12,
          left: -30,
          top: 27,
          boxShadow: '0 0 14px rgba(232, 168, 56, 0.45)',
        },

        '.content': {
          borderColor: 'rgba(232, 168, 56, 0.15)',
          background: '#0A0A12',
        },
      },
    },
  },
});
