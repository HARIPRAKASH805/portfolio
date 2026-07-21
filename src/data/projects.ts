export interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
  icon: 'shield' | 'network' | 'terminal';
}

export const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Automated Cyber Threat Intelligence Pipeline',
    category: 'SOC / Threat Intel',
    description:
      'An automated CTI pipeline that collects, processes, and enriches threat data from multiple intelligence sources. Integrates IOC feeds and MITRE ATT&CK mapping to improve threat detection, correlation, and analysis for SOC monitoring and incident response.',
    tags: ['Threat Intel', 'MITRE ATT&CK', 'Automation'],
    link: 'https://github.com/thiru011/threat-intelligence-pipeline',
    icon: 'network',
  },
  {
    number: '02',
    name: 'SOC Detection Lab -- SSH Brute Force Analysis',
    category: 'SOC / SIEM',
    description:
      'Security event monitoring and log analysis to identify SSH brute-force attacks and IOCs. Investigated alerts using SIEM concepts and log correlation to analyze attacker behavior, applying incident response and threat hunting techniques to document findings.',
    tags: ['Splunk', 'Log Analysis', 'Incident Response'],
    link: 'https://github.com/HARIPRAKASH805/SOC-LAB-USING-SPLUNK',
    icon: 'terminal',
  },
  {
    number: '03',
    name: 'Operation Glass House -- EDR Monitoring Lab',
    category: 'SOC Home Lab',
    description:
      "A centralized SIEM lab built with Wazuh (Manager, Indexer, Dashboard) monitoring a Windows 10 endpoint via Sysmon. Simulated real-world attacks from Kali Linux to validate detection coverage, mapping 3+ techniques to MITRE ATT&CK (e.g. T1105) and CIS hardening benchmarks.",
    tags: ['Wazuh', 'EDR', 'MITRE ATT&CK'],
    link: 'https://github.com/HARIPRAKASH805/Wazuh-EDR-monitoring',
    icon: 'shield',
  },
];
