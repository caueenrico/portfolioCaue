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
    fontWeight: 500
  },

  p:{
    width: 438,
    color: '$dark200'
  }


})

