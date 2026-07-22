import { useEffect, useState, lazy, Suspense } from 'react';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

const Scene3D = lazy(() => import('./Scene3D'));

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact'];
const ROLES = ['Cybersecurity Engineer', 'SOC Analyst', 'GRC Analyst', 'Threat Hunter'];

function useTypingRotation(words: string[], typeSpeed = 70, pause = 1400) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), typeSpeed / 2);
    } else {
      setDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, pause]);

  return text;
}

export default function HeroSection() {
  const typed = useTypingRotation(ROLES);

  return (
    <section
      className="relative h-screen flex flex-col overflow-hidden"
      style={{ overflowX: 'clip' }}
    >
      {/* 3D threat-monitoring globe (real WebGL, lazy-loaded, replaces flat CSS grid) */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="relative z-20">
        <div className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Hero heading */}
      <div className="relative z-20 overflow-hidden w-full mt-6 sm:mt-4 md:-mt-5">
        <h1
          className="hero-heading font-black tracking-tight leading-none w-full text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw]"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
            Hariprakash P
          </span>
        </h1>

        <FadeIn delay={0.3} y={20}>
          <p className="font-mono text-accent text-sm sm:text-base md:text-lg mt-3 sm:mt-4 pl-1 h-6 sm:h-7">
            {typed}
            <span className="type-cursor font-bold">|</span>
          </p>
        </FadeIn>
      </div>

      {/* Subtle name label over the 3D scene, small and unobtrusive */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[62%] sm:top-auto sm:bottom-10 md:bottom-14 z-10 pointer-events-none">
        <FadeIn delay={0.6} y={20}>
          <span className="font-mono text-accent/70 text-xs sm:text-sm tracking-[0.3em] uppercase">
            live threat monitor
          </span>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="mt-auto flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem,1.4vw,1.3rem)' }}
          >
            Cybersecurity Engineer
            <br />
            SOC Analyst • GRC Analyst
            <br />
            Threat Hunting • SIEM • Risk Management
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
