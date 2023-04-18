import { styled } from "@/styles";

export const ContHeader = styled('header',{
  display: "flex",
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 40px'

  h1:{
    color: '$blue'
  },

  nav:{
    display: 'flex',
    gap: 20
  }

  
})