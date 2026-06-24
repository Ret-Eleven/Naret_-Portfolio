'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';

const SOCIALS = [
  { icon: FiGithub, href: 'https://github.com/Ret-Eleven', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kim-soknaret-naret-9772b7356', label: 'LinkedIn' },
  { icon: FaTelegram, href: 'https://t.me/iamtenz18', label: 'Telegram' },
];

const ROTATING_WORDS = ['Backends', 'Data Pipelines', 'ML Models', 'Web Apps'];

const STATS = [
  { value: '3+', label: 'Years Learning' },
  { value: '10+', label: 'Projects Built' },
  { value: '11+', label: 'Technologies' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />

      {/* Ambient glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-[15%] w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: 'rgba(6,182,212,0.08)', animation: 'float 7s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-1/4 right-[15%] w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: 'rgba(129,140,248,0.07)', animation: 'float 9s ease-in-out infinite reverse' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[80px]"
          style={{ background: 'rgba(6,182,212,0.05)', animation: 'float 5s ease-in-out infinite 2s' }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <span
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm text-gray-300"
              style={{ background: 'rgba(26,26,26,0.8)', border: '1px solid rgba(6,182,212,0.2)', backdropFilter: 'blur(12px)' }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <p className="text-sm sm:text-base tracking-widest uppercase mb-2 font-mono" style={{ color: '#06b6d4' }}>
              Hello, World! 👋
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.1] tracking-tight"
          >
            <span className="text-white">Hi, I&apos;m </span>
            <span className="gradient-text">Kim Soknaret</span>
          </motion.h1>

          {/* Rotating word */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 text-2xl sm:text-3xl font-bold">
            <span className="text-gray-400">I build</span>
            <div className="relative h-10 overflow-hidden" style={{ minWidth: '220px' }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 40, opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -40, opacity: 0, filter: 'blur(8px)' }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="absolute inset-0 flex items-center justify-start gradient-text-vivid"
                >
                  {ROTATING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Roles */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 text-sm sm:text-base font-mono"
          >
            {[
              { label: 'Data Science Student', bg: 'rgba(6,182,212,0.1)', color: '#06b6d4', border: 'rgba(6,182,212,0.25)' },
              { label: 'Backend Developer', bg: 'rgba(129,140,248,0.08)', color: '#818cf8', border: 'rgba(129,140,248,0.2)' },
              { label: 'Web Developer', bg: 'rgba(255,255,255,0.05)', color: '#ffffff', border: 'rgba(255,255,255,0.12)' },
            ].map(({ label, bg, color, border }) => (
              <span
                key={label}
                className="px-3 py-1 rounded-lg"
                style={{ background: bg, color, border: `1px solid ${border}` }}
              >
                {label}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about turning data into insights and building scalable applications.
            Currently studying Data Science at RUPP while crafting elegant digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold text-white transition-all duration-300"
              style={{ background: '#06b6d4', boxShadow: '0 8px 24px rgba(6,182,212,0.3)' }}
            >
              View My Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold transition-colors duration-300"
              style={{ color: '#818cf8', border: '1px solid rgba(129,140,248,0.4)', background: 'transparent' }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-semibold text-gray-300 flex items-center justify-center gap-2 transition-all duration-300 hover:text-white"
              style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
            >
              <HiDownload size={16} />
              Resume
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-5 pt-2"
          >
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 transition-colors duration-200 hover:text-white"
                style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-6 mt-2 max-w-xs mx-auto"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-black gradient-text">{value}</p>
                <p className="text-xs text-gray-600 font-mono mt-0.5 leading-tight">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ duration: 1.8, delay: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <HiArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
}

