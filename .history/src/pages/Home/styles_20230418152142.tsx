import { styled } from "@/styles";
import LooperBG from "../../assets/LooperBG.svg";


export const ContainerGeral = styled("div", {
  
  display: "flex",
  flexDirection: "column",
  width: ',

  '@bp3':{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  width: '100%',
  overflow: 'hidden',
  
  '@bp3':{
    display: 'flex',
    alignItems: 'center',
  },

  ".caue": {
    flex: 1,
    backgroundImage: `url(/looperBG.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    padding: "55px 180px",
    minHeight: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    

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
  
  border: '1px solid red',

  '@bp3':{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    gap: 50,
  },

  '.containerImg':{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  img:{
    borderLeft: '5px solid $blue',
    borderRadius: 3,
    width: 300,
    height: 300,
  
  },

  '@cel1':{
   
  
    
  }
});

export const SobreMim = styled("div", {

  
  height: "100%",
  width: "100%",
 
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

  '@bp3':{
    '.projetos': {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  }
})

