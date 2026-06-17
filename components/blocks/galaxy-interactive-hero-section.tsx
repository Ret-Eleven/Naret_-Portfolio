"use client";

import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Download } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';

const Spline = lazy(() => import('@splinetool/react-spline'));

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

function HeroSplineBackground() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', pointerEvents: 'auto', overflow: 'hidden' }}>
      <Suspense fallback={<div className="w-full h-full bg-black" />}>
        <Spline
          style={{ width: '100%', height: '100vh', pointerEvents: 'auto' }}
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
        />
      </Suspense>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: `
            linear-gradient(to right, rgba(0,0,0,0.8), transparent 30%, transparent 70%, rgba(0,0,0,0.8)),
            linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.95))
          `,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="text-left text-white pt-16 sm:pt-24 md:pt-32 px-4 max-w-3xl">
      <span
        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-gray-300 mb-6"
        style={{ background: 'rgba(26,26,26,0.8)', border: '1px solid rgba(236,72,153,0.2)', backdropFilter: 'blur(12px)' }}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Open to opportunities
      </span>

      <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 leading-tight tracking-tight">
        Hi, I&apos;m <br />
        <span className="gradient-text">Kim Soknaret</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl mb-3 font-semibold font-mono" style={{ color: '#00d4ff' }}>
        Data Science Student &amp; Backend Developer
      </p>

      <p className="text-base sm:text-lg mb-8 text-gray-400 max-w-xl leading-relaxed">
        Passionate about turning data into insights and building scalable applications.
        Currently studying Data Science at RUPP while crafting elegant digital experiences.
      </p>

      <div className="flex pointer-events-auto flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-3">
        <Link
          href="#projects"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 text-sm w-full sm:w-auto text-center"
        >
          View My Projects
        </Link>
        <Link
          href="#contact"
          className="pointer-events-auto border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 font-medium py-3 px-8 rounded-full transition duration-300 flex items-center justify-center w-full sm:w-auto text-sm"
        >
          Contact Me
        </Link>
      </div>

      <div className="mt-8 flex items-center gap-4">
        {[
          { href: 'https://github.com/Ret-Eleven', Icon: FiGithub, label: 'GitHub' },
          { href: 'https://www.linkedin.com/in/kim-soknaret-naret-9772b7356', Icon: FiLinkedin, label: 'LinkedIn' },
          { href: 'https://t.me/iamtenz18', Icon: FaTelegram, label: 'Telegram' },
        ].map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-white transition-colors duration-200 pointer-events-auto"
            style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-20 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(13,13,24,0.85)' : 'rgba(13,13,24,0.3)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderRadius: '0 0 15px 15px',
      }}
    >
      <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" aria-label="home" className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #ec4899, #00d4ff)', boxShadow: '0 4px 16px rgba(236,72,153,0.35)' }}
          >
            <span className="text-sm font-black text-white">KS</span>
          </div>
          <span className="hidden sm:block text-sm font-mono" style={{ color: '#00d4ff' }}>
            <span className="text-white/40">/</span> portfolio
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white text-sm transition duration-150"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center space-x-3">
          <Link
            href="/resume.pdf"
            download
            className="hidden sm:flex items-center gap-1.5 text-gray-300 hover:text-white text-sm px-4 py-2 rounded-full transition duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
          >
            <Download size={14} />
            Resume
          </Link>
          <Link
            href="#contact"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-5 rounded-full text-sm transition duration-300"
          >
            Hire Me
          </Link>
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden border-t absolute top-full left-0 right-0 z-30 overflow-hidden transition-all duration-300 ease-in-out',
          isMobileMenuOpen ? 'max-h-screen opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'
        )}
        style={{ borderColor: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(8px)', backgroundColor: 'rgba(0,0,0,0.9)' }}
      >
        <div className="px-4 py-6 flex flex-col space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white text-sm py-2 transition duration-150"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/resume.pdf"
            download
            className="text-gray-300 hover:text-white text-sm py-2 flex items-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Download size={14} />
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function HeroSection() {
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroContentRef.current) {
        requestAnimationFrame(() => {
          const scrollPosition = window.pageYOffset;
          const maxScroll = 400;
          const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
          if (heroContentRef.current) {
            heroContentRef.current.style.opacity = opacity.toString();
          }
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative" id="home">
      <Navbar />

      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <HeroSplineBackground />
        </div>

        <div
          ref={heroContentRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <div className="container mx-auto">
            <HeroContent />
          </div>
        </div>
      </div>
    </div>
  );
}
