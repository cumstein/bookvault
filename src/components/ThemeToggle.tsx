'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      disabled={!mounted}
      style={{
        opacity: mounted ? 1 : 0.5,
        pointerEvents: mounted ? 'auto' : 'none',
      }}
    >
      {!mounted ? (
        <span className="w-5 h-5 inline-block animate-pulse bg-gray-400 dark:bg-gray-600 rounded-full border-2 border-gray-300 dark:border-gray-700 shadow relative top-1" />
      ) : resolvedTheme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
