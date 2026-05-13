import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ExternalLink, MessageSquare, X, LayoutGrid } from 'lucide-react';
import { projectsData } from '../data/siteData';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedReview, setSelectedReview] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const slideCount = projectsData.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  };

  // Autoplay removed as requested

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedReview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedReview]);

  return (
    <section id="projects" className="pt-12 pb-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            A showcase of our premium web applications and e-commerce platforms.
            <span className="block mt-2 font-medium text-purple-400"></span>
          </motion.p>
        </div>

        {/* Slider Section */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Slider Container */}
          <div className="overflow-hidden rounded-2xl glass-dark border border-white/10 shadow-2xl">
            <motion.div
              ref={containerRef}
              className="flex"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  nextSlide();
                } else if (swipe > swipeConfidenceThreshold) {
                  prevSlide();
                }
              }}
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {projectsData.map((project, index) => (
                <motion.div 
                  key={project.id} 
                  className="w-full flex-shrink-0 flex flex-col md:flex-row"
                  animate={{ 
                    opacity: currentIndex === index ? 1 : 0.3,
                    scale: currentIndex === index ? 1 : 0.95 
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Image Side */}
                  <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[400px] max-h-[400px] md:max-h-[600px] group overflow-y-auto overflow-x-hidden bg-slate-900/40 backdrop-blur-sm rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none flex flex-col items-center gap-[1px] p-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <div className="absolute inset-0 bg-slate-800 animate-pulse -z-10" /> {/* Skeleton */}
                    
                    {/* First Image */}
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block cursor-pointer relative w-full rounded-xl overflow-hidden shadow-2xl bg-slate-900/50 group/img1 border border-white/5"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover object-top transition-all duration-700 group-hover/img1:scale-105 opacity-90 group-hover/img1:opacity-100"
                        onError={(e) => {
                          e.target.parentElement.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover/img1:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </a>

                    {/* Second Image (Conditional) */}
                    {project.image2 && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block cursor-pointer relative w-full rounded-xl overflow-hidden shadow-2xl bg-slate-900/50 group/img2 border border-white/5 mt-1"
                      >
                        <img
                          src={project.image2}
                          alt={`${project.title} secondary preview`}
                          className="w-full h-auto object-cover object-top transition-all duration-700 group-hover/img2:scale-105 opacity-90 group-hover/img2:opacity-100"
                          onError={(e) => {
                            e.target.parentElement.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover/img2:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </a>
                    )}
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.categories.map((cat, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-purple-300">
                          {cat}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-3xl font-bold mb-4 text-white group-hover:gradient-text transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-auto">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live URL
                      </a>
                      <button
                        onClick={() => setSelectedReview(project)}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 hover:bg-white/10 text-white font-medium transition-all duration-300"
                      >
                        <MessageSquare className="w-4 h-4 text-blue-400" />
                        Review
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 transition-all z-20 md:-left-6 shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 transition-all z-20 md:-right-6 shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Bullet Indicators */}
          <div className="flex justify-center gap-4 mt-8 items-center">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="relative w-3 h-3 rounded-full overflow-hidden"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className="absolute inset-0 bg-white/20 transition-colors hover:bg-white/40" />
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-opacity duration-500 ${
                    currentIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Review Modal */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            onClick={() => setSelectedReview(null)}
            className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm"
          />
        )}
        {selectedReview && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%", transition: { duration: 0.3, ease: "easeInOut" } }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.y > 100 || velocity.y > 500) {
                setSelectedReview(null);
              }
            }}
            className="fixed left-0 right-0 bottom-0 md:bottom-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[90%] md:max-w-lg z-[101] flex flex-col justify-end md:justify-center h-full md:h-auto pointer-events-none"
          >
            <div className="glass-dark md:border border-white/10 rounded-t-3xl md:rounded-2xl p-6 md:p-8 relative shadow-[0_-10px_40px_rgba(139,92,246,0.15)] md:shadow-[0_0_40px_rgba(139,92,246,0.15)] pointer-events-auto max-h-[85vh] flex flex-col">
                {/* Mobile Drag Handle */}
                <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-6 md:hidden" />

                {/* Decorative gradients */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-t-3xl md:rounded-t-2xl" />
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-[40px] pointer-events-none" />

                <button
                  onClick={() => setSelectedReview(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors hidden md:block"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex-shrink-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-xl font-bold text-white shadow-lg flex-shrink-0">
                      {getInitials(selectedReview.review.name)}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{selectedReview.review.name}</h4>
                      <p className="text-slate-400 text-sm">{selectedReview.review.role}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1, type: "spring" }}
                        >
                          <Star
                            className={`w-4 h-4 md:w-5 md:h-5 ${i < selectedReview.review.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}`}
                          />
                        </motion.div>
                      ))}
                    </div>
                    <span className="w-1 h-1 rounded-full bg-slate-600 hidden sm:block" />
                    <div className="flex gap-2 flex-wrap">
                      {selectedReview.categories.map((cat, i) => (
                        <span key={i} className="px-2.5 py-0.5 text-xs font-medium bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="overflow-y-auto overscroll-contain pr-2 -mr-2 custom-scrollbar flex-grow">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-slate-300 text-base md:text-lg leading-relaxed italic pb-4"
                  >
                    "{selectedReview.review.text}"
                  </motion.p>
                </div>
              </div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Swipe utility functions
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
