import { ButtonStyle } from "./styles";

export function ButtonExp({active, name}: any){
  return(
    <ButtonStyle onClick={() => console.log()} className={active} name={name}>
      Ultracargo
    </ButtonStyle>
  )
}