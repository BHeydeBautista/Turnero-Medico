"use client";

const pendientes = [
  { time: '19-20', name: 'Amirela Fernández', phone: '100 - 101 123 5925' },
  { time: '19-20', name: 'Aminda Santes', phone: '125 - 361 123 5923' },
  { time: '15:00', name: 'Jariao Lulia', phone: '123 - 141 195 2970' },
];

export default function RightWidgets() {
  return (
    <div className="space-y-6">
      <div className="panel p-6">
        <h4 className="font-semibold mb-1">Mensajes Pendientes de Whatsapp</h4>
        <p className="text-sm text-slate-500 mb-4">3 Mensajes por atender</p>
        <button className="w-full bg-green-600 text-white py-2 rounded-md text-sm">Abrir WhatsApp</button>
      </div>

      <div className="panel p-4">
        <h4 className="font-semibold mb-3">Turnos por Confirmar</h4>
        <div className="space-y-3">
          {pendientes.map((p) => (
            <div key={p.name} className="flex items-center gap-3">
              <img src="/img/avatar.png" alt="a" className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="text-xs text-slate-500">{p.time} · {p.phone}</div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="bg-green-600 text-white text-sm px-3 py-1 rounded">Confirmar</button>
                <button className="border text-sm px-3 py-1 rounded">Reagendar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
