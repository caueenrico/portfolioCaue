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
      white: "#FFFFFF",
      blue: "#00D2DF",
      gradientpink: "linear-gradient(90deg, #FF0080 0%, #FFC700 100%)",
      gradientblue: "linear-gradient(269.96deg, #10D7E2 0%, #9358F7 100%)",
      dark: "#121212",
      dark200: "#151515",
      graylight: "#C4C4C4",
    },
  },
  media: {
    bp1: '(min-width: 1239px)',
    bp2: '(max-width: 768px)',
    bp3: '(max-width: 1239px)',

    cel1: '(max-width: 577px)',
  },
  utils: {
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    div: (value: Stitches.PropertyValue<'div'>) => ({ 
});
