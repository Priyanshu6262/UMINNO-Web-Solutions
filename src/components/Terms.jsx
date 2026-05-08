import { motion } from 'framer-motion';
import {
  CreditCard, FileText, PlusCircle, Clock, XCircle, Headphones, ShieldCheck
} from 'lucide-react';
import { terms } from '../data/siteData';
import { staggerContainer, staggerItem, viewportConfig } from '../animations/variants';

const iconMap = {
  CreditCard, FileText, PlusCircle, Clock, XCircle, Headphones, ShieldCheck,
};

export default function Terms() {
  return (
    <section id="terms" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-mesh" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-slate-300 font-medium">Terms & Conditions</span>
          </div>
          <h2 className="section-heading font-display">
            Our <span className="gradient-text">Policies</span>
          </h2>
          <p className="section-subheading">
            Clear and transparent terms to ensure a smooth working relationship and successful project delivery.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {terms.map((term, i) => {
            const Icon = iconMap[term.icon];
            return (
              <motion.div
                key={term.id}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="card-glass group relative overflow-hidden"
              >
                {/* Number overlay */}
                <div className="absolute top-2 right-4 text-7xl font-black text-white/[0.03] font-display select-none leading-none">
                  {i + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${term.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {Icon && <Icon className="w-6 h-6 text-white" />}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 font-display">{term.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{term.description}</p>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${term.color}`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 glass rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.06))',
            borderColor: 'rgba(99,102,241,0.2)',
          }}
        >
          <div>
            <h3 className="text-xl font-bold text-white font-display mb-1">
              Have questions about our terms?
            </h3>
            <p className="text-slate-400 text-sm">
              We are happy to clarify anything before you commit to a project.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary whitespace-nowrap flex-shrink-0"
          >
            Talk to Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
