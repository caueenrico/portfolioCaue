import { css, styled } from "@/styles";

interface ContainerProps {
  isOpen: boolean;
}

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

  svg:{
    position: 'absolute',
    top: '1rem',
    right: '1rem'
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
        pointerEvents: 'au'
      },
      false: {
        display: "none",
        pointerEvents: 'none',
      },
    },
  },

})