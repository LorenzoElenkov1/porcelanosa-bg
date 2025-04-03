import Image from "next/image";
import React, { ReactElement } from "react";

type Props = {
  text: string | ReactElement;
  image: {
    url: string;
    alt: string;
  };
};

const AboveTheFold = ({ text, image }: Props) => {
  return (
    <div className="w-full min-h-[calc(100svh)] relative mb-10">
      <Image fill src={image.url} alt={image.alt} className="object-cover" />
      <h1
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        className="absolute top-44 left-10 flex flex-col items-center leading-none text-white text-[60px]"
      >
        {text}
      </h1>
    </div>
  );
};

export default AboveTheFold;
