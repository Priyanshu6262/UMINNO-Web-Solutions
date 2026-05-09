import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Send, CheckCircle, Loader2, Building, User, ChevronDown } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { viewportConfig, staggerContainer, staggerItem } from '../animations/variants';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'uminno@hotmail.com',
    href: 'mailto:uminno@hotmail.com',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+91 98765 43210',
    href: 'https://wa.me/919876543210',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    value: '@uminno.tech',
    href: 'https://www.instagram.com/uminno.tech/',
    color: 'from-pink-500 to-rose-600',
  },
];

const projectTypes = [
  'Web Application Development',
  'Mobile Application Development',
  'UI/UX Design',
  'Portfolio Website',
  'Landing Page',
  'Other'
];

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectService = (service) => {
    setForm({ ...form, projectType: service });
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // EmailJS integration
    const serviceId = 'service_nzozjq8';
    const templateId = 'template_hs59n6m';
    const publicKey = 'In3NgBG60I2amU4Qd';

    try {
      if (serviceId !== 'YOUR_SERVICE_ID') {
        await emailjs.send(
          serviceId,
          templateId,
          {
            first_name: form.firstName,
            last_name: form.lastName,
            email: form.email,
            phone: form.phone,
            company: form.company,
            service_needed: form.projectType,
            message: form.message,
          },
          publicKey
        );
      } else {
        // Simulate network delay if credentials are not set
        await new Promise((r) => setTimeout(r, 1500));
      }
      
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setForm({ firstName: '', lastName: '', email: '', phone: '', company: '', projectType: '', message: '' });
      }, 4000);
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');
      // In a real app, maybe show an error message, but we'll revert to idle here
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="relative py-12 md:py-20 overflow-hidden">
      {/* Animated Top Border Divider */}
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-[2px] bg-fuchsia-500 z-20 shadow-[0_0_20px_rgba(217,70,239,0.8)]"
      />
      {/* Background Effects */}
      <div className="absolute inset-0 bg-slate-950" />
      
      {/* Floating Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 pointer-events-none mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)' }}
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 pointer-events-none mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.3) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Info */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportConfig}
            className="flex flex-col justify-center"
          >

            
            <motion.h2 
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6"
            >
              Let’s Build Something <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Amazing Together</span>
            </motion.h2>
            
            <motion.p 
              variants={staggerItem}
              className="text-lg text-slate-400 mb-12 max-w-lg leading-relaxed"
            >
              We create modern websites, mobile apps, UI/UX designs, portfolio websites, and landing pages for businesses and startups.
            </motion.p>

            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const inner = (
                  <motion.div
                    key={info.label}
                    variants={staggerItem}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-6 group p-4 rounded-2xl glass border border-white/5 hover:border-violet-500/30 transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} p-[1px] flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300`}>
                      <div className="w-full h-full bg-slate-950/50 rounded-2xl flex items-center justify-center backdrop-blur-xl">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{info.label}</p>
                      <p className="text-white font-medium text-lg">{info.value}</p>
                    </div>
                  </motion.div>
                );
                return info.href ? (
                  <a key={info.label} href={info.href} target="_blank" rel="noopener noreferrer" className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={info.label}>{inner}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Animated Border Glow */}
            <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-violet-500/30 via-transparent to-cyan-500/30 opacity-50 blur-sm" />
            
            <div className="relative glass rounded-[2rem] p-8 md:p-10 border border-white/10 backdrop-blur-2xl bg-slate-900/60 shadow-2xl">
              {status === 'success' ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-20 gap-6 text-center h-full min-h-[500px]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
                    className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30"
                  >
                    <CheckCircle className="w-12 h-12 text-emerald-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold text-white font-display mb-3">Thank you!</h3>
                    <p className="text-lg text-slate-400">
                      Our team will contact you shortly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 ml-1">First Name</label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-violet-400 transition-colors" />
                        <input
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                          placeholder="John"
                          className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all duration-300 shadow-inner hover:border-white/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 ml-1">Last Name</label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-violet-400 transition-colors" />
                        <input
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Doe"
                          className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all duration-300 shadow-inner hover:border-white/20"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-violet-400 transition-colors" />
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all duration-300 shadow-inner hover:border-white/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 ml-1">Phone / WhatsApp</label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-violet-400 transition-colors" />
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all duration-300 shadow-inner hover:border-white/20"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Company Name</label>
                    <div className="relative group">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-violet-400 transition-colors" />
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company (Optional)"
                        className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all duration-300 shadow-inner hover:border-white/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 relative">
                    <label className="text-sm font-medium text-slate-300 ml-1">Service Needed</label>
                    <div 
                      className="w-full bg-slate-950/50 border border-white/10 hover:border-white/20 rounded-xl px-4 py-3.5 flex justify-between items-center cursor-pointer shadow-inner transition-all duration-300 focus-within:border-violet-500/50 focus-within:ring-1 focus-within:ring-violet-500/50"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className={`text-sm ${form.projectType ? 'text-white' : 'text-slate-500'}`}>
                        {form.projectType || 'Select a Service'}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>
                    
                    {isDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-20 w-full mt-2 bg-slate-900 border border-white/10 rounded-xl shadow-2xl py-2 overflow-hidden"
                      >
                        {projectTypes.map((type) => (
                          <div 
                            key={type}
                            onClick={() => selectService(type)}
                            className="px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-violet-600/30 cursor-pointer transition-colors"
                          >
                            {type}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Project Details</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your company or project..."
                      className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all duration-300 resize-none shadow-inner hover:border-white/20"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full relative overflow-hidden group rounded-xl p-[1px] mt-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 bg-[length:200%_auto] animate-gradient" />
                    <div className="relative bg-slate-950 rounded-xl px-8 py-4 flex items-center justify-center gap-2 transition-all duration-300 group-hover:bg-opacity-0 hover:border-transparent" style={{border: "1px solid rgba(255,255,255,0.1)"}}>
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 text-white animate-spin" />
                          <span className="text-white font-medium">Sending...</span>
                        </>
                      ) : (
                        <>
                          <span className="text-white font-medium">Send Inquiry</span>
                          <Send className="w-5 h-5 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </div>
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
