import type { Product } from "../types/product";
import { mockProducts } from "../constants/mock-products";

/**
 * Capa de acceso a datos de Products. Hoy devuelve mock data, pero la firma
 * (async, mismo shape de retorno) ya es la que tendría si leyera de
 * MongoDB Atlas — así que cuando se conecte la DB real, solo cambia el
 * cuerpo de estas funciones, no quién las consume.
 */
export async function getProducts(): Promise<Product[]> {
  return mockProducts;
}

export async function getProductById(id: string): Promise<Product | null> {
  const product = mockProducts.find((item) => item.id === id);
  return product ?? null;
}

export async function createProduct(product: Product): Promise<Product> {
  mockProducts.push(product);
  return product;
}