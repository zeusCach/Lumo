import { PageTitle } from "../../../../shared/ui/PageTitle";
import { getProducts, ProductsTable } from "../../../../features/products";
import Link from "next/link";

// Server Component: puede ser async porque el service es async
// (aunque hoy solo devuelva mock data).
export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <PageTitle title="Productos" />
        <Link
        href="/dashboard/products/new"
        className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800">
          Nuevo Producto
        </Link>
      </div>
      
      <ProductsTable products={products} />
    </div>
  );
}
