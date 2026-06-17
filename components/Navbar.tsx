'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className={`mx-4 sm:mx-6 lg:mx-8 mt-3 transition-all duration-300 ${scrolled ? 'max-w-6xl xl:mx-auto' : 'max-w-full'}`}>
        <div
          className={`flex items-center justify-between px-5 h-16 rounded-xl transition-all duration-300 ${
            scrolled ? 'bg-black/80 backdrop-blur-xl border border-white/8 shadow-xl shadow-black/40' : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <motion.a href="#home" whileHover={{ scale: 1.05 }} className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #ec4899, #00d4ff)', boxShadow: '0 4px 16px rgba(236,72,153,0.35)' }}
            >
              <span className="text-sm font-black text-white">KS</span>
            </div>
            <span className="hidden sm:block text-sm font-mono" style={{ color: '#00d4ff' }}>
              <span className="text-white/40">/</span> portfolio
            </span>
          </motion.a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'rgba(236,72,153,0.12)', border: '1px solid rgba(236,72,153,0.25)' }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg text-white transition-all duration-200"
              style={{ background: '#ec4899', boxShadow: '0 4px 16px rgba(236,72,153,0.3)' }}
            >
              Hire Me
            </motion.a>
            <button
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors rounded-lg"
              style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 rounded-xl overflow-hidden shadow-xl shadow-black/40"
              style={{ background: 'rgba(10,10,10,0.95)', border: '1px solid rgba(0,212,255,0.15)', backdropFilter: 'blur(16px)' }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center px-6 py-3.5 text-sm font-medium transition-colors duration-150 ${
                    activeSection === link.href.slice(1)
                      ? 'text-white border-l-2'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  style={activeSection === link.href.slice(1)
                    ? { background: 'rgba(236,72,153,0.08)', borderColor: '#ec4899' }
                    : {}}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
