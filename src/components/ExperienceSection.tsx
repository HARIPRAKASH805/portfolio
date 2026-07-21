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
    <section className="bg-[#0B0F19] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn>
          <h2 className="text-5xl font-bold text-white mb-16 text-center">
            Experience
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((item, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div className="bg-[#151B28] rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400 transition">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-7">
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
