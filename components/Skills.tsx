'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiPython, SiDjango, SiNextdotjs, SiJavascript, SiTypescript,
  SiSupabase, SiDocker, SiUbuntu, SiPostgresql, SiGit,
} from 'react-icons/si';
import { FiBarChart2, FiCpu } from 'react-icons/fi';

const SKILLS = [
  { name: 'Python', icon: SiPython, color: '#3b82f6', bg: 'bg-blue-500/10', border: 'border-blue-500/20', level: 85, category: 'Language' },
  { name: 'Django', icon: SiDjango, color: '#10b981', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', level: 75, category: 'Backend' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', bg: 'bg-white/5', border: 'border-white/15', level: 70, category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f59e0b', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', level: 75, category: 'Language' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3b82f6', bg: 'bg-blue-500/10', border: 'border-blue-500/20', level: 65, category: 'Language' },
  { name: 'SQL & PostgreSQL', icon: SiPostgresql, color: '#6366f1', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', level: 70, category: 'Database' },
  { name: 'Supabase', icon: SiSupabase, color: '#10b981', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', level: 65, category: 'Database' },
  { name: 'Docker', icon: SiDocker, color: '#3b82f6', bg: 'bg-blue-500/10', border: 'border-blue-500/20', level: 60, category: 'DevOps' },
  { name: 'Linux Ubuntu', icon: SiUbuntu, color: '#f97316', bg: 'bg-orange-500/10', border: 'border-orange-500/20', level: 65, category: 'DevOps' },
  { name: 'Data Science', icon: FiBarChart2, color: '#8b5cf6', bg: 'bg-violet-500/10', border: 'border-violet-500/20', level: 70, category: 'Data' },
  { name: 'Machine Learning', icon: FiCpu, color: '#a78bfa', bg: 'bg-violet-500/10', border: 'border-violet-500/20', level: 60, category: 'Data' },
  { name: 'Git & GitHub', icon: SiGit, color: '#f97316', bg: 'bg-orange-500/10', border: 'border-orange-500/20', level: 80, category: 'Tool' },
];

const CATEGORIES = ['All', 'Language', 'Backend', 'Frontend', 'Database', 'DevOps', 'Data', 'Tool'];

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="section-padding relative bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent">
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            A curated set of technologies I use to build data-driven apps and backend systems.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map(({ name, icon: Icon, color, bg, border, level, category }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group glass rounded-2xl p-5 border ${border} hover:border-opacity-60 transition-all duration-300 card-hover`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={24} color={color} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-sm truncate">{name}</h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${bg} mt-0.5 inline-block`}
                    style={{ color }}
                  >
                    {category}
                  </span>
                </div>
                <span className="text-sm font-mono font-bold" style={{ color }}>
                  {level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.04, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${color}90, ${color})` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

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
