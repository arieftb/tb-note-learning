import PropTypes from 'prop-types';

export const LoadingIndicator = ({ className = '', size = 'medium' }) => {
  const sizeClass = `loading-indicator--${size}`;

  return (
    <div className={`loading-indicator ${sizeClass} ${className}`}>
      <div className="loading-indicator__spinner"></div>
      <span className="loading-indicator__text">Loading...</span>
    </div>
  );
};

LoadingIndicator.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

LoadingIndicator.defaultProps = {
  className: '',
  size: 'medium'
};