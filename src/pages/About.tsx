import badgeAppBuilder from '../Images/2021-03_Badge_SF-Certified_Platform-App-Builder_High-Res.png'
import badgeDev2 from '../Images/2021-03_Badge_SF-Certified_Platform-Developer-II_High-Res.png'
import badgeAgentforce from '../Images/2025-02_Badge_SF-Certified_Agentforce-Specialist_High-Res.png'
import badgeAdmin from '../Images/2025-03_Badge_SF-Certified_Platform-Admin_High-Res.png'
import badgeFoundations from '../Images/2025-03_Badge_SF-Certified_Platform-Foundations_High-Res.png'
import badgePlatDev from '../Images/2025-04_Badge_SF-Certified_Plat-Dev_High-Res.png'
import badgeStatus from '../Images/badge status.png'
import agentblazerStatus from '../Images/agentbalzer status.png'

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
  'Salesforce Development (Apex, LWC, SOQL)',
  'Salesforce Administration & Configuration',
  'Agentforce & Einstein AI',
  'React & TypeScript',
  'REST / SOAP APIs & Integrations',
  'Git & Version Control',
  'JavaScript / HTML / CSS',
  'Problem Solving & Debugging',
]

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Bio */}
      <div id="bio" className="mb-16">
        <h1 className="text-4xl font-extrabold text-white mb-6">
          About <span className="text-blue-400">Me</span>
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
          I'm Pramod Sharma, a certified Salesforce Developer & AI Specialist with
          hands-on expertise in building enterprise-grade CRM solutions, intelligent
          automation, and AI-powered applications. I enjoy solving complex business
          problems with clean, scalable code and always stay ahead of the curve
          with the latest Salesforce and AI innovations.
        </p>
      </div>

      {/* Skills */}
      <div id="skills" className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="flex items-center gap-3 bg-gray-800/40 border border-gray-700/50 rounded-xl px-4 py-3 text-gray-200 text-sm hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-800/60 shadow-lg shadow-black/10"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Salesforce Certifications */}
      <div id="certifications" className="mb-16">
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
      <div id="trailhead-status" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-5 hover:border-blue-500 transition-all duration-300 shadow-xl hover:bg-gray-800/60">
          <h3 className="text-lg font-semibold text-white mb-4">
            🏅 Badge &amp; Ranking Status
          </h3>
          <img
            src={badgeStatus}
            alt="Trailhead badge and ranking status"
            className="rounded-lg w-full object-contain"
          />
        </div>
        <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-5 hover:border-blue-500 transition-all duration-300 shadow-xl hover:bg-gray-800/60">
          <h3 className="text-lg font-semibold text-white mb-4">
            🤖 Agentblazer Status
          </h3>
          <img
            src={agentblazerStatus}
            alt="Agentblazer status"
            className="rounded-lg w-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}
