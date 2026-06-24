import Link from 'next/link';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    handle: '@eincode',
    href: 'https://github.com/Ret-Eleven',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'kim-soknaret-naret',
    href: 'https://www.linkedin.com/in/kim-soknaret-naret-9772b7356',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Telegram',
    handle: '@iamtenz18',
    href: 'https://t.me/iamtenz18',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    handle: 'kim.soknaret@gmail.com',
    href: 'mailto:kim.soknaret@gmail.com',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
];

const EXTERNAL_ICON = (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)]/30 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">

          {/* Left — CTA */}
          <div>
            <p className="mono text-xs uppercase tracking-widest text-[var(--accent)] mb-3">Connect</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--fg)] mb-4 text-balance">
              {"Let's build something "}
              <span className="gradient-text">together</span>
            </h2>
            <p className="text-[var(--fg-muted)] leading-relaxed mb-6 max-w-sm">
              Open to interesting collaborations, side projects, and conversations
              about technology, design, and the things that make software feel right.
            </p>
            <Link
              href="mailto:kim.soknaret@gmail.com"
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-[var(--radius)] border border-[var(--accent)] bg-[var(--accent-muted)] text-[var(--accent)] font-medium text-sm transition-all duration-300 hover:bg-[var(--accent)] hover:text-black active:scale-[0.98]"
            >
              send a signal
              <svg
                width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Right — Social links */}
          <div className="lg:text-right">
            <p className="mono text-xs uppercase tracking-widest text-[var(--fg-muted)] mb-4">Find me elsewhere</p>
            <div className="space-y-2.5">
              {SOCIAL_LINKS.map((s, i) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center gap-3 lg:flex-row-reverse lg:justify-start border border-[var(--border)] rounded-[var(--radius)] px-4 py-3 bg-[var(--bg-card)]/30 hover:border-[var(--accent-border)] hover:bg-[var(--accent-muted)] transition-all duration-300 fade-in-up stagger-${i + 2}`}
                  aria-label={`${s.label}: ${s.handle}`}
                >
                  <div className="w-8 h-8 rounded-md border border-[var(--border)] flex items-center justify-center text-[var(--fg-muted)] group-hover:text-[var(--accent)] group-hover:scale-110 group-hover:border-[var(--accent-border)] transition-all duration-200 shrink-0">
                    {s.icon}
                  </div>
                  <div className="flex-1 lg:text-right">
                    <div className="text-sm font-medium text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">{s.label}</div>
                    <div className="mono text-xs text-[var(--fg-subtle)]">{s.handle}</div>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--accent)] lg:ml-0 ml-auto">
                    {EXTERNAL_ICON}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[var(--border)]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="mono text-xs text-[var(--fg-muted)] order-2 sm:order-1">
            Forged with{' '}
            <span className="heartbeat inline-block text-red-400">❤️</span>
            {' & code'}
          </p>

          {/* Social icons center */}
          <div className="hidden xs:flex items-center gap-3 order-1 sm:order-2">
            {SOCIAL_LINKS.slice(0, 3).map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-[var(--fg-subtle)] hover:text-[var(--accent)] transition-colors"
                aria-label={s.label}
              >
                {s.icon}
              </Link>
            ))}
          </div>

          <p className="mono text-xs text-[var(--fg-subtle)] order-3">
            © {year} EINCODE — All experiments reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
