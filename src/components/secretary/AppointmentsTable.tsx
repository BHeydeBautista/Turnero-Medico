"use client";

const rows = [
  { time: "09:00", name: "Daniela Abuíro", phone: "555 555 7889", os: "Aiparec", status: "Confirmado" },
  { time: "10:00", name: "Mariana Aequdar", phone: "555 555 9569", os: "Hospitusa", status: "Confirmado" },
  { time: "11:05", name: "Emilia Garlos", phone: "555 556 6928", os: "Surgueas", status: "Confirmado" },
  { time: "11:30", name: "Jenare Buarche", phone: "555 556 7889", os: "Segsured", status: "Confirmado" },
  { time: "14:30", name: "Sabina Amor", phone: "555 556 7889", os: "Rando Anegos", status: "Confirmado" },
];

export default function AppointmentsTable() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <h3 className="text-[15px] font-semibold text-slate-800 mb-5">Turnos del Día</h3>

      <div className="flex gap-2 mb-5">
        <input
          className="flex-1 border border-slate-300 rounded-md px-3 py-2 text-[13px] placeholder:text-slate-400"
          placeholder="Buscar por nombre, documento o teléfono..."
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-[13px] font-semibold">Buscar</button>
        <button className="border border-slate-300 px-4 py-2 rounded-md text-[13px] font-semibold text-slate-700">Filtrar</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-[13px] text-slate-500 font-medium">
            <tr>
              <th className="py-3 px-3">Hora</th>
              <th className="py-3 px-3">Paciente</th>
              <th className="py-3 px-3">Teléfono</th>
              <th className="py-3 px-3">Obra Social</th>
              <th className="py-3 px-3">Estado</th>
              <th className="py-3 px-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-[13px] text-slate-700">
            {rows.map((r) => (
              <tr key={r.name} className="border-b last:border-0">
                <td className="py-3 px-3 align-middle">{r.time}</td>
                <td className="py-3 px-3 flex items-center gap-3">
                  <img src="/img/avatar.png" alt="avatar" className="w-7 h-7 rounded-full" />
                  <div className="font-semibold">{r.name}</div>
                </td>
                <td className="py-3 px-3">{r.phone}</td>
                <td className="py-3 px-3 text-blue-600 font-medium">{r.os}</td>
                <td className="py-3 px-3">
                  <span className="inline-block px-2 py-1 text-[12px] rounded-full bg-blue-100 text-blue-700 font-medium">
                    {r.status}
                  </span>
                </td>
                <td className="py-3 px-3">
                  <button className="text-[13px] bg-blue-600 text-white px-3 py-1 rounded-md font-medium">Reagendar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-5 text-[13px] text-slate-500">
        <div>Página 1 de 3</div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-slate-300 rounded-md">1</button>
          <button className="px-3 py-1 border border-slate-300 rounded-md">2</button>
          <button className="px-3 py-1 border border-slate-300 rounded-md">3</button>
        </div>
      </div>
    </div>
  );
}
