'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';

const socials = [
  { icon: FiGithub, href: 'https://github.com/Ret-Eleven', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kim-soknaret-naret-9772b7356', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:kim.soknaret@gmail.com', label: 'Email' },
  { icon: FaTelegram, href: 'https://t.me/iamtenz18', label: 'Telegram' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-black gradient-text"
          >
            NK
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-6"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-gray-500 hover:text-indigo-400 transition-colors duration-200"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-sm text-center"
          >
            © 2026 Naret_Portfolio. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-xs font-mono"
          >
            Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
