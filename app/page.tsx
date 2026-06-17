import { HeroSection } from '@/components/blocks/galaxy-interactive-hero-section';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
