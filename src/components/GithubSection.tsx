import FadeIn from './FadeIn';
import { Github } from 'lucide-react';

const USERNAME = 'HARIPRAKASH805';

export default function GithubSection() {
  return (
    <section className="px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-32">
      <div className="max-w-4xl mx-auto">
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-14 sm:mb-16 text-[12vw] sm:text-[7vw] md:text-[4.5vw]">
            GitHub
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <div className="glow-card rounded-2xl border border-primary/15 bg-card p-5 sm:p-8 mb-6">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&theme=dark&bg_color=161B22&title_color=00E5FF&icon_color=7C3AED&text_color=F8FAFC&border_color=1f2937&hide_border=true`}
              alt="GitHub stats"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <div className="glow-card rounded-2xl border border-primary/15 bg-card p-5 sm:p-8 mb-8 overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/00E5FF/${USERNAME}`}
              alt="GitHub contribution graph"
              className="w-full h-auto min-w-[600px]"
              loading="lazy"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <div className="text-center">
            <a
              href={`https://github.com/${USERNAME}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-bg bg-primary hover:bg-primary/90 transition-colors duration-200"
            >
              <Github size={16} />
              View All Repositories
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
