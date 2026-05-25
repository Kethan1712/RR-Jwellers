export type ProductCategory =
  | "rings"
  | "chains"
  | "necklaces"
  | "bangles"
  | "earrings"
  | "bridal"
  | "pendants"
  | "silver"
  | "custom";

export type MetalType =
  | "gold"
  | "silver";

export interface Product {
  id: string;

  slug: string;

  name: string;

  description: string;

  category: ProductCategory;

  metal: MetalType;

  purity: string;

  weight: number;

  price: number;

  makingCharges?: number;

  image: string[];

  featured?: boolean;

  bestseller?: boolean;

  inStock: boolean;

  customisable?: boolean;

  tags?: string[];

  createdAt?: string;
}