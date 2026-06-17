'use client';

import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';

const SOCIALS = [
  { icon: FiGithub, href: 'https://github.com/Ret-Eleven', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kim-soknaret-naret-9772b7356', label: 'LinkedIn' },
  { icon: FaTelegram, href: 'https://t.me/iamtenz18', label: 'Telegram' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const WORDS = ['Data Science Student', 'Backend Developer', 'Web Developer'];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />

      {/* Ambient glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-[15%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px]"
          style={{ animation: 'float 7s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-1/4 right-[15%] w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[100px]"
          style={{ animation: 'float 9s ease-in-out infinite reverse' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px]"
          style={{ animation: 'float 5s ease-in-out infinite 2s' }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
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
            <span className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-sm text-gray-300 border border-indigo-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <p className="text-indigo-400 font-mono text-base sm:text-lg tracking-widest uppercase mb-2">
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

          {/* Roles */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 text-sm sm:text-base font-mono"
          >
            {WORDS.map((word, i) => (
              <span
                key={word}
                className={`px-3 py-1 rounded-lg ${
                  i === 0
                    ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30'
                    : i === 1
                    ? 'bg-violet-500/15 text-violet-300 border border-violet-500/30'
                    : 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                }`}
              >
                {word}
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
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-shadow duration-300"
            >
              View My Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white glass border border-white/10 hover:border-indigo-500/40 transition-colors duration-300"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-gray-300 glass border border-white/5 hover:text-white hover:border-indigo-500/30 transition-all duration-300 flex items-center justify-center gap-2"
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
                className="w-10 h-10 flex items-center justify-center rounded-xl glass text-gray-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-colors duration-200"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
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
