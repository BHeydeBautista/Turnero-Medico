"use client";

import Link from "next/link";
import {
  BarChart,
  CalendarDays,
  FileText,
  MessageCircle,
  LineChart,
} from "lucide-react";

const items = [
  { label: "Dashboard", href: "/secretaria/dashboard", icon: <BarChart size={18} /> },
  { label: "Gestión de Turnos", href: "/secretaria/turnos", icon: <CalendarDays size={18} /> },
  { label: "Gestión de Obra Social", href: "/secretaria/obra-social", icon: <FileText size={18} /> },
  { label: "Mensajería Automática", href: "/secretaria/mensajeria", icon: <MessageCircle size={18} /> },
  { label: "Reportes", href: "/secretaria/reportes", icon: <LineChart size={18} /> },
];

export default function Sidebar() {
  return (
    <aside className="w-[240px] bg-white border-r border-slate-200 px-4 py-6 self-start">
      <div className="mb-6 px-2">
        <div className="text-[13px] font-semibold text-slate-700 mb-1">Panel</div>
        <div className="text-[11px] text-slate-500">Atención y gestión</div>
      </div>

      <nav className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-3 py-[10px] rounded-md text-[14px] font-medium text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <div className="w-8 h-8 rounded-md flex items-center justify-center bg-slate-100 text-slate-700">
              {item.icon}
            </div>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
