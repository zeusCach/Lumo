import ProductForm from "@/src/features/products/components/ProductForm";
import { PageTitle } from "../../../../../shared/ui/PageTitle";

export default function NewProductPage() {
  return (
    <>
      <PageTitle title="Crear Producto" />
      <ProductForm/>
    </>
  );
}
