import { ButtonStyle } from "./styles";

export function ButtonExp({funcao,active, name}: any){
  return(
    <ButtonStyle onClick={funcao} className={active} name={name}>
      {name}
    </ButtonStyle>
  )
}