"use client";

export default function Topbar() {
  return (
    <header className="topbar-gradient text-white">
      <div className="max-w-[1400px] mx-auto w-full px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center text-2xl">🩺</div>
          <div className="font-semibold text-lg">Gestión Médica</div>
        </div>

        <nav className="flex items-center gap-8 text-sm opacity-90">
          <a className="pb-2 border-b-2 border-white">Inicio</a>
          <a className="hover:underline">Turnos</a>
          <a className="hover:underline">Obra Social</a>
          <a className="hover:underline">Reportes</a>
        </nav>

        <div className="flex items-center gap-3 text-sm">
          <div className="text-right hidden sm:block">
            <div className="opacity-90">Bienvenida,</div>
            <div className="font-semibold">Secretaria</div>
          </div>
          <img src="/img/avatar.png" alt="avatar" className="w-9 h-9 rounded-full border-2 border-white" />
        </div>
      </div>
    </header>
  );
}
