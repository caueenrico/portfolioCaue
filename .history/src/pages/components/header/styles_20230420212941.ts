import { styled } from "@/styles";

export const ContHeader = styled('header',{
  display: "flex",
  alignItems: 'center',
  justifyContent: 'space-around',
  background: '$dark',
  // border: '2px solid blue',
  width: '100%',
  height: 100,
  position: 'fixed',
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
    height: '100%',
    padding: '20px 180px',
    borderBottom: '2px solid $dark200',


  },

  '.noBorder':{

    boxShadow: '0 4px 4px rgba(0,0,0,.3)'
  },

  '@bp3':{

    // border: '2px solid $blue',
   

   
  },




  
  
})