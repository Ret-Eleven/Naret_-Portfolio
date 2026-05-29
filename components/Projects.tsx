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
    image: null,
    gradient: 'from-red-600/30 to-orange-600/20',
    accentColor: '#f97316',
    icon: HiShieldCheck,
    tags: ['Wazuh', 'Linux', 'Ubuntu', 'Docker', 'Security'],
    tech: [SiDocker],
    github: 'https://github.com',
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: 'Django Web Application',
    description:
      'A full-featured REST API web application built with Django and Django REST Framework, including authentication, CRUD operations, and PostgreSQL database integration.',
    image: null,
    gradient: 'from-emerald-600/30 to-teal-600/20',
    accentColor: '#10b981',
    icon: SiDjango,
    tags: ['Django', 'Python', 'PostgreSQL', 'REST API', 'JWT'],
    tech: [SiDjango, SiPython],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Data Science Prediction Model',
    description:
      'Machine learning pipeline for predictive analytics using scikit-learn, pandas, and matplotlib. Includes data preprocessing, feature engineering, model training and evaluation.',
    image: null,
    gradient: 'from-violet-600/30 to-purple-600/20',
    accentColor: '#8b5cf6',
    icon: FiBarChart2,
    tags: ['Python', 'scikit-learn', 'pandas', 'ML', 'Jupyter'],
    tech: [SiPython],
    github: 'https://github.com',
    demo: null,
    featured: false,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description:
      'This personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features dark/light mode, smooth animations, and particle effects.',
    image: null,
    gradient: 'from-indigo-600/30 to-blue-600/20',
    accentColor: '#6366f1',
    icon: SiNextdotjs,
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    tech: [SiNextdotjs],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    id: 5,
    title: 'Supabase Dashboard System',
    description:
      'A real-time dashboard application using Supabase for backend-as-a-service, featuring authentication, real-time subscriptions, and Row Level Security policies.',
    image: null,
    gradient: 'from-green-600/30 to-emerald-600/20',
    accentColor: '#10b981',
    icon: SiSupabase,
    tags: ['Supabase', 'Next.js', 'PostgreSQL', 'Real-time', 'Auth'],
    tech: [SiSupabase, SiNextdotjs],
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
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">What I&apos;ve built</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-8">
            A selection of projects that showcase my skills in data science, backend, and web development.
          </p>

          {/* Filter tabs */}
          <div className="inline-flex glass rounded-xl p-1 gap-1 border border-white/5">
            {(['all', 'featured'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200 capitalize ${
                  filter === f
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {f === 'all' ? `All (${PROJECTS.length})` : `Featured (${PROJECTS.filter((p) => p.featured).length})`}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayed.map(({ id, title, description, gradient, accentColor, icon: Icon, tags, tech, github, demo, featured }, i) => (
              <motion.div
                key={id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass rounded-2xl border border-white/5 overflow-hidden card-hover group flex flex-col"
              >
                {/* Project image area */}
                <div className={`relative h-44 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
                  {featured && (
                    <span className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full bg-indigo-500/80 text-white font-medium backdrop-blur-sm">
                      ⭐ Featured
                    </span>
                  )}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: `${accentColor}20`, border: `1px solid ${accentColor}40` }}
                  >
                    <Icon size={32} color={accentColor} />
                  </div>

                  {/* Decorative circles */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-20" style={{ background: accentColor, filter: 'blur(20px)' }} />
                  <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-10" style={{ background: accentColor, filter: 'blur(15px)' }} />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-indigo-300 transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/8"
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
                      className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-lg glass border border-white/8 text-gray-300 hover:text-white hover:border-indigo-500/30 transition-all duration-200"
                    >
                      <FiGithub size={14} />
                      GitHub
                    </a>
                    {demo ? (
                      <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90 transition-opacity duration-200"
                      >
                        <FiExternalLink size={14} />
                        Live Demo
                      </a>
                    ) : (
                      <span className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-lg bg-white/5 text-gray-600 cursor-not-allowed">
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
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-200 group"
          >
            View all projects on GitHub
            <FiGithub size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
