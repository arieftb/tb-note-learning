import PropTypes from 'prop-types';

export const ErrorMessage = ({
  message,
  className = 'error-message'
}) => {
  if (!message) return null;

  return (
    <div className={className}>
      {message}
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string
};

ErrorMessage.defaultProps = {
  message: '',
  className: 'error-message'
};