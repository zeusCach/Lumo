/**
 * Header sin autenticación todavía. El bloque de usuario es un placeholder
 * hasta que exista un feature de auth.
 */
export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-neutral-200 bg-white px-6">
      <span className="text-base font-semibold text-neutral-900">Lumo</span>

      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-neutral-200" />
        <span className="text-sm text-neutral-500">Usuario</span>
      </div>
    </header>
  );
}
