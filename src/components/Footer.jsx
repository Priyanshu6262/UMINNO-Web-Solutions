import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { navLinks, services } from '../data/siteData';

const socialLinks = [
  { icon: FaWhatsapp, href: 'https://wa.me/917631308820', color: '#22c55e', label: 'WhatsApp' },
  { icon: FaInstagram, href: 'https://www.instagram.com/uminno.tech/', color: '#e1306c', label: 'Instagram' },
  { icon: FaFacebook, href: '#', color: '#1877f2', label: 'Facebook' },
  { icon: FaLinkedin, href: '#', color: '#0077b5', label: 'LinkedIn' },
];

export default function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-16 pb-8 overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, #0a0a12, #050508)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Banner (Commented out as requested) 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 md:p-12 mb-16 text-center overflow-hidden relative"
          style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))',
            border: '1px solid rgba(99,102,241,0.2)',
          }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(circle at 50% 0%, #6366f1, transparent 60%)',
            }}
          />
          <div className="relative">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
              Ready to Build Something{' '}
              <span className="gradient-text">Amazing?</span>
            </h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Let's work together to create a digital presence that sets your business apart.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
        */}

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="UMINNO Logo"
                className="w-9 h-9 rounded-xl object-contain"
              />
              <span className="font-display text-2xl font-bold gradient-text">UMINNO</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Building premium digital products for businesses of all sizes. Your vision, our expertise.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, color, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center transition-all duration-300"
                  title={label}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-500 hover:text-indigo-400 text-sm transition-colors duration-200 flex items-center group relative"
                  >
                    <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-display">Services</h4>
            <ul className="space-y-2.5">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-slate-500 hover:text-indigo-400 text-sm transition-colors duration-200 flex items-center group text-left relative"
                  >
                    <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-display">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <div className="text-slate-400 text-xs mb-1 uppercase tracking-wider font-semibold">Email Address</div>
                <a
                  href="mailto:uminno@hotmail.com"
                  className="text-slate-200 hover:text-indigo-400 text-sm font-medium transition-colors duration-200"
                >
                  uminno@hotmail.com
                </a>
              </li>
              <li>
                <div className="text-slate-400 text-xs mb-1 uppercase tracking-wider font-semibold mt-2">Mobile Number</div>
                <a
                  href="tel:+917631308820"
                  className="text-slate-200 hover:text-indigo-400 text-sm font-medium transition-colors duration-200"
                >
                  +91 76313 08820
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/917631308820"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-emerald-500 hover:text-emerald-400 transition-colors bg-emerald-500/10 hover:bg-emerald-500/20 px-4 py-2 rounded-lg font-medium"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} UMINNO. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm flex items-center gap-1">
            Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            </motion.span>{' '}
            by{' '}
            <span className="gradient-text font-semibold ml-1">UMINNO</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
