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
    title: 'AI Agent for Multi-Branch Business Management System',
    description: 'An AI agent that centralizes sales, inventory, and staff data across business branches and answers management questions in natural language.',
    longDescription:
      'Built an AI agent that centralizes sales, inventory, and staff data from multiple business branches into a single PostgreSQL warehouse with scheduled ETL jobs. Implemented a natural-language query assistant that converts management questions — "which branch has the highest sales this month?", "which branch needs restocking?" — into validated SQL and returns answers with supporting charts. Developed a performance analytics layer comparing branches on revenue, growth, and stock turnover, flagging low-inventory and underperforming locations automatically. Created a React/Next.js dashboard with data visualization and automated weekly/monthly report generation delivered to managers via email and chat.',
    tags: ['Python', 'PostgreSQL', 'FastAPI', 'Next.js', 'Recharts'],
    category: 'AI / Data',
    colorTheme: 'cyan',
    status: 'live',
    year: 2026,
    featured: true,
  },
  {
    id: '2',
    title: 'AI Face Skin Condition Analysis & Skincare Recommendation',
    description: 'A real-time skin condition classifier (97.76% validation accuracy) that recommends skincare products from live video.',
    longDescription:
      'Trained a skin condition classification model (Acne, Dry, Oily, Spots, Wrinkles) using EfficientNetV2 / EfficientNetV2-B0, achieving 97.76% validation accuracy. Tested skincare product suitability using the trained model, then built a real-time system that scans faces from video and recommends skincare based on the detected skin condition.',
    tags: ['TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn', 'Next.js', 'Django', 'FastAPI'],
    category: 'AI / ML',
    colorTheme: 'emerald',
    status: 'live',
    year: 2025,
    featured: true,
  },
  {
    id: '3',
    title: 'Employee Attrition Prediction',
    description: 'A comparative ML study predicting employee attrition from workforce data.',
    longDescription:
      'Analyzed a workforce dataset to understand employee attrition patterns, then built and compared multiple models — Logistic Regression, Random Forest, and Linear Regression. Fine-tuned the best-performing model and evaluated its accuracy.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter Notebook'],
    category: 'Data Analytics',
    colorTheme: 'purple',
    status: 'archived',
    year: 2025,
    featured: true,
  },
  {
    id: '4',
    title: 'Personal Portfolio Website',
    description: 'This site — a personal portfolio and digital laboratory built with Next.js, Tailwind CSS, and OKLCH color theming.',
    longDescription:
      'A fully custom portfolio and lab built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Features include OKLCH color theming with 5 swappable color themes, dark/light mode, a cursor glow effect, and a zero-CMS blog system.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OKLCH'],
    category: 'Web',
    githubUrl: 'https://github.com/Ret-Eleven/Naret_-Portfolio',
    liveUrl: '/',
    colorTheme: 'golden',
    status: 'live',
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
