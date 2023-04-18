import { styled } from "@/styles";

export const Container = styled('div',{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',


  h1:{
    color: '$white',
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: 3,
    fontStyle: 'normal',
    
    marginBottom: 26,
   
  },

  
    
 


})

export const DisplayExp = styled('div',{
  marginTop: 26,
  display: 'flex',
  gap: 88,

  '@bp3':{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 26,
  },
  

})

export const ButtonsCont = styled('div', {
  display: 'flex',
  flexDirection: 'column', 

  '@bp3':{
    display: 'flex',
    flexDirection: 'row',
  },

  '@cel1': {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 26,
  }

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
  },

  '@cel1':{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 26,

    textAlign: 'justify',
    paddi
  },


})