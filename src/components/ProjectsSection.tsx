import FadeIn from './FadeIn';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/projects';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} totalCards={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}
