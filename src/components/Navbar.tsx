import { useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const linkClass = 'text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm font-medium'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo / Name */}
        <a href="#home" className="text-xl font-bold text-white tracking-tight">
          Pramod<span className="text-blue-400">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={linkClass}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
             <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm transition-all shadow-lg shadow-blue-600/20"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-4 pb-6 absolute w-full left-0 animate-reveal">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block text-gray-300 hover:text-blue-400 text-lg font-medium py-2"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
               <a 
                href="#contact" 
                onClick={() => setOpen(false)}
                className="block text-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-xl text-lg mt-4 transition-all"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
