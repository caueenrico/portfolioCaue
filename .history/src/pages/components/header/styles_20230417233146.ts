import { styled } from "@/styles";

export const ContHeader = styled('header',{
  margin: '0 180px',
  padding: '40px 0',
  display: "flex",
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '2px solid $dark200',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  
  
 

  h1:{
    color: '$blue'
  },

  nav:{
    display: 'flex',
    gap: 20,
  },

  a:{
    textDecoration: 'none',
    fontSize: 18,
    fontWeight: 500,
    color:'$graylight',
    transition: '0.5s',
  },

  'a:hover': {
    color:'$blue'
  }
  
})