import FadeIn from './FadeIn';
import { Mail, Linkedin, Github, FileDown, MapPin } from 'lucide-react';

const CONTACT_LINKS = [
  { label: 'hariprakash5881@gmail.com', href: 'mailto:hariprakash5881@gmail.com', icon: Mail },
  { label: 'linkedin.com/in/hari-prakash-hp', href: 'https://linkedin.com/in/hari-prakash-hp', icon: Linkedin },
  { label: 'github.com/HARIPRAKASH805', href: 'https://github.com/HARIPRAKASH805', icon: Github },
  { label: 'Download Resume', href: './Hariprakash_P_Resume.pdf', icon: FileDown, download: true },
];

export default function ContactSection() {
  return (
    <section id="contact" className="px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-32">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight mb-6 text-[12vw] sm:text-[7vw] md:text-[4.5vw]">
            Contact
          </h2>
        </FadeIn>

        <FadeIn delay={0.05} y={20}>
          <div className="flex items-center justify-center gap-4 mb-3 flex-wrap">
            <span className="inline-flex items-center gap-2 font-mono-cyber text-accent text-xs sm:text-sm border border-accent/30 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Available for Internship
            </span>
          </div>
          <p className="flex items-center justify-center gap-1.5 text-ink/60 text-sm mb-12">
            <MapPin size={14} />
            Pollachi, Tamil Nadu, India
          </p>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <div className="flex flex-col items-center gap-4">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                download={link.download}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 text-ink/80 hover:text-primary text-sm sm:text-base font-medium transition-colors duration-200"
              >
                <link.icon size={16} className="text-primary" />
                {link.label}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
