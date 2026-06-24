'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { COLOR_THEMES, useColorTheme } from '@/lib/theme-context';

const NAV_LINKS = [
  { href: '/',            label: 'Home'      },
  { href: '/projects',    label: 'Projects'  },
  { href: '/workbench',   label: 'Workbench' },
  { href: '/blog',        label: 'Blog'      },
];

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Ret-Eleven',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kim-soknaret-naret-9772b7356',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: 'https://t.me/iamtenz18',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
];

export default function Header() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const { colorTheme, setColorTheme } = useColorTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    function onScroll() { setScrolled(window.scrollY > 20); }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isDark = resolvedTheme === 'dark';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-[var(--border)] shadow-lg'
          : ''
      }`}
      style={scrolled ? { background: 'oklch(var(--bg-l, 0.06) 0.005 240 / 0.85)', backdropFilter: 'blur(20px)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-16" aria-label="Main navigation">

          {/* ── Logo ──────────────────────────────────────────── */}
          <Link href="/" className="group flex items-center gap-2.5" aria-label="EinCode — home">
            <div
              className="w-9 h-9 rounded-lg border border-[var(--accent-border)] bg-[var(--accent-muted)] flex items-center justify-center text-base transition-all duration-300 group-hover:scale-105 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_16px_var(--accent-glow)]"
              aria-hidden="true"
            >
              <span className="glitch" data-text="⚡">⚡</span>
            </div>
            <span className="font-bold tracking-tight text-base">
              <span className="text-[var(--fg)]">EIN</span>
              <span className="gradient-text">CODE</span>
            </span>
          </Link>

          {/* ── Desktop nav ───────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => {
              const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  role="listitem"
                  className={`nav-item mono text-xs uppercase tracking-widest px-3 py-2 rounded-md transition-colors duration-300 ${
                    active
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--fg-muted)] hover:text-[var(--fg)]'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span className="nav-arrow text-[var(--accent)] mr-1" aria-hidden="true">&gt;</span>
                  {link.label}
                  {active && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[var(--accent)] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ── Right controls ────────────────────────────────── */}
          <div className="flex items-center gap-2">
            {/* Status indicator (desktop) */}
            <div className="hidden sm:flex items-center gap-2 mono text-xs text-[var(--fg-subtle)] mr-1">
              <span className="relative flex h-2 w-2">
                <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-[var(--accent)]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              <span>status: building</span>
            </div>

            {/* Social links */}
            <div className="hidden sm:flex items-center gap-1">
              {SOCIAL_LINKS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded flex items-center justify-center text-[var(--fg-subtle)] hover:text-[var(--accent)] hover:scale-110 transition-all duration-200"
                  aria-label={s.label}
                >
                  {s.icon}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-4 bg-[var(--border)] mx-1" aria-hidden="true" />

            {/* Color picker */}
            <div className="relative">
              <button
                onClick={() => setPickerOpen((p) => !p)}
                className="w-7 h-7 rounded-md border border-[var(--border)] flex items-center justify-center hover:border-[var(--accent-border)] transition-colors"
                aria-label="Change color theme"
                aria-expanded={pickerOpen}
                aria-haspopup="listbox"
              >
                <span className="w-3 h-3 rounded-full" style={{ background: 'var(--accent)' }} aria-hidden="true" />
              </button>
              {pickerOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setPickerOpen(false)}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute right-0 top-9 z-50 glass rounded-lg p-2.5 flex gap-2 shadow-xl border border-[var(--border)]"
                    role="listbox"
                    aria-label="Color themes"
                  >
                    {COLOR_THEMES.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => { setColorTheme(t.id); setPickerOpen(false); }}
                        className={`w-5 h-5 rounded-full transition-transform hover:scale-110 ring-offset-1 ring-offset-[var(--bg)] ${colorTheme === t.id ? 'ring-2 ring-[var(--accent)]' : ''}`}
                        style={{ background: `oklch(0.72 0.2 ${t.hue})` }}
                        aria-label={t.label}
                        role="option"
                        aria-selected={colorTheme === t.id}
                        title={t.label}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Dark/light toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className="w-7 h-7 rounded-md border border-[var(--border)] flex items-center justify-center text-[var(--fg-muted)] hover:text-[var(--fg)] hover:border-[var(--accent-border)] transition-all duration-200"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                ) : (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                )}
              </button>
            )}

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-7 h-7 rounded-md border border-[var(--border)] flex items-center justify-center text-[var(--fg-muted)] hover:border-[var(--accent-border)] transition-all"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* ── Mobile menu ─────────────────────────────────────── */}
        {menuOpen && (
          <div className="md:hidden border-t border-[var(--border)] py-4 space-y-1">
            {/* Status in mobile */}
            <div className="flex items-center gap-2 mono text-xs text-[var(--fg-subtle)] px-3 py-2 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-[var(--accent)]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              status: building
            </div>

            {NAV_LINKS.map((link, i) => {
              const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-2 mono text-xs uppercase tracking-widest px-3 py-2.5 rounded-md transition-colors fade-in-up stagger-${i + 2} ${
                    active
                      ? 'text-[var(--accent)] bg-[var(--accent-muted)]'
                      : 'text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-card)]'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span className="text-[var(--accent)]" aria-hidden="true">&gt;</span>
                  {link.label}
                </Link>
              );
            })}

            {/* Social links in mobile */}
            <div className="flex items-center gap-2 pt-3 px-3 border-t border-[var(--border)] mt-2">
              {SOCIAL_LINKS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded border border-[var(--border)] flex items-center justify-center text-[var(--fg-muted)] hover:text-[var(--accent)] hover:border-[var(--accent-border)] transition-all"
                  aria-label={s.label}
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
