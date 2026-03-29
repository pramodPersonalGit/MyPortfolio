import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Footer from './components/Footer.tsx'
import TopNav from './components/TopNav.tsx'

interface SectionProps {
  children: React.ReactNode;
  id: string;
}

const ParallaxSection = ({ children, id }: SectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Snappier transforms: faster fade-in, longer fully-visible duration, faster fade-out
  // Reaches full visibility very early and stays until very close to the end, preventing dimming on long sections
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0.98, 1, 1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [20, 0, 0, -20]);

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{
        opacity,
        scale,
        y
      }}
      className="min-h-screen flex items-center justify-center relative pt-4 pb-28"
    >
      <div className="w-full max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

function App() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen selection:bg-blue-500/30 overflow-x-hidden">
      {/* Immersive parallax experience where sections fade in/out based on scroll position. */}
      
      <TopNav />

      <main className="relative">
        <ParallaxSection id="home">
          <Home />
        </ParallaxSection>

        <ParallaxSection id="about">
          <About />
        </ParallaxSection>

        <ParallaxSection id="contact">
          <Contact />
        </ParallaxSection>

        <Footer />
      </main>

      {/* Subtle fixed background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(3,7,18,1)_100%)]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  )
}

export default App
