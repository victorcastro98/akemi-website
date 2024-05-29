import React from "react";
import { Link } from "react-router-dom";

const MenuTop: React.FC = () => {
  const [isClicked, setIsCliecked] = React.useState(false);
  return (
    <div className={`${isClicked ? 'h-[385px]' : 'h-0'} w-full fixed top-0`}>
      <div
        className="absolute top-4 left-4 flex flex-col gap-2 cursor-pointer"
        onClick={() => {
          setIsCliecked(!isClicked);
        }}
      >
        <div
          className={`w-12 h-2 ${
            isClicked ? "bg-lavanda-white" : "bg-lavanda-basic"
          }`}
        />
        <div
          className={`w-12 h-2 ${
            isClicked ? "bg-lavanda-white" : "bg-lavanda-basic"
          }`}
        />
        <div
          className={`w-12 h-2 ${
            isClicked ? "bg-lavanda-white" : "bg-lavanda-basic"
          }`}
        />
      </div>
      <div
        className={`${
          isClicked ? "" : "hidden"
        } w-full bg-lavanda-basic text-5xl h-full 
        flex flex-row justify-evenly text-lavanda-white items-center`}
      >
        <Link onClick={()=>{setIsCliecked(false)}} to={"/"}>
          <div className="flex flex-col cursor-pointer">
            <a>Sobre nós</a>
          </div>
        </Link>

        <div className="w-5 h-5 rounded-full bg-lavanda-white" />
        <Link onClick={()=>{setIsCliecked(false)}} to={"/aromas"}>
          <div className="flex flex-col cursor-pointer">
            <a>Nossos</a>
            <a>aromas</a>
          </div>
        </Link>
        <div className="w-5 h-5 rounded-full bg-lavanda-white" />
        <Link onClick={()=>{setIsCliecked(false)}} to={"/kits"}>
          <div className="flex flex-col cursor-pointer">
            <a>Kits para</a>
            <a>empresas</a>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuTop;
