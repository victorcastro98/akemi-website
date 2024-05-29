import React from "react";
import Image from "../../components/Image";

const Kits: React.FC = () => {
  return (
    <div className="flex flex-col h-full items-center">
      <div
        className={`flex flex-col bg-kits h-[844px] font-kristi 
    text-[200px] gap-32 w-full justify-center items-center text-lavanda-white`}
      >
        <a>Kits para</a>
        <a>empresas</a>
      </div>
      <div className="w-full px-5 py-10 text-end flex flex-col text-5xl font-semibold">
        <a>Seu aroma favorito com a</a>
        <a>sua empresa</a>
        <a>sua marca</a>
        <a>sua cara</a>
      </div>
      <div
        className={`flex bg-bg-kits2 h-[844px] 
    text-[80px] w-full justify-center items-center text-lavanda-white`}
      >
        Presenteie seus colaboradores!
      </div>
      <div className="w-full px-5 py-32 text-center flex flex-col text-5xl font-semibold">
        <a>Monte os kits com os seus produtos Akemi prediletos!</a>
      </div>
      <Image image={"kits3"} height={"844px"} />
      <div className="w-full px-5 py-32 text-center flex flex-col text-5xl font-semibold">
        <a>Coloque sua logo nos produtos que quiser!</a>
      </div>
      <Image image={"kits4"} height={"845px"} />
      <div className="w-full px-5 py-10 text-center flex flex-row gap-4 text-4xl font-semibold">
        <a onClick={() => {}} className="cursor-pointer">
          Baixe o nosso catálogo de produtos
        </a>
        <a onClick={() => {}} className="cursor-pointer">
          Peça seus kits com a gente pelo whatsapp!
        </a>
      </div>
    </div>
  );
};

export default Kits;
