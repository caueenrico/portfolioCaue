import { css, keyframes, styled } from "@/styles";
import LooperBG from "../assets/LooperBG.svg";

export const ContainerGeral = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "@bp3": {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // width: 414,
  },
});

export const HeaderContainer = styled("div", {
  width: "100%",
  height: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$dark",
});

export const ContainerHero = styled("div", {
  padding: "0 180px",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100vh",
  border: "2px solid red",
});

//animation do header
const cursorBling = keyframes({
  "0%": { borderRight: "5px solid $blue" },
  "50%": { borderRight: "5px solid transparent" },
  "100%": { borderRight: "5px solid $blue" },
});

const digitacao = keyframes({
  from: { width: 0 },
  to: { width: 450 },
});

export const Hero = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  overflow: "hidden",

  

  "@bp3": {
    display: "flex",
    alignItems: "center",
  },

  ".caue": {
    flex: 1,
    backgroundImage: `url(/LooperBG.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    padding: "0 180px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: -100,

    span: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "$white",
      textTransform: "uppercase",
      marginBotton: 0,
    },

    '.typewriter': {
      fontSize: "4rem",
      textTransform: "uppercase",
      width: 450,
      fontWeight: 600,
      color: "$blue",
      marginTop: 12,
      //para realizar a animação
      animation: `${cursorBling} 500ms steps(50) infinite normal`,
      // whiteSpace: "nowrap",
      // overflow: "hidden",

      "@bp3": {
        fontSize: "3rem",
      },
    },

    '.cursor': {
      // animation: `${cursorBling} 500ms steps(50) infinite normal`,
      // borderRight: "5px solid $blue",
    },

    p: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "$white",
      marginTop: 12,
      textTransform: "uppercase",
    },

    "@bp3": {
      padding: "55px 20px",
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

export const ContainerSobreMim = styled("div", {
  paddingTop: 120,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  background: "$dark200",
  width: "100%",
  paddingBottom: 120,

  "@bp3": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "100px 0",

    gap: 50,
  },

  ".containerImg": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  img: {
    borderLeft: "5px solid $blue",
    borderRadius: 3,
    width: 300,
    height: 300,
  },

  "@cel1": {},
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
    maxWidth: 750,
  },

  div: {
    marginTop: 20,
    display: "flex",
    gap: 30,
    color: "$blue",
  },

  ".textoSobre": {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },

  "@bp3": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "justify",
   

    ".textoSobre": {
      padding: "0 50px",
    },
  },
});

export const ContainerExperiencia = styled("div", {
  display: "flex",
  flexDirection: "column",
  paddingTop: 120,
  paddingBottom: 120,
  height: 300,

  "@bp3": {
    height: 400,
  },

  "@cel1": {
    height: 600,
  },
});

export const ContainerProjetos = styled("div", {
  background: "$dark200",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: 120,
  paddingTop: 100,

  width: "100%",

  span:{
    marginTop: 2
  },


  h1: {
    textTransform: "uppercase",

    width: "100%",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 40,
    fontSize: "1.5rem",
    color: "$white",
  },

  ".projetos": {
    display: "grid",
    gridGap: "5rem",
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@bp3": {
    ".projetos": {
      width: "100%",
      gridTemplateColumns: "repeat(1, 1fr)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
});
