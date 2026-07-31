import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { ColorThemeProvider } from '@/lib/theme-context';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';

export const metadata: Metadata = {
  title: {
    default: 'Kim Soknaret — AI Engineer',
    template: '%s · Kim Soknaret',
  },
  description:
    'Kim Soknaret — AI Engineer building web, ML, and data-driven applications. A personal digital laboratory for building, experimenting, and writing about software.',
  keywords: [
    'Kim Soknaret',
    'AI Engineer',
    'developer',
    'portfolio',
    'machine learning',
    'data science',
    'blog',
    'projects',
    'TypeScript',
    'Next.js',
    'React',
    'Python',
  ],
  authors: [{ name: 'Kim Soknaret' }],
  creator: 'Kim Soknaret',
  openGraph: {
    title: 'Kim Soknaret — AI Engineer',
    description: 'AI Engineer building web, ML, and data-driven applications — experimenting, building, and sharing.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Kim Soknaret',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@soknaret',
    title: 'Kim Soknaret — AI Engineer',
    description: 'AI Engineer building web, ML, and data-driven applications — experimenting, building, and sharing.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--bg)] text-[var(--fg)] antialiased scanlines">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ColorThemeProvider>
            <CursorGlow />
            <Header />
            <main className="relative z-10 pt-16 min-h-screen">
              {children}
            </main>
            <Footer />
          </ColorThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
