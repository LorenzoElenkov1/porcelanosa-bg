export type Filters = {
  product: { value: string; label: string };
  factory: { value: string; label: string };
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
