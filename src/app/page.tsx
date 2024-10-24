import Expertises from "@/Components/_ui/Expertises/Expertises";
import AboutMe from "@/Components/AboutMe/AboutMe";
import HomeComponent from "@/Components/Home/HomeComponent";

import { PiLayoutThin } from "react-icons/pi";
import { PiDevicesThin } from "react-icons/pi";
import { PiCodeBlockThin } from "react-icons/pi";


import styles from './page.module.css'
import Carousel from "@/Components/_ui/Carousel/Carousel";

export default function Home() {
  return (
    <>
      <HomeComponent
        info_1="Olá! meu nome<br/>é Pedro"
        info_2="Desenvolvedor Front-End"
        info_3="UX/UI"
      />
      <AboutMe
        title="Sobre Mim"
        item="Estudante de Engenharia de Computação com foco em desenvolvimento web e mobile front-end além de criação de design de interface e experiencia de usuário."
      />
      <div className={styles.expertises}>
        <Expertises
          icon={<PiLayoutThin size={150} />}
          title="UX/UI"
          content="Criação de experiência de uso eficaz e satisfatória, e design visual e interativo de produtos, garantindo interfaces intuitivas e visualmente atraentes."
        />
        <Expertises
          icon={<PiDevicesThin size={150} />}
          title="Web & Mobile"
          content="Capaz de criar experiencias responsivas para dispositivos moveis e computadores."
        />
        <Expertises
          icon={<PiCodeBlockThin size={150} />}
          title="Desenvolvimento"
          content="Transformando ideias em produtos reais, funcionais e responsivos utilizando tecnologias eficientes e ágeis"
        />
      </div>
      <Carousel />
    </>
  );
}