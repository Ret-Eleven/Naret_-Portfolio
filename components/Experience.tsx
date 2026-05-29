'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiDatabase, HiServer, HiCloud } from 'react-icons/hi';
import { SiPython, SiDjango } from 'react-icons/si';

const JOURNEY = [
  {
    id: 1,
    period: '2022 — Q1',
    title: 'Started Learning Python',
    subtitle: 'Foundation of Everything',
    description:
      'Began my coding journey with Python — from variables and loops to OOP and file I/O. Fell in love with the simplicity and power of the language.',
    icon: SiPython,
    color: '#3b82f6',
    bg: 'bg-blue-500/10',
    skills: ['Python Basics', 'OOP', 'File I/O', 'pip'],
    type: 'learning',
  },
  {
    id: 2,
    period: '2022 — Q3',
    title: 'Django & Backend Development',
    subtitle: 'Building Real Applications',
    description:
      'Dived into Django to build web applications — REST APIs, authentication, ORM, admin panel, and deploying on Linux servers.',
    icon: SiDjango,
    color: '#10b981',
    bg: 'bg-emerald-500/10',
    skills: ['Django', 'REST API', 'PostgreSQL', 'Authentication'],
    type: 'project',
  },
  {
    id: 3,
    period: '2023 — Q1',
    title: 'Data Science & Machine Learning',
    subtitle: 'Turning Data into Insights',
    description:
      'Explored the data science ecosystem: pandas, NumPy, matplotlib, scikit-learn. Built prediction models and learned statistical analysis.',
    icon: HiDatabase,
    color: '#8b5cf6',
    bg: 'bg-violet-500/10',
    skills: ['pandas', 'NumPy', 'scikit-learn', 'matplotlib', 'Jupyter'],
    type: 'learning',
  },
  {
    id: 4,
    period: '2023 — Q3',
    title: 'Full Stack Projects',
    subtitle: 'Frontend Meets Backend',
    description:
      'Combined Django backends with Next.js frontends to build complete applications. Learned TypeScript, Tailwind CSS, and modern React patterns.',
    icon: HiCode,
    color: '#6366f1',
    bg: 'bg-indigo-500/10',
    skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    type: 'project',
  },
  {
    id: 5,
    period: '2024 — Present',
    title: 'DevOps, Docker & Linux',
    subtitle: 'From Code to Production',
    description:
      'Learning DevOps fundamentals — Docker containerization, Linux server administration, Wazuh security monitoring, and CI/CD pipelines for reliable deployments.',
    icon: HiServer,
    color: '#f97316',
    bg: 'bg-orange-500/10',
    skills: ['Docker', 'Linux Ubuntu', 'Wazuh', 'Nginx', 'CI/CD'],
    type: 'learning',
  },
];

const TYPE_BADGE: Record<string, string> = {
  learning: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/25',
  project: 'bg-violet-500/15 text-violet-300 border-violet-500/25',
};

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="section-padding relative bg-gradient-to-b from-transparent via-violet-950/5 to-transparent">
      <div className="absolute left-1/4 bottom-1/4 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">My journey so far</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Learning <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Every line of code is a step forward. Here&apos;s how I&apos;ve been growing as a developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[1.65rem] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/40 to-transparent sm:left-1/2 sm:-translate-x-px" />

          <div className="space-y-10">
            {JOURNEY.map(({ id, period, title, subtitle, description, icon: Icon, color, bg, skills, type }, i) => {
              const isRight = i % 2 === 0;

              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${isRight ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  {/* Timeline node */}
                  <div className="relative z-10 flex-shrink-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-5">
                    <div
                      className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center border shadow-lg`}
                      style={{ borderColor: `${color}40`, boxShadow: `0 0 20px ${color}25` }}
                    >
                      <Icon size={16} color={color} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`flex-1 sm:w-[calc(50%-3rem)] ${isRight ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'}`}>
                    <div className="glass rounded-2xl p-5 border border-white/5 hover:border-indigo-500/20 transition-colors duration-300 group">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <span
                            className={`text-xs px-2.5 py-1 rounded-full border ${TYPE_BADGE[type]} inline-block mb-2`}
                          >
                            {type === 'learning' ? '📚 Learning' : '🚀 Project'}
                          </span>
                          <h3 className="font-bold text-white group-hover:text-indigo-300 transition-colors duration-200">
                            {title}
                          </h3>
                          <p className="text-sm text-indigo-400">{subtitle}</p>
                        </div>
                        <span className="text-xs text-gray-600 font-mono whitespace-nowrap mt-1">{period}</span>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

                      <div className="flex flex-wrap gap-1.5">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-gray-500 border border-white/8"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Future note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-14"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 border border-indigo-500/20">
            <HiCloud className="text-indigo-400" size={16} />
            <span className="text-sm text-gray-400">
              Currently exploring <span className="text-indigo-400">Cloud & MLOps</span> next...
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
