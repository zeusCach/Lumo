import type { Product } from "../types/product";

/**
 * Datos estáticos únicamente para tener algo que renderizar en el dashboard
 * mientras no existe base de datos. Cuando llegue MongoDB, este archivo
 * desaparece y product.service.ts pasa a leer de Mongo en su lugar.
 */
export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Cochinita Pibil",
    description: "Cochinita pibil tradicional con cebolla morada encurtida",
    price: 120,
    category: "Platillos fuertes",
    status: "available",
  },
  {
    id: "2",
    name: "Panuchos (3 pzas)",
    description: "Tortilla rellena de frijol, cochinita y lechuga",
    price: 65,
    category: "Antojitos",
    status: "available",
  },
  {
    id: "3",
    name: "Horchata",
    description: "Bebida de arroz y canela",
    price: 30,
    category: "Bebidas",
    status: "unavailable",
  },
];
