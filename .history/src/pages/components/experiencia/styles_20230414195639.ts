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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    color: '$white',
    maxWidth: 193,
    height: 55,
    fontSize: '1.125rem',
    background: 'transparent',
    border: 'none',
    padding: 20
  },

  'button:hover':{
    background: '$dark200',
    cursor: 'pointer'
  }
  

})

export const ExperienciasDescricao = styled('div',{

  h1:{
    fontSize: '1.25rem',
    color:'$white'
  }

})