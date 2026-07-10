import type { ProductStatus } from "../types/product";

export const PRODUCT_STATUS_LABEL: Record<ProductStatus, string> = {
  available: "Disponible",
  unavailable: "No disponible",
};
