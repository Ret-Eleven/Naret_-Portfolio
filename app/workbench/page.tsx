import type { Metadata } from 'next';
import CodeEditorDemo from '@/components/CodeEditorDemo';

export const metadata: Metadata = {
  title: 'Workbench',
  description: 'An interactive experimentation space — code editor UI prototypes, visual experiments, and half-finished ideas.',
};

export default function WorkbenchPage() {
  return (
    <div className="px-4 sm:px-6 py-16">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <div className="mb-10 fade-in-up">
          <div className="mono text-xs text-[var(--accent)] mb-3">{"// interactive experiments"}</div>
          <h1 className="text-4xl font-bold text-[var(--fg)] mb-3 text-balance">Workbench</h1>
          <p className="text-[var(--fg-muted)] max-w-xl leading-relaxed">
            A space for experiments that aren&apos;t quite products yet.
            Things built to answer a question, explore a technique, or just see what happens.
          </p>
        </div>

        {/* Active experiment */}
        <section className="mb-16 fade-in-up delay-2">
          <div className="flex items-center gap-3 mb-6">
            <span className="mono text-xs text-[var(--accent)] bg-[var(--accent-muted)] border border-[var(--accent-border)] px-2.5 py-1 rounded-full">
              ● Active Experiment
            </span>
            <span className="text-sm text-[var(--fg-muted)]">Code Editor UI Prototype</span>
          </div>

          <CodeEditorDemo />
        </section>

        {/* Upcoming experiments */}
        <section className="fade-in-up delay-4">
          <div className="mono text-xs text-[var(--fg-subtle)] mb-4">Coming Soon</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                title: 'OKLCH Color Picker',
                description: 'Visual OKLCH color explorer — adjust L, C, H with live preview and CSS output.',
                status: 'planned',
                tag: 'CSS · Color Science',
              },
              {
                title: 'Algorithm Visualizer',
                description: 'Step-through animations for sorting algorithms, graph traversal, and dynamic programming.',
                status: 'planned',
                tag: 'Algorithms · Canvas',
              },
              {
                title: 'Generative Art Engine',
                description: 'Parametric art generated from noise functions, rendered with WebGL shaders.',
                status: 'planned',
                tag: 'WebGL · Math',
              },
            ].map((exp, i) => (
              <div
                key={exp.title}
                className={`glass rounded-lg p-5 opacity-60 fade-in-up delay-${i + 5}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="mono text-xs text-[var(--fg-subtle)] border border-[var(--border)] px-2 py-0.5 rounded">
                    {exp.status}
                  </span>
                </div>
                <h3 className="font-semibold text-[var(--fg)] mb-2">{exp.title}</h3>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-3">{exp.description}</p>
                <div className="mono text-xs text-[var(--fg-subtle)]">{exp.tag}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
