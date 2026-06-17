'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiCode, HiDatabase, HiLightningBolt, HiLocationMarker } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';
import Image from 'next/image';

const STATS = [
  { value: '3+', label: 'Years of Learning', icon: HiAcademicCap, color: '#ec4899' },
  { value: '10+', label: 'Projects Built', icon: HiCode, color: '#00d4ff' },
  { value: '11+', label: 'Technologies', icon: HiDatabase, color: '#ec4899' },
  { value: '100%', label: 'Passion & Drive', icon: HiLightningBolt, color: '#00d4ff' },
];

const TRAITS = [
  { label: 'Data Enthusiast', bg: 'rgba(236,72,153,0.1)', color: '#ec4899', border: 'rgba(236,72,153,0.2)' },
  { label: 'Problem Solver', bg: 'rgba(0,212,255,0.08)', color: '#00d4ff', border: 'rgba(0,212,255,0.2)' },
  { label: 'Continuous Learner', bg: 'rgba(236,72,153,0.08)', color: '#f472b6', border: 'rgba(236,72,153,0.15)' },
  { label: 'Open Source Fan', bg: 'rgba(0,212,255,0.06)', color: '#22d3ee', border: 'rgba(0,212,255,0.15)' },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(236,72,153,0.04)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(0,212,255,0.04)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-widest uppercase mb-3 font-mono" style={{ color: '#ec4899' }}>Get to know me</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid lg:grid-cols-3 gap-5">

          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:row-span-2"
          >
            <div className="relative h-full min-h-[400px]">
              <div
                className="absolute inset-0 rounded-3xl blur-2xl scale-105"
                style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(0,212,255,0.12))' }}
              />
              <div className="relative h-full bento-card flex flex-col items-center justify-center p-7 gap-5">
                {/* Photo / fallback initials */}
                <div
                  className="w-32 h-32 rounded-xl overflow-hidden"
                  style={{ boxShadow: '0 8px 32px rgba(236,72,153,0.25)', border: '1px solid rgba(236,72,153,0.25)' }}
                >
                  {imgError ? (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #ec4899, #00d4ff)' }}
                    >
                      <span className="text-3xl font-black text-white">KS</span>
                    </div>
                  ) : (
                    <Image
                      src="/images/profile.jpg"
                      alt="Kim Soknaret"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover object-top"
                      priority
                      onError={() => setImgError(true)}
                    />
                  )}
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">Kim Soknaret</h3>
                  <p className="text-sm font-mono" style={{ color: '#ec4899' }}>@soknaret</p>
                </div>

                {/* Traits */}
                <div className="flex flex-wrap justify-center gap-2">
                  {TRAITS.map(({ label, bg, color, border }) => (
                    <span
                      key={label}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{ background: bg, color, border: `1px solid ${border}` }}
                    >
                      {label}
                    </span>
                  ))}
                </div>

                <div className="w-full h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />

                {/* Info rows */}
                <div className="w-full space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-gray-400">
                    <HiLocationMarker size={15} style={{ color: '#ec4899', flexShrink: 0 }} />
                    <span>Phnom Penh, Cambodia</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <HiAcademicCap size={15} style={{ color: '#00d4ff', flexShrink: 0 }} />
                    <span>RUPP — Data Science</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <FiMail size={14} style={{ color: '#ec4899', flexShrink: 0 }} />
                    <span className="truncate text-xs">kim.soknaret@gmail.com</span>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for opportunities
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bento-card bento-card-hover h-full p-7">
              <p className="text-xs tracking-widest uppercase mb-5 font-mono" style={{ color: '#ec4899' }}>{'// about.me'}</p>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                I&apos;m <span className="text-white font-semibold">Kim Soknaret</span>, a dedicated Data Science student at the
                Royal University of Phnom Penh (RUPP) with a deep passion for{' '}
                <span style={{ color: '#ec4899' }}>backend development</span> and{' '}
                <span style={{ color: '#00d4ff' }}>machine learning</span>.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                I love building full-stack applications that blend elegant frontend experiences with
                powerful data-driven backends. From Django REST APIs to Next.js dashboards, I enjoy
                the entire development lifecycle.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                My goal is to become a skilled{' '}
                <span style={{ color: '#00d4ff' }}>Data Engineer / ML Engineer</span> who bridges the gap
                between raw data and production-ready AI systems. I&apos;m currently exploring DevOps
                practices with Docker and Linux to make my deployments rock-solid.
              </p>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {STATS.map(({ value, label, icon: Icon, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.45 + i * 0.08 }}
                className="bento-card bento-card-hover p-5 text-center"
              >
                <div
                  className="w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center"
                  style={{ background: `${color}12`, border: `1px solid ${color}25` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <p className="text-2xl font-black mb-0.5 gradient-text">{value}</p>
                <p className="text-xs text-gray-500 leading-tight">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
