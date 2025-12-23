"use client";

export default function GestionObraSocial() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <h3 className="text-[15px] font-semibold text-slate-800 mb-5">Gestión de Obra Social</h3>
      <p className="text-[13px] text-slate-600 mb-4">
        Administra trámites, verifica estados y gestiona documentación de las obras sociales.
      </p>

      <div className="flex gap-2 mb-5">
        <button className="bg-green-600 text-white px-4 py-2 rounded-md text-[13px] font-semibold">Nuevo Trámite</button>
        <button className="border border-slate-300 px-4 py-2 rounded-md text-[13px] font-semibold text-slate-700">Exportar</button>
      </div>

      {/* Reutilizamos TramitesOS */}
      <div className="mt-4">
        {/* Puedes importar TramitesOS aquí */}
      </div>
    </div>
  );
}
