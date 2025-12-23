"use client";

export default function GestionTurnos() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <h3 className="text-[15px] font-semibold text-slate-800 mb-5">Gestión de Turnos</h3>
      <p className="text-[13px] text-slate-600 mb-4">
        Aquí puedes administrar los turnos: crear, confirmar, reagendar o cancelar.
      </p>

      <div className="flex gap-2 mb-5">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-[13px] font-semibold">Nuevo Turno</button>
        <button className="border border-slate-300 px-4 py-2 rounded-md text-[13px] font-semibold text-slate-700">Exportar</button>
      </div>

      {/* Reutilizamos la tabla de turnos del día */}
      <div className="mt-4">
        {/* Puedes importar AppointmentsTable aquí */}
      </div>
    </div>
  );
}
