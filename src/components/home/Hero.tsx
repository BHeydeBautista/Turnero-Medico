// src/components/home/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Gestiona tus Turnos y Trámites
            <span className="block text-blue-100">
              de manera fácil y rápida
            </span>
          </h1>

          <p className="mt-6 text-blue-100 max-w-lg">
            Optimiza el trabajo en la consulta médica.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Probar el Sistema
            </button>

            <button className="bg-blue-500/20 border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500/30 transition">
              Ver Funciones
            </button>
          </div>
        </motion.div>

        {/* Imagen/Ilustración */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          {/* Acá va la ilustración */}
        </motion.div>
      </div>
    </section>
  );
}
