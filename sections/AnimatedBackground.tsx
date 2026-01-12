"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden ">
      {/* Soft Glow #1 */}
      <motion.div
        animate={{
          x: [0, 300, 0], // move in px
          y: [0, 200, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute 
          top-0
          left-0
          h-[60vw] 
          w-[60vw] 
          rounded-full 
          blur-[220px] 
          opacity-[0.05] 
          bg-lime-300
        "
      />

      {/* Soft Glow #2 */}
      <motion.div
        animate={{
          x: [100, -200, 100],
          y: [50, -150, 50],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute 
          top-0
          left-0
          h-[50vw] 
          w-[50vw] 
          rounded-full 
          blur-[240px] 
          opacity-[0.03] 
          bg-lime-400
        "
      />
    </div>
  );
}
