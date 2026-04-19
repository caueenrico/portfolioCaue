import { createStitches } from "@stitches/react";
import type * as Stitches from '@stitches/react';

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css
} = createStitches({
  theme: {
    colors: {
      white: "#F0F0F5",
      offwhite: "#C8C8D4",
      cyan: "#00D2DF",
      cyanDim: "rgba(0, 210, 223, 0.12)",
      cyanGlow: "rgba(0, 210, 223, 0.06)",
      gold: "#E8A838",
      goldDim: "rgba(232, 168, 56, 0.15)",
      goldGlow: "rgba(232, 168, 56, 0.4)",
      goldSubtle: "rgba(232, 168, 56, 0.08)",
      bg: "#000000",
      bgSurface: "#050508",
      bgCard: "#0A0A12",
      bgHover: "#0F0F1A",
      border: "rgba(232, 168, 56, 0.08)",
      borderHover: "rgba(232, 168, 56, 0.25)",
      borderAccent: "rgba(232, 168, 56, 0.22)",
      textSecondary: "#9090A8",
      textMuted: "#5C5C70",
      // Legacy aliases
      blue: "#00D2DF",
      dark: "#000000",
      dark200: "#050508",
      graylight: "#9090A8",
    },
  },
  media: {
    bp1: '(min-width: 1239px)',
    bp2: '(max-width: 768px)',
    bp3: '(max-width: 1239px)',
    cel1: '(max-width: 577px)',
  },
});
