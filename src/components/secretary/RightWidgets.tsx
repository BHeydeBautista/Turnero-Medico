"use client";

const pendientes = [
  { time: "19:20", name: "Amirela Fernández", phone: "100 - 101 123 5925" },
  { time: "19:00", name: "Aminda Santes", phone: "125 - 361 123 5923" },
  { time: "15:00", name: "Jariao Lulia", phone: "123 - 141 195 2970" },
];

export default function RightWidgets() {
  return (
    <div className="space-y-5">
      {/* Mensajes de WhatsApp */}
      <div className="bg-white border border-slate-200 rounded-xl p-5">
        <h4 className="text-[15px] font-semibold text-slate-800 mb-1">Mensajes Pendientes de Whatsapp</h4>
        <p className="text-[13px] text-slate-500 mb-4">3 Mensajes por atender</p>
        <button className="w-full bg-green-600 text-white py-2 rounded-md text-[13px] font-semibold">Abrir WhatsApp</button>
      </div>

      {/* Turnos por Confirmar */}
      <div className="bg-white border border-slate-200 rounded-xl p-5">
        <h4 className="text-[15px] font-semibold text-slate-800 mb-3">Turnos por Confirmar</h4>
        <div className="space-y-4">
          {pendientes.map((p) => (
            <div key={p.name} className="flex items-center gap-3">
              <img src="/img/avatar.png" alt="avatar" className="w-9 h-9 rounded-full" />
              <div className="flex-1">
                <div className="text-[13px] font-semibold text-slate-800">{p.name}</div>
                <div className="text-[12px] text-slate-500">{p.time} · {p.phone}</div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="bg-green-600 text-white text-[13px] px-3 py-1 rounded-md font-medium">Confirmar</button>
                <button className="border border-slate-300 text-[13px] px-3 py-1 rounded-md text-slate-700 font-medium">Reagendar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
