"use client";

export default function Header() {
  return (
    <div className="panel p-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">¡Hola Secretaria!</h1>
        <p className="text-sm text-slate-500 mt-1">Bienvenida a tu panel de gestión.</p>
      </div>

      <div className="hidden md:block">
        <img src="/img/illustrations/medical-dashboard.png" alt="illustration" className="w-72 h-20 object-contain" />
      </div>
    </div>
  );
}
