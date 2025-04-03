"use client";

import React from "react";
import Catalogues from "./Catalogues";
import { useLanguage } from "../LanguageProvider/LanguageProvider";

export type CatalogueItem = {
  name: string;
  image: string;
  downloadLink: string;
};

type Props = { catalogues: CatalogueItem[] };

const CataloguesContainer = ({ catalogues }: Props) => {
  const { lang } = useLanguage();

  return <Catalogues catalogues={catalogues} lang={lang} />;
};

export default CataloguesContainer;
