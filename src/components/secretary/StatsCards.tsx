"use client";

const stats = [
  {
    title: "Turnos para hoy",
    value: 20,
    color: "bg-blue-100",
    accent: "bg-blue-600",
    btn: "Ver Turnos",
  },
  {
    title: "Turnos por Confirmar",
    value: 5,
    color: "bg-amber-100",
    accent: "bg-amber-500",
    btn: "Ver Pendientes",
  },
  {
    title: "Trámites de Obra Social en Proceso",
    value: 8,
    color: "bg-green-100",
    accent: "bg-green-600",
    btn: "Ver Trámites",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((s) => (
        <div
          key={s.title}
          className="bg-white border border-slate-200 rounded-xl p-5 flex items-center justify-between"
        >
          <div>
            <p className="text-[13px] text-slate-500 font-medium">{s.title}</p>
            <p className="text-[32px] font-bold text-slate-800 mt-1">{s.value}</p>
            <button
              className={`mt-4 inline-flex items-center gap-2 px-4 py-2 text-[13px] font-semibold rounded-md ${s.accent} text-white`}
            >
              {s.btn}
              <span className="text-[16px] leading-none">›</span>
            </button>
          </div>

          <div className="w-20 h-20 rounded-xl flex items-center justify-center bg-gradient-to-b from-white/10 to-black/5">
            <div
              className={`${s.color} w-14 h-14 rounded-xl flex items-center justify-center`}
            >
              <span className="text-[20px]">📋</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
