import { z } from "zod";

/**
 * Define la forma válida de un Product. Todavía no se usa en ningún
 * formulario ni Server Action (eso llega cuando se implemente el CRUD real),
 * pero queda listo para reutilizarse ahí sin duplicar reglas.
 */
export const productSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "El nombre es requerido"),
  description: z.string().min(1, "La descripción es requerida"),
  price: z.number().positive("El precio debe ser mayor a 0"),
  category: z.string().min(1, "La categoría es requerida"),
  status: z.enum(["available", "unavailable"]),
  imageUrl: z.string().url().optional(),
});

export type ProductSchema = z.infer<typeof productSchema>;
