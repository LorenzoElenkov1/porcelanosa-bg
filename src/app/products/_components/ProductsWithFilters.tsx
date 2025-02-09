import Dropdown from "@/components/Dropdown/Dropdown";
import React from "react";
import { _filters } from "../_constants";
import { Filters } from "../_types";

type Props = {
  onFilterChange: (
    filter: { value: string; label: string },
    type: keyof typeof _filters
  ) => void;
  filters: Filters;
};

const ProductsWithFilters = ({ onFilterChange, filters }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <Dropdown
        options={_filters.product}
        value={filters.product}
        label="Продукт"
        setOption={onFilterChange}
        type="product"
      />
      <Dropdown
        options={_filters.factory}
        value={filters.factory}
        label="Фабрики"
        setOption={onFilterChange}
        type="factory"
      />
    </div>
  );
};

export default ProductsWithFilters;
