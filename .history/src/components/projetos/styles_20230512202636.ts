import { styled } from "@/styles";

export const ProjetoCont = styled('div',{
  display: 'flex',
  flexDirection: 'column',
  
  img:{
    height: 200,
    width: 530,
    borderLeft: '8px solid $blue',
    borderRadius: 5,
    marginBottom: 40,
    transition: '0.5s ease-out',

    '&:hover':{
      borderLeft: '8px solid #9358F7',
      //fazer ele dar zoom na imagem
      '-webkit-transform': 'scale(1.1)',
      '-ms-transform': 'scale(1.1)',
      transform: 'scale(1.1)',
      opacity: 0.8,

    },

    '@bp3':{
      '&:hover':{
      borderLeft: '8px solid #9358F7',
      transform: 'none'
      }
    }
  },

  h1:{
    textTransform: 'none',
    fontWeight: 500,
    marginBottom: 30,
    textAlign: 'left',

    '@bp3':{
      fontSize: '1.5rem',
      width: '100%',
      textAlign: 'center',
      marginTop: 0,
    }


  },

  p:{
    width: 550,
    color: '$graylight',
    marginBottom:26,
    textAlign: 'justify',

    '@bp3':{
      fontSize: '1.5rem',
      width: '80%',
      textAlign: 'initial'
    }
  },

  span:{
    color: '$blue',
    marginBottom:26,
  },

  a:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    fontWeight: 600,
    textDecoration: "none",
    borderRadius: "5px",
    width: 160,
    height: 45,
    border: "3px solid transparent",
    background:
      "linear-gradient($dark, $dark) padding-box, linear-gradient(to right, #9358F7, #10D7E2) border-box",
    color: "$white",
    transition: "0.5s ease-out",

    '&:hover':{
      background: "linear-gradient(to right, #9358F7, #10D7E2) border-box",
      color: "$dark",
      fontWeight: 600,
    }
  },

  '@bp3':{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
   
    img:{
      width: '60%',
      height: 200,
    },

  },

  '@cel1':{
    img:{
      width: '95%',
      height: 200,
    },
  },



  


})

