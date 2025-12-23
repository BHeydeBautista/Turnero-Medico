"use client";

const rows = [
  { time: '09:00', name: 'Daniela Abuíro', phone: '555 555 7889', os: 'Aiparec', status: 'Confirmado' },
  { time: '10:00', name: 'Mariana Aequdar', phone: '555 555 9569', os: 'Hospitusa', status: 'Confirmado' },
  { time: '11:05', name: 'Emilia Garlos', phone: '555 556 6928', os: 'Surgueas', status: 'Confirmado' },
  { time: '11:30', name: 'Jenare Buarche', phone: '555 556 7889', os: 'Segsured', status: 'Confirmado' },
  { time: '14:30', name: 'Sabina Amor', phone: '555 556 7889', os: 'Rando Anegos', status: 'Confirmado' },
];

export default function AppointmentsTable() {
  return (
    <div className="panel p-6">
      <h3 className="font-semibold mb-4">Turnos del Día</h3>

      <div className="flex gap-3 mb-4">
        <input
          className="flex-1 border rounded-lg px-3 py-2 text-sm"
          placeholder="Buscar por nombre, documento o teléfono..."
        />
        <button className="bg-blue-600 text-white px-4 rounded-lg text-sm">Buscar</button>
        <button className="border px-4 rounded-lg text-sm">Filtrar</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="table-header text-sm text-slate-600">
            <tr>
              <th className="py-3 px-3">Hora</th>
              <th className="py-3 px-3">Paciente</th>
              <th className="py-3 px-3">Teléfono</th>
              <th className="py-3 px-3">Obra Social</th>
              <th className="py-3 px-3">Estado</th>
              <th className="py-3 px-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-sm text-slate-700">
            {rows.map((r) => (
              <tr key={r.name} className="border-b last:border-0">
                <td className="py-3 px-3 align-middle">{r.time}</td>
                <td className="py-3 px-3 flex items-center gap-3">
                  <img src="/img/avatar.png" alt="a" className="w-8 h-8 rounded-full" />
                  <div>
                    <div className="font-semibold">{r.name}</div>
                  </div>
                </td>
                <td className="py-3 px-3">{r.phone}</td>
                <td className="py-3 px-3 text-blue-600">{r.os}</td>
                <td className="py-3 px-3">
                  <span className="status-pill bg-blue-100 text-blue-700">{r.status}</span>
                </td>
                <td className="py-3 px-3">
                  <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded mr-2">Reagendar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4 text-sm">
        <div className="text-slate-500">Página 1 de 3</div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
        </div>
      </div>
    </div>
  );
}
