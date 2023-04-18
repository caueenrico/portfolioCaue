import { ButtonStyle } from "./styles";

export function ButtonExp({active, name}: any){
  return(
    <ButtonStyle onclassName={active} name={name}>
      Ultracargo
    </ButtonStyle>
  )
}