"use client";

import { motion } from "framer-motion";

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl font-bold tracking-tight text-blue-900 mb-6">
        Gestiona tus Turnos y Trámites
        <br />
        de Obra Social fácilmente
      </h1>

      <p className="text-lg text-blue-700 mb-8 max-w-xl">
        Optimiza el trabajo en la consulta médica con una herramienta
        moderna, rápida y pensada para profesionales.
      </p>

      <div className="flex gap-4">
        <button className="
          bg-blue-600 text-white px-6 py-3 rounded-lg
          shadow-md shadow-blue-500/30
          hover:shadow-lg hover:-translate-y-0.5
          transition-all duration-300
        ">
          Pedir Turno
        </button>

        <button className="
          bg-green-600 text-white px-6 py-3 rounded-lg
          shadow-md shadow-green-500/30
          hover:shadow-lg hover:-translate-y-0.5
          transition-all duration-300
        ">
          Soy Profesional
        </button>
      </div>
    </motion.div>
  );
}
