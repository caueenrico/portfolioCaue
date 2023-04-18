import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    display: ''
  },

  html: {
    scrollBehavior: 'smooth',
  },

  body: {
    '-webkit-font-smoothing': 'antialised',
    backgroundColor: '$dark',
    paddingTop: 140,
    
  },

  'body, input, textarea, button': {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: '1rem',
  }
})