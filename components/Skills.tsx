'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiPython, SiDjango, SiNextdotjs, SiJavascript, SiTypescript,
  SiSupabase, SiDocker, SiUbuntu, SiPostgresql, SiGit,
} from 'react-icons/si';
import { FiBarChart2, FiCpu } from 'react-icons/fi';

const SKILLS = [
  { name: 'Python', icon: SiPython, color: '#3b82f6', level: 85, category: 'Language' },
  { name: 'Django', icon: SiDjango, color: '#10b981', level: 75, category: 'Backend' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', level: 70, category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f59e0b', level: 75, category: 'Language' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3b82f6', level: 65, category: 'Language' },
  { name: 'SQL & PostgreSQL', icon: SiPostgresql, color: '#00d4ff', level: 70, category: 'Database' },
  { name: 'Supabase', icon: SiSupabase, color: '#10b981', level: 65, category: 'Database' },
  { name: 'Docker', icon: SiDocker, color: '#3b82f6', level: 60, category: 'DevOps' },
  { name: 'Linux Ubuntu', icon: SiUbuntu, color: '#f97316', level: 65, category: 'DevOps' },
  { name: 'Data Science', icon: FiBarChart2, color: '#ec4899', level: 70, category: 'Data' },
  { name: 'Machine Learning', icon: FiCpu, color: '#00d4ff', level: 60, category: 'Data' },
  { name: 'Git & GitHub', icon: SiGit, color: '#f97316', level: 80, category: 'Tool' },
];

const CATEGORIES = ['All', 'Language', 'Backend', 'Frontend', 'Database', 'DevOps', 'Data', 'Tool'];

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [active, setActive] = useState('All');

  const displayed = active === 'All' ? SKILLS : SKILLS.filter((s) => s.category === active);

  return (
    <section id="skills" className="section-padding relative" style={{ background: 'linear-gradient(to bottom, transparent, rgba(236,72,153,0.02), transparent)' }}>
      <div className="absolute left-0 top-1/2 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(0,212,255,0.04)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm tracking-widest uppercase mb-3 font-mono" style={{ color: '#ec4899' }}>What I work with</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            A curated set of technologies I use to build data-driven apps and backend systems.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-1.5 text-sm font-medium rounded-full border transition-all duration-200 font-mono"
              style={
                active === cat
                  ? { background: '#ec4899', borderColor: '#ec4899', color: '#ffffff', boxShadow: '0 4px 16px rgba(236,72,153,0.3)' }
                  : { background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)', color: '#888888' }
              }
            >
              {cat}
              {cat !== 'All' && (
                <span className="ml-1.5 text-xs opacity-60">
                  {SKILLS.filter((s) => s.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {displayed.map(({ name, icon: Icon, color, level, category }, i) => (
              <motion.div
                key={name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group bento-card bento-card-hover p-5"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                    style={{ background: `${color}12`, border: `1px solid ${color}25` }}
                  >
                    <Icon size={24} color={color} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-sm truncate">{name}</h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full mt-0.5 inline-block font-mono"
                      style={{ background: `${color}10`, color }}
                    >
                      {category}
                    </span>
                  </div>
                  <span className="text-sm font-mono font-bold" style={{ color }}>
                    {level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-px rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.04, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${color}70, ${color})`, height: '2px' }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-gray-600 text-sm font-mono mt-10"
        >
          always_learning = True &nbsp;|&nbsp; skills.update(new_tech)
        </motion.p>
      </div>
    </section>
  );
}
