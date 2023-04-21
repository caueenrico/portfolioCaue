import { styled } from "@/styles";

export const Container = styled('div',{
  position:'absolute',
  zIndex: 999,
  height: '40%',
  width: '100%',
  top: 0,
  left: 0,
  right: 0,
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