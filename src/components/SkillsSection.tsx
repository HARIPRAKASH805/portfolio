import FadeIn from './FadeIn';

const SKILL_GROUPS = [
  { title: 'SIEM', items: ['Splunk', 'Wazuh', 'Elastic'] },
  { title: 'Threat Detection', items: ['MITRE ATT&CK', 'Sigma Rules', 'Threat Hunting', 'IOC Analysis'] },
  { title: 'Endpoint Security', items: ['Sysmon', 'Windows Event Logs', 'Linux Logs', 'Windows Defender'] },
  { title: 'Networking', items: ['TCP/IP', 'DNS', 'HTTP', 'HTTPS', 'SSH', 'VPN'] },
  { title: 'Programming', items: ['Python', 'C', 'Bash', 'PowerShell'] },
  { title: 'Tools', items: ['Wireshark', 'Hydra', 'Nmap', 'Burp Suite', 'VirtualBox', 'Git'] },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-32">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-14 sm:mb-16 text-[12vw] sm:text-[7vw] md:text-[4.5vw]">
            Skills
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <FadeIn key={group.title} delay={i * 0.08} y={20}>
              <div className="glow-card rounded-2xl border border-primary/15 bg-card p-6 sm:p-7 h-full">
                <h3 className="font-mono-cyber text-primary text-sm sm:text-base uppercase tracking-widest mb-4">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-ink/75 text-xs sm:text-sm border border-ink/15 rounded-full px-3 py-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
