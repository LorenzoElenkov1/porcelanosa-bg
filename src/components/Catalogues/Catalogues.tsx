import React from "react";
import CatalogItem from "./CatalogItem";

export type CatalogueItem = {
  name: string;
  image: string;
  downloadLink: string;
};

type Props = { catalogues: CatalogueItem[]; lang: "bg" | "en" | null };

const Catalogues = ({ catalogues, lang }: Props) => {
  return (
    <div className="w-full flex flex-col px-10 mb-10 z-10 gap-10">
      <div className="flex -mt-[110px] p-8 py-2 bg-black h-max w-max pr-[180px] items-center">
        <h4 className="text-[36px] text-white max-content">
          {lang === "en" ? "Catalogues" : "Каталози"}
        </h4>
      </div>
      <div className="-mt-[40px] w-0 h-0 border-l-[185px] border-l-transparent border-r-[185px] border-r-transparent border-t-[20px] border-t-black"></div>
      <div className="flex flex-wrap gap-8 justify-start">
        {catalogues.map((item) => (
          <CatalogItem key={item.name} {...item} lang={lang} />
        ))}
      </div>
    </div>
  );
};

export default Catalogues;
