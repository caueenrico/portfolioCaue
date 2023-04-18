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
    '-webkit-font-smoothing': 'antialised',
    backgroundColor: '$dark',
   
    
  },

  'body, input, textarea, button': {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: '1rem',
  }
})