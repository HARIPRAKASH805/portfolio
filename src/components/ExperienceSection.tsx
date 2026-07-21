import FadeIn from "./FadeIn";

const experiences = [
  {
    title: "SOC Detection Labs",
    description:
      "Built hands-on Security Operations Center labs using Splunk and Wazuh to monitor security events and investigate incidents.",
  },
  {
    title: "Threat Hunting",
    description:
      "Performed proactive threat hunting using Sysmon logs, Windows Event Logs, and MITRE ATT&CK techniques.",
  },
  {
    title: "Incident Response",
    description:
      "Investigated suspicious activities, analyzed logs, and mapped detections to attacker techniques.",
  },
  {
    title: "Governance, Risk & Compliance",
    description:
      "Learning ISO 27001, NIST CSF, risk assessment, compliance controls, and security governance practices.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="bg-[#0C0C0C] py-20 sm:py-24 md:py-28 px-5 sm:px-8 md:px-10">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="hero-heading font-black uppercase text-center mb-14 sm:mb-16" style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}>
            Experience
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {experiences.map((item, index) => (
            <FadeIn key={index} delay={index * 0.12}>
              <div className="glow-card rounded-2xl p-7 sm:p-8 h-full border border-[#D7E2EA]/15 hover:border-accent/40">
                <h3 className="text-accent text-lg sm:text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-[#D7E2EA]/65 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
