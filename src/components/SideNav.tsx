import React, { useState } from 'react';

interface SideNavProps {
  activeSection: string;
}

const SideNav: React.FC<SideNavProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'contact', label: 'Contact', icon: '✉️' },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-[60] md:hidden bg-blue-600 text-white p-3 rounded-2xl shadow-lg shadow-blue-500/30 transition-all active:scale-95"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Side Navigation */}
      <nav className={`fixed left-0 top-0 h-full w-64 bg-gray-900/98 md:bg-gray-900/50 backdrop-blur-2xl border-r border-gray-800 flex flex-col p-8 z-50 transition-transform duration-400 ease-out md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="mb-16">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleScroll('home'); }}
            className="text-2xl font-black text-white tracking-widest group"
          >
            PRAMOD<span className="text-blue-500 group-hover:animate-pulse">.</span>
          </a>
        </div>

        <div className="space-y-4 flex-grow">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`flex items-center gap-4 w-full text-left px-5 py-3.5 rounded-2xl text-lg font-semibold transition-all duration-300 group ${
                activeSection === item.id
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/60 border border-transparent'
              }`}
            >
              <span className={`text-xl transition-transform duration-300 ${activeSection === item.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-auto pt-8 border-t border-gray-800">
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mb-4">
            Connect
          </p>
          <div className="flex gap-4 mb-8">
            <a 
              href="https://www.linkedin.com/in/pramod-sharma" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-gray-800 rounded-xl text-gray-300 hover:text-blue-400 transition-colors text-xs font-bold border border-gray-700 hover:border-blue-500/50"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-[10px] text-gray-600 font-medium">
            &copy; {new Date().getFullYear()} Pramod Sharma
          </p>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-reveal"
        />
      )}
    </>
  );
};

export default SideNav;
