import { createContext } from 'react';

// Create the theme context with default value to ensure correct typing
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});
