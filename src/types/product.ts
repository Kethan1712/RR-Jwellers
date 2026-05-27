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

  slug?: string;

  name: string;

  description: string;

  category: ProductCategory;

  metal?: string;

  purity?: string;

  weight?: string | number;

  price: number;

  makingCharges?: number;

  making_percentage?: string;

  image: string[] | string;

  featured?: boolean;

  bestseller?: boolean;

  inStock?: boolean;

  customisable?: boolean;

  tags?: string[];

  createdAt?: string;
}