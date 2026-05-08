import { motion } from 'framer-motion';
import { Briefcase, Smile, Users, ShieldCheck } from 'lucide-react';
import { stats } from '../data/siteData';
import { useCounter } from '../hooks/useCounter';

const statIcons = [Briefcase, Smile, Users, ShieldCheck];

function StatItem({ stat, icon: Icon }) {
  const { count, ref } = useCounter(stat.value, 2000);
  return (
    <div ref={ref} className="flex flex-col items-start gap-1 p-3.5 rounded-xl bg-black/20 backdrop-blur-md border border-white/10 hover:bg-white/5 transition-colors duration-300">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-1 bg-violet-500/20 text-violet-300">
        <Icon className="w-4 h-4" />
      </div>
      <div className="text-2xl font-black text-white font-display leading-none">
        {count}{stat.suffix}
      </div>
      <div className="text-xs text-slate-300 leading-tight">{stat.label}</div>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden flex items-center mt-20 lg:mt-[90px]"
      style={{ minHeight: 'calc(100vh - 90px)' }}
    >
      {/* Background Image Container with Zoom Animation */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 bg-[url('/hero_bg.png')] bg-cover bg-center bg-no-repeat -z-10"
      />

      {/* Content Container - Aligned Left */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 md:py-16">
        <div className="relative z-10 w-full md:w-3/4 lg:w-[70%] xl:w-[60%] text-left">

          {/* Main Heading (Fade-in) */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
            className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight mb-5"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.7), 0 2px 10px rgba(0,0,0,0.5)' }}
          >
            We Build{' '}
            <span style={{ background: 'linear-gradient(135deg,#c4b5fd,#a78bfa,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textShadow: '0 0 20px rgba(139,92,246,0.5)' }}>
              Modern
            </span>
            <br />
            Web & Android{' '}
            <span style={{ background: 'linear-gradient(135deg,#c4b5fd,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textShadow: '0 0 20px rgba(139,92,246,0.5)' }}>
              Applications
            </span>
          </motion.h1>

          {/* Sub Heading (Slide-up) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="text-gray-200 text-base sm:text-lg md:text-xl mb-8 max-w-2xl leading-relaxed"
            style={{ textShadow: '0 2px 15px rgba(0,0,0,0.8)' }}
          >
            Professional websites and applications for shops, e-commerce, startups, and businesses. Turning your vision into stunning digital reality.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto"
          >
            <motion.button
              onClick={() => scrollTo('plans')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/30 transition-all duration-500 text-[15px] flex items-center justify-center"
            >
              View Plans
            </motion.button>

            <motion.button
              onClick={() => scrollTo('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-white bg-transparent border border-white/40 hover:bg-white/10 hover:border-white transition-all duration-500 text-[15px] flex items-center justify-center backdrop-blur-sm"
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* Animated Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = statIcons[i];
              return <StatItem key={stat.id} stat={stat} icon={Icon} />;
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
