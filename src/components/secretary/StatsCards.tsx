"use client";

const stats = [
  { title: "Turnos para hoy", value: 20, color: 'bg-blue-50', accent: 'bg-blue-500', btn: 'Ver Turnos' },
  { title: "Turnos por Confirmar", value: 5, color: 'bg-amber-50', accent: 'bg-amber-500', btn: 'Ver Pendientes' },
  { title: "Trámites de Obra Social en Proceso", value: 8, color: 'bg-green-50', accent: 'bg-green-600', btn: 'Ver Trámites' },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {stats.map((s) => (
        <div key={s.title} className="panel p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">{s.title}</p>
            <p className="text-3xl font-bold text-slate-800 mt-2">{s.value}</p>
            <button className={`mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded ${s.accent === 'bg-amber-500' ? 'bg-amber-500 text-white' : s.accent === 'bg-green-600' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'}`}>
              {s.btn} <span className="ml-1">›</span>
            </button>
          </div>

          <div className="w-24 h-24 rounded-lg flex items-center justify-center text-3xl text-white" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.02))'}}>
            <div className={`${s.color} w-16 h-16 rounded-lg flex items-center justify-center`}>
              <span className="text-xl">📋</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
