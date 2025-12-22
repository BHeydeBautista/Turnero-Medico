import Link from "next/link";

export function Navbar() {
  return (
    <header className="
      sticky top-0 z-50
      bg-gradient-to-r from-blue-700 to-blue-900
      shadow-md
    ">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-white">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          🏥 Gestión Médica
        </Link>

        {/* Links */}
        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="/" className="border-b-2 border-white pb-1">
            Inicio
          </Link>
          <Link href="/turnos">Turnos</Link>
          <Link href="/obra-social">Obra Social</Link>
          <Link href="/reportes">Reportes</Link>
        </nav>

        {/* Auth placeholder */}
        <Link
          href="/login"
          className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md text-sm transition"
        >
          Iniciar sesión
        </Link>
      </div>
    </header>
  );
}
