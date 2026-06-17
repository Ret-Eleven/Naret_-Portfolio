# Naret_Portfolio 🚀

A modern, responsive personal portfolio website for **Kim Soknaret** — Data Science Student, Backend Developer, and Web Developer.

---

## ✨ Features

- **Dark / Light mode** toggle with smooth transitions
- **Interactive particles background** with mouse repel & connected lines
- **Animated loading screen** (session-gated, shows only on first visit)
- **Floating glassmorphism navbar** with active section indicator & mobile menu
- **Scroll-triggered animations** via Framer Motion & Intersection Observer
- **Contact form** with client-side validation and success state
- **Fully responsive** — desktop, tablet, and mobile
- **SEO optimized** with Open Graph metadata
- **Fast performance** — static generation, ~21 kB page bundle

---

## 🛠️ Tech Stack

| Category       | Technology                          |
| -------------- | ----------------------------------- |
| Framework      | Next.js 14 (App Router)             |
| Language       | TypeScript                          |
| Styling        | Tailwind CSS 3                      |
| Animations     | Framer Motion 11                    |
| Icons          | react-icons v5                      |
| Theme          | next-themes                         |
| Scroll detect  | react-intersection-observer         |

---

## 📁 Project Structure

```
Naret_-Portfolio/
├── app/
│   ├── globals.css          # Custom scrollbar, glassmorphism utilities, base styles
│   ├── layout.tsx           # Root layout — ThemeProvider, SEO metadata
│   └── page.tsx             # Main page assembling all sections
├── components/
│   ├── LoadingScreen.tsx    # Animated NK logo + progress bar
│   ├── ParticlesBackground.tsx  # Canvas-based interactive particles
│   ├── Navbar.tsx           # Floating navbar with mobile hamburger menu
│   ├── ThemeToggle.tsx      # Dark / light mode switch
│   ├── Hero.tsx             # Hero section — intro, CTAs, social links
│   ├── About.tsx            # Bio, profile card, stats grid
│   ├── Skills.tsx           # Tech stack cards with animated progress bars
│   ├── Projects.tsx         # Project cards with filter, GitHub & demo links
│   ├── Experience.tsx       # Alternating learning timeline
│   ├── Contact.tsx          # Contact form + social links
│   └── Footer.tsx           # Minimal footer with copyright
├── lib/
│   └── utils.ts             # cn() — Tailwind class merging utility
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/naret-portfolio.git
cd Naret_-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## ⚙️ Customization

### 1. Personal Information

Update your real links and contact details in these files:

| File | What to change |
| ---- | -------------- |
| [components/Hero.tsx](components/Hero.tsx) | GitHub & LinkedIn URLs in `SOCIALS` array |
| [components/Contact.tsx](components/Contact.tsx) | Email, GitHub, LinkedIn, Telegram in `SOCIALS` array |
| [components/Footer.tsx](components/Footer.tsx) | Social links in `socials` array |
| [components/Experience.tsx](components/Experience.tsx) | Timeline dates and descriptions |
| [app/layout.tsx](app/layout.tsx) | SEO title, description, keywords |

### 2. Profile Photo

In [components/About.tsx](components/About.tsx), replace the initials block with a real image:

```tsx
// Replace this:
<div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 ...">
  <span className="text-4xl font-black text-white">KS</span>
</div>

// With this (add your photo to /public/):
import Image from 'next/image';
<Image src="/profile.jpg" alt="Kim Soknaret" width={112} height={112} className="rounded-2xl object-cover" />
```

### 3. Resume Download

Drop your `resume.pdf` into the `/public/` folder — the **Resume** button in the Hero section links to `/resume.pdf` automatically.

### 4. Contact Form Backend

The form currently simulates a submission. Connect it to a real backend by replacing the `setTimeout` in [components/Contact.tsx](components/Contact.tsx):

**Option A — Supabase:**
```ts
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
await supabase.from('messages').insert([form]);
```

**Option B — Resend / EmailJS / Formspree:**
```ts
await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) });
```

### 5. Projects

Edit the `PROJECTS` array in [components/Projects.tsx](components/Projects.tsx) to add, remove, or update your projects.

### 6. Skills

Edit the `SKILLS` array in [components/Skills.tsx](components/Skills.tsx) to adjust skill names, icons, levels, and categories.

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo directly at [vercel.com](https://vercel.com).

### Netlify

```bash
npm run build
# Deploy the .next/ output directory
```

---

## 📄 License

MIT License — feel free to use this as a template for your own portfolio.

---

## 👤 Author

**Kim Soknaret**
- GitHub: [@soknaret](https://github.com)
- LinkedIn: [linkedin.com/in/soknaret](https://linkedin.com)
- Email: soknaret@example.com

---

*Built with ❤️ using Next.js, TypeScript, Tailwind CSS & Framer Motion*
