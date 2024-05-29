import React from "react";

const MenuAromas: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [selectedAroma, setSelectedAroma] = React.useState("");
  interface Aroma {
    name: string
    title: string;
    text: string;
    color: string;
    whatsappMessage: string;
    image: string;
  }
  const whatsappNumber = "5531993966037";

  const aromas: { [key: string]: Aroma } = {
    hannah: {
      name: 'Hannah',
      title: "HANNAH / MEL / RADIANTE / ALEGRIA",
      text: "Texto para Hannah Texto para Hannah Texto para Hannah Texto para Hannah Texto para Hannah Texto para Hannah Texto para Hannah!",
      color: "#FFD700", // Amarelo
      image: "hannah.png",
      whatsappMessage:
        "Olá, gostaria de mais informações sobre o aroma Hannah.",
    },
    koibito: {
      name: 'Koibito',
      title: "KOIBITO / VERMELHO / FOGO / PAIXÃO",
      text: "Texto para Koibito Texto para Koibito Texto para Koibito Texto para Koibito Texto para Koibito Texto para Koibito!",
      color: "#FF0000", // Vermelho
      image: "koibito.png",
      whatsappMessage:
        "Olá, gostaria de mais informações sobre o aroma Koibito.",
    },
    kawaii: {
      name: 'new Kawaii',
      title: "newKAWAII / ROSA / DOCE / MEIGA",
      text: "Texto para NewKawaii Texto para NewKawaii Texto para NewKawaii Texto para NewKawaii Texto para NewKawaii !",
      color: "#FFC0CB", // Rosa claro
      image: "kawaii/2.jpg",
      whatsappMessage:
        "Olá, gostaria de mais informações sobre o aroma NewKawaii.",
    },
    midori: {
      name: 'Midori',
      title: "MIDORI / VERDE / NATUREZA / FRESCOR",
      text: "Texto para Midori Texto para Midori Texto para Midori Texto para Midori Texto para Midori Texto para Midori Texto para Midori!",
      color: "#008000", // Verde
      image: "midori.png",
      whatsappMessage:
        "Olá, gostaria de mais informações sobre o aroma Midori.",
    },
    kawabata: {
      name: 'Kawabata',
      title: "KAWABATA / PRETA / FOCO / PODER",
      text: "Texto para Kawabata Texto para Kawabata Texto para Kawabata! Texto para Kawabata Texto para Kawabata Texto para Kawabata Texto para Kawabata!",
      color: "#808080", // Cinza
      image: "kawabata/2.jpg",
      whatsappMessage:
        "Olá, gostaria de mais informações sobre o aroma Kawabata.",
    },
  };
  const renderAromas = () => {
    return Object.keys(aromas).map((aromaKey) => {
      const aroma = aromas[aromaKey];
      return (
        <div className="w-full flex flex-row justify-center items-center">
          <div className="h-[543px] flex flex-col justify-center gap-10 text-center items-center w-[50%]">
            <div className="text-4xl w-[400px]" style={{color: aroma.color}}>
              {aroma.title}
            </div>
            <div>
              {aroma.text}
            </div>
          </div>
          <div
          key={aromaKey}
          className="flex h-[543px] w-[1000px] cursor-pointer my-2"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(255, 243, 245, 0), 
            rgba(255, 243, 245, 1)), url('/src/assets/${aroma.image}')`,
            backgroundSize: 'cover',
          }}
        >
          <a
            className="w-full h-full"
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              aroma.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              onMouseEnter={() => {setIsHovered(true); setSelectedAroma(aroma.name)}}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                opacity: isHovered && selectedAroma === aroma.name ? '0.7' : '0',
              }}
              className="w-full h-full flex justify-center 
              bg-lavanda-white items-center cursor-pointer"
            >
              Clique para encomendar sua {aroma.name}
            </div>
          </a>
        </div>
        </div>
      );
    });
  };
  return (
    <div className="w-full">
      <div className="w-full text-5xl flex justify-center  my-10">Nossas Velas</div>
      {renderAromas()}
    </div>
  );
};

export default MenuAromas;



{/* <>
              <div
                className={`flex h-[543px] w-[1000px] cursor-pointer`}
                style={{
                  backgroundImage: `linear-gradient(to left, rgba(255, 243, 245, 0), 
              rgba(255, 243, 245, 1)), url('/src/assets/${aromas.image}')`,
                  backgroundSize: "cover",
                }}
              >
                <a
                className="w-full h-full"
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    aromas.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                      opacity: `${isHovered ? "0.5" : "0"}`,
                    }}
                    className="w-full h-full flex justify-center 
                    bg-lavanda-white items-center cursor-pointer text-5xl"
                  >
                    Clique e faça a sua encomenda!
                  </div>
                </a>
              </div>
            </> */}
