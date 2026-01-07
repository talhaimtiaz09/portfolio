// CaseStudyCard.tsx
import { motion } from 'framer-motion';

export const CaseStudyCard = ({ item}: { item: any}) => {
  return (
    <div
      className={`relative rounded-xl group cursor-pointer bg-[#222] w-full`}

    >
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full p-10 flex flex-col justify-end">
        <div className="space-y-2">
          <h3 className="text-3xl font-bold leading-tight tracking-tight">
            {item.title}
          </h3>
          <p className="text-gray-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.description}
          </p>
          <div className="pt-4 overflow-hidden">
             <span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/60">
                {item.subtitle}
             </span>
          </div>
        </div>
      </div>
      
      {/* Subtle White Border on Hover */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500 " />
    </div>
  );
};