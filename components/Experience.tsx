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
    color: '#818cf8',
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
    color: '#818cf8',
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
    color: '#06b6d4',
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
    color: '#818cf8',
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
    color: '#06b6d4',
    skills: ['Docker', 'Linux Ubuntu', 'Wazuh', 'Nginx', 'CI/CD'],
    type: 'learning',
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="experience" className="section-padding relative" style={{ background: 'linear-gradient(to bottom, transparent, rgba(129,140,248,0.02), transparent)' }}>
      <div className="absolute left-1/4 bottom-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(6,182,212,0.04)' }} />
      <div className="absolute right-1/4 top-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(129,140,248,0.03)' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase mb-3 font-mono" style={{ color: '#06b6d4' }}>My journey so far</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Learning <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Every line of code is a step forward. Here&apos;s how I&apos;ve been growing as a developer.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical gradient line */}
          <div
            className="absolute left-6 top-6 bottom-6 w-px sm:left-1/2 sm:-translate-x-px"
            style={{ background: 'linear-gradient(to bottom, #06b6d4, #818cf8, #06b6d4, #818cf8, transparent)' }}
          />

          <div className="space-y-8">
            {JOURNEY.map(({ id, period, title, subtitle, description, icon: Icon, color, skills, type }, i) => {
              const isRight = i % 2 === 0;

              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${isRight ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  {/* Step node */}
                  <div className="relative z-10 flex-shrink-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.12 + 0.2, type: 'spring', bounce: 0.5 }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${color}12`,
                        border: `2px solid ${color}40`,
                        boxShadow: `0 0 20px ${color}25`,
                      }}
                    >
                      <Icon size={20} style={{ color }} />
                    </motion.div>
                    {/* Step number badge */}
                    <div
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-black"
                      style={{ background: color }}
                    >
                      {id}
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`flex-1 sm:w-[calc(50%-3.5rem)] ${isRight ? 'sm:mr-auto sm:pr-10' : 'sm:ml-auto sm:pl-10'}`}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="bento-card bento-card-hover p-5 group"
                    >
                      {/* Header row */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className="text-xs px-2.5 py-0.5 rounded-full font-mono"
                              style={{ background: `${color}12`, color, border: `1px solid ${color}25` }}
                            >
                              {type === 'learning' ? '📚 Learning' : '🚀 Project'}
                            </span>
                          </div>
                          <h3 className="font-bold text-white text-base">{title}</h3>
                          <p className="text-sm mt-0.5" style={{ color }}>{subtitle}</p>
                        </div>
                        <span className="text-xs text-gray-600 font-mono whitespace-nowrap mt-1 flex-shrink-0">{period}</span>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

                      <div className="flex flex-wrap gap-1.5">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2 py-0.5 rounded-md font-mono"
                            style={{ background: `${color}08`, color: `${color}cc`, border: `1px solid ${color}18` }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
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
          <div
            className="inline-flex items-center gap-2 rounded-full px-6 py-3"
            style={{ background: 'rgba(129,140,248,0.06)', border: '1px solid rgba(129,140,248,0.2)' }}
          >
            <HiCloud style={{ color: '#818cf8' }} size={16} />
            <span className="text-sm text-gray-400">
              Currently exploring <span style={{ color: '#818cf8' }}>Cloud &amp; MLOps</span> next...
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

