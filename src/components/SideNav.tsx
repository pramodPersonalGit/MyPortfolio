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
      <nav className={`fixed left-0 top-0 h-full w-24 md:w-64 flex flex-col items-center md:items-start py-12 px-4 md:px-8 z-50 transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        {/* Logo */}
        <div className="mb-20">
          <button 
            onClick={() => handleScroll('home')}
            className="text-3xl font-black text-white hover:scale-110 transition-transform group relative"
          >
            P<span className="md:inline hidden">RAMOD</span><span className="text-blue-500 animate-pulse">.</span>
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-8 w-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`relative flex items-center justify-center md:justify-start gap-4 p-2 rounded-xl transition-all duration-300 group ${
                activeSection === item.id ? 'text-blue-400' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {/* Active Indicator Line */}
              <div className={`absolute -left-4 md:-left-8 w-1.5 h-full bg-blue-500 rounded-r-full transition-all duration-500 transform ${
                activeSection === item.id ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`} />
              
              <span className={`text-2xl transition-all duration-300 ${activeSection === item.id ? 'scale-125' : 'group-hover:scale-110'}`}>
                {item.icon}
              </span>
              <span className={`hidden md:block text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                activeSection === item.id ? 'translate-x-2' : 'group-hover:translate-x-1'
              }`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Footer / Connect */}
        <div className="mt-auto hidden md:block">
          <div className="flex flex-col gap-4">
            <a 
              href="https://www.linkedin.com/in/pramod-sharma" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-500 transition-colors text-[10px] font-black uppercase tracking-widest flex items-center gap-2"
            >
              <div className="w-4 h-[1px] bg-gray-800"></div> LinkedIn
            </a>
            <p className="text-[10px] text-gray-700 font-bold uppercase tracking-widest">
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

