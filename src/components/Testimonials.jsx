import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { testimonials } from '../data/siteData';
import { viewportConfig } from '../animations/variants';

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, isActive }) {
  return (
    <motion.div
      animate={{
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.4,
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="relative rounded-2xl p-6 min-w-[300px] md:min-w-[380px] flex-shrink-0"
      style={{
        background: isActive
          ? 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08))'
          : 'rgba(255,255,255,0.02)',
        border: `1px solid ${isActive ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.05)'}`,
        boxShadow: isActive ? '0 20px 60px rgba(99,102,241,0.15)' : 'none',
        backdropFilter: 'blur(16px)',
      }}
    >
      {/* Quote Icon */}
      <Quote className="w-8 h-8 text-indigo-500/40 mb-4" />

      {/* Review */}
      <p className="text-slate-300 text-sm leading-relaxed mb-6">
        "{testimonial.review}"
      </p>

      {/* Rating */}
      <StarRating rating={testimonial.rating} />

      {/* Author */}
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center font-bold text-white text-sm`}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-semibold text-white text-sm">{testimonial.name}</p>
          <p className="text-xs text-slate-500">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-mesh" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] blur-[100px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #8b5cf6, transparent)' }}
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
            <MessageSquare className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-slate-300 font-medium">Client Reviews</span>
          </div>
          <h2 className="section-heading font-display">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subheading">
            Real feedback from real clients who trusted us with their digital vision.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-4 overflow-hidden" ref={containerRef}>
            <motion.div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              animate={{ x: `-${current * (300 + 16)}px` }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            >
              {testimonials.map((t, i) => (
                <TestimonialCard key={t.id} testimonial={t} isActive={i === current} />
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-2 bg-indigo-500'
                      : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
