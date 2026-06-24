'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { HiShieldCheck } from 'react-icons/hi';
import { SiDjango, SiPython, SiNextdotjs, SiSupabase, SiDocker } from 'react-icons/si';
import { FiBarChart2 } from 'react-icons/fi';

const PROJECTS = [
  {
    id: 1,
    title: 'Wazuh Monitoring Setup',
    description:
      'A comprehensive security monitoring and SIEM solution using Wazuh for real-time threat detection, log analysis, and alerting across Linux/Ubuntu servers.',
    gradient: 'from-[#06b6d4]/20 to-orange-600/10',
    accentColor: '#06b6d4',
    icon: HiShieldCheck,
    tags: ['Wazuh', 'Linux', 'Ubuntu', 'Docker', 'Security'],
    github: 'https://github.com',
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: 'Django Web Application',
    description:
      'A full-featured REST API web application built with Django and Django REST Framework, including authentication, CRUD operations, and PostgreSQL database integration.',
    gradient: 'from-emerald-600/20 to-teal-600/10',
    accentColor: '#818cf8',
    icon: SiDjango,
    tags: ['Django', 'Python', 'PostgreSQL', 'REST API', 'JWT'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Data Science Prediction Model',
    description:
      'Machine learning pipeline for predictive analytics using scikit-learn, pandas, and matplotlib. Includes data preprocessing, feature engineering, model training and evaluation.',
    gradient: 'from-[#818cf8]/15 to-blue-600/10',
    accentColor: '#818cf8',
    icon: FiBarChart2,
    tags: ['Python', 'scikit-learn', 'pandas', 'ML', 'Jupyter'],
    github: 'https://github.com',
    demo: null,
    featured: false,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description:
      'This personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, particle effects, and the COMPUTE-inspired design system.',
    gradient: 'from-[#06b6d4]/15 to-[#818cf8]/10',
    accentColor: '#06b6d4',
    icon: SiNextdotjs,
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    id: 5,
    title: 'Supabase Dashboard System',
    description:
      'A real-time dashboard application using Supabase for backend-as-a-service, featuring authentication, real-time subscriptions, and Row Level Security policies.',
    gradient: 'from-green-600/20 to-emerald-600/10',
    accentColor: '#818cf8',
    icon: SiSupabase,
    tags: ['Supabase', 'Next.js', 'PostgreSQL', 'Real-time', 'Auth'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const displayed = filter === 'featured' ? PROJECTS.filter((p) => p.featured) : PROJECTS;

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute right-0 top-1/3 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(6,182,212,0.04)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm tracking-widest uppercase mb-3 font-mono" style={{ color: '#06b6d4' }}>What I&apos;ve built</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-8">
            A selection of projects that showcase my skills in data science, backend, and web development.
          </p>

          {/* Filter tabs */}
          <div
            className="inline-flex rounded-lg p-1 gap-1"
            style={{ background: 'rgba(26,26,26,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            {(['all', 'featured'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200 capitalize"
                style={
                  filter === f
                    ? { background: '#06b6d4', color: '#ffffff', boxShadow: '0 4px 12px rgba(6,182,212,0.3)' }
                    : { color: '#888888' }
                }
              >
                {f === 'all' ? `All (${PROJECTS.length})` : `Featured (${PROJECTS.filter((p) => p.featured).length})`}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayed.map(({ id, title, description, gradient, accentColor, icon: Icon, tags, github, demo, featured }, i) => (
              <motion.div
                key={id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`bento-card overflow-hidden card-hover group flex flex-col ${
                  i === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Project image area */}
                <div className={`relative h-44 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
                  {featured && (
                    <span
                      className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(6,182,212,0.85)', color: '#ffffff', backdropFilter: 'blur(8px)' }}
                    >
                      ⭐ Featured
                    </span>
                  )}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{ background: `${accentColor}18`, border: `1px solid ${accentColor}35` }}
                  >
                    <Icon size={32} color={accentColor} />
                  </div>
                  <div
                    className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-20"
                    style={{ background: accentColor, filter: 'blur(20px)' }}
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-white text-lg mb-2 transition-colors duration-200 group-hover:text-[#818cf8]">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md"
                        style={{ background: 'rgba(255,255,255,0.04)', color: '#888888', border: '1px solid rgba(255,255,255,0.07)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-lg text-gray-300 hover:text-white transition-all duration-200"
                      style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
                    >
                      <FiGithub size={14} />
                      GitHub
                    </a>
                    {demo ? (
                      <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-lg text-white hover:opacity-90 transition-opacity duration-200"
                        style={{ background: '#06b6d4' }}
                      >
                        <FiExternalLink size={14} />
                        Live Demo
                      </a>
                    ) : (
                      <span
                        className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-lg cursor-not-allowed"
                        style={{ background: 'rgba(255,255,255,0.03)', color: '#555555' }}
                      >
                        <FiExternalLink size={14} />
                        Demo soon
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* More projects link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Ret-Eleven"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 group"
            style={{ color: '#06b6d4' }}
          >
            View all projects on GitHub
            <FiGithub size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

