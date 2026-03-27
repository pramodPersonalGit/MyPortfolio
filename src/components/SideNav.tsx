import React, { useState } from 'react';

interface SideNavProps {
  activeSection: string;
}

const SideNav: React.FC<SideNavProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
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
        className="fixed top-6 right-6 z-[70] md:hidden bg-blue-600/20 backdrop-blur-xl border border-blue-500/30 text-white p-3.5 rounded-2xl shadow-2xl transition-all active:scale-95 group"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Side Navigation */}
      <nav className={`fixed left-0 top-0 h-full flex flex-col items-start py-12 px-8 z-[80] transition-all duration-500 ease-in-out ${
        isOpen 
          ? 'translate-x-0 bg-gray-950/95 backdrop-blur-xl w-72 border-r border-blue-500/10 shadow-2xl' 
          : '-translate-x-full md:translate-x-0 md:bg-transparent md:w-64 w-24'
      }`}>
        {/* Logo */}
        <div className="mb-20">
          <button 
            onClick={() => handleScroll('home')}
            className="text-3xl font-black text-white hover:scale-110 transition-transform group relative"
          >
            P<span className={`${isOpen ? 'inline' : 'hidden'} md:inline`}>RAMOD</span><span className="text-blue-500">.</span>
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-10 w-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`relative flex items-center gap-4 transition-all duration-500 group ${
                activeSection === item.id ? 'text-blue-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              {/* Active Indicator Line/Dot */}
              <div className={`absolute -left-6 md:-left-8 w-1 h-8 bg-blue-500 rounded-full transition-all duration-500 ${
                activeSection === item.id ? 'opacity-100' : 'opacity-0 -translate-x-2'
              }`} />
              
              <span className={`text-xl transition-all duration-500 ${activeSection === item.id ? 'scale-110' : 'group-hover:scale-105'}`}>
                {item.icon}
              </span>
              <span className={`${isOpen ? 'block' : 'hidden'} md:block text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 ${
                activeSection === item.id ? 'translate-x-2' : 'group-hover:translate-x-1'
              }`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Socials / Minimal Footer */}
        <div className={`mt-auto ${isOpen ? 'block' : 'hidden'} md:block opacity-40 hover:opacity-100 transition-opacity duration-500`}>
          <div className="flex flex-col gap-6">
            <a 
              href="https://www.linkedin.com/in/pramod-sharma" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-500 transition-colors text-[9px] font-bold uppercase tracking-[0.2em] flex items-center gap-3"
            >
              <div className="w-6 h-[1px] bg-gray-700"></div> LinkedIn
            </a>
            <p className="text-[9px] text-gray-600 font-bold uppercase tracking-[0.2em] ml-9">
              &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-gray-950/80 backdrop-blur-md z-[60] md:hidden transition-all duration-500"
        />
      )}
    </>
  );
};

export default SideNav;

