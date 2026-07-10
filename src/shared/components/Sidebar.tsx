"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardNavigation } from "../../config/navigation";

/**
 * Sidebar reutilizable. Solo conoce la lista de navegación (config),
 * no conoce productos, categorías ni pedidos como entidades de negocio.
 */
export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-60 shrink-0 flex-col border-r border-neutral-200 bg-white">
      <div className="flex h-16 items-center px-6 text-lg font-semibold tracking-tight text-neutral-900">
        Lumo
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {dashboardNavigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
