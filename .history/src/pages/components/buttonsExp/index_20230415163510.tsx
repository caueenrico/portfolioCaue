import { ButtonStyle } from "./styles";

export function ButtonExp({active, name}: any){
  return(
    <ButtonStyle onc className={active} name={name}>
      Ultracargo
    </ButtonStyle>
  )
}