import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Globe, Smartphone, Zap, Star } from 'lucide-react';
import { webPlans, androidPlans } from '../data/siteData';
import { staggerContainer, staggerItem, viewportConfig } from '../animations/variants';

function PlanCard({ plan, index }) {
  const isPopular = plan.badge === 'Most Popular';

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 ${
        isPopular
          ? 'border border-indigo-500/50 shadow-glow-lg'
          : 'border border-white/6 hover:border-indigo-500/30'
      }`}
      style={{
        background: isPopular
          ? 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08))'
          : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(16px)',
        boxShadow: isPopular ? `0 20px 60px ${plan.glow}` : undefined,
      }}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div
            className={`inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg bg-gradient-to-r ${plan.color}`}
          >
            <Star className="w-3 h-3 fill-white" />
            {plan.badge}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white font-display">{plan.name}</h3>
        <p className="text-slate-400 text-sm mt-1">{plan.description}</p>
        <div className="mt-4">
          <span
            className={`text-4xl font-black font-display bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
          >
            {plan.price}
          </span>
          <span className="text-slate-500 text-sm ml-1">/ project</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                feature.included
                  ? `bg-gradient-to-br ${plan.color}`
                  : 'bg-white/5'
              }`}
            >
              {feature.included ? (
                <Check className="w-3 h-3 text-white" />
              ) : (
                <X className="w-3 h-3 text-slate-600" />
              )}
            </div>
            <span
              className={`text-sm ${
                feature.included ? 'text-slate-200' : 'text-slate-600 line-through'
              }`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
          isPopular
            ? `bg-gradient-to-r ${plan.color} text-white shadow-lg hover:shadow-glow-lg`
            : 'border border-white/10 text-slate-300 hover:bg-white/5 hover:border-indigo-500/40'
        }`}
      >
        {isPopular ? '⚡ Get Started Now' : 'Buy Now'}
      </motion.button>
    </motion.div>
  );
}

export default function Plans() {
  const [activeTab, setActiveTab] = useState('web');

  const plans = activeTab === 'web' ? webPlans : androidPlans;

  return (
    <section id="plans" className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-mesh" />

      {/* Purple blob */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[120px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #6366f1, #8b5cf6)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >

          <h2 className="section-heading font-display">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="section-subheading">
            Flexible pricing designed to match your business needs. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Tab Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-14"
        >
          <div className="glass rounded-2xl p-1.5 flex gap-1">
            {[
              { key: 'web', label: 'Web Application', icon: Globe },
              { key: 'android', label: 'Android App', icon: Smartphone },
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === key ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {activeTab === key && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
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
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {plans.map((plan, index) => (
                <PlanCard key={plan.id} plan={plan} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-500 text-sm mt-10"
        >
          💬 Need a custom solution?{' '}
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
          >
            Contact us
          </button>{' '}
          for a personalized quote.
        </motion.p>
      </div>
    </section>
  );
}
