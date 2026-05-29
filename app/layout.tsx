import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import LoadingScreen from '@/components/LoadingScreen';

export const metadata: Metadata = {
  title: 'Kim Soknaret | Data Science & Backend Developer',
  description:
    "Kim Soknaret's personal portfolio — Data Science Student, Backend Developer, and Web Developer passionate about building intelligent, scalable applications.",
  keywords: [
    'portfolio',
    'data science',
    'backend developer',
    'web developer',
    'Kim Soknaret',
    'Python',
    'Django',
    'Next.js',
    'machine learning',
  ],
  authors: [{ name: 'Kim Soknaret' }],
  openGraph: {
    title: 'Kim Soknaret | Data Science & Backend Developer',
    description: 'Data Science Student | Backend Developer | Web Developer',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0a0a0f] text-white antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LoadingScreen />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
