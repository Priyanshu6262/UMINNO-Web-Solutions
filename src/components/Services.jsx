import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ShoppingCart, Store, Building2, UserSquare2, Smartphone, LayoutDashboard
} from 'lucide-react';
import { services } from '../data/siteData';
import { staggerContainer, staggerItem, viewportConfig } from '../animations/variants';

const iconMap = {
  ShoppingCart,
  Store,
  Building2,
  UserSquare: UserSquare2,
  Smartphone,
  LayoutDashboard,
};

export default function Services() {
  const { ref, inView } = useInView({ ...viewportConfig });

  return (
    <section id="services" className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="section-heading font-display">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subheading">
            From stunning websites to powerful mobile apps, we deliver digital solutions that drive real results for your business.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-glass group relative overflow-hidden cursor-pointer"
              >
                {/* Glow effect on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${service.glow}, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {Icon && <Icon className="w-7 h-7 text-white" />}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:gradient-text transition-all">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.1 + 0.5, duration: 0.6 }}
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} origin-left`}
                />

                {/* Number */}
                <div className="absolute top-4 right-4 text-6xl font-black text-white/[0.03] font-display select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
