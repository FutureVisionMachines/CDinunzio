export interface Service {
  id: string
  name: string
  summary: string
  challenge: string
  approach: string
  deliverables: string[]
  impact: string
}

export interface Industry {
  id: string
  name: string
  riskLens: string
  strategicFocus: string[]
  signal: string
}

export interface Insight {
  id: string
  title: string
  excerpt: string
  category: string
  readTime: string
  published: string
}

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
]

export const authorityMetrics = [
  {
    value: '120+',
    label: 'Operational Assessments Led',
    detail: 'Multi-site readiness diagnostics spanning public and private operations.',
  },
  {
    value: '18 yrs',
    label: 'Frontline + Strategic Leadership',
    detail: 'Field-informed leadership translated into executive-level procedural systems.',
  },
  {
    value: '24hr',
    label: 'Initial Consultation Response',
    detail: 'Disciplined intake and prioritization for high-consequence environments.',
  },
]

export const services: Service[] = [
  {
    id: 'audit',
    name: 'Operational Security Audits',
    summary:
      'A forensic review of readiness posture, procedural discipline, and cross-functional failure points.',
    challenge:
      'Most organizations discover critical blind spots only after an incident forces visibility.',
    approach:
      'Christopher maps environmental risk, workflow friction, and accountability design into a single operational picture.',
    deliverables: [
      'Risk-prioritized audit report',
      'Failure cascade mapping',
      'Executive action matrix',
    ],
    impact:
      'Leaders gain a concrete blueprint for hardening weak points before pressure testing begins.',
  },
  {
    id: 'crisis',
    name: 'Crisis & Incident Readiness',
    summary:
      'Design and rehearsal of incident command behavior so leadership performs with clarity when minutes matter.',
    challenge:
      'Teams often own plans but have never stress-tested decision flow under operational pressure.',
    approach:
      'Scenarios are engineered to reflect realistic disruption patterns, communication drag, and role confusion.',
    deliverables: [
      'Scenario architecture',
      'Escalation playbooks',
      'Leadership rehearsal sessions',
    ],
    impact:
      'Response quality becomes disciplined and repeatable instead of personality dependent.',
  },
  {
    id: 'sop',
    name: 'SOP Architecture',
    summary:
      'Procedural systems designed for clarity, accountability, and field-level execution consistency.',
    challenge:
      'Policies fail when they are unreadable, unrealistic, or disconnected from real operating conditions.',
    approach:
      'SOP frameworks are rebuilt around action triggers, ownership boundaries, and operational tempo.',
    deliverables: [
      'Tiered SOP framework',
      'Role-specific procedure packs',
      'Implementation guidance',
    ],
    impact:
      'Teams move faster with fewer interpretation errors and stronger control over variance.',
  },
  {
    id: 'risk',
    name: 'Organizational Risk Analysis',
    summary:
      'Enterprise-level mapping of threat vectors, operational dependencies, and strategic exposure.',
    challenge:
      'Risk is often catalogued by department, but rarely interpreted as an integrated system.',
    approach:
      'A systems-thinking model connects facility, people, process, and leadership behavior into one operating map.',
    deliverables: [
      'Risk intelligence profile',
      'Vulnerability heat map',
      'Risk governance recommendations',
    ],
    impact:
      'Executives get decision-grade visibility into where consequence and probability converge.',
  },
  {
    id: 'leadership',
    name: 'Leadership & Training',
    summary:
      'Behavioral training that builds operational confidence, decision structure, and command presence.',
    challenge:
      'Many teams are technically competent but freeze when incident complexity rises.',
    approach:
      'Training blends practical doctrine with role-specific pressure simulation to improve judgment quality.',
    deliverables: [
      'Leadership capability assessment',
      'Scenario-led workshops',
      'After-action learning loops',
    ],
    impact:
      'Leadership teams become steady, coordinated, and trusted under uncertainty.',
  },
  {
    id: 'consulting',
    name: 'Strategic Advisory Retainers',
    summary:
      'Ongoing executive partnership for risk decisions, high-stakes planning, and incident-era counsel.',
    challenge:
      'Critical decisions often emerge faster than internal teams can align around confident action.',
    approach:
      'Christopher works directly with leadership as an external strategic operator and readiness advisor.',
    deliverables: [
      'Monthly risk council briefings',
      'Priority advisory access',
      'Strategic roadmap refinement',
    ],
    impact:
      'Organizations retain experienced guidance before, during, and after consequential events.',
  },
]

