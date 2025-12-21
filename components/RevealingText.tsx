import { motion } from "framer-motion";
import { ReactNode } from "react";

const RevealingText = ({children,className}: {children:ReactNode,className:string|null }) => {
  return (
    <div className="overflow-hidden">
      <motion.h2
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={` ${className}`}
      >
        {children}
      </motion.h2>
    </div>
  );
};

export default RevealingText;
