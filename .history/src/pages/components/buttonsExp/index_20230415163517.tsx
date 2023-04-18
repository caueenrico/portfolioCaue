import { ButtonStyle } from "./styles";

export function ButtonExp({active, name}: any){
  return(
    <ButtonStyle onClick={()} className={active} name={name}>
      Ultracargo
    </ButtonStyle>
  )
}