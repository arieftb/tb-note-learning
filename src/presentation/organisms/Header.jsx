import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navigation } from '../molecules/Navigation.jsx';

export const Header = ({ currentPath }) => {
  const isRegisterPage = currentPath === '/register';
  const isLoginPage = currentPath === '/login';

  return (
    <header className="app-header">
      <h1><Link to="/">TB Note</Link></h1>
      {!isRegisterPage && !isLoginPage && (
        <Navigation currentPath={
          currentPath
        }/>
      )}
    </header>
  );
};

Header.propTypes = {
  currentPath: PropTypes.string.isRequired,
};
