import React from "react";
import logo from "../../assets/basic-logo.svg";
import Image from "../../components/Image";
import Modal from "../../components/Modal";
import MenuFooterButton from "../../components/MenuFooterButton";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-full items-center">
      <Modal/>
      <img src={logo} alt="akemi-logo" className="py-20" />
      <Image image={"ak1"} text={"SOBRE AKEMI"} height={"1226px"} />
      <div className="px-20 py-20 text-center gap-3 flex flex-col">
        <div>
          Oi! Sou a Nath Dan, fundadora da{" "}
          <a className="font-medium">Akemi Velas Aromáticas</a>.
        </div>
        <div>
          Apaixonada por velas desde criança tive a influência da minha
          mãe como fundamental para que eu começasse a produzi-las. Ela me
          ensinou a valorizar as tradições da nossa família e a expressar minha criatividade. Em
          2021, decidi levar minha paixão para um novo nível. Comecei a produzir
          minhas próprias velas e vendê-las em bares e restaurantes na rua. É uma
          experiência incrível! Ver as pessoas se encantando com as fragrâncias
          e a luz suave das velas era gratificante. Agora, com o meu nosso site
          de velas online quero compartilhar essa paixão com todos você e espero
          que cada vela que criamos te encante da mesma forma que faze-la me
          encantou. Sejam bem-vindos ao nosso mundo perfumado e luminoso!
        </div>
        <div>
          Ah, e quanto à minha ascendência, sou uma nikkei, que representa
          descendentes japoneses nascidos fora do Japão. É uma honra para mim
          trazer um pedacinho das minhas raízes culturais para cada vela que
          produzo.
        </div>
      </div>
      <MenuFooterButton />
    </div>
  );
};

export default Home;
