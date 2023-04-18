import { styled } from "@/styles";
import LooperBG from "../../assets/LooperBG.svg";

export const ContainerGeral = styled("div", {});

export const ContainerHero = styled("div", {
  border: "1px solid red",
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

  ".caue": {
    flex: 1,
    border: "2px solid blue",
    paddingLeft: "180px",
    
    
    span:{
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '$white',
      textTransform: 'uppercase',
    },

    h1:{
      fontSize: '4rem',
      width: 438,
      fontWeig
    }

    
  },

  
});

export const ImageContainer = styled("div", {
  border: "2px solid blue",

  zIndex: "-1",
});
