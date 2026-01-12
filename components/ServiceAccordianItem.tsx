"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import RevealingText from "./RevealingText";

export const ServiceAccordionItem = ({ service }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-[1px] border-black my-2 p-10 bg-white">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-4">
          <span className="text-neutral-400 group-hover:text-neutral-700 transition">
            {service.icon}
          </span>
          
          <RevealingText className="text-4xl font-light text-neutral-900">
            {service.title}
          </RevealingText>
        </div>

        {/* Plus icon */}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-neutral-500"
        >
          <Plus size={20} strokeWidth={1.5} />
        </motion.span>
      </button>

      {/* Expandable Content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-6 pl-[3.25rem] space-y-6 text-lg text-neutral-600">
              
              {/* Description */}
              <p className="max-w-xl">
                {service.desc}
              </p>

              {/* Bullets */}
              <div>
                <h4 className="text-neutral-900 font-medium mb-3">
                  What I deliver
                </h4>
                <ul className="space-y-2">
                  {service.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-neutral-900 font-medium mb-3">
                  Core stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((s, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1 text-xs rounded-full
                        border border-neutral-200 bg-neutral-50
                        text-neutral-700
                      "
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
