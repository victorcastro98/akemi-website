import React from "react";

interface ImageProps {
  height: string;
  image: string;
  text?: string;
}

const Image: React.FC<ImageProps> = ({ height, image, text }) => {
  const bgImage = `url('/src/assets/${image}.png')`;

  const divStyle = {
    backgroundImage: bgImage,
    height,
    backgroundSize: 'cover'
  };

  return (
    <div
      className="flex min-h-[243px] font-kristi text-[270px] w-full 
      justify-center items-center text-lavanda-white"
      style={divStyle}
    >
      {text}
    </div>
  );
};

export default Image;
