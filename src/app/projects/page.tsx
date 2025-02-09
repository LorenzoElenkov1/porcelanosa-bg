import React from "react";
import AboveTheFold from "../catalogues/_components/AboveTheFold/AboveTheFold";
import Catalogues from "../catalogues/_components/Catalogues/CataloguesContainer";

const Page = () => {
  return (
    <>
      <AboveTheFold
        text="ПРОЕКТИ"
        image={{ url: "/porcelanosa-bg/Porcelanosa_Grupo.jpg", alt: "проекти" }}
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
