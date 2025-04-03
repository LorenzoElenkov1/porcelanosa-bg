import React from "react";
import Image from "next/image";
import { GalleryItem } from "./ProductsContainer";

type Props = {
  items: GalleryItem[];
};

const ProductsGallery = ({ items }: Props) => {

  return (
    <div className="flex flex-wrap gap-2">
      {items.length ? items.map((item) => (
        <div key={item.id} className="flex flex-col w-[vw] min-w-[150px]">
          <div className="relative aspect-[1/2] w-full">
            <Image src={item.img} alt={item.name} fill className="object-cover rounded-sm" />
          </div>
          <span className="mt-2 text-center font-ivy-thin">{item.name}</span> 
        </div>
      )): <span>Няма намерени продукти</span>}
    </div>
  );
};

export default ProductsGallery;
