import React from "react";
import AboveTheFold from "../../components/AboveTheFold/AboveTheFold";
import ProductsContainer from "./_components/ProductsContainer";

const Page = () => {
  return (
    <>
      <AboveTheFold
        text="ПРОДУКТИ"
        image={{ url: "/Porcelanosa_Grupo.jpg", alt: "продукти" }}
      />
      <ProductsContainer />
    </>
  );
};

export default Page;
