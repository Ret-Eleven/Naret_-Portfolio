'use client';

import { useEffect, useState } from 'react';

const PHRASES = [
  'building interfaces',
  'exploring systems',
  'breaking barriers',
  'forging ideas',
  'crafting code',
];

export default function HeroTypewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const phrase = PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 100);
    } else if (!deleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length - 1)), 50);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % PHRASES.length);
    }
    return () => clearTimeout(timeout);
  }, [mounted, displayed, deleting, phraseIndex]);

  if (!mounted) {
    return (
      <span className="gradient-text">{PHRASES[0]}</span>
    );
  }

  return (
    <span className="gradient-text">
      {displayed}
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
}
