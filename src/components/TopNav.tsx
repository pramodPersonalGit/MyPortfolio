import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function TopNav() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-gray-900/40 backdrop-blur-xl border border-white/5 rounded-full shadow-2xl flex items-center gap-8"
    >
      {navLinks.map((link) => (
        <a 
          key={link.name} 
          href={link.href}
          className="relative text-sm font-bold text-gray-400 hover:text-white transition-colors group px-2 py-1"
        >
          {link.name}
          <motion.span 
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"
            initial={false}
          />
          {/* Animated Glow on hover */}
          <div className="absolute -inset-2 bg-blue-500/0 group-hover:bg-blue-500/5 rounded-lg blur-lg transition-all duration-300 -z-10"></div>
        </a>
      ))}
      
      {/* Decorative pulse at the end */}
      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
    </motion.nav>
  );
}
