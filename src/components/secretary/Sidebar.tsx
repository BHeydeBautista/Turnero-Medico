"use client";

const items = [
  { label: "Dashboard", icon: "📊" },
  { label: "Gestión de Turnos", icon: "📅" },
  { label: "Gestión de Obra Social", icon: "🧾" },
  { label: "Mensajería Automática", icon: "💬" },
  { label: "Reportes", icon: "📈" },
];

export default function Sidebar() {
  return (
    <aside className="w-[240px] panel p-4">
      <div className="mb-4 px-2">
        <div className="text-sm font-semibold mb-2">Panel</div>
        <div className="text-xs text-muted">Atención y gestión</div>
      </div>

      <nav className="space-y-2">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm cursor-pointer ${
              i === 0
                ? "bg-blue-600 text-white font-semibold"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <div className={`w-8 h-8 rounded flex items-center justify-center ${i === 0 ? 'bg-white/10' : 'bg-slate-100'}`}>
              <span>{item.icon}</span>
            </div>
            <div>{item.label}</div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
