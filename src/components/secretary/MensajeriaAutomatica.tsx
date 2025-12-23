"use client";

export default function MensajeriaAutomatica() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <h3 className="text-[15px] font-semibold text-slate-800 mb-5">Mensajería Automática</h3>
      <p className="text-[13px] text-slate-600 mb-4">
        Configura mensajes automáticos para recordatorios de turnos, confirmaciones y notificaciones.
      </p>

      <div className="space-y-4">
        <div className="flex items-center justify-between border-b pb-3">
          <span className="text-[13px] text-slate-700">Recordatorio de Turno</span>
          <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-[13px] font-medium">Editar</button>
        </div>
        <div className="flex items-center justify-between border-b pb-3">
          <span className="text-[13px] text-slate-700">Confirmación Automática</span>
          <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-[13px] font-medium">Editar</button>
        </div>
      </div>
    </div>
  );
}
