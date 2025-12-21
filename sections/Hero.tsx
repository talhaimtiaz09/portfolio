"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowUpRight, FileText, Send } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col bg-white overflow-hidden">
      
      {/* MAIN CONTENT AREA (70% Height) */}
      <div className="flex-[7] grid grid-cols-1 lg:grid-cols-2 border-b border-black">
        
        {/* LEFT COLUMN: BRANDING */}
        <div className="flex flex-col justify-center px-10 md:px-20 py-12 border-r border-black">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-2">
              Hi, I am <span className="text-black">Talha Imtiaz</span>
            </h3>
            
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
              CREATIVE <br />
              <span className="text-teal-500">SOFTWARE</span> <br />
              <span className="text-slate-400">ENGINEER</span>
            </h1>
            
            <p className="mt-8 text-gray-600 max-w-sm text-base md:text-lg leading-relaxed">
              I specialize in building high-performance web applications and 
              pixel-perfect user interfaces that help founders scale their visions 
              into reality.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-500 text-white px-8 py-4 font-bold uppercase tracking-widest text-xs flex items-center gap-2"
              >
                <Send size={16} /> Hire Me
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-4 font-bold uppercase tracking-widest text-xs flex items-center gap-2"
              >
                <FileText size={16} /> Resume
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: VISUALS & SOCIALS */}
        <div className="bg-gradient-to-bl from-teal-200 to-white relative flex items-center justify-center p-8 overflow-hidden">
          
          {/* SOCIAL ICON BAR - TOP LEFT */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="absolute top-8 left-8 flex flex-col gap-4 z-30 bg-white/90 p-3 rounded-2xl shadow-sm border border-black/5"
          >
            <a href="#" className="hover:text-[#008060] transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-[#008060] transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-[#008060] transition-colors"><Instagram size={20} /></a>
          </motion.div>

          {/* MAIN IMAGE CONTAINER */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 w-full max-w-sm aspect-[4/5] bg-gray-200 border-[10px] border-white shadow-2xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" 
              alt="Professional Portrait" 
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>

          {/* DECORATIVE STICKER */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 right-10 z-20 w-32 h-32 hidden md:block"
          >
            <img 
              src="https://cdn-icons-png.flaticon.com/512/7440/7440059.png" // Placeholder for the "Welcome" stamp style icon
              className="w-full h-full opacity-80"
              alt="Stamp"
            />
          </motion.div>
        </div>
      </div>

      {/* FEATURE BAR (30% Height) */}
      <div className="flex-[3] grid grid-cols-2 lg:grid-cols-4 w-full bg-white">
        {[
          { id: "01", title: "CRAFTSMANSHIP", desc: "Clean architecture and scalable patterns for long-term growth." },
          { id: "02", title: "INDIVIDUALITY", desc: "Custom-tailored solutions that reflect your brand's unique identity." },
          { id: "03", title: "SUSTAINABILITY", desc: "Writing efficient, maintainable code that lasts for years." },
          { id: "04", title: "BEST QUALITY", desc: "Rigorous testing and optimization for a seamless user experience." },
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ backgroundColor: "#f9fafb" }}
            className="p-10 border-r border-black last:border-r-0 flex flex-col justify-center"
          >
            <div className="flex items-start gap-4">
              <span className="text-sm font-bold opacity-30 mt-1">{item.id}</span>
              <div>
                <h3 className="text-lg font-black uppercase tracking-tighter mb-3 leading-none">{item.title}</h3>
                <p className="text-sm text-gray-500 max-w-[200px] leading-tight font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;