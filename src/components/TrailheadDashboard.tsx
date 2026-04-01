import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import { Award, Trophy, Star, Shield, Zap, Sparkles } from 'lucide-react';

interface StatItemProps {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, suffix = "", icon }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-3 bg-blue-500/10 rounded-xl mb-2 text-blue-400">
        {icon}
      </div>
      <div className="text-2xl font-bold text-white">
        <CountUp end={value} duration={2.5} separator="," />
        {suffix}
      </div>
      <div className="text-xs text-gray-400 uppercase tracking-widest">{label}</div>
    </div>
  );
};

const HexagonBadge: React.FC = () => {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center transform hover:scale-110 transition-transform duration-500">
      {/* Hexagon CSS */}
      <div className="absolute inset-0 bg-blue-600 animate-pulse-slow opacity-20 blur-xl rounded-full"></div>
      <div className="w-24 h-28 bg-gradient-to-br from-blue-500 to-indigo-700 relative flex items-center justify-center shadow-2xl" 
           style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
        <div className="w-20 h-24 bg-gray-900 flex flex-col items-center justify-center" 
             style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
          <Trophy className="w-10 h-10 text-blue-400 mb-1" />
          <span className="text-[10px] font-bold text-blue-400 tracking-tighter uppercase">Ranger</span>
        </div>
      </div>
    </div>
  );
};

const Medal: React.FC<{ type: 'silver' | 'gold', title: string, year: string }> = ({ type, title, year }) => {
  const gradient = type === 'gold' 
    ? 'from-yellow-300 via-yellow-500 to-yellow-700' 
    : 'from-gray-100 via-gray-400 to-gray-600';
    
  return (
    <motion.div 
      whileHover={{ scale: 1.1, rotate: 5 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="flex flex-col items-center group cursor-pointer"
    >
      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${gradient} p-1 shadow-lg shadow-white/5`}>
        <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center border border-white/10">
          <Award className={`w-10 h-10 ${type === 'gold' ? 'text-yellow-500' : 'text-gray-400'}`} />
        </div>
      </div>
      <div className="mt-3 text-center">
        <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{title}</div>
        <div className="text-[10px] text-gray-500 font-medium">{year}</div>
      </div>
    </motion.div>
  );
};

const ProgressBar: React.FC<{ progress: number, targetLabel: string }> = ({ progress, targetLabel }) => {
  return (
    <div className="w-full mt-6">
      <div className="flex justify-between items-end mb-2">
        <span className="text-xs text-gray-400">{progress}% Completed</span>
        <span className="text-xs font-bold text-blue-400">{targetLabel}</span>
      </div>
      <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden border border-gray-700/50 relative">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 relative"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
        </motion.div>
      </div>
    </div>
  );
};

const TrailheadDashboard: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { stiffness: 100, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div className="w-full py-12" id="trailhead-dashboard">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left Card: Badge & Ranking Status */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
          className="relative group bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-[2rem] p-8 shadow-2xl hover:border-blue-500/50 transition-colors duration-500 overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative flex flex-col items-center">
            <div className="flex w-full justify-between items-start mb-8">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Badge & Ranking Status
                </h3>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Global Achievements</p>
              </div>
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="px-3 py-1 bg-blue-500/20 text-blue-400 text-[10px] font-bold rounded-full border border-blue-500/30 whitespace-nowrap shadow-lg shadow-blue-500/10"
              >
                LEVEL: RANGER
              </motion.div>
            </div>

            <HexagonBadge />
            
            <div className="mt-8 grid grid-cols-3 gap-8 w-full">
              <StatItem label="Badges" value={180} icon={<Award className="w-5 h-5" />} />
              <StatItem label="Points" value={181400} icon={<Zap className="w-5 h-5" />} />
              <StatItem label="Trails" value={14} icon={<Star className="w-5 h-5" />} />
            </div>

            <ProgressBar 
              progress={90} 
              targetLabel="Double Star Ranger" 
            />

            {/* Agentblazer Chip */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-20 -right-4 rotate-12 group-hover:rotate-0 transition-transform duration-500"
            >
              <div className="bg-indigo-600 px-4 py-2 rounded-xl shadow-xl border border-indigo-400 flex items-center gap-2 animate-pulse-glow">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white text-xs font-bold whitespace-nowrap">Agentblazer Champion '26</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Card: Agentblazer Status */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
          className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-[2rem] p-8 shadow-2xl hover:border-indigo-500/50 transition-colors duration-500 overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative flex flex-col h-full">
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-indigo-400" />
                Agentblazer Status
              </h3>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Innovation & Leadership</p>
            </div>

            <div className="flex-grow flex items-center justify-around">
              <Medal type="silver" title="Champion 2026" year="Current Honoree" />
              <Medal type="gold" title="Innovator 2025" year="Special Achievement" />
            </div>

            <div className="mt-auto pt-8 border-t border-gray-800/50">
              <div className="bg-blue-500/5 rounded-2xl p-4 border border-blue-500/10">
                <p className="text-sm text-gray-300 leading-relaxed italic">
                  "Spearheading the future of AI automation and Einstein Agent implementations across global sectors."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0px rgba(79, 70, 229, 0); }
          50% { box-shadow: 0 0 20px rgba(79, 70, 229, 0.5); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default TrailheadDashboard;
