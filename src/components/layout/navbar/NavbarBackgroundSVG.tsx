"use client";
import { motion } from "framer-motion";

export default function NavbarBackgroundSVG() {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1400 96"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="blue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>

      <motion.path
        d="M 700 48 Q 500 30, 300 40 Q 200 35, 120 48"
        stroke="url(#blue)"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
    </motion.svg>
  );
}
