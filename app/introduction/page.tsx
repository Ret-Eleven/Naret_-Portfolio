import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Introduction',
  description: 'About EinCode — developer, builder, and creator of digital experiments.',
};

const SKILLS = [
  {
    category: 'Frontend',
    items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'OKLCH / CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Bun', 'PostgreSQL', 'Redis', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'Tooling',
    items: ['Bun', 'Vitest', 'Docker', 'Git', 'Figma', 'VSCode'],
  },
  {
    category: 'Interests',
    items: ['Color Science', 'Typography', 'Performance', 'Accessibility', 'Open Source', 'Design Systems'],
  },
];

const EXPERIENCE = [
  {
    role: 'Independent Developer',
    company: 'EinCode Lab',
    period: '2024 — Present',
    description: 'Building open source tools, writing about web development, and maintaining this laboratory as a public workspace.',
    tags: ['Next.js', 'TypeScript', 'Open Source'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Studio ////',
    period: '2022 — 2024',
    description: 'Designed and built web applications for clients across e-commerce, SaaS, and media. Led frontend architecture decisions on 8 projects.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    role: 'Frontend Developer',
    company: 'Velocity Digital',
    period: '2020 — 2022',
    description: 'Implemented pixel-perfect UI designs, built component libraries, and improved Core Web Vitals scores across a portfolio of 15+ client sites.',
    tags: ['React', 'TypeScript', 'CSS'],
  },
];

export default function IntroductionPage() {
  return (
    <div className="px-4 sm:px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 mb-20 fade-in-up">
          <div>
            <p className="mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">Introduction</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--fg)] mb-6 text-balance leading-tight">
              I&apos;m <span className="gradient-text">EinCode</span>.<br />
              I build things for the web.
            </h1>
            <div className="space-y-4 text-[var(--fg-muted)] leading-relaxed max-w-2xl">
              <p>
                Developer and creator focused on the intersection of engineering and design.
                I care about how interfaces <em>feel</em> as much as how they work — the
                difference between software that merely runs and software that respects the person using it.
              </p>
              <p>
                This laboratory is where I work out loud. The blog is where I synthesize
                what I learn by trying to teach it. The workbench is where half-finished ideas live.
              </p>
              <p>
                When I&apos;m not building, I&apos;m usually reading about color science,
                obsessing over typographic details, or contributing to open source projects.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius)] border border-[var(--accent)] bg-[var(--accent-muted)] text-[var(--accent)] font-medium text-sm transition-all duration-300 hover:bg-[var(--accent)] hover:text-black"
              >
                See my work
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </Link>
              <Link
                href="mailto:kim.soknaret@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius)] border border-[var(--border)] text-[var(--fg-muted)] font-medium text-sm transition-all duration-300 hover:border-[var(--fg)] hover:text-[var(--fg)]"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Avatar / Identity card */}
          <div className="flex justify-center lg:justify-end">
            <div className="glass rounded-[var(--radius)] p-6 w-full max-w-xs">
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--accent)] to-[oklch(0.62_0.22_290)] flex items-center justify-center text-3xl mx-auto mb-4" aria-hidden="true">
                ⚡
              </div>
              <div className="text-center mb-4">
                <div className="font-bold text-[var(--fg)] text-lg">EinCode</div>
                <div className="text-sm text-[var(--fg-muted)]">Developer & Creator</div>
                <div className="mono text-xs text-[var(--accent)] mt-1">@eincode</div>
              </div>
              <div className="border-t border-[var(--border)] pt-4 space-y-2">
                {[
                  ['📍', 'Remote / Worldwide'],
                  ['💼', 'Open to work'],
                  ['🌐', 'eincode.dev'],
                ].map(([icon, text]) => (
                  <div key={text} className="flex items-center gap-2 text-xs text-[var(--fg-muted)]">
                    <span aria-hidden="true">{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Skills ────────────────────────────────────────────── */}
        <section className="mb-20 fade-in-up stagger-2">
          <div className="mb-8">
            <p className="mono text-xs uppercase tracking-widest text-[var(--accent)] mb-2">Skills</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--fg)]">What I work with</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SKILLS.map((group, i) => (
              <div key={group.category} className={`glass rounded-[var(--radius)] p-5 fade-in-up stagger-${i + 2}`}>
                <div className="mono text-xs uppercase tracking-wider text-[var(--accent)] mb-3">{group.category}</div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded border border-[var(--border)] bg-[var(--bg-card)] text-[var(--fg-muted)] hover:border-[var(--accent-border)] hover:text-[var(--accent)] transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ────────────────────────────────────────── */}
        <section className="mb-20 fade-in-up stagger-3">
          <div className="mb-8">
            <p className="mono text-xs uppercase tracking-widest text-[var(--accent)] mb-2">Experience</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--fg)]">Where I&apos;ve worked</h2>
          </div>
          <div className="space-y-4">
            {EXPERIENCE.map((job, i) => (
              <div key={job.company} className={`glass glass-hover rounded-[var(--radius)] p-6 fade-in-up stagger-${i + 3}`}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-semibold text-[var(--fg)] text-base">{job.role}</h3>
                    <div className="text-sm text-[var(--accent)]">{job.company}</div>
                  </div>
                  <span className="mono text-xs text-[var(--fg-subtle)] shrink-0 border border-[var(--border)] px-2.5 py-1 rounded-full">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-3">{job.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <span key={tag} className="mono text-xs px-2.5 py-1 rounded border border-[var(--border)] text-[var(--fg-subtle)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="fade-in-up stagger-6 border-t border-[var(--border)] pt-12 text-center">
          <h2 className="text-2xl font-bold text-[var(--fg)] mb-3">Want to work together?</h2>
          <p className="text-[var(--fg-muted)] max-w-md mx-auto mb-6">
            I&apos;m open to interesting projects, collaborations, and conversations.
          </p>
          <Link
            href="mailto:kim.soknaret@gmail.com"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-[var(--radius)] border border-[var(--accent)] bg-[var(--accent-muted)] text-[var(--accent)] font-medium text-sm transition-all duration-300 hover:bg-[var(--accent)] hover:text-black"
          >
            Send a signal
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </Link>
        </section>
      </div>
    </div>
  );
}
