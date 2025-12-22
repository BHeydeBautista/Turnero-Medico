import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/img/logo2.png"     
            alt="Gestión Médica"
            width={36}
            height={36}
            priority
          />
          <span className="font-bold text-lg text-slate-800">
            Gestión Médica
          </span>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          <Link href="#" className="hover:text-slate-900 transition">
            Inicio
          </Link>
          <Link href="#features" className="hover:text-slate-900 transition">
            Funciones
          </Link>
          <Link href="#plans" className="hover:text-slate-900 transition">
            Planes
          </Link>
          <Link href="#contact" className="hover:text-slate-900 transition">
            Contacto
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg text-sm font-medium
                       text-slate-700 border border-slate-300
                       hover:bg-slate-100 transition"
          >
            Ingresar
          </Link>

          <Link
            href="/register"
            className="px-4 py-2 rounded-lg text-sm font-medium
                       bg-blue-600 text-white
                       hover:bg-blue-700 transition"
          >
            Crear cuenta
          </Link>
        </div>
      </div>
    </header>
  );
}
