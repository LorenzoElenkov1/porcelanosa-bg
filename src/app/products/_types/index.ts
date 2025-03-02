export type Option = { value: string; label: string };

export type Filters = {
  product: Option;
  factory: Option;
};

type ProductItemBase = {
  id: number;
  product: string;
  factory: string;
  img: string;
  collection: string;
  color: string;
};

export type ProductItem = ProductItemBase;
