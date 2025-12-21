'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { CASE_STUDIES } from '@/contants/cases';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import SectionLayout from '@/layouts/SectionLayout';

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 22,
    mass: 0.9,
  });

  return (
    <SectionLayout
      ref={sectionRef}
      sectionSubtitle="My work"
      sectionTitle="CASE STUDIES"
      sectionIndex={7}
      textColor="text-white"
      sectionColor="bg-black"
      stickyHeading
    >
      {/* Scroll height controller */}
      <div
        className="relative"
        style={{ height: `${CASE_STUDIES.length * 100}vh` }}
      >
        {/* Pinned viewport */}
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
          {CASE_STUDIES.map((item, index) => (
            <CaseStudyCard
              key={item.id}
              item={item}
              index={index}
              total={CASE_STUDIES.length}
              progress={smoothProgress}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
