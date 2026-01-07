'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CASE_STUDIES = [
  {
    id: '01',
    title: 'Robin Relay',
    subtitle: 'AI Based Slack SRE Assistant',
    img: 'https://cdn.prod.website-files.com/61dd9ddd76c6a0f7537a4c75/65dde5465fc2146bc3c858dc_Card%20-%20Kolecto.webp',
  },
  {
    id: '02',
    title: 'Jindo',
    subtitle: 'Multiplayer Jam Game',
    img: 'https://cdn.prod.website-files.com/61dd9ddd76c6a0f7537a4c75/65dde5465fc2146bc3c858dc_Card%20-%20Kolecto.webp',
  },
  {
    id: '03',
    title: 'Prime Sperm',
    subtitle: 'CASA – Medical App',
    img: 'https://cdn.prod.website-files.com/61dd9ddd76c6a0f7537a4c75/65dde5465fc2146bc3c858dc_Card%20-%20Kolecto.webp',
  },
];

const CaseCard = ({ study, isLarge = false }: { study: any; isLarge?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className={`group relative overflow-hidden rounded-3xl bg-neutral-100 ${
      isLarge ? 'h-full' : 'h-[300px]'
    }`}
  >
    <Image
      src={study.img}
      alt={study.title}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
      <p className="text-sm font-medium mb-1">{study.subtitle}</p>
      <h3 className="text-2xl font-bold">{study.title}</h3>
    </div>
  </motion.div>
);

export default function CaseStudies() {
  return (
    <section className="bg-white h-screen py-24 px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* The 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* LEFT COLUMN: Header + 2 Smaller Cards */}
          <div className="flex flex-col gap-6">
            {/* 1x1: Text Content */}
            <div className="py-10 pr-10">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-7xl md:text-8xl font-black leading-none mb-6 italic"
              >
                FEATURED <br /> WORK
              </motion.h2>
              <p className="text-neutral-500 max-w-sm text-lg leading-relaxed">
                A selection of high-impact projects where engineering meets human-centric design.
              </p>
            </div>

            {/* 2x1: Two Smaller Cases side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CaseCard study={CASE_STUDIES[0]} />
              <CaseCard study={CASE_STUDIES[1]} />
            </div>
          </div>

          {/* RIGHT COLUMN: 1 Large Case Study */}
          <div className="lg:h-full min-h-[500px]">
            <CaseCard study={CASE_STUDIES[2]} isLarge={true} />
          </div>
          
        </div>
      </div>
    </section>
  );
}