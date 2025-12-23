"use client";

export default function TurnosDelDia() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="font-semibold text-lg mb-4">Turnos del Día</h3>

      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 border rounded-lg px-3 py-2 text-sm"
          placeholder="Buscar por nombre, documento o teléfono..."
        />
        <button className="bg-blue-600 text-white px-4 rounded-lg text-sm">
          Buscar
        </button>
        <button className="border px-4 rounded-lg text-sm">
          Filtrar
        </button>
      </div>

      <div className="h-48 bg-slate-100 rounded-lg" />
    </div>
  );
}
