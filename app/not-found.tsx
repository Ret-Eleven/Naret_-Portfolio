import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mono text-6xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-2xl font-semibold text-[var(--fg)] mb-3">Page not found</h1>
        <p className="text-[var(--fg-muted)] mb-8 max-w-sm mx-auto">
          This page doesn&apos;t exist — or it did once and doesn&apos;t anymore.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-black font-medium text-sm hover:opacity-90 transition-opacity"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
