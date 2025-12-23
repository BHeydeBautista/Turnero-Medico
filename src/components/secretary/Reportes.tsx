"use client";

export default function Reportes() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <h3 className="text-[15px] font-semibold text-slate-800 mb-5">Reportes</h3>
      <p className="text-[13px] text-slate-600 mb-4">
        Visualiza estadísticas de turnos, trámites y mensajes enviados.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-50 rounded-lg p-4">
          <h4 className="text-[13px] font-semibold text-slate-700 mb-2">Turnos Confirmados</h4>
          <p className="text-[24px] font-bold text-blue-600">120</p>
        </div>
        <div className="bg-slate-50 rounded-lg p-4">
          <h4 className="text-[13px] font-semibold text-slate-700 mb-2">Trámites en Proceso</h4>
          <p className="text-[24px] font-bold text-green-600">45</p>
        </div>
        <div className="bg-slate-50 rounded-lg p-4">
          <h4 className="text-[13px] font-semibold text-slate-700 mb-2">Mensajes Enviados</h4>
          <p className="text-[24px] font-bold text-amber-600">300</p>
        </div>
        <div className="bg-slate-50 rounded-lg p-4">
          <h4 className="text-[13px] font-semibold text-slate-700 mb-2">Reportes Generados</h4>
          <p className="text-[24px] font-bold text-slate-800">12</p>
        </div>
      </div>
    </div>
  );
}
