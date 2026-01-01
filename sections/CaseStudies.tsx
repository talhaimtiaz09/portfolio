// CaseStudies.tsx
'use client'
import { useRef } from 'react';
import { CASE_STUDIES } from '@/contants/cases';
import { CaseStudyCard } from '@/components/CaseStudyCard';

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);


  return (
    <section ref={sectionRef} className="bg-gradient-to-br to-[#1b1b1b] from-[#1e1e1e] text-white">
      <div style={{ height: `${100}vh` }} className="relative">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          
          {/* Header Area */}
          <div className="flex justify-between items-end px-12 mb-12 w-full max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold tracking-tight">Latest projects</h2>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                ←
              </button>
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                →
              </button>
            </div>
          </div>

          {/* Horizontal Track */}
          <div  className="flex gap-x-16 px-12 justify-center">
            {CASE_STUDIES.map((item, index) => (
              <CaseStudyCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}