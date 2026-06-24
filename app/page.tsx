import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog-data';
import { PROJECTS } from '@/lib/projects-data';
import HeroTypewriter from '@/components/HeroTypewriter';
import TerminalCard from '@/components/TerminalCard';

const FEATURED_POSTS = BLOG_POSTS.filter((p) => p.featured).slice(0, 2);
const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured).slice(0, 3);

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

const STATUS_COLORS: Record<string, string> = {
  live:     'text-[var(--accent)] bg-[var(--accent-muted)]',
  wip:      'text-yellow-400 bg-yellow-400/10',
  archived: 'text-[var(--fg-subtle)] bg-[var(--bg-card)]',
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex flex-col justify-center px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — Text */}
            <div>
              {/* Tagline */}
              <p className="fade-in mono text-xs uppercase tracking-widest text-[var(--accent)] mb-5">
                EinCode — Where Code Meets Curiosity
              </p>

              {/* H1 */}
              <h1 className="fade-in-up stagger-2 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5 text-balance">
                <span className="text-[var(--fg)]">Forging digital</span>
                <br />
                <HeroTypewriter />
              </h1>

              {/* Description */}
              <p className="fade-in-up stagger-3 text-base sm:text-lg text-[var(--fg-muted)] leading-relaxed max-w-lg mb-8">
                Currently building in the open. Not a portfolio. A laboratory.
              </p>

              {/* CTAs */}
              <div className="fade-in-up stagger-4 flex flex-wrap gap-3">
                {/* Primary */}
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius)] border border-[var(--accent)] bg-[var(--accent-muted)] text-[var(--accent)] font-medium text-sm transition-all duration-300 hover:bg-[var(--accent)] hover:text-black active:scale-[0.98]"
                >
                  explore artifacts
                  <svg
                    width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                  </svg>
                </Link>

                {/* Secondary */}
                <Link
                  href="/introduction"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)]/50 text-[var(--fg-muted)] font-medium text-sm transition-all duration-300 hover:border-[var(--fg)] hover:text-[var(--fg)] active:scale-[0.98]"
                >
                  <svg
                    width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className="opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                  </svg>
                  introduction
                </Link>
              </div>
            </div>

            {/* Right — Terminal Card */}
            <div className="fade-in-up stagger-4 hidden sm:block">
              <TerminalCard />
            </div>
          </div>

          {/* Scroll indicator (desktop) */}
          <div className="hidden lg:flex flex-col items-center gap-2 mt-16 fade-in stagger-6">
            <span className="mono text-xs text-[var(--fg-subtle)] uppercase tracking-widest">scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-[var(--accent)] to-transparent animate-pulse" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ── Featured Projects ────────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="mono text-xs uppercase tracking-widest text-[var(--accent)] mb-2">Artifacts</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] text-balance">Open Source Projects</h2>
            </div>
            <Link href="/projects" className="text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] animated-underline transition-colors shrink-0">
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED_PROJECTS.map((project, i) => (
              <div
                key={project.id}
                className={`glass glass-hover rounded-[var(--radius)] p-6 sm:p-7 flex flex-col gap-4 fade-in-up stagger-${i + 2} relative overflow-hidden`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="mono text-xs text-[var(--fg-subtle)]">{project.year}</span>
                  <span className={`mono text-xs px-2 py-0.5 rounded-full ${STATUS_COLORS[project.status]}`}>
                    {project.status}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold tracking-tight text-[var(--fg)] mb-2 sm:text-lg">{project.title}</h3>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed line-clamp-2">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="mono text-xs px-2.5 py-1 rounded-md border border-[var(--border)]/80 bg-[var(--bg-card)]/60 text-[var(--fg-subtle)] hover:border-[var(--accent-border)] hover:bg-[var(--accent-muted)] transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2 border-t border-[var(--border)]">
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
                      aria-label={`${project.title} source`}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      source
                    </Link>
                  )}
                  {project.liveUrl && project.liveUrl !== '/' && (
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
                      aria-label={`${project.title} live`}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      live
                    </Link>
                  )}
                </div>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[var(--accent)] to-transparent group-hover:w-full transition-all duration-500" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Blog Posts ──────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="mono text-xs uppercase tracking-widest text-[var(--accent)] mb-2">Latest thoughts</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] text-balance">Blog & Technical Writings</h2>
            </div>
            <Link href="/blog" className="text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] animated-underline transition-colors shrink-0">
              All posts →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FEATURED_POSTS.map((post, i) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className={`glass glass-hover rounded-[var(--radius)] p-6 sm:p-7 group fade-in-up stagger-${i + 2}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="mono text-xs px-2.5 py-1 rounded border border-[var(--accent-border)] bg-[var(--accent-muted)] text-[var(--accent)]">
                    {post.category}
                  </span>
                  <span className="mono text-xs text-[var(--fg-subtle)]">{post.readTime} min read</span>
                  <span className="mono text-xs text-[var(--accent)] ml-auto">★ Featured</span>
                </div>
                <h3 className="font-bold tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors mb-3 leading-snug text-lg">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="mono text-xs text-[var(--fg-subtle)]">{formatDate(post.publishedAt)}</span>
                  <span className="text-xs text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
