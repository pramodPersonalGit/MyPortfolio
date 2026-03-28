interface ContactLink {
  id: string
  icon: string
  label: string
  value: string
  href: string
}

const contactLinks: ContactLink[] = [
  {
    id: 'contact-email',
    icon: '✉️',
    label: 'Email',
    value: 'pramodvaishnav989@gmail.com',
    href: 'mailto:pramodvaishnav989@gmail.com',
  },
  {
    id: 'contact-phone',
    icon: '📞',
    label: 'Phone',
    value: '+91-9828491079',
    href: 'tel:+919828491079',
  },
  {
    id: 'contact-location',
    icon: '📍',
    label: 'Location',
    value: 'Ajmer, Rajasthan',
    href: '#',
  },
  {
    id: 'contact-linkedin',
    icon: '🔗',
    label: 'LinkedIn',
    value: 'linkedin.com/in/pramod-sharma-268a4412b',
    href: 'https://www.linkedin.com/in/pramod-sharma-268a4412b',
  },
]

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-extrabold text-white mb-3">
        Get In <span className="text-blue-400">Touch</span>
      </h1>
      <p className="text-gray-400 text-lg mb-12">
        Feel free to reach out – I'm always open to new opportunities and
        interesting conversations.
      </p>

      <div className="flex flex-col gap-5">
        {contactLinks.map(({ id, icon, label, value, href }) => (
          <a
            key={id}
            id={id}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="flex items-center gap-5 bg-gray-800/40 border border-gray-700/50 rounded-2xl px-6 py-5 hover:border-blue-500 transition-all duration-300 transform hover:-translate-x-2 group hover:bg-gray-800/60 shadow-lg shadow-black/10"
          >
            <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
              {icon}
            </span>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-0.5">
                {label}
              </p>
              <p className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-200">
                {value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
