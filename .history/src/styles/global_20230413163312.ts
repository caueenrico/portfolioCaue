import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    '-webkit-font-smoothing': 'antialised',
    backgroundColor: '$dark',
    
  },

  'body, input, textarea, button': {
    fontFamily: 'Inter',
    
    fontSize: '1rem',
  }
})