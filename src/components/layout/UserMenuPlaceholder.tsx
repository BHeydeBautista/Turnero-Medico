import Link from "next/link";

export function UserMenuPlaceholder() {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="hidden sm:inline">Bienvenido</span>
      <Link
        href="/login"
        className="bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md"
      >
        Iniciar sesión
      </Link>
    </div>
  );
}
