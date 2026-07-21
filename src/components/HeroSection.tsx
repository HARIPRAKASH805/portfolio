import { useEffect, useState } from 'react';
import FadeIn from './FadeIn';

const ROLES = ['Cybersecurity Engineer', 'SOC Analyst', 'Threat Hunter'];

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

const TERMINAL_LINES = [
  '$ whoami',
  'hariprakash_p',
  '$ status --check',
  '[OK] SIEM: Splunk, Wazuh online',
  '[OK] Endpoint telemetry: Sysmon active',
  '$ threat-hunt --scan',
  'Mapping activity to MITRE ATT&CK...',
  'No unresolved alerts. Standing by.',
];

export default function HeroSection() {
  const typed = useTypingRotation(ROLES);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-5 sm:px-8 md:px-10"
      style={{ overflowX: 'clip' }}
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* Left side */}
        <div>
          <FadeIn delay={0} y={20}>
            <p className="font-mono-cyber text-primary text-sm sm:text-base mb-3">Hi, I&apos;m</p>
          </FadeIn>

          <FadeIn delay={0.1} y={30}>
            <h1 className="hero-heading font-black uppercase leading-none tracking-tight text-[13vw] sm:text-[9vw] md:text-[4.2vw] mb-4">
              Hari Prakash
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <p className="font-mono-cyber text-ink text-lg sm:text-xl md:text-2xl mb-6 h-8">
              {typed}
              <span className="blinking-cursor text-primary">_</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.3} y={20}>
            <p className="text-ink/70 leading-relaxed text-sm sm:text-base max-w-lg mb-8">
              Passionate Cybersecurity Engineer specializing in Security Operations, Threat
              Hunting, SIEM Engineering, and Endpoint Detection. I build real-world SOC labs using
              Splunk, Wazuh, Sysmon, MITRE ATT&amp;CK, and Kali Linux to simulate, detect, and
              investigate cyber threats.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} y={20}>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#projects"
                className="rounded-full px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-bg bg-primary hover:bg-primary/90 transition-colors duration-200"
              >
                View Projects
              </a>
              <a
                href="./Hariprakash_P_Resume.pdf"
                download
                className="rounded-full px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary border border-primary/40 hover:bg-primary/10 transition-colors duration-200"
              >
                Download Resume
              </a>
              <a
                href="https://github.com/HARIPRAKASH805"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-ink border border-ink/20 hover:bg-ink/10 transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/hari-prakash-hp"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-ink border border-ink/20 hover:bg-ink/10 transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right side -- terminal animation panel */}
        <FadeIn delay={0.3} y={30} x={30}>
          <div className="rounded-2xl border border-primary/20 bg-card overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.08)]">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/10 bg-bg/60">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 font-mono-cyber text-ink/40 text-xs">soc-terminal</span>
            </div>
            <div className="p-5 sm:p-6 font-mono-cyber text-xs sm:text-sm leading-relaxed">
              {TERMINAL_LINES.map((line, i) => (
                <p
                  key={i}
                  className={
                    line.startsWith('$')
                      ? 'text-primary mb-1'
                      : line.startsWith('[OK]')
                      ? 'text-accent mb-1'
                      : 'text-ink/60 mb-1'
                  }
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
