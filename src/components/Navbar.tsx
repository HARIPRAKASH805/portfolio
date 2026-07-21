import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY;
      const height = doc.scrollHeight - doc.clientHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
      setScrolled(scrollTop > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Scroll progress bar */}
      <div className="h-[3px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary"
          style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
        />
      </div>

      <nav
        className={`px-5 sm:px-8 md:px-10 py-4 flex items-center justify-between transition-colors duration-300 ${
          scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-primary/10' : ''
        }`}
      >
        <a href="#home" className="font-mono-cyber text-primary font-semibold tracking-wide text-sm sm:text-base">
          &lt;HariPrakash /&gt;
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-ink/80 hover:text-primary uppercase tracking-wide text-xs lg:text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="./Hariprakash_P_Resume.pdf"
            download
            className="text-bg bg-primary hover:bg-primary/90 rounded-full px-4 py-2 text-xs lg:text-sm font-semibold uppercase tracking-wide transition-colors duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile: just resume link, keep it simple */}
        <a
          href="./Hariprakash_P_Resume.pdf"
          download
          className="md:hidden text-bg bg-primary rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide"
        >
          Resume
        </a>
      </nav>
    </div>
  );
}
