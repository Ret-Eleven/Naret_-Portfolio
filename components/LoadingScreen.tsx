'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const visited = sessionStorage.getItem('naret_visited');
      if (visited) {
        setIsLoading(false);
        return;
      }
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('naret_visited', 'true');
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
        >
          {/* Glow orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse"
              style={{ background: 'rgba(236,72,153,0.2)' }}
            />
            <div
              className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse"
              style={{ background: 'rgba(0,212,255,0.15)', animationDelay: '1s' }}
            />
          </div>

          <div className="relative flex flex-col items-center">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, duration: 0.8 }}
              className="mb-8"
            >
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-2xl opacity-25 blur-xl"
                  style={{ background: 'linear-gradient(135deg, #ec4899, #00d4ff)' }}
                />
                <div
                  className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #ec4899, #00d4ff)' }}
                >
                  <span className="text-3xl font-black text-white tracking-tight">NK</span>
                </div>
              </div>
            </motion.div>

            {/* Progress bar */}
            <div className="w-52 h-px bg-white/10 rounded-full overflow-hidden mb-4">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.3 }}
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #ec4899, #00d4ff)' }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-500 text-sm font-mono tracking-widest uppercase"
            >
              Loading portfolio...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
