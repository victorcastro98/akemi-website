import React from "react";
import Image from "../../components/Image";
import MenuAromas from "../../components/MenuAromas";

const Aromas: React.FC = () => {
  const [selectedItem, setSelectedItem] = React.useState("");
  const selectedItems: { [key: string]: React.ReactNode } = {
    velas: <MenuAromas />,
    agua: <>agua</>,
  };
  return (
    <div className="flex flex-col h-full items-center">
      <Image image={"aromas"} text={"NOSSOS AROMAS"} height={"961px"} />
      {selectedItem === "" ? (
        <div className="w-full">
          <div
            className={`w-full text-5xl flex justify-center my-20`}
            style={{
              opacity: selectedItem ? 0 : 1, // Aplica o fade-out
              transition: "opacity 0.5s",
            }}
          >
            Clique e explore nossos aromas
          </div>
          <div className="flex flex-row w-full">
            <div
              onClick={() => setSelectedItem("velas")}
              className="flex h-[543px] w-full cursor-pointer"
              style={{
                backgroundImage: `url('/src/assets/aromas.png')`,
                backgroundSize: "cover",
              }}
            />
            <div
              onClick={() => setSelectedItem("agua")}
              className="flex h-[543px] w-full cursor-pointer"
              style={{
                backgroundImage: `url('/src/assets/agua/1.jpg')`,
                backgroundSize: "cover",
              }}
            />
          </div>
        </div>
      ) : (
        <div
          className={`w-full`}
          style={{
            opacity: 1, // Aplica o fade-in
            transition: "opacity 0.5s",
          }}
        >
          {selectedItems[selectedItem]}
        </div>
      )}
    </div>
  );
};

export default Aromas;
