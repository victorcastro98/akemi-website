import React from "react";

const MenuFooterButton: React.FC = () => {
  return (
    <div className="w-full cursor-pointer">
      <div className="w-full h-[1px] bg-lavanda-basic" />
      <div className="flex flex-col h-full items-center align-center py-5 
      hover:bg-lavanda-basic hover:text-lavanda-white">
        Descubra nossos aromas!
      </div>
    </div>
  );
};

export default MenuFooterButton;
