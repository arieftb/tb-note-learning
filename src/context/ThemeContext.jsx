import { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './ThemeContext.js';

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Initialize the theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Update the theme in localStorage when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    // Apply a theme class to the document body
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  // Toggle between light and dark themes - memoized to maintain a stable identity
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }, []);

  // Value to be provided by the context - memoized to maintain stable identity
  const value = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
