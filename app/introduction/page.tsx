import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { HiLocationMarker, HiBriefcase, HiAcademicCap } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'Introduction',
  description: 'About Kim Soknaret — AI Engineer building web, ML, and data-driven applications.',
};

const SKILLS = [
  {
    category: 'AI / ML',
    items: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Transformer', 'OpenCV'],
  },
  {
    category: 'Web & Backend',
    items: ['ReactJS', 'Next.js', 'FastAPI', 'Django', 'SQL', 'REST APIs'],
  },
  {
    category: 'Data & Analytics',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'PostgreSQL', 'Jupyter Notebook'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Windsurf', 'Cursor', 'Excel'],
  },
];

const EXPERIENCE = [
  {
    role: 'Software Developer',
    company: 'Freelance',
    period: 'Dec 2025 — Present',
    description: 'Building real-world web development projects integrated with AI.',
    tags: ['Python', 'Next.js', 'AI'],
  },
  {
    role: 'Volunteer Content Creator',
    company: 'FB (Page DSE)',
    period: 'Sep 2025 — Oct 2025',
    description: 'Edited and filmed video content for the page DSE.',
    tags: ['Video Editing', 'Content'],
  },
  {
    role: 'Data Entry',
    company: 'Private Team',
    period: 'Aug 2025 — Oct 2025',
    description: 'Paired Khmer and English sentences for ML engineers to train models.',
    tags: ['NLP', 'Khmer–English', 'Data Labeling'],
  },
  {
    role: 'Graphic Designer',
    company: 'Infinity FT',
    period: 'Jun 2023 — Sep 2024',
    description: 'Designed match posters for the team.',
    tags: ['Design', 'Branding'],
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
              I&apos;m <span className="gradient-text">Kim Soknaret</span>.<br />
              I build AI-powered software.
            </h1>
            <div className="space-y-4 text-[var(--fg-muted)] leading-relaxed max-w-2xl">
              <p>
                An AI Engineer passionate about building robust, scalable, and innovative
                solutions for solving real problems. I&apos;m a Data Science and Engineering
                student at the Royal University of Phnom Penh (RUPP), working across{' '}
                <em>web development, machine learning, and deep learning</em>.
              </p>
              <p>
                This laboratory is where I work out loud. The blog is where I synthesize
                what I learn by trying to teach it. The workbench is where half-finished ideas live.
              </p>
              <p>
                When I&apos;m not building, I&apos;m usually training models, exploring new
                data pipelines, or open to collaboration and new opportunities.
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
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border border-[var(--accent-border)]">
                <Image
                  src="/images/profile.jpg"
                  alt="Kim Soknaret"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
              <div className="text-center mb-4">
                <div className="font-bold text-[var(--fg)] text-lg">Kim Soknaret</div>
                <div className="text-sm text-[var(--fg-muted)]">AI Engineer</div>
                <div className="mono text-xs text-[var(--accent)] mt-1">kim.soknaret@gmail.com</div>
              </div>
              <div className="border-t border-[var(--border)] pt-4 space-y-2">
                {[
                  { Icon: HiLocationMarker, text: 'Phnom Penh, Cambodia' },
                  { Icon: HiBriefcase, text: 'Open to work' },
                  { Icon: HiAcademicCap, text: 'RUPP — Data Science' },
                ].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-xs text-[var(--fg-muted)]">
                    <Icon size={13} className="text-[var(--accent)] shrink-0" aria-hidden="true" />
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
