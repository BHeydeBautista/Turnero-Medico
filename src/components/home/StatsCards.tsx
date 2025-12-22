"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Clock, FileText } from "lucide-react";
import { colorVariants } from "@/lib/colorVariants";

const stats = [
  {
    title: "Turnos del Día",
    value: "20",
    description: "Turnos para hoy",
    icon: CalendarCheck,
    button: "Ver Detalles",
    color: "blue",
  },
  {
    title: "Turnos por Confirmar",
    value: "5",
    description: "Turnos pendientes",
    icon: Clock,
    button: "Ver Pendientes",
    color: "yellow",
  },
  {
    title: "Trámites de Obra Social",
    value: "8",
    description: "Trámites en proceso",
    icon: FileText,
    button: "Ir a Trámites",
    color: "green",
  },
] as const;

export function StatsCards() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {stats.map((stat) => {
            const color = colorVariants[stat.color];

            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${color.bg} ${color.text}`}>
                    <stat.icon />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{stat.title}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                </div>

                <p className="mt-4 text-slate-600">{stat.description}</p>

                <button className="mt-6 text-sm font-semibold text-blue-600 hover:underline">
                  {stat.button} →
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
