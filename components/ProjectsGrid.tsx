'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { IconType } from 'react-icons';
import { HiStar } from 'react-icons/hi';
import { HiCpuChip, HiBeaker, HiChartBar, HiGlobeAlt, HiFolder } from 'react-icons/hi2';
import { FiGitBranch } from 'react-icons/fi';
import type { Project } from '@/lib/projects-data';

type FilterState = 'all' | 'live' | 'wip' | 'archived';

const FILTERS: { id: FilterState; label: string }[] = [
  { id: 'all',      label: 'all'         },
  { id: 'live',     label: 'shipped'     },
  { id: 'wip',      label: 'in-progress' },
  { id: 'archived', label: 'archived'    },
];

const STATUS_CONFIG = {
  live:     { label: 'Shipped',     dot: 'bg-[var(--accent)]',    text: 'text-[var(--accent)] bg-[var(--accent-muted)] border-[var(--accent-border)]' },
  wip:      { label: 'In Progress', dot: 'bg-yellow-400',         text: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20' },
  archived: { label: 'Archived',    dot: 'bg-[var(--fg-subtle)]', text: 'text-[var(--fg-subtle)] bg-[var(--bg-card)] border-[var(--border)]' },
} as const;

const CATEGORY_ICONS: Record<string, IconType> = {
  'AI / Data':      HiCpuChip,
  'AI / ML':        HiBeaker,
  'Data Analytics': HiChartBar,
  'Web':            HiGlobeAlt,
};

const SPARKLE_ICON = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
  </svg>
);

interface Props {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: Props) {
  const [filter, setFilter] = useState<FilterState>('all');

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.status === filter);
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-12">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`mono text-xs uppercase tracking-wider px-5 py-2.5 rounded-[var(--radius)] border transition-all duration-300 active:scale-[0.98] ${
              filter === f.id
                ? 'border-[var(--accent)] bg-[var(--accent-muted)] text-[var(--accent)] shadow-[0_0_12px_var(--accent-glow)]'
                : 'border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:border-[var(--border-hover)]'
            }`}
            aria-pressed={filter === f.id}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-[var(--fg-subtle)] mono text-sm">
          No projects match this filter.
        </div>
      )}

      {/* Featured projects */}
      {featured.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {featured.map((project, i) => {
            const status = STATUS_CONFIG[project.status];
            return (
              <div
                key={project.id}
                className={`glass glass-hover group rounded-[var(--radius)] p-6 sm:p-7 flex flex-col gap-4 relative overflow-hidden ${
                  i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
                style={
                  i === 0
                    ? { background: 'linear-gradient(135deg, var(--accent-muted) 0%, var(--bg-card) 50%, var(--accent-muted) 100%)' }
                    : undefined
                }
              >
                {/* Featured badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 border border-[var(--accent-border)] bg-[var(--accent-muted)] text-[var(--accent)] rounded-full px-3.5 py-1.5 text-xs pulse-glow">
                    {SPARKLE_ICON}
                    <span className="mono">Featured</span>
                  </div>
                  {/* Status dot */}
                  <div className="flex items-center gap-2">
                    <span className={`relative flex h-2 w-2 ${status.dot}`}>
                      {project.status === 'wip' && (
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status.dot}`} />
                      )}
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${status.dot}`} />
                    </span>
                    <span className="mono text-xs text-[var(--fg-subtle)]">{status.label}</span>
                  </div>
                </div>

                <div className="mono text-xs text-[var(--fg-subtle)]">{project.year}</div>

                <div>
                  <h2 className={`font-bold tracking-tight text-[var(--fg)] group-hover:gradient-text transition-colors mb-2 ${i === 0 ? 'text-xl sm:text-2xl' : 'text-lg'}`}>
                    {project.title}
                  </h2>
                  <p className={`text-sm text-[var(--fg-muted)] leading-relaxed ${i === 0 ? 'line-clamp-3' : 'line-clamp-2'}`}>
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="mono text-xs px-2.5 py-1 rounded-md border border-[var(--border)]/80 bg-[var(--bg-card)]/60 text-[var(--fg-subtle)] hover:border-[var(--accent-border)] hover:bg-[var(--accent-muted)] transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2 border-t border-[var(--border)]">
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors group/link">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="group-hover/link:scale-110 transition-transform" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      source
                    </Link>
                  )}
                  {project.liveUrl && project.liveUrl !== '/' && (
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors group/link">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="group-hover/link:scale-110 transition-transform" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      live
                    </Link>
                  )}
                  <div className="ml-auto flex items-center gap-1.5">
                    <HiStar className="text-[var(--fg-subtle)]" size={13} aria-hidden="true" />
                    <span className="mono text-xs text-[var(--fg-subtle)]">—</span>
                    <FiGitBranch className="text-[var(--fg-subtle)] ml-2" size={12} aria-hidden="true" />
                    <span className="mono text-xs text-[var(--fg-subtle)]">—</span>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[var(--accent)] to-transparent group-hover:w-full transition-[width] duration-500" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      )}

      {/* Rest */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => {
            const status = STATUS_CONFIG[project.status];
            return (
              <div
                key={project.id}
                className={`glass glass-hover group rounded-[var(--radius)] p-6 flex flex-col gap-4 relative overflow-hidden fade-in-up stagger-${(i % 6) + 2}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="mono text-xs text-[var(--fg-subtle)] flex items-center gap-1.5">
                    {(() => {
                      const CategoryIcon = CATEGORY_ICONS[project.category] ?? HiFolder;
                      return <CategoryIcon size={13} aria-hidden="true" />;
                    })()}
                    {project.category}
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className={`relative flex h-2 w-2`}>
                      {project.status === 'wip' && (
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status.dot}`} />
                      )}
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${status.dot}`} />
                    </span>
                    <span className="mono text-xs text-[var(--fg-subtle)]">{status.label}</span>
                  </div>
                </div>

                <div className="mono text-xs text-[var(--fg-subtle)]">{project.year}</div>

                <div>
                  <h3 className="font-bold tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed line-clamp-2">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="mono text-xs px-2.5 py-1 rounded-md border border-[var(--border)]/80 bg-[var(--bg-card)]/60 text-[var(--fg-subtle)] hover:border-[var(--accent-border)] transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2 border-t border-[var(--border)]">
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-[var(--fg-muted)] hover:text-[var(--accent)] animated-underline transition-colors">
                      source ↗
                    </Link>
                  )}
                  {project.liveUrl && project.liveUrl !== '/' && (
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-[var(--fg-muted)] hover:text-[var(--accent)] animated-underline transition-colors">
                      live ↗
                    </Link>
                  )}
                  <span className="ml-auto mono text-xs text-[var(--fg-subtle)]">{project.year}</span>
                </div>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[var(--accent)] to-transparent group-hover:w-full transition-[width] duration-500" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
