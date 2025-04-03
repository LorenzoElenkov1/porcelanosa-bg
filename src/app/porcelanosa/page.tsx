import React from "react";
import AboveTheFold from "../../components/AboveTheFold/AboveTheFold";
import Catalogues from "../../components/Catalogues/CataloguesContainer";

const Page = () => {
  return (
    <>
      <AboveTheFold
        text="PORCELANOSA"
        image={{ url: "/Porcelanosa_Grupo.jpg", alt: "Porcelanosa" }}
      />
      <Catalogues
        catalogues={[
          {
            name: "Ceramic Book",
            image: "/catalogues/porcelanosa/PO_Ceramic Book_2025.jpg",
            downloadLink: "https://www.porcelanosa.com/recursos/catalogos/PO_Ceramic%20Book_2025.pdf",
          },
          {
            name: "Ceramic Book Annex",
            image: "/catalogues/porcelanosa/PO_Ceramic_Book_Annex_2025.jpg",
            downloadLink: "https://www.porcelanosa.com/recursos/catalogos/PO_Ceramic_Book_Annex_2025.2.pdf",
          },
          {
            name: "décor+textures",
            image: "/catalogues/porcelanosa/PO-Decor-Textures-2024.jpg",
            downloadLink: "https://www.porcelanosa.com/recursos/catalogos/PO-Decor-Textures-2024.pdf",
          },
          {
            name: "MARMI Marble Ceramic",
            image: "/catalogues/porcelanosa/PO-MARMI-Marble-Ceramic-2024.jpg",
            downloadLink: "https://www.porcelanosa.com/recursos/catalogos/PO-MARMI-Marble-Ceramic-2024.pdf",
          },
          {
            name: "PAR-KER Color Book",
            image: "/catalogues/porcelanosa/PO-PAR-KER-COLOUR-BOOK-2023.jpg",
            downloadLink: "https://www.porcelanosa.com/recursos/catalogos/PO-PAR-KER-COLOUR-BOOK-2024.pdf",
          },
          {
            name: "PAR-KER Spaces Book",
            image: "/catalogues/porcelanosa/PO-PAR-KER-SPACES-BOOK-2022.jpg",
            downloadLink: "https://www.porcelanosa.com/recursos/catalogos/PO-PAR-KER-SPACES-BOOK-2022.pdf",
          },
          {
            name: "BERNA Serie",
            image: "/catalogues/porcelanosa/PO-SERIE-BERNA-2023.jpg",
            downloadLink: "https://www.porcelanosa.com/recursos/catalogos/PO-SERIE-BERNA-2023.pdf",
          },
          {
            name: "DURANGO Series",
            image: "/catalogues/porcelanosa/PO-SERIE-DURANGO-2023.jpg",
            downloadLink: "https://www.porcelanosa.com/recursos/catalogos/PO-SERIE-DURANGO-2023.pdf",
          },
          {
            name: "KARACHI Series",
            image: "/catalogues/porcelanosa/PO-SERIE-KARACHI-2023.jpg",
            downloadLink: "https://www.porcelanosa.com/recursos/catalogos/PO-SERIE-KARACHI-2023.pdf",
          },
          {
            name: "NANTES Series",
            image: "/catalogues/porcelanosa/PO-SERIE-NANTES-2023.jpg",
            downloadLink: "https://www.porcelanosa.com/recursos/catalogos/PO-SERIE-NANTES-2023.pdf",
          },
          {
            name: "NOBU Series",
            image: "/catalogues/porcelanosa/PO-SERIE-NOBU-2023.jpg",
            downloadLink: "https://www.porcelanosa.com/recursos/catalogos/PO-SERIE-NOBU-2023.pdf",
          },
          {
            name: "PRADA Series",
            image: "/catalogues/porcelanosa/PO-SERIE-PRADA-2023.jpg",
            downloadLink: "https://www.porcelanosa.com/recursos/catalogos/PO-SERIE-PRADA-2023.pdf",
          },
          {
            name: "SOLIDKER",
            image: "/catalogues/porcelanosa/PG-SOLID-KER-ES-EN-2022.jpg",
            downloadLink: "https://www.porcelanosa.com/recursos/catalogos/PG-SOLID-KER-ES-EN-2022.pdf",
          },
          {
            name: "Technical Ceramic Solutions",
            image: "/catalogues/porcelanosa/PO-Technical-Solutions-2024.jpg",
            downloadLink: "https://www.porcelanosa.com/recursos/catalogos/PO-Technical-Solutions-2024.pdf",
          },
          {
            name: "Porcelanosa Pools",
            image: "/catalogues/porcelanosa/PO-PISCINAS-POOLS.2023.jpg",
            downloadLink: "https://www.porcelanosa.com/recursos/catalogos/PO-PISCINAS-POOLS.2023.pdf",
          },
          {
            name: "House Builders",
            image: "/catalogues/porcelanosa/PO-HOUSE-BUILDERS-2025.jpg",
            downloadLink: "https://www.porcelanosa.com/recursos/catalogos/PO-HOUSE-BUILDERS-2025.pdf",
          },
        ]}
      />
    </>
  );
};

export default Page;
