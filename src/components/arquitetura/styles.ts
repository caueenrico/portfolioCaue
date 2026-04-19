import { keyframes, styled } from "@/styles";

const glitchFlash = keyframes({
  '0%': { opacity: 1, transform: 'translate(0)' },
  '20%': { opacity: 0.8, transform: 'translate(-2px, 1px)' },
  '40%': { opacity: 1, transform: 'translate(1px, -1px)' },
  '60%': { opacity: 0.9, transform: 'translate(-1px, 0)' },
  '80%': { opacity: 1, transform: 'translate(2px, 1px)' },
  '100%': { opacity: 1, transform: 'translate(0)' },
});

export const ArchSection = styled('section', {
  width: '100%',
  padding: '100px 80px',
  position: 'relative',

  '@bp3': {
    padding: '80px 28px',
  },

  '.archInner': {
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
    maxWidth: 560,
    lineHeight: 1.75,
    marginBottom: 40,
  },
});

export const TabBar = styled('div', {
  display: 'flex',
  gap: 8,
  marginBottom: 24,
  flexWrap: 'wrap',
});

export const Tab = styled('button', {
  fontFamily: "'DM Mono', monospace",
  fontSize: '0.75rem',
  letterSpacing: '0.05em',
  padding: '8px 18px',
  borderRadius: 6,
  border: '1px solid rgba(255, 255, 255, 0.08)',
  background: 'transparent',
  color: 'rgba(255, 255, 255, 0.35)',
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  '&:hover': {
    borderColor: 'rgba(232, 168, 56, 0.2)',
    color: 'rgba(255, 255, 255, 0.6)',
  },

  variants: {
    active: {
      true: {
        background: 'rgba(232, 168, 56, 0.1)',
        borderColor: 'rgba(232, 168, 56, 0.3)',
        color: '#E8A838',
      },
    },
  },
});

export const DiagramCanvas = styled('div', {
  background: '#0A0A12',
  border: '1px solid rgba(232, 168, 56, 0.1)',
  borderRadius: 14,
  padding: '24px',
  position: 'relative',
  minHeight: 340,

  '@cel1': {
    padding: '16px',
    minHeight: 280,
  },

  '.canvasHeader': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  '.diagramTitle': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.7rem',
    color: 'rgba(232, 168, 56, 0.5)',
    letterSpacing: '0.1em',
  },

  '.replayBtn': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.68rem',
    padding: '5px 12px',
    borderRadius: 4,
    border: '1px solid rgba(232, 168, 56, 0.2)',
    background: 'transparent',
    color: 'rgba(232, 168, 56, 0.6)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: 6,

    '&:hover': {
      borderColor: 'rgba(232, 168, 56, 0.4)',
      color: '#E8A838',
    },
  },

  '.progressBar': {
    marginTop: 20,
  },

  '.progressTrack': {
    height: 2,
    background: 'rgba(232, 168, 56, 0.1)',
    borderRadius: 1,
    overflow: 'hidden',
  },

  '.progressFill': {
    height: '100%',
    background: 'linear-gradient(90deg, rgba(232, 168, 56, 0.6), rgba(0, 210, 223, 0.6))',
    borderRadius: 1,
    transition: 'width 0.4s ease',
  },

  '.progressText': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.65rem',
    color: 'rgba(232, 168, 56, 0.35)',
    marginTop: 6,
  },

  '&.glitching': {
    animation: `${glitchFlash} 80ms linear`,
  },
});
