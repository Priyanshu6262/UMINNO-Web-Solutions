import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#080810' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.3), transparent 60%)',
        }}
      />

      <motion.div className="relative flex flex-col items-center gap-6">
        {/* Spinning ring */}
        <div className="relative w-24 h-24">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full"
            style={{
              border: '3px solid transparent',
              borderTopColor: '#6366f1',
              borderRightColor: '#8b5cf6',
            }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-2 rounded-full"
            style={{
              border: '2px solid transparent',
              borderTopColor: '#c084fc',
              borderBottomColor: '#818cf8',
            }}
          />

          {/* Center logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img
                src="/logo.png"
                alt="UMINNO"
                className="w-10 h-10 object-contain rounded-xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h1
            className="font-display text-3xl font-bold mb-1"
            style={{
              background: 'linear-gradient(135deg, #818cf8, #a78bfa, #c084fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            UMINNO
          </h1>
          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-500 text-sm tracking-widest uppercase"
          >
            Loading...
          </motion.p>
        </motion.div>

        {/* Progress bar */}
        <div className="w-40 h-0.5 rounded-full bg-white/5 overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full w-1/2 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #6366f1, #8b5cf6, transparent)' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
