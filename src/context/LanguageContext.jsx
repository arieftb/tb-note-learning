import { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { LanguageContext } from './LanguageContext.js';

// Language provider component
export const LanguageProvider = ({ children }) => {
  // Initialize the language from localStorage or default to 'id' (Indonesian)
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'id';
  });

  // Update the language in localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    // Apply a language attribute to the document html element
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  // Toggle between Indonesian and English languages - memoized to maintain a stable identity
  const toggleLanguage = useCallback(() => {
    setLanguage(prevLanguage => prevLanguage === 'id' ? 'en' : 'id');
  }, []);

  // Value to be provided by the context - memoized to maintain stable identity
  const value = useMemo(() => ({
    language,
    toggleLanguage,
  }), [language, toggleLanguage]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};