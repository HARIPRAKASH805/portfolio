import FadeIn from './FadeIn';

const INTERESTS = [
  'Security Operations (SOC)',
  'Threat Hunting',
  'Incident Response',
  'Endpoint Detection',
  'SIEM Engineering',
];

export default function AboutSection() {
  return (
    <section id="about" className="px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-32">
      <div className="max-w-4xl mx-auto">
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-14 sm:mb-16 text-[12vw] sm:text-[7vw] md:text-[4.5vw]">
            About Me
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <p className="text-ink/80 leading-relaxed text-sm sm:text-base md:text-lg text-center max-w-2xl mx-auto mb-10">
            I&apos;m a Cybersecurity Engineer passionate about defending systems against modern
            cyber threats. I enjoy building practical cybersecurity labs that simulate real-world
            attacks and defensive monitoring using Splunk, Wazuh, Sysmon, and MITRE ATT&amp;CK.
            Through continuous hands-on learning, I strengthen my skills in log analysis, threat
            detection, digital forensics, and security automation.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <div className="flex flex-wrap justify-center gap-3">
            {INTERESTS.map((item) => (
              <span
                key={item}
                className="font-mono-cyber text-primary text-xs sm:text-sm border border-primary/30 rounded-full px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
