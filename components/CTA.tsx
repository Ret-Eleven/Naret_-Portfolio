'use client';

import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';

const STATS = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Completed' },
  { value: '100%', label: 'Commitment' },
];

export default function CTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(236,72,153,0.07) 0%, rgba(0,212,255,0.05) 45%, transparent 70%)',
          }}
        />
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(236,72,153,0.35), transparent)' }} />
        <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.3), transparent)' }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(236,72,153,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.8) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Accent glows */}
      <div
        className="absolute left-1/4 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'rgba(236,72,153,0.1)' }}
      />
      <div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'rgba(0,212,255,0.08)' }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest px-4 py-1.5 rounded-full"
            style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-[3.75rem] font-black mb-6 leading-[1.1] tracking-tight"
        >
          <span className="text-white">Ready to </span>
          <span className="gradient-text">Build Together?</span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Available for internships, freelance projects, and full-time opportunities.
          Let&apos;s create something remarkable together.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white text-base transition-all duration-300"
            style={{ background: '#ec4899', boxShadow: '0 8px 32px rgba(236,72,153,0.3)' }}
          >
            Get In Touch
            <HiArrowRight size={18} />
          </motion.a>
          <motion.a
            href="https://github.com/Ret-Eleven"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-gray-300 text-base transition-all duration-300 hover:text-white"
            style={{ border: '1px solid rgba(0,212,255,0.3)', background: 'transparent', color: '#00d4ff' }}
          >
            <FiGithub size={18} />
            View My Work
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-10 mt-14 pt-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-black gradient-text">{value}</p>
              <p className="text-xs text-gray-600 font-mono mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
