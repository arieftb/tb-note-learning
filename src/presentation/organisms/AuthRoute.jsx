import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import PropTypes from 'prop-types';

/**
 * A reusable route component that handles both protected and unprotected routes
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @param {boolean} props.requireAuth - If true, redirects to login when not authenticated
 * @param {string} props.redirectTo - Path to redirect to when authentication condition is not met
 * @returns {React.ReactNode} - The rendered component
 */
export function AuthRoute ({ children, requireAuth = false, redirectTo = requireAuth ? '/login' : '/' }) {
  const { isAuthenticated } = useAuth();

  if ((requireAuth && !isAuthenticated) || (!requireAuth && isAuthenticated)) {
    return <Navigate
      to={redirectTo}
      replace
    />;
  }

  return children;
}

AuthRoute.propTypes = {
  children: PropTypes.node.isRequired,
  requireAuth: PropTypes.bool,
  redirectTo: PropTypes.string
};