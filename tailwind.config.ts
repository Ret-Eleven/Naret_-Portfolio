import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Geist Mono', 'Courier New', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.625rem',
        sm: '0.375rem',
        md: '0.625rem',
        lg: '0.875rem',
        xl: '1.125rem',
        '2xl': '1.5rem',
      },
      colors: {
        bg: 'var(--bg)',
        card: 'var(--bg-card)',
        fg: 'var(--fg)',
        'fg-muted': 'var(--fg-muted)',
        'fg-subtle': 'var(--fg-subtle)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        'accent-muted': 'var(--accent-muted)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
        shimmer: 'shimmer 1.8s infinite',
        fadeIn: 'fadeIn 0.6s ease forwards',
        fadeInUp: 'fadeInUp 0.6s ease forwards',
        scaleIn: 'scaleIn 0.5s ease forwards',
        blink: 'blink 1s step-start infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        fadeIn: {
          to: { opacity: '1' },
        },
        fadeInUp: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          to: { opacity: '1', transform: 'scale(1)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      maxWidth: {
        content: '68rem',
      },
      screens: {
        xs: '475px',
      },
    },
  },
  plugins: [],
};

export default config;
