export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  author: BlogAuthor;
  featured: boolean;
  colorTheme: 'cyan' | 'golden' | 'purple' | 'emerald' | 'rose';
}

const AUTHOR: BlogAuthor = {
  name: 'EinCode',
  role: 'Developer & Creator',
  avatar: '/avatar.jpg',
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'building-a-digital-laboratory',
    title: 'Building a Digital Laboratory: Why Every Developer Needs a Personal Playground',
    excerpt:
      'Your portfolio is a product. But your digital laboratory is where real learning happens — a space to experiment, fail safely, and build taste.',
    content: `## Why a Digital Laboratory?

Most developer portfolios are **showrooms** — curated proof that you can ship. That's valuable. But a digital laboratory is something else entirely: it's where you work out loud, prototype ideas before they're ready, and build the kind of taste that only comes from doing the thing badly before you do it well.

> "An expert is a person who has made all the mistakes that can be made in a very narrow field." — Niels Bohr

### The difference between a portfolio and a laboratory

A portfolio answers: *what can you build?*
A laboratory answers: *how do you think?*

The second question is far more interesting to the right people.

### What goes in a laboratory?

- **Workbench experiments** — code editor prototypes, UI explorations, algorithms visualized
- **Notes** — half-formed thoughts, reading notes, mental models in progress
- **Blog posts** — synthesizing what you've learned by trying to teach it
- **Failed projects** — things that didn't ship but taught you something

### Building in public as a learning multiplier

When you publish unfinished thinking, something interesting happens: other people finish it for you. A blog post that says "I'm not sure why X works this way" reliably attracts someone who knows. A Workbench prototype that's 70% done gets forked and completed.

The compounding effect of building in public is real, but it takes 12–18 months to feel it.

## The technical choices here

This site runs on **Next.js 14** with the App Router, **Tailwind CSS**, and zero external CMS. All content lives in TypeScript objects — no database, no API calls, no vendor lock-in.

The color theme system uses **OKLCH color space**, which gives perceptually uniform color shifts. Swapping from cyan to rose keeps the same perceived lightness — no jarring brightness jumps.

\`\`\`typescript
// OKLCH theme token example
:root {
  --accent-l: 0.72;
  --accent-c: 0.2;
  --accent-h: 170; // cyan
}

[data-color-theme="rose"] {
  --accent-h: 10;
  --accent-c: 0.22;
}
\`\`\`

The cursor glow effect is a 400px radial gradient that follows the mouse — positioned with a CSS fixed element updated via \`mousemove\`. It's subtle enough to not distract but creates the sense that the interface is *alive*.

## What's next

The Workbench is the part I'm most excited about. The current prototype is a code editor UI — but future experiments will include generative art, algorithm visualizations, and real-time collaboration demos.

The goal isn't to ship a product. The goal is to make a place where interesting things happen.`,
    publishedAt: '2026-06-10',
    readTime: 6,
    category: 'Meta',
    tags: ['portfolio', 'building-in-public', 'laboratory', 'Next.js'],
    author: AUTHOR,
    featured: true,
    colorTheme: 'cyan',
  },
  {
    id: '2',
    slug: 'oklch-color-system-for-ui',
    title: 'OKLCH: The Color Space That Makes Dark Mode Actually Work',
    excerpt:
      'HSL lies to you. OKLCH tells the truth about perceptual lightness — which is exactly what you need when building a multi-theme design system.',
    content: `## The Problem with HSL

If you've ever tried to build a multi-theme color system with HSL, you've noticed something: colors at the same \`L\` value look wildly different in perceived brightness. A yellow at \`hsl(60 80% 60%)\` looks much brighter than a blue at \`hsl(240 80% 60%)\` — even though the L value is identical.

This isn't a bug in your CSS. It's a fundamental property of the HSL color model: it's based on the RGB cube's geometric center, not on how human eyes perceive brightness.

### Enter OKLCH

\`oklch(L C H)\` uses three channels:

| Channel | Meaning |
|---------|---------|
| \`L\` | **Lightness** — perceptually uniform (0–1) |
| \`C\` | **Chroma** — colorfulness (0 ≈ grey, 0.3+ = vivid) |
| \`H\` | **Hue** — angle on the color wheel (0–360) |

The key difference: the \`L\` channel in OKLCH corresponds to how your eye actually perceives brightness. \`oklch(0.72 0.2 170)\` (cyan) and \`oklch(0.72 0.2 290)\` (purple) look equally bright.

### Why this matters for theming

When you build a design system with swappable color themes, perceptual uniformity means:

1. **Contrast ratios are preserved** — accessibility doesn't break when you switch from cyan to rose
2. **Light/dark mode transitions feel natural** — you can safely adjust \`L\` by a fixed amount to flip modes
3. **No manual calibration per hue** — one set of tokens works across all themes

\`\`\`css
/* These look equally bright at any hue */
[data-color-theme="cyan"]    { --accent-h: 170; }
[data-color-theme="golden"]  { --accent-h: 75;  }
[data-color-theme="purple"]  { --accent-h: 290; }
[data-color-theme="emerald"] { --accent-h: 145; }
[data-color-theme="rose"]    { --accent-h: 10;  }
\`\`\`

### Practical implementation

\`\`\`css
:root {
  --accent-l: 0.72;
  --accent-c: 0.2;
  --accent-h: 170;
  --accent: oklch(var(--accent-l) var(--accent-c) var(--accent-h));
}

.light {
  --accent-l: 0.52; /* Darker for light backgrounds */
}
\`\`\`

The light-mode \`L\` adjustment is the only thing that changes — the \`C\` and \`H\` stay the same. This gives you a coherent system where the same theme feels right in both modes.

## Browser support

OKLCH is supported in all modern browsers as of 2023. For legacy support, you can provide an HSL fallback — but if you're building something new, just use OKLCH.

\`\`\`css
/* With fallback */
color: hsl(180, 70%, 55%); /* fallback */
color: oklch(0.72 0.2 170); /* modern */
\`\`\`

## The cursor glow case study

This site's cursor glow uses \`oklch(var(--accent-l) var(--accent-c) var(--accent-h) / 0.3)\` — the same accent color at 30% opacity. Because OKLCH perceptual lightness is consistent, the glow effect looks equally vivid regardless of which color theme is active.

With HSL, you'd need to manually calibrate the glow opacity per hue to avoid the yellow theme looking washed out or the blue theme looking too dim.`,
    publishedAt: '2026-05-28',
    readTime: 7,
    category: 'CSS',
    tags: ['CSS', 'color', 'OKLCH', 'design-systems', 'dark-mode'],
    author: AUTHOR,
    featured: true,
    colorTheme: 'purple',
  },
  {
    id: '3',
    slug: 'nextjs-app-router-patterns',
    title: 'Five Patterns I Use Every Day in Next.js App Router',
    excerpt:
      'After shipping several App Router projects, these are the patterns that actually stick — server components as the default, parallel routes for modals, and more.',
    content: `## The mental shift

The biggest adjustment when moving to the App Router isn't the file system routing or the \`use client\` directive — it's the mental model shift from *everything is a client component* to *server components are the default*.

Here are the five patterns I reach for every day.

### 1. Server components as the default boundary

\`\`\`tsx
// app/blog/page.tsx — pure server component
// No 'use client' directive needed
import { BLOG_POSTS } from '@/lib/blog-data';

export default function BlogPage() {
  const posts = BLOG_POSTS; // zero network request
  return <PostList posts={posts} />;
}
\`\`\`

The rule I follow: start with a server component, add \`'use client'\` only when you need hooks, event handlers, or browser APIs. This keeps the JS bundle small by default.

### 2. Composition pattern for client islands

\`\`\`tsx
// Server component — fetches data
async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  return (
    <article>
      <PostHeader post={post} />       {/* server */}
      <PostContent content={post.content} />  {/* server */}
      <LikeButton postId={post.id} />  {/* client island */}
    </article>
  );
}
\`\`\`

The key insight: client components can receive server-rendered children as props. The \`<LikeButton>\` is interactive, but everything around it streams from the server.

### 3. Loading UI that matches the skeleton

\`\`\`
app/blog/
  page.tsx
  loading.tsx  ← automatic streaming skeleton
\`\`\`

\`\`\`tsx
// app/blog/loading.tsx
export default function Loading() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="skeleton h-24 rounded-lg" />
      ))}
    </div>
  );
}
\`\`\`

Next.js wraps \`page.tsx\` in a \`<Suspense>\` boundary automatically and shows \`loading.tsx\` while the page resolves.

### 4. Static generation with dynamic params

\`\`\`tsx
// Generate all blog post pages at build time
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}
\`\`\`

For content that doesn't change at runtime, this gives you static HTML with zero server cost per request.

### 5. Route groups for layout composition

\`\`\`
app/
  (marketing)/
    layout.tsx    ← marketing layout (no sidebar)
    page.tsx      ← home
    about/page.tsx
  (app)/
    layout.tsx    ← app layout (with sidebar)
    dashboard/
    settings/
\`\`\`

Route groups (parentheses) let you share layouts without affecting URLs. The \`(marketing)\` group gets a minimal layout; the \`(app)\` group gets the full dashboard shell.

## The pattern that's still evolving

Parallel routes and intercepting routes (\`@modal\`, \`(.)photo\`) are powerful but the mental model is genuinely tricky. I use them for modal flows where I want the URL to update but the page behind the modal to remain visible. The documentation is getting better — worth revisiting if you dismissed them early.`,
    publishedAt: '2026-05-14',
    readTime: 8,
    category: 'Next.js',
    tags: ['Next.js', 'React', 'App Router', 'TypeScript', 'patterns'],
    author: AUTHOR,
    featured: false,
    colorTheme: 'emerald',
  },
  {
    id: '4',
    slug: 'typescript-satisfies-operator',
    title: "TypeScript's `satisfies` Operator: The Underrated Feature You're Not Using",
    excerpt:
      'The `satisfies` operator validates a value against a type without widening the inferred type. Small syntax change, big implications for safe configuration objects.',
    content: `## The problem it solves

Consider this configuration object:

\`\`\`typescript
type ColorTheme = 'cyan' | 'golden' | 'purple';

const themes = {
  cyan: { hue: 170, label: 'Cyan' },
  golden: { hue: 75, label: 'Golden' },
  purple: { hue: 290, label: 'Purple' },
} as const;
\`\`\`

If you add a type annotation:

\`\`\`typescript
const themes: Record<ColorTheme, { hue: number; label: string }> = { ... };
\`\`\`

TypeScript will validate the shape, but \`themes.cyan.hue\` is now typed as \`number\` — you've lost the literal type \`170\`.

If you use \`as const\`:

\`\`\`typescript
const themes = { ... } as const;
\`\`\`

You keep literal types, but TypeScript won't tell you if you've misspelled a key or used the wrong shape.

### The \`satisfies\` solution

\`\`\`typescript
const themes = {
  cyan:   { hue: 170, label: 'Cyan'   },
  golden: { hue: 75,  label: 'Golden' },
  purple: { hue: 290, label: 'Purple' },
} satisfies Record<ColorTheme, { hue: number; label: string }>;

// ✅ TypeScript validates the shape
// ✅ themes.cyan.hue is still typed as 170 (literal)
// ✅ themes.cyan.label is typed as 'Cyan' (literal)
\`\`\`

You get **validation without widening**.

## Real-world examples

### Route configuration

\`\`\`typescript
type Route = { href: string; label: string; icon?: string };

const NAV_ROUTES = [
  { href: '/',         label: 'Home'      },
  { href: '/blog',     label: 'Blog'      },
  { href: '/projects', label: 'Projects'  },
] satisfies Route[];

// NAV_ROUTES[0].href is typed as '/' not string
// Useful for discriminated unions and exhaustive checks
\`\`\`

### CSS-in-JS token maps

\`\`\`typescript
type SpacingKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
} satisfies Record<SpacingKey, string>;
\`\`\`

TypeScript will error if you add an unknown key or miss a required one.

## When to use it

Use \`satisfies\` when:

1. You have a configuration or data object with a known shape
2. You want TypeScript to validate the structure
3. But you also need to keep the most specific inferred types downstream

The common alternative pattern — \`as const satisfies T\` — gives you both immutability and validation:

\`\`\`typescript
const config = {
  theme: 'cyan',
  version: 1,
} as const satisfies { theme: ColorTheme; version: number };
\`\`\`

Now \`config.theme\` is \`'cyan'\` (literal, readonly) and TypeScript will catch invalid themes at definition time.

## Available since TypeScript 4.9

\`satisfies\` shipped in TypeScript 4.9 (November 2022). If you're on a modern project, there's no reason not to use it. It's one of those features that's genuinely additive — it catches real bugs without changing runtime behavior.`,
    publishedAt: '2026-04-30',
    readTime: 5,
    category: 'TypeScript',
    tags: ['TypeScript', 'type-safety', 'satisfies', 'patterns'],
    author: AUTHOR,
    featured: false,
    colorTheme: 'golden',
  },
  {
    id: '5',
    slug: 'css-cascade-layers',
    title: 'CSS Cascade Layers: Finally Taking Control of Specificity',
    excerpt:
      'Cascade layers give you explicit control over which styles win — a game changer for component libraries, utility frameworks, and large design systems.',
    content: `## The specificity arms race

Anyone who's worked on a large CSS codebase knows the pattern: you write a utility class, it gets overridden by a component style, so you add \`!important\`, which then gets overridden by another \`!important\`...

The root cause is that CSS specificity is calculated at the selector level, which means your style architecture is implicit and fragile.

**Cascade layers fix this at a structural level.**

## What are cascade layers?

\`@layer\` lets you define explicit buckets of CSS with a declared priority order:

\`\`\`css
@layer base, components, utilities;

@layer base {
  a { color: var(--accent); }
}

@layer components {
  .btn { color: white; background: var(--accent); }
}

@layer utilities {
  .text-accent { color: var(--accent) !important; }
}
\`\`\`

Rules declared in \`utilities\` always win over \`components\`, which always wins over \`base\` — regardless of selector specificity.

## The Tailwind v4 connection

Tailwind CSS v4 is built entirely on cascade layers. The framework's reset, base styles, components, and utilities all live in separate layers, which means:

\`\`\`css
/* Your custom component styles can safely live at higher specificity */
@layer components {
  .card {
    /* This beats Tailwind's base layer but loses to utilities */
    border-radius: var(--radius);
    background: var(--bg-card);
  }
}
\`\`\`

You get full control without \`!important\` hacks.

## Practical patterns

### Third-party reset isolation

\`\`\`css
@import url('normalize.css') layer(reset);

@layer reset, base, components, utilities;
\`\`\`

Any \`normalize.css\` styles go into the lowest-priority layer automatically.

### Feature flags via layers

\`\`\`css
@layer base {
  /* Default styles */
}

@layer experimental {
  /* New styles that override base when the layer is active */
}
\`\`\`

You can conditionally include the \`experimental\` layer based on a JS flag.

## Browser support

\`@layer\` is supported in all modern browsers (Chrome 99+, Firefox 97+, Safari 15.4+). For new projects, it's safe to use without fallbacks.

The mental model shift — from thinking about specificity to thinking about layer priority — takes a day to internalize. After that, you'll wonder how you managed without it.`,
    publishedAt: '2026-04-12',
    readTime: 6,
    category: 'CSS',
    tags: ['CSS', 'cascade-layers', 'specificity', 'Tailwind'],
    author: AUTHOR,
    featured: false,
    colorTheme: 'rose',
  },
  {
    id: '6',
    slug: 'react-server-components-mental-model',
    title: 'The Mental Model for React Server Components That Finally Clicked',
    excerpt:
      "Server components aren't just components that run on the server. They're a completely different execution model — and once you internalize that, everything else makes sense.",
    content: `## Two different execution models

The confusion with RSC usually starts here: people think "server components" just means "components rendered on the server" (like SSR in Next.js pages router). But RSC is a fundamentally different architecture.

The key distinction:

| | SSR (old model) | RSC (new model) |
|--|--|--|
| Where does it run? | Server *and* client | Server *only* |
| Can access databases? | Via API calls | Directly |
| Can use hooks? | After hydration | Never |
| Is it in the JS bundle? | Yes | No |
| Re-renders on state change? | Yes | No |

### The PHP analogy

The mental model that finally clicked for me: **RSC is like PHP templates, but composable with React**.

PHP templates run on the server, access the database directly, and output HTML. They don't ship a runtime to the browser. But they're not composable — you can't mix a PHP template with a React interactive component seamlessly.

RSC gives you the server-only execution model *and* the composability of React. A server component can render client components as children:

\`\`\`tsx
// Server component — runs once at request time
async function BlogPost({ slug }: { slug: string }) {
  // Direct data access, zero API overhead
  const post = await db.posts.findUnique({ where: { slug } });

  return (
    <article>
      <h1>{post.title}</h1>
      <PostContent content={post.content} />
      {/* This client component gets the data as props */}
      <LikeButton initialCount={post.likes} postId={post.id} />
    </article>
  );
}
\`\`\`

### The serialization boundary

Here's the constraint that trips people up: **props that cross the server/client boundary must be serializable**.

\`\`\`tsx
// ❌ Can't pass a function from server to client
<LikeButton onLike={() => console.log('liked')} />

// ✅ Can pass plain data
<LikeButton initialCount={42} postId="abc" />

// ❌ Can't pass a Date object (not serializable)
<PostMeta date={new Date(post.date)} />

// ✅ Pass the ISO string, convert on the client
<PostMeta dateString={post.date.toISOString()} />
\`\`\`

The reason: React serializes RSC output to a JSON-like format and sends it to the client, where it gets deserialized. Functions and class instances don't survive that trip.

## The "use client" boundary

\`'use client'\` doesn't mean "this component only runs on the client." It means "this is the entry point into the client component tree."

A client component *can* still be pre-rendered on the server as part of SSR — but it will also be hydrated and can re-render in the browser.

Think of it as: \`'use client'\` marks a **serialization boundary**, not a rendering location.

## Practical heuristic

Start every component as a server component. Add \`'use client'\` only when you need:

- \`useState\` / \`useReducer\`
- \`useEffect\` / lifecycle hooks
- Browser APIs (\`localStorage\`, \`window\`, \`document\`)
- Event handlers that need to update UI state

Everything else — data fetching, conditional rendering, static markup — stays on the server.`,
    publishedAt: '2026-03-22',
    readTime: 9,
    category: 'React',
    tags: ['React', 'RSC', 'Next.js', 'server-components', 'architecture'],
    author: AUTHOR,
    featured: false,
    colorTheme: 'cyan',
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(BLOG_POSTS.map((p) => p.category)));
}

export function getAllTags(): string[] {
  return Array.from(new Set(BLOG_POSTS.flatMap((p) => p.tags)));
}
