'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiCode, HiDatabase, HiLightningBolt } from 'react-icons/hi';
import Image from 'next/image';

const STATS = [
  { value: '3+', label: 'Years of Learning', icon: HiAcademicCap },
  { value: '10+', label: 'Projects Built', icon: HiCode },
  { value: '11+', label: 'Technologies', icon: HiDatabase },
  { value: '100%', label: 'Passion & Drive', icon: HiLightningBolt },
];

const TRAITS = [
  { label: 'Data Enthusiast', cls: 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/25' },
  { label: 'Problem Solver', cls: 'bg-violet-500/15 text-violet-300 border border-violet-500/25' },
  { label: 'Continuous Learner', cls: 'bg-blue-500/15 text-blue-300 border border-blue-500/25' },
  { label: 'Open Source Fan', cls: 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/25' },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Profile visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 to-violet-600/40 rounded-3xl blur-2xl scale-105" />

              {/* Profile card */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 glass rounded-3xl border border-white/10 overflow-hidden flex flex-col items-center justify-center p-6">
                {/* Profile photo */}
                <div className="w-28 h-28 rounded-2xl overflow-hidden mb-5 shadow-lg shadow-indigo-500/30 ring-2 ring-indigo-500/30">
                  <Image
                    src="/images/profile.jpg"
                    alt="Kim Soknaret"
                    width={112}
                    height={112}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Kim Soknaret</h3>
                <p className="text-indigo-400 text-sm font-mono mb-5">kim.soknaret@gmail.com</p>

                {/* Trait badges */}
                <div className="flex flex-wrap justify-center gap-2">
                  {TRAITS.map(({ label, cls }) => (
                    <span key={label} className={`text-xs px-2.5 py-1 rounded-full ${cls}`}>
                      {label}
                    </span>
                  ))}
                </div>

                {/* Location badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                    <span>📍</span> Phnom Penh, Cambodia
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 border border-white/5">
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                I&apos;m <span className="text-white font-semibold">Kim Soknaret</span>, a dedicated Data Science student at the
                Royal University of Phnom Penh (RUPP) with a deep passion for{' '}
                <span className="text-indigo-400">backend development</span> and{' '}
                <span className="text-violet-400">machine learning</span>.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                I love building full-stack applications that blend elegant frontend experiences with
                powerful data-driven backends. From Django REST APIs to Next.js dashboards, I enjoy
                the entire development lifecycle.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                My goal is to become a skilled{' '}
                <span className="text-blue-400">Data Engineer / ML Engineer</span> who bridges the gap
                between raw data and production-ready AI systems. I&apos;m currently exploring DevOps
                practices with Docker and Linux to make my deployments rock-solid.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ value, label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="glass rounded-xl p-4 border border-white/5 group hover:border-indigo-500/30 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/15 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/25 transition-colors duration-200">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xl font-bold gradient-text">{value}</p>
                      <p className="text-xs text-gray-500 leading-tight">{label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
