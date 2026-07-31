'use client';

import { useState } from 'react';

const TABS = [
  { label: 'index.ts',   lang: 'typescript' },
  { label: 'styles.css', lang: 'css'        },
  { label: 'README.md',  lang: 'markdown'   },
];

const CODE: Record<string, string> = {
  'index.ts': `import { createServer } from 'http';
import { readFileSync } from 'fs';

interface Config {
  port: number;
  host: string;
  debug: boolean;
}

const config = {
  port: 3000,
  host: 'localhost',
  debug: process.env.NODE_ENV !== 'production',
} satisfies Config;

const server = createServer((req, res) => {
  const url = new URL(req.url ?? '/', \`http://\${config.host}\`);

  if (url.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(readFileSync('./public/index.html', 'utf-8'));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found', path: url.pathname }));
});

server.listen(config.port, config.host, () => {
  console.log(\`🚀 Server running at http://\${config.host}:\${config.port}\`);
});`,

  'styles.css': `:root {
  --accent-l: 0.72;
  --accent-c: 0.2;
  --accent-h: 170;

  --accent: oklch(var(--accent-l) var(--accent-c) var(--accent-h));
  --bg: oklch(0.06 0.005 240);
  --fg: oklch(0.96 0.002 240);

  --radius: 0.625rem;
}

.card {
  background: oklch(0.10 0.008 240);
  border: 1px solid oklch(0.18 0.008 240);
  border-radius: var(--radius);
  padding: 1.25rem;
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;
}

.card:hover {
  border-color: oklch(var(--accent-l) var(--accent-c) var(--accent-h) / 0.25);
  box-shadow: 0 0 40px oklch(var(--accent-l) var(--accent-c) var(--accent-h) / 0.3);
  transform: translateY(-4px);
}

.gradient-text {
  background: linear-gradient(
    135deg,
    oklch(var(--accent-l) var(--accent-c) var(--accent-h)),
    oklch(calc(var(--accent-l) - 0.1) calc(var(--accent-c) * 1.2) calc(var(--accent-h) + 40))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}`,

  'README.md': `# Kim Soknaret — Portfolio

A personal digital laboratory built with modern web technologies.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styles**: Tailwind CSS + OKLCH color system
- **Fonts**: Geist Sans + Geist Mono

## Features

- 5 swappable color themes using OKLCH color space
- Dark/light mode with smooth transitions
- Cursor-following glow effect
- Zero external CMS — all content in TypeScript
- Static generation for blog posts

## Getting Started

\`\`\`bash
# Install dependencies
bun install

# Start dev server
bun dev

# Build for production
bun build
\`\`\`

## Project Structure

\`\`\`
app/
├── blog/[slug]/    # Dynamic blog posts
├── projects/       # Project showcase
├── workbench/      # Interactive experiments
└── notes/          # Writing notes
\`\`\`

> Built in the open. Experiments first.`,
};

type TokenType = 'keyword' | 'string' | 'comment' | 'number' | 'function' | 'type' | 'operator' | 'plain';

