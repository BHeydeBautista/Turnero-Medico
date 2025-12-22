"use client";

import { motion } from "framer-motion";
import { CalendarDays, FilePlus, MessageCircle } from "lucide-react";

const features = [
  {
    title: "Gestión de Turnos",
    description: "Administra turnos médicos de forma rápida y ordenada.",
    icon: CalendarDays,
  },
  {
    title: "Cargas de Obras Sociales",
    description: "Carga y seguimiento de trámites con obras sociales.",
    icon: FilePlus,
  },
  {
    title: "Mensajería Automática",
    description: "Notificaciones y recordatorios automáticos a pacientes.",
    icon: MessageCircle,
  },
];

export function Features() {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800">
          Funciones Principales
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="mt-12 grid md:grid-cols-3 gap-10"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="p-4 rounded-full bg-blue-100 text-blue-600">
                <feature.icon size={28} />
              </div>

              <h3 className="mt-6 font-semibold text-lg">
                {feature.title}
              </h3>

              <p className="mt-2 text-slate-600 max-w-xs">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
