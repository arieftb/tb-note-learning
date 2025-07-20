import PropTypes from 'prop-types';
import { useTranslation } from '../../context/useTranslation';

export const LoadingIndicator = ({ className = '', size = 'medium' }) => {
  const sizeClass = `loading-indicator--${size}`;
  const { translate } = useTranslation();

  return (
    <div className={`loading-indicator ${sizeClass} ${className}`}>
      <div className="loading-indicator__spinner"></div>
      <span className="loading-indicator__text">{translate('loading')}</span>
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
