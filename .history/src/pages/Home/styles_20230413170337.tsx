import { styled } from "@/styles";
import LooperBG from "../../assets/LooperBG.svg";

export const ContainerGeral = styled("div", {});

export const ContainerHero = styled("div", {
  padding: "0 180px",
  backgroundColor: "",
  display: "flex",
  flexDirection: "column",
});

export const Hero = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  overflow: 'hidden',
  
  ".caue": {
    flex: 1,
    paddingLeft: "180px",
    
    span:{
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '$white',
      textTransform: 'uppercase',
      marginBotton: 0,
    },

    h1:{
      fontSize: '4rem',
      textTransform: 'uppercase',
      minWidth: 500,
      fontWeight: 600,
      color: '$blue',
      marginTop: 12
    },

    p:{
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '$white',
      marginTop: 12,
      textTransform: 'uppercase'
    } 
  },

 
});

export const LinkButtons

export const ImageContainer = styled("div", {
  zIndex: "-1",
  marginRight: '-1%',
});

export const ContainerExperiencia = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  padding: '100px 180px',
  justifyContent: 'space-between',
  background: '$dark200',
})

export const SobreMim = styled('div',{
  marginLeft: 183,
  height: '100%',
  border: '1px solid red',
  color: '$white',
  

  h1:{
    textTransform: 'uppercase',
    marginBottom: 40,
    fontSize: '1.5rem',
  },

  h2: {
    fontSize: '1.20rem',
    marginBottom: 21,
  },

  p:{
    color: '$graylight',
    lineHeight: 1.5,
    marginBottom: 5,
    textIndent: '0.5ch',
  },

  div: {
    marginTop: 20,
    display: 'flex',
    gap: 30,
    color: '$blue'
  }

})
