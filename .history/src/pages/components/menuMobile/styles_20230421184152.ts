import { css, styled } from "@/styles";


export const Container = styled("div", {
  
  position:'fixed',
  zIndex: 999,
  height: '0%',
  width: '40%',
  top: '1rem',
  right: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: '$dark200',
  transition: '0.3s',
  textTransform: 'uppercase',
  borderRadius: 10,
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
  overflow: 'hidden',
  gap: 20,
  


  svg:{
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    transition: '1s',
    
  },

  nav:{
    display: 'flex',
    flexDirection:'column',
    gap: 20,

    a:{
      textDecoration: 'none',
      fontSize: 18,
      fontWeight: 500,
      color:'$graylight',
      transition: '0.5s',
    },

  },

 

  variants: {
    isOpen: {
      true: {
        opacity: 1,
        pointerEvents: 'auto',
        transform: 'translateY(0%)',
        height: '40%',

        svg:{
          transform: 'rotate(360deg)',
    
        },

      },
      false: {
        opacity: 0,
        pointerEvents: 'none',
        transform: 'translateY(-5%)',

        svg:{
          transform: 'rotate(-180deg)',
          
        },
      
      },
    },


  },

  

})