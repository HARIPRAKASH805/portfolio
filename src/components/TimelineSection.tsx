import FadeIn from './FadeIn';

const TIMELINE = [
  { label: '2025', title: 'Started Cybersecurity Journey', current: false },
  { label: '', title: 'Windows Threat Hunting Lab', current: false },
  { label: '', title: 'SOC Detection Lab', current: false },
  { label: '', title: 'Threat Intelligence Pipeline', current: false },
  { label: '', title: 'Operation Glass House', current: false },
  { label: 'Now', title: 'Currently Preparing -- CSA Certification', current: true },
];

export default function TimelineSection() {
  return (
    <section className="px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-32">
      <div className="max-w-2xl mx-auto">
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 text-[12vw] sm:text-[7vw] md:text-[4.5vw]">
            Timeline
          </h2>
        </FadeIn>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-primary/20" />
          <div className="flex flex-col gap-8 sm:gap-10">
            {TIMELINE.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.08} y={15} x={0}>
                <div className="relative">
                  <span
                    className={`absolute -left-8 sm:-left-10 top-1 w-4 h-4 rounded-full border-2 ${
                      step.current
                        ? 'bg-primary border-primary shadow-[0_0_12px_rgba(0,229,255,0.6)]'
                        : 'bg-bg border-primary/40'
                    }`}
                  />
                  {step.label && (
                    <span className="font-mono-cyber text-primary text-xs sm:text-sm block mb-1">
                      {step.label}
                    </span>
                  )}
                  <p className={`text-sm sm:text-base ${step.current ? 'text-primary font-semibold' : 'text-ink/80'}`}>
                    {step.title}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
