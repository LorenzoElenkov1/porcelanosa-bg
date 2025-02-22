import React from "react";
import CatalogItem from "./CatalogItem";

export type CatalogueItem = {
  name: string;
  image: string;
  downloadLink: string;
};

type Props = { catalogues: CatalogueItem[] };

const CataloguesContainer = ({ catalogues }: Props) => {
  return (
    <div className="w-full flex flex-col px-10 mb-10 z-10 gap-10">
      <div className="flex flex-col gap-1 -mt-[110px] p-8 py-2 bg-opacity-30 bg-white h-max w-max pr-[12vw]">
        <h4 className="text-[36px] text-white max-content">Каталози</h4>
      </div>
      <div className="flex flex-wrap gap-8 justify-start">
        {catalogues.map((item) => (
          <CatalogItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CataloguesContainer;
