import Link from "next/link";

export function NavbarLinks() {
  return (
    <nav className="hidden md:flex items-center gap-8 text-sm">
      <Link href="/" className="border-b-2 border-white pb-1">
        Inicio
      </Link>
      <Link href="/turnos">Turnos</Link>
      <Link href="/obra-social">Obra Social</Link>
      <Link href="/reportes">Reportes</Link>
    </nav>
  );
}
