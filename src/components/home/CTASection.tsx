"use client";

import { motion } from "framer-motion";

export function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-blue-600 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-4">
        Empezá a optimizar tu consultorio hoy
      </h2>
      <p className="mb-8">
        Menos tiempo administrativo, más tiempo para tus pacientes.
      </p>
      <button className="
        bg-white text-blue-600 px-6 py-3 rounded-lg
        font-semibold hover:scale-105 transition
      ">
        Crear Cuenta
      </button>
    </motion.section>
  );
}
