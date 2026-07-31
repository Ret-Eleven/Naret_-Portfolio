import type { Metadata } from 'next';
import Link from 'next/link';
import { HiStar } from 'react-icons/hi';
import { BLOG_POSTS, getAllCategories } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing about web development, design, TypeScript, and building in public.',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  'Meta':       'text-[var(--accent)] bg-[var(--accent-muted)]',
  'CSS':        'text-purple-400 bg-purple-400/10',
  'Next.js':    'text-emerald-400 bg-emerald-400/10',
  'TypeScript': 'text-blue-400 bg-blue-400/10',
  'React':      'text-cyan-400 bg-cyan-400/10',
};

export default function BlogPage() {
  const categories = ['All', ...getAllCategories()];
  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const featured = sorted.filter((p) => p.featured);
  const rest = sorted.filter((p) => !p.featured);

  return (
    <div className="px-4 sm:px-6 py-16">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <div className="mb-12 fade-in-up">
          <div className="mono text-xs text-[var(--accent)] mb-3">{"// thoughts & learnings"}</div>
          <h1 className="text-4xl font-bold text-[var(--fg)] mb-3 text-balance">Blog</h1>
          <p className="text-[var(--fg-muted)] max-w-xl leading-relaxed">
            Writing about web development, design systems, TypeScript, and whatever I happen to be obsessing over.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10 fade-in delay-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`mono text-xs px-3 py-1.5 rounded-full border border-[var(--border)] transition-colors cursor-default
                ${cat === 'All'
                  ? 'text-[var(--accent)] border-[var(--accent-border)] bg-[var(--accent-muted)]'
                  : 'text-[var(--fg-muted)] hover:border-[var(--accent-border)] hover:text-[var(--accent)]'
                }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Featured posts */}
        {featured.length > 0 && (
          <div className="mb-12">
            <div className="mono text-xs text-[var(--fg-subtle)] mb-4">Featured</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featured.map((post, i) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className={`glass glass-hover rounded-lg p-6 group fade-in-up delay-${i + 1}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`mono text-xs px-2 py-0.5 rounded ${CATEGORY_COLORS[post.category] ?? 'text-[var(--accent)] bg-[var(--accent-muted)]'}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-[var(--fg-subtle)]">{post.readTime} min read</span>
                    <span className="text-xs text-[var(--accent)] mono flex items-center gap-1">
                      <HiStar size={12} aria-hidden="true" /> Featured
                    </span>
                  </div>

                  <h2 className="font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors mb-2 leading-snug text-lg">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-[var(--fg-subtle)]">{formatDate(post.publishedAt)}</span>
                    <span className="text-xs text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Rest of posts */}
        <div>
          <div className="mono text-xs text-[var(--fg-subtle)] mb-4">All Posts</div>
          <div className="divide-y divide-[var(--border)]">
            {rest.map((post, i) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className={`group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-5 hover:bg-[var(--bg-card)] -mx-3 px-3 rounded-lg transition-colors fade-in-up delay-${(i % 6) + 1}`}
              >
                <div className="flex items-center gap-3 sm:w-40 shrink-0">
                  <span className={`mono text-xs px-2 py-0.5 rounded ${CATEGORY_COLORS[post.category] ?? 'text-[var(--accent)] bg-[var(--accent-muted)]'}`}>
                    {post.category}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h2 className="font-medium text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors truncate">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[var(--fg-muted)] truncate mt-0.5">{post.excerpt}</p>
                </div>

                <div className="flex items-center gap-4 text-xs text-[var(--fg-subtle)] shrink-0">
                  <span>{post.readTime} min</span>
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
