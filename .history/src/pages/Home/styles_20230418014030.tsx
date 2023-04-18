import { styled } from "@/styles";
import LooperBG from "../../assets/LooperBG.svg";


export const ContainerGeral = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",

  "@cel1":{
    


  }
  
});

export const ContainerHero = styled("div", {
  padding: "0 180px",

  display: "flex",
  flexDirection: "column",
  background: 'red',
  width: '100%',

  
 
  
});

export const Hero = styled("div", {
  paddingTop: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  overflow: "hidden",

  ".caue": {
    flex: 1,
    paddingLeft: "180px",

    span: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "$white",
      textTransform: "uppercase",
      marginBotton: 0,
    },

    h1: {
      fontSize: "4rem",
      textTransform: "uppercase",
      minWidth: 500,
      fontWeight: 600,
      color: "$blue",
      marginTop: 12,
    },

    p: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "$white",
      marginTop: 12,
      textTransform: "uppercase",
    },
  },

  "@cel1":{
   
    img:{
      
    },
  },
});

export const LinkButtons = styled("div", {
  marginTop: 31,
  display: "flex",
  gap: 24,

  ".gradienteAzul": {
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
  },

  ".gradienteRosa": {
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
      "linear-gradient($dark, $dark) padding-box, linear-gradient(to right, #D24074, #6518B4) border-box",
    color: "$white",
    transition: "0.5s ease-out",
  },

  ".gradienteRosa:hover": {
    background: "linear-gradient(to right, #D24074, #6518B4) border-box",
    color: "$dark",
    fontWeight: 600,
  },

  ".gradienteAzul:hover": {
    background: "linear-gradient(to right, #9358F7, #10D7E2) border-box",
    color: "$dark",
    fontWeight: 600,
  },
});

export const ImageContainer = styled("div", {
  zIndex: "-1",
  marginRight: "-1%",
});

export const ContainerSobreMim = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  padding: "100px 180px",
  justifyContent: "space-between",
  background: "$dark200",

  img:{
    borderLeft: '5px solid $blue',
    borderRadius: 3
  },

  '@cel1':{
    
    flexDirection: 'column',
  }
});

export const SobreMim = styled("div", {
  marginLeft: 183,
  height: "100%",
 
  color: "$white",

  h1: {
    textTransform: "uppercase",
    marginBottom: 40,
    fontSize: "1.5rem",
  },

  h2: {
    fontSize: "1.20rem",
    marginBottom: 21,
  },

  p: {
    color: "$graylight",
    maxWidth: 750
  },

  div: {
    marginTop: 20,
    display: "flex",
    gap: 30,
    color: "$blue",
  },

  

});

export const ContainerExperiencia = styled('div', {
  padding: '80px 180px',
  background: '$dark'
})

export const ContainerProjetos = styled('div', {
  padding: '80px 180px',
  background: '$dark200',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',


  h1: {
    textTransform: "uppercase",
   
    width: '100%',
    textAlign: 'initial',
    marginBottom: 40,
    fontSize: "1.5rem",
    color: '$white'
  },

  '.projetos': {
    display: 'grid',
    gridGap: '5rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
})

