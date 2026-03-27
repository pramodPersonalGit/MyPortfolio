import profilePic from '../Images/WhatsApp Image 2026-02-23 at 1.15.50 PM.jpeg';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* LEFT: Intro Content */}
        <div className="flex-1 text-left order-2 lg:order-1 animate-fade-left">
          {/* Greeting */}
          <p className="text-blue-400 font-bold text-xl mb-4 tracking-widest uppercase opacity-0 animate-reveal delay-100">
            👋 Hey, I'm
          </p>

          {/* Name */}
          <h1 className="text-6xl sm:text-8xl font-black text-white mb-6 leading-tight tracking-tighter opacity-0 animate-reveal delay-200">
            Pramod<span className="text-blue-500">.</span>
          </h1>

          {/* Title */}
          <p className="text-2xl sm:text-3xl font-bold text-gray-300 mb-8 opacity-0 animate-reveal delay-300">
            Salesforce Developer &{' '}
            <span className="text-blue-400">AI Specialist</span>
          </p>

          {/* Intro */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-12 opacity-0 animate-reveal delay-500">
            I craft scalable solutions that bridge the gap between business needs and 
            technological excellence. My focus is on Salesforce architecture, 
            Agentforce, and AI-driven automation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5 opacity-0 animate-reveal delay-500">
            <a
              href="#projects"
              id="home-view-projects"
              className="px-10 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-600/30 active:scale-95"
            >
              View Projects
            </a>
            <a
              href="#contact"
              id="home-contact"
              className="px-10 py-4 rounded-2xl border-2 border-gray-700 hover:border-blue-500/50 text-gray-300 hover:text-white font-bold transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT: Profile Image */}
        <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-scale">
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Image Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-gray-800 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src={profilePic} 
                alt="Pramod Sharma" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors">
          <span className="text-[10px] uppercase font-bold tracking-widest">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  )
}

