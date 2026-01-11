// Hide eslint error;
/* eslint-disable react-refresh/only-export-components */

import { useEffect, useContext, useState, createContext } from 'react';

const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light',
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle Change theme;
  function handleToggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ handleToggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error('useTheme must be used within a ThemeContextProvider!');

  return context;
};