function tokenizeTypeScript(code: string): Array<{ text: string; type: TokenType }> {
  const tokens: Array<{ text: string; type: TokenType }> = [];
  const keywords = /\b(import|export|from|const|let|var|function|return|if|else|interface|type|class|new|async|await|typeof|instanceof|satisfies|extends|implements)\b/g;
  const strings = /(["'`])(?:(?!\1)[^\\]|\\.)*\1/g;
  const comments = /\/\/.*$/gm;
  const numbers = /\b\d+\b/g;
  const types = /\b(string|number|boolean|void|null|undefined|Record|Array|Promise|Config)\b/g;

  let remaining = code;
  let lastIndex = 0;
  const patterns: Array<{ regex: RegExp; type: TokenType }> = [
    { regex: /\/\/.*$/gm, type: 'comment' },
    { regex: /(["'`])(?:(?!\1)[^\\]|\\.)*\1/g, type: 'string' },
    { regex: /\b(import|export|from|const|let|var|function|return|if|else|interface|type|class|new|async|await|typeof|instanceof|satisfies|extends|implements)\b/g, type: 'keyword' },
    { regex: /\b(string|number|boolean|void|null|undefined|Record|Array|Promise|Config)\b/g, type: 'type' },
    { regex: /\b\d+\b/g, type: 'number' },
  ];

  const allMatches: Array<{ start: number; end: number; text: string; type: TokenType }> = [];

  for (const { regex, type } of patterns) {
    regex.lastIndex = 0;
    let match;
    while ((match = regex.exec(code)) !== null) {
      allMatches.push({ start: match.index, end: match.index + match[0].length, text: match[0], type });
    }
  }

  allMatches.sort((a, b) => a.start - b.start);

  const nonOverlapping: typeof allMatches = [];
  let cursor = 0;
  for (const m of allMatches) {
    if (m.start >= cursor) {
      nonOverlapping.push(m);
      cursor = m.end;
    }
  }

  let pos = 0;
  for (const m of nonOverlapping) {
    if (m.start > pos) {
      tokens.push({ text: code.slice(pos, m.start), type: 'plain' });
    }
    tokens.push({ text: m.text, type: m.type });
    pos = m.end;
  }
  if (pos < code.length) {
    tokens.push({ text: code.slice(pos), type: 'plain' });
  }

  return tokens;
}

const TOKEN_COLORS: Record<TokenType, string> = {
  keyword:  'text-[#c678dd]',
  string:   'text-[#98c379]',
  comment:  'text-[var(--fg-subtle)] italic',
  number:   'text-[#d19a66]',
  function: 'text-[#61afef]',
  type:     'text-[#e5c07b]',
  operator: 'text-[var(--fg-muted)]',
  plain:    'text-[var(--fg-muted)]',
};

function SyntaxHighlight({ code, lang }: { code: string; lang: string }) {
  if (lang !== 'typescript') {
    return (
      <code className="mono text-sm leading-6 text-[var(--fg-muted)] whitespace-pre">
        {code}
      </code>
    );
  }

  const tokens = tokenizeTypeScript(code);
  return (
    <code className="mono text-sm leading-6 whitespace-pre">
      {tokens.map((t, i) => (
        <span key={i} className={TOKEN_COLORS[t.type]}>
          {t.text}
        </span>
      ))}
    </code>
  );
}

export default function CodeEditorDemo() {
  const [activeTab, setActiveTab] = useState('index.ts');
  const [lineNumbers, setLineNumbers] = useState(true);
  const [minimap, setMinimap] = useState(false);

  const code = CODE[activeTab] ?? '';
  const lines = code.split('\n');
  const tab = TABS.find((t) => t.label === activeTab);

  return (
    <div className="glass rounded-lg overflow-hidden border border-[var(--border)]">
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--bg-card)]">
        {/* Traffic lights */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-green-500/70 hover:bg-green-500 transition-colors cursor-pointer" />
        </div>

        {/* Tab bar */}
        <div className="flex items-center gap-1">
          {TABS.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`mono text-xs px-3 py-1.5 rounded transition-colors ${
                activeTab === tab.label
                  ? 'text-[var(--fg)] bg-[var(--bg)]'
                  : 'text-[var(--fg-subtle)] hover:text-[var(--fg-muted)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Editor controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLineNumbers((v) => !v)}
            className={`mono text-xs transition-colors ${lineNumbers ? 'text-[var(--accent)]' : 'text-[var(--fg-subtle)]'}`}
            title="Toggle line numbers"
          >
            #
          </button>
          <button
            onClick={() => setMinimap((v) => !v)}
            className={`mono text-xs transition-colors ${minimap ? 'text-[var(--accent)]' : 'text-[var(--fg-subtle)]'}`}
            title="Toggle minimap"
          >
            ⊟
          </button>
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center gap-4 px-4 py-1.5 border-b border-[var(--border)] bg-[var(--bg-card)]/50">
        <span className="mono text-xs text-[var(--accent)]">● {tab?.lang ?? 'text'}</span>
        <span className="mono text-xs text-[var(--fg-subtle)]">UTF-8</span>
        <span className="mono text-xs text-[var(--fg-subtle)] ml-auto">{lines.length} lines</span>
      </div>

      {/* Editor body */}
      <div className="flex overflow-auto max-h-[520px] bg-[var(--bg)]">
        {/* Line numbers */}
        {lineNumbers && (
          <div
            className="select-none shrink-0 px-4 py-4 text-right border-r border-[var(--border)] bg-[var(--bg-card)]/30"
            aria-hidden="true"
          >
            {lines.map((_, i) => (
              <div key={i} className="mono text-xs leading-6 text-[var(--fg-subtle)]">
                {i + 1}
              </div>
            ))}
          </div>
        )}

        {/* Code content */}
        <div className="flex-1 overflow-x-auto">
          <pre className="p-4 text-sm">
            <SyntaxHighlight code={code} lang={tab?.lang ?? 'text'} />
          </pre>
        </div>

        {/* Minimap */}
        {minimap && (
          <div className="hidden md:block w-24 shrink-0 border-l border-[var(--border)] bg-[var(--bg-card)]/30 p-2 overflow-hidden" aria-hidden="true">
            {lines.map((line, i) => (
              <div
                key={i}
                className="h-1 mb-px rounded-sm bg-[var(--fg-subtle)]/20"
                style={{ width: `${Math.min(100, (line.length / 60) * 100)}%` }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bottom status */}
      <div className="flex items-center gap-4 px-4 py-2 border-t border-[var(--border)] bg-[var(--bg-card)]">
        <span className="mono text-xs text-[var(--fg-subtle)]">Ln 1, Col 1</span>
        <span className="mono text-xs text-[var(--fg-subtle)]">Spaces: 2</span>
        <span className="mono text-xs text-[var(--accent)] ml-auto">Kim Soknaret · Workbench v0.1</span>
      </div>
    </div>
  );
}
