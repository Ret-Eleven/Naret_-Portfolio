import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS, getPostBySlug } from '@/lib/blog-data';
import BlogContent from '@/components/BlogContent';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const prevPost = postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;
  const nextPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;

  return (
    <div className="px-4 sm:px-6 py-12">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12">
          {/* Main content */}
          <article>
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] animated-underline transition-colors mb-8 fade-in"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5m7-7-7 7 7 7"/>
              </svg>
              Back to Blog
            </Link>

            {/* Meta */}
            <div className="fade-in-up delay-1 flex flex-wrap items-center gap-3 mb-6">
              <span className="mono text-xs text-[var(--accent)] bg-[var(--accent-muted)] px-2.5 py-1 rounded border border-[var(--accent-border)]">
                {post.category}
              </span>
              <span className="text-sm text-[var(--fg-subtle)]">{post.readTime} min read</span>
              <span className="text-sm text-[var(--fg-subtle)]">{formatDate(post.publishedAt)}</span>
            </div>

            {/* Title */}
            <h1 className="fade-in-up delay-2 text-3xl sm:text-4xl font-bold text-[var(--fg)] leading-tight mb-4 text-balance">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="fade-in-up delay-3 text-lg text-[var(--fg-muted)] leading-relaxed mb-8 border-l-2 border-[var(--accent)] pl-4">
              {post.excerpt}
            </p>

            {/* Author */}
            <div className="fade-in-up delay-3 flex items-center gap-3 mb-10 pb-8 border-b border-[var(--border)]">
              <div className="w-9 h-9 rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] flex items-center justify-center">
                <span className="text-xs mono text-[var(--accent)] font-semibold">
                  {post.author.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <div>
                <div className="text-sm font-medium text-[var(--fg)]">{post.author.name}</div>
                <div className="text-xs text-[var(--fg-subtle)]">{post.author.role}</div>
              </div>
            </div>

            {/* Blog content (client component handles markdown-like rendering) */}
            <BlogContent content={post.content} />

            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-[var(--border)]">
              <div className="mono text-xs text-[var(--fg-subtle)] mb-3">Tags</div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono text-xs px-2.5 py-1 rounded border border-[var(--border)] text-[var(--fg-muted)] hover:border-[var(--accent-border)] hover:text-[var(--accent)] transition-colors cursor-default"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Prev/Next nav */}
            <div className="mt-10 pt-8 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost && (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="glass glass-hover rounded-lg p-4 group"
                >
                  <div className="text-xs text-[var(--fg-subtle)] mb-1">← Previous</div>
                  <div className="text-sm font-medium text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                    {prevPost.title}
                  </div>
                </Link>
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="glass glass-hover rounded-lg p-4 group sm:text-right"
                >
                  <div className="text-xs text-[var(--fg-subtle)] mb-1">Next →</div>
                  <div className="text-sm font-medium text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                    {nextPost.title}
                  </div>
                </Link>
              )}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* Table of contents placeholder */}
              <div className="glass rounded-lg p-4">
                <div className="mono text-xs text-[var(--fg-subtle)] mb-3">On this page</div>
                <div className="space-y-2">
                  {post.content
                    .split('\n')
                    .filter((line) => line.startsWith('## '))
                    .map((line) => line.replace('## ', ''))
                    .map((heading) => (
                      <div key={heading} className="text-xs text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors cursor-pointer animated-underline">
                        {heading}
                      </div>
                    ))}
                </div>
              </div>

              {/* More posts */}
              <div className="glass rounded-lg p-4">
                <div className="mono text-xs text-[var(--fg-subtle)] mb-3">More posts</div>
                <div className="space-y-3">
                  {BLOG_POSTS.filter((p) => p.slug !== post.slug)
                    .slice(0, 3)
                    .map((p) => (
                      <Link
                        key={p.id}
                        href={`/blog/${p.slug}`}
                        className="block text-xs text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors leading-snug animated-underline"
                      >
                        {p.title}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
