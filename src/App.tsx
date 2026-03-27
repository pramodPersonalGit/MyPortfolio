import { useState, useEffect } from 'react'
import SideNav from './components/SideNav'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-10% 0px -10% 0px'
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      observerOptions
    );

    const sections = ['home', 'about', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex bg-gray-950 text-gray-100 min-h-screen selection:bg-blue-500/30">
      {/* Side Navigation */}
      <SideNav activeSection={activeSection} />

      {/* Main Content Areas */}
      <main className="flex-grow md:ml-64 overflow-x-hidden">
        <section 
          id="home" 
          className={`min-h-screen flex items-center justify-center snap-start transition-all duration-1000 ${visibleSections['home'] ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="w-full">
            <Home />
          </div>
        </section>

        <section 
          id="about" 
          className={`min-h-screen flex items-center justify-center snap-start transition-all duration-1000 ${visibleSections['about'] ? 'reveal-visible' : 'reveal-hidden'} py-16`}
        >
          <div className="w-full">
            <About />
          </div>
        </section>

        <section 
          id="contact" 
          className={`min-h-screen flex items-center justify-center snap-start transition-all duration-1000 ${visibleSections['contact'] ? 'reveal-visible' : 'reveal-hidden'} py-16`}
        >
          <div className="w-full">
            <Contact />
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

export default App
