export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  colorTheme: 'cyan' | 'golden' | 'purple' | 'emerald' | 'rose';
  status: 'live' | 'wip' | 'archived';
  year: number;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'EinCode Lab',
    description: 'This site — a personal digital laboratory built with Next.js, Tailwind CSS, and OKLCH color theming.',
    longDescription:
      'A fully custom portfolio and lab built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Features include OKLCH color theming with 5 swappable color themes, dark/light mode, cursor glow effect, and a zero-CMS blog system.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OKLCH'],
    category: 'Web',
    githubUrl: 'https://github.com/Ret-Eleven/eincode-lab',
    liveUrl: '/',
    colorTheme: 'cyan',
    status: 'live',
    year: 2026,
    featured: true,
  },
  {
    id: '2',
    title: 'Codeforge',
    description: 'A browser-based code editor with real-time syntax highlighting, multiple themes, and collaborative editing via WebSockets.',
    longDescription:
      'A Monaco-based code editor running in the browser with real-time collaboration powered by Y.js CRDTs and WebSocket rooms. Supports 12 languages, 8 editor themes, and has a shareable URL model for pair programming sessions.',
    tags: ['TypeScript', 'Monaco Editor', 'Y.js', 'WebSockets', 'React'],
    category: 'Developer Tools',
    githubUrl: 'https://github.com/Ret-Eleven/codeforge',
    liveUrl: 'https://codeforge.eincode.dev',
    colorTheme: 'emerald',
    status: 'live',
    year: 2025,
    featured: true,
  },
  {
    id: '3',
    title: 'Palette Engine',
    description: 'An OKLCH color palette generator. Input a base hue, get a complete design system token set.',
    longDescription:
      'Generates accessible color palettes in OKLCH color space. Input a base hue and the engine produces a full token set (50–950 shades) with WCAG contrast ratios pre-calculated. Exports to CSS custom properties, Tailwind config, or Figma variables.',
    tags: ['OKLCH', 'Color Theory', 'TypeScript', 'CSS', 'React'],
    category: 'Design Tools',
    githubUrl: 'https://github.com/Ret-Eleven/palette-engine',
    liveUrl: 'https://palette.eincode.dev',
    colorTheme: 'purple',
    status: 'live',
    year: 2025,
    featured: true,
  },
  {
    id: '4',
    title: 'Typefast',
    description: 'A minimal typing speed trainer with code snippets from real open-source projects.',
    longDescription:
      'Typing trainer focused on developers — uses real code from popular open-source repositories as the source text. Tracks WPM, accuracy, and time-per-character. Built with React and stores progress locally.',
    tags: ['React', 'TypeScript', 'localStorage'],
    category: 'Productivity',
    githubUrl: 'https://github.com/Ret-Eleven/typefast',
    liveUrl: 'https://typefast.eincode.dev',
    colorTheme: 'golden',
    status: 'live',
    year: 2025,
    featured: false,
  },
  {
    id: '5',
    title: 'logpipe',
    description: 'A zero-dependency Node.js structured logging library with pluggable transports.',
    longDescription:
      'Structured logging for Node.js with a clean API and pluggable transport system. Ships with console, file, and HTTP transports out of the box. Zero dependencies in the core package. Written in TypeScript with full type inference on log fields.',
    tags: ['Node.js', 'TypeScript', 'logging', 'npm'],
    category: 'Open Source',
    githubUrl: 'https://github.com/Ret-Eleven/logpipe',
    colorTheme: 'rose',
    status: 'live',
    year: 2024,
    featured: false,
  },
  {
    id: '6',
    title: 'Flow State',
    description: 'A Pomodoro timer with ambient sound mixing — rain, white noise, and café ambience.',
    longDescription:
      'Productivity timer built around the Pomodoro technique with Web Audio API-based ambient sound engine. Mix up to 4 sound layers simultaneously with independent volume controls. Tracks sessions and shows daily streaks.',
    tags: ['Web Audio API', 'React', 'TypeScript', 'PWA'],
    category: 'Productivity',
    githubUrl: 'https://github.com/Ret-Eleven/flow-state',
    liveUrl: 'https://flowstate.eincode.dev',
    colorTheme: 'emerald',
    status: 'wip',
    year: 2026,
    featured: false,
  },
];

export const PROJECT_CATEGORIES = Array.from(new Set(PROJECTS.map((p) => p.category)));

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  return PROJECTS.filter((p) => p.category === category);
}
