import { ButtonStyle } from "./styles";

export function ButtonExp({active, name}: any){
  return(
    <ButtonStyle onClick={() => console} className={active} name={name}>
      Ultracargo
    </ButtonStyle>
  )
}