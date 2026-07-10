import type { Product } from "../types/product";
import { PRODUCT_STATUS_LABEL } from "../constants/product-status";

interface ProductsTableProps {
  products: Product[];
}

/**
 * Componente presentacional: recibe la lista ya resuelta y solo la pinta.
 * No sabe si vino de mock data, de una Server Action o de MongoDB.
 */
export function ProductsTable({ products }: ProductsTableProps) {
  if (products.length === 0) {
    return <p className="text-sm text-neutral-500">Aún no hay productos.</p>;
  }

  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-neutral-200 bg-neutral-50 text-neutral-500">
          <tr>
            <th className="px-4 py-3 font-medium">Nombre</th>
            <th className="px-4 py-3 font-medium">Categoría</th>
            <th className="px-4 py-3 font-medium">Precio</th>
            <th className="px-4 py-3 font-medium">Estado</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b border-neutral-100 last:border-0">
              <td className="px-4 py-3">
                <div className="font-medium text-neutral-900">{product.name}</div>
                <div className="text-neutral-500">{product.description}</div>
              </td>
              <td className="px-4 py-3 text-neutral-600">{product.category}</td>
              <td className="px-4 py-3 text-neutral-600">${product.price.toFixed(2)}</td>
              <td className="px-4 py-3">
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                    product.status === "available"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-neutral-100 text-neutral-500"
                  }`}
                >
                  {PRODUCT_STATUS_LABEL[product.status]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
