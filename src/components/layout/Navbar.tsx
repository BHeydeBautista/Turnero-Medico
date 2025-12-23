import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="topbar-gradient text-white">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/img/logo2.png" alt="Gestión Médica" width={36} height={36} priority />
          <span className="font-bold text-lg">Gestión Médica</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm opacity-90">
          <Link href="#" className="pb-1 border-b-2 border-white">Inicio</Link>
          <Link href="#" className="opacity-80">Turnos</Link>
          <Link href="#" className="opacity-80">Obra Social</Link>
          <Link href="#" className="opacity-80">Reportes</Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-sm text-right">
            <div className="opacity-90">Bienvenida,</div>
            <div className="font-semibold">Secretaria</div>
          </div>
          <Image src="/img/avatar.png" alt="avatar" width={36} height={36} className="rounded-full border-2 border-white" />
        </div>
      </div>
    </header>
  );
}
