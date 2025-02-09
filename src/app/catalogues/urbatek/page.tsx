import React from "react";
import AboveTheFold from "../_components/AboveTheFold/AboveTheFold";
import Catalogues from "../_components/Catalogues/CataloguesContainer";

const Page = () => {
  return (
    <>
      <AboveTheFold
        text="URBATEK"
        image={{ url: "/porcelanosa-bg/Porcelanosa_Grupo.jpg", alt: "Urbatek" }}
      />
      <Catalogues
        catalogues={[
          {
            name: "Porcelanosa1",
            image: "/UB-XTONE-Yearbook-2021.jpg",
            downloadLink: "",
          },
          {
            name: "Porcelanosa2",
            image: "/UB-XTONE-Yearbook-2021.jpg",
            downloadLink: "",
          },
          {
            name: "Porcelanosa3",
            image: "/UB-XTONE-Yearbook-2021.jpg",
            downloadLink: "",
          },
          {
            name: "Porcelanosa4",
            image: "/UB-XTONE-Yearbook-2021.jpg",
            downloadLink: "",
          },
          {
            name: "Porcelanosa5",
            image: "/UB-XTONE-Yearbook-2021.jpg",
            downloadLink: "",
          },
          {
            name: "Porcelanosa6",
            image: "/UB-XTONE-Yearbook-2021.jpg",
            downloadLink: "",
          },
          {
            name: "Porcelanosa7",
            image: "/UB-XTONE-Yearbook-2021.jpg",
            downloadLink: "",
          },
        ]}
      />
    </>
  );
};

export default Page;
