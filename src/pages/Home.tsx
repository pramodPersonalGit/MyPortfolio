export default function Home() {
  return (
    <div className="flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Greeting */}
        <p className="text-blue-400 font-semibold text-lg mb-3 tracking-widest uppercase">
          👋 Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 leading-tight">
          Pramod Sharma
        </h1>

        {/* Title */}
        <p className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-8">
          Salesforce Developer &{' '}
          <span className="text-blue-400">AI Specialist</span>
        </p>

        {/* Intro */}
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          I build scalable Salesforce solutions and AI-powered applications that
          help businesses automate, innovate, and grow. Passionate about clean
          architecture, emerging AI tech, and delivering real business value.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            id="home-view-projects"
            className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-600/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            id="home-contact"
            className="px-8 py-3.5 rounded-xl border border-gray-700 hover:border-blue-400 text-gray-300 hover:text-blue-400 font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}
