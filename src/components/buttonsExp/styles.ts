import { styled } from "@/styles";

export const ButtonStyle = styled('button',{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
  width: 200,
  height: 55,
  fontSize: '1.125rem',
  background: 'transparent',
  border: 'none',
  padding: 20,
  borderRadius: 2,

  '&:hover':{
    background: '$dark200',
    cursor: 'pointer'
  },

  '&.active':{
    background: '$dark200',
    borderLeft: '5px solid $blue'
  }

  
})