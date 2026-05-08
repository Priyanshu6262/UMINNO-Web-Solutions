import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, ArrowRight, Globe, Smartphone } from 'lucide-react';
import { webPlans, androidPlans } from '../data/siteData';
import { staggerContainer, staggerItem, viewportConfig } from '../animations/variants';

function PlanCard({ plan, index }) {
  const isPopular = plan.badge === 'Most Popular';

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -12, scale: 1.02 }}
      className={`relative rounded-3xl p-6 flex flex-col transition-all duration-500 ${
        isPopular
          ? 'border border-indigo-500/50 shadow-[0_0_40px_rgba(99,102,241,0.25)]'
          : 'border border-white/10 hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]'
      }`}
      style={{
        background: isPopular
          ? 'linear-gradient(135deg, rgba(30,27,75,0.4), rgba(49,46,129,0.3))'
          : 'rgba(15,23,42,0.4)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Background Glow */}
      {isPopular && (
        <div 
          className="absolute inset-0 rounded-3xl opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${plan.glow}, transparent 70%)`
          }}
        />
      )}

      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] bg-gradient-to-r ${plan.color}`}>
            <Star className="w-3.5 h-3.5 fill-white" />
            {plan.badge}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-6 relative z-10 text-center pb-6 border-b border-white/5">
        <h3 className="text-xl font-bold text-white font-display mb-1.5">{plan.name}</h3>
        <p className="text-slate-400 text-xs mb-5 h-8">{plan.description}</p>
        <div className="flex justify-center items-end gap-1">
          <span className={`text-4xl font-black font-display bg-gradient-to-r ${plan.color} bg-clip-text text-transparent drop-shadow-sm`}>
            {plan.price}
          </span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1 relative z-10">
        {plan.features.map((feature, i) => (
          <motion.li 
            key={i} 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i }}
            className="flex items-start gap-3"
          >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md ${
              feature.included
                ? `bg-gradient-to-br ${plan.color}`
                : 'bg-white/5 border border-white/10'
            }`}>
              <Check className={`w-3 h-3 ${feature.included ? 'text-white' : 'opacity-0'}`} />
            </div>
            <span className={`text-[13px] leading-relaxed ${
              feature.included ? 'text-slate-200' : 'text-slate-600'
            }`}>
              {feature.text}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className={`relative z-10 w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group ${
          isPopular
            ? `bg-gradient-to-r ${plan.color} text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]`
            : 'glass border border-white/10 text-white hover:bg-white/10'
        }`}
      >
        Get Started
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
}

export default function Plans() {
  const [activeTab, setActiveTab] = useState('web');
  const plans = activeTab === 'web' ? webPlans : androidPlans;

  return (
    <section id="plans" className="relative pt-4 pb-12 md:pt-8 md:pb-16 overflow-hidden">
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-mesh opacity-40" />
      
      {/* Animated Light Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            {activeTab === 'web' ? 'Website Development' : 'Android App Development'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 drop-shadow-sm">Plans</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Professional {activeTab === 'web' ? 'websites' : 'applications'} for businesses, shops, startups, and brands.
          </p>
        </motion.div>

        {/* Tab Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="glass rounded-2xl p-1.5 flex gap-1 border border-white/5 shadow-lg">
            {[
              { key: 'web', label: 'Web Application', icon: Globe },
              { key: 'android', label: 'Android App', icon: Smartphone },
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === key ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {activeTab === key && (
                  <motion.div
                    layoutId="tab-bg-plans"
                    className="absolute inset-0 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                    style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.8), rgba(139,92,246,0.8))' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  {label}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Plans Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch"
            >
              {plans.map((plan, index) => (
                <PlanCard key={plan.id} plan={plan} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Contact Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block glass rounded-2xl p-6 md:p-8 border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="text-slate-300 relative z-10 flex flex-col md:flex-row items-center gap-2 md:gap-3 text-lg">
              <span className="text-2xl">💡</span>
              Need a completely custom enterprise solution?
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-indigo-300 hover:to-purple-300 flex items-center gap-1 group/btn ml-1"
              >
                Let's talk
                <ArrowRight className="w-4 h-4 text-purple-400 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
