import { styled } from "@/styles";

export const Container = styled('div',{
  display: 'flex',
  flexDirection: 'column',

  h1:{
    color: '$white',
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: 3,
    fontStyle: 'normal'
   
  },


})

export const DisplayExp = styled('div',{
  marginTop: 26,
  display: 'flex',
  gap: 88

})

export const ButtonsCont = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  button: {
    color: '$white',
    width: 193,
    height: 55,
    background: 'transparent',
    border: 'none',
  },

  ':button:hover':{
    ba
  }
  

})