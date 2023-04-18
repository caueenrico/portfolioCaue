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
      marginBotton: 0,
    },

    h1:{
      fontSize: '4rem',
      width: 438,
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

  '.linksButtons':{
    marginTop: 31,
    display: 'flex',
    gap:24,
  
    

    '.linkdin':{
      display: 'flex',
      alignItems: "center",
      justifyContent: "center",
      gap: 16, 
      textDecoration: 'none',
      borderRadius: '5px',
      width: 160,
      height: 45,
      border: '3px solid transparent',
      background: 'linear-gradient($dark, $dark) padding-box, linear-gradient(to right, #9358F7, #10D7E2) border-box',
      color: '$white',
      
      span:{
        textTransform: 'none',
        fontSize: 16,
      }
      
    },

    '.github':{

      display: 'flex',
      alignItems: "center",
      justifyContent: "center",
      gap: 16, 
      textDecoration: 'none',
      borderRadius: '5px',
      width: 160,
      height: 45,
      border: '3px solid transparent',
      background: 'linear-gradient($dark, $dark) padding-box, linear-gradient(to right, #D24074, #6518B4) border-box',
      color: '$white',
      

      span:{
        textTransform: 'none',
        fontSize: 16,
      }
      

    },
    
  }

  
});

export const ImageContainer = styled("div", {
  

  zIndex: "-1",
});
