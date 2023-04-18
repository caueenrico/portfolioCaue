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

  '@bp3':{
   
    
    
  },


})

export const DisplayExp = styled('div',{
  marginTop: 26,
  height: 200,
  display: 'flex',
  gap: 88,

  '@bp3':{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  

})

export const ButtonsCont = styled('div', {
  display: 'flex',
  flexDirection: 'column', 
})

export const ExperienciasDescricao = styled('div',{

  display:'flex',
  flexDirection:'column',
  gap: 26,

  h2:{
    fontSize: '1.25rem',
    color:'$white',
  },

  span: {
    color: '$blue',
  },

  p:{
    color: '$graylight',
    maxWidth: 700,
  }


})