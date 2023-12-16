import { useState, useEffect } from 'react';

const useDarkToggle = () => {
  const systemprefer = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;
  const root = window.document.documentElement;
  const [theme, setTheme] = useState(localStorage.theme);
  console.log(systemprefer);
  useEffect(() => {
    if (systemprefer && localStorage.theme === undefined) {
      setTheme('dark');
    }
  }, []);
  useEffect(() => {
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', theme);
    } else {
      root.classList.remove('dark');
      localStorage.removeItem('theme');
    }
  }, [theme, systemprefer]);

  return [theme, setTheme];
};

export default useDarkToggle;
