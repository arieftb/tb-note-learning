import { createContext } from 'react';

// Create the language context with default value to ensure correct typing
export const LanguageContext = createContext({
  language: 'id', // Default to Indonesian
  toggleLanguage: () => {},
});