export type ProductStatus = "available" | "unavailable";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  status: ProductStatus;
  imageUrl?: string;
}
