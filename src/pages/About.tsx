import badgeAppBuilder from '../Images/2021-03_Badge_SF-Certified_Platform-App-Builder_High-Res.png'
import badgeDev2 from '../Images/2021-03_Badge_SF-Certified_Platform-Developer-II_High-Res.png'
import badgeAgentforce from '../Images/2025-02_Badge_SF-Certified_Agentforce-Specialist_High-Res.png'
import badgeAdmin from '../Images/2025-03_Badge_SF-Certified_Platform-Admin_High-Res.png'
import badgeFoundations from '../Images/2025-03_Badge_SF-Certified_Platform-Foundations_High-Res.png'
import badgePlatDev from '../Images/2025-04_Badge_SF-Certified_Plat-Dev_High-Res.png'
import TrailheadDashboard from '../components/TrailheadDashboard'

// Certification badge images
const certBadges = [
  {
    src: badgeAppBuilder,
    alt: 'Salesforce Certified Platform App Builder',
    label: 'Platform App Builder',
    year: '2021',
  },
  {
    src: badgeDev2,
    alt: 'Salesforce Certified Platform Developer II',
    label: 'Platform Developer II',
    year: '2021',
  },
  {
    src: badgeAgentforce,
    alt: 'Salesforce Certified Agentforce Specialist',
    label: 'Agentforce Specialist',
    year: '2025',
  },
  {
    src: badgeAdmin,
    alt: 'Salesforce Certified Administrator',
    label: 'Platform Administrator',
    year: '2025',
  },
  {
    src: badgeFoundations,
    alt: 'Salesforce Certified Platform Foundations',
    label: 'Platform Foundations',
    year: '2025',
  },
  {
    src: badgePlatDev,
    alt: 'Salesforce Certified Platform Developer',
    label: 'Platform Developer',
    year: '2025',
  },
]

const skills = [
  'AI', 'Agentforce', 'Lightning Web Components (LWC)', 'Visualforce', 'Apex', 'Triggers',
  'Aura Components', 'Salesforce Administration', 'Flows', 'Git', 'SFDX-CLI', 'Workbench'
]

const experiences = [
  {
    title: 'Salesforce Developer / Administrator',
    company: 'Workday - USA',
    period: '',
    description: 'Worked on Apex Triggers, Batch classes, Process Builder, Lightning Aura Components, and sharing rules. Enhanced and resolved defects in the existing Workday(Engage Core Run) application. Improved Apex test coverage through unit testing and peer reviews. Configured business flows using Process Builder, Lightning Flow, and validation rules. Implemented business logic using Apex Triggers.\nImplemented frameworks to enhance Apex coding skills:\n    - FFLIB\n    - Batch Framework\n    - Trigger Framework',
    tech: ['Apex', 'Triggers', 'Batch Classes', 'Process Builder', 'Aura Components']
  },
  {
    title: 'Salesforce Developer / Administrator',
    company: 'K Health – USA',
    period: '',
    description: 'Worked on Apex Triggers, Batch classes, Process Builder, Lightning Aura Components, and sharing rules. Enhanced and resolved defects in the existing K Health application. Improved Apex test coverage through unit testing and peer reviews. Configured business flows using Process Builder, Lightning Flow, and validation rules. Implemented business logic using Apex Triggers. Implemented frameworks to enhance Apex coding skills (ATK).',
    tech: ['Apex Triggers', 'Batch Classes', 'Process Builder', 'Aura Components', 'Lightning Flow']
  },
  {
    title: 'Salesforce Developer / Administrator',
    company: 'Health Smart',
    period: '',
    description: 'Migrated Salesforce Classic to Lightning Experience. Converted Visualforce pages to Aura Components. Created Lightning reports and dashboards. Converted JavaScript buttons to Lightning solutions. Role/Responsibility: Aura Components, Classic-to-Lightning Migration.',
    tech: ['Salesforce Classic', 'Lightning Experience', 'Visualforce', 'Aura Components']
  },
  {
    title: 'Salesforce Developer / Administrator',
    company: 'Pulsar for Salesforce',
    period: '',
    description: 'Third-party app integration enabling Salesforce offline mode via Pulsar. Users could insert and update records offline from the Pulsar app. Role/Responsibility: Apex and Pseudocode implementation.',
    tech: ['Apex', 'Pseudocode', 'Offline Integration']
  },
  {
    title: 'Salesforce Developer / Administrator',
    company: 'Permission Wizard Utility',
    period: '',
    description: 'Group project with a team of 15 members. Mass permission and profile assignment management utility. Role/Responsibility: Apex, Aura Components, Test Code Coverage.',
    tech: ['Apex', 'Aura Components', 'Unit Testing']
  },
  {
    title: 'Salesforce Developer / Administrator',
    company: 'VMware Reporting Tool',
    period: '',
    description: 'Lightning-based reporting framework providing enhanced record filtration. Role/Responsibility: Apex, Visualforce, Triggers, Aura Components, Test Code Coverage.',
    tech: ['Apex', 'Visualforce', 'Triggers', 'Aura Components']
  },
  {
    title: 'Salesforce Developer / Administrator',
    company: 'Quick Add to Cart',
    period: '',
    description: 'SLDS-based Lightning component with add-to-cart functionality and dummy checkout page. Role/Responsibility: Apex, Aura Components.',
    tech: ['SLDS', 'Apex', 'Aura Components']
  }
]

