'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight, Download } from 'lucide-react'
import { useScroll, motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaTelegram } from 'react-icons/fa'

const TECH_STACK = [
  'Python', 'JavaScript', 'TypeScript', 'FastAPI', 'React',
  'Next.js', 'PostgreSQL', 'Docker', 'Django', 'Git',
]

const STATS = [
  { value: '3+', label: 'Years Learning' },
  { value: '10+', label: 'Projects Built' },
  { value: '11+', label: 'Technologies' },
]

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <div className="overflow-x-hidden">
        <section id="home">
          <div className="relative py-24 md:pb-32 lg:pb-36 lg:pt-72">
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                {/* Status badge */}
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-gray-300"
                  style={{ background: 'rgba(26,26,26,0.8)', border: '1px solid rgba(236,72,153,0.2)', backdropFilter: 'blur(12px)' }}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to opportunities
                </span>

                <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-10 xl:text-7xl font-black leading-[1.1] tracking-tight">
                  <span className="text-white">Hi, I&apos;m </span>
                  <span className="gradient-text">Kim Soknaret</span>
                </h1>

                <p className="mt-4 text-lg font-semibold font-mono" style={{ color: '#00d4ff' }}>
                  Data Science Student &amp; Backend Developer
                </p>

                <p className="mt-4 max-w-2xl text-balance text-lg text-gray-400 leading-relaxed">
                  Passionate about turning data into insights and building scalable applications.
                  Currently studying Data Science at RUPP while crafting elegant digital experiences.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-full pl-5 pr-3 text-base bg-pink-500 hover:bg-pink-600 text-white border-0">
                    <Link href="#projects">
                      <span className="text-nowrap">View My Projects</span>
                      <ChevronRight className="ml-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-full px-5 text-base bg-transparent border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300">
                    <Link href="#contact">
                      <span className="text-nowrap">Contact Me</span>
                    </Link>
                  </Button>
                </div>

                {/* Social links */}
                <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
                  {[
                    { href: 'https://github.com/Ret-Eleven', Icon: FiGithub, label: 'GitHub' },
                    { href: 'https://www.linkedin.com/in/kim-soknaret-naret-9772b7356', Icon: FiLinkedin, label: 'LinkedIn' },
                    { href: 'https://t.me/iamtenz18', Icon: FaTelegram, label: 'Telegram' },
                  ].map(({ href, Icon, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-white transition-colors duration-200"
                      style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>

                {/* Stats */}
                <div
                  className="mt-8 grid grid-cols-3 gap-6 pt-6 max-w-xs"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                >
                  {STATS.map(({ value, label }) => (
                    <div key={label} className="text-center lg:text-left">
                      <p className="text-2xl font-black gradient-text">{value}</p>
                      <p className="text-xs text-gray-600 font-mono mt-0.5 leading-tight">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Background video */}
            <div className="aspect-[2/3] absolute inset-1 overflow-hidden rounded-3xl border border-black/10 sm:aspect-video lg:rounded-[3rem] dark:border-white/5 -z-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="size-full object-cover opacity-30 dark:opacity-25 dark:lg:opacity-60"
                src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
              />
              {/* Dark overlay to keep text readable */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        </section>

        {/* Tech stack slider */}
        <section className="bg-black pb-2">
          <div className="group relative m-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:border-white/10 md:pr-6">
                <p className="text-end text-sm text-gray-500">Technologies I work with</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider durationOnHover={20} duration={30} gap={48}>
                  {TECH_STACK.map((tech) => (
                    <div key={tech} className="flex items-center justify-center">
                      <span
                        className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-mono font-medium text-gray-300"
                        style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)' }}
                      >
                        {tech}
                      </span>
                    </div>
                  ))}
                </InfiniteSlider>

                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black" />
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollYProgress } = useScroll()

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrolled(latest > 0.05)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <header>
      <nav
        data-state={menuState ? 'active' : undefined}
        className="group fixed z-50 w-full pt-2">
        <div className={cn(
          'mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12',
          scrolled && 'bg-black/80 backdrop-blur-2xl'
        )}>
          <motion.div
            className={cn(
              'relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6',
              scrolled && 'lg:py-4'
            )}>
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              {/* Logo */}
              <Link href="#home" aria-label="home" className="flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #ec4899, #00d4ff)', boxShadow: '0 4px 16px rgba(236,72,153,0.35)' }}
                >
                  <span className="text-sm font-black text-white">KS</span>
                </div>
                <span className="hidden sm:block text-sm font-mono" style={{ color: '#00d4ff' }}>
                  <span className="text-white/40">/</span> portfolio
                </span>
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 text-gray-400 lg:hidden">
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              {/* Desktop links */}
              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-white block duration-150">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right panel (mobile dropdown + desktop buttons) */}
            <div className="bg-black/90 group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/10 p-6 shadow-2xl shadow-black/40 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              {/* Mobile nav links */}
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-white block duration-150"
                        onClick={() => setMenuState(false)}>
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA buttons */}
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  size="sm"
                  className="bg-transparent border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white">
                  <Link href="/resume.pdf" download>
                    <Download className="mr-1.5 h-3.5 w-3.5" />
                    <span>Resume</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-pink-500 hover:bg-pink-600 text-white border-0">
                  <Link href="#contact">
                    <span>Hire Me</span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  )
}
