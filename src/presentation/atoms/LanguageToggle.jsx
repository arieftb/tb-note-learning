import { useLanguage } from '../../context/useLanguage';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`language-toggle ${language === 'id' ? 'id-icon' : 'en-icon'}`}
      aria-label={`Switch to ${language === 'id' ? 'English' : 'Indonesian'} language`}
    >
      {language === 'id' ? 'EN' : 'ID'}
    </button>
  );
};