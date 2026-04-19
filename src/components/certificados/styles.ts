import { keyframes, styled } from "@/styles";

const scrollLeft = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: 'translateX(-50%)' },
});

export const CarouselWrapper = styled('div', {
  width: '100%',
  overflow: 'hidden',
  position: 'relative',

  // fade nas bordas
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 80,
    zIndex: 2,
    pointerEvents: 'none',
  },

  '&::before': {
    left: 0,
    background: 'linear-gradient(to right, #000000, transparent)',
  },

  '&::after': {
    right: 0,
    background: 'linear-gradient(to left, #000000, transparent)',
  },

  '&:hover .track': {
    animationPlayState: 'paused',
  },
});

export const Track = styled('div', {
  display: 'flex',
  gap: 14,
  width: 'max-content',
  animation: `${scrollLeft} 90s linear infinite`,
  animationPlayState: 'running',
});

export const CertCard = styled('div', {
  flexShrink: 0,
  width: 220,
  height: 120,
  padding: '16px 18px',
  background: '#10111E',
  borderRadius: 12,
  border: '1px solid rgba(255, 255, 255, 0.06)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'border-color 0.3s ease',

  '&:hover': {
    borderColor: 'rgba(232, 168, 56, 0.25)',
  },

  '.certCategory': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.6rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#E8A838',
    opacity: 0.8,
  },

  '.certName': {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 600,
    fontSize: '0.8rem',
    color: '#F0F0F5',
    lineHeight: 1.3,
    flex: 1,
    paddingTop: 6,
  },

  '.certMeta': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 10,
  },

  '.certIssuer': {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.72rem',
    color: '#9090A8',
  },

  '.certYear': {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.62rem',
    color: '#5C5C70',
    letterSpacing: '0.05em',
  },
});
