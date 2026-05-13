import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { testimonials } from '../data/siteData';
import { viewportConfig } from '../animations/variants';

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 md:w-5 md:h-5 ${
            i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-700 fill-slate-800'
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, isActive }) {
  return (
    <div
      className={`relative rounded-3xl p-8 md:p-10 w-[85vw] sm:w-[400px] md:w-[450px] flex-shrink-0 snap-center transition-all duration-500 border ${
        isActive 
          ? 'bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border-indigo-500/30 shadow-[0_8px_32px_rgba(99,102,241,0.15)] scale-100 opacity-100' 
          : 'bg-white/[0.02] border-white/5 scale-[0.95] opacity-50 hover:opacity-70'
      } backdrop-blur-xl flex flex-col`}
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-20 pointer-events-none">
        <Quote className="w-12 h-12 text-indigo-400" />
      </div>

      {/* Rating */}
      <StarRating rating={testimonial.rating} />

      {/* Review */}
      <p className="text-slate-200 text-lg md:text-xl leading-relaxed mb-8 pr-4 font-medium flex-1">
        "{testimonial.review}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
        <div
          className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center font-bold text-white text-xl shadow-lg flex-shrink-0`}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-bold text-white text-lg">{testimonial.name}</p>
          <p className="text-sm text-indigo-300 font-medium">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  // Sync scroll with state
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.children[0].offsetWidth + 24; // gap-6 is 24px
      const newCurrent = Math.round(scrollLeft / cardWidth);
      if (newCurrent !== current && newCurrent >= 0 && newCurrent < testimonials.length) {
        setCurrent(newCurrent);
      }
    };

    const el = containerRef.current;
    if (el) el.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
    };
  }, [current]);

  const scrollToCard = (index) => {
    if (index < 0 || index >= testimonials.length) return;
    setCurrent(index);
    if (containerRef.current) {
      const card = containerRef.current.children[index];
      if (card) {
        const container = containerRef.current;
        const scrollLeft = card.offsetLeft - (container.offsetWidth / 2) + (card.offsetWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  };

  const prev = () => scrollToCard(current - 1);
  const next = () => scrollToCard(current + 1);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-mesh" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] blur-[120px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #8b5cf6, transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
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
          className="relative w-full"
        >
          {/* Scroll Container */}
          <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-[calc(50%-42.5vw)] sm:px-[calc(50%-200px)] md:px-[calc(50%-225px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ scrollBehavior: 'smooth' }}
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} isActive={i === current} />
            ))}
          </div>

          {/* Edge Gradients for smooth fade effect */}
          <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-32 bg-gradient-to-r from-[#0a0a12] to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-32 bg-gradient-to-l from-[#0a0a12] to-transparent pointer-events-none" />

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              disabled={current === 0}
              className={`w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center transition-colors shadow-lg ${
                current === 0 ? 'opacity-50 cursor-not-allowed text-slate-500' : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToCard(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-10 h-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]'
                      : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              disabled={current === testimonials.length - 1}
              className={`w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center transition-colors shadow-lg ${
                current === testimonials.length - 1 ? 'opacity-50 cursor-not-allowed text-slate-500' : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
