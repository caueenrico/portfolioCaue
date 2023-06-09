import { styled } from "@/styles";

export const ContHeader = styled('header',{
  display: "flex",
  alignItems: 'center',
  justifyContent: 'space-between',
  // border: '2px solid blue',
  width: '100%',
  height: 100,
  position: 'fixed',
  zIndex: 5,

  h1:{
    color: '$blue'
  },

  nav:{
    display: 'flex',
    gap: 20,

    "@bp3":{
      display: 'none'
    },
  },

  button: {
    display:'flex',
    alignItems: 'center',
    padding: 5,
    border: 'none',
    background: 'transparent',
    
    '@bp1':{
      display: 'none'
    },
    "@bp3":{
      
    },
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
    
    padding: '30px 180px',
    borderBottom: '2px solid $dark200',
    background: '$dark',

    '@bp3':{
      padding: '30px 40px',

    }



  },

  '.noBorder':{

    boxShadow: '0 4px 4px rgba(0,0,0,.3)'
  },



  '@bp3':{

    // border: '2px solid $blue',
    
   

   
  },




  
  
})