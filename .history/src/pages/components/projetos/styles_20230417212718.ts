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

    }
  },

  h1:{
    textTransform: 'none',
    fontWeight: 500,
    marginBottom: 30
  },

  p:{
    width: 438,
    color: '$graylight',
    marginBottom:26,
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
  }

  


})

