import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Network, Terminal } from 'lucide-react';
import LiveProjectButton from './LiveProjectButton';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

const ICONS = {
  shield: ShieldCheck,
  network: Network,
  terminal: Terminal,
};

export default function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const Icon = ICONS[project.icon];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh]" style={{ position: 'relative' }}>
      <motion.div
        className="sticky top-24 md:top-32 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]"
        style={{ scale, top: `calc(6rem + ${index * 28}px)` }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between gap-4 mb-6 md:mb-8 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="text-[#D7E2EA] font-black"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-medium">
                {project.category}
              </span>
              <span className="text-[#D7E2EA] uppercase font-medium text-lg sm:text-2xl md:text-3xl">
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.link} />
        </div>

        {/* Bottom row -- icon visual + description */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch">
          <div
            className="flex items-center justify-center rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex-shrink-0"
            style={{
              width: '100%',
              maxWidth: '220px',
              minHeight: '160px',
              background:
                'radial-gradient(circle at 30% 25%, rgba(215,226,234,0.14) 0%, rgba(12,12,12,0.5) 70%)',
              border: '1px solid rgba(215,226,234,0.2)',
            }}
          >
            <Icon
              size={64}
              strokeWidth={1.25}
              className="text-[#D7E2EA]"
              style={{ filter: 'drop-shadow(0 0 24px rgba(187,204,215,0.35))' }}
            />
          </div>
          <div className="flex flex-col justify-center gap-4 flex-1">
            <p
              className="text-[#D7E2EA]/80 font-light leading-relaxed"
              style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}
            >
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[#D7E2EA] uppercase tracking-wider text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ border: '1px solid rgba(215,226,234,0.3)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
