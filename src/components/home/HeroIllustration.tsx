"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center"
    >
      <Image
        src="/img/illustrations/medical-dashboard.png"
        alt="Gestión médica"
        width={520}
        height={520}
        priority
      />
    </motion.div>
  );
}
