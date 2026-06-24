import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { ColorThemeProvider } from '@/lib/theme-context';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';

export const metadata: Metadata = {
  title: {
    default: 'EinCode — Digital Laboratory',
    template: '%s · EinCode',
  },
  description:
    'EinCode — a personal digital laboratory. Building, experimenting, and writing about software, design, and creative technology.',
  keywords: [
    'EinCode',
    'developer',
    'portfolio',
    'digital laboratory',
    'blog',
    'projects',
    'TypeScript',
    'Next.js',
    'React',
    'software engineering',
  ],
  authors: [{ name: 'EinCode' }],
  creator: 'EinCode',
  openGraph: {
    title: 'EinCode — Digital Laboratory',
    description: 'A personal digital laboratory — experimenting, building, and sharing.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EinCode',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@eincode',
    title: 'EinCode — Digital Laboratory',
    description: 'A personal digital laboratory — experimenting, building, and sharing.',
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
