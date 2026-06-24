import type { Metadata } from 'next';
import { PROJECTS } from '@/lib/projects-data';
import ProjectsGrid from '@/components/ProjectsGrid';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Open source projects, tools, and experiments from the EinCode laboratory.',
};

export default function ProjectsPage() {
  return (
    <div className="px-4 sm:px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 fade-in-up">
          <p className="mono text-xs uppercase tracking-widest text-[var(--accent)] mb-3">Artifacts</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--fg)] mb-4 text-balance">Open Source Projects</h1>
          <p className="text-[var(--fg-muted)] max-w-xl leading-relaxed">
            Tools, experiments, and shipped products from the laboratory.
            Some polished, some barely held together — all of them taught me something.
          </p>
        </div>

        <ProjectsGrid projects={PROJECTS} />
      </div>
    </div>
  );
}
