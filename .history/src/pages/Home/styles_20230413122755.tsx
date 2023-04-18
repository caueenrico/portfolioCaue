import { styled } from "@/styles";
import LooperBG from "../../assets/LooperBG.svg"


export const ContainerGeral = styled('div', {
  
})

export const ContainerHero = styled('div',{
  
  border: '1px solid red',
  padding: '0 180px',
  height: 734,
  backgroundColor: '',
  display: 'flex',
  flexDirection: 'column',
})

export const Hero = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width:'100%',
  backgroundImage: LooperBG,

  div:{
    flex: '1'
  }


})

export const ImageContainer = styled('div', {
    border: '2px solid blue',
    
    zIndex: '-1'
  
})