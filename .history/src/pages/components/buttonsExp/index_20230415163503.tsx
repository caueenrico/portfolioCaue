import { ButtonStyle } from "./styles";

export function ButtonExp({active, name}: any){
  return(
    <ButtonStyle onclickclassName={active} name={name}>
      Ultracargo
    </ButtonStyle>
  )
}