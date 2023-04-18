import { styled } from "@/styles";

export const ContHeader = styled('header',{
 
  display: "flex",
  alignItems: 'center',
  justifyContent: 'space-between',
  
  borderBottom: '2px solid $dark200',
  position: 'fixed',
  width: '100%',
  top: 0,
  left: 0,
  zIndex: 999,


  backgroundColor: '$dark',

 
  
  
  
  

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