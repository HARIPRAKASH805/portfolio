import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact'];

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex flex-col"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
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
<div className="overflow-hidden w-full mt-6 sm:mt-4 md:-mt-5">
  <FadeIn delay={0.15} y={40}>
    <h1 className="hero-heading font-black tracking-tight leading-none w-full text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw]">
      
      Hi, I'm{" "}
 <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">        
   Hariprakash P
      </span>
    </h1>
  </FadeIn>
</div>
      {/* Hero monogram badge */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] aspect-square"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <div
            className="relative w-full aspect-square rounded-full flex items-center justify-center select-none"
            style={{
              background:
                'radial-gradient(circle at 35% 30%, rgba(215,226,234,0.16) 0%, rgba(12,12,12,0.4) 65%)',
              border: '1px solid rgba(215,226,234,0.25)',
              boxShadow:
                '0 0 60px rgba(187,204,215,0.15), inset 0 0 40px rgba(0,0,0,0.6)',
            }}
          >
            <span
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3.5rem, 11vw, 9rem)' }}
            >
              HP
            </span>
          </div>
        </Magnet>
      </FadeIn>

      {/* Bottom bar */}
      <div className="mt-auto flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            Aspiring cybersecurity professional focused on soc operations & threat detection
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
