import { styled } from "@/styles";

export const ButtonStyle = styled('button',{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
  maxWidth: 193,
  height: 55,
  fontSize: '1.125rem',
  background: 'transparent',
  border: 'none',
  padding: 20,

  'button:hover':{
    background: '$dark200',
    cursor: 'pointer'
  },

  
})