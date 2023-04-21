import { styled } from "@/styles";

interface ContainerProps {
  isVisible: boolean;
}

export const Container, <ContainerProps> = styled("div", {
  position:'absolute',
  zIndex: 999,
  height: '40%',
  width: '40%',
  top: '3rem',
  right: '1.9rem',
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

  }



})