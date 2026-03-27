interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Agentforce Virtual Assistant',
    description:
      'Built an AI-powered Salesforce Agentforce bot that handles customer queries, automates case routing, and surfaces knowledge articles in real time.',
    tech: ['Salesforce', 'Agentforce', 'Einstein AI', 'Apex', 'LWC'],
  },
  {
    id: 2,
    title: 'Salesforce CPQ Customisation',
    description:
      'Designed and developed custom CPQ flows with complex pricing rules, discount approval workflows, and contract generation automation.',
    tech: ['Salesforce CPQ', 'Apex', 'Flows', 'SOQL'],
  },
  {
    id: 3,
    title: 'REST API Integration Hub',
    description:
      'Created a scalable middleware layer connecting Salesforce with third-party ERP and marketing platforms via REST APIs and Named Credentials.',
    tech: ['Salesforce', 'Apex', 'REST API', 'Named Credentials', 'JSON'],
  },
  {
    id: 4,
    title: 'Personal Portfolio Website',
    description:
      'This very site – a responsive personal portfolio built with React, TypeScript, Vite, and Tailwind CSS, showcasing projects and Salesforce certifications.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'],
  },
]

const techColors: Record<string, string> = {
  Salesforce: 'bg-blue-900/60 text-blue-300 border-blue-700',
  Agentforce: 'bg-purple-900/60 text-purple-300 border-purple-700',
  'Einstein AI': 'bg-indigo-900/60 text-indigo-300 border-indigo-700',
  Apex: 'bg-sky-900/60 text-sky-300 border-sky-700',
  LWC: 'bg-cyan-900/60 text-cyan-300 border-cyan-700',
  React: 'bg-cyan-900/60 text-cyan-300 border-cyan-700',
  TypeScript: 'bg-blue-900/60 text-blue-300 border-blue-700',
  Vite: 'bg-yellow-900/60 text-yellow-300 border-yellow-700',
  'Tailwind CSS': 'bg-teal-900/60 text-teal-300 border-teal-700',
}

const defaultBadge = 'bg-gray-800 text-gray-300 border-gray-600'

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-extrabold text-white mb-3">
        My <span className="text-blue-400">Projects</span>
      </h1>
      <p className="text-gray-400 mb-12 text-lg">
        A selection of things I've built and shipped.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`flex flex-col bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:bg-gray-800/60 shadow-lg shadow-black/10`}
          >
            <h2 className="text-xl font-bold text-white mb-3">{project.title}</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-5 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full border ${techColors[t] ?? defaultBadge}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
