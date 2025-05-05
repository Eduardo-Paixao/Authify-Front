
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = document.documentElement;
    const stored = Cookies.get('theme') as 'light' | 'dark' | null;

    if (stored === 'dark') {
      root.classList.add('dark');
      setTheme('dark');
    } else {
      root.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      Cookies.set('theme', 'light');
      setTheme('light');
    } else {
      root.classList.add('dark');
      Cookies.set('theme', 'dark');
      setTheme('dark');
    }
  };

  return { theme, toggleTheme };
}
