import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navigation } from '../molecules/Navigation.jsx';
import { ThemeToggle } from '../atoms/ThemeToggle';
import { LanguageToggle } from '../atoms/LanguageToggle';
import { useTranslation } from '../../context/useTranslation';

export const Header = ({ currentPath, onLogoutClick }) => {
  const { translate } = useTranslation();
  const isRegisterPage = currentPath === '/register';
  const isLoginPage = currentPath === '/login';

  return (
    <header className="app-header">
      <h1><Link to="/">{translate('appName')}</Link></h1>
      <div className="header-right">
        {!isRegisterPage && !isLoginPage && (
          <Navigation currentPath={
            currentPath
          } onLogoutClick={
            onLogoutClick
          }/>
        )}
        <LanguageToggle/>
        <ThemeToggle/>
      </div>
    </header>
  );
};

Header.propTypes = {
  currentPath: PropTypes.string.isRequired,
  onLogoutClick: PropTypes.func.isRequired
};
