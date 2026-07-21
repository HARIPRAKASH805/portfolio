export interface Project {
  number: string;
  name: string;
  description: string;
  tech: string[];
  highlights: string[];
  githubUrl: string;
}

export const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Windows Threat Hunting Lab',
    description:
      'Built a Windows Threat Hunting Lab using Sysmon, Splunk, and Windows Event Logs to detect malicious activity and investigate endpoint telemetry.',
    tech: ['Splunk', 'Sysmon', 'Windows', 'PowerShell'],
    highlights: [
      'Process Creation Monitoring',
      'PowerShell Detection',
      'Log Analysis',
      'Threat Hunting',
      'MITRE ATT&CK Mapping',
    ],
    githubUrl: 'https://github.com/HARIPRAKASH805?tab=repositories',
  },
  {
    number: '02',
    name: 'SOC Detection Lab',
    description:
      'Designed a Security Operations Center lab using Splunk Enterprise. Simulated SSH brute-force attacks from Kali Linux, collected authentication logs, and detected malicious login attempts through custom dashboards.',
    tech: ['Splunk', 'Ubuntu', 'Kali Linux', 'SSH'],
    highlights: [
      'Brute Force Detection',
      'Log Correlation',
      'Dashboards',
      'Alerting',
      'MITRE ATT&CK',
    ],
    githubUrl: 'https://github.com/HARIPRAKASH805?tab=repositories',
  },
  {
    number: '03',
    name: 'Threat Intelligence Pipeline',
    description:
      'Developed an automated Cyber Threat Intelligence Pipeline to collect, enrich, and analyze Indicators of Compromise. Integrated threat feeds, MITRE ATT&CK mapping, and IOC enrichment to improve analyst investigations.',
    tech: ['Python', 'MITRE ATT&CK', 'Threat Feeds'],
    highlights: [
      'IOC Collection',
      'Threat Feed Integration',
      'Automation',
      'MITRE ATT&CK',
      'Threat Intelligence',
    ],
    githubUrl: 'https://github.com/HARIPRAKASH805?tab=repositories',
  },
  {
    number: '04',
    name: 'Operation Glass House',
    description:
      'Built a fully observable endpoint security lab using Wazuh, Sysmon, Windows, and Ubuntu. Simulated attacker behavior while collecting endpoint telemetry for real-time threat detection and incident investigation.',
    tech: ['Wazuh', 'Sysmon', 'Windows', 'Ubuntu'],
    highlights: [
      'Wazuh Manager',
      'Sysmon',
      'Detection Rules',
      'Endpoint Monitoring',
      'Incident Response',
      'MITRE ATT&CK',
    ],
    githubUrl: 'https://github.com/HARIPRAKASH805?tab=repositories',
  },
];
