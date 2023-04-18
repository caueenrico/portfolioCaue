import { styled } from "@/styles";

export const ButtonStyle = styled('button',{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
  minWidth: 193,
  height: 55,
  fontSize: '1.125rem',
  background: 'transparent',
  border: 'none',
  padding: 20,

  '&:hover':{
    background: '$dark200',
    cursor: 'pointer'
  },

  '&.active':{
    background: '$dark200',
    borderLeft: '1px solid $blue'
  }

  
})