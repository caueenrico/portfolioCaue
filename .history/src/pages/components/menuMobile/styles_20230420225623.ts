import { styled } from "@/styles";

export const Container = styled('div',{
  position:'absolute',
  zIndex: 999,
  height: '40%',
  width: '40%',
  top: '1rem',
  left: 0,
  right: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  svg:{
    position: 'absolute',
    top: '1rem',
    right: '1rem'
  },



})