// src/styles/global.ts
import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    scrollBehavior: 'smooth',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '#000000',
    color: '#F0F0F5',
    overflowX: 'hidden',
    position: 'relative',
  },

  'body, input, textarea, button': {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
    fontSize: '1rem',
  },

  'h1, h2, h3, h4, h5, h6': {
    fontFamily: "'Syne', sans-serif",
  },

  '::selection': {
    backgroundColor: 'rgba(232, 168, 56, 0.25)',
    color: '#F0F0F5',
  },

  '::-webkit-scrollbar': {
    width: '4px',
  },

  '::-webkit-scrollbar-track': {
    background: '#000000',
  },

  '::-webkit-scrollbar-thumb': {
    background: 'rgba(232, 168, 56, 0.3)',
    borderRadius: '2px',
  },

  // Tesseract grid background
  '#tesseract-grid': {
    position: 'fixed',
    inset: 0,
    zIndex: 0,
    pointerEvents: 'none',
    perspective: '800px',
    overflow: 'hidden',
  },

  '#tesseract-grid .grid-plane': {
    position: 'absolute',
    width: '200%',
    height: '200%',
    top: '-50%',
    left: '-50%',
    transformOrigin: 'center center',
    transform: 'rotateX(60deg)',
    backgroundImage: `
      linear-gradient(rgba(232, 168, 56, 0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(232, 168, 56, 0.06) 1px, transparent 1px)
    `,
    backgroundSize: '80px 80px',
  },

  // Floating data particles
  '.data-particle': {
    position: 'fixed',
    fontFamily: "'DM Mono', monospace",
    color: 'rgba(232, 168, 56, 0.15)',
    pointerEvents: 'none',
    zIndex: 0,
    userSelect: 'none',
  },

  // Pixel cursor class (toggled by easter egg)
  '.pixel-cursor, .pixel-cursor *': {
    cursor: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27%3E%3Crect x=%276%27 y=%270%27 width=%274%27 height=%274%27 fill=%27%23E8A838%27/%3E%3Crect x=%270%27 y=%276%27 width=%274%27 height=%274%27 fill=%27%23E8A838%27/%3E%3Crect x=%2712%27 y=%276%27 width=%274%27 height=%274%27 fill=%27%23E8A838%27/%3E%3Crect x=%276%27 y=%2712%27 width=%274%27 height=%274%27 fill=%27%23E8A838%27/%3E%3Crect x=%276%27 y=%276%27 width=%274%27 height=%274%27 fill=%27%23000%27/%3E%3C/svg%3E") 8 8, crosshair !important',
  },

  // Konami pixel dimension mode
  '.pixel-dimension': {
    filter: 'contrast(1.1) saturate(1.2)',
  },

  '.pixel-dimension::after': {
    content: '""',
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    pointerEvents: 'none',
    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
    animation: 'scanlines 0.1s steps(2) infinite',
  },

  '@keyframes scanlines': {
    '0%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(4px)' },
  },

  // Reduced motion
  '@media (prefers-reduced-motion: reduce)': {
    '.data-particle': { display: 'none' },
    '#tesseract-grid': { display: 'none' },
  },
});
