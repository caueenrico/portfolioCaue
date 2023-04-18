import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    '-webkit-font-smoothing': 'antialised',
    backgroundColor: '$dark',
    color: ''
  },

  'body, input, textarea, button': {
    fontFamily: 'Inter',
    fontWeight: 400
  }
})