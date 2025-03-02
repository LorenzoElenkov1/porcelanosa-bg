"use client";
import ProductsContainer from "@/app/products/_components/ProductsContainer";
import { useSearchParams } from "next/navigation";
import React from "react";
import { XTONE_ITEMS } from "./_constants";

const Products = () => {
  const params = useSearchParams();
  const type = params.get("type");

  return (
    <div className="min-h-[100svh] pt-52">
      <span>Products</span>
      <ProductsContainer items={XTONE_ITEMS} />
    </div>
  );
};

export default Products;
