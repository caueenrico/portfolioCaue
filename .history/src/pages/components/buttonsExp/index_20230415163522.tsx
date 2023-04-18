import { ButtonStyle } from "./styles";

export function ButtonExp({active, name}: any){
  return(
    <ButtonStyle onClick={() => consol} className={active} name={name}>
      Ultracargo
    </ButtonStyle>
  )
}