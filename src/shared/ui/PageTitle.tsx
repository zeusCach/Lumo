interface PageTitleProps {
  title: string;
}

/**
 * Componente genérico sin comportamiento ni lógica de negocio.
 * Vive en shared/ui porque es puramente presentacional.
 */
export function PageTitle({ title }: PageTitleProps) {
  return <h1 className="text-2xl font-semibold text-neutral-900">{title}</h1>;
}
