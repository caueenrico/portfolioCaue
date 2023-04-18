import { styled } from "@/styles";

export const ProjetoCont = styled('div',{
  display: 'flex',
  flexDirection: 'column',
  
  img:{
    height: 200,
    width: 530,
    borderLeft: '8px solid $blue',
    borderRadius: 5,
    marginBottom: 40
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
    color: '$'
  }




})

