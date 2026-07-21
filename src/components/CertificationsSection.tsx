import FadeIn from './FadeIn';
import AnimatedCounter from './AnimatedCounter';
import { ShieldCheck } from 'lucide-react';

const CERTIFICATIONS = [
  { name: 'CSA (Pursuing)', issuer: 'EC-Council' },
  { name: 'Security Principles', issuer: 'ISC2' },
  { name: 'SOC Labs', issuer: "Let's Defend" },
  { name: 'Web Security Academy', issuer: 'PortSwigger' },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-32">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-4 text-[12vw] sm:text-[7vw] md:text-[4.5vw]">
            Certifications
          </h2>
        </FadeIn>
        <FadeIn delay={0.05} y={20}>
          <p className="font-mono-cyber text-center text-primary text-sm sm:text-base mb-14 sm:mb-16">
            <AnimatedCounter value={CERTIFICATIONS.length} /> certifications &amp; learning tracks
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 0.08} y={20}>
              <div className="glow-card rounded-2xl border border-primary/15 bg-card p-6 flex flex-col items-center text-center gap-3 h-full">
                <ShieldCheck className="text-primary" size={28} />
                <h3 className="text-ink font-semibold text-sm sm:text-base">{cert.name}</h3>
                <p className="font-mono-cyber text-ink/50 text-xs sm:text-sm">{cert.issuer}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
