"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export function FeatureCard({ title, description, icon, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="
        bg-white rounded-xl p-8 text-center
        shadow-sm hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
        text-black
      "
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}
