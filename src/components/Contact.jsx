import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, Loader2
} from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { viewportConfig, staggerContainer, staggerItem } from '../animations/variants';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'uminnodev@gmail.com',
    href: 'mailto:uminnodev@gmail.com',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 98765 43210',
    href: 'https://wa.me/919876543210',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India (Remote)',
    href: null,
    color: 'from-orange-500 to-amber-600',
  },
];

const socialLinks = [
  { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/919876543210', color: '#22c55e' },
  { icon: FaInstagram, label: 'Instagram', href: '#', color: '#e1306c' },
  { icon: FaLinkedin, label: 'LinkedIn', href: '#', color: '#0077b5' },
  { icon: FaGithub, label: 'GitHub', href: '#', color: '#e2e8f0' },
];

const projectTypes = [
  'E-Commerce Website',
  'Business Website',
  'Portfolio Website',
  'Shop Management System',
  'Android Application',
  'Custom Admin Panel',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 2000));
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setForm({ name: '', email: '', projectType: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-mesh" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[120px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #6366f1, transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Send className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-slate-300 font-medium">Get In Touch</span>
          </div>
          <h2 className="section-heading font-display">
            Start Your <span className="gradient-text">Project</span>
          </h2>
          <p className="section-subheading">
            Have a project in mind? Let us discuss how we can bring your idea to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportConfig}
            className="lg:col-span-2 space-y-5"
          >
            <motion.h3 variants={staggerItem} className="text-xl font-bold text-white font-display mb-6">
              Contact Information
            </motion.h3>

            {contactInfo.map((info) => {
              const Icon = info.icon;
              const inner = (
                <motion.div
                  key={info.label}
                  variants={staggerItem}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{info.label}</p>
                    <p className="text-slate-200 font-medium text-sm mt-0.5">{info.value}</p>
                  </div>
                </motion.div>
              );
              return info.href ? (
                <a key={info.label} href={info.href} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={info.label}>{inner}</div>
              );
            })}

            {/* Social Icons */}
            <motion.div variants={staggerItem} className="pt-4">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-4">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center transition-all duration-300"
                    style={{ '--hover-color': color }}
                    title={label}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-3xl p-8" style={{ borderColor: 'rgba(99,102,241,0.15)' }}>
              {status === 'success' ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
                  >
                    <CheckCircle className="w-20 h-20 text-emerald-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white font-display">Message Sent!</h3>
                  <p className="text-slate-400 text-center">
                    Thank you! We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-slate-400 uppercase tracking-wider mb-1.5 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/7 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 uppercase tracking-wider mb-1.5 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/7 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 uppercase tracking-wider mb-1.5 block">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-all duration-200 appearance-none"
                      style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                    >
                      <option value="" disabled className="bg-slate-900">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-slate-900">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 uppercase tracking-wider mb-1.5 block">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/7 transition-all duration-200 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-base"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
