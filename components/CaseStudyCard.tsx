// components/CaseStudyCard.tsx
import { motion, useTransform, MotionValue } from 'framer-motion';

interface CardProps {
  item: typeof CASE_STUDIES[0];
  index: number;
  total: number;
  progress: MotionValue<number>;
}

export const CaseStudyCard = ({ item, index, total, progress }: CardProps) => {
  const start = index / total;
  const end = (index + 1) / total;

  // Transforms
  const y = useTransform(progress, [start, end], ['120vh', `${index * 5}%`]);
  const scale = useTransform(progress, [start, start + 0.15, end], [1.02, 1, 0.985]);
  const rotate = useTransform(progress, [start, start + 0.1], ['1deg', '0deg']);
  const opacity = useTransform(progress, [start, start + 0.08], [0, 1]);
  const boxShadow = useTransform(progress, [start, end], [
    '0px 40px 80px rgba(0,0,0,0.35)',
    '0px 20px 40px rgba(0,0,0,0.25)',
  ]);

  return (
    <motion.div
      style={{ y, scale, rotate, opacity, boxShadow, zIndex: index + 1 }}
      className={`absolute w-full h-[75vh] rounded-3xl overflow-hidden p-6 cursor-pointer ${item.bgColor} ${item.textColor}`}
      whileHover={{ y: '-6px', scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 180, damping: 18 }}
    >
      <motion.img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 m-6 object-contain opacity-80"
        whileHover={{ scale: 1.05, y: -10 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        <span className="text-xl font-mono">{item.id}</span>
        <div className="max-w-sm">
          <h4 className="text-sm uppercase tracking-widest opacity-70">{item.subtitle}</h4>
          <h3 className="text-4xl font-bold mt-1">{item.title}</h3>
          <p className="text-sm mt-4 opacity-90">{item.description}</p>
          <div className="mt-6 flex items-center gap-2 font-semibold group">
            <span className="border-b border-current text-sm">Explore {item.title}</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};