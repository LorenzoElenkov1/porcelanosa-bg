import React from "react";
import AboveTheFold from "../catalogues/_components/AboveTheFold/AboveTheFold";
import ProductsContainer from "./_components/ProductsContainer";

const Page = () => {
  return (
    <>
      <AboveTheFold
        text="ПРОДУКТИ"
        image={{ url: "/porcelanosa-bg/Porcelanosa_Grupo.jpg", alt: "продукти" }}
      />
      <ProductsContainer />
    </>
  );
};

export default Page;
