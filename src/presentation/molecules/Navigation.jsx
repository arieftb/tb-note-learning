import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Navigation = ({ currentPath }) => {
  return (
    <nav className="app-navigation">
      <ul className="nav-list">
        <li className={currentPath === '/' ? 'nav-item active' : 'nav-item'}>
          <Link to="/" className="nav-link">Active</Link>
        </li>
        <li className={currentPath === '/archived' ? 'nav-item active' : 'nav-item'}>
          <Link to="/archived" className="nav-link">Archived</Link>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  currentPath: PropTypes.string.isRequired,
};
