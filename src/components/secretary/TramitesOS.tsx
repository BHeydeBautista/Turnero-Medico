"use client";

const tramites = [
  { id: '#155-07', paciente: 'Daniela Abuíro', os: 'Chekse Pojosio', estado: 'Pendiente' },
  { id: '#193-03', paciente: 'Mariana Garlos', os: 'Contral Segured', estado: 'Pendiente' },
  { id: '#193-58', paciente: 'Emilia Garlos', os: 'Rando Anegos', estado: 'Pendiente' },
];

export default function TramitesOS() {
  return (
    <div className="panel p-6 mt-4">
      <h3 className="font-semibold mb-4">Trámites de Obra Social en Proceso</h3>

      <div className="flex gap-3 mb-4">
        <input className="flex-1 border rounded-lg px-3 py-2 text-sm" placeholder="Buscar por Nº trámite o paciente..." />
        <button className="bg-blue-600 text-white px-4 rounded-lg text-sm">Buscar</button>
        <button className="border px-4 rounded-lg text-sm">Filtrar</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-700">
          <thead className="table-header text-slate-600">
            <tr>
              <th className="py-3 px-3">N° Trámite</th>
              <th className="py-3 px-3">Paciente</th>
              <th className="py-3 px-3">Obra Social</th>
              <th className="py-3 px-3">Estado</th>
              <th className="py-3 px-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tramites.map((t) => (
              <tr key={t.id} className="border-b last:border-0">
                <td className="py-3 px-3">{t.id}</td>
                <td className="py-3 px-3">{t.paciente}</td>
                <td className="py-3 px-3 text-slate-600">{t.os}</td>
                <td className="py-3 px-3"><span className="status-pill bg-amber-100 text-amber-700">{t.estado}</span></td>
                <td className="py-3 px-3"><button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">Ver</button></td>
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
