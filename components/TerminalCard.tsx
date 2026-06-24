'use client';

import { useEffect, useState } from 'react';

const ASCII_LARGE = `
 ███████╗██╗███╗   ██╗
 ██╔════╝██║████╗  ██║
 █████╗  ██║██╔██╗ ██║
 ██╔══╝  ██║██║╚██╗██║
 ███████╗██║██║ ╚████║
 ╚══════╝╚═╝╚═╝  ╚═══╝

  ██████╗ ██████╗ ██████╗ ███████╗
 ██╔════╝██╔═══██╗██╔══██╗██╔════╝
 ██║     ██║   ██║██║  ██║█████╗
 ██║     ██║   ██║██║  ██║██╔══╝
 ╚██████╗╚██████╔╝██████╔╝███████╗
  ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝`.trim();

const ASCII_SMALL = `
 ███ ███ █╗
 ██╔ ██║ ██╗
 ███ ╚██ ╚██

 ██ ██ ██ ██
 ██    ██ ██
 ██ ██ ██ ██`.trim();

const STATUS_LINES = [
  { label: 'experiments loaded', value: `${12}` },
  { label: 'status', value: 'forging' },
  { label: 'last spark', value: 'today' },
];

export default function TerminalCard() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      {/* Subtle glow behind */}
      <div
        className="absolute -inset-[20%] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative glass rounded-[var(--radius)] overflow-hidden border border-[var(--border)]">
        {/* Window header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--bg-card)]/60">
          <div className="flex items-center gap-1.5">
            <button className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors" aria-label="Close" />
            <button className="w-3 h-3 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors" aria-label="Minimize" />
            <button className="w-3 h-3 rounded-full bg-[var(--accent)]/70 hover:bg-[var(--accent)] transition-colors" aria-label="Maximize" />
          </div>
          <div className="mono text-xs text-[var(--fg-subtle)] border border-[var(--border)] px-2.5 py-0.5 rounded-full">
            terminal://eincode
          </div>
          <div className="w-14" aria-hidden="true" />
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 relative">
          {/* Large ASCII (hidden on xs) */}
          <pre
            className="hidden sm:block mono text-[0.45rem] md:text-[0.5rem] leading-tight select-none mb-4"
            style={{ color: 'var(--accent)', opacity: 0.85 }}
            aria-hidden="true"
          >
            {ASCII_LARGE}
          </pre>

          {/* Small ASCII (xs only) */}
          <pre
            className="sm:hidden mono text-[0.5rem] leading-tight select-none mb-4"
            style={{ color: 'var(--accent)', opacity: 0.85 }}
            aria-hidden="true"
          >
            {ASCII_SMALL}
          </pre>

          {/* Status lines */}
          <div className="space-y-1.5 mt-2">
            {STATUS_LINES.map((line, i) => (
              <div key={line.label} className="flex items-center gap-2 mono text-xs">
                <span className="text-[var(--accent)]">{'>'}</span>
                <span className="text-[var(--fg-subtle)]">{line.label}:</span>
                <span className="text-[var(--fg-muted)]">
                  {line.label === 'status' ? (
                    <>
                      <span className="text-[var(--accent)]">{line.value}</span>
                      <span
                        className="inline-block w-1.5 h-3 bg-[var(--accent)] ml-0.5 align-bottom"
                        style={{ opacity: tick % 2 === 0 ? 1 : 0, transition: 'opacity 0.1s' }}
                        aria-hidden="true"
                      />
                    </>
                  ) : (
                    line.value
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating badge top-right */}
        <div
          className="absolute top-14 right-4 mono text-xs px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--bg-card)]/80 text-[var(--fg-subtle)] animate-float"
          style={{ animationDelay: '0.2s' }}
          aria-hidden="true"
        >
          <span className="relative flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--accent)]" />
            </span>
            v0.1.0
          </span>
        </div>

        {/* Floating badge bottom-left */}
        <div
          className="absolute bottom-4 left-4 mono text-xs px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--bg-card)]/80 text-[var(--fg-subtle)] animate-float"
          style={{ animationDelay: '0.6s' }}
          aria-hidden="true"
        >
          Jun. 2026
        </div>
      </div>
    </div>
  );
}
