import { styled } from "@/styles";

export const ContHeader = styled('header',{
  display: "flex",
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '40px 0px',
  borderBottom: '1px solid $',

  h1:{
    color: '$blue'
  },

  nav:{
    display: 'flex',
    gap: 20
  }

  
})