'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiLinkedin, FiMail, FiSend, FiExternalLink } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';
import { HiCheckCircle, HiLocationMarker, HiClock } from 'react-icons/hi';

const SOCIALS = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'kim.soknaret@gmail.com',
    href: 'mailto:kim.soknaret@gmail.com',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.06)',
    border: 'rgba(236,72,153,0.15)',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/Ret-Eleven',
    href: 'https://github.com/Ret-Eleven',
    color: '#ffffff',
    bg: 'rgba(255,255,255,0.04)',
    border: 'rgba(255,255,255,0.1)',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'kim-soknaret-naret',
    href: 'https://www.linkedin.com/in/kim-soknaret-naret-9772b7356',
    color: '#00d4ff',
    bg: 'rgba(0,212,255,0.06)',
    border: 'rgba(0,212,255,0.15)',
  },
  {
    icon: FaTelegram,
    label: 'Telegram',
    value: '@iamtenz18',
    href: 'https://t.me/iamtenz18',
    color: '#00d4ff',
    bg: 'rgba(0,212,255,0.05)',
    border: 'rgba(0,212,255,0.12)',
  },
];

type FormState = { name: string; email: string; subject: string; message: string };
type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate() {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1800));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) setErrors((prev) => ({ ...prev, [name]: '' }));
  }

  const inputBase = 'w-full px-4 py-3 rounded-lg text-white placeholder-gray-600 text-sm transition-colors duration-200 focus:outline-none';
  const inputStyle = (field: keyof FormState) => ({
    background: 'rgba(26,26,26,0.8)',
    border: errors[field] ? '1px solid rgba(239,68,68,0.5)' : '1px solid rgba(255,255,255,0.08)',
    boxShadow: 'none',
  });
  const inputFocusClass = 'focus:ring-1 focus:ring-[#ec4899]/40';

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute right-1/4 top-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(236,72,153,0.04)' }} />
      <div className="absolute left-1/4 bottom-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(0,212,255,0.03)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-widest uppercase mb-3 font-mono" style={{ color: '#ec4899' }}>Let&apos;s connect</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left — Info + social cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Status card */}
            <div className="bento-card p-5 space-y-4">
              <p className="text-xs tracking-widest uppercase font-mono" style={{ color: '#ec4899' }}>{'// availability'}</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <HiLocationMarker size={15} style={{ color: '#ec4899', flexShrink: 0 }} />
                  <span>Phnom Penh, Cambodia</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <HiClock size={15} style={{ color: '#00d4ff', flexShrink: 0 }} />
                  <span>UTC+7 — Indochina Time</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to freelance &amp; internships
                </div>
              </div>
            </div>

            {/* Social 2×2 grid */}
            <div className="grid grid-cols-2 gap-3">
              {SOCIALS.map(({ icon: Icon, label, value, href, color, bg, border }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.07 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="group relative flex flex-col gap-3 p-4 rounded-xl transition-all duration-300"
                  style={{ background: bg, border: `1px solid ${border}` }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: `${color}14`, border: `1px solid ${color}25` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-600 uppercase tracking-wider font-mono mb-0.5">{label}</p>
                    <p className="text-xs text-gray-300 group-hover:text-white transition-colors truncate">{value}</p>
                  </div>
                  <FiExternalLink
                    size={11}
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-40 transition-opacity duration-200"
                    style={{ color }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bento-card p-6 sm:p-8 h-full">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' }}
                  >
                    <HiCheckCircle className="text-emerald-400" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:opacity-90"
                    style={{ background: '#ec4899' }}
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-xs tracking-widest uppercase mb-5 font-mono" style={{ color: '#ec4899' }}>{'// send_message()'}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider font-mono">Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Kim Soknaret"
                        className={`${inputBase} ${inputFocusClass}`}
                        style={inputStyle('name')}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider font-mono">Email *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`${inputBase} ${inputFocusClass}`}
                        style={inputStyle('email')}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider font-mono">Subject</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project collaboration, internship inquiry..."
                      className={`${inputBase} ${inputFocusClass}`}
                      style={inputStyle('subject')}
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider font-mono">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project or inquiry..."
                      className={`${inputBase} ${inputFocusClass} resize-none`}
                      style={inputStyle('message')}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-lg font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                    style={{ background: '#ec4899', boxShadow: '0 4px 20px rgba(236,72,153,0.25)' }}
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
