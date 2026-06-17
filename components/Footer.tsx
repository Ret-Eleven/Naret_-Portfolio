'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';

const SOCIALS = [
  { icon: FiGithub, href: 'https://github.com/Ret-Eleven', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kim-soknaret-naret-9772b7356', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:kim.soknaret@gmail.com', label: 'Email' },
  { icon: FaTelegram, href: 'https://t.me/iamtenz18', label: 'Telegram' },
];

const NAV_COLS: Array<{ title: string; links: Array<{ label: string; href: string; external?: boolean }> }> = [
  {
    title: 'Navigate',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Experience', href: '#experience' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'GitHub', href: 'https://github.com/Ret-Eleven', external: true },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kim-soknaret-naret-9772b7356', external: true },
      { label: 'Telegram', href: 'https://t.me/iamtenz18', external: true },
      { label: 'Email', href: 'mailto:kim.soknaret@gmail.com', external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative" style={{ borderTop: '1px solid rgba(0,212,255,0.15)' }}>
      {/* Top fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-14">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="space-y-4"
          >
            {/* Logo */}
            <a href="#home" className="inline-flex items-center gap-2.5 group">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #ec4899, #00d4ff)' }}
              >
                <span className="text-sm font-black text-white">KS</span>
              </div>
              <span className="font-black text-white text-lg tracking-tight">
                Naret<span style={{ color: '#ec4899' }}>.</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
              Data Science student &amp; backend developer building elegant, data-driven applications.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 pt-1">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-white transition-colors duration-200"
                  style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.03)' }}
                  aria-label={label}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Nav columns */}
          {NAV_COLS.map(({ title, links }, ci) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + ci * 0.07 }}
            >
              <h4 className="text-xs text-gray-600 uppercase tracking-widest font-mono mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href, external = false }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-gray-500 hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-gray-700 text-xs font-mono">
            © 2026 Kim Soknaret. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs font-mono">
            Built with{' '}
            <span style={{ color: '#ec4899' }}>Next.js</span>
            {' · '}
            <span style={{ color: '#00d4ff' }}>TypeScript</span>
            {' · '}
            <span style={{ color: '#ec4899' }}>Tailwind</span>
            {' · '}
            <span className="text-gray-600">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
