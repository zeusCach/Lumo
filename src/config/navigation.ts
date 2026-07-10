export interface NavigationItem {
  label: string;
  href: string;
}

/**
 * Fuente única de verdad para los links del Sidebar.
 * Añadir aquí nuevas secciones cuando se agreguen módulos (features).
 */
export const dashboardNavigation: NavigationItem[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Productos", href: "/dashboard/products" },
  { label: "Categorías", href: "/dashboard/categories" },
  { label: "Pedidos", href: "/dashboard/orders" },
];
