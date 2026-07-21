import FadeIn from './FadeIn';
import ProjectCard from './ProjectCard';
import AnimatedCounter from './AnimatedCounter';
import { PROJECTS } from '../data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-32">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-4 text-[12vw] sm:text-[7vw] md:text-[4.5vw]">
            Projects
          </h2>
        </FadeIn>
        <FadeIn delay={0.05} y={20}>
          <p className="font-mono-cyber text-center text-primary text-sm sm:text-base mb-14 sm:mb-16">
            <AnimatedCounter value={PROJECTS.length} suffix="+" /> hands-on SOC &amp; Blue Team labs
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.number} delay={i * 0.1} y={20}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
