import { useLanguage } from './useLanguage';
import translations from '../data/translations';

/**
 * Custom hook to access translations based on the current language
 * @returns {Object} An object with a translate function and the current language
 */
export const useTranslation = () => {
  const { language } = useLanguage();

  /**
   * Translate a key to the current language
   * @param {string} key - The translation key to look up
   * @returns {string} The translated text
   */
  const translate = (key) => {
    // Get the translations for the current language
    const currentTranslations = translations[language];

    // Return the translation if it exists, otherwise return the key
    return currentTranslations[key] || key;
  };

  return {
    translate,
    language,
  };
};