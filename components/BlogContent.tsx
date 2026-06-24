'use client';

interface Props {
  content: string;
}

function renderLine(line: string, index: number): React.ReactNode {
  if (line.startsWith('## ')) {
    return <h2 key={index} className="text-2xl font-bold text-[var(--fg)] mt-10 mb-4">{line.slice(3)}</h2>;
  }
  if (line.startsWith('### ')) {
    return <h3 key={index} className="text-xl font-semibold text-[var(--fg)] mt-8 mb-3">{line.slice(4)}</h3>;
  }
  if (line.startsWith('#### ')) {
    return <h4 key={index} className="text-lg font-semibold text-[var(--fg)] mt-6 mb-2">{line.slice(5)}</h4>;
  }
  if (line.startsWith('> ')) {
    return (
      <blockquote key={index} className="border-l-2 border-[var(--accent)] pl-4 my-4 text-[var(--fg-muted)] italic">
        {line.slice(2)}
      </blockquote>
    );
  }
  if (line.startsWith('- ') || line.startsWith('* ')) {
    return (
      <li key={index} className="text-[var(--fg-muted)] leading-relaxed ml-4">
        <InlineMarkdown text={line.slice(2)} />
      </li>
    );
  }
  if (/^\d+\.\s/.test(line)) {
    return (
      <li key={index} className="text-[var(--fg-muted)] leading-relaxed ml-4 list-decimal">
        <InlineMarkdown text={line.replace(/^\d+\.\s/, '')} />
      </li>
    );
  }
  if (line.startsWith('| ')) {
    return null;
  }
  if (line.startsWith('|--') || line.startsWith('| --')) {
    return null;
  }
  if (line === '---' || line === '***') {
    return <hr key={index} className="border-t border-[var(--border)] my-8" />;
  }
  if (line === '') {
    return <div key={index} className="h-2" />;
  }

  return (
    <p key={index} className="text-[var(--fg-muted)] leading-[1.75] mb-0">
      <InlineMarkdown text={line} />
    </p>
  );
}

function InlineMarkdown({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code key={i} className="mono text-[var(--accent)] bg-[var(--bg-card)] border border-[var(--border)] rounded px-1.5 py-0.5 text-[0.875em]">
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-semibold text-[var(--fg)]">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export default function BlogContent({ content }: Props) {
  const lines = content.split('\n');
  const nodes: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith('```')) {
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      nodes.push(
        <div key={i} className="my-6 rounded-lg overflow-hidden border border-[var(--border)]">
          {lang && (
            <div className="bg-[var(--bg-card)] border-b border-[var(--border)] px-4 py-2 flex items-center justify-between">
              <span className="mono text-xs text-[var(--fg-subtle)]">{lang}</span>
              <span className="mono text-xs text-[var(--accent)]">Code</span>
            </div>
          )}
          <pre className="bg-[var(--bg)] p-4 overflow-x-auto">
            <code className="mono text-sm text-[var(--fg-muted)] leading-relaxed">
              {codeLines.join('\n')}
            </code>
          </pre>
        </div>
      );
      i++;
      continue;
    }

    // Tables
    if (line.startsWith('| ')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      const headers = tableLines[0].split('|').filter(Boolean).map((h) => h.trim());
      const rows = tableLines.slice(2).map((row) =>
        row.split('|').filter(Boolean).map((cell) => cell.trim())
      );
      nodes.push(
        <div key={i} className="my-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                {headers.map((h, hi) => (
                  <th key={hi} className="text-left py-2 px-3 text-[var(--fg)] font-semibold mono text-xs">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className="border-b border-[var(--border)] hover:bg-[var(--bg-card)] transition-colors">
                  {row.map((cell, ci) => (
                    <td key={ci} className="py-2 px-3 text-[var(--fg-muted)]">
                      <InlineMarkdown text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // List groups
    if (line.startsWith('- ') || line.startsWith('* ') || /^\d+\.\s/.test(line)) {
      const listLines: string[] = [];
      const isOrdered = /^\d+\.\s/.test(line);
      while (
        i < lines.length &&
        (lines[i].startsWith('- ') || lines[i].startsWith('* ') || /^\d+\.\s/.test(lines[i]))
      ) {
        listLines.push(lines[i]);
        i++;
      }
      const Tag = isOrdered ? 'ol' : 'ul';
      nodes.push(
        <Tag key={i} className={`my-4 space-y-1.5 ${isOrdered ? 'list-decimal' : 'list-disc'} pl-5`}>
          {listLines.map((l, li) => (
            <li key={li} className="text-[var(--fg-muted)] leading-relaxed">
              <InlineMarkdown text={l.replace(/^(-|\*|\d+\.)\s/, '')} />
            </li>
          ))}
        </Tag>
      );
      continue;
    }

    nodes.push(renderLine(line, i));
    i++;
  }

  return (
    <div className="prose-content space-y-3">
      {nodes}
    </div>
  );
}
