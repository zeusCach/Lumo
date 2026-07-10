import { PageTitle } from "../../../../shared/ui/PageTitle";
import { getProducts, ProductsTable } from "../../../../features/products";

// Server Component: puede ser async porque el service es async
// (aunque hoy solo devuelva mock data).
export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="space-y-6">
      <PageTitle title="Productos" />
      <ProductsTable products={products} />
    </div>
  );
}
