'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';
import { HiCheckCircle, HiLocationMarker, HiClock } from 'react-icons/hi';

const SOCIALS = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'soknaret@example.com',
    href: 'mailto:soknaret@example.com',
    color: '#6366f1',
    bg: 'bg-indigo-500/10',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/soknaret',
    href: 'https://github.com',
    color: '#ffffff',
    bg: 'bg-white/5',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/soknaret',
    href: 'https://linkedin.com',
    color: '#3b82f6',
    bg: 'bg-blue-500/10',
  },
  {
    icon: FaTelegram,
    label: 'Telegram',
    value: '@soknaret',
    href: 'https://t.me/soknaret',
    color: '#3b82f6',
    bg: 'bg-blue-500/10',
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
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('loading');

    // Simulate submission (replace with your API/Supabase call)
    await new Promise((r) => setTimeout(r, 1800));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) setErrors((prev) => ({ ...prev, [name]: '' }));
  }

  const inputClass = (field: keyof FormState) =>
    `w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-gray-600 text-sm transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 ${
      errors[field] ? 'border-red-500/50 focus:border-red-500/50' : 'border-white/8 focus:border-indigo-500/40'
    }`;

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute right-1/4 top-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">Let&apos;s connect</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info card */}
            <div className="glass rounded-2xl p-6 border border-white/5 space-y-5">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <HiLocationMarker className="text-indigo-400 flex-shrink-0" size={16} />
                <span>Phnom Penh, Cambodia</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <HiClock className="text-violet-400 flex-shrink-0" size={16} />
                <span>UTC+7 (Indochina Time)</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-4 h-4 rounded-full bg-emerald-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </span>
                <span className="text-emerald-400">Available for freelance & internships</span>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {SOCIALS.map(({ icon: Icon, label, value, href, color, bg }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-white/5 hover:border-indigo-500/20 transition-all duration-200 group"
                >
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} color={color} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-600 uppercase tracking-wider">{label}</p>
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors truncate">{value}</p>
                  </div>
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
            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/5">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <HiCheckCircle className="text-emerald-400 mb-4" size={56} />
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors duration-200"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Kim Soknaret"
                        className={inputClass('name')}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">Email *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass('email')}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">Subject</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project collaboration, internship inquiry..."
                      className={inputClass('subject')}
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project or inquiry..."
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-shadow duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
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
