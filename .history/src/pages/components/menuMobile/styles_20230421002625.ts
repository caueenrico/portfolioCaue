import { css, styled } from "@/styles";


export const Container = styled("div", {
  
  position:'fixed',
  zIndex: 999,
  height: '40%',
  width: '40%',
  top: '2rem',
  right: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: '$dark200',
  animation: 'show-down .3s forwards',


  svg:{
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    rotate: '90deg',
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
        display: "flex",
        pointerEvents: 'auto',
        animation: 'show-down .3s forwards',
      },
      false: {
        display: "none",
        pointerEvents: 'none',
        animation: 'show-down .3s forwards',

      },
    },
  },

})