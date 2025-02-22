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
    <div className="w-full min-h-[calc(100svh-400px)] relative mb-10">
      <Image fill src={image.url} alt={image.alt} className="object-cover" />
      <h1
        style={{ textShadow: '0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1);' }}
        className="absolute top-[55%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col items-center leading-none text-white text-[60px]"
      >
        {text}
      </h1>
    </div>
  );
};

export default AboveTheFold;
