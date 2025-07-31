// This file is no longer used and can be deleted.
// The navigation functionality has been moved directly into the Header component.

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../context/useTranslation';
import { useUser } from '../../context/useUser.js';

export const Navigation = ({ currentPath, onLogoutClick }) => {
  const { translate } = useTranslation();
  const { name } = useUser();
  const isActivePage = currentPath === '/';
  const isArchivedPage = currentPath === '/archived';
  const isDetailPage = currentPath.startsWith('/notes/');

  return (
    <nav className="navigation">
      <ul>
        {
          !isActivePage && (
            <li>
              <Link to="/">{translate('home')}</Link>
            </li>
          )
        }
        {
          !isArchivedPage && (
            <li>
              <Link to="/archived">{translate('archived')}</Link>
            </li>
          )
        }
        {
          (isActivePage || isArchivedPage || isDetailPage) && (
            <li>
              <button
                onClick={onLogoutClick}
                className="nav-link-button"
              >
                {translate('logout')}
              </button>
            </li>
          )
        }
        {
          (isActivePage || isArchivedPage || isDetailPage) && (
            <li>
              {name}
            </li>
          )
        }
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  currentPath: PropTypes.string.isRequired,
  onLogoutClick: PropTypes.func.isRequired
};
