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
    <div className="w-full grid grid-cols-[0.4fr_1fr] px-10 mb-10">
      <div className="flex flex-col gap-1">
        <h4 className="text-[36px] max-content">Каталози</h4>
        <div className="h-[2px] ml-[2.5px] w-[140px] bg-[linear-gradient(to_right,black,transparent)]" />
      </div>
      <div className="flex flex-wrap gap-4 justify-end">
        {catalogues.map((item) => (
          <CatalogItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CataloguesContainer;
