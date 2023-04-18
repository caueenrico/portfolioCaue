import Image from "next/image";
import LooperBG from "../../assets/LooperBG.svg"
import { Header } from "../components/header";
import { ContainerGeral, ContainerHero, Hero, ImageContainer } from "./styles";

export default function Home() {
  return (
    <ContainerGeral>
      <ContainerHero>
        <Header />
        
      </ContainerHero>
    </ContainerGeral>
  );
}
