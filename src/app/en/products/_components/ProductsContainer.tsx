"use client";

import React from "react";
import ProductsGallery from "./ProductsGallery";

export type GalleryItem = {
  id: number;
  name: string;
  href: string;
  img: string;
}

type Props = {
  items: GalleryItem[]; 
};

const ProductsContainer = ({ items }: Props) => {

  return (
    <div className="px-10 min-h-[40vh] mb-10">
      <ProductsGallery items={items} />
    </div>
  );
};

export default ProductsContainer;
