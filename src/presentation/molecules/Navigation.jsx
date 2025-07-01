// This file is no longer used and can be deleted.
// The navigation functionality has been moved directly into the Header component.

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Navigation = ({ currentPath, onLogoutClick }) => {
  const isActivePage = currentPath === '/';
  const isArchivedPage = currentPath === '/archived';
  const isAddNewPage = currentPath === '/notes/new';

  return (
    <nav className="navigation">
      <ul>
        {
          !isActivePage && (
            <li>
              <Link to="/">Active</Link>
            </li>
          )
        }
        {
          !isArchivedPage && (
            <li>
              <Link to="/archived">Archived</Link>
            </li>
          )
        }
        {
          (isAddNewPage || isActivePage || isArchivedPage) && (
            <li>
              <button
                onClick={onLogoutClick}
                className="nav-link-button"
              >
                Logout
              </button>
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