export const industries: Industry[] = [
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    riskLens: 'Remote operations, contractor variability, and infrastructure consequence concentration.',
    strategicFocus: [
      'Asset criticality mapping',
      'Contractor risk governance',
      'Emergency command synchronization',
    ],
    signal: 'Controls must remain disciplined even when operations are geographically fragmented.',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    riskLens: 'Care continuity pressure, public trust sensitivity, and high-frequency disruption scenarios.',
    strategicFocus: [
      'Clinical site readiness audits',
      'Violence prevention doctrine',
      'Response protocol clarity',
    ],
    signal: 'Preparedness has to protect people without interrupting care-critical workflow.',
  },
  {
    id: 'hospitality-events',
    name: 'Hospitality & Events',
    riskLens: 'Dense occupancy, reputation fragility, and rapid scenario escalation windows.',
    strategicFocus: [
      'Crowd risk architecture',
      'Guest-facing incident playbooks',
      'Command and communications alignment',
    ],
    signal: 'Operational calm must be visible to guests while escalation is managed behind the scenes.',
  },
  {
    id: 'municipal',
    name: 'Municipal & Public Infrastructure',
    riskLens: 'Complex stakeholder environments, public accountability, and continuity requirements.',
    strategicFocus: [
      'Cross-agency coordination design',
      'Critical service continuity plans',
      'Incident communications governance',
    ],
    signal: 'Readiness needs to scale across departments, not remain siloed inside one function.',
  },
  {
    id: 'commercial',
    name: 'Commercial Operations',
    riskLens: 'Distributed sites, policy drift, and uneven leadership maturity across portfolios.',
    strategicFocus: [
      'Enterprise SOP harmonization',
      'Site-level capability scoring',
      'Leadership escalation standards',
    ],
    signal: 'Consistency is the difference between controlled disruptions and systemic failures.',
  },
]

export const timelineMilestones = [
  {
    year: '2008',
    title: 'Field Operations Foundation',
    detail: 'Built frontline experience in active environments where response quality carried immediate consequences.',
  },
  {
    year: '2013',
    title: 'Command and Team Leadership',
    detail: 'Led multi-role teams through incident cycles, elevating procedural discipline and communication consistency.',
  },
  {
    year: '2018',
    title: 'Strategic Security Consulting',
    detail: 'Shifted from tactical execution to enterprise advisory work focused on systems-level resilience.',
  },
  {
    year: '2022',
    title: 'Operational Doctrine Framework',
    detail: 'Refined a signature consulting method integrating readiness diagnostics, SOP design, and leadership rehearsal.',
  },
  {
    year: 'Now',
    title: 'Canada\'s Operational Security Strategist',
    detail: 'Advising organizations where failure carries consequential operational, reputational, and human impact.',
  },
]

export const operatingPrinciples = [
  'Preparedness is an operating system, not a policy folder.',
  'Leadership behavior defines outcome quality in moments of pressure.',
  'Clarity of procedure is a risk control, not administrative overhead.',
  'Resilience is built through rehearsal, not assumption.',
  'Trust is earned when systems hold under stress.',
]

export const engagementSteps = [
  {
    step: '01',
    title: 'Strategic Intake',
    detail:
      'A focused consultation to map current risk pressures, leadership goals, and consequence thresholds.',
  },
  {
    step: '02',
    title: 'Operational Diagnosis',
    detail:
      'Structured assessment of process reliability, response readiness, and cross-functional execution gaps.',
  },
  {
    step: '03',
    title: 'Architecture & Activation',
    detail:
      'Delivery of a practical roadmap with implementation support and leadership alignment checkpoints.',
  },
]

export const insights: Insight[] = [
  {
    id: 'signal-vs-noise',
    category: 'Leadership Doctrine',
    title: 'Signal vs Noise: How Leaders Maintain Decision Quality in Chaotic Moments',
    excerpt:
      'A practical framework for keeping command clarity when information volume outpaces processing capacity.',
    readTime: '7 min read',
    published: 'May 2026',
  },
  {
    id: 'sop-friction',
    category: 'Procedural Architecture',
    title: 'The Hidden Cost of SOP Friction in High-Consequence Environments',
    excerpt:
      'Why policy complexity quietly degrades response reliability and how to redesign procedures for execution velocity.',
    readTime: '9 min read',
    published: 'April 2026',
  },
  {
    id: 'incident-rehearsal',
    category: 'Crisis Readiness',
    title: 'Rehearsal Over Assumption: Building Incident Confidence Before It Is Needed',
    excerpt:
      'Scenario-led rehearsal methods that reveal role confusion and escalation blind spots before real incidents occur.',
    readTime: '6 min read',
    published: 'March 2026',
  },
  {
    id: 'risk-intelligence-briefs',
    category: 'Risk Intelligence',
    title: 'Executive Risk Briefing Structures That Drive Action Instead of Delay',
    excerpt:
      'How to format risk intelligence so leadership can make fast, aligned, and defensible decisions.',
    readTime: '8 min read',
    published: 'February 2026',
  },
]

export const testimonialHighlights = [
  {
    quote:
      'Christopher translated diffuse risk concerns into a disciplined operating model our leadership team could actually execute.',
    role: 'COO, National Infrastructure Operator',
  },
  {
    quote:
      'His engagement fundamentally changed how we prepare for pressure events. We are now faster, calmer, and clearer under stress.',
    role: 'VP Operations, Multi-Site Healthcare Network',
  },
]
