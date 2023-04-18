import { styled } from "@/styles";

export const Button = styled('button',{
  color: "$blue"
})

export const ContainerHero = styled('div',{
  width: 100%;
  padding: 0 180px;
  height: 734px;
  backgroundColor: ${props => props.theme['dark']};
  display: flex;
  flex-direction: column;
})