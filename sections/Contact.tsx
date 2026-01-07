"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  "Mobile App", "Website Design", "Branding", 
  "Webflow development", "App design", "Graphic design", "Wordpress"
];

// Reusable Underline Input
const UnderlineInput = ({ label, placeholder, type = "text" }: any) => (
  <div className="group flex flex-col w-full">
    <label className="text-lg font-bold mb-2">
      {label}<span className="text-neutral-400">*</span>
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="bg-transparent border-b border-neutral-300 py-3 outline-none focus:border-black transition-colors duration-300 placeholder:text-neutral-400"
    />
  </div>
);

const ContactForm = () => {
  const [selectedService, setSelectedService] = useState("Mobile App");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen bg-white py-20 px-6 font-sans text-black">
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* HEADER SECTION */}
        <motion.div variants={itemVariants} className="text-center mb-16 relative">
          <h1 className="text-6xl md:text-8xl font-black leading-tight">
            <span className="text-neutral-400">Say Hi!</span> and tell me about your idea
          </h1>
          <div className="flex justify-center mt-4">
            <svg width="200" height="40" viewBox="0 0 200 40" fill="none" className="md:w-[300px]">
              <path d="M2 35C40 15 120 15 198 10M198 10L180 2M198 10L185 25" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-xl text-neutral-600 mt-8">
            Have a nice works? reach out and let's chat.
          </p>
        </motion.div>

        {/* FORM SECTION */}
        <div className="space-y-12">
          {/* Row 1 */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <UnderlineInput label="Name" placeholder="Hello..." />
            <UnderlineInput label="Email" placeholder="Where can i reply" type="email" />
          </motion.div>

          {/* Row 2 */}
          <motion.div variants={itemVariants}>
            <UnderlineInput label="Company name" placeholder="Your company or website?" />
          </motion.div>

          {/* Row 3: Services Tags */}
          <motion.div variants={itemVariants} className="space-y-6">
            <label className="text-lg font-bold">What's in your mind?<span className="text-neutral-400">*</span></label>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <motion.button
                  key={service}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedService(service)}
                  className={`px-6 py-3 rounded-full border text-sm transition-all duration-300 ${
                    selectedService === service 
                    ? "bg-black text-white border-black" 
                    : "border-neutral-200 text-neutral-600 hover:border-black"
                  }`}
                >
                  {service}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* SUBMIT SECTION */}
          <motion.div variants={itemVariants} className="flex flex-col items-end pt-10 relative">
             {/* Abstract Arrow Decoration */}
             <div className="absolute right-0 -top-4 hidden md:block">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path d="M10 50L50 10M50 10H20M50 10V40" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </div>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#333" }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-12 py-5 rounded-full text-xl font-bold tracking-tight shadow-xl"
            >
              Send Me
            </motion.button>
            <p className="text-neutral-400 text-sm mt-4 italic">
              I'll must get back to you within 24 hours
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;