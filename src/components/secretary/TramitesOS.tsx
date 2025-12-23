"use client";

const tramites = [
  { id: "#155-07", paciente: "Daniela Abuíro", os: "Chekse Pojosio", estado: "Pendiente" },
  { id: "#193-03", paciente: "Mariana Garlos", os: "Contral Segured", estado: "Pendiente" },
  { id: "#193-58", paciente: "Emilia Garlos", os: "Rando Anegos", estado: "Pendiente" },
];

export default function TramitesOS() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 mt-4">
      <h3 className="text-[15px] font-semibold text-slate-800 mb-5">Trámites de Obra Social en Proceso</h3>

      <div className="flex gap-2 mb-5">
        <input
          className="flex-1 border border-slate-300 rounded-md px-3 py-2 text-[13px] placeholder:text-slate-400"
          placeholder="Buscar por Nº trámite o paciente..."
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-[13px] font-semibold">Buscar</button>
        <button className="border border-slate-300 px-4 py-2 rounded-md text-[13px] font-semibold text-slate-700">Filtrar</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-[13px] text-slate-500 font-medium">
            <tr>
              <th className="py-3 px-3">N° Trámite</th>
              <th className="py-3 px-3">Paciente</th>
              <th className="py-3 px-3">Obra Social</th>
              <th className="py-3 px-3">Estado</th>
              <th className="py-3 px-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-[13px] text-slate-700">
            {tramites.map((t) => (
              <tr key={t.id} className="border-b last:border-0">
                <td className="py-3 px-3">{t.id}</td>
                <td className="py-3 px-3">{t.paciente}</td>
                <td className="py-3 px-3 text-slate-600">{t.os}</td>
                <td className="py-3 px-3">
                  <span className="inline-block px-2 py-1 text-[12px] rounded-full bg-amber-100 text-amber-700 font-medium">
                    {t.estado}
                  </span>
                </td>
                <td className="py-3 px-3">
                  <button className="text-[13px] bg-blue-600 text-white px-3 py-1 rounded-md font-medium">Ver</button>
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
