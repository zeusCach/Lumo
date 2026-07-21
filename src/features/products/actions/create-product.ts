"use server";

import { revalidatePath } from "next/cache";
import { productSchema } from "../schemas/product.schema";
import { createProduct } from "../services/product.service";
import type { CreateProductState } from "../types/create-product-state";

/**
 * Server Action consumida por ProductForm vía useActionState.
 * Valida con productSchema (misma fuente de verdad que usaría un CRUD real
 * con MongoDB) y delega el guardado al service.
 */
export async function createProductAction(
  _prevState: CreateProductState,
  formData: FormData,
): Promise<CreateProductState> {
  const raw = {
    id: crypto.randomUUID(),
    name: formData.get("name"),
    description: formData.get("description"),
    price: Number(formData.get("price")),
    category: formData.get("category"),
    status: formData.get("status"),
  };

  const parsed = productSchema.safeParse(raw);

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  await createProduct(parsed.data);

  // Vuelve a pedir datos frescos a /dashboard/products la próxima vez que se visite.
  revalidatePath("/dashboard/products");

  return { success: true };
}