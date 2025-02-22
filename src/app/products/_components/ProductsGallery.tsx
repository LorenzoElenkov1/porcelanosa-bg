import React from "react";
import { ProductItem } from "../_types";
import Image from "next/image";

type Props = {
  items: ProductItem[];
};

const ProductsGallery = ({ items }: Props) => {

  return (
    <div className="flex flex-wrap gap-8">
      {items.length ? items.map((item) => (
        <div key={item.id} className="flex flex-col w-[15vw] min-w-[150px]">
          <div className="relative aspect-square w-full">
            <Image src={item.img} alt="" fill className="object-cover" />
          </div>
          <span className="mt-2">{item.collection}</span>
          <span className="text-gray-500">{item.color.toUpperCase()}</span>
        </div>
      )): <span>Няма намерени продукти</span>}
    </div>
  );
};

export default ProductsGallery;
