'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type ColorTheme = 'cyan' | 'golden' | 'purple' | 'emerald' | 'rose';

interface ThemeContextValue {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  colorTheme: 'cyan',
  setColorTheme: () => {},
});

export function ColorThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorTheme, setColorThemeState] = useState<ColorTheme>('cyan');

  useEffect(() => {
    const stored = localStorage.getItem('color-theme') as ColorTheme | null;
    if (stored) {
      setColorThemeState(stored);
      document.documentElement.setAttribute('data-color-theme', stored);
    }
  }, []);

  function setColorTheme(theme: ColorTheme) {
    setColorThemeState(theme);
    document.documentElement.setAttribute('data-color-theme', theme);
    localStorage.setItem('color-theme', theme);
  }

  return (
    <ThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useColorTheme() {
  return useContext(ThemeContext);
}

export const COLOR_THEMES: { id: ColorTheme; label: string; hue: number }[] = [
  { id: 'cyan',    label: 'Cyan',    hue: 170 },
  { id: 'golden',  label: 'Golden',  hue: 75  },
  { id: 'purple',  label: 'Purple',  hue: 290 },
  { id: 'emerald', label: 'Emerald', hue: 145 },
  { id: 'rose',    label: 'Rose',    hue: 10  },
];
