"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RevealingText from "./RevealingText";

const SectionHeading = ({ sectionSubtitle, sectionTitle, index, color}) => {
  const [count, setCount] = useState(0);
  const numberRef = useRef(null);

  useEffect(() => {
    const controls = animate(0, index, {
      delay:0.5,
      duration: 0.3,
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });
    return () => controls.stop();
  }, [index]);

  const formattedNumber = count < 10 ? `0${count}` : count;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`space-y-6 md:space-y-8 ${color? color:'text-black'}`}
    >
      {/* Subtitle */}
      <RevealingText
        className="text-lg text-neutral-500 font-bold overflow-hidden"
      >
        • {sectionSubtitle}
      </RevealingText>

      {/* Title */}
      <RevealingText className={'text-[88px] md:text-[80px] leading-[0.95] font-black tracking-tight text-wrap'}>{sectionTitle}</RevealingText>

      {/* Number */}
      <RevealingText        className="text-[72px] md:text-[96px] font-black text-neutral-300 block"
      >
        {formattedNumber}
      </RevealingText>
    </motion.div>
  );
};

export default SectionHeading;
