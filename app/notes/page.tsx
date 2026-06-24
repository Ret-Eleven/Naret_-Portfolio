import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Raw notes, half-formed thoughts, and things worth writing down.',
};

export default function NotesPage() {
  return (
    <div className="px-4 sm:px-6 py-16">
      <div className="max-w-content mx-auto">
        <div className="mb-12 fade-in-up">
          <div className="mono text-xs text-[var(--accent)] mb-3">{"// raw thoughts"}</div>
          <h1 className="text-4xl font-bold text-[var(--fg)] mb-3 text-balance">Notes</h1>
          <p className="text-[var(--fg-muted)] max-w-xl leading-relaxed">
            Unpolished. Unfinished. Written for me first, published in case they&apos;re useful to you.
          </p>
        </div>

        {/* Coming soon state */}
        <div className="fade-in-up delay-2">
          <div className="glass rounded-lg p-12 text-center max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-[var(--fg)] mb-2">Notes coming soon</h2>
            <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-6">
              I&apos;m building out this section. It&apos;ll have short-form notes, reading highlights, and
              things I want to remember but aren&apos;t long enough for a full blog post.
            </p>
            <div className="mono text-xs text-[var(--accent)] bg-[var(--accent-muted)] border border-[var(--accent-border)] rounded-full px-3 py-1 inline-block">
              Section disabled · Check back soon
            </div>
          </div>
        </div>

        {/* Preview of planned structure */}
        <div className="mt-16 fade-in-up delay-4">
          <div className="mono text-xs text-[var(--fg-subtle)] mb-4">Planned structure</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: 'Reading Notes',
                description: 'Key passages and reactions from books, papers, and articles.',
                count: '—',
              },
              {
                title: 'Today I Learned',
                description: 'Short technical notes from daily work — things worth remembering.',
                count: '—',
              },
              {
                title: 'Mental Models',
                description: 'Frameworks and heuristics I actually use to make decisions.',
                count: '—',
              },
            ].map((s, i) => (
              <div key={s.title} className={`glass rounded-lg p-5 opacity-50 fade-in-up delay-${i + 5}`}>
                <div className="mono text-xs text-[var(--accent)] mb-1">{s.count}</div>
                <h3 className="font-medium text-[var(--fg)] mb-1.5">{s.title}</h3>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
