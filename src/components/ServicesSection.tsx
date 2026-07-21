import FadeIn from './FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Security Operations',
    description:
      'Splunk, Wazuh, SIEM monitoring, log analysis, incident response, detection engineering, and alert investigation.',
  },
  {
    number: '02',
    name: 'Threat Hunting',
    description:
      'MITRE ATT&CK, IOC analysis, Sigma rules, Windows Event Logs, Sysmon, endpoint monitoring, and proactive threat detection.',
  },
  {
    number: '03',
    name: 'Governance, Risk & Compliance',
    description:
      'Risk assessment, ISO/IEC 27001 fundamentals, NIST Cybersecurity Framework, CIS Controls, security policies, compliance, and audit readiness.',
  },
  {
    number: '04',
    name: 'Networking & Security',
    description:
      'TCP/IP, DNS, HTTP/S, SSH, VPN, firewalls, Wireshark, Nmap, Burp Suite, and secure network architecture.',
  },
  {
    number: '05',
    name: 'Programming & Automation',
    description:
      'Python, PowerShell, Bash, Git, security scripting, automation, and VirtualBox lab environments.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-14 md:pb-16"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={20}>
            <div
              className="flex items-start gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{ borderBottom: '1px solid rgba(215, 226, 234, 0.12)' }}
            >
              <span
                className="text-accent font-black flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1, opacity: 0.85 }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-2 pt-2 sm:pt-4">
                <h3
                  className="text-[#D7E2EA] font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-[#D7E2EA]/60 font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
