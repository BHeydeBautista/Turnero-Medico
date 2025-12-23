// src/components/home/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
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

        {/* Imagen/Ilustración con efecto "escribiendo" */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="overflow-hidden rounded-xl"
            >
              <Image
                src="/img/illustrations/medical-dashboard.png"
                alt="Dashboard médico"
                width={640}
                height={420}
                className="object-cover w-full h-auto"
              />
            </motion.div>

            {/* Caret animado para simular escritura */}
            <motion.div
              initial={{ x: 0, opacity: 1 }}
              whileInView={{ x: "100%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="pointer-events-none absolute top-1/4 left-0 h-1/2 w-0"
            >
              <div className="absolute left-0 top-0 h-full w-0.5 bg-white animate-blink" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