const techColors: Record<string, string> = {
  Apex: 'bg-sky-900/60 text-sky-300 border-sky-700',
  'Aura Components': 'bg-indigo-900/60 text-indigo-300 border-indigo-700',
  'Visualforce': 'bg-blue-900/60 text-blue-300 border-blue-700',
  'Lightning Experience': 'bg-cyan-900/60 text-cyan-300 border-cyan-700',
  'Process Builder': 'bg-purple-900/60 text-purple-300 border-purple-700',
}

const defaultBadge = 'bg-gray-800/60 text-gray-300 border-gray-700'

const education = [
  { degree: 'MCA', school: 'Jaipur National University, Jaipur, Rajasthan' },
  { degree: 'BCA', school: 'Star Infotech College, Ajmer, Rajasthan' },
  { degree: 'Senior Secondary Education', school: 'Govt. Hr. Sec. School, Tawang, Arunachal Pradesh' },
  { degree: 'Secondary Education', school: 'Kendriya Vidyalaya Tawang, Tawang, Arunachal Pradesh' }
]

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Bio / Summary */}
      <div id="bio" className="mb-16">
        <h1 className="text-4xl font-extrabold text-white mb-6">
          About <span className="text-blue-400">Me</span>
        </h1>
        <div className="bg-gray-800/20 border border-gray-700/50 rounded-2xl p-8 shadow-xl">
          <h3 className="text-blue-400 font-bold mb-4 uppercase tracking-widest text-sm">Summary</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Technical Lead | Salesforce Developer & Administrator with 7+ years driving Force.com innovation with LWC, Aura, Apex, Triggers, Visualforce, and Health Cloud (10+ months).
          </p>
          <p className="text-gray-400 leading-relaxed">
            Spearheaded Agile Scrum teams (JIRA), full SDLC—from client requirements to testing, peer reviews, and 100% Apex test coverage. Core Expertise in Dynamic LWC, custom configurations, and Trailhead Mastery with multiple Superbadges. Delivered high-stakes e-commerce and automation projects with strong communication and problem-solving skills.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div id="skills" className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-6">Technical Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-800/40 border border-gray-700/50 rounded-full text-gray-200 text-sm hover:border-blue-500 transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div id="experience" className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-8">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:bg-gray-800/60 shadow-lg shadow-black/10"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                {exp.period && (
                  <span className="text-blue-400 text-[10px] font-bold uppercase tracking-wider bg-blue-900/20 px-2 py-1 rounded-md border border-blue-800/30">
                    {exp.period}
                  </span>
                )}
              </div>
              <h4 className="text-blue-300 text-sm font-semibold mb-3">{exp.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow whitespace-pre-line">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {exp.tech?.map((t) => (
                  <span
                    key={t}
                    className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full border ${techColors[t] ?? defaultBadge}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div id="education" className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800/30 border border-gray-700/40 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-gray-400 text-sm">{edu.school}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Salesforce Certifications */}
      <div id="certifications" className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-2">
          Salesforce Certifications
        </h2>
        <p className="text-gray-400 text-sm mb-8">
          Trailhead Achievements &amp; Self-Learning
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {certBadges.map((badge) => (
            <div
              key={badge.alt}
              className="flex flex-col items-center bg-gray-800/40 border border-gray-700/50 rounded-2xl p-5 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:bg-gray-800/60 shadow-lg shadow-black/10"
            >
              <img
                src={badge.src}
                alt={badge.alt}
                className="w-24 h-24 object-contain mb-4"
              />
              <p className="text-white text-sm font-semibold text-center leading-snug">
                {badge.label}
              </p>
              <p className="text-gray-400 text-xs mt-1.5">{badge.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Badge & Agentblazer Status */}
      <div id="trailhead-status">
        <TrailheadDashboard />
      </div>
    </div>
  )
}
