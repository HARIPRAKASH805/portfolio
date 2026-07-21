import { Github, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glow-card rounded-2xl border border-primary/15 bg-card p-6 sm:p-8 h-full flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <span className="font-mono-cyber text-primary/60 text-xs sm:text-sm">{project.number}</span>
          <h3 className="text-ink font-semibold text-lg sm:text-xl mt-1">{project.name}</h3>
        </div>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name} on GitHub`}
          className="flex-shrink-0 w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center text-ink/70 hover:text-primary hover:border-primary/40 transition-colors duration-200"
        >
          <Github size={16} />
        </a>
      </div>

      <p className="text-ink/70 text-sm leading-relaxed mb-5">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="font-mono-cyber text-primary text-[0.65rem] sm:text-xs border border-primary/25 rounded-full px-3 py-1"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="flex flex-col gap-1.5 mt-auto">
        {project.highlights.map((point) => (
          <li key={point} className="flex items-center gap-2 text-ink/65 text-xs sm:text-sm">
            <CheckCircle2 size={14} className="text-accent flex-shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
