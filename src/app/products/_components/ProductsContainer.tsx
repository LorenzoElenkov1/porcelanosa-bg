"use client";

import React, { useMemo, useState } from "react";
import { Filters } from "../_types";
import { _filters, gallery } from "../_constants";
import ProductsWithFilters from "./ProductsWithFilters";
import ProductsGallery from "./ProductsGallery";

const ProductsContainer = () => {
  const [filters, setFilters] = useState<Filters>({
    product: {
      value: _filters.product[0].value,
      label: _filters.product[0].label,
    },
    factory: {
      value: _filters.factory[0].value,
      label: _filters.factory[0].label,
    },
  });

  const handleFilterChange = (
    filter: { value: string; label: string },
    type: keyof typeof _filters
  ) => {
    setFilters((prevState) => ({ ...prevState, [type]: filter }));
  };

  const products = useMemo(() => {
    return gallery.filter((x) => {
      const matchFactory =
        filters.factory.value === "" || x.factory === filters.factory.value;
      const matchProduct =
        filters.product.value === "" || x.product === filters.product.value;

      return matchFactory && matchProduct;
    });
  }, [filters]);

  return (
    <div className="grid grid-cols-[max-content_1fr] gap-40 px-10 min-h-[40vh] mb-10">
      <ProductsWithFilters
        onFilterChange={handleFilterChange}
        filters={filters}
      />
      <ProductsGallery items={products} />
    </div>
  );
};

export default ProductsContainer;
