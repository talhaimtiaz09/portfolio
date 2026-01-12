"use client";
import { Great_Vibes } from "next/font/google";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      id="hero"
      className="relative w-full h-screen grid grid-cols-4 overflow-hidden py-10"
    >


      {/* LEFT CONTENT */}
      <motion.div
        className="col-span-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="text-2xl md:text-9xl" variants={item}>
          <h1 className={`text-xl md:text-8xl ${greatVibes.className}`}>
            Creative
          </h1>
          <h1 className="font-bold">
            SOFTWARE
            <br />
            ENGINEER
          </h1>
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          className="flex gap-4 my-10"
          variants={item}
        >
          {["RESUME", "HIRE"].map((label) => (
            <motion.button
              key={label}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-4 py-1 border border-black hover:bg-black hover:text-white transition"
            >
              {label}
            </motion.button>
          ))}
        </motion.div>

        {/* NAME */}
        <motion.h1
          variants={item}
          className={`absolute bottom-40 text-6xl ${greatVibes.className}`}
        >
          Talha zimtiaz
        </motion.h1>
      </motion.div>

      {/* HERO IMAGE */}
      <motion.img
        src="hero-img-3.png"
        alt=""
        style={{ y: imageY }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="sm:absolute right-40 rounded-xl -bottom-4 sm:w-[350px] md:w-[500px] lg:w-[1300px]"
      />

      {/* SOCIAL ICONS */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col gap-4 absolute bottom-1/4 right-4 rounded-full p-2 border border-gray-300 bg-white/80 backdrop-blur"
      >
        {[Github, Linkedin, Instagram].map((Icon, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.2,
              rotate: 5,
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cursor-pointer"
          >
            <Icon />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
