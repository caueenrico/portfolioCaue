import { styled } from "@/styles";

export const ContHeader = styled('header',{
 
  padding: '40px 180px',
  display: "flex",
  alignItems: 'center',
  justifyContent: 'space-between',
  
  position: 'fixed',
  width: '85%',
  top: 0,
  left: 0,
  zIndex: 999,

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
  },

  div:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderBottom: '2px solid $dark200',
    paddingBottom: 40
  },

  '.no'



  
  
})