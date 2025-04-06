import React from "react";
import { CatalogueItem } from "./CataloguesContainer";
import Image from "next/image";

const CatalogItem = ({ name, image, downloadLink, lang }: CatalogueItem & { lang: 'bg' | 'en' | 'null'}) => {
  return (
    <div className="grid grid-rows-[max-content_max-content_max-content] gap-1">
      <div className="h-[60vh] w-[21.94vw] max-w-[360px] max-h-[500px] min-w-[125px] min-h-[200px] relative">
        <Image src={image} alt="" fill className="object-contain" />
      </div>
      <span className="font-bold text-lg">{name}</span>
      <a href={downloadLink} target="_blank" className="w-max underline underline-offset-4">{ lang === 'en' ? 'Open in PDF' : 'Виж в PDF' }</a>
    </div>
  );
};

export default CatalogItem;
